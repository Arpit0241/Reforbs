/**
 * Deterministic Intent Detection and Entity Extraction
 * Authoritative Operational Source: reforbs_chatbot_owner_qa_knowledge.pdf
 * (public/knowledge/reforbs-owner-qa.pdf)
 *
 * Implements a strict, multi-stage question analyzer using explicit regex patterns,
 * word boundaries, entity extraction, and question structure analysis.
 *
 * Prevents generic keyword matches from overriding specific customer intent.
 */

export type CustomerIntent =
  | "PROPERTY_DIRECTORY"
  | "PROPERTY_ELIGIBILITY"
  | "CHEAPEST_PRICE_COMPARISON"
  | "RENT_PRICING"
  | "ROOM_OCCUPANCY"
  | "SECURITY_DEPOSIT"
  | "CANCELLATION_POLICY"
  | "FOOD_MESS"
  | "LAUNDRY_ARRANGEMENT"
  | "AMENITY_SPECIFIC"
  | "KITCHEN_ARRANGEMENTS"
  | "COUPLES_POLICY"
  | "GENDER_VISITOR_RESTRICTIONS"
  | "LOCK_IN_POLICY"
  | "CURFEW_RULES"
  | "PETS_POLICY"
  | "SMOKING_ALCOHOL_POLICY"
  | "ADDRESS_LOCATION"
  | "COLLEGE_OFFICE_DISTANCE"
  | "MAINTENANCE_HELPLINE"
  | "PAYMENT_METHODS"
  | "DISCOUNTS_OFFERS"
  | "CONTACT_SUPPORT"
  | "LIVE_AVAILABILITY"
  | "VISIT_TOUR"
  | "BOOKING_RESERVATION"
  | "DESTINATION_COMING_SOON"
  | "OFF_TOPIC"
  | "PROPERTY_PROFILE"
  | "GENERAL_INQUIRY";

export interface ExtractedEntities {
  property?: string;
  location?: string;
  college?: string;
  targetAmenities: string[];
  occupancyType?: "single" | "double" | "triple";
  targetGender?: "girls" | "boys";
  targetCategory?: "coliving" | "student" | "guesthouse";
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
  if (/\bcommerzone\b/.test(normalized)) return "Commerzone IT Park";
  if (/\bbusiness\s+bay\b/.test(normalized)) return "Business Bay";
  if (/\bgigaspace\b/.test(normalized)) return "Gigaspace IT Park";
  if (/\bpanchshil\b/.test(normalized)) return "Panchshil Tech Park";
  if (/\bbajaj\s+finserv\b/.test(normalized)) return "Bajaj Finserv";
  if (/\bsolitaire\b/.test(normalized)) return "Solitaire Business Hub";
  if (/\bshastrinagar\b/.test(normalized)) return "Shastrinagar";
  if (/\bclover\s+park\b/.test(normalized)) return "Clover Park";
  if (/\bsanjay\s+park\b/.test(normalized)) return "Sanjay Park";
  if (/\bviman\s+nagar\b/.test(normalized)) return "Viman Nagar";
  if (/\blavale\b/.test(normalized)) return "Lavale";
  return undefined;
}

/**
 * Extract college entities mentioned in question
 */
export function extractCollegeEntity(normalized: string): string | undefined {
  if (/\b(?:symbiosis\s+law\s+school|sls|law\s+school|symbiosis\s+law\s+college)\b/.test(normalized))
    return "Symbiosis Law School (SLS)";
  if (/\b(?:scms|symbiosis\s+management\s+college|symbiosis\s+centre\s+for\s+management)\b/.test(normalized))
    return "Symbiosis Management College";
  if (/\b(?:symbiosis\s+international\s+school|sis)\b/.test(normalized))
    return "Symbiosis International School";
  if (/\b(?:symbiosis\s+university(?:\s+lavale)?|lavale\s+campus)\b/.test(normalized))
    return "Symbiosis University, Lavale";
  if (/\bisbm\b/.test(normalized))
    return "ISBM College";
  if (/\biihm\b/.test(normalized))
    return "IIHM";
  if (/\ballen\b/.test(normalized))
    return "Allen";
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
  if (/\b(?:cleaning|housekeeping|maid|clean|brooming|mopping|dusting)\b/.test(normalized)) found.push("Cleaning");
  if (/\b(?:kitchen|cooking|kitchenette|cook)\b/.test(normalized)) found.push("Kitchen");
  if (/\b(?:gym|fitness|workout)\b/.test(normalized)) found.push("Gym");
  if (/\b(?:pool\s+table|tt\s+table|x-?box)\b/.test(normalized)) found.push("Recreation");
  if (/\b(?:cctv|surveillance|security\s+camera|security\s+staff|guards)\b/.test(normalized)) found.push("CCTV / Security");
  if (/\b(?:ac|air\s+condition(?:er|ing)?|air-conditioned|non-ac)\b/.test(normalized)) found.push("AC");
  if (/\b(?:power\s+backup|generator|inverter|electricity)\b/.test(normalized)) found.push("Power Backup");
  if (/\b(?:washroom|bathroom|attached\s+washroom|private\s+washroom)\b/.test(normalized)) found.push("Washroom");
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
    : /\b(?:single|private\s+room|private|one\s+person|single\s+occupan(?:cy|t))\b/.test(normalized)
    ? "single"
    : /\b(?:double|twin|sharing|two\s+people|double\s+occupan(?:cy|t))\b/.test(normalized)
    ? "double"
    : undefined;

  const targetGender = /\b(?:girls?|female|women|ladies|lady)\b/.test(normalized)
    ? "girls"
    : /\b(?:boys?|male|men|gents)\b/.test(normalized)
    ? "boys"
    : undefined;

  const targetCategory = /\b(?:co-?living)\b/.test(normalized)
    ? "coliving"
    : /\b(?:student\s+accommodation|student\s+housing|students?)\b/.test(normalized)
    ? "student"
    : /\b(?:company\s+guesthouses?|guesthouses?|corporate)\b/.test(normalized)
    ? "guesthouse"
    : undefined;

  const entities: ExtractedEntities = {
    property,
    location,
    college,
    targetAmenities,
    occupancyType,
    targetGender,
    targetCategory,
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

  // 2. Unmarried Couples / Live with Boyfriend / Partner
  // Priority: MUST match before Live Availability so "live with my boyfriend" is never classified as availability!
  if (
    /\b(?:couple|couples|couple-?friendly|unmarried|boyfriend|girlfriend|partner|live\s+with\s+(?:my\s+)?(?:boyfriend|girlfriend|partner|fiance|fiancee)|stay\s+with\s+(?:my\s+)?(?:boyfriend|girlfriend|partner)|stay\s+together|couple\s+allowed)\b/.test(
      normalized
    )
  ) {
    return { intent: "COUPLES_POLICY", confidence: 30, entities, matchedPattern: "couples_policy" };
  }

  // 3. Maintenance Helpline Number
  if (
    /\b(?:maintenance\s+helpline(?:\s+number)?|helpline\s+number|report\s+maintenance|maintenance\s+issue|urgent\s+repairs?|emergency\s+support)\b/.test(
      normalized
    )
  ) {
    return { intent: "MAINTENANCE_HELPLINE", confidence: 30, entities, matchedPattern: "maintenance_helpline" };
  }

  // 4. Regular PG Availability / Company Guesthouse Eligibility
  // E.g. "Are Park Island and Pillar Homes available as regular PGs?", "can public stay at company guesthouses"
  if (
    /\b(?:available\s+as\s+regular\s+pgs?|regular\s+pgs?|regular\s+pg|open\s+as\s+public\s+pg|public\s+pgs?|corporate\s+only|employees\s+only|company\s+employees\s+only)\b/.test(
      normalized
    ) ||
    ((normalized.includes("park island") || normalized.includes("pillar homes") || normalized.includes("suyog")) &&
      /\b(?:pg|pgs|regular|public)\b/.test(normalized) &&
      !normalized.includes("rent"))
  ) {
    return { intent: "PROPERTY_ELIGIBILITY", confidence: 30, entities, matchedPattern: "property_eligibility" };
  }

  // 5. Opposite-Gender Visitors / Friends Visiting
  if (
    /\b(?:opposite-?gender(?:\s+visitors?)?|opposite\s+gender|visitors?\s+of\s+opposite\s+genders?|friends?\s+(?:allowed|visit|come\s+over|bring)|bring\s+friends?|guest\s+policy|overnight\s+guest|visitors?\s+allowed)\b/.test(
      normalized
    )
  ) {
    return { intent: "GENDER_VISITOR_RESTRICTIONS", confidence: 30, entities, matchedPattern: "gender_visitor_restrictions" };
  }

  // 6. Pets Policy
  if (/\b(?:pets?|dogs?|cats?|animals?)\b/.test(normalized) && /\b(?:allow|allowed|policy|bring|keep)\b/.test(normalized)) {
    return { intent: "PETS_POLICY", confidence: 30, entities, matchedPattern: "pets_policy" };
  }

  // 7. Smoking and Alcohol Policy
  if (
    /\b(?:smoke|smoking|alcohol|drink|drinking|beer|wine|liquor)\b/.test(normalized) &&
    /\b(?:allow|allowed|policy|can\s+i|permitted|consent|flatmates?)\b/.test(normalized)
  ) {
    return { intent: "SMOKING_ALCOHOL_POLICY", confidence: 30, entities, matchedPattern: "smoking_alcohol_policy" };
  }

  // 8. Curfew / Entry Time Restrictions
  if (/\b(?:curfew|curfews|bans|gate\s+closing|entry\s+tim(?:e|ing)|late\s+entry|in-?time|out-?time)\b/.test(normalized)) {
    return { intent: "CURFEW_RULES", confidence: 30, entities, matchedPattern: "curfew_rules" };
  }

  // 9. Cancellation Policy
  if (/\b(?:cancellation|cancel\s+booking|cancel|what\s+happens\s+if\s+i\s+cancel)\b/.test(normalized)) {
    return { intent: "CANCELLATION_POLICY", confidence: 30, entities, matchedPattern: "cancellation_policy" };
  }

  // 10. Security Deposit and Refund
  if (
    /\b(?:security\s+deposit|deposit\s+refundable|refundable\s+deposit|deposit\s+refund|deposit\s+kitna|advance\s+amount|caution\s+deposit|notice\s+period)\b/.test(
      normalized
    ) ||
    (/\bdeposit\b/.test(normalized) && !/\brent\b/.test(normalized))
  ) {
    return { intent: "SECURITY_DEPOSIT", confidence: 30, entities, matchedPattern: "security_deposit" };
  }

  // 11. Lock-in Period (Annual Lock-in / Zero Lock-in)
  if (/\b(?:lock-?in\s*(?:period)?|zero\s+lock-?in|annual\s+lock-?in|minimum\s+stay|lease\s+period)\b/.test(normalized)) {
    return { intent: "LOCK_IN_POLICY", confidence: 30, entities, matchedPattern: "lock_in_policy" };
  }

  // 12. Laundry Arrangements (frequency, washing machines, paid laundry)
  if (
    /\b(?:laundry|washing\s+machine|washing\s+clothes|how\s+often\s+is\s+laundry|laundry\s+included|laundry\s+free|paid\s+laundry|5\s*kg)\b/.test(
      normalized
    )
  ) {
    return { intent: "LAUNDRY_ARRANGEMENT", confidence: 30, entities, matchedPattern: "laundry_arrangement" };
  }

  // 13. Food / Mess / Meals / Cooking Own Food
  if (
    /\b(?:food|mess|meal\s*plan|meals?|breakfast|lunch|dinner|all\s+3\s+meals|running\s+mess|optional\s+food|cook\s+their\s+own\s+food|cook\s+my\s+own\s+food|cooking|kitchen)\b/.test(
      normalized
    )
  ) {
    return { intent: "FOOD_MESS", confidence: 30, entities, matchedPattern: "food_mess" };
  }

  // 14. Payment Methods Accepted / Rent Due Date
  if (
    /\b(?:payment\s+methods?|payment\s+options?|pay\s+rent|accepted\s+payment|upi|credit\s+card|neft|imps|due\s+date)\b/.test(
      normalized
    )
  ) {
    return { intent: "PAYMENT_METHODS", confidence: 30, entities, matchedPattern: "payment_methods" };
  }

  // 15. Discounts / Special Offers
  if (/\b(?:discount|discounts|special\s+offer|offers|student\s+discount)\b/.test(normalized)) {
    return { intent: "DISCOUNTS_OFFERS", confidence: 30, entities, matchedPattern: "discounts_offers" };
  }

  // 16. Power Backup
  if (/\b(?:power\s+backup|inverter|generator|power\s+cut|electricity\s+backup)\b/.test(normalized)) {
    return { intent: "AMENITY_SPECIFIC", confidence: 30, entities, matchedPattern: "power_backup" };
  }

  // 17. CCTV / Security Staff
  if (/\b(?:cctv|surveillance|security\s+staff|guards|security\s+camera)\b/.test(normalized)) {
    return { intent: "AMENITY_SPECIFIC", confidence: 30, entities, matchedPattern: "cctv_security" };
  }

  // 18. Housekeeping / Daily Cleaning
  if (/\b(?:housekeeping|cleaning|brooming|mopping|dusting|daily\s+cleaning)\b/.test(normalized)) {
    return { intent: "AMENITY_SPECIFIC", confidence: 30, entities, matchedPattern: "housekeeping" };
  }

  // 19. Parking (Bike / Car)
  if (/\b(?:parking|bike\s+parking|car\s+parking|vehicle\s+parking)\b/.test(normalized)) {
    return { intent: "AMENITY_SPECIFIC", confidence: 30, entities, matchedPattern: "parking" };
  }

  // 20. Washrooms Attached / Private
  if (/\b(?:washrooms?|bathrooms?|attached\s+washrooms?|private\s+washrooms?)\b/.test(normalized)) {
    return { intent: "AMENITY_SPECIFIC", confidence: 30, entities, matchedPattern: "washrooms" };
  }

  // 21. Air Conditioning / AC
  if (/\b(?:air-?condition(?:ed|ing)?|ac\s+rooms?|ac\s+available|is\s+.*\s+air-?conditioned|non-?ac)\b/.test(normalized)) {
    return { intent: "AMENITY_SPECIFIC", confidence: 30, entities, matchedPattern: "ac_amenity" };
  }

  // 22. Wi-Fi Included
  if (/\b(?:wi-?fi|internet|broadband|optical\s+fibre)\b/.test(normalized)) {
    return { intent: "AMENITY_SPECIFIC", confidence: 30, entities, matchedPattern: "wifi_amenity" };
  }

  // 23. Address / Location / Google Maps
  // E.g. "What is the address of Suyog Enclave?", "Where is Vairagya located?", "Google maps link"
  if (
    /\b(?:address(?:\s+of)?|where\s+is\s+.*\s+located|location\s+of|google\s+maps?|maps?\s+link|directions?)\b/.test(
      normalized
    )
  ) {
    return { intent: "ADDRESS_LOCATION", confidence: 30, entities, matchedPattern: "address_location" };
  }

  // 24. Proximity / Nearest College ("Which college is closest to Brindavan?", "closest to SLS")
  if (
    college ||
    /\b(?:closest\s+college|nearest\s+college|which\s+college\s+is\s+closest|closest\s+to\s+my\s+college|near\s+symbiosis)\b/.test(
      normalized
    ) ||
    (location && /\b(?:closest|nearest|distance|how\s+far)\b/.test(normalized))
  ) {
    return { intent: "COLLEGE_OFFICE_DISTANCE", confidence: 30, entities, matchedPattern: "college_distance" };
  }

  // 25. Cheapest / Lowest Rent Comparison
  if (
    /\b(?:cheapest|lowest\s+rent|lowest\s+rate|most\s+affordable|minimum\s+rent|lowest\s+monthly\s+rate|budget\s+pg|lowest\s+room\s+rate)\b/.test(
      normalized
    )
  ) {
    return { intent: "CHEAPEST_PRICE_COMPARISON", confidence: 30, entities, matchedPattern: "cheapest_price_comparison" };
  }

  // 26. Live Availability / Vacancy / Move-in date / Available Tomorrow
  if (
    /\b(?:available\s+tomorrow|what\s+is\s+available|live\s+availabilit(?:y|ies)|vacanc(?:y|ies)|room\s+available|move-?in\s+date|when\s+can\s+i\s+move\s+in|check\s+(?:room\s+|bed\s+)?availability|current\s+availability|any\s+(?:room|bed)\s+available)\b/.test(
      normalized
    )
  ) {
    return { intent: "LIVE_AVAILABILITY", confidence: 30, entities, matchedPattern: "live_availability" };
  }

  // 27. Site Visit / Walkthrough / Book a Visit / Visit Before Paying
  if (
    /\b(?:book\s+(?:a\s+)?(?:free\s+)?visit|schedule\s+(?:a\s+)?(?:visit|walkthrough|tour)|tour\s+timings?|visiting\s+hours?|can\s+i\s+visit\s+before\s+paying|visit\s+before\s+paying|see\s+the\s+property|walkthrough\s+request|how\s+can\s+i\s+book\s+a\s+visit)\b/.test(
      normalized
    )
  ) {
    return { intent: "VISIT_TOUR", confidence: 30, entities, matchedPattern: "visit_tour" };
  }

  // 28. How to Book a Room / Booking Documents Needed / Confirm or Reserve
  if (
    /\b(?:how\s+do\s+i\s+book|book\s+a\s+room|reserve\s+a\s+room|confirm\s+or\s+reserve|documents?\s+(?:are\s+)?needed\s+to\s+book|booking\s+documents?|kyc\s+documents?)\b/.test(
      normalized
    )
  ) {
    return { intent: "BOOKING_RESERVATION", confidence: 30, entities, matchedPattern: "booking_reservation" };
  }

  // 29. Can Two People Share / Occupancy Query
  if (
    /\b(?:two\s+people\s+share|can\s+two\s+people|total\s+beds|room\s+types?|room\s+options?|single\s+vs\s+double|triple\s+sharing)\b/.test(
      normalized
    ) &&
    !/\b(?:rent|cost|price|how\s+much)\b/.test(normalized)
  ) {
    return { intent: "ROOM_OCCUPANCY", confidence: 30, entities, matchedPattern: "room_occupancy" };
  }

  // 30. Property Category Directory (e.g. "Which properties are co-living?", "Which properties are student accommodation?", "List all properties")
  if (
    /\b(?:which\s+properties\s+are\s+co-?living|which\s+are\s+co-?living|which\s+properties\s+are\s+student\s+accommodation|which\s+are\s+student\s+accommodation|which\s+properties\s+are\s+company\s+guesthouses|list\s+all\s+properties|all\s+properties|property\s+directory|what\s+properties\s+do\s+you\s+have|properties\s+in\s+pune)\b/.test(
      normalized
    ) ||
    (/\bwhich\s+properties\b/.test(normalized) && targetCategory)
  ) {
    return { intent: "PROPERTY_DIRECTORY", confidence: 30, entities, matchedPattern: "property_directory" };
  }

  // 31. Rent / Pricing Query (e.g. "What is the rent for Nirvana twin sharing?", "What is the private room rent at Moksha?", "How much is Shubh Gateway girls' twin sharing?")
  if (
    /\b(?:rent|cost|price|pricing|rate|charges|monthly\s+cost|how\s+much(?:\s+is)?|rent\s+kitna\s+hai|kitna\s+hai|kiraya)\b/.test(
      normalized
    )
  ) {
    return { intent: "RENT_PRICING", confidence: 28, entities, matchedPattern: "rent_pricing" };
  }

  // 32. Contact / Working Hours / Support Email / Price Updates / Phone / Call
  if (
    /\b(?:contact\s+(?:number|details|us|support|management)?|working\s+hours|support\s+email|who\s+updates\s+prices|reforbsar@gmail\.com|phone(?:\s+number)?|call(?:\s+(?:us|reforbs|them))?|speak\s+to|arpit|property\s+manager|manager|telephone)\b/.test(
      normalized
    )
  ) {
    return { intent: "CONTACT_SUPPORT", confidence: 30, entities, matchedPattern: "contact_support" };
  }

  // 33. Goa / Bangalore Coming Soon
  if (/\b(?:goa|bangalore|bengaluru)\b/.test(normalized)) {
    return { intent: "DESTINATION_COMING_SOON", confidence: 30, entities, matchedPattern: "destination_coming_soon" };
  }

  // 34. Named Property Profile
  if (property && /\b(?:tell\s+me\s+about|about|details\s+of|profile)\b/.test(normalized)) {
    return { intent: "PROPERTY_PROFILE", confidence: 30, entities, matchedPattern: "property_profile" };
  }

  if (property) {
    return { intent: "PROPERTY_PROFILE", confidence: 20, entities, matchedPattern: "property_name_detected" };
  }

  return { intent: "GENERAL_INQUIRY", confidence: 10, entities };
}
