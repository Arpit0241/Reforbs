/**
 * Reforbs Customer Support Knowledge Configuration
 * Ground truth from: reforbs_knowledge_base.pdf (public/knowledge/reforbs-knowledge.pdf)
 * Deterministic retrieval rules, synonym maps, and verified fallback responses.
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
  "Hi! Welcome to Reforbs. I can help you find information about our properties, amenities, and accommodation. What would you like to know?";

export const RECOMMENDED_FALLBACK =
  "I couldn't verify that detail from the information available on the Reforbs website. For the latest details, please contact the Reforbs team at 7420040241. The website lists Reforbs in Viman Nagar, Pune, Maharashtra.";

export const OFF_TOPIC_FALLBACK =
  "I couldn't find that information in the Reforbs knowledge base. I can only assist with verified information about Reforbs properties, amenities, and accommodation in Pune. Please contact the Reforbs team at 7420040241 for any inquiries.";

export const PDF_LOAD_ERROR_MESSAGE =
  "The Reforbs assistant is temporarily unable to access its knowledge document. For all enquiries, please call the Reforbs team directly at 7420040241.";

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
 * Pre-extracted Verified Ground Truth Passages from reforbs-knowledge.pdf
 * (Used as authoritative reference, verification benchmark, and reliable hydration fallback)
 */
export const VERIFIED_PDF_PASSAGES: KnowledgeItem[] = [
  // Page 2: About Reforbs & Brand Themes
  {
    id: "p2-about-reforbs",
    pageNumber: 2,
    section: "About Reforbs Living",
    content:
      "Reforbs describes itself as a provider of premium co-living spaces in Pune for modern working professionals and students. Its positioning is about more than accommodation: a place to live, work or study, play, meet people, and feel at home.\n\nBrand themes on the website include:\n• Privacy: All rooms are for single occupants.\n• Comfort and support: Day-to-day support and regular maintenance.\n• Personalization: Home-like setup with private kitchen, dining space, balcony, and other private spaces.\n• Decor: An interior design team works to improve and personalize spaces.\n• Community: Social bonding, shared experiences, networking, and involvement.\n• Freedom: Freedom and personalizing one's room as core values.",
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
      "Location: Viman Nagar, Pune, Maharashtra, India\nOwner: Arpit Agarwal\nPhone: 7420040241\nWebsite: https://reforbs.com/\n\nNote: The website does not display a customer support email address or direct social-media profile URLs in its readable text. Please call 7420040241 directly.",
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
      "Reforbs displays five named properties across two categories:\n\nStudent Housing:\n1. Shubh Gateway — Opposite Symbiosis Law School\n2. Reforbs Living Sakore Nagar — Sakore Nagar\n\nCo-Living:\n3. Moksha — Viman Nagar, Pune\n4. Vipasana — Viman Nagar, Pune\n5. Shubh Nirvana — Viman Nagar, Pune\n\nNote: The website does not show full street addresses, rent, room availability, or detailed property-specific amenity lists. For property tours and current vacancies, call 7420040241.",
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
      "Shubh Gateway is listed as Student Housing opposite Symbiosis Law School. The website does not show a full street address, rent, room availability, or detailed property-specific amenity list. Please contact Reforbs at 7420040241 to confirm details.",
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
      "The website lists a student-housing property named Reforbs Living Sakore Nagar. Contact 7420040241 for its exact location, room availability, and current details.",
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
      "The website lists Moksha, Vipasana, and Shubh Nirvana as co-living properties in Viman Nagar, Pune. Contact 7420040241 to confirm specific amenities and availability.",
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
      "The Reforbs homepage lists the following amenities under 'Everything you need, already included':\n• Free high-speed Wi-Fi (internet access / wireless internet)\n• TV (television)\n• Work desks (study desk / workspace)\n• Living area (common lounge)\n• Kitchen (kitchen facilities)\n• Daily cleaning services (housekeeping / maid)\n• Parking (vehicle parking)\n• Laundry (laundry facilities)\n\nImportant note: Because the homepage does not assign every amenity to each individual property, please confirm the exact setup for your chosen property with the team at 7420040241.",
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
      "The homepage lists free high-speed Wi-Fi among its amenities. Please confirm availability and details for the specific property with the team at 7420040241.",
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
      "Daily cleaning services are listed on the homepage. The precise scope and schedule for a particular property are not specified; confirm with Reforbs at 7420040241.",
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
      "Parking is listed among the general amenities. Confirm the availability and terms for your chosen property by calling 7420040241.",
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
      "Yes. The Reforbs website states that all rooms are for single occupants, meaning one tenant per room. Ask the team to confirm the room type, current options, and exact availability at the property you prefer by calling 7420040241.",
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
      "Current rent or monthly pricing is not published on the reviewed Reforbs homepage. For a current quote, contact 7420040241 and mention the property name you are interested in.",
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
      "The security deposit amount is not specified on the reviewed website. Please contact Reforbs at 7420040241 for the current deposit and payment terms.",
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
      "Booking fees, maintenance charges, taxes, utility charges, and other one-time or recurring charges are not detailed on the reviewed homepage. Ask the Reforbs team for a complete cost breakdown at 7420040241.",
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
      "Live room availability is not shown on the website and can change. Call Reforbs at 7420040241 to check current vacancies for your preferred property and move-in date.",
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
      "The reviewed homepage invites customers to explore properties and get in touch, but it does not explain an online booking process. Contact 7420040241 for the current enquiry and booking steps.",
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
      "The reviewed homepage does not give a specific tour-booking process. Contact 7420040241 to ask whether a visit can be arranged for the property you prefer.",
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
      "Minimum stay duration, lease terms, lock-in period, and notice period are not specified on the reviewed homepage. Confirm the terms directly with Reforbs at 7420040241.",
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
      "Food, meals, and meal-plan inclusions are not specified on the reviewed homepage. Contact Reforbs at 7420040241 to confirm food arrangements for the property you are considering.",
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
      "The website mentions decor and designed spaces but does not provide a complete furniture inventory for each property. Ask the team what furniture and appliances are included in the specific room at 7420040241.",
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
      "The homepage mentions a kitchen among the amenities and also describes private kitchen and dining spaces. The exact arrangement may differ by property; please confirm with 7420040241.",
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
      "Laundry is listed among the general amenities. The website does not specify whether the service is self-service, paid, or included at every property; confirm details with Reforbs at 7420040241.",
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
      "The website describes a social, community-oriented environment and says tenants can invite friends over, but it does not publish formal visitor rules, hours, or restrictions. Confirm the current visitor policy with Reforbs at 7420040241.",
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
      "Curfew and entry-time rules are not specified on the reviewed website. Contact the Reforbs team at 7420040241 to confirm the current house rules.",
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
      "The reviewed website does not state a pet policy. Please confirm directly with Reforbs at 7420040241.",
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
      "Gender eligibility and any men-only, women-only, or mixed accommodation rules are not specified on the reviewed homepage. Contact the team at 7420040241 for the current eligibility details.",
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
      "The website does not list required documents or verification steps. Ask Reforbs at 7420040241 for the current application and document requirements.",
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
      "Cancellation, refund, and deposit-return policies are not published on the reviewed homepage. Ask for the written terms before paying any amount; contact 7420040241.",
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
      "Reforbs says it provides day-to-day support and regular maintenance. The website does not specify response times or a maintenance ticket process; contact the team at 7420040241 to report an issue.",
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
      "The website positions Reforbs for students and working professionals looking for co-living or student-housing options in Pune.",
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
      "Reforbs describes its approach as more than accommodation. Its website emphasizes privacy, personalized spaces, comfort, daily support, freedom, social connection, and community building.",
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
      "The contact section lists Viman Nagar, Pune, Maharashtra. Individual property details on the homepage identify Shubh Gateway as opposite Symbiosis Law School and list Moksha, Vipasana, and Shubh Nirvana in Viman Nagar.",
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
      "A customer support email address is not shown in the readable contact information on the reviewed homepage. Call 7420040241 for contact options.",
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
      "No. This chatbot can only provide information contained in its knowledge PDF. It cannot check live inventory, confirm a booking, hold a room, arrange a visit, or process payments. Contact Reforbs at 7420040241.",
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

  // Page 8: Information not published
  {
    id: "p8-unpublished-info",
    pageNumber: 8,
    section: "Information not published on the reviewed homepage",
    content:
      "The following topics are not detailed or published on the reviewed homepage, and the Reforbs team at 7420040241 should be contacted for verified details:\n• Current rent for each property and room type\n• Security deposits, refundable amounts, booking fees, taxes, and other charges\n• Real-time availability, room inventory, and move-in dates\n• Full street addresses, maps, and property-specific contact details\n• Property-specific amenity lists and exact facility conditions\n• Food, mess, or meal plans\n• Furniture and appliance inventory\n• Minimum stay, lease, lock-in, notice, cancellation, and refund rules\n• Visitor policy, curfew, pets, smoking, and house rules\n• Gender eligibility, document requirements, and screening process\n• Payment methods, installment options, discounts, and corporate/student offers\n• Support email, maintenance response time, and an official issue-reporting process.",
    searchTerms: [
      "unpublished",
      "missing",
      "rules",
      "terms",
      "charges",
      "discounts",
      "screening",
      "screening process",
    ],
    isFAQ: false,
    priorityWeight: 1.0,
  },
];
