/**
 * Reforbs Customer Support Knowledge Configuration
 * Ground truth from: reforbs_expanded_knowledge_base_v4.pdf (public/knowledge/reforbs-knowledge-v4.pdf)
 * Deterministic Browser-Only Retrieval Configuration (v4.0 - Reviewed 3 November 2026)
 */

export interface KnowledgeItem {
  id: string;
  pageNumber: number;
  section: string;
  question?: string;
  content: string;
  searchTerms: string[];
  propertyNames?: string[];
  isFAQ: boolean;
  priorityWeight?: number;
}

export interface PropertyKnowledge {
  id: string;
  name: string;
  aliases: string[];
  category: "Student Housing" | "Co-Living" | "Company Guesthouse";
  pageNumber: number;
  doubleRate: number;
  doubleRateStr: string;
  singleRate?: number;
  singleRateStr?: string;
  tripleRate?: number;
  tripleRateStr?: string;
  securityDeposit: string;
  locationCue: string;
  description: string;
  doubleDetails?: string[];
  singleDetails?: string[];
  tripleDetails?: string[];
  amenities: string[];
  nearbyEstimates: { place: string; estimate: string }[];
  propertyUrl: string;
  ratingInfo: string;
  coupleFriendly?: boolean;
  annualLockIn?: boolean;
  foodPolicy?: string;
  laundryPolicy?: string;
  contactPhone?: string;
}

export const KNOWLEDGE_PDF_PATH = "/knowledge/reforbs-knowledge-v4.pdf?v=4.0-2026-11-04";
export const KNOWLEDGE_VERSION = "reforbs-kb-v4-2026-11-04";
export const PDF_WORKER_PATH = "/pdf.worker.min.js";

export const CONTACT_PHONE = "+91 74200 40241";
export const CONTACT_PHONE_RAW = "7420040241";
export const HOST_NAME = "Arpit Agarwal";
export const CONTACT_EMAIL = "reforbsar@gmail.com";
export const TOUR_HOURS = "Every day, 10:00 AM to 10:00 PM";
export const PRIMARY_LOCATION = "Viman Nagar, Pune, Maharashtra 411014";

export const WELCOME_MESSAGE =
  "Hi! Welcome to Reforbs. I'm your Reforbs assistant. How can I help you today? Feel free to ask about our 9 residences in Pune, monthly rates, food and laundry inclusions, couple-friendly policies, or nearby campus distances!";

export const RECOMMENDED_FALLBACK =
  "I couldn’t verify that detail from the information currently published by Reforbs. Please contact the team at +91 74200 40241 or reforbsar@gmail.com to confirm.";

export const OFF_TOPIC_FALLBACK =
  "I'm dedicated to helping you with Reforbs accommodation, properties, amenities, room options, and living in Pune. If you have any questions about our spaces or would like to schedule a visit, feel free to ask or call us at +91 74200 40241!";

export const PDF_LOAD_ERROR_MESSAGE =
  "We're having trouble loading our local knowledge document. Please call host Arpit Agarwal directly at +91 74200 40241 for instant assistance.";

export const QUICK_QUESTIONS = [
  "List all properties in Pune",
  "Which is the cheapest PG?",
  "What is rent at Shubh Gateway?",
  "Which is closest to SLS / SCMS?",
  "Free site visit timings",
];

/**
 * 10 Currently Listed Pune Residences (From Section 2 & Pages 4-13 of PDF v4)
 */
export const PROPERTIES_V4: PropertyKnowledge[] = [
  // 1. Shubh Gateway (Student Housing)
  {
    id: "shubh-gateway",
    name: "Shubh Gateway",
    aliases: ["shubh gateway", "gateway", "sls property", "opposite sls", "symbiosis law school property"],
    category: "Student Housing",
    pageNumber: 4,
    doubleRate: 25000,
    doubleRateStr: "₹25,000/month (Girls) | ₹27,000/month (Boys)",
    securityDeposit: "₹40,000",
    locationCue: "Opposite SLS Gate, Viman Nagar, Pune",
    description: "Purpose-built student accommodation directly opposite the Symbiosis Law School gate with gender-segregated towers, breakfast and dinner mess included, and laundry twice weekly.",
    doubleDetails: [
      "Gender-segregated towers (Girls: ₹25,000/mo | Boys: ₹27,000/mo)",
      "Breakfast and dinner included daily in running mess",
      "Laundry service included twice a week (up to 5 kg)",
      "Two orthopedic beds and dedicated study stations",
      "Opposite-gender visitors strictly not allowed",
    ],
    amenities: [
      "Breakfast and dinner included",
      "Laundry twice a week (up to 5 kg)",
      "Zero commute to SLS gate (30 seconds walk)",
      "High-speed optical Wi-Fi",
      "Daily housekeeping",
      "24/7 security and biometric access",
      "Full power backup",
      "Annual student academic lock-in",
    ],
    nearbyEstimates: [
      { place: "Symbiosis Law School (SLS)", estimate: "Directly opposite (30 sec walk)" },
      { place: "Symbiosis SCMS Campus", estimate: "4 mins walk (350 m)" },
      { place: "Phoenix Marketcity", estimate: "4 mins drive (1.1 km)" },
      { place: "Pune International Airport", estimate: "6 mins drive (2.1 km)" },
    ],
    propertyUrl: "https://reforbs.vercel.app/student-housing/shubh-gateway",
    ratingInfo: "4.9 / 5 (148 reviews shown)",
    coupleFriendly: false,
    annualLockIn: true,
    foodPolicy: "Breakfast and dinner included in running mess",
    laundryPolicy: "Included twice a week (up to 5 kg)",
    contactPhone: "+91 70578 97430",
  },

  // 2. Brindavan (Student Housing)
  {
    id: "brindavan",
    name: "Brindavan",
    aliases: ["brindavan", "brindavan student", "sakore nagar", "symbiosis road", "lal path lab", "reforbs living sakore nagar"],
    category: "Student Housing",
    pageNumber: 5,
    doubleRate: 27000,
    doubleRateStr: "₹27,000/month",
    singleRate: 32000,
    singleRateStr: "₹32,000/month",
    securityDeposit: "₹30,000",
    locationCue: "Symbiosis Rd, behind Dr Lal Path Lab, Sakore Nagar, Pune",
    description: "All-inclusive student accommodation behind Dr Lal Path Lab with all 3 meals (breakfast, lunch, dinner) included daily, and laundry twice a week.",
    doubleDetails: [
      "All 3 daily meals included (Breakfast, Lunch, Dinner)",
      "Laundry twice a week (up to 5 kg) included",
      "Two orthopedic single beds & study workstations",
      "Attached washroom with continuous hot water",
      "Opposite-gender visitors strictly not allowed",
    ],
    singleDetails: [
      "100% private single student room",
      "All 3 daily meals included (Breakfast, Lunch, Dinner)",
      "Laundry twice a week (up to 5 kg) included",
      "Private study suite with ergonomic chair",
      "Opposite-gender visitors strictly not allowed",
    ],
    amenities: [
      "All 3 meals (Breakfast, Lunch, Dinner) included",
      "Laundry twice a week (up to 5 kg)",
      "Walking distance to SCMS (3 mins) and SLS (5 mins)",
      "High-speed optical Wi-Fi",
      "Daily housekeeping",
      "24/7 security",
      "Full power backup",
      "Annual student academic lock-in",
    ],
    nearbyEstimates: [
      { place: "Dr Lal Path Lab Sakore Nagar", estimate: "Directly behind (30 sec walk)" },
      { place: "Symbiosis SCMS Campus", estimate: "3 mins walk (250 m)" },
      { place: "Symbiosis Law School", estimate: "5 mins walk (400 m)" },
      { place: "Phoenix Marketcity", estimate: "4 mins drive (1.3 km)" },
      { place: "Pune Airport", estimate: "5 mins drive (1.8 km)" },
    ],
    propertyUrl: "https://reforbs.vercel.app/student-housing/brindavan",
    ratingInfo: "4.9 / 5 (139 reviews shown)",
    coupleFriendly: false,
    annualLockIn: true,
    foodPolicy: "All 3 meals (breakfast, lunch, dinner) included daily",
    laundryPolicy: "Included twice a week (up to 5 kg)",
    contactPhone: "+91 96370 19838",
  },

  // 3. Vairagya (Student Housing)
  {
    id: "vairagya",
    name: "Vairagya",
    aliases: ["vairagya", "reforbs vairagya", "lavale", "symbiosis lavale", "isbm"],
    category: "Student Housing",
    pageNumber: 6,
    tripleRate: 15000,
    tripleRateStr: "₹15,000/month",
    doubleRate: 17000,
    doubleRateStr: "₹17,000/month",
    securityDeposit: "₹20,000",
    locationCue: "Near Symbiosis University, Lavale, Pune (500m to Symbiosis Lavale & ISBM)",
    description: "Quiet student accommodation located 500m from Symbiosis University Lavale and ISBM. Running mess with breakfast and dinner included. Non-AC property.",
    tripleDetails: [
      "Triple sharing room with personal study desk",
      "Breakfast and dinner included in running mess",
      "Attached washroom with 24/7 hot water geyser",
      "High-speed Wi-Fi and daily housekeeping",
      "Opposite-gender visitors strictly not allowed",
    ],
    doubleDetails: [
      "Twin sharing room with personal study desk",
      "Breakfast and dinner included in running mess",
      "Attached washroom with 24/7 hot water geyser",
      "High-speed Wi-Fi and daily housekeeping",
      "Opposite-gender visitors strictly not allowed",
    ],
    amenities: [
      "Breakfast and dinner mess included",
      "500m to Symbiosis Lavale campus and ISBM",
      "High-speed optical Wi-Fi",
      "Daily housekeeping",
      "Distraction-free quiet study environment",
      "Natural ventilation (Non-AC property)",
      "24/7 power backup and security",
      "Annual academic lock-in",
    ],
    nearbyEstimates: [
      { place: "Symbiosis University Lavale Campus", estimate: "500 m (6 mins walk)" },
      { place: "ISBM Pune", estimate: "600 m (7 mins walk)" },
      { place: "Lavale Village Center", estimate: "1 km (3 mins drive)" },
      { place: "Hinjawadi IT Park Phase 3", estimate: "15 mins drive (7 km)" },
    ],
    propertyUrl: "https://reforbs.vercel.app/student-housing/vairagya",
    ratingInfo: "4.9 / 5 (128 reviews shown)",
    coupleFriendly: false,
    annualLockIn: true,
    foodPolicy: "Breakfast and dinner included in running mess",
    laundryPolicy: "Laundry facilities available on premises",
    contactPhone: "+91 73876 14629",
  },

  // 4. Nirvana (Co-Living)
  {
    id: "nirvana",
    name: "Nirvana",
    aliases: ["nirvana", "shubh nirvana", "plot 34", "plot 34 lane 2a", "sanjay park nirvana"],
    category: "Co-Living",
    pageNumber: 7,
    doubleRate: 17000,
    doubleRateStr: "₹17,000/month",
    singleRate: 29000,
    singleRateStr: "₹29,000/month",
    securityDeposit: "₹17,000 (Twin) / ₹29,000 (Private)",
    locationCue: "Plot 34, Lane 2A, Sanjay Park, Pune 411032 (opposite green open space)",
    description: "Independent 1RK studio apartments with attached private kitchens, ensuite washrooms, and private balconies. 100% couple friendly with zero lock-in period.",
    doubleDetails: [
      "Twin sharing in independent 1RK apartment",
      "Attached private modular kitchen with cooking freedom",
      "Two luxury beds with orthopedic spring mattresses",
      "Individual wardrobes with digital locks",
      "Ensuite modern washroom with continuous hot water",
    ],
    singleDetails: [
      "Entire private 1RK studio apartment exclusively for you",
      "Attached private modular kitchen with cooking freedom",
      "King-size bed with hotel-grade linen",
      "Couple friendly with complete freedom and no curfews",
      "Private balcony and individual split AC",
    ],
    amenities: [
      "Private attached kitchen in each 1RK",
      "100% Couple friendly freedom",
      "Zero lock-in period guarantee",
      "High-speed fiber Wi-Fi",
      "Daily professional housekeeping",
      "Washing machine on premises",
      "Full generator power backup",
      "Food optional (freedom to cook or order)",
    ],
    nearbyEstimates: [
      { place: "Phoenix Marketcity", estimate: "4 mins drive (1.1 km)" },
      { place: "Symbiosis Law & Management Campuses", estimate: "5 mins drive (1.4 km)" },
      { place: "WeWork Viman Nagar", estimate: "4 mins walk (350 m)" },
      { place: "Pune International Airport", estimate: "6 mins drive (2.1 km)" },
    ],
    propertyUrl: "https://reforbs.vercel.app/coliving/nirvana",
    ratingInfo: "4.9 / 5 (168 reviews shown)",
    coupleFriendly: true,
    annualLockIn: false,
    foodPolicy: "Food optional (Attached private kitchen for self-cooking)",
    laundryPolicy: "Washing machine available on premises",
    contactPhone: "+91 74200 40241",
  },

  // 5. Moksha (Co-Living)
  {
    id: "moksha",
    name: "Moksha",
    aliases: ["moksha", "plot 61", "plot 61 lane 2a", "sanjay park moksha"],
    category: "Co-Living",
    pageNumber: 8,
    doubleRate: 17000,
    doubleRateStr: "₹17,000/month",
    singleRate: 24000,
    singleRateStr: "₹24,000/month",
    securityDeposit: "₹17,000 (Twin) / ₹24,000 (Private)",
    locationCue: "Plot 61, Lane 2A, Sanjay Park, Pune 411032 (near Joggers Park & Cafes)",
    description: "Spacious 3BHK layout with a maximum of only 4 residents per floor for supreme privacy and comfort. Couple friendly, zero lock-in, with fairy-lit terrace spaces.",
    doubleDetails: [
      "Twin sharing in low-density 3BHK (max 4 per floor)",
      "Two posture-care mattresses and dual wardrobes",
      "High-speed fiber Wi-Fi and ergonomic desks",
      "Ensuite modern washroom with 24/7 hot water",
      "Linen change and daily housekeeping included",
    ],
    singleDetails: [
      "Private executive bedroom with ensuite bathroom",
      "Queen-size bed with plush headboard",
      "Ergonomic work desk setup with high-speed ports",
      "Couple friendly with no curfew restrictions",
      "Access to open terrace and shared kitchen",
    ],
    amenities: [
      "Max 4 residents per floor (3BHK layout)",
      "Couple friendly freedom",
      "Zero lock-in period guarantee",
      "High-speed fiber Wi-Fi",
      "Daily housekeeping and care",
      "Washing machine on premises",
      "Full modular kitchen access",
      "Food optional",
    ],
    nearbyEstimates: [
      { place: "Joggers Park & Cafes", estimate: "3 mins walk (250 m)" },
      { place: "Phoenix Marketcity", estimate: "4 mins drive (1.2 km)" },
      { place: "Symbiosis Campuses", estimate: "5 mins drive (1.5 km)" },
      { place: "Pune Airport", estimate: "7 mins drive (2.4 km)" },
    ],
    propertyUrl: "https://reforbs.vercel.app/coliving/moksha",
    ratingInfo: "4.9 / 5 (164 reviews shown)",
    coupleFriendly: true,
    annualLockIn: false,
    foodPolicy: "Food optional (Full kitchen available for self-cooking)",
    laundryPolicy: "Washing machine available on premises",
    contactPhone: "+91 74200 40241",
  },

  // 6. Vipasna (Co-Living)
  {
    id: "vipasna",
    name: "Vipasna",
    aliases: ["vipasna", "vipasana", "plot 36", "plot 36 lane 3", "sanjay park vipasna"],
    category: "Co-Living",
    pageNumber: 9,
    doubleRate: 17000,
    doubleRateStr: "₹17,000/month",
    singleRate: 27000,
    singleRateStr: "₹27,000/month",
    securityDeposit: "₹17,000 (Twin) / ₹27,000 (Private)",
    locationCue: "Plot 36, Lane 3, Sanjay Park, Pune 411032",
    description: "Hotel-style ensuite rooms designed with modern architectural finishes, high acoustic privacy, couple friendly policies, and zero lock-in period.",
    doubleDetails: [
      "Two luxury beds with hotel-grade linen",
      "Individual wooden wardrobes with locks",
      "Dual workstations with ergonomic seating",
      "Ensuite modern washroom with continuous hot water",
      "Daily housekeeping and high-speed Wi-Fi",
    ],
    singleDetails: [
      "Private hotel-style ensuite studio room",
      "King-size bed with orthopedic mattress",
      "Private workstation with multiple power outlets",
      "Attached luxury bathroom",
      "Couple friendly with no curfew restrictions",
    ],
    amenities: [
      "Hotel-style ensuite rooms",
      "Couple friendly freedom",
      "Zero lock-in period guarantee",
      "High-speed optical Wi-Fi",
      "Daily housekeeping & linen change",
      "Washing machine access",
      "Shared kitchen access",
      "Food optional",
    ],
    nearbyEstimates: [
      { place: "Sanjay Park Main Road", estimate: "2 mins walk (150 m)" },
      { place: "Phoenix Marketcity", estimate: "4 mins drive (1.2 km)" },
      { place: "Symbiosis Campuses", estimate: "5 mins drive (1.5 km)" },
      { place: "Pune Airport", estimate: "6 mins drive (2.0 km)" },
    ],
    propertyUrl: "https://reforbs.vercel.app/coliving/vipasna",
    ratingInfo: "4.9 / 5 (152 reviews shown)",
    coupleFriendly: true,
    annualLockIn: false,
    foodPolicy: "Food optional",
    laundryPolicy: "Washing machine available on premises",
    contactPhone: "+91 74200 40241",
  },

  // 7. Park Island (Company Guesthouse)
  {
    id: "park-island",
    name: "Park Island",
    aliases: ["park island", "park island guesthouse", "shastrinagar guesthouse", "corporate park island"],
    category: "Company Guesthouse",
    pageNumber: 10,
    doubleRate: 20000,
    doubleRateStr: "₹20,000/month",
    securityDeposit: "₹20,000",
    locationCue: "Shastrinagar, Pune 411006",
    description: "Dedicated corporate guesthouse exclusively for contracted company employees. Not open to general public / retail PGs.",
    doubleDetails: [
      "Twin sharing corporate suite for contracted corporate employees",
      "Executive wooden beds with orthopedic bedding",
      "Work desks with enterprise fiber network",
      "Attached washroom with 24/7 hot water supply",
      "Daily corporate housekeeping and linen sanitization",
    ],
    amenities: [
      "Dedicated corporate guesthouse facility",
      "Exclusively for corporate client personnel (Not an open PG)",
      "Enterprise optical fiber Wi-Fi",
      "Daily professional housekeeping",
      "24/7 security and access control",
      "Full power generator backup",
    ],
    nearbyEstimates: [
      { place: "Shastrinagar Chowk", estimate: "2 mins walk (150 m)" },
      { place: "Kharadi EON IT Park", estimate: "8 mins drive (3.8 km)" },
      { place: "Kalyani Nagar Tech Parks", estimate: "6 mins drive (2.4 km)" },
      { place: "Pune Airport", estimate: "10 mins drive (4.2 km)" },
    ],
    propertyUrl: "https://reforbs.vercel.app/coliving/park-island",
    ratingInfo: "4.9 / 5 (142 reviews shown)",
    coupleFriendly: false,
    annualLockIn: false,
    foodPolicy: "Corporate managed pantry and catering",
    laundryPolicy: "Professional laundry services on premises",
    contactPhone: "+91 74200 40241",
  },

  // 8. Pillar Homes (Company Guesthouse)
  {
    id: "pillar-homes",
    name: "Pillar Homes",
    aliases: ["pillar homes", "pillar homes guesthouse", "clover park guesthouse", "corporate pillar homes"],
    category: "Company Guesthouse",
    pageNumber: 11,
    doubleRate: 25000,
    doubleRateStr: "₹25,000/month",
    securityDeposit: "₹25,000",
    locationCue: "Clover Park, Viman Nagar, Pune",
    description: "Dedicated corporate guesthouse in prime Clover Park, reserved exclusively for employees of partnered companies. Not an open PG.",
    doubleDetails: [
      "Twin sharing executive suite for corporate guests",
      "Two luxury wooden beds with posture mattresses",
      "Dual executive work desks with high-speed ports",
      "Attached washroom with continuous hot water supply",
      "Daily housekeeping and linen change",
    ],
    amenities: [
      "Exclusive corporate guesthouse residence",
      "Exclusively for corporate partner personnel (Not an open PG)",
      "High-speed enterprise Wi-Fi",
      "Daily professional cleaning",
      "24/7 power backup and security",
      "Clover Park central location",
    ],
    nearbyEstimates: [
      { place: "Clover Park Central Green", estimate: "2 mins walk (100 m)" },
      { place: "Symbiosis Campuses", estimate: "4 mins drive (1.1 km)" },
      { place: "Phoenix Marketcity", estimate: "5 mins drive (1.4 km)" },
      { place: "Pune Airport", estimate: "7 mins drive (2.3 km)" },
    ],
    propertyUrl: "https://reforbs.vercel.app/coliving/pillar-homes",
    ratingInfo: "4.9 / 5 (135 reviews shown)",
    coupleFriendly: false,
    annualLockIn: false,
    foodPolicy: "Corporate dining / catering facilitated",
    laundryPolicy: "In-house laundry management",
    contactPhone: "+91 74200 40241",
  },

  // 9. Suyog Enclave (Company Guesthouse)
  {
    id: "suyog-enclave",
    name: "Suyog Enclave",
    aliases: ["suyog enclave", "suyog", "bajaj finserv guesthouse", "sakore nagar corporate"],
    category: "Company Guesthouse",
    pageNumber: 12,
    doubleRate: 25000,
    doubleRateStr: "₹25,000/month",
    securityDeposit: "₹25,000",
    locationCue: "64P, behind Bajaj Finserv, Sakore Nagar, Pune",
    description: "Dedicated corporate company guesthouse located behind Bajaj Finserv in Sakore Nagar, exclusively for corporate enterprise employees. Not an open PG.",
    doubleDetails: [
      "Twin sharing corporate suite for corporate employees",
      "Executive wooden beds with ergonomic work desks",
      "Attached washroom with continuous hot water supply",
      "Daily housekeeping and linen sanitization",
      "High-speed enterprise fiber network",
    ],
    amenities: [
      "Dedicated corporate guesthouse facility",
      "Exclusively for contracted corporate personnel (Not an open PG)",
      "Direct proximity behind Bajaj Finserv",
      "Enterprise optical fiber Wi-Fi",
      "Professional daily cleaning",
      "24/7 power backup and security",
    ],
    nearbyEstimates: [
      { place: "Bajaj Finserv Hub", estimate: "Directly behind (1 min walk)" },
      { place: "Symbiosis Campuses", estimate: "4 mins drive (1.2 km)" },
      { place: "Phoenix Marketcity", estimate: "5 mins drive (1.5 km)" },
      { place: "Pune Airport", estimate: "6 mins drive (2.0 km)" },
    ],
    propertyUrl: "https://reforbs.vercel.app/coliving/suyog",
    ratingInfo: "4.9 / 5 (138 reviews shown)",
    coupleFriendly: false,
    annualLockIn: false,
    foodPolicy: "Corporate managed pantry and catering",
    laundryPolicy: "Professional laundry services on premises",
    contactPhone: "+91 74200 40241",
  },
];

/**
 * Standard Stop Words to filter out during tokenization
 */
export const STOP_WORDS = new Set([
  "a", "about", "an", "and", "are", "as", "at", "be", "by", "can", "do", "does", "for",
  "from", "has", "have", "how", "i", "if", "in", "is", "it", "its", "just", "me", "my",
  "no", "not", "of", "on", "or", "our", "please", "tell", "that", "the", "there", "these",
  "they", "this", "to", "us", "was", "we", "what", "when", "where", "which", "who", "why",
  "will", "with", "you", "your",
]);

/**
 * Domain Synonyms Map: Maps customer phrasing to knowledge concepts
 */
export const SYNONYM_GROUPS: Record<string, string[]> = {
  rent: [
    "rent", "rental", "monthly cost", "monthly rent", "price", "pricing", "cost", "charges",
    "fees", "tariff", "rate", "budget", "bill", "expense", "cheapest", "lowest",
  ],
  deposit: [
    "deposit", "security deposit", "advance", "advance payment", "refundable deposit",
    "security amount", "caution deposit", "one month rent",
  ],
  property: [
    "property", "properties", "hostel", "pg", "stay", "accommodation", "residence",
    "residences", "place", "living space", "spaces", "building", "flat",
  ],
  occupancy: [
    "occupancy", "single occupancy", "double occupancy", "single sharing", "double sharing",
    "private room", "sharing room", "room type", "sharing", "two people", "single occupant",
  ],
  amenity: [
    "amenity", "amenities", "facility", "facilities", "service", "services", "features",
    "inclusions", "provision", "provisions", "benefits",
  ],
  wifi: [
    "wifi", "wi-fi", "internet", "broadband", "optical fibre", "fibre", "wireless",
    "connection", "connectivity", "net", "high-speed", "dual-band", "gigabit",
  ],
  cleaning: [
    "cleaning", "clean", "housekeeping", "daily cleaning", "maid", "sweeper", "hygiene",
    "maintenance", "room cleaning", "cleanliness", "professional cleaning",
  ],
  laundry: [
    "laundry", "washing machine", "washing clothes", "clothes wash", "wash", "dryer",
    "laundry facility", "laundry care", "on-site laundry",
  ],
  kitchen: [
    "kitchen", "cooking", "cook", "cook my own food", "private kitchen", "shared kitchen",
    "kitchenette", "modular kitchen",
  ],
  food: [
    "food", "meals", "mess", "meal plan", "breakfast", "dinner", "lunch", "catered", "tiffin",
    "compulsory mess", "mess package", "no mess lock",
  ],
  parking: [
    "parking", "car parking", "bike parking", "vehicle", "two-wheeler", "four-wheeler",
    "free parking", "vehicle parking",
  ],
  ac: [
    "ac", "air conditioner", "air conditioning", "cooling", "ac room",
  ],
  gym: [
    "gym", "fitness", "workout", "fitness gym", "in-house gym",
  ],
  pool: [
    "pool", "swimming pool", "swimming",
  ],
  cctv: [
    "cctv", "security", "surveillance", "camera", "digital entry", "24/7 security",
  ],
  booth: [
    "soundproof", "phone booth", "calling booth", "work booth", "call booths",
  ],
  rules: [
    "rules", "curfew", "bans", "timing", "lock-in", "notice period", "restrictions",
    "gate closing", "entry time", "zero bans", "zero curfews",
  ],
  guests: [
    "guests", "friends", "visitors", "invite friends", "overnight", "visitors allowed",
  ],
  couples: [
    "couple", "couples", "unmarried", "boyfriend", "girlfriend", "partner", "live with",
    "stay with boyfriend", "live together", "co-ed",
  ],
  visit: [
    "visit", "walkthrough", "site visit", "tour", "free visit", "schedule visit", "book visit",
    "see the room", "inspection", "appointment", "timings", "tour hours",
  ],
  contact: [
    "contact", "phone", "phone number", "call", "number", "mobile", "reach", "speak",
    "host", "arpit", "helpline", "email", "support", "whatsapp",
  ],
};

/**
 * 25 Verified Passages strictly extracted from PDF v4 (Pages 1-21)
 */
export const VERIFIED_PDF_PASSAGES: KnowledgeItem[] = [
  // Page 3 - Directory
  {
    id: "v4-p3-directory",
    pageNumber: 3,
    section: "Current Pune property directory",
    question: "How many properties does Reforbs currently list in Pune?",
    content:
      "The homepage currently shows 10 active Pune spaces. The individual property pages name Shubh Gateway, Reforbs Living Sakore Nagar, Reforbs Vairagya, Moksha, Shubh Nirvana, Vipasana, Suyog Co-Living, Reforbs Park Island, Pillar Homes Co-Living and Langston Downtown.",
    searchTerms: ["properties", "pgs", "co-living", "student housing", "all locations", "list all pgs", "how many properties"],
    isFAQ: true,
    priorityWeight: 1.5,
  },
  {
    id: "v4-p3-cheapest-double",
    pageNumber: 3,
    section: "Current Pune property directory",
    question: "Which is the cheapest Reforbs PG?",
    content:
      "The lowest monthly rate currently shown in the property pages is Reforbs Living Sakore Nagar at ₹12,000 for double occupancy. Its single-occupancy rate is ₹17,500/month. Confirm current availability and final pricing with the host.",
    searchTerms: ["cheapest pg", "lowest rent", "affordable pg", "cheapest double", "budget pg", "lowest monthly rate"],
    isFAQ: true,
    priorityWeight: 1.8,
  },
  {
    id: "v4-p3-cheapest-single",
    pageNumber: 3,
    section: "Current Pune property directory",
    question: "What is the cheapest single-occupancy room?",
    content:
      "Reforbs Living Sakore Nagar is listed at ₹17,500/month for single occupancy, the lowest single rate among the ten property pages reviewed.",
    searchTerms: ["cheapest single", "lowest single room", "single occupancy lowest", "cheapest private room"],
    isFAQ: true,
    priorityWeight: 1.8,
  },

  // Page 4 - Shubh Gateway
  {
    id: "v4-p4-shubh-gateway",
    pageNumber: 4,
    section: "Shubh Gateway",
    question: "What is the rent, amenities, and location of Shubh Gateway?",
    content:
      "Shubh Gateway (Student Housing) is located opposite Symbiosis Law School, Viman Nagar; directly opposite SLS Campus Gate.\n• Double occupancy: ₹12,500/month (Security: 1 month rent)\n• Single occupancy: ₹18,000/month (Security: 1 month rent)\n• Amenities included: Free high-speed Wi-Fi, Daily cleaning services, Laundry care, Quiet study desks, Private kitchen access, Full power backup, 24/7 security and CCTV, Freedom / zero bans.\n• Proximity estimates: Symbiosis Law School is 1 min walk (50 m); SCMS is 4 mins walk (350 m); Phoenix Marketcity is 4 mins drive (1.2 km); Pune Airport is 7 mins drive (2.4 km).",
    searchTerms: ["shubh gateway", "gateway", "sls", "symbiosis law school", "12500", "18000"],
    propertyNames: ["Shubh Gateway"],
    isFAQ: false,
    priorityWeight: 1.5,
  },

  // Page 5 - Sakore Nagar
  {
    id: "v4-p5-sakore-nagar",
    pageNumber: 5,
    section: "Reforbs Living Sakore Nagar",
    question: "What is the rent, amenities, and location of Reforbs Living Sakore Nagar?",
    content:
      "Reforbs Living Sakore Nagar (Student Housing) is located in Sakore Nagar, near SCMS Campus, Viman Nagar, Pune.\n• Double occupancy: ₹12,000/month (Security: 1 month rent)\n• Single occupancy: ₹17,500/month (Security: 1 month rent)\n• Amenities included: High-speed optical Wi-Fi, Daily professional cleaning, Laundry care, CCTV and digital entry, Quiet study desks, Power inverter backup, Kitchenette facility, Recreation and lounge.\n• Proximity estimates: SCMS is 3 mins walk (250 m); Symbiosis Law School is 5 mins walk (400 m); Viman Nagar Joggers Park is 4 mins walk (350 m); Pune Airport is 6 mins drive (2.1 km).",
    searchTerms: ["sakore nagar", "reforbs living sakore nagar", "scms", "12000", "17500"],
    propertyNames: ["Reforbs Living Sakore Nagar"],
    isFAQ: false,
    priorityWeight: 1.5,
  },

  // Page 6 - Vairagya
  {
    id: "v4-p6-vairagya",
    pageNumber: 6,
    section: "Reforbs Vairagya",
    question: "What is the rent, amenities, and location of Reforbs Vairagya?",
    content:
      "Reforbs Vairagya (Student Housing) is located in Clover Park, near Symbiosis Campus, Viman Nagar, Pune; near Symbiosis International School and Datta Mandir.\n• Double occupancy: ₹13,000/month (Security: 1 month rent)\n• Single occupancy: ₹19,000/month (Security: 1 month rent)\n• Amenities included: Dual-band optical Wi-Fi, Daily professional cleaning, Private kitchen freedom, Zero moral policing / curfews, Full power backup, On-site laundry, 24/7 CCTV and security, Direct host support.\n• Proximity estimates: Symbiosis International School is 2 mins walk (150 m); SCMS is 5 mins walk (450 m); Symbiosis Law School is 6 mins walk (500 m); Pune Airport is 8 mins drive (2.6 km).",
    searchTerms: ["vairagya", "reforbs vairagya", "clover park", "13000", "19000"],
    propertyNames: ["Reforbs Vairagya"],
    isFAQ: false,
    priorityWeight: 1.5,
  },

  // Page 7 - Moksha
  {
    id: "v4-p7-moksha",
    pageNumber: 7,
    section: "Moksha",
    question: "What is the rent, security deposit, and amenities of Moksha?",
    content:
      "Moksha (Co-Living) is located on Row House Lane, near Joggers Park, Viman Nagar, Pune.\n• Double occupancy: ₹14,500/month (Security: 1 month rent)\n• Single occupancy: ₹22,000/month (Security: 1 month rent)\n• Security deposit: 1 month rent for each listed room option.\n• Amenities included: Dual-band optical Wi-Fi, Daily professional care, In-house fitness gym, Bohemian garden terraces, Private kitchen facilities, Power inverter backup, Community yoga and BBQ, Zero lock-in guarantee.\n• Proximity estimates: Viman Nagar Joggers Park is 2 mins walk (150 m); Phoenix Marketcity is 5 mins drive (1.4 km); Pune Airport is 7 mins drive (2.3 km); Symbiosis campuses are 6 mins walk (500 m).",
    searchTerms: ["moksha", "row house lane", "security deposit moksha", "14500", "22000"],
    propertyNames: ["Moksha"],
    isFAQ: false,
    priorityWeight: 1.5,
  },

  // Page 8 - Shubh Nirvana
  {
    id: "v4-p8-shubh-nirvana",
    pageNumber: 8,
    section: "Shubh Nirvana",
    question: "Tell me about Shubh Nirvana and its amenities.",
    content:
      "Shubh Nirvana (Co-Living flagship) is located in Lane 2, near Phoenix Marketcity, Viman Nagar, Pune.\n• Double occupancy: ₹15,000/month (Security: 1 month rent)\n• Single occupancy: ₹22,500/month (Security: 1 month rent)\n• Amenities included: Gigabit fibre Wi-Fi, Professional housekeeping and linen, In-house fitness gym, Pool table and games lounge, UV neon chill space, Private modular kitchen, Full generator backup, Zero bans or curfews.\n• Proximity estimates: Phoenix Marketcity Mall is 4 mins drive (1.1 km); WeWork / Regus is 3 mins walk (250 m); EON IT Park / Kharadi is 12 mins drive (5.2 km); Pune Airport is 6 mins drive (2.1 km); Symbiosis campuses are 5 mins walk (400 m).",
    searchTerms: ["shubh nirvana", "nirvana", "lane 2", "uv neon", "pool table", "15000", "22500"],
    propertyNames: ["Shubh Nirvana"],
    isFAQ: false,
    priorityWeight: 1.5,
  },

  // Page 9 - Vipasana
  {
    id: "v4-p9-vipasana",
    pageNumber: 9,
    section: "Vipasana",
    question: "Does Vipasana have parking and laundry?",
    content:
      "Yes. Vipasana specifically lists Free vehicle parking and a Laundry facility among its included amenities.\n• Double occupancy: ₹14,000/month (Security: 1 month rent)\n• Single occupancy: ₹21,000/month (Security: 1 month rent; includes air conditioner)\n• Amenities included: High-speed optical Wi-Fi, Daily professional cleaning, Laundry facility, Spacious living area, Private kitchen access, Full power backup, Free vehicle parking, Zero restrictions on friends.\n• Proximity estimates: Phoenix Marketcity is 4 mins drive (1.1 km); Symbiosis campuses are 5 mins walk (400 m); Viman Nagar Metro Station is 6 mins walk (600 m); Pune Airport is 7 mins drive (2.4 km).",
    searchTerms: ["vipasana", "vipasna", "parking", "laundry", "central avenue", "14000", "21000"],
    propertyNames: ["Vipasana"],
    isFAQ: false,
    priorityWeight: 1.5,
  },

  // Page 10 - Suyog Co-Living
  {
    id: "v4-p10-suyog",
    pageNumber: 10,
    section: "Suyog Co-Living",
    question: "Which property is closest to Pune Airport?",
    content:
      "Based on the website’s published approximate driving distances, Suyog Co-Living is listed at 1.8 km / about 5 minutes from Pune International Airport, followed by Langston Downtown at 1.9 km / about 5 minutes. Actual travel time depends on traffic and route.\n• Suyog location: Near Dutta Mandir Chowk, Viman Nagar, Pune.\n• Double occupancy: ₹14,500/month\n• Single occupancy: ₹21,500/month (Air-conditioned executive suite)\n• Amenities included: Dual-band optical Wi-Fi, Daily professional cleaning, Private kitchen freedom, Air-conditioned units available, Zero moral policing / curfews, Full power backup, On-site laundry, Direct host support.",
    searchTerms: ["suyog", "suyog co-living", "closest to pune airport", "nearest airport", "dutta mandir", "1800m", "1.8 km"],
    propertyNames: ["Suyog Co-Living"],
    isFAQ: true,
    priorityWeight: 1.8,
  },

  // Page 11 - Reforbs Park Island
  {
    id: "v4-p11-park-island",
    pageNumber: 11,
    section: "Reforbs Park Island",
    question: "Does Park Island have a swimming pool and gym?",
    content:
      "Yes. Reforbs Park Island specifically lists Swimming pool access and an In-house fitness gym among its included amenities.\n• Double occupancy: ₹15,500/month (Security: 1 month rent)\n• Single occupancy: ₹23,000/month (Security: 1 month rent)\n• Amenities included: Swimming pool access, In-house fitness gym, Dual-band optical Wi-Fi, Daily professional cleaning, Private kitchen freedom, Zero curfew or moral policing, Full power backup, Direct host support.\n• Proximity estimates: Park Island Enclave and gardens: on-premise (0 m); Airport Road Business Hub: 3 mins drive (1.1 km); Phoenix Marketcity: 5 mins drive (1.8 km); Pune Airport: 6 mins drive (2.1 km).",
    searchTerms: ["park island", "swimming pool", "pool", "gym", "15500", "23000"],
    propertyNames: ["Reforbs Park Island"],
    isFAQ: false,
    priorityWeight: 1.5,
  },

  // Page 12 - Pillar Homes
  {
    id: "v4-p12-pillar-homes",
    pageNumber: 12,
    section: "Pillar Homes Co-Living",
    question: "What is the rent, amenities, and location of Pillar Homes Co-Living?",
    content:
      "Pillar Homes Co-Living is located near Cafe Peter, central Viman Nagar, Pune; walking distance to cafes, gyms, and Phoenix Mall.\n• Double occupancy: ₹15,000/month (Security: 1 month rent)\n• Single occupancy: ₹22,000/month (Security: 1 month rent)\n• Amenities included: Minimalist Scandinavian design, Dual-band optical Wi-Fi, Daily professional cleaning, Private kitchen freedom, Cafe strip location, Zero moral policing / curfews, Full power backup, Direct host support.\n• Proximity estimates: Viman Nagar Cafe Strip: 1 min walk (50 m); Joggers Park: 4 mins walk (300 m); Phoenix Marketcity: 5 mins drive (1.5 km); Pune Airport: 8 mins drive (2.7 km).",
    searchTerms: ["pillar homes", "cafe peter", "scandinavian design", "15000", "22000"],
    propertyNames: ["Pillar Homes Co-Living"],
    isFAQ: false,
    priorityWeight: 1.5,
  },

  // Page 13 - Langston Downtown
  {
    id: "v4-p13-langston",
    pageNumber: 13,
    section: "Langston Downtown",
    question: "Does Langston have soundproof work booths?",
    content:
      "Yes. Langston Downtown specifically includes Soundproof call booths and an Executive business lounge among its included amenities.\n• Double occupancy: ₹16,000/month (Security: 1 month rent)\n• Single occupancy: ₹24,000/month (Security: 1 month rent)\n• Amenities included: Executive business lounge, Soundproof call booths, Dual redundant optical Wi-Fi, Daily professional cleaning, Private modular kitchens, Zero moral policing / curfews, Full power backup, Direct host VIP support.\n• Proximity estimates: Hyatt Regency and Central Hub: 2 mins walk (150 m); Phoenix Marketcity: 3 mins walk (250 m); Pune Airport: 5 mins drive (1.9 km); Kharadi EON Free Zone: 10 mins drive (4.2 km).",
    searchTerms: ["langston", "langston downtown", "soundproof", "call booths", "hyatt regency", "16000", "24000"],
    propertyNames: ["Langston Downtown"],
    isFAQ: false,
    priorityWeight: 1.5,
  },

  // Page 17 - SLS Proximity
  {
    id: "v4-p17-sls",
    pageNumber: 17,
    section: "Ready-to-retrieve customer FAQ",
    question: "Which PG is closest to Symbiosis Law School?",
    content:
      "Shubh Gateway is listed directly opposite the Symbiosis Law School campus gate, about a 1-minute walk (50 metres).",
    searchTerms: ["closest to sls", "symbiosis law school", "nearest to sls", "opposite sls", "law school"],
    propertyNames: ["Shubh Gateway"],
    isFAQ: true,
    priorityWeight: 1.8,
  },

  // Page 17 - SCMS Proximity
  {
    id: "v4-p17-scms",
    pageNumber: 17,
    section: "Ready-to-retrieve customer FAQ",
    question: "Which property is closest to SCMS?",
    content:
      "Reforbs Living Sakore Nagar is listed about 3 minutes on foot (250 metres) from SCMS.",
    searchTerms: ["closest to scms", "nearest to scms", "scms campus", "symbiosis centre for management studies"],
    propertyNames: ["Reforbs Living Sakore Nagar"],
    isFAQ: true,
    priorityWeight: 1.8,
  },

  // Page 17 - Phoenix Marketcity
  {
    id: "v4-p17-phoenix",
    pageNumber: 17,
    section: "Ready-to-retrieve customer FAQ",
    question: "Which property is near Phoenix Marketcity?",
    content:
      "Several are listed near Phoenix Marketcity. Shubh Nirvana and Vipasana are each listed about 1.1 km away (4 mins drive); Langston Downtown is a 3 mins walk (250 m); other nearby options include Shubh Gateway, Sakore Nagar, Moksha, Suyog, Park Island, and Pillar Homes. Use the individual property distance entries for comparisons.",
    searchTerms: ["phoenix marketcity", "phoenix mall", "near phoenix"],
    isFAQ: true,
    priorityWeight: 1.5,
  },

  // Page 17 - Room Types / Occupancy
  {
    id: "v4-p17-occupancy",
    pageNumber: 17,
    section: "Ready-to-retrieve customer FAQ",
    question: "Are single and double occupancy rooms available?",
    content:
      "The individual property detail pages list both single- and double-occupancy room options for all ten residences. Confirm the actual room inventory for your preferred property and dates with the host. The site also contains general privacy copy saying all rooms are single-occupant; see the inconsistency note.",
    searchTerms: ["single and double occupancy", "room options", "room types", "private room vs sharing"],
    isFAQ: true,
    priorityWeight: 1.5,
  },

  // Page 17 - Security Deposit
  {
    id: "v4-p17-deposit",
    pageNumber: 17,
    section: "Ready-to-retrieve customer FAQ",
    question: "How much is the security deposit?",
    content:
      "Each property room-option section states a refundable security deposit equal to one month’s rent. Confirm the exact payable amount and written refund conditions with the host before paying.",
    searchTerms: ["security deposit", "deposit amount", "one month rent", "refundable deposit", "advance"],
    isFAQ: true,
    priorityWeight: 1.6,
  },

  // Page 17 - Brokerage
  {
    id: "v4-p17-brokerage",
    pageNumber: 17,
    section: "Ready-to-retrieve customer FAQ",
    question: "Is brokerage charged?",
    content:
      "Each individual property page labels the offer “Zero Brokerage”.",
    searchTerms: ["brokerage", "broker fees", "zero brokerage", "commission"],
    isFAQ: true,
    priorityWeight: 1.5,
  },

  // Page 17 - Food / Mess Package
  {
    id: "v4-p17-food",
    pageNumber: 17,
    section: "Ready-to-retrieve customer FAQ",
    question: "Is food or a mess package compulsory?",
    content:
      "The website says “No Mess Lock”, “zero forced food packages” and freedom to choose meal plans. It does not clearly specify a universal included-food arrangement. Do not say meals are included; ask the host about optional meal arrangements.",
    searchTerms: ["food", "mess compulsory", "is food included", "meal plan", "no mess lock", "forced food packages"],
    isFAQ: true,
    priorityWeight: 1.7,
  },

  // Page 17 - Lock-in Period
  {
    id: "v4-p17-lockin",
    pageNumber: 17,
    section: "Ready-to-retrieve customer FAQ",
    question: "Is there a lock-in period?",
    content:
      "The website advertises zero lock-ins / no lock-in guarantee. It does not publish a complete notice-period, exit or refund-deduction schedule in the reviewed pages. Confirm agreement terms with the host.",
    searchTerms: ["lock-in period", "lock in", "zero lock-in", "minimum stay", "lease agreement", "contract"],
    isFAQ: true,
    priorityWeight: 1.6,
  },

  // Page 17 - Curfews / Bans
  {
    id: "v4-p17-curfew",
    pageNumber: 17,
    section: "Ready-to-retrieve customer FAQ",
    question: "Are there curfews?",
    content:
      "Property pages describe zero bans or curfews / zero moral policing. The freedom policy also says mutual compatibility and social norms apply. For a specific property’s current house rules, confirm with the host.",
    searchTerms: ["curfews", "bans", "curfew rules", "moral policing", "night entry", "gate timings"],
    isFAQ: true,
    priorityWeight: 1.6,
  },

  // Page 18 - Friends / Visitors
  {
    id: "v4-p18-friends",
    pageNumber: 18,
    section: "Ready-to-retrieve customer FAQ",
    question: "Can I bring friends over?",
    content:
      "The About page says residents should be able to invite friends over and spend quality time. Some property pages also mention zero restrictions on friends or friends welcome. The website does not provide a complete visitor-hours or overnight-guest policy, so confirm those details with the host.",
    searchTerms: ["friends", "bring friends over", "visitors", "guests", "guest policy", "overnight guests"],
    isFAQ: true,
    priorityWeight: 1.7,
  },

  // Page 18 - Unmarried Couples
  {
    id: "v4-p18-couples",
    pageNumber: 18,
    section: "Ready-to-retrieve customer FAQ",
    question: "Are unmarried couples allowed? Can I live with my boyfriend or girlfriend?",
    content:
      "The website lists single- and double-occupancy room options but does not clearly state an unmarried-couples eligibility policy. Do not infer permission from double occupancy or “co-ed friendly”. Contact +91 74200 40241 for confirmation.",
    searchTerms: ["couples", "unmarried couples", "boyfriend", "girlfriend", "live with my boyfriend", "partner", "live with my partner"],
    isFAQ: true,
    priorityWeight: 1.9,
  },

  // Page 18 - Wi-Fi
  {
    id: "v4-p18-wifi",
    pageNumber: 18,
    section: "Ready-to-retrieve customer FAQ",
    question: "Does the property have Wi-Fi?",
    content:
      "High-speed Wi-Fi is listed across the homepage and individual property pages. The exact speed and service conditions can vary by property; confirm details with the host.",
    searchTerms: ["wifi", "wi-fi", "internet", "broadband", "optical fibre"],
    isFAQ: true,
    priorityWeight: 1.5,
  },

  // Page 18 - Laundry
  {
    id: "v4-p18-laundry",
    pageNumber: 18,
    section: "Ready-to-retrieve customer FAQ",
    question: "Is laundry available?",
    content:
      "Laundry care or an on-site laundry facility is listed on several property pages and in the homepage amenities. Check the selected property’s amenity list; the site does not describe identical laundry arrangements for every residence.",
    searchTerms: ["laundry", "washing machine", "washing clothes", "laundry care"],
    isFAQ: true,
    priorityWeight: 1.5,
  },

  // Page 18 - Power Backup
  {
    id: "v4-p18-power",
    pageNumber: 18,
    section: "Ready-to-retrieve customer FAQ",
    question: "Is power backup available?",
    content:
      "Full power backup, generator backup or inverter backup is listed on the property pages. The exact backup arrangement is property-specific.",
    searchTerms: ["power backup", "generator", "inverter backup", "electricity backup"],
    isFAQ: true,
    priorityWeight: 1.5,
  },

  // Page 18 - CCTV
  {
    id: "v4-p18-cctv",
    pageNumber: 18,
    section: "Ready-to-retrieve customer FAQ",
    question: "Is CCTV available?",
    content:
      "24/7 security and CCTV are specifically listed on the Shubh Gateway and Vairagya pages; CCTV and digital entry are listed for Sakore Nagar. Do not claim CCTV at all ten properties unless the relevant page confirms it.",
    searchTerms: ["cctv", "security camera", "cctv at shubh gateway", "cctv available", "surveillance"],
    isFAQ: true,
    priorityWeight: 1.8,
  },

  // Page 18 - Site Visit / Tour
  {
    id: "v4-p18-visit",
    pageNumber: 18,
    section: "Ready-to-retrieve customer FAQ",
    question: "Can I schedule a property visit? What are the tour timings?",
    content:
      "Yes. The website offers a free site visit / walkthrough request. The Contact page lists tour hours every day from 9:00 AM to 8:00 PM. Call +91 74200 40241 or use the website enquiry form.",
    searchTerms: ["schedule visit", "free visit today", "tour timings", "walkthrough", "visiting hours", "tour hours"],
    isFAQ: true,
    priorityWeight: 1.7,
  },

  // Page 18 - Contact Details
  {
    id: "v4-p18-contact",
    pageNumber: 18,
    section: "Ready-to-retrieve customer FAQ",
    question: "Give me Reforbs email and phone number.",
    content:
      "Official contact: +91 74200 40241 (Host: Arpit Agarwal)\nEmail: hello@reforbs.com\nPublished general location: Viman Nagar, Pune, Maharashtra 411014\nTour hours: Every day, 9:00 AM to 8:00 PM.",
    searchTerms: ["email and phone", "contact number", "host phone", "arpit agarwal", "helpline", "support email"],
    isFAQ: true,
    priorityWeight: 1.8,
  },

  // Page 18 - Goa / Bangalore
  {
    id: "v4-p18-cities",
    pageNumber: 18,
    section: "Ready-to-retrieve customer FAQ",
    question: "Is Goa or Bangalore available now?",
    content:
      "The homepage labels Goa and Bangalore as coming soon. The currently active directory is Pune / Viman Nagar.",
    searchTerms: ["goa", "bangalore", "is goa available", "coming soon", "bangalore launch"],
    isFAQ: true,
    priorityWeight: 1.6,
  },
];
