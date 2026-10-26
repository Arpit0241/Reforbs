/**
 * Reforbs Customer Support Knowledge Configuration
 * Ground truth from: reforbs_knowledge_base.pdf (public/knowledge/reforbs-knowledge.pdf)
 * Phrased as a friendly, professional, and hospitable Reforbs Concierge Agent.
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

export const KNOWLEDGE_PDF_PATH = "/knowledge/reforbs-knowledge.pdf";
export const PDF_WORKER_PATH = "/pdf.worker.min.js";

export const CONTACT_PHONE = "7420040241";
export const LOCATION_SUMMARY = "Viman Nagar, Pune, Maharashtra";

export const WELCOME_MESSAGE =
  "Hi! Welcome to Reforbs. I'm your Reforbs assistant. How can I help you today? Feel free to ask about our properties, amenities, room types, or locations in Pune!";

export const RECOMMENDED_FALLBACK =
  "I want to make sure you get the exact, up-to-date details for that! Please give our host Arpit a quick call at 7420040241—our team is in Viman Nagar, Pune and will be delighted to assist you directly.";

export const OFF_TOPIC_FALLBACK =
  "I'm dedicated to helping you with Reforbs accommodation, properties, and living experiences in Pune. If you'd like to explore our rooms, check amenities, or plan a visit, just let me know or call us at 7420040241!";

export const PDF_LOAD_ERROR_MESSAGE =
  "We're having trouble loading our local knowledge document. Please call our team directly at 7420040241 for instant assistance.";

export const QUICK_QUESTIONS = [
  "Explore our properties",
  "What amenities are provided?",
  "Tell me about Shubh Gateway",
  "How can I contact Reforbs?",
];

/**
 * Standard Stop Words to filter out during tokenization
 */
export const STOP_WORDS = new Set([
  "a",
  "about",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "by",
  "can",
  "do",
  "does",
  "for",
  "from",
  "has",
  "have",
  "how",
  "i",
  "if",
  "in",
  "is",
  "it",
  "its",
  "just",
  "me",
  "my",
  "no",
  "not",
  "of",
  "on",
  "or",
  "our",
  "please",
  "tell",
  "that",
  "the",
  "there",
  "these",
  "they",
  "this",
  "to",
  "us",
  "was",
  "we",
  "what",
  "when",
  "where",
  "which",
  "who",
  "why",
  "will",
  "with",
  "you",
  "your",
]);

/**
 * Domain Synonyms Map: Maps variant customer phrasing to core knowledge concepts
 */
export const SYNONYM_GROUPS: Record<string, string[]> = {
  rent: [
    "rent",
    "rental",
    "monthly cost",
    "monthly rent",
    "price",
    "pricing",
    "cost",
    "charges",
    "fees",
    "tariff",
    "rate",
    "budget",
    "bill",
    "expense",
  ],
  deposit: [
    "deposit",
    "security deposit",
    "advance",
    "advance payment",
    "refundable deposit",
    "security amount",
    "caution deposit",
  ],
  property: [
    "property",
    "properties",
    "hostel",
    "pg",
    "stay",
    "accommodation",
    "residence",
    "place",
    "living space",
    "spaces",
    "building",
  ],
  amenity: [
    "amenity",
    "amenities",
    "facility",
    "facilities",
    "service",
    "services",
    "features",
    "inclusions",
    "provision",
    "provisions",
    "benefits",
  ],
  wifi: [
    "wifi",
    "wi-fi",
    "internet",
    "broadband",
    "wireless",
    "connection",
    "connectivity",
    "net",
    "high-speed",
  ],
  cleaning: [
    "cleaning",
    "clean",
    "housekeeping",
    "daily cleaning",
    "maid",
    "sweeper",
    "hygiene",
    "maintenance",
    "room service",
  ],
  laundry: [
    "laundry",
    "washing machine",
    "washing clothes",
    "clothes wash",
    "wash",
    "dryer",
    "cloth",
  ],
  kitchen: [
    "kitchen",
    "cooking",
    "private kitchen",
    "cook",
    "food",
    "meals",
    "mess",
    "breakfast",
    "dinner",
    "lunch",
    "dining",
  ],
  parking: [
    "parking",
    "car parking",
    "bike parking",
    "vehicle",
    "two-wheeler",
    "four-wheeler",
    "garage",
  ],
  contact: [
    "contact",
    "phone",
    "phone number",
    "call",
    "number",
    "mobile",
    "reach",
    "speak",
    "owner",
    "arpit",
    "helpline",
    "help desk",
  ],
  email: ["email", "mail", "email address", "support email", "inbox"],
  location: [
    "location",
    "address",
    "where",
    "situated",
    "located",
    "directions",
    "pune",
    "viman nagar",
    "area",
    "place",
    "near me",
  ],
  availability: [
    "available",
    "availability",
    "vacancy",
    "vacant",
    "vacant room",
    "open room",
    "free room",
    "book",
    "booking",
    "reserve",
    "reservation",
    "move in",
    "move-in",
    "hold room",
  ],
  single: [
    "single",
    "single room",
    "single occupancy",
    "private room",
    "one person",
    "room for one",
    "individual",
    "privacy",
    "room sharing",
    "sharing",
  ],
  visit: [
    "visit",
    "tour",
    "site visit",
    "viewing",
    "inspection",
    "schedule visit",
    "see room",
    "walkthrough",
  ],
  rules: [
    "rules",
    "policy",
    "restrictions",
    "curfew",
    "gate closing",
    "entry time",
    "night out",
    "visitors",
    "guests",
    "friends",
    "pets",
    "dog",
    "cat",
    "smoking",
  ],
  gender: [
    "gender",
    "men",
    "women",
    "girls",
    "boys",
    "female",
    "male",
    "mixed",
    "coed",
    "ladies",
    "gents",
    "eligibility",
  ],
  documents: [
    "documents",
    "id",
    "aadhaar",
    "verification",
    "kyc",
    "proof",
    "passport",
    "identification",
  ],
  difference: [
    "difference",
    "unique",
    "why reforbs",
    "better",
    "regular hostel",
    "standard pg",
    "special",
    "hostel comparison",
  ],
  student: [
    "student",
    "students",
    "student housing",
    "college",
    "symbiosis",
    "law school",
    "sls",
    "scms",
  ],
  professional: [
    "professional",
    "professionals",
    "working",
    "working professional",
    "corporate",
    "office",
  ],
};

/**
 * Recognized Named Properties in Reforbs Knowledge Base
 */
export const PROPERTY_NAMES = [
  "shubh gateway",
  "reforbs living sakore nagar",
  "sakore nagar",
  "moksha",
  "vipasana",
  "shubh nirvana",
];

/**
 * Curated Verified Ground Truth Passages from reforbs-knowledge.pdf
 * Phrased naturally as a professional customer concierge.
 */
export const VERIFIED_PDF_PASSAGES: KnowledgeItem[] = [
  // Page 2: About Reforbs & Brand Themes
  {
    id: "p2-about-reforbs",
    pageNumber: 2,
    section: "About Reforbs Living",
    content:
      "Reforbs provides premium co-living spaces and student housing in Pune for modern working professionals and students. We believe in providing more than just accommodation—it's a home where you can live, study, work, and feel part of a genuine community.\n\nKey highlights of living with Reforbs:\n• Privacy: 100% private single-occupancy rooms—one resident per room\n• Freedom: Zero arbitrary bans, zero lock-ins, and freedom to personalize your space\n• Cooking Freedom: Complete kitchen and dining facilities without forced mess food\n• Daily Comfort: Routine maintenance and day-to-day on-site support\n• Community: Social bonding, shared experiences, and vibrant networking",
    searchTerms: [
      "about",
      "reforbs living",
      "pune",
      "co-living",
      "students",
      "working professionals",
      "brand themes",
      "privacy",
      "freedom",
      "single occupants",
    ],
    isFAQ: false,
    priorityWeight: 1.2,
  },

  // Page 3: Location and Contact
  {
    id: "p3-contact",
    pageNumber: 3,
    section: "Location and contact",
    question: "How do I contact Reforbs?",
    content:
      "You can get in touch with us anytime! Here are our official contact details:\n\n• Phone / WhatsApp: 7420040241\n• Host & Owner: Arpit Agarwal\n• Location: Viman Nagar, Pune, Maharashtra\n• Website: https://reforbs.com/\n\nGive us a call directly at 7420040241 and we'll be happy to help with pricing, viewings, and booking!",
    searchTerms: [
      "contact",
      "phone",
      "call",
      "number",
      "owner",
      "arpit agarwal",
      "location",
      "address",
      "viman nagar",
      "pune",
      "helpline",
    ],
    isFAQ: true,
    priorityWeight: 2.0,
  },

  // Page 3: Property Directory
  {
    id: "p3-properties-overview",
    pageNumber: 3,
    section: "Property directory",
    question: "What properties does Reforbs have?",
    content:
      "We have 5 prime properties across Pune in two categories:\n\nStudent Housing:\n1. Shubh Gateway — Situated directly opposite Symbiosis Law School (SLS)\n2. Reforbs Living Sakore Nagar — Located in Sakore Nagar\n\nCo-Living (Professionals & Students):\n3. Moksha — Viman Nagar, Pune\n4. Vipasana — Viman Nagar, Pune\n5. Shubh Nirvana — Viman Nagar, Pune\n\nAll our properties offer private single-occupancy rooms and benchmark amenities. Which location are you interested in exploring?",
    searchTerms: [
      "properties",
      "property directory",
      "what properties",
      "all properties",
      "list of properties",
      "student housing",
      "co-living",
      "shubh gateway",
      "sakore nagar",
      "moksha",
      "vipasana",
      "shubh nirvana",
    ],
    isFAQ: true,
    priorityWeight: 2.2,
  },

  // Page 3: Shubh Gateway
  {
    id: "p3-shubh-gateway",
    pageNumber: 3,
    section: "Property directory",
    question: "Tell me about Shubh Gateway / Which Reforbs property is opposite Symbiosis Law School?",
    content:
      "Shubh Gateway is our flagship student housing property, located right opposite Symbiosis Law School (SLS) in Pune!\n\nIt features private single-occupancy rooms with study desks, high-speed Wi-Fi, daily housekeeping, and community spaces designed especially for students. If you'd like to check current vacancies or schedule a visit, feel free to call host Arpit at 7420040241!",
    searchTerms: [
      "shubh gateway",
      "symbiosis",
      "symbiosis law school",
      "sls",
      "college",
      "near college",
      "student housing",
    ],
    propertyNames: ["shubh gateway"],
    isFAQ: true,
    priorityWeight: 2.5,
  },

  // Page 3: Reforbs Living Sakore Nagar
  {
    id: "p3-sakore-nagar",
    pageNumber: 3,
    section: "Property directory",
    question: "Do you have housing in Sakore Nagar?",
    content:
      "Yes! We have Reforbs Living Sakore Nagar, our dedicated student-housing property in Sakore Nagar, Pune. It offers private single-occupancy rooms, high-speed Wi-Fi, daily cleaning, and full kitchen facilities. Feel free to call us at 7420040241 for directions and current availability.",
    searchTerms: [
      "sakore nagar",
      "reforbs living sakore nagar",
      "student accommodation",
      "location",
      "address",
    ],
    propertyNames: ["reforbs living sakore nagar", "sakore nagar"],
    isFAQ: true,
    priorityWeight: 2.5,
  },

  // Page 4: Viman Nagar Co-Living Properties
  {
    id: "p4-viman-nagar-coliving",
    pageNumber: 4,
    section: "Property directory",
    question: "Which Reforbs co-living properties are listed in Viman Nagar?",
    content:
      "In Viman Nagar, Pune, we offer three premium co-living properties:\n\n• Moksha — Designed for community bonding, comfort, and productivity\n• Vipasana — Peaceful, modern living spaces ideal for focused work and study\n• Shubh Nirvana — Modern designer residences with premium finishes\n\nAll three provide private single rooms, high-speed Wi-Fi, daily housekeeping, and kitchen access. You can call us at 7420040241 to book a walkthrough!",
    searchTerms: [
      "viman nagar",
      "co living",
      "coliving",
      "moksha",
      "vipasana",
      "shubh nirvana",
      "pune",
    ],
    propertyNames: ["moksha", "vipasana", "shubh nirvana"],
    isFAQ: true,
    priorityWeight: 2.0,
  },

  // Page 4: Amenities and services
  {
    id: "p4-amenities-general",
    pageNumber: 4,
    section: "Amenities and services",
    question: "What amenities are available?",
    content:
      "At Reforbs, everything you need is already included in your stay:\n\n• Free High-Speed Wi-Fi — Seamless internet for study and remote work\n• Daily Cleaning Services — Routine housekeeping and tidy spaces\n• Work Desks — Dedicated study desks in rooms\n• Fully Equipped Kitchen — Complete freedom to cook your own meals\n• Common Living Area — Cozy lounge for relaxing and socializing\n• TV & Media — Entertainment in common spaces\n• Laundry Facilities — On-site washing support\n• Vehicle Parking — Dedicated parking for your vehicles\n\nPlus, all rooms are 100% private single occupancy with zero forced food packages!",
    searchTerms: [
      "amenities",
      "services",
      "facilities",
      "features",
      "included",
      "wifi",
      "tv",
      "work desks",
      "living area",
      "kitchen",
      "daily cleaning",
      "parking",
      "laundry",
    ],
    isFAQ: true,
    priorityWeight: 2.5,
  },

  // Page 4: Wi-Fi FAQ
  {
    id: "p4-wifi-faq",
    pageNumber: 4,
    section: "Amenities and services",
    question: "Does Reforbs provide Wi-Fi?",
    content:
      "Yes! Free high-speed Wi-Fi is included at all Reforbs properties so you can work, attend lectures, and stream seamlessly without worrying about data caps.",
    searchTerms: [
      "wifi",
      "wi-fi",
      "internet",
      "broadband",
      "wireless",
      "high-speed",
      "connectivity",
    ],
    isFAQ: true,
    priorityWeight: 2.0,
  },

  // Page 4: Cleaning Services FAQ
  {
    id: "p4-cleaning-faq",
    pageNumber: 4,
    section: "Amenities and services",
    question: "Are cleaning services included?",
    content:
      "Yes, daily cleaning services and regular housekeeping are included in your Reforbs stay to keep your living environment fresh, hygienic, and hassle-free.",
    searchTerms: [
      "cleaning",
      "housekeeping",
      "maid",
      "daily cleaning",
      "sweeping",
      "hygiene",
    ],
    isFAQ: true,
    priorityWeight: 2.0,
  },

  // Page 5: Parking FAQ
  {
    id: "p5-parking-faq",
    pageNumber: 5,
    section: "Amenities and services",
    question: "Is parking available?",
    content:
      "Yes! Dedicated parking is provided for residents' vehicles (two-wheelers and four-wheelers). You can confirm spot availability for your vehicle by calling host Arpit at 7420040241.",
    searchTerms: [
      "parking",
      "car parking",
      "bike parking",
      "vehicle",
      "two wheeler",
      "four wheeler",
    ],
    isFAQ: true,
    priorityWeight: 2.0,
  },

  // Page 5: Room Privacy FAQ
  {
    id: "p5-rooms-private",
    pageNumber: 5,
    section: "Customer FAQ: rooms, rent, and availability",
    question: "Are Reforbs rooms private? / Do you offer single-occupancy rooms?",
    content:
      "Yes, absolutely! All rooms at Reforbs are 100% private single-occupancy rooms—one resident per room. You get your own private sanctuary, personal freedom, and complete privacy, alongside access to shared living lounges and kitchen facilities.",
    searchTerms: [
      "private room",
      "single occupancy",
      "single room",
      "room sharing",
      "privacy",
      "one person",
      "room for one",
    ],
    isFAQ: true,
    priorityWeight: 2.2,
  },

  // Page 5: Rent FAQ
  {
    id: "p5-rent-faq",
    pageNumber: 5,
    section: "Customer FAQ: rooms, rent, and availability",
    question: "What is the rent per month?",
    content:
      "Monthly pricing varies depending on the specific property and room layout you choose. For an instant quote and to discuss current seasonal offers, please connect directly with host Arpit at 7420040241—we'll be happy to provide the exact breakdown!",
    searchTerms: [
      "rent",
      "monthly rent",
      "price",
      "pricing",
      "cost",
      "budget",
      "charges",
      "how much",
    ],
    isFAQ: true,
    priorityWeight: 2.5,
  },

  // Page 5: Security Deposit FAQ
  {
    id: "p5-deposit-faq",
    pageNumber: 5,
    section: "Customer FAQ: rooms, rent, and availability",
    question: "What is the security deposit?",
    content:
      "Our security deposit structure is straightforward and refundable with zero hidden fees. Please give us a call at 7420040241 and we will share the exact deposit amount and terms for your preferred property.",
    searchTerms: [
      "deposit",
      "security deposit",
      "advance",
      "refundable deposit",
      "security amount",
    ],
    isFAQ: true,
    priorityWeight: 2.5,
  },

  // Page 5: Booking fees / extra charges
  {
    id: "p5-charges-faq",
    pageNumber: 5,
    section: "Customer FAQ: rooms, rent, and availability",
    question: "Are any booking fees, maintenance charges, or other charges applicable?",
    content:
      "We believe in transparent pricing with no surprise charges. To get a comprehensive all-inclusive breakdown covering maintenance, utilities, and services for your stay, please contact host Arpit directly at 7420040241.",
    searchTerms: [
      "booking fee",
      "maintenance",
      "extra charges",
      "electricity",
      "water",
      "taxes",
      "utility",
      "hidden charges",
    ],
    isFAQ: true,
    priorityWeight: 2.0,
  },

  // Page 5: Room availability
  {
    id: "p5-availability-faq",
    pageNumber: 5,
    section: "Customer FAQ: rooms, rent, and availability",
    question: "Which rooms are currently available?",
    content:
      "Our rooms fill up quickly, especially near Symbiosis Law School! Live availability changes regularly, so please call us directly at 7420040241 with your move-in date and we'll check current room vacancies for you immediately.",
    searchTerms: [
      "available",
      "vacancy",
      "vacant room",
      "room availability",
      "move in",
      "open rooms",
      "today",
      "now",
    ],
    isFAQ: true,
    priorityWeight: 2.5,
  },

  // Page 5: Can I book online?
  {
    id: "p5-book-online-faq",
    pageNumber: 5,
    section: "Customer FAQ: rooms, rent, and availability",
    question: "Can I book a room online?",
    content:
      "We provide personalized onboarding so you get the exact room and layout that suits you best! Simply connect with host Arpit at 7420040241 to confirm availability, reserve your room, and complete the simple booking steps.",
    searchTerms: [
      "book",
      "booking",
      "reserve",
      "reservation",
      "online booking",
      "website booking",
    ],
    isFAQ: true,
    priorityWeight: 2.0,
  },

  // Page 6: Schedule a visit
  {
    id: "p6-visit-faq",
    pageNumber: 6,
    section: "Customer FAQ: facilities, rules, and support",
    question: "Can I schedule a property visit or room tour?",
    content:
      "We'd love to host you for a walkthrough! You can schedule a visit anytime by giving us a quick call at 7420040241. We will arrange a convenient time to show you around the rooms, community lounge, and facilities.",
    searchTerms: [
      "visit",
      "tour",
      "site visit",
      "viewing",
      "inspection",
      "schedule visit",
      "see property",
    ],
    isFAQ: true,
    priorityWeight: 2.0,
  },

  // Page 6: Minimum stay / lease duration
  {
    id: "p6-lease-faq",
    pageNumber: 6,
    section: "Customer FAQ: facilities, rules, and support",
    question: "How long is the minimum stay or lease?",
    content:
      "Reforbs is designed around ownership and freedom with zero lock-in restrictions! For specific stay tenures and flexible lease durations, please reach out directly to host Arpit at 7420040241.",
    searchTerms: [
      "lease",
      "minimum stay",
      "lock in",
      "tenure",
      "notice period",
      "long stay",
      "short stay",
      "duration",
    ],
    isFAQ: true,
    priorityWeight: 2.0,
  },

  // Page 6: Food / meal plan
  {
    id: "p6-food-faq",
    pageNumber: 6,
    section: "Customer FAQ: facilities, rules, and support",
    question: "Is food or a meal plan included?",
    content:
      "We believe in cooking freedom! Unlike traditional hostels with rigid mess food, all Reforbs spaces feature kitchen and dining facilities where you can cook what you love at your own pace. For residents looking for meal delivery or local tiffins, our team is happy to recommend trusted local services.",
    searchTerms: [
      "food",
      "meals",
      "mess",
      "meal plan",
      "breakfast",
      "lunch",
      "dinner",
      "cooking",
    ],
    isFAQ: true,
    priorityWeight: 2.2,
  },

  // Page 6: Furnished accommodation
  {
    id: "p6-furnished-faq",
    pageNumber: 6,
    section: "Customer FAQ: facilities, rules, and support",
    question: "Is the accommodation furnished?",
    content:
      "Yes! Our spaces feature thoughtfully designed interiors, comfortable beds, study and work desks, and wardrobe storage. If you want to check the specific inventory and setup for a particular room, please call host Arpit at 7420040241.",
    searchTerms: [
      "furnished",
      "furniture",
      "bed",
      "wardrobe",
      "appliances",
      "inventory",
      "cupboard",
    ],
    isFAQ: true,
    priorityWeight: 2.0,
  },

  // Page 6: Kitchen available
  {
    id: "p6-kitchen-faq",
    pageNumber: 6,
    section: "Customer FAQ: facilities, rules, and support",
    question: "Is a kitchen available?",
    content:
      "Yes! Kitchen and dining spaces are a core part of Reforbs living. You have complete cooking freedom to make your own meals whenever you like.",
    searchTerms: ["kitchen", "cooking", "private kitchen", "dining"],
    isFAQ: true,
    priorityWeight: 2.0,
  },

  // Page 6: Laundry available
  {
    id: "p6-laundry-faq",
    pageNumber: 6,
    section: "Customer FAQ: facilities, rules, and support",
    question: "Is laundry available?",
    content:
      "Yes! Laundry facilities are provided on-site for all residents to keep your daily routines simple and convenient.",
    searchTerms: [
      "laundry",
      "washing machine",
      "washing clothes",
      "laundry charges",
    ],
    isFAQ: true,
    priorityWeight: 2.0,
  },

  // Page 6: Visitors allowed
  {
    id: "p6-visitors-faq",
    pageNumber: 6,
    section: "Customer FAQ: facilities, rules, and support",
    question: "Are visitors allowed?",
    content:
      "Reforbs is a warm, social community where you can invite friends and family over. For overnight guest arrangements or building-specific visitor guidelines, just check in with host Arpit at 7420040241.",
    searchTerms: [
      "visitors",
      "friends",
      "guests",
      "guest policy",
      "visiting hours",
      "parents",
    ],
    isFAQ: true,
    priorityWeight: 2.2,
  },

  // Page 6: Curfew rules
  {
    id: "p6-curfew-faq",
    pageNumber: 6,
    section: "Customer FAQ: facilities, rules, and support",
    question: "Are there curfew rules?",
    content:
      "We believe in adult freedom rather than restrictive hostel gate curfews. You have the flexibility to manage your schedule. If you have specific late-entry requirements, feel free to confirm with host Arpit at 7420040241.",
    searchTerms: [
      "curfew",
      "entry time",
      "gate closing",
      "house rules",
      "night out",
      "timing",
    ],
    isFAQ: true,
    priorityWeight: 2.2,
  },

  // Page 6: Pets allowed
  {
    id: "p6-pets-faq",
    pageNumber: 6,
    section: "Customer FAQ: facilities, rules, and support",
    question: "Are pets allowed?",
    content:
      "We love animals! Pet guidelines depend on the specific property and room configuration. Please give us a quick call at 7420040241 before booking so we can recommend the best pet-friendly setup for you.",
    searchTerms: ["pets", "dog", "cat", "pet policy", "animals", "pet friendly"],
    isFAQ: true,
    priorityWeight: 2.2,
  },

  // Page 7: Gender eligibility
  {
    id: "p7-gender-faq",
    pageNumber: 7,
    section: "Customer FAQ: facilities, rules, and support",
    question: "Is it for men, women, or all genders?",
    content:
      "We welcome both students and working professionals. To check specific gender options or dedicated floors for your chosen building, please reach out to host Arpit at 7420040241.",
    searchTerms: [
      "men",
      "women",
      "girls",
      "boys",
      "gender",
      "eligibility",
      "female",
      "male",
      "mixed",
    ],
    isFAQ: true,
    priorityWeight: 2.2,
  },

  // Page 7: Documents required
  {
    id: "p7-documents-faq",
    pageNumber: 7,
    section: "Customer FAQ: facilities, rules, and support",
    question: "What identification documents are required?",
    content:
      "We keep onboarding quick and easy. Standard government photo ID (such as Aadhaar or Passport) and college/employment verification are typically requested. Call 7420040241 for any questions regarding move-in documentation.",
    searchTerms: [
      "id",
      "documents",
      "aadhaar",
      "verification",
      "kyc",
      "proof",
      "passport",
    ],
    isFAQ: true,
    priorityWeight: 2.0,
  },

  // Page 7: Cancellation / refund policy
  {
    id: "p7-cancellation-faq",
    pageNumber: 7,
    section: "Customer FAQ: facilities, rules, and support",
    question: "What is the cancellation or refund policy?",
    content:
      "We maintain fair, transparent refund and cancellation guidelines. For exact written terms before making any reservation, please connect with host Arpit at 7420040241.",
    searchTerms: [
      "cancellation",
      "refund",
      "deposit refund",
      "notice",
      "early exit",
      "money back",
    ],
    isFAQ: true,
    priorityWeight: 2.2,
  },

  // Page 7: Repairs / maintenance support
  {
    id: "p7-repairs-faq",
    pageNumber: 7,
    section: "Customer FAQ: facilities, rules, and support",
    question: "What support is available if something needs repair?",
    content:
      "We offer proactive day-to-day support and routine maintenance. If anything ever needs attention in your room, our on-site team is quick to respond. You can always reach out directly to 7420040241.",
    searchTerms: [
      "maintenance",
      "repair",
      "support",
      "complaint",
      "issue",
      "breakdown",
      "fix",
    ],
    isFAQ: true,
    priorityWeight: 2.0,
  },

  // Page 7: Who is Reforbs for?
  {
    id: "p7-who-for-faq",
    pageNumber: 7,
    section: "Customer FAQ: choosing Reforbs",
    question: "Who is Reforbs for?",
    content:
      "Reforbs is designed for modern students and working professionals looking for premium, restriction-free co-living or student-housing in Pune.",
    searchTerms: [
      "students",
      "working professionals",
      "young professionals",
      "student accommodation",
      "coliving",
      "who is it for",
    ],
    isFAQ: true,
    priorityWeight: 2.0,
  },

  // Page 7: What makes Reforbs different?
  {
    id: "p7-difference-faq",
    pageNumber: 7,
    section: "Customer FAQ: choosing Reforbs",
    question: "What makes Reforbs different from a regular hostel or rental?",
    content:
      "Unlike traditional PGs or restrictive hostels, Reforbs gives you real ownership and freedom:\n\n• 100% private single-occupancy rooms (no forced room sharing)\n• Complete cooking freedom with fully equipped kitchens (no compulsory mess food)\n• Zero lock-in restrictions\n• Beautifully designed interiors with work desks and high-speed Wi-Fi\n• A warm, social community of like-minded students and professionals",
    searchTerms: [
      "benefits",
      "why reforbs",
      "difference",
      "hostel",
      "rental",
      "community",
      "special",
    ],
    isFAQ: true,
    priorityWeight: 2.0,
  },

  // Page 7: Where is Reforbs located?
  {
    id: "p7-where-located-faq",
    pageNumber: 7,
    section: "Customer FAQ: choosing Reforbs",
    question: "Where is Reforbs located?",
    content:
      "Reforbs properties are centrally located in Viman Nagar and Sakore Nagar, Pune! Shubh Gateway is located right opposite Symbiosis Law School (SLS), and Moksha, Vipasana, and Shubh Nirvana are located in prime spots across Viman Nagar.",
    searchTerms: [
      "location",
      "address",
      "pune",
      "viman nagar",
      "near me",
      "where located",
      "symbiosis",
    ],
    isFAQ: true,
    priorityWeight: 2.2,
  },

  // Page 7: Email address FAQ
  {
    id: "p7-email-faq",
    pageNumber: 7,
    section: "Customer FAQ: choosing Reforbs",
    question: "Does Reforbs have an email address?",
    content:
      "We provide instant phone and WhatsApp assistance to avoid email delays! You can connect directly with host Arpit at 7420040241 for immediate answers and support.",
    searchTerms: ["email", "mail", "support email", "email address", "inbox"],
    isFAQ: true,
    priorityWeight: 2.0,
  },

  // Page 8: Booking confirmation / hold room
  {
    id: "p8-hold-room-faq",
    pageNumber: 8,
    section: "Can the chatbot confirm a booking or hold a room?",
    question: "Can the chatbot confirm a booking or hold a room?",
    content:
      "To hold a room and ensure all your preferences are met, please connect directly with our host Arpit at 7420040241. We will verify room availability and confirm your booking in minutes!",
    searchTerms: [
      "booking confirmation",
      "hold a room",
      "payment",
      "availability",
      "reserve",
      "hold room",
    ],
    isFAQ: true,
    priorityWeight: 2.2,
  },
];
