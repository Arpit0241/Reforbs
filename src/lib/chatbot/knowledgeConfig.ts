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
  category: "Student Housing" | "Co-Living";
  pageNumber: number;
  doubleRate: number;
  doubleRateStr: string;
  singleRate: number;
  singleRateStr: string;
  securityDeposit: string;
  locationCue: string;
  description: string;
  doubleDetails: string[];
  singleDetails: string[];
  amenities: string[];
  nearbyEstimates: { place: string; estimate: string }[];
  propertyUrl: string;
  ratingInfo: string;
}

export const KNOWLEDGE_PDF_PATH = "/knowledge/reforbs-knowledge-v4.pdf?v=4.0-2026-11-03";
export const KNOWLEDGE_VERSION = "reforbs-kb-v4-2026-11-03";
export const PDF_WORKER_PATH = "/pdf.worker.min.js";

export const CONTACT_PHONE = "+91 74200 40241";
export const CONTACT_PHONE_RAW = "7420040241";
export const HOST_NAME = "Arpit Agarwal";
export const CONTACT_EMAIL = "hello@reforbs.com";
export const TOUR_HOURS = "Every day, 9:00 AM to 8:00 PM";
export const PRIMARY_LOCATION = "Viman Nagar, Pune, Maharashtra 411014";

export const WELCOME_MESSAGE =
  "Hi! Welcome to Reforbs. I'm your Reforbs assistant. How can I help you today? Feel free to ask about our 10 residences in Viman Nagar, monthly rates, amenities, room options, or nearby college distances!";

export const RECOMMENDED_FALLBACK =
  "I couldn’t verify that detail from the information currently published by Reforbs. Please contact the team at +91 74200 40241 or hello@reforbs.com to confirm.";

export const OFF_TOPIC_FALLBACK =
  "I'm dedicated to helping you with Reforbs accommodation, properties, amenities, room options, and living in Pune. If you have any questions about our spaces in Viman Nagar or would like to schedule a visit, feel free to ask or call us at +91 74200 40241!";

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
  {
    id: "shubh-gateway",
    name: "Shubh Gateway",
    aliases: ["shubh gateway", "gateway", "sls property", "opposite sls", "symbiosis law school property"],
    category: "Student Housing",
    pageNumber: 4,
    doubleRate: 12500,
    doubleRateStr: "₹12,500/month",
    singleRate: 18000,
    singleRateStr: "₹18,000/month",
    securityDeposit: "1 month rent for each listed room option.",
    locationCue: "Opposite Symbiosis Law School, Viman Nagar; directly opposite SLS Campus Gate.",
    description: "Purpose-built for law and undergraduate students who value a short commute, high-speed fibre internet, study privacy, and supportive hosts.",
    doubleDetails: [
      "Two single orthopaedic beds with spring mattresses",
      "Individual wooden wardrobes with personal keys",
      "Dual study desks with ergonomic chairs",
      "Attached washroom with 24/7 geyser",
      "High-speed optical fibre Wi-Fi included",
    ],
    singleDetails: [
      "Exclusive single-occupant privacy",
      "Premium study suite with bookshelf and task light",
      "Spacious wooden wardrobe with full mirror",
      "Private attached bathroom",
      "Balcony with open city view",
    ],
    amenities: [
      "Free high-speed Wi-Fi",
      "Daily cleaning services",
      "Laundry care",
      "Quiet study desks",
      "Private kitchen access",
      "Full power backup",
      "24/7 security and CCTV",
      "Freedom / zero bans",
    ],
    nearbyEstimates: [
      { place: "Symbiosis Law School", estimate: "1 min walk (50 m)" },
      { place: "Symbiosis Centre for Management (SCMS)", estimate: "4 mins walk (350 m)" },
      { place: "Phoenix Marketcity", estimate: "4 mins drive (1.2 km)" },
      { place: "Pune International Airport", estimate: "7 mins drive (2.4 km)" },
      { place: "Viman Nagar Joggers Park", estimate: "5 mins walk (400 m)" },
      { place: "Koregaon Park", estimate: "12 mins drive (4.5 km)" },
    ],
    propertyUrl: "https://reforbs.vercel.app/student-housing/shubh-gateway",
    ratingInfo: "4.9 / 5 (148 reviews shown)",
  },
  {
    id: "sakore-nagar",
    name: "Reforbs Living Sakore Nagar",
    aliases: ["sakore nagar", "reforbs living sakore nagar", "sakore", "scms property", "cheapest pg", "lowest rent"],
    category: "Student Housing",
    pageNumber: 5,
    doubleRate: 12000,
    doubleRateStr: "₹12,000/month",
    singleRate: 17500,
    singleRateStr: "₹17,500/month",
    securityDeposit: "1 month rent for each listed room option.",
    locationCue: "Sakore Nagar, near SCMS Campus, Viman Nagar, Pune.",
    description: "A student residence described as peaceful and close to SCMS and nearby colleges, with balconies, study setups, housekeeping, and food choice.",
    doubleDetails: [
      "Two ergonomic single beds",
      "Individual wardrobes with secure locks",
      "Dedicated study desks with task lights",
      "Attached washroom with hot geyser",
      "Wi-Fi and weekly deep cleaning",
    ],
    singleDetails: [
      "Exclusive single-occupant privacy",
      "Executive study desk and chair",
      "Private balcony for study breaks",
      "Full-sized closet with full mirror",
      "Attached modern washroom",
    ],
    amenities: [
      "High-speed optical Wi-Fi",
      "Daily professional cleaning",
      "Laundry care",
      "CCTV and digital entry",
      "Quiet study desks",
      "Power inverter backup",
      "Kitchenette facility",
      "Recreation and lounge",
    ],
    nearbyEstimates: [
      { place: "SCMS", estimate: "3 mins walk (250 m)" },
      { place: "Symbiosis Law School", estimate: "5 mins walk (400 m)" },
      { place: "Viman Nagar Joggers Park", estimate: "4 mins walk (350 m)" },
      { place: "Phoenix Marketcity", estimate: "4 mins drive (1.2 km)" },
      { place: "Pune Airport", estimate: "6 mins drive (2.1 km)" },
    ],
    propertyUrl: "https://reforbs.vercel.app/student-housing/sakore-nagar",
    ratingInfo: "4.8 / 5 (134 reviews shown)",
  },
  {
    id: "vairagya",
    name: "Reforbs Vairagya",
    aliases: ["vairagya", "reforbs vairagya", "clover park", "symbiosis international school property"],
    category: "Student Housing",
    pageNumber: 6,
    doubleRate: 13000,
    doubleRateStr: "₹13,000/month",
    singleRate: 19000,
    singleRateStr: "₹19,000/month",
    securityDeposit: "1 month rent for each listed room option.",
    locationCue: "Clover Park, near Symbiosis Campus, Viman Nagar, Pune; near Symbiosis International School and Datta Mandir.",
    description: "A peaceful, distraction-free student residence with sunlit rooms, private study desks, high-speed Wi-Fi, kitchen access, and common areas.",
    doubleDetails: [
      "Two luxury wooden beds with posture mattresses",
      "Individual wooden wardrobes with personal keys",
      "Dual study desks with ergonomic chairs",
      "Attached washroom with 24/7 hot-water geyser",
      "High-speed optical fibre Wi-Fi included",
    ],
    singleDetails: [
      "Exclusive single-occupant privacy",
      "Premium study suite with task lighting",
      "Spacious wooden wardrobe with full mirror",
      "Private attached luxury bathroom",
      "Private balcony view",
    ],
    amenities: [
      "Dual-band optical Wi-Fi",
      "Daily professional cleaning",
      "Private kitchen freedom",
      "Zero moral policing / curfews",
      "Full power backup",
      "On-site laundry",
      "24/7 CCTV and security",
      "Direct host support",
    ],
    nearbyEstimates: [
      { place: "Symbiosis International School", estimate: "2 mins walk (150 m)" },
      { place: "SCMS", estimate: "5 mins walk (450 m)" },
      { place: "Symbiosis Law School", estimate: "6 mins walk (500 m)" },
      { place: "Phoenix Marketcity", estimate: "5 mins drive (1.5 km)" },
      { place: "Pune International Airport", estimate: "8 mins drive (2.6 km)" },
    ],
    propertyUrl: "https://reforbs.vercel.app/student-housing/vairagya",
    ratingInfo: "4.9 / 5 (128 reviews shown)",
  },
  {
    id: "moksha",
    name: "Moksha",
    aliases: ["moksha", "reforbs moksha", "row house lane"],
    category: "Co-Living",
    pageNumber: 7,
    doubleRate: 14500,
    doubleRateStr: "₹14,500/month",
    singleRate: 22000,
    singleRateStr: "₹22,000/month",
    securityDeposit: "1 month rent for each listed room option.",
    locationCue: "Row House Lane, near Joggers Park, Viman Nagar, Pune.",
    description: "Designed for working professionals, consultants, and founders; features bohemian seating on green terraces, rooftop pergolas, private culinary kitchen setups, and a close-knit community.",
    doubleDetails: [
      "Two luxury wooden beds with posture mattresses",
      "Dual wardrobes with full-length mirror",
      "Co-working desk setup with fibre internet",
      "Attached bathroom with 24/7 hot geyser",
      "Garden or courtyard view",
    ],
    singleDetails: [
      "Private executive room",
      "Queen-size bed with plush headboard",
      "Ergonomic work desk with high-speed ports",
      "Private balcony with outdoor seating",
      "Private en-suite luxury bathroom",
    ],
    amenities: [
      "Dual-band optical Wi-Fi",
      "Daily professional care",
      "In-house fitness gym",
      "Bohemian garden terraces",
      "Private kitchen facilities",
      "Power inverter backup",
      "Community yoga and BBQ",
      "Zero lock-in guarantee",
    ],
    nearbyEstimates: [
      { place: "Viman Nagar Joggers Park", estimate: "2 mins walk (150 m)" },
      { place: "Phoenix Marketcity", estimate: "5 mins drive (1.4 km)" },
      { place: "Pune International Airport", estimate: "7 mins drive (2.3 km)" },
      { place: "Symbiosis campuses", estimate: "6 mins walk (500 m)" },
      { place: "EON IT Free Zone", estimate: "14 mins drive (5.6 km)" },
    ],
    propertyUrl: "https://reforbs.vercel.app/coliving/moksha",
    ratingInfo: "4.9 / 5 (164 reviews shown)",
  },
  {
    id: "shubh-nirvana",
    name: "Shubh Nirvana",
    aliases: ["shubh nirvana", "nirvana", "lane 2", "lane 2 near phoenix"],
    category: "Co-Living",
    pageNumber: 8,
    doubleRate: 15000,
    doubleRateStr: "₹15,000/month",
    singleRate: 22500,
    singleRateStr: "₹22,500/month",
    securityDeposit: "1 month rent for each listed room option.",
    locationCue: "Lane 2, near Phoenix Marketcity, Viman Nagar, Pune; near Phoenix Marketcity and EON IT Corridor.",
    description: "Signature co-living flagship with backpacker-hostel energy, UV-lit chill zone, in-house gym, pool table, and social spaces.",
    doubleDetails: [
      "Two luxury wooden beds with pocket-spring mattresses",
      "Individual wardrobes with digital locks",
      "Private balcony overlooking greenery",
      "Designer attached bathroom",
      "Housekeeping, linen and Wi-Fi included",
    ],
    singleDetails: [
      "Private bedroom",
      "King single bed with hotel-grade linen",
      "Private workstation with high-speed port",
      "Attached modern bathroom with rain shower",
      "Private balcony and individual AC",
    ],
    amenities: [
      "Gigabit fibre Wi-Fi",
      "Professional housekeeping and linen",
      "In-house fitness gym",
      "Pool table and games lounge",
      "UV neon chill space",
      "Private modular kitchen",
      "Full generator backup",
      "Zero bans or curfews",
    ],
    nearbyEstimates: [
      { place: "Phoenix Marketcity Mall", estimate: "4 mins drive (1.1 km)" },
      { place: "WeWork / Regus Viman Nagar", estimate: "3 mins walk (250 m)" },
      { place: "EON IT Park / Kharadi", estimate: "12 mins drive (5.2 km)" },
      { place: "Pune International Airport", estimate: "6 mins drive (2.1 km)" },
      { place: "Symbiosis campuses", estimate: "5 mins walk (400 m)" },
    ],
    propertyUrl: "https://reforbs.vercel.app/coliving/shubh-nirvana",
    ratingInfo: "5.0 / 5 (189 reviews shown)",
  },
  {
    id: "vipasana",
    name: "Vipasana",
    aliases: ["vipasana", "vipasna", "central avenue"],
    category: "Co-Living",
    pageNumber: 9,
    doubleRate: 14000,
    doubleRateStr: "₹14,000/month",
    singleRate: 21000,
    singleRateStr: "₹21,000/month",
    securityDeposit: "1 month rent for each listed room option.",
    locationCue: "Central Avenue, Viman Nagar, Pune 411014; near Symbiosis International School and Phoenix Mall.",
    description: "For focused professionals and serious students seeking calm, ergonomic workspaces, minimalist interiors, shared living rooms, private kitchens, laundry, and supportive hosts.",
    doubleDetails: [
      "Two beds with posture-care mattresses",
      "Individual wooden wardrobes with locks",
      "Dual work desks with task lighting",
      "Attached bathroom with hot geyser",
      "High-speed fibre internet included",
    ],
    singleDetails: [
      "Private suite",
      "Large study/work station with monitor room",
      "Private balcony",
      "Attached bathroom with modern fittings",
      "Air conditioner and personal storage",
    ],
    amenities: [
      "High-speed optical Wi-Fi",
      "Daily professional cleaning",
      "Laundry facility",
      "Spacious living area",
      "Private kitchen access",
      "Full power backup",
      "Free vehicle parking",
      "Zero restrictions on friends",
    ],
    nearbyEstimates: [
      { place: "Phoenix Marketcity", estimate: "4 mins drive (1.1 km)" },
      { place: "Symbiosis campuses", estimate: "5 mins walk (400 m)" },
      { place: "Viman Nagar Metro Station", estimate: "6 mins walk (600 m)" },
      { place: "Pune Airport", estimate: "7 mins drive (2.4 km)" },
      { place: "WeWork Viman Nagar", estimate: "3 mins walk (250 m)" },
    ],
    propertyUrl: "https://reforbs.vercel.app/coliving/vipasana",
    ratingInfo: "4.9 / 5 (152 reviews shown)",
  },
  {
    id: "suyog",
    name: "Suyog Co-Living",
    aliases: ["suyog", "suyog co-living", "dutta mandir", "closest airport", "nearest airport"],
    category: "Co-Living",
    pageNumber: 10,
    doubleRate: 14500,
    doubleRateStr: "₹14,500/month",
    singleRate: 21500,
    singleRateStr: "₹21,500/month",
    securityDeposit: "1 month rent for each listed room option.",
    locationCue: "Near Dutta Mandir Chowk, Viman Nagar, Pune; near Dutta Mandir and Symbiosis International campuses.",
    description: "For tech professionals, consultants, and founders; fully furnished rooms, high ceilings, private kitchen setups, dual-band Wi-Fi, and proximity to airport and business parks.",
    doubleDetails: [
      "Two luxury wooden beds with posture mattresses",
      "Individual wooden wardrobes with personal keys",
      "Dual study/work desks with ergonomic chairs",
      "Attached washroom with 24/7 hot-water geyser",
      "High-speed optical fibre Wi-Fi",
    ],
    singleDetails: [
      "Exclusive single-occupant privacy",
      "Air-conditioned executive suite",
      "Spacious wooden wardrobe with full mirror",
      "Private attached luxury bathroom",
      "Private balcony overlooking green canopy",
    ],
    amenities: [
      "Dual-band optical Wi-Fi",
      "Daily professional cleaning",
      "Private kitchen freedom",
      "Air-conditioned units available",
      "Zero moral policing / curfews",
      "Full power backup",
      "On-site laundry",
      "Direct host support",
    ],
    nearbyEstimates: [
      { place: "Dutta Mandir Chowk", estimate: "2 mins walk (100 m)" },
      { place: "Pune International Airport", estimate: "5 mins drive (1.8 km)" },
      { place: "Phoenix Marketcity", estimate: "6 mins drive (2.0 km)" },
      { place: "Symbiosis campuses", estimate: "6 mins walk (500 m)" },
      { place: "Kalyani Nagar IT Corridor", estimate: "10 mins drive (3.8 km)" },
    ],
    propertyUrl: "https://reforbs.vercel.app/coliving/suyog",
    ratingInfo: "4.8 / 5 (119 reviews shown)",
  },
  {
    id: "park-island",
    name: "Reforbs Park Island",
    aliases: ["park island", "reforbs park island", "swimming pool", "pool"],
    category: "Co-Living",
    pageNumber: 11,
    doubleRate: 15500,
    doubleRateStr: "₹15,500/month",
    singleRate: 23000,
    singleRateStr: "₹23,000/month",
    securityDeposit: "1 month rent for each listed room option.",
    locationCue: "Park Island Enclave, off Airport Road, Viman Nagar, Pune; near Park Island and Viman Nagar IT hubs.",
    description: "Community living with garden views, spacious balconies, pool table, swimming pool access, and community evenings.",
    doubleDetails: [
      "Two luxury wooden beds with posture mattresses",
      "Individual wardrobes with personal keys",
      "Dual work desks with high-speed ports",
      "Attached washroom with 24/7 hot-water geyser",
      "Balcony with resort-style garden views",
    ],
    singleDetails: [
      "Exclusive single room with private balcony",
      "Queen-size bed with plush headboard",
      "Ergonomic work desk",
      "Attached luxury bathroom",
      "Full swimming pool and gym access",
    ],
    amenities: [
      "Swimming pool access",
      "In-house fitness gym",
      "Dual-band optical Wi-Fi",
      "Daily professional cleaning",
      "Private kitchen freedom",
      "Zero curfew or moral policing",
      "Full power backup",
      "Direct host support",
    ],
    nearbyEstimates: [
      { place: "Park Island Enclave and gardens", estimate: "on-premise (0 m)" },
      { place: "Airport Road Business Hub", estimate: "3 mins drive (1.1 km)" },
      { place: "Phoenix Marketcity", estimate: "5 mins drive (1.8 km)" },
      { place: "WeWork and IT corridors", estimate: "7 mins drive (2.4 km)" },
      { place: "Pune International Airport", estimate: "6 mins drive (2.1 km)" },
    ],
    propertyUrl: "https://reforbs.vercel.app/coliving/park-island",
    ratingInfo: "4.9 / 5 (142 reviews shown)",
  },
  {
    id: "pillar-homes",
    name: "Pillar Homes Co-Living",
    aliases: ["pillar homes", "pillar homes co-living", "cafe peter"],
    category: "Co-Living",
    pageNumber: 12,
    doubleRate: 15000,
    doubleRateStr: "₹15,000/month",
    singleRate: 22000,
    singleRateStr: "₹22,000/month",
    securityDeposit: "1 month rent for each listed room option.",
    locationCue: "Near Cafe Peter, central Viman Nagar, Pune; walking distance to cafes, gyms, and Phoenix Mall.",
    description: "Architecturally refined living with minimalist wooden finishes, premium en-suite bathrooms, ergonomic work setups, and zero broker interference.",
    doubleDetails: [
      "Designer custom-built wooden beds",
      "Individual tall wardrobes with mirror",
      "Dedicated work desks with task illumination",
      "En-suite designer washroom with 24/7 geyser",
      "High-speed fibre connectivity",
    ],
    singleDetails: [
      "Private architectural master bedroom",
      "Queen-size bed with posture-care mattress",
      "Spacious private study suite",
      "Designer private bathroom",
      "Balcony with neighborhood views",
    ],
    amenities: [
      "Minimalist Scandinavian design",
      "Dual-band optical Wi-Fi",
      "Daily professional cleaning",
      "Private kitchen freedom",
      "Cafe strip location",
      "Zero moral policing / curfews",
      "Full power backup",
      "Direct host support",
    ],
    nearbyEstimates: [
      { place: "Viman Nagar Cafe Strip and Dining", estimate: "1 min walk (50 m)" },
      { place: "Joggers Park and Recreation", estimate: "4 mins walk (300 m)" },
      { place: "Phoenix Marketcity", estimate: "5 mins drive (1.5 km)" },
      { place: "Symbiosis campuses", estimate: "6 mins walk (500 m)" },
      { place: "Pune International Airport", estimate: "8 mins drive (2.7 km)" },
    ],
    propertyUrl: "https://reforbs.vercel.app/coliving/pillar-homes",
    ratingInfo: "4.9 / 5 (136 reviews shown)",
  },
  {
    id: "langston-downtown",
    name: "Langston Downtown",
    aliases: ["langston downtown", "langston", "hyatt regency", "soundproof", "phone booths"],
    category: "Co-Living",
    pageNumber: 13,
    doubleRate: 16000,
    doubleRateStr: "₹16,000/month",
    singleRate: 24000,
    singleRateStr: "₹24,000/month",
    securityDeposit: "1 month rent for each listed room option.",
    locationCue: "Downtown Central, near Hyatt Regency and Airport Road, Viman Nagar, Pune; direct access to Phoenix and Kharadi IT hubs.",
    description: "Executive residence for corporate professionals, tech leads, and founders, with private suites, soundproof phone booths, ergonomic work setups, and transit access to Kharadi and Yerawada corridors.",
    doubleDetails: [
      "Two luxury executive beds with posture-care mattresses",
      "Individual wooden wardrobes with digital safe",
      "Dual workstation desks with ergonomic chairs",
      "Attached luxury bathroom with 24/7 hot-water geyser",
      "High-speed redundant optical fibre",
    ],
    singleDetails: [
      "Executive single-occupant privacy",
      "King/queen bed with premium linen and headboard",
      "Executive private office desk setup",
      "Private ensuite luxury bathroom",
      "Private balcony overlooking downtown Viman Nagar",
    ],
    amenities: [
      "Executive business lounge",
      "Soundproof call booths",
      "Dual redundant optical Wi-Fi",
      "Daily professional cleaning",
      "Private modular kitchens",
      "Zero moral policing / curfews",
      "Full power backup",
      "Direct host VIP support",
    ],
    nearbyEstimates: [
      { place: "Hyatt Regency and Central Hub", estimate: "2 mins walk (150 m)" },
      { place: "Phoenix Marketcity", estimate: "3 mins walk (250 m)" },
      { place: "Pune International Airport", estimate: "5 mins drive (1.9 km)" },
      { place: "Kharadi EON Free Zone", estimate: "10 mins drive (4.2 km)" },
      { place: "Yerawada Business Bay", estimate: "8 mins drive (3.2 km)" },
    ],
    propertyUrl: "https://reforbs.vercel.app/coliving/langston-downtown",
    ratingInfo: "5.0 / 5 (177 reviews shown)",
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
