/**
 * Deterministic Intent Detection and Entity Extraction
 *
 * Implements a strict, multi-stage question analyzer using explicit regex patterns,
 * word boundaries, entity extraction, and question structure analysis.
 *
 * Prevents generic keyword matches from overriding specific customer intent.
 */

export type CustomerIntent =
  | "FULL_ADDRESS"
  | "AIRPORT_DISTANCE"
  | "NEAREST_AIRPORT"
  | "SLS_DISTANCE"
  | "VIMAN_NAGAR_PROPERTIES"
  | "NEAREST_LOCATION"
  | "UNSPECIFIED_COLLEGE"
  | "UNSPECIFIED_OFFICE"
  | "CHEAPEST_PRICE_COMPARISON"
  | "RENT_PRICING"
  | "SECURITY_DEPOSIT"
  | "RENT_INCLUSIONS_WIFI_WATER"
  | "ELECTRICITY_INCLUSION"
  | "FOOD_INCLUSIONS"
  | "COOK_FOOD"
  | "OCCUPANCY_SINGLE_DOUBLE"
  | "PEOPLE_PER_ROOM"
  | "PEOPLE_PER_PG"
  | "COUPLES_POLICY"
  | "CO_ED_POLICY"
  | "CCTV_SECURITY"
  | "MAINTENANCE_SPEED"
  | "VISIT_BEFORE_BOOKING"
  | "DOCUMENTS_REQUIRED"
  | "AVAILABILITY_VACANCIES"
  | "MINIMUM_STAY_LEASE"
  | "CANCELLATION_REFUND"
  | "AMENITIES"
  | "FURNITURE_INVENTORY"
  | "RULES_RESTRICTIONS"
  | "PROPERTY_SPECIFIC"
  | "PROPERTY_DIRECTORY"
  | "CONTACT_SUPPORT"
  | "VISIT_TOUR"
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
  if (/\b(?:reforbs\s+co-?living\s*-\s*)?sanjay\s+park\b/.test(normalized))
    return "ReForbs Co-Living - Sanjay Park";
  if (/\bshubh\s+gateway\b/.test(normalized)) return "Shubh Gateway";
  if (/\b(reforbs\s+living\s+)?sakore\s+nagar\b/.test(normalized))
    return "Reforbs Living Sakore Nagar";
  if (/\bmoksha\b/.test(normalized)) return "Moksha";
  if (/\bvipasana\b/.test(normalized)) return "Vipasana";
  if (/\bshubh\s+nirvana\b/.test(normalized)) return "Shubh Nirvana";
  if (/\breforbs\s+co-?living\b/.test(normalized)) return "ReForbs Co-Living";
  return undefined;
}

/**
 * Extract external or local locations mentioned in question
 */
export function extractLocationEntity(normalized: string): string | undefined {
  if (/\bkondhwa\b/.test(normalized)) return "Kondhwa";
  if (/\bhinjewadi\b/.test(normalized)) return "Hinjewadi";
  if (/\bviman\s+nagar\b/.test(normalized)) return "Viman Nagar";
  if (/\bsakore\s+nagar\b/.test(normalized)) return "Sakore Nagar";
  if (/\bsanjay\s+park\b/.test(normalized)) return "Sanjay Park";
  if (/\bwakad\b/.test(normalized)) return "Wakad";
  if (/\bkothrud\b/.test(normalized)) return "Kothrud";
  if (/\bbaner\b/.test(normalized)) return "Baner";
  if (/\b(pune\s+)?airport\b/.test(normalized)) return "Pune Airport";
  if (/\b(pune\s+)?station\b/.test(normalized)) return "Pune Railway Station";

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
  if (/\b(symbiosis\s+law\s+school|sls)\b/.test(normalized))
    return "Symbiosis Law School (SLS)";
  if (/\bscms\b/.test(normalized)) return "SCMS Pune";
  if (/\biihm\b/.test(normalized)) return "IIHM Pune";
  if (/\bchrist\s+college\b/.test(normalized)) return "Christ College";
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
  if (/\b(tv|television|media)\b/.test(normalized)) return "TV";
  if (/\b(work\s+desks?|study\s+desks?|workspace)\b/.test(normalized)) return "Work Desks";
  if (/\b(living\s+area|lounge)\b/.test(normalized)) return "Living Area";
  if (/\b(ac|air\s+condition(?:er|ing)?)\b/.test(normalized)) return "AC";
  if (/\b(electricity|power|sub-?metered)\b/.test(normalized)) return "Electricity";
  if (/\b(water)\b/.test(normalized)) return "Water";
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
  // 1. Explicit Off-Topic Queries
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
    /\blondon\b/,
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
  // 2. Full Address of ReForbs Co-Living / Sanjay Park
  // e.g. "What is the full address of ReForbs Co-Living?"
  // -------------------------------------------------------------
  if (
    /\b(?:full\s+)?address\s+(?:of\s+)?(?:reforbs|the\s+property|reforbs\s+co-?living)\b/.test(normalized) ||
    /\bwhat\s+is\s+(?:the\s+)?(?:full\s+)?address\b/.test(normalized) ||
    /\bwhere\s+is\s+reforbs\s+co-?living\s+(?:located|situated)\b/.test(normalized) ||
    /\bexact\s+(?:street\s+)?address\b/.test(normalized)
  ) {
    return {
      intent: "FULL_ADDRESS",
      confidence: 0.99,
      entities,
      matchedPattern: "full address pattern",
    };
  }

  // -------------------------------------------------------------
  // 3. Airport Queries: Distance vs Nearest PG
  // -------------------------------------------------------------
  // "Which PG is nearest to Pune Airport?"
  if (
    /\bwhich\s+(?:pg|property|hostel)\s+is\s+(?:nearest|closest)\s+(?:to\s+)?(?:pune\s+)?airport\b/.test(normalized) ||
    /\bnearest\s+(?:pg|property|hostel)\s+(?:to\s+)?(?:pune\s+)?airport\b/.test(normalized)
  ) {
    return {
      intent: "NEAREST_AIRPORT",
      confidence: 0.99,
      entities,
      matchedPattern: "nearest pg to airport pattern",
    };
  }

  // "How far is ReForbs from Pune Airport?" / "Distance to Pune Airport"
  if (
    /\b(?:how\s+far|distance)\b/.test(normalized) &&
    /\b(?:pune\s+)?airport\b/.test(normalized)
  ) {
    return {
      intent: "AIRPORT_DISTANCE",
      confidence: 0.99,
      entities,
      matchedPattern: "airport distance pattern",
    };
  }

  // -------------------------------------------------------------
  // 4. Symbiosis Law School (SLS) Distance / Proximity
  // e.g. "How far is Symbiosis Law School?"
  // -------------------------------------------------------------
  if (
    (/\b(?:how\s+far|distance)\b/.test(normalized) &&
      /\b(?:symbiosis|sls|law\s+school)\b/.test(normalized)) ||
    /\bhow\s+far\s+is\s+symbiosis\b/.test(normalized)
  ) {
    return {
      intent: "SLS_DISTANCE",
      confidence: 0.99,
      entities,
      matchedPattern: "symbiosis law school distance pattern",
    };
  }

  // -------------------------------------------------------------
  // 5. Which ReForbs properties are in Viman Nagar?
  // -------------------------------------------------------------
  if (
    /\bwhich\s+(?:reforbs\s+)?properties\s+(?:are\s+)?(?:in|located\s+in)\s+viman\s+nagar\b/.test(normalized) ||
    /\bproperties\s+in\s+viman\s+nagar\b/.test(normalized) ||
    /\blist\s+(?:of\s+)?(?:reforbs\s+)?properties\s+in\s+viman\s+nagar\b/.test(normalized)
  ) {
    return {
      intent: "VIMAN_NAGAR_PROPERTIES",
      confidence: 0.98,
      entities,
      matchedPattern: "viman nagar properties directory pattern",
    };
  }

  // -------------------------------------------------------------
  // 6. Couples, Boyfriend, Girlfriend & Partner Stay Policy
  // e.g. "Can I live with my boyfriend?" / "Are couples allowed?"
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
    /\blive\s+with\s+my\s+boyfriend\b/,
    /\blive\s+with\s+my\s+girlfriend\b/,
  ];

  if (couplesPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "COUPLES_POLICY",
      confidence: 0.99,
      entities,
      matchedPattern: "couples / partner cohabitation pattern",
    };
  }

  // -------------------------------------------------------------
  // 7. Building Capacity vs Room Occupancy vs Single/Double
  // -------------------------------------------------------------
  // "How many people can live in one PG?"
  const pgCapacityPatterns = [
    /\bhow\s+many\s+people\s+(?:can\s+)?(?:live|stay)\s+in\s+(?:one\s+|a\s+)?pg\b/,
    /\bhow\s+many\s+(?:people|students|tenants|residents)\s+(?:can\s+)?(?:live|stay)\s+in\s+(?:a\s+|one\s+|the\s+)?(?:pg|property|building|hostel)\b/,
    /\b(?:total\s+)?(?:pg|property|building)\s+capacity\b/,
    /\btotal\s+capacity\b/,
    /\btotal\s+(?:number\s+of\s+)?residents\s+(?:in\s+)?(?:a\s+|one\s+)?(?:pg|property|building)\b/,
  ];

  if (pgCapacityPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "PEOPLE_PER_PG",
      confidence: 0.99,
      entities,
      matchedPattern: "people per pg / building capacity pattern",
    };
  }

  // "How many people can live in one room?"
  const roomCapacityPatterns = [
    /\bhow\s+many\s+people\s+(?:can\s+)?(?:live|stay)\s+in\s+(?:one\s+|a\s+)?room\b/,
    /\bhow\s+many\s+(?:people|tenants|students)\s+per\s+room\b/,
    /\boccupancy\s+per\s+room\b/,
    /\bpeople\s+(?:can\s+)?(?:live|stay)\s+in\s+(?:one\s+|a\s+)?room\b/,
    /\bhow\s+many\s+persons?\s+in\s+(?:one|a)\s+room\b/,
  ];

  if (roomCapacityPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "PEOPLE_PER_ROOM",
      confidence: 0.99,
      entities,
      matchedPattern: "people per room capacity pattern",
    };
  }

  // "Do you have single or double occupancy?"
  if (
    /\b(?:do\s+you\s+have|is\s+there)\s+(?:single\s+or\s+double|double\s+or\s+single)\s+occupancy\b/.test(normalized) ||
    /\b(?:single\s+and\s+double|single\s+or\s+double)\s+occupancy\b/.test(normalized) ||
    /\bdo\s+you\s+have\s+single\s+or\s+double\b/.test(normalized) ||
    /\bsingle\s+or\s+double\b/.test(normalized)
  ) {
    return {
      intent: "OCCUPANCY_SINGLE_DOUBLE",
      confidence: 0.98,
      entities,
      matchedPattern: "single or double occupancy pattern",
    };
  }

  // -------------------------------------------------------------
  // 8. Co-Ed / Unisex Accommodation Policy
  // e.g. "Is the property co-ed?"
  // -------------------------------------------------------------
  if (
    /\b(?:is\s+(?:the\s+)?(?:property|pg|accommodation|hostel)\s+)?co-?ed\b/.test(normalized) ||
    /\bunisex\b/.test(normalized) ||
    /\b(?:is\s+it\s+)?for\s+(?:boys\s+or\s+girls|girls\s+or\s+boys|men\s+or\s+women)\b/.test(normalized) ||
    /\bgender\s+policy\b/.test(normalized)
  ) {
    return {
      intent: "CO_ED_POLICY",
      confidence: 0.98,
      entities,
      matchedPattern: "co-ed / unisex policy pattern",
    };
  }

  // -------------------------------------------------------------
  // 9. CCTV / Security Arrangements
  // e.g. "Is CCTV available?"
  // -------------------------------------------------------------
  if (
    /\bcctv\b/.test(normalized) ||
    /\bsecurity\s+arrangements?\b/.test(normalized) ||
    /\bsecurity\s+cameras?\b/.test(normalized) ||
    /\bcontrolled\s+access\b/.test(normalized)
  ) {
    return {
      intent: "CCTV_SECURITY",
      confidence: 0.98,
      entities,
      matchedPattern: "cctv and security pattern",
    };
  }

  // -------------------------------------------------------------
  // 10. Maintenance Speed / Issue Resolution
  // e.g. "How quickly are maintenance issues resolved?"
  // -------------------------------------------------------------
  if (
    /\bhow\s+quickly\s+are\s+maintenance\s+(?:issues|problems)\s+resolved\b/.test(normalized) ||
    /\bmaintenance\s+(?:response|resolution)\s+time\b/.test(normalized) ||
    /\bhow\s+fast\s+(?:is|are)\s+maintenance\b/.test(normalized)
  ) {
    return {
      intent: "MAINTENANCE_SPEED",
      confidence: 0.98,
      entities,
      matchedPattern: "maintenance speed pattern",
    };
  }

  // -------------------------------------------------------------
  // 11. Visit Before Booking
  // e.g. "Can I visit before booking?"
  // -------------------------------------------------------------
  if (
    /\bcan\s+i\s+visit\s+(?:the\s+property\s+)?before\s+booking\b/.test(normalized) ||
    /\bvisit\s+before\s+(?:booking|paying|move\s+in)\b/.test(normalized) ||
    /\bsee\s+(?:the\s+)?room\s+before\s+booking\b/.test(normalized)
  ) {
    return {
      intent: "VISIT_BEFORE_BOOKING",
      confidence: 0.98,
      entities,
      matchedPattern: "visit before booking pattern",
    };
  }

  // -------------------------------------------------------------
  // 12. Documents Required for Lease
  // e.g. "What documents do I need?"
  // -------------------------------------------------------------
  if (
    /\bwhat\s+documents\s+(?:do\s+i\s+need|are\s+required)\b/.test(normalized) ||
    /\bdocuments?\s+(?:needed|required|list)\b/.test(normalized) ||
    /\b(?:aadhaar|pan\s+card|kyc)\b/.test(normalized)
  ) {
    return {
      intent: "DOCUMENTS_REQUIRED",
      confidence: 0.98,
      entities,
      matchedPattern: "documents required pattern",
    };
  }

  // -------------------------------------------------------------
  // 13. Cook My Own Food vs Food Inclusions
  // -------------------------------------------------------------
  // "Can I cook my own food?"
  if (
    /\bcan\s+i\s+cook\s+(?:my\s+own\s+)?food\b/.test(normalized) ||
    /\bcan\s+we\s+cook\b/.test(normalized) ||
    /\bcooking\s+allowed\b/.test(normalized) ||
    /\bself\s+cooking\b/.test(normalized)
  ) {
    return {
      intent: "COOK_FOOD",
      confidence: 0.98,
      entities,
      matchedPattern: "cook own food pattern",
    };
  }

  // "Is food included?"
  if (
    /\b(?:is\s+)?food\s+(?:or\s+a\s+meal\s+plan\s+)?included\b/.test(normalized) ||
    /\bare\s+meals?\s+included\b/.test(normalized) ||
    /\bmeal\s+plans?\b/.test(normalized) ||
    /\bmess\s+(?:facility|food)\b/.test(normalized)
  ) {
    return {
      intent: "FOOD_INCLUSIONS",
      confidence: 0.98,
      entities,
      matchedPattern: "food included pattern",
    };
  }

  // -------------------------------------------------------------
  // 14. Utilities Included: Wi-Fi, Water, Electricity
  // -------------------------------------------------------------
  // "Are Wi-Fi and water included in rent?"
  if (
    /\b(?:are\s+)?wi-?fi\s+and\s+water\s+included\b/.test(normalized) ||
    /\bwater\s+and\s+wi-?fi\s+included\b/.test(normalized) ||
    /\bis\s+water\s+included\b/.test(normalized)
  ) {
    return {
      intent: "RENT_INCLUSIONS_WIFI_WATER",
      confidence: 0.98,
      entities,
      matchedPattern: "wifi and water inclusion pattern",
    };
  }

  // "Is electricity included?"
  if (
    /\bis\s+electricity\s+included\b/.test(normalized) ||
    /\belectricity\s+charges?\b/.test(normalized) ||
    /\belectric\s+bill\b/.test(normalized) ||
    /\bis\s+power\s+bill\s+included\b/.test(normalized)
  ) {
    return {
      intent: "ELECTRICITY_INCLUSION",
      confidence: 0.98,
      entities,
      matchedPattern: "electricity inclusion pattern",
    };
  }

  // -------------------------------------------------------------
  // 15. Cheapest PG / Rent Comparison
  // e.g. "Which is the cheapest PG?"
  // -------------------------------------------------------------
  const cheapestPatterns = [
    /\bcheapest\b/,
    /\bcheap\b/,
    /\blowest\s+(?:rent|price|pricing|cost|tariff|charges?)\b/,
    /\bmost\s+affordable\b/,
    /\bbudget\s+(?:pg|hostel|room|accommodation|stay)\b/,
    /\bwhich\s+(?:pg|property|hostel|room)\s+is\s+(?:the\s+)?cheapest\b/,
    /\bwhich\s+is\s+the\s+cheapest\s+pg\b/,
    /\bcheapest\s+pg\s+you\s+have\b/,
  ];

  if (cheapestPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "CHEAPEST_PRICE_COMPARISON",
      confidence: 0.98,
      entities,
      matchedPattern: "cheapest pg comparison pattern",
    };
  }

  // -------------------------------------------------------------
  // 16. Security Deposit
  // e.g. "How much is the security deposit?"
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
      confidence: 0.97,
      entities,
      matchedPattern: "security deposit pattern",
    };
  }

  // -------------------------------------------------------------
  // 17. Live Availability / Immediate Move-In
  // e.g. "Is a room available tomorrow?" / "Can I move in immediately?"
  // -------------------------------------------------------------
  const availabilityPatterns = [
    /\bis\s+a\s+room\s+available\s+tomorrow\b/,
    /\bis\s+a\s+room\s+available(?:\s+today|\s+now)?\b/,
    /\bcan\s+i\s+move\s+in\s+(?:immediately|today|tomorrow|now)\b/,
    /\bvacanc(?:y|ies)\b/,
    /\blive\s+availability\b/,
    /\bavailable\s+(?:tomorrow|today|now)\b/,
  ];

  if (availabilityPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "AVAILABILITY_VACANCIES",
      confidence: 0.97,
      entities,
      matchedPattern: "availability / move in query pattern",
    };
  }

  // -------------------------------------------------------------
  // 18. Minimum Stay & Lease Tenure
  // e.g. "What is the minimum stay?"
  // -------------------------------------------------------------
  const leasePatterns = [
    /\bwhat\s+is\s+(?:the\s+)?minimum\s+stay\b/,
    /\bminimum\s+stay\b/,
    /\block-?in\s*(?:period)?\b/,
    /\bhow\s+long\s+(?:is\s+the\s+)?(?:minimum\s+)?(?:stay|lease)\b/,
  ];

  if (leasePatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "MINIMUM_STAY_LEASE",
      confidence: 0.96,
      entities,
      matchedPattern: "minimum stay pattern",
    };
  }

  // -------------------------------------------------------------
  // 19. Unspecified College or Office Proximity (Clarification)
  // e.g. "Which PG is closest to my college?"
  // -------------------------------------------------------------
  const asksNearCollege =
    /\b(?:near|closest\s+to|closer\s+to|around)\s+(?:my\s+)?(?:college|university|campus)\b/.test(normalized) ||
    /\b(?:pg|hostel|accommodation|room)\s+near\s+(?:my\s+)?(?:college|university|campus)\b/.test(normalized) ||
    /\bwhich\s+(?:pg|property)\s+is\s+(?:closest|nearest)\s+to\s+(?:my\s+)?(?:college|university|campus)\b/.test(normalized);

  const hasSpecificCollege = entities.college && (entities.college.includes("Symbiosis") || entities.college.includes("IIHM") || entities.college.includes("Christ"));

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
  // 20. Nearest Property / Location Relative Comparison
  // e.g. "I live in Kondhwa where is your nearest PG"
  // -------------------------------------------------------------
  const nearestPatterns = [
    /\b(?:which\s+(?:pg|property|hostel|room|accommodation)\s+is\s+)?(?:nearest|closest|closer)\b/,
    /\bwhere\s+is\s+(?:your\s+)?nearest\b/,
    /\bnearest\s+(?:to\s+me|pg|property|hostel|accommodation|student\s+accommodation)\b/,
    /\bi\s+live\s+in\s+([a-z\s]+)[,.]?\s*(?:where|which|how)\b/,
    /\bnearest\s+to\s+kondhwa\b/,
    /\bclosest\s+to\s+kondhwa\b/,
  ];

  if (nearestPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "NEAREST_LOCATION",
      confidence: 0.95,
      entities,
      matchedPattern: "nearest location comparison pattern",
    };
  }

  // -------------------------------------------------------------
  // 21. Rent Pricing General Inquiry
  // -------------------------------------------------------------
  const rentPricingPatterns = [
    /\b(?:what\s+is\s+(?:the\s+)?|how\s+much\s+(?:is\s+)?)monthly\s+rent\b/,
    /\b(?:what\s+is\s+(?:the\s+)?|how\s+much\s+(?:is\s+)?)rent\b/,
    /\brent\b/,
    /\bhow\s+much\s+does\s+it\s+cost\b/,
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
  // 22. General Amenities Inquiry
  // e.g. "What amenities are provided?"
  // -------------------------------------------------------------
  const amenitiesPatterns = [
    /\bwhat\s+amenities\b/,
    /\bamenit(?:y|ies)\b/,
    /\bfacilit(?:y|ies)\b/,
    /\beverything\s+you\s+need\s+already\s+included\b/,
    /\bwhat\s+is\s+included\b/,
  ];

  if (entities.targetAmenity || amenitiesPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "AMENITIES",
      confidence: 0.94,
      entities,
      matchedPattern: "amenities / facilities pattern",
    };
  }

  // -------------------------------------------------------------
  // 23. Furniture Inventory
  // -------------------------------------------------------------
  if (/\b(?:what\s+)?furniture\s+(?:is\s+)?provided\b/.test(normalized) || /\bfurniture\b/.test(normalized)) {
    return {
      intent: "FURNITURE_INVENTORY",
      confidence: 0.95,
      entities,
      matchedPattern: "furniture inventory pattern",
    };
  }

  // -------------------------------------------------------------
  // 24. Cancellation & Refund Policy
  // -------------------------------------------------------------
  if (/\bcancellation\b/.test(normalized) || /\brefund\s+policy\b/.test(normalized)) {
    return {
      intent: "CANCELLATION_REFUND",
      confidence: 0.95,
      entities,
      matchedPattern: "cancellation policy pattern",
    };
  }

  // -------------------------------------------------------------
  // 25. House Rules, Curfew, Visitors, Pets, Smoking
  // -------------------------------------------------------------
  if (
    /\b(?:curfew|gate\s+closing|visitors?|guests?|overnight\s+guests?|pets?|smoking|alcohol)\b/.test(normalized)
  ) {
    return {
      intent: "RULES_RESTRICTIONS",
      confidence: 0.93,
      entities,
      matchedPattern: "rules / curfew / visitors pattern",
    };
  }

  // -------------------------------------------------------------
  // 26. Property Specific Query
  // -------------------------------------------------------------
  if (entities.property) {
    return {
      intent: "PROPERTY_SPECIFIC",
      confidence: 0.92,
      entities,
      matchedPattern: "named property detected pattern",
    };
  }

  // -------------------------------------------------------------
  // 27. Contact Details & Support
  // -------------------------------------------------------------
  if (
    /\b(?:how\s+do\s+i\s+)?contact\s+reforbs\b/.test(normalized) ||
    /\bcontact\b/.test(normalized) ||
    /\bphone\s+number\b/.test(normalized) ||
    /\bcall\b/.test(normalized)
  ) {
    return {
      intent: "CONTACT_SUPPORT",
      confidence: 0.92,
      entities,
      matchedPattern: "contact support pattern",
    };
  }

  // -------------------------------------------------------------
  // 28. General Property Directory
  // -------------------------------------------------------------
  if (/\b(?:what|which|all)\s+properties\b/.test(normalized)) {
    return {
      intent: "PROPERTY_DIRECTORY",
      confidence: 0.92,
      entities,
      matchedPattern: "properties directory pattern",
    };
  }

  // -------------------------------------------------------------
  // 29. Default General Inquiry
  // -------------------------------------------------------------
  return {
    intent: "GENERAL_INQUIRY",
    confidence: 0.5,
    entities,
    matchedPattern: "general inquiry fallback",
  };
}
