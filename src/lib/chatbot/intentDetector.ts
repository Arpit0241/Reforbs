/**
 * Deterministic Intent Detection and Entity Extraction
 *
 * Implements a strict, multi-stage question analyzer using explicit regex patterns,
 * word boundaries, entity extraction, and question structure analysis.
 *
 * Prevents generic keyword matches from overriding specific customer intent.
 */

export type CustomerIntent =
  | "COUPLES_POLICY"
  | "BUILDING_CAPACITY"
  | "ROOM_PRIVACY"
  | "NEAREST_LOCATION"
  | "UNSPECIFIED_COLLEGE"
  | "UNSPECIFIED_OFFICE"
  | "CHEAPEST_PRICE_COMPARISON"
  | "RENT_PRICING"
  | "SECURITY_DEPOSIT"
  | "AVAILABILITY_VACANCIES"
  | "AMENITIES"
  | "SAFETY_CLEANLINESS_MAINTENANCE"
  | "BOOKING_RESERVATION"
  | "MINIMUM_STAY_LEASE"
  | "PROPERTY_SPECIFIC"
  | "PROPERTY_DIRECTORY"
  | "CONTACT_SUPPORT"
  | "VISIT_TOUR"
  | "FOOD_MEALS"
  | "RULES_RESTRICTIONS"
  | "DOCUMENTS_KYC"
  | "CANCELLATION_REFUND"
  | "WHO_IS_REFORBS_FOR"
  | "DIFFERENCE_FROM_HOSTEL"
  | "OFF_TOPIC"
  | "GENERAL_INQUIRY";

export interface ExtractedEntities {
  property?: string;
  location?: string;
  college?: string;
  targetAmenity?: string;
}

export interface IntentDetectionResult {
  intent: CustomerIntent;
  confidence: number;
  entities: ExtractedEntities;
  matchedPattern?: string;
  secondaryContext?: string;
}

/**
 * Normalizes user input for pattern matching
 */
export function cleanInputText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Extract named properties recognized by Reforbs
 */
export function extractPropertyEntity(normalized: string): string | undefined {
  if (/\bshubh\s+gateway\b/.test(normalized)) return "Shubh Gateway";
  if (/\b(reforbs\s+living\s+)?sakore\s+nagar\b/.test(normalized)) return "Reforbs Living Sakore Nagar";
  if (/\bmoksha\b/.test(normalized)) return "Moksha";
  if (/\bvipasana\b/.test(normalized)) return "Vipasana";
  if (/\bshubh\s+nirvana\b/.test(normalized)) return "Shubh Nirvana";
  return undefined;
}

/**
 * Extract external or local locations mentioned in question
 */
export function extractLocationEntity(normalized: string): string | undefined {
  const matchKondhwa = normalized.match(/\bkondhwa\b/);
  if (matchKondhwa) return "Kondhwa";

  const matchHinjewadi = normalized.match(/\bhinjewadi\b/);
  if (matchHinjewadi) return "Hinjewadi";

  const matchVimanNagar = normalized.match(/\bviman\s+nagar\b/);
  if (matchVimanNagar) return "Viman Nagar";

  const matchSakoreNagar = normalized.match(/\bsakore\s+nagar\b/);
  if (matchSakoreNagar) return "Sakore Nagar";

  const matchWakad = normalized.match(/\bwakad\b/);
  if (matchWakad) return "Wakad";

  const matchKothrud = normalized.match(/\bkothrud\b/);
  if (matchKothrud) return "Kothrud";

  const matchBaner = normalized.match(/\bbaner\b/);
  if (matchBaner) return "Baner";

  const matchAirport = normalized.match(/\b(pune\s+)?airport\b/);
  if (matchAirport) return "Pune Airport";

  const matchStation = normalized.match(/\b(pune\s+)?station\b/);
  if (matchStation) return "Pune Railway Station";

  // Match general "near <word>"
  const generalNear = normalized.match(/\b(?:near|close\s+to|around)\s+([a-z]+(?:\s+[a-z]+)?)\b/);
  if (generalNear) {
    const candidate = generalNear[1].trim();
    if (
      /\b(?:me|here|my|college|office|campus|workplace|university|school)\b/.test(candidate)
    ) {
      return undefined;
    }
    return candidate.charAt(0).toUpperCase() + candidate.slice(1);
  }

  return undefined;
}

/**
 * Extract college entities mentioned in question
 */
export function extractCollegeEntity(normalized: string): string | undefined {
  if (/\b(symbiosis\s+law\s+school|sls)\b/.test(normalized)) return "Symbiosis Law School (SLS)";
  if (/\bscms\b/.test(normalized)) return "SCMS Pune";
  if (/\bsymbiosis\b/.test(normalized)) return "Symbiosis";
  if (/\b(college|campus|university)\b/.test(normalized)) return "College";
  return undefined;
}

/**
 * Extract specific amenity mentioned in question
 */
export function extractAmenityEntity(normalized: string): string | undefined {
  if (/\b(wi-?fi|internet|broadband|wireless)\b/.test(normalized)) return "Wi-Fi";
  if (/\b(laundry|washing\s+machine|washing\s+clothes)\b/.test(normalized)) return "Laundry";
  if (/\b(parking|car\s+parking|bike\s+parking|vehicle)\b/.test(normalized)) return "Parking";
  if (/\b(cleaning|clean|housekeeping|maid|sweeper)\b/.test(normalized)) return "Daily Cleaning";
  if (/\b(kitchen|private\s+kitchen|cooking)\b/.test(normalized)) return "Kitchen";
  if (/\b(tv|television)\b/.test(normalized)) return "TV";
  if (/\b(work\s+desks?|study\s+desks?|workspace)\b/.test(normalized)) return "Work Desks";
  if (/\b(living\s+area|lounge)\b/.test(normalized)) return "Living Area";
  return undefined;
}

/**
 * Main Deterministic Intent Detection Engine
 */
export function detectCustomerIntent(rawQuery: string): IntentDetectionResult {
  const normalized = cleanInputText(rawQuery);
  const entities: ExtractedEntities = {
    property: extractPropertyEntity(normalized),
    location: extractLocationEntity(normalized),
    college: extractCollegeEntity(normalized),
    targetAmenity: extractAmenityEntity(normalized),
  };

  // -------------------------------------------------------------
  // Stage 1: Explicit Off-Topic Queries
  // -------------------------------------------------------------
  const offTopicPatterns = [
    /\bweather\b/,
    /\btemperature\b/,
    /\brecipe\b/,
    /\bmovie\b/,
    /\bsong\b/,
    /\bcricket\b/,
    /\bfootball\b/,
    /\bbitcoin\b/,
    /\bcrypto\b/,
    /\bstock\s+market\b/,
    /\bpresident\b/,
    /\bcapital\s+of\b/,
    /\btell\s+me\s+a\s+joke\b/,
    /\bwho\s+won\b/,
    /\bunrelated\s+to\s+accommodation\b/,
  ];

  if (offTopicPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "OFF_TOPIC",
      confidence: 1.0,
      entities,
      matchedPattern: "off-topic keyword pattern",
    };
  }

  // -------------------------------------------------------------
  // Stage 2: Compound Intent Disambiguation
  // (e.g. "I like living with my partner. What amenities do you have?")
  // If user ends with a direct question like "what amenities...", that takes priority!
  // -------------------------------------------------------------
  const asksWhatAmenities =
    /\b(what|which)\s+amenities\b/.test(normalized) ||
    /\bwhat\s+(facilities|services)\s+(do\s+you\s+have|are\s+provided|do\s+you\s+offer)\b/.test(normalized) ||
    /\bwhat\s+is\s+included\b/.test(normalized);

  if (asksWhatAmenities) {
    return {
      intent: "AMENITIES",
      confidence: 0.98,
      entities,
      matchedPattern: "explicit amenity question query",
      secondaryContext: /\bpartner\b/.test(normalized) ? "partner mentioned" : undefined,
    };
  }

  // -------------------------------------------------------------
  // Stage 3: Building Capacity vs Room Occupancy
  // -------------------------------------------------------------
  const buildingCapacityPatterns = [
    /\bhow\s+many\s+people\s+(?:can\s+)?(?:live|stay)\s+in\s+(?:one\s+|a\s+)?pg\b/,
    /\bhow\s+many\s+(?:people|students|tenants|residents)\s+(?:can\s+)?(?:live|stay)\s+in\s+(?:a\s+|one\s+|the\s+)?(?:pg|property|building|hostel)\b/,
    /\b(?:total\s+)?(?:pg|property|building)\s+capacity\b/,
    /\btotal\s+capacity\b/,
    /\bcapacity\s+of\b/,
    /\btotal\s+(?:number\s+of\s+)?residents\s+(?:in\s+)?(?:a\s+|one\s+)?(?:pg|property|building)\b/,
  ];

  if (buildingCapacityPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "BUILDING_CAPACITY",
      confidence: 0.99,
      entities,
      matchedPattern: "building capacity query pattern",
    };
  }

  const roomOccupancyPatterns = [
    /\bhow\s+many\s+people\s+(?:can\s+)?(?:live|stay)\s+in\s+(?:one\s+|a\s+)?room\b/,
    /\bhow\s+many\s+(?:people|tenants|students)\s+per\s+room\b/,
    /\boccupancy\s+per\s+room\b/,
    /\bpeople\s+(?:can\s+)?(?:live|stay)\s+in\s+(?:one\s+|a\s+)?room\b/,
    /\bone\s+(?:person|tenant)\s+per\s+room\b/,
  ];

  if (roomOccupancyPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "ROOM_PRIVACY",
      confidence: 0.99,
      entities,
      matchedPattern: "room occupancy query pattern",
    };
  }

  // -------------------------------------------------------------
  // Stage 4: Couples, Boyfriend, Girlfriend & Partner Cohabitation Policy
  // -------------------------------------------------------------
  const couplesPatterns = [
    /\b(?:can\s+i\s+)?(?:live|stay|share)\s+(?:with\s+my\s+)?(?:boyfriend|girlfriend|partner|husband|wife|fianc[eé])\b/,
    /\b(?:can\s+my\s+)?(?:boyfriend|girlfriend|partner)\s+(?:live|stay)\s+(?:with\s+me)?\b/,
    /\b(?:are|do\s+you\s+allow)\s+couples?\b/,
    /\bunmarried\s+couples?\b/,
    /\bcouples?\s+(?:allowed|stay|policy|accommodation)\b/,
    /\b(?:can|do)\s+(?:two|2)\s+(?:people|persons|students)\s+(?:live|stay|share)\s+(?:(?:in\s+)?(?:one|a)\s+room|together)\b/,
    /\b(?:can\s+)?(?:two|2)\s+(?:people|persons)\s+share\b/,
    /\bshare\s+(?:one|a)\s+room\b/,
    /\bsharing\s+a\s+room\b/,
    /\bcohabitation\b/,
  ];

  if (couplesPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "COUPLES_POLICY",
      confidence: 0.98,
      entities,
      matchedPattern: "couples/cohabitation policy pattern",
    };
  }

  // -------------------------------------------------------------
  // Stage 5: Safety, Cleanliness & Maintenance Resolution
  // -------------------------------------------------------------
  const safetyCleanMaintenancePatterns = [
    /\b(?:is\s+(?:the\s+)?(?:pg|reforbs|property|room)\s+)?safe\s+and\s+clean\b/,
    /\b(?:is\s+(?:the\s+)?(?:pg|reforbs|property|room)\s+)?clean\s+and\s+safe\b/,
    /\b(?:is\s+(?:the\s+)?(?:pg|reforbs|property|room)\s+)?safe\b/,
    /\bhow\s+quickly\s+are\s+maintenance\s+issues\s+resolved\b/,
    /\bmaintenance\s+issues?\b/,
    /\bmaintenance\s+support\b/,
    /\bsecurity\s+and\s+cleanliness\b/,
  ];

  if (safetyCleanMaintenancePatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "SAFETY_CLEANLINESS_MAINTENANCE",
      confidence: 0.97,
      entities,
      matchedPattern: "safety, cleanliness and maintenance pattern",
    };
  }

  // -------------------------------------------------------------
  // Stage 6: Minimum Stay & Lease Tenure
  // -------------------------------------------------------------
  const leasePatterns = [
    /\bminimum\s+stay\b/,
    /\blease\s+duration\b/,
    /\bhow\s+long\s+(?:is\s+the\s+)?(?:minimum\s+)?(?:stay|lease)\b/,
    /\block-?in\s*(?:period)?\b/,
    /\btenure\b/,
    /\bminimum\s+(?:months?|period)\b/,
  ];

  if (leasePatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "MINIMUM_STAY_LEASE",
      confidence: 0.96,
      entities,
      matchedPattern: "minimum stay and lease pattern",
    };
  }

  // -------------------------------------------------------------
  // Stage 7: Booking & Online Reservations
  // -------------------------------------------------------------
  const bookingPatterns = [
    /\bhow\s+to\s+book\b/,
    /\bhow\s+(?:can|do)\s+i\s+book\b/,
    /\bbook\s+online\b/,
    /\bonline\s+booking\b/,
    /\bbooking\s+process\b/,
    /\bhow\s+to\s+reserve\b/,
    /\breserve\s+a\s+room\b/,
  ];

  if (bookingPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "BOOKING_RESERVATION",
      confidence: 0.96,
      entities,
      matchedPattern: "booking and reservation pattern",
    };
  }

  // -------------------------------------------------------------
  // Stage 8: Cancellation & Refund Policy
  // -------------------------------------------------------------
  const cancellationPatterns = [
    /\bcancellation\s+policy\b/,
    /\bhow\s+to\s+cancel\b/,
    /\bnotice\s+period\b/,
    /\brefund\s+policy\b/,
    /\bearly\s+exit\b/,
    /\bdeposit\s+refund\b/,
  ];

  if (cancellationPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "CANCELLATION_REFUND",
      confidence: 0.95,
      entities,
      matchedPattern: "cancellation and refund pattern",
    };
  }

  // -------------------------------------------------------------
  // Stage 9: Cheapest Property & Rent Comparison
  // -------------------------------------------------------------
  const cheapestPatterns = [
    /\bcheapest\b/,
    /\bcheap\b/,
    /\bcheap\s+(?:room|pg|stay|hostel|accommodation|living)\b/,
    /\blowest\s+(?:rent|price|pricing|cost|tariff|charges?)\b/,
    /\bmost\s+affordable\b/,
    /\bbudget\s+(?:pg|hostel|room|accommodation|stay)\b/,
    /\bwhich\s+(?:pg|property|hostel|room)\s+is\s+(?:the\s+)?cheapest\b/,
    /\bwhich\s+(?:pg|hostel|property)\s+fits?\s+(?:my\s+)?budget\b/,
    /\bunder\s*(?:rs\.?|inr|₹)?\s*\d+\s*(?:k|thousand|per\s+month)?\b/,
    /\bcheapest\s+pg\s+you\s+have\b/,
    /\bwhich\s+is\s+your\s+cheapest\s+pg\b/,
  ];

  if (cheapestPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "CHEAPEST_PRICE_COMPARISON",
      confidence: 0.96,
      entities,
      matchedPattern: "cheapest / rent comparison pattern",
    };
  }

  // -------------------------------------------------------------
  // Stage 10: Unspecified College or Office Proximity (Clarification)
  // (e.g. "I need a PG near my college", "Which PG is closest to my college?")
  // Must ask clarification rather than guessing or defaulting to airport!
  // -------------------------------------------------------------
  const asksNearCollege =
    /\b(?:near|closest\s+to|closer\s+to|around)\s+(?:my\s+)?(?:college|university|campus)\b/.test(normalized) ||
    /\b(?:pg|hostel|accommodation|room)\s+near\s+(?:my\s+)?(?:college|university|campus)\b/.test(normalized) ||
    /\bwhich\s+(?:pg|property)\s+is\s+(?:closest|nearest)\s+to\s+(?:my\s+)?(?:college|university|campus)\b/.test(normalized);

  const hasSpecificCollege = entities.college && entities.college.includes("Symbiosis");

  if (asksNearCollege && !hasSpecificCollege && !entities.location) {
    return {
      intent: "UNSPECIFIED_COLLEGE",
      confidence: 0.97,
      entities,
      matchedPattern: "unspecified college proximity pattern",
    };
  }

  const asksNearOffice =
    /\b(?:near|closest\s+to|closer\s+to|around)\s+(?:my\s+)?office\b/.test(normalized) ||
    /\b(?:pg|hostel|accommodation|room)\s+near\s+(?:my\s+)?office\b/.test(normalized) ||
    /\bwhich\s+(?:pg|property)\s+is\s+(?:closest|nearest)\s+to\s+(?:my\s+)?office\b/.test(normalized);

  if (asksNearOffice && !entities.location) {
    return {
      intent: "UNSPECIFIED_OFFICE",
      confidence: 0.97,
      entities,
      matchedPattern: "unspecified office proximity pattern",
    };
  }

  // -------------------------------------------------------------
  // Stage 11: Nearest Property & Location Comparison
  // -------------------------------------------------------------
  const nearestPatterns = [
    /\b(?:which\s+(?:pg|property|hostel|room|accommodation)\s+is\s+)?(?:nearest|closest|closer)\b/,
    /\bwhere\s+is\s+(?:your\s+)?nearest\b/,
    /\bnearest\s+(?:to\s+me|pg|property|hostel|accommodation|student\s+accommodation)\b/,
    /\bclosest\s+(?:to\s+me|to\s+my\s+college|to\s+my\s+location|to\s+my\s+office|property|pg)\b/,
    /\bi\s+live\s+in\s+([a-z\s]+)[,.]?\s*(?:where|which|how)\b/,
    /\bi\s+need\s+a\s+pg\s+near\b/,
    /\bwhich\s+(?:property|pg)\s+is\s+near\s+([a-z\s]+)\b/,
    /\bwhich\s+(?:property|pg)\s+is\s+opposite\b/,
    /\bopposite\b/,
    /\bnearest\s+to\s+kondhwa\b/,
    /\bclosest\s+to\s+kondhwa\b/,
    /\b(near|closest\s+to|opposite)\s+(?:symbiosis|sls|law\s+school|scms)\b/,
  ];

  if (nearestPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "NEAREST_LOCATION",
      confidence: 0.95,
      entities,
      matchedPattern: "nearest property comparison pattern",
    };
  }

  // -------------------------------------------------------------
  // Stage 12: Availability & Vacancies (Strict Definition)
  // MUST NOT trigger on words like "live" or "stay" alone!
  // -------------------------------------------------------------
  const strictAvailabilityPatterns = [
    /\bvacanc(?:y|ies)\b/,
    /\bvacant\b/,
    /\bfree\s+rooms?\b/,
    /\broom\s+openings?\b/,
    /\bavailable\s+(?:today|tomorrow|now|currently|from\b|next\s+week|this\s+month)\b/,
    /\bis\s+a\s+room\s+available(?:\s+tomorrow|\s+today|\s+now)?\b/,
    /\bare\s+(?:there\s+)?rooms?\s+available\b/,
    /\bwhich\s+rooms?\s+are\s+(?:currently\s+)?available\b/,
    /\bcheck\s+availability\b/,
    /\blive\s+availability\b/,
    /\bcan\s+i\s+move\s+in\s+(?:today|tomorrow|now|next\s+week)\b/,
  ];

  if (strictAvailabilityPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "AVAILABILITY_VACANCIES",
      confidence: 0.95,
      entities,
      matchedPattern: "strict availability query pattern",
    };
  }

  // -------------------------------------------------------------
  // Stage 13: Specific Rent / Pricing Inquiry
  // -------------------------------------------------------------
  const rentPricingPatterns = [
    /\b(?:what\s+is\s+(?:the\s+)?|how\s+much\s+(?:is\s+)?)monthly\s+rent\b/,
    /\b(?:what\s+is\s+(?:the\s+)?|how\s+much\s+(?:is\s+)?)rent\b/,
    /\brent\b/,
    /\bmonthly\s+pricing\b/,
    /\bhow\s+much\s+does\s+it\s+cost\b/,
    /\bwhat\s+is\s+the\s+monthly\s+charge\b/,
    /\bcharges?\s+per\s+month\b/,
    /\broom\s+tariff\b/,
    /\bcost\s+of\s+stay\b/,
  ];

  if (rentPricingPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "RENT_PRICING",
      confidence: 0.92,
      entities,
      matchedPattern: "rent pricing query pattern",
    };
  }

  // -------------------------------------------------------------
  // Stage 8: Security Deposit
  // -------------------------------------------------------------
  const depositPatterns = [
    /\bsecurity\s+deposit\b/,
    /\bdeposit\s+amount\b/,
    /\bhow\s+much\s+(?:is\s+the\s+)?deposit\b/,
    /\brefundable\s+deposit\b/,
    /\badvance\s+payment\b/,
    /\bcaution\s+money\b/,
  ];

  if (depositPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "SECURITY_DEPOSIT",
      confidence: 0.94,
      entities,
      matchedPattern: "security deposit query pattern",
    };
  }

  // -------------------------------------------------------------
  // Stage 9: General Amenities & Specific Facilities
  // -------------------------------------------------------------
  const amenitiesPatterns = [
    /\bamenit(?:y|ies)\b/,
    /\bfacilit(?:y|ies)\b/,
    /\bwhat\s+is\s+included\b/,
    /\beverything\s+you\s+need\s+already\s+included\b/,
    /\bdo\s+you\s+provide\s+wi-?fi\b/,
    /\bis\s+wi-?fi\s+available\b/,
    /\bdo\s+you\s+have\s+laundry\b/,
    /\bis\s+laundry\s+available\b/,
    /\bis\s+parking\s+available\b/,
    /\bdo\s+you\s+have\s+parking\b/,
    /\bcleaning\s+services?\b/,
    /\bhousekeeping\b/,
    /\bkitchen\s+available\b/,
    /\bstudy\s+desks?\b/,
  ];

  if (entities.targetAmenity || amenitiesPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "AMENITIES",
      confidence: 0.93,
      entities,
      matchedPattern: "amenities / facilities pattern",
    };
  }

  // -------------------------------------------------------------
  // Stage 10: Food & Meal Plans
  // -------------------------------------------------------------
  const foodPatterns = [
    /\b(?:is\s+)?food\s+(?:or\s+a\s+meal\s+plan\s+)?included\b/,
    /\bmeal\s+plans?\b/,
    /\bmess\s+(?:facility|food)\b/,
    /\bbreakfast\b/,
    /\blunch\b/,
    /\bdinner\b/,
    /\btiffin\b/,
  ];

  if (foodPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "FOOD_MEALS",
      confidence: 0.94,
      entities,
      matchedPattern: "food / meal plan query pattern",
    };
  }

  // -------------------------------------------------------------
  // Stage 11: Single Occupancy & Room Privacy
  // -------------------------------------------------------------
  const privacyPatterns = [
    /\bprivate\s+rooms?\b/,
    /\bsingle\s+occupancy\b/,
    /\bsingle\s+rooms?\b/,
    /\bone\s+(?:person|tenant)\s+per\s+room\b/,
    /\broom\s+sharing\b/,
    /\bsharing\s+rooms?\b/,
  ];

  if (privacyPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "ROOM_PRIVACY",
      confidence: 0.92,
      entities,
      matchedPattern: "single occupancy / privacy pattern",
    };
  }

  // -------------------------------------------------------------
  // Stage 12: House Rules, Curfew, Visitors & Pets
  // -------------------------------------------------------------
  const rulesPatterns = [
    /\bcurfew\b/,
    /\bgate\s+closing\b/,
    /\bentry\s+time\b/,
    /\bnight\s+out\b/,
    /\bvisitors?\s+(?:allowed|policy)\b/,
    /\bguests?\s+(?:allowed|policy)\b/,
    /\bpets?\s+(?:allowed|policy)\b/,
    /\bdogs?\b/,
    /\bcats?\b/,
    /\bhouse\s+rules\b/,
  ];

  if (rulesPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "RULES_RESTRICTIONS",
      confidence: 0.93,
      entities,
      matchedPattern: "house rules / curfew / visitor pattern",
    };
  }

  // -------------------------------------------------------------
  // Stage 13: Property Specific Question
  // (e.g. "tell me about Shubh Gateway", "tell me about Moksha")
  // -------------------------------------------------------------
  if (entities.property && /\b(?:tell\s+me\s+about|details\s+on|about|info\s+on)\b/.test(normalized)) {
    return {
      intent: "PROPERTY_SPECIFIC",
      confidence: 0.95,
      entities,
      matchedPattern: "property-specific overview pattern",
    };
  }

  // -------------------------------------------------------------
  // Stage 14: Property Directory & Location Query
  // (e.g. "what properties does reforbs have", "which properties in Viman Nagar")
  // -------------------------------------------------------------
  const directoryPatterns = [
    /\bwhat\s+properties\b/,
    /\bwhich\s+properties\b/,
    /\ball\s+properties\b/,
    /\blist\s+(?:of\s+)?properties\b/,
    /\bproperties\s+(?:in|located\s+in)\s+viman\s+nagar\b/,
    /\bwhich\s+properties\s+(?:are\s+)?(?:in|located\s+in)\b/,
    /\bco-living\s+properties\b/,
    /\bstudent\s+housing\s+properties\b/,
    /\bi\s+want\s+to\s+live\s+in\s+pune\b/,
  ];

  if (directoryPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "PROPERTY_DIRECTORY",
      confidence: 0.92,
      entities,
      matchedPattern: "property directory overview pattern",
    };
  }

  // If user simply asks "Tell me about Moksha" or mentions property alone
  if (entities.property) {
    return {
      intent: "PROPERTY_SPECIFIC",
      confidence: 0.9,
      entities,
      matchedPattern: "named property detected",
    };
  }

  // -------------------------------------------------------------
  // Stage 15: Contact Details & Human Support
  // -------------------------------------------------------------
  const contactPatterns = [
    /\bcontact\b/,
    /\bphone\s+number\b/,
    /\bhow\s+can\s+i\s+contact\b/,
    /\bcall\b/,
    /\bspeak\s+to\s+(?:someone|human|person|agent)\b/,
    /\bowner\b/,
    /\barpit\b/,
    /\bhelpline\b/,
    /\bemail\b/,
  ];

  if (contactPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "CONTACT_SUPPORT",
      confidence: 0.9,
      entities,
      matchedPattern: "contact / human support pattern",
    };
  }

  // -------------------------------------------------------------
  // Stage 16: Property Visits & Tours
  // -------------------------------------------------------------
  const visitPatterns = [
    /\bschedule\s+(?:a\s+)?(?:visit|tour)\b/,
    /\bbook\s+(?:a\s+)?(?:visit|tour)\b/,
    /\broom\s+tour\b/,
    /\bsite\s+visit\b/,
    /\bviewing\b/,
    /\binspection\b/,
  ];

  if (visitPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "VISIT_TOUR",
      confidence: 0.92,
      entities,
      matchedPattern: "property visit / tour pattern",
    };
  }

  // -------------------------------------------------------------
  // Stage 17: Differences / Why Reforbs
  // -------------------------------------------------------------
  if (/\b(?:what\s+makes\s+reforbs\s+different|difference\s+from\s+(?:hostel|rental|pg)|why\s+reforbs)\b/.test(normalized)) {
    return {
      intent: "DIFFERENCE_FROM_HOSTEL",
      confidence: 0.92,
      entities,
      matchedPattern: "difference from hostel pattern",
    };
  }

  // -------------------------------------------------------------
  // Stage 18: Fallback / General
  // -------------------------------------------------------------
  return {
    intent: "GENERAL_INQUIRY",
    confidence: 0.5,
    entities,
    matchedPattern: "general fallback",
  };
}
