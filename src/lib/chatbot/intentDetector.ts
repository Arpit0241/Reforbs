/**
 * Deterministic Intent Detection and Entity Extraction
 * Based on Reforbs Knowledge Base v4.0 (reforbs_expanded_knowledge_base_v4.pdf)
 *
 * Implements a strict, multi-stage question analyzer using explicit regex patterns,
 * word boundaries, entity extraction, and question structure analysis.
 *
 * Prevents generic keyword matches from overriding specific customer intent.
 */

export type CustomerIntent =
  | "PROPERTY_DIRECTORY"
  | "CHEAPEST_PRICE_COMPARISON"
  | "RENT_PRICING"
  | "OCCUPANCY_SINGLE_DOUBLE"
  | "SECURITY_DEPOSIT"
  | "BROKERAGE_POLICY"
  | "AMENITY_SPECIFIC"
  | "AIRPORT_DISTANCE"
  | "NEAREST_AIRPORT"
  | "COLLEGE_OFFICE_DISTANCE"
  | "UNSPECIFIED_COLLEGE_OFFICE"
  | "FOOD_MESS"
  | "LOCK_IN_POLICY"
  | "CURFEW_RULES"
  | "VISITORS_GUESTS"
  | "COUPLES_POLICY"
  | "CCTV_SECURITY"
  | "COMMUNITY_ACTIVITIES"
  | "VISIT_TOUR"
  | "LIVE_AVAILABILITY"
  | "CONTACT_SUPPORT"
  | "DESTINATION_COMING_SOON"
  | "BUILDING_CAPACITY"
  | "REVIEWS_RATINGS"
  | "PROPERTY_PROFILE"
  | "OFF_TOPIC"
  | "GENERAL_INQUIRY";

export interface ExtractedEntities {
  property?: string;
  location?: string;
  college?: string;
  targetAmenities: string[];
  occupancyType?: "single" | "double" | "triple";
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
 * Extract named properties recognized by Reforbs v4
 */
export function extractPropertyEntity(normalized: string): string | undefined {
  if (/\b(?:shubh\s+gateway|gateway)\b/.test(normalized)) return "Shubh Gateway";
  if (/\bbrindavan\b/.test(normalized)) return "Brindavan";
  if (/\b(?:reforbs\s+living\s+)?sakore\s+nagar\b/.test(normalized)) return "Brindavan";
  if (/\b(?:reforbs\s+)?vairagya\b/.test(normalized)) return "Vairagya";
  if (/\bmoksha\b/.test(normalized)) return "Moksha";
  if (/\b(?:shubh\s+)?nirvana\b/.test(normalized)) return "Nirvana";
  if (/\bvipasana\b|\bvipasna\b/.test(normalized)) return "Vipasna";
  if (/\bsuyog(?:\s+enclave|\s+co-?living)?\b/.test(normalized)) return "Suyog Enclave";
  if (/\b(?:reforbs\s+)?park\s+island\b/.test(normalized)) return "Park Island";
  if (/\bpillar\s+homes(?:\s+co-?living)?\b/.test(normalized)) return "Pillar Homes";
  if (/\blangston(?:\s+downtown)?\b/.test(normalized)) return "Langston Downtown";
  if (/\bsanjay\s+park\b/.test(normalized)) return "Sanjay Park";
  return undefined;
}

/**
 * Extract external or local locations / landmarks mentioned in question
 */
export function extractLocationEntity(normalized: string): string | undefined {
  if (/\b(?:pune\s+)?airport\b/.test(normalized)) return "Pune Airport";
  if (/\bphoenix(?:\s+marketcity|\s+mall)?\b/.test(normalized)) return "Phoenix Marketcity";
  if (/\bjoggers\s+park\b/.test(normalized)) return "Joggers Park";
  if (/\bdutta\s+mandir\b/.test(normalized)) return "Dutta Mandir";
  if (/\bhyatt(?:\s+regency)?\b/.test(normalized)) return "Hyatt Regency";
  if (/\bcafe\s+peter\b/.test(normalized)) return "Cafe Peter";
  if (/\b(?:eon\s+it|kharadi)\b/.test(normalized)) return "Kharadi / EON IT";
  if (/\bwework\b/.test(normalized)) return "WeWork";
  if (/\bviman\s+nagar\b/.test(normalized)) return "Viman Nagar";
  return undefined;
}

/**
 * Extract college entities mentioned in question
 */
export function extractCollegeEntity(normalized: string): string | undefined {
  if (/\b(?:symbiosis\s+law\s+school|sls|law\s+school)\b/.test(normalized))
    return "Symbiosis Law School (SLS)";
  if (/\b(?:scms|symbiosis\s+centre\s+for\s+management)\b/.test(normalized))
    return "SCMS Pune";
  if (/\b(?:symbiosis\s+international\s+school|sis)\b/.test(normalized))
    return "Symbiosis International School";
  if (/\bsymbiosis\b/.test(normalized))
    return "Symbiosis Campuses";
  return undefined;
}

/**
 * Extract specific amenities queried in question
 */
export function extractAmenityEntities(normalized: string): string[] {
  const found: string[] = [];
  if (/\b(?:wi-?fi|internet|broadband|optical\s+fibre|gigabit)\b/.test(normalized)) found.push("Wi-Fi");
  if (/\b(?:laundry|washing\s+machine|washing\s+clothes)\b/.test(normalized)) found.push("Laundry");
  if (/\b(?:parking|car\s+parking|bike\s+parking|vehicle)\b/.test(normalized)) found.push("Parking");
  if (/\b(?:cleaning|housekeeping|maid|clean)\b/.test(normalized)) found.push("Cleaning");
  if (/\b(?:kitchen|cooking|kitchenette|cook)\b/.test(normalized)) found.push("Kitchen");
  if (/\b(?:gym|fitness|workout)\b/.test(normalized)) found.push("Gym");
  if (/\b(?:pool|swimming\s+pool)\b/.test(normalized)) found.push("Swimming Pool");
  if (/\b(?:soundproof|phone\s+booth|call\s+booths?|work\s+booths?)\b/.test(normalized)) found.push("Soundproof Call Booths");
  if (/\b(?:cctv|surveillance|security\s+camera|digital\s+entry)\b/.test(normalized)) found.push("CCTV / Security");
  if (/\b(?:ac|air\s+condition(?:er|ing)?)\b/.test(normalized)) found.push("AC");
  if (/\b(?:power\s+backup|generator|inverter)\b/.test(normalized)) found.push("Power Backup");
  return found;
}

/**
 * Main Deterministic Intent Detection Engine
 */
export function detectCustomerIntent(rawQuery: string): IntentDetectionResult {
  const normalized = cleanInputText(rawQuery);
  const property = extractPropertyEntity(normalized);
  const location = extractLocationEntity(normalized);
  const college = extractCollegeEntity(normalized);
  const targetAmenities = extractAmenityEntities(normalized);

  const occupancyType = /\b(?:triple|three\s+people|three\s+sharing|triple\s+occupan(?:cy|t))\b/.test(normalized)
    ? "triple"
    : /\b(?:single|private\s+room|one\s+person|single\s+occupan(?:cy|t))\b/.test(normalized)
    ? "single"
    : /\b(?:double|twin|sharing|two\s+people|double\s+occupan(?:cy|t))\b/.test(normalized)
    ? "double"
    : undefined;

  const entities: ExtractedEntities = {
    property,
    location,
    college,
    targetAmenities,
    occupancyType,
  };

  // 1. Off-Topic Queries
  if (
    /\b(?:weather|stock|crypto|bitcoin|cricket|ipl|recipe|horoscope|flight|train\s+ticket|movie\s+ticket)\b/.test(
      normalized
    ) &&
    !/\b(?:reforbs|pg|room|stay|flat|hostel|viman\s+nagar)\b/.test(normalized)
  ) {
    return { intent: "OFF_TOPIC", confidence: 30, entities };
  }

  // 1b. Property Directory / List Properties
  if (
    /\b(?:list\s+.*properties|all\s+(?:reforbs\s+)?properties|properties\s+in\s+pune|property\s+directory|list\s+(?:all\s+)?(?:reforbs\s+)?pgs|all\s+pgs|how\s+many\s+properties|where\s+are\s+properties\s+located|what\s+properties\s+do\s+you\s+have|show\s+(?:all\s+)?properties)\b/.test(
      normalized
    )
  ) {
    return { intent: "PROPERTY_DIRECTORY", confidence: 30, entities, matchedPattern: "property_directory" };
  }

  // 2. Unmarried Couples / Live with Boyfriend / Partner
  // IMPORTANT: Must match BEFORE live availability so "live with my boyfriend" never triggers "availability"!
  if (
    /\b(?:couple|couples|unmarried|boyfriend|girlfriend|partner|live\s+with\s+(?:my\s+)?(?:boyfriend|girlfriend|partner|fiance|fiancee)|stay\s+with\s+(?:my\s+)?(?:boyfriend|girlfriend|partner))\b/.test(
      normalized
    )
  ) {
    return { intent: "COUPLES_POLICY", confidence: 30, entities, matchedPattern: "couples_policy" };
  }

  // 3. Live Availability / Vacancy / Move-in date
  // Context-aware: only if checking immediate/future vacancy
  if (
    /\b(?:available\s+tomorrow|what\s+is\s+available|live\s+availabilit(?:y|ies)|vacanc(?:y|ies)|room\s+available|move-?in\s+date|immediate\s+possession|check\s+availability|current\s+availability)\b/.test(
      normalized
    )
  ) {
    return { intent: "LIVE_AVAILABILITY", confidence: 30, entities, matchedPattern: "live_availability" };
  }

  // 4. Building Capacity / Unknown property detail
  if (
    /\b(?:total\s+(?:building\s+)?capacity|how\s+many\s+beds\s+in\s+building|building\s+capacity|total\s+rooms\s+in\s+building)\b/.test(
      normalized
    )
  ) {
    return { intent: "BUILDING_CAPACITY", confidence: 30, entities, matchedPattern: "building_capacity" };
  }

  // 5. Goa / Bangalore Coming Soon
  if (/\b(?:goa|bangalore|bengaluru)\b/.test(normalized)) {
    return { intent: "DESTINATION_COMING_SOON", confidence: 30, entities, matchedPattern: "destination_coming_soon" };
  }

  // 6. Contact / Phone / Email / Support
  if (
    /\b(?:email\s+(?:and\s+)?phone|phone\s+(?:number|no)?|contact\s+(?:number|no|details|us|support)?|call\s+(?:reforbs|arpit|host)?|support\s+email|helpline|whatsapp\s+number)\b/.test(
      normalized
    ) ||
    (normalized.includes("email") && normalized.includes("phone"))
  ) {
    return { intent: "CONTACT_SUPPORT", confidence: 30, entities, matchedPattern: "contact_support" };
  }

  // 7. Site Visit / Walkthrough / Tour Timings
  if (
    /\b(?:book\s+(?:a\s+)?(?:free\s+)?visit|schedule\s+(?:a\s+)?(?:visit|walkthrough|tour)|tour\s+timings?|visiting\s+hours?|free\s+visit\s+today|can\s+i\s+visit|see\s+the\s+property|walkthrough\s+request)\b/.test(
      normalized
    )
  ) {
    return { intent: "VISIT_TOUR", confidence: 30, entities, matchedPattern: "visit_tour" };
  }

  // 8. Friends / Visitors / Guests
  if (
    /\b(?:friends?\s+(?:allowed|visit|come\s+over|bring)|bring\s+friends?|guest\s+policy|overnight\s+guest|visitors?\s+allowed)\b/.test(
      normalized
    )
  ) {
    return { intent: "VISITORS_GUESTS", confidence: 30, entities, matchedPattern: "visitors_guests" };
  }

  // 9. Food / Mess / Meal Plans
  if (
    /\b(?:food|mess|meal\s*plan|meals?|cooking|compulsory\s+food|forced\s+food|no\s+mess\s+lock|tiffin|catered)\b/.test(
      normalized
    )
  ) {
    return { intent: "FOOD_MESS", confidence: 30, entities, matchedPattern: "food_mess" };
  }

  // 10. Lock-in Period / Minimum Stay
  if (/\b(?:lock-?in\s*(?:period)?|zero\s+lock-?in|minimum\s+stay|lease\s+period)\b/.test(normalized)) {
    return { intent: "LOCK_IN_POLICY", confidence: 30, entities, matchedPattern: "lock_in_policy" };
  }

  // 11. Curfew / Entry Rules / Moral Policing
  if (/\b(?:curfew|curfews|bans|gate\s+closing|entry\s+tim(?:e|ing)|moral\s+policing)\b/.test(normalized)) {
    return { intent: "CURFEW_RULES", confidence: 30, entities, matchedPattern: "curfew_rules" };
  }

  // 12. Security Deposit
  if (
    /\b(?:security\s+deposit|deposit|advance\s+amount|caution\s+deposit|refundable\s+deposit)\b/.test(
      normalized
    )
  ) {
    return { intent: "SECURITY_DEPOSIT", confidence: 30, entities, matchedPattern: "security_deposit" };
  }

  // 13. Brokerage
  if (/\b(?:brokerage|broker\s+fees?|commission)\b/.test(normalized)) {
    return { intent: "BROKERAGE_POLICY", confidence: 30, entities, matchedPattern: "brokerage_policy" };
  }

  // 14. CCTV / Security
  if (
    /\b(?:cctv|surveillance|security\s+camera|24\s*[\/-]?\s*7\s*security)\b/.test(normalized)
  ) {
    return { intent: "CCTV_SECURITY", confidence: 30, entities, matchedPattern: "cctv_security" };
  }

  // 15. Cheapest / Lowest Rent Comparison
  if (
    /\b(?:cheapest|lowest\s+rent|lowest\s+rate|most\s+affordable|minimum\s+rent|lowest\s+monthly\s+rate|budget\s+pg)\b/.test(
      normalized
    )
  ) {
    return { intent: "CHEAPEST_PRICE_COMPARISON", confidence: 30, entities, matchedPattern: "cheapest_price_comparison" };
  }

  // 16. Proximity: Airport
  if (
    /\b(?:closest\s+to\s+(?:pune\s+)?airport|nearest\s+(?:to\s+)?(?:pune\s+)?airport|airport\s+distance|how\s+far\s+is\s+(?:pune\s+)?airport)\b/.test(
      normalized
    )
  ) {
    return { intent: "NEAREST_AIRPORT", confidence: 30, entities, matchedPattern: "nearest_airport" };
  }

  // 17. Proximity: SLS / Symbiosis Law School
  if (
    /\b(?:closest\s+to\s+sls|nearest\s+to\s+sls|closest\s+to\s+symbiosis\s+law\s+school|opposite\s+sls|sls\s+distance)\b/.test(
      normalized
    )
  ) {
    return { intent: "COLLEGE_OFFICE_DISTANCE", confidence: 30, entities, matchedPattern: "sls_proximity" };
  }

  // 18. Proximity: SCMS
  if (
    /\b(?:closest\s+to\s+scms|nearest\s+to\s+scms|near\s+scms|scms\s+distance)\b/.test(
      normalized
    )
  ) {
    return { intent: "COLLEGE_OFFICE_DISTANCE", confidence: 30, entities, matchedPattern: "scms_proximity" };
  }

  // 19. Unspecified College or Office ("closest to my college", "nearest to my office")
  if (
    /\b(?:closest|nearest|near)\s+to\s+(?:my\s+)?(?:college|campus|university|office|workplace)\b/.test(
      normalized
    ) &&
    !college &&
    !location
  ) {
    return { intent: "UNSPECIFIED_COLLEGE_OFFICE", confidence: 30, entities, matchedPattern: "unspecified_college_office" };
  }

  // 20. Other College / Landmark Proximity
  if (
    college ||
    (location && /\b(?:closest|nearest|near|distance|how\s+far)\b/.test(normalized))
  ) {
    return { intent: "COLLEGE_OFFICE_DISTANCE", confidence: 25, entities, matchedPattern: "college_office_distance" };
  }

  // 21. Specific Amenity Query (e.g. "Does Vipasana have parking and laundry?", "Does Park Island have a swimming pool and gym?")
  if (targetAmenities.length > 0 && property) {
    return { intent: "AMENITY_SPECIFIC", confidence: 30, entities, matchedPattern: "amenity_specific" };
  }

  // 22. General Amenities Query
  if (
    /\b(?:amenit(?:y|ies)|facilit(?:y|ies)|what\s+is\s+included|inclusions|services\s+included)\b/.test(
      normalized
    )
  ) {
    return { intent: "AMENITY_SPECIFIC", confidence: 25, entities, matchedPattern: "amenity_general" };
  }

  // 23. Room Types / Single vs Double Occupancy
  if (
    /\b(?:single\s+(?:and|vs|or)\s+double|room\s+types?|room\s+options?|single\s+occupancy|double\s+occupancy|private\s+room|sharing\s+room)\b/.test(
      normalized
    ) &&
    !/\b(?:rent|cost|price|rate)\b/.test(normalized)
  ) {
    return { intent: "OCCUPANCY_SINGLE_DOUBLE", confidence: 25, entities, matchedPattern: "occupancy_single_double" };
  }

  // 24. Rent / Pricing Query (property-specific or general)
  if (
    /\b(?:rent|cost|price|pricing|rate|charges|monthly\s+cost|how\s+much\s+is\s+rent)\b/.test(
      normalized
    )
  ) {
    return { intent: "RENT_PRICING", confidence: 28, entities, matchedPattern: "rent_pricing" };
  }

  // 25. Community / Lifestyle Activities
  if (
    /\b(?:community|events|activities|yoga|bbq|barbecue|movie\s+nights?|tournaments?|glow\s+neon|diy\s+nights?|networking|mentorship)\b/.test(
      normalized
    )
  ) {
    return { intent: "COMMUNITY_ACTIVITIES", confidence: 28, entities, matchedPattern: "community_activities" };
  }

  // 26. Property Directory / List Properties
  if (
    /\b(?:list\s+(?:all\s+)?properties|all\s+properties|property\s+directory|all\s+pgs|how\s+many\s+properties|where\s+are\s+properties\s+located|what\s+properties\s+do\s+you\s+have)\b/.test(
      normalized
    )
  ) {
    return { intent: "PROPERTY_DIRECTORY", confidence: 30, entities, matchedPattern: "property_directory" };
  }

  // 27. Named Property Profile ("Tell me about Shubh Nirvana", "About Moksha")
  if (property && /\b(?:tell\s+me\s+about|about|details\s+of|profile)\b/.test(normalized)) {
    return { intent: "PROPERTY_PROFILE", confidence: 30, entities, matchedPattern: "property_profile" };
  }

  // If a property was mentioned with any general query
  if (property) {
    return { intent: "PROPERTY_PROFILE", confidence: 20, entities, matchedPattern: "property_name_detected" };
  }

  return { intent: "GENERAL_INQUIRY", confidence: 10, entities };
}
