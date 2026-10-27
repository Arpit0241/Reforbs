/**
 * Deterministic Intent Detection and Entity Extraction
 *
 * Implements a strict, multi-stage question analyzer using explicit regex patterns,
 * word boundaries, entity extraction, and question structure analysis.
 *
 * Prevents generic keyword matches from overriding specific customer intent.
 */

export type CustomerIntent =
  | "GOOGLE_MAPS_LINK"
  | "FULL_ADDRESS"
  | "AIRPORT_DISTANCE"
  | "NEAREST_AIRPORT"
  | "SLS_DISTANCE"
  | "IIHM_DISTANCE"
  | "CHRIST_COLLEGE_DISTANCE"
  | "CORPORATE_HUBS"
  | "METRO_STATION"
  | "VIMAN_NAGAR_PROPERTIES"
  | "NEAREST_LOCATION"
  | "UNSPECIFIED_COLLEGE"
  | "UNSPECIFIED_OFFICE"
  | "CHEAPEST_PRICE_COMPARISON"
  | "RENT_PRICING"
  | "SECURITY_DEPOSIT"
  | "DISCOUNTS_OFFERS"
  | "RENT_INCLUSIONS_WIFI_WATER"
  | "ELECTRICITY_INCLUSION"
  | "FOOD_INCLUSIONS"
  | "COOK_FOOD"
  | "STUDENT_OR_COLIVING"
  | "OCCUPANCY_SINGLE_DOUBLE"
  | "PEOPLE_PER_ROOM"
  | "PEOPLE_PER_PG"
  | "COUPLES_POLICY"
  | "CO_ED_POLICY"
  | "CCTV_SECURITY"
  | "CLEANLINESS_HOUSEKEEPING"
  | "MAINTENANCE_SPEED"
  | "VISITORS_GUESTS"
  | "CURFEW_RULES"
  | "PETS_SMOKING_ALCOHOL"
  | "VISIT_BEFORE_BOOKING"
  | "DOCUMENTS_REQUIRED"
  | "AVAILABILITY_VACANCIES"
  | "MINIMUM_STAY_LEASE"
  | "CANCELLATION_REFUND"
  | "PAYMENT_SAFETY"
  | "AMENITIES"
  | "AC_AMENITY"
  | "TV_AMENITY"
  | "WORK_DESK_AMENITY"
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
  // 1b. Google Maps Link & Location Link
  // e.g. "What is the Google Maps location link?" / "map link" / "google maps"
  // -------------------------------------------------------------
  const googleMapsPatterns = [
    /\bgoogle\s+maps?\b/,
    /\b(?:location|map|directions?)\s+link\b/,
    /\blink\s+(?:for\s+|to\s+)?(?:google\s+)?maps?\b/,
    /\blink\s+(?:for\s+|to\s+)?location\b/,
    /\bshare\.google\b/,
    /\bopen\s+(?:reforbs\s+)?(?:location|map)\b/,
    /\bwhere\s+can\s+i\s+find\s+the\s+map\b/,
    /\bmap\s+location\b/,
    /\bgmaps?\b/,
    /^maps?$/i,
  ];

  if (googleMapsPatterns.some((pattern) => pattern.test(normalized))) {
    return {
      intent: "GOOGLE_MAPS_LINK",
      confidence: 0.99,
      entities,
      matchedPattern: "google maps location link pattern",
    };
  }

  // -------------------------------------------------------------
  // 2. Full Address and Location of ReForbs
  // e.g. "location", "address", "where is reforbs located", "what is your location"
  // -------------------------------------------------------------
  const isNearestCheck = /\b(?:nearest|closest|near|closer)\b/.test(normalized);
  const isAirportCheck = /\b(?:airport|flight|terminal)\b/.test(normalized);

  if (
    !isNearestCheck &&
    !isAirportCheck &&
    (
      normalized === "location" ||
      normalized === "locations" ||
      normalized === "address" ||
      normalized === "addresses" ||
      normalized === "where" ||
      /\b(?:full\s+)?address\b/.test(normalized) ||
      /\b(?:reforbs\s+)?locations?\b/.test(normalized) ||
      /\bwhere\s+(?:is|are)\s+(?:reforbs|the\s+pg|the\s+property|you|it)\b/.test(normalized) ||
      /\bwhere\s+(?:is\s+it|are\s+you)\s+(?:located|situated)\b/.test(normalized) ||
      /\bexact\s+(?:street\s+)?address\b/.test(normalized)
    )
  ) {
    return {
      intent: "FULL_ADDRESS",
      confidence: 0.99,
      entities,
      matchedPattern: "full address and location pattern",
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
    (/\b(?:how\s+far|distance)\b/.test(normalized) &&
      /\b(?:pune\s+)?airport\b/.test(normalized)) ||
    /^(?:pune\s+)?airport$/.test(normalized)
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
    /\bhow\s+far\s+is\s+symbiosis\b/.test(normalized) ||
    /^(?:symbiosis|sls|law\s+school)$/.test(normalized)
  ) {
    return {
      intent: "SLS_DISTANCE",
      confidence: 0.99,
      entities,
      matchedPattern: "symbiosis law school distance pattern",
    };
  }

  // -------------------------------------------------------------
  // 4b. IIHM (International Institute of Hotel Management) Distance
  // e.g. "How far is IIHM?"
  // -------------------------------------------------------------
  if (
    /\biihm\b/.test(normalized) ||
    /\bhotel\s+management\b/.test(normalized) ||
    /\binternational\s+institute\s+of\s+hotel\s+management\b/.test(normalized)
  ) {
    return {
      intent: "IIHM_DISTANCE",
      confidence: 0.99,
      entities,
      matchedPattern: "iihm distance pattern",
    };
  }

  // -------------------------------------------------------------
  // 4c. Christ College Wadgaon Sheri Distance
  // e.g. "How far is Christ College?"
  // -------------------------------------------------------------
  if (
    /\bchrist\s+college\b/.test(normalized) ||
    /\bwadgaon\s+sheri\b/.test(normalized)
  ) {
    return {
      intent: "CHRIST_COLLEGE_DISTANCE",
      confidence: 0.99,
      entities,
      matchedPattern: "christ college distance pattern",
    };
  }

  // -------------------------------------------------------------
  // 4d. Corporate Hubs & IT Parks
  // e.g. "What IT parks are nearby?" / "Weikfield" / "Solitaire" / "Sky Vista" / "Nyati Unitree"
  // -------------------------------------------------------------
  if (
    /\b(?:weikfield|solitaire|sky\s+vista|nyati\s+unitree|ptc\s+software|wns|sa\s+technologies)\b/.test(normalized) ||
    /\b(?:it\s+parks?|corporate\s+(?:hubs?|offices?|parks?)|tech\s+parks?)\b/.test(normalized)
  ) {
    return {
      intent: "CORPORATE_HUBS",
      confidence: 0.98,
      entities,
      matchedPattern: "corporate hubs pattern",
    };
  }

  // -------------------------------------------------------------
  // 4e. Metro & Landmarks (Ramwadi Metro / Phoenix Marketcity)
  // e.g. "Where is the nearest metro station?" / "Ramwadi metro"
  // -------------------------------------------------------------
  if (
    /\b(?:ramwadi|metro\s+station|phoenix\s+marketcity|phoenix\s+mall)\b/.test(normalized) ||
    (/\bmetro\b/.test(normalized) && /\b(?:station|connectivity|stop|line)\b/.test(normalized)) ||
    /^metro$/.test(normalized)
  ) {
    return {
      intent: "METRO_STATION",
      confidence: 0.98,
      entities,
      matchedPattern: "metro and landmark transit pattern",
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
    /\bcohabitation\b/,
    /\blive\s+with\s+my\s+boyfriend\b/,
    /\blive\s+with\s+my\s+girlfriend\b/,
    /\bstay\s+with\s+(?:my\s+)?(?:boyfriend|girlfriend|partner)\b/,
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
    /\b(?:can|do)\s+(?:two|2)\s+(?:people|persons|students)\s+(?:live|stay|share)\s+(?:(?:in\s+)?(?:one|a)\s+room)\b/,
    /\b(?:can\s+)?(?:two|2)\s+(?:people|persons)\s+share\s+(?:a\s+|one\s+)?room\b/,
    /\bshare\s+(?:one|a)\s+room\b/,
    /\bsharing\s+a\s+room\b/,
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
    /\bsingle\s+or\s+double\b/.test(normalized) ||
    /^(?:rooms?|occupancy)$/.test(normalized)
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
  // 8b. Student PG vs Co-Living
  // e.g. "Is it a student PG or co-living?"
  // -------------------------------------------------------------
  if (
    /\b(?:student\s+pg\s+or\s+co-?living|co-?living\s+or\s+student\s+pg)\b/.test(normalized) ||
    /\bis\s+(?:it|reforbs)\s+a\s+student\s+pg\b/.test(normalized) ||
    /\bwho\s+can\s+stay\b/.test(normalized) ||
    /\bworking\s+professionals\s+or\s+students\b/.test(normalized)
  ) {
    return {
      intent: "STUDENT_OR_COLIVING",
      confidence: 0.98,
      entities,
      matchedPattern: "student pg or coliving pattern",
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
  // 9b. Cleanliness and Housekeeping
  // e.g. "Is the property clean?" / "housekeeping schedule"
  // -------------------------------------------------------------
  if (
    /\bis\s+(?:the\s+)?(?:property|room|pg)\s+clean\b/.test(normalized) ||
    /\bcleanliness\b/.test(normalized) ||
    /\bhow\s+often\s+is\s+cleaning\b/.test(normalized) ||
    /\bcleaning\s+(?:schedule|frequency)\b/.test(normalized) ||
    /\bhousekeeping\b/.test(normalized)
  ) {
    return {
      intent: "CLEANLINESS_HOUSEKEEPING",
      confidence: 0.98,
      entities,
      matchedPattern: "cleanliness and housekeeping pattern",
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
  // 10b. Visitors and Overnight Guests
  // e.g. "Are visitors allowed?" / "can my friends visit"
  // -------------------------------------------------------------
  if (
    /\b(?:are\s+)?(?:visitors?|guests?|friends?)\s+allowed\b/.test(normalized) ||
    /\bcan\s+(?:my\s+)?friends?\s+visit\b/.test(normalized) ||
    /\bovernight\s+guests?\b/.test(normalized) ||
    /\bvisiting\s+hours\b/.test(normalized) ||
    /\bcan\s+(?:family|parents)\s+visit\b/.test(normalized)
  ) {
    return {
      intent: "VISITORS_GUESTS",
      confidence: 0.98,
      entities,
      matchedPattern: "visitors and overnight guests pattern",
    };
  }

  // -------------------------------------------------------------
  // 10c. Curfew and Gate Closing Rules
  // e.g. "Are there curfew rules?" / "gate closing time"
  // -------------------------------------------------------------
  if (
    /\b(?:is\s+there\s+(?:a\s+)?)?curfew\b/.test(normalized) ||
    /\bgate\s+clos(?:e|ing|es)\b/.test(normalized) ||
    /\btime\s+does\s+the\s+gate\s+close\b/.test(normalized) ||
    /\bentry\s+time\b/.test(normalized) ||
    /\blate\s+(?:night\s+)?entry\b/.test(normalized)
  ) {
    return {
      intent: "CURFEW_RULES",
      confidence: 0.98,
      entities,
      matchedPattern: "curfew rules pattern",
    };
  }

  // -------------------------------------------------------------
  // 10d. Pets, Smoking, and Alcohol Rules
  // e.g. "Are pets allowed?" / "is smoking allowed"
  // -------------------------------------------------------------
  if (
    /\b(?:are\s+)?pets?\s+allowed\b/.test(normalized) ||
    /\b(?:dogs?|cats?|puppy|kitten)\b/.test(normalized) ||
    /\b(?:is\s+|can\s+i\s+)?smok(?:e|ing)\b/.test(normalized) ||
    /\b(?:is\s+|can\s+i\s+)?(?:drink\s+)?alcohol\b/.test(normalized) ||
    /\bdrinking\b/.test(normalized) ||
    /\bliquor\b/.test(normalized)
  ) {
    return {
      intent: "PETS_SMOKING_ALCOHOL",
      confidence: 0.98,
      entities,
      matchedPattern: "pets smoking alcohol pattern",
    };
  }

  // -------------------------------------------------------------
  // 11. Visit Before Booking
  // e.g. "Can I visit before booking?"
  // -------------------------------------------------------------
  if (
    /\bcan\s+i\s+visit\s+(?:the\s+property\s+)?before\s+booking\b/.test(normalized) ||
    /\bvisit\s+before\s+(?:booking|paying|move\s+in)\b/.test(normalized) ||
    /\bsee\s+(?:the\s+)?room\s+before\s+booking\b/.test(normalized) ||
    /^(?:booking|how\s+to\s+book)$/.test(normalized)
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
  // 12b. Payment Safety & Online Payments in Chat
  // e.g. "Can I pay in chat?" / "Can I make a payment online?"
  // -------------------------------------------------------------
  if (
    /\b(?:can\s+i\s+)?(?:make\s+a\s+)?pay(?:ment)?\s+(?:in\s+(?:this\s+)?chat|here|online|through\s+(?:this\s+)?chat)\b/.test(normalized) ||
    /\bpay(?:ment)?\s+(?:in|through)\s+(?:this\s+)?chat\b/.test(normalized) ||
    /\bmake\s+a\s+payment\b/.test(normalized) ||
    /\bpay\s+(?:online|deposit|rent\s+online)\b/.test(normalized) ||
    /\bsend\s+money\b/.test(normalized)
  ) {
    return {
      intent: "PAYMENT_SAFETY",
      confidence: 0.98,
      entities,
      matchedPattern: "payment safety in chat pattern",
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
    /\bmess\s+(?:facility|food)\b/.test(normalized) ||
    /^(?:food|meals?|mess)$/.test(normalized)
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
    /\belectric(?:ity)?\s+(?:bill|charges?|included)\b/.test(normalized) ||
    /\b(?:is\s+)?electricity\s+included\b/.test(normalized) ||
    /\bpay\s+electricity\b/.test(normalized) ||
    /\belectric\s+bill\b/.test(normalized) ||
    /\bpower\s+bill\b/.test(normalized) ||
    /\bsub-?metered\b/.test(normalized)
  ) {
    return {
      intent: "ELECTRICITY_INCLUSION",
      confidence: 0.98,
      entities,
      matchedPattern: "electricity inclusion pattern",
    };
  }

  // -------------------------------------------------------------
  // 14b. Discounts and Offers
  // e.g. "Are discounts available?" / "student discount"
  // -------------------------------------------------------------
  if (
    /\b(?:discounts?|offers?|promotions?|deals?)\b/.test(normalized) ||
    /\bany\s+discount\b/.test(normalized)
  ) {
    return {
      intent: "DISCOUNTS_OFFERS",
      confidence: 0.98,
      entities,
      matchedPattern: "discounts and offers pattern",
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
    /\bdeposit\b/,
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
    /\bprices?\b/,
    /\bpricing\b/,
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
  // 21b. AC Amenity
  // e.g. "Is AC available?" / "air conditioner"
  // -------------------------------------------------------------
  if (
    /\b(?:is\s+)?ac\s+(?:available|provided|included)\b/.test(normalized) ||
    /\bair\s+condition(?:er|ing)?\b/.test(normalized) ||
    /\bdo\s+rooms\s+have\s+ac\b/.test(normalized)
  ) {
    return {
      intent: "AC_AMENITY",
      confidence: 0.98,
      entities,
      matchedPattern: "ac amenity pattern",
    };
  }

  // -------------------------------------------------------------
  // 21c. TV / Media Amenity
  // e.g. "Is TV provided?" / "television"
  // -------------------------------------------------------------
  if (
    /\b(?:is\s+)?tv\s+(?:available|provided|included)\b/.test(normalized) ||
    /\btelevision\b/.test(normalized) ||
    /\bdo\s+rooms\s+have\s+(?:a\s+)?tv\b/.test(normalized)
  ) {
    return {
      intent: "TV_AMENITY",
      confidence: 0.98,
      entities,
      matchedPattern: "tv amenity pattern",
    };
  }

  // -------------------------------------------------------------
  // 21d. Work Desks & Study Tables
  // e.g. "Are work desks provided?" / "study tables"
  // -------------------------------------------------------------
  if (
    /\b(?:are\s+)?work\s+desks?\b/.test(normalized) ||
    /\bstudy\s+(?:tables?|desks?)\b/.test(normalized) ||
    /\bworkspace\b/.test(normalized) ||
    /\bdesk\s+and\s+chair\b/.test(normalized)
  ) {
    return {
      intent: "WORK_DESK_AMENITY",
      confidence: 0.98,
      entities,
      matchedPattern: "work desk amenity pattern",
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
    /\b(?:curfew|gate\s+closing|visitors?|guests?|overnight\s+guests?|pets?|smoking|alcohol)\b/.test(normalized) ||
    /^(?:rules|restrictions|regulations|house\s+rules)$/.test(normalized)
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
  // 28b. Difference from Hostel / Traditional PG
  // e.g. "How is Reforbs different from a hostel?"
  // -------------------------------------------------------------
  if (
    /\b(?:how\s+is\s+reforbs\s+)?different\s+(?:from|than)\s+(?:a\s+)?(?:hostel|pg|standard\s+hostel|traditional\s+pg)\b/.test(normalized) ||
    /\bwhy\s+(?:choose\s+)?reforbs\s+(?:over|instead\s+of)\s+(?:a\s+)?(?:hostel|pg)\b/.test(normalized) ||
    /\bdifference\s+between\s+reforbs\s+and\s+(?:a\s+)?(?:hostel|pg)\b/.test(normalized) ||
    /\bdifferent\s+from\s+(?:a\s+)?hostel\b/.test(normalized)
  ) {
    return {
      intent: "DIFFERENCE_FROM_HOSTEL",
      confidence: 0.98,
      entities,
      matchedPattern: "difference from hostel pattern",
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
