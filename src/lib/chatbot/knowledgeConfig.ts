/**
 * Reforbs Customer Support Knowledge Configuration
 * Authoritative Operational Source: reforbs_chatbot_owner_qa_knowledge.pdf
 * (public/knowledge/reforbs-owner-qa.pdf)
 * Prepared from owner-provided Website Content(1).docx (Questionnaire and Tables 1, 2, and 3)
 * Deterministic Browser-Only Retrieval Configuration (v5.0 - Owner QA - 4 November 2026)
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
  googleMapsUrl?: string;
  description: string;
  totalBedsInfo?: string;
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
  airConditioning?: boolean;
  isGuesthouse?: boolean;
}

export const KNOWLEDGE_PDF_PATH = "/knowledge/reforbs-owner-qa.pdf?v=owner-qa-2026-11-04";
export const KNOWLEDGE_VERSION = "reforbs-owner-qa-2026-11-04";
export const PDF_WORKER_PATH = "/pdf.worker.min.js";

export const CONTACT_PHONE = "+91 74200 40241";
export const CONTACT_PHONE_RAW = "7420040241";
export const HOST_NAME = "Reforbs Host";
export const CONTACT_EMAIL = "reforbsar@gmail.com";
export const TOUR_HOURS = "Every day, 10:00 AM to 10:00 PM";
export const PRIMARY_LOCATION = "Viman Nagar, Pune, Maharashtra 411014";

export const APPROVED_FALLBACK =
  "I couldn't verify that information in our current knowledge base. Please use the Call Us button to speak with our Reforbs support team.";

export const WELCOME_MESSAGE =
  "Hi! Welcome to Reforbs. I'm your Reforbs Assistant. How can I help you today? Ask me about our properties, room types, amenities, pricing, locations, or house rules.";

export const RECOMMENDED_FALLBACK =
  "I couldn't verify that information in our current knowledge base. Please use the Call Us button to speak with our Reforbs support team.";

export const OFF_TOPIC_FALLBACK =
  "I'm dedicated to helping you with Reforbs accommodation, properties, amenities, room options, and living in Pune. Please use the Call Us button below to speak directly with our team!";

export const PDF_LOAD_ERROR_MESSAGE =
  "We're having trouble loading our local knowledge document. Please use the Call Us button for instant assistance.";

/**
 * 9 Authoritative Properties from Owner Q&A Knowledge Base
 * (Pages 7-15 of reforbs_chatbot_owner_qa_knowledge.pdf)
 */
export const PROPERTIES_V4: PropertyKnowledge[] = [
  // 1. Shubh Gateway (Student Accommodation - Page 13)
  {
    id: "shubh-gateway",
    name: "Shubh Gateway",
    aliases: ["shubh gateway", "gateway", "sls accommodation", "symbiosis law school accommodation"],
    category: "Student Housing",
    pageNumber: 13,
    doubleRate: 25000,
    doubleRateStr: "₹25,000/month (Girls) | ₹27,000/month (Boys)",
    securityDeposit: "₹40,000",
    locationCue: "Shubh Gateway, Sr. No. 227, Plot No. 1, New Airport Road, opposite Symbiosis Law College, Viman Nagar, Pune, Maharashtra 411032",
    googleMapsUrl: "https://maps.app.goo.gl/VR1T7UwD58H6UGa49",
    description:
      "3BHK apartments in a gated society with 4 towers A-D, 12 floors per tower, and 4 units of 3BHK per floor. Selected apartments managed as student accommodation. Towers/apartments are gender-specific: boys only or girls only. Every room is twin sharing with attached/private washroom. Visitors of opposite genders are strictly not allowed.",
    totalBedsInfo: "42 Girls Twin Beds / 24 Boys Twin Beds (Private: 0 beds; rent NA)",
    doubleDetails: [
      "Girls Twin Sharing: ₹25,000/month (42 beds listed)",
      "Boys Twin Sharing: ₹27,000/month (24 beds listed)",
      "Breakfast and dinner included in running mess",
      "Laundry included twice weekly (up to 5 kg)",
      "Attached / private washroom for every room",
      "AC equipped rooms",
      "Opposite-gender visitors strictly not allowed",
    ],
    singleDetails: [
      "Private rows show 0 beds and rent NA in the owner table (Deposit field shows ₹40,000).",
      "Private room rate/availability is not listed; do not infer an offer. Refer to sales.",
    ],
    amenities: [
      "Breakfast and dinner included",
      "Laundry included twice weekly (5 kg)",
      "Attached/private washrooms",
      "Air conditioning",
      "Common kitchen for 3 rooms",
      "Free unlimited Wi-Fi",
      "Daily housekeeping (brooming, mopping, dusting)",
      "Opposite SLS Gate (150 m walk)",
      "Annual academic lock-in",
    ],
    nearbyEstimates: [
      { place: "Symbiosis Law School (SLS)", estimate: "150 m walk" },
      { place: "Pune Airport", estimate: "400 m drive" },
      { place: "Symbiosis Management College", estimate: "1.2 km" },
      { place: "Commerzone IT Park", estimate: "2.5 km" },
      { place: "Phoenix Mall", estimate: "2.5 km" },
      { place: "Gigaspace IT Park", estimate: "2.5 km" },
      { place: "Panchshil Tech Park", estimate: "2.5 km" },
      { place: "Metro", estimate: "3 km" },
    ],
    propertyUrl: "https://reforbs.com/student-housing/shubh-gateway",
    ratingInfo: "4.9 / 5 (148 reviews)",
    coupleFriendly: false,
    annualLockIn: true,
    foodPolicy: "Breakfast and dinner included.",
    laundryPolicy: "Included twice weekly, 5 kg.",
    contactPhone: "+91 70578 97430",
    airConditioning: true,
  },

  // 2. Brindavan (Student Accommodation - Page 14)
  {
    id: "brindavan",
    name: "Brindavan",
    aliases: ["brindavan", "brindavan student", "sakore nagar", "symbiosis road", "lal path lab", "reforbs living sakore nagar"],
    category: "Student Housing",
    pageNumber: 14,
    doubleRate: 27000,
    doubleRateStr: "₹27,000/month",
    singleRate: 32000,
    singleRateStr: "₹32,000/month",
    securityDeposit: "₹30,000",
    locationCue: "Symbiosis Road, behind Dr Lal Path Lab, Sakore Nagar, Viman Nagar, Pune, Maharashtra 411014",
    googleMapsUrl: "https://maps.app.goo.gl/MJWzeZj1LZHcyn1V9",
    description:
      "1BHK units in a standalone 4-floor building with 4 units per floor. Each 1BHK accommodates 3 people: one twin-sharing room and one single/private room. Each unit has a separate entrance, private washroom, and co-working space. Accommodates boys and girls (gender-specific rules; opposite-gender visitors not allowed).",
    totalBedsInfo: "32 Twin Beds / 16 Private Beds",
    doubleDetails: [
      "Twin sharing: ₹27,000/month (32 beds listed)",
      "All 3 daily meals included (Breakfast, Lunch, and Dinner)",
      "Laundry included twice weekly (up to 5 kg)",
      "Private washroom and separate entrance per 1BHK",
      "Air conditioning",
      "Opposite-gender visitors strictly not allowed",
    ],
    singleDetails: [
      "Single/private room: ₹32,000/month (16 beds listed)",
      "All 3 daily meals included (Breakfast, Lunch, and Dinner)",
      "Laundry included twice weekly (up to 5 kg)",
      "Private washroom and separate entrance per 1BHK",
      "Air conditioning",
      "Opposite-gender visitors strictly not allowed",
    ],
    amenities: [
      "All 3 meals (Breakfast, Lunch, Dinner) included",
      "Laundry included twice weekly (5 kg)",
      "Private washroom per 1BHK unit",
      "Air conditioning",
      "Common pantry in premises",
      "Free unlimited Wi-Fi",
      "Daily housekeeping (brooming, mopping, dusting)",
      "Annual academic lock-in",
    ],
    nearbyEstimates: [
      { place: "Symbiosis Management College", estimate: "400 m (closest college)" },
      { place: "IIHM", estimate: "1 km" },
      { place: "Allen", estimate: "1.2 km" },
      { place: "Phoenix Mall", estimate: "1.5 km" },
      { place: "Airport", estimate: "1.5 km" },
      { place: "Metro", estimate: "1.5 km" },
      { place: "Symbiosis Law School", estimate: "2 km" },
    ],
    propertyUrl: "https://reforbs.com/student-housing/brindavan",
    ratingInfo: "4.9 / 5 (136 reviews)",
    coupleFriendly: false,
    annualLockIn: true,
    foodPolicy: "Breakfast, lunch, and dinner included (all 3 meals).",
    laundryPolicy: "Included twice weekly, 5 kg.",
    contactPhone: "+91 96370 19838",
    airConditioning: true,
  },

  // 3. Vairagya (Student Accommodation - Page 15)
  {
    id: "vairagya",
    name: "Vairagya",
    aliases: ["vairagya", "lavale vairagya", "symbiosis lavale"],
    category: "Student Housing",
    pageNumber: 15,
    doubleRate: 17000,
    doubleRateStr: "₹17,000/month",
    tripleRate: 15000,
    tripleRateStr: "₹15,000/month",
    securityDeposit: "₹20,000",
    locationCue: "Lavale, Pune (near Symbiosis University Lavale Campus and ISBM College). Note: Street address and Google Maps link not provided in owner document.",
    googleMapsUrl: "",
    description:
      "Standalone building with 5 spacious 1BHK units. Each 1BHK holds 3 people in triple-sharing configuration; some units reserved for twin sharing only. Best suited for Symbiosis University, Lavale. Non-AC property with natural ventilation. Running mess with in-house cooking. Opposite-gender visitors strictly not allowed.",
    totalBedsInfo: "27 Triple Beds / 24 Twin Beds",
    doubleDetails: [
      "Twin sharing: ₹17,000/month (24 beds listed)",
      "Breakfast and dinner included in running mess",
      "Private / attached washroom",
      "Self-use multiple washing machines; paid laundry service also available",
      "Opposite-gender visitors strictly not allowed",
    ],
    tripleDetails: [
      "Triple sharing: ₹15,000/month (27 beds listed - lowest listed rate in Reforbs)",
      "Breakfast and dinner included in running mess",
      "Private / attached washroom",
      "Self-use multiple washing machines; paid laundry service also available",
      "Opposite-gender visitors strictly not allowed",
    ],
    amenities: [
      "Breakfast and dinner included in running mess",
      "Lowest Reforbs rate: ₹15,000/month (Triple)",
      "Private/attached washrooms",
      "Common pantry in premises (in-house cooking)",
      "Self-use multiple washing machines & optional paid laundry",
      "Free unlimited Wi-Fi",
      "Daily housekeeping (brooming, mopping, dusting)",
      "Non-AC property",
      "Annual academic lock-in",
    ],
    nearbyEstimates: [
      { place: "Symbiosis University Lavale Campus", estimate: "500 m" },
      { place: "ISBM College", estimate: "500 m" },
    ],
    propertyUrl: "https://reforbs.com/student-housing/vairagya",
    ratingInfo: "4.9 / 5 (128 reviews)",
    coupleFriendly: false,
    annualLockIn: true,
    foodPolicy: "Breakfast and dinner included (running mess with in-house cooking).",
    laundryPolicy: "Self-use multiple washing machines; paid laundry service also available.",
    contactPhone: "+91 73876 14629",
    airConditioning: false,
  },

  // 4. Nirvana (Co-Living - Page 7)
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
    locationCue: "Plot 34, Lane 2A, Sanjay Park, Viman Nagar - 411032",
    googleMapsUrl: "https://maps.app.goo.gl/8MsiHGMq8s6R2At28",
    description:
      "1RK standalone building with 3 floors and 4 units of 1RK per floor (2 twin sharing, 2 single/private sharing). Each unit has a separate entrance, private attached kitchen, and attached washroom. Described as suited to couples and people preferring privacy.",
    totalBedsInfo: "26 Twin Beds / 7 Private Beds",
    doubleDetails: [
      "Twin sharing: ₹17,000/month (26 beds listed, deposit: ₹17,000)",
      "Private attached kitchen in each 1RK unit",
      "Attached washroom & separate entrance",
      "Air conditioning",
      "100% couple friendly",
      "Zero lock-in period",
    ],
    singleDetails: [
      "Private 1RK: ₹29,000/month (7 beds listed, deposit: ₹29,000)",
      "Entire private 1RK studio with attached private kitchen",
      "Attached washroom & separate entrance",
      "Air conditioning",
      "100% couple friendly",
      "Zero lock-in period",
    ],
    amenities: [
      "Private attached kitchen in each 1RK",
      "100% Couple-friendly eligibility (Yes)",
      "Zero lock-in period (Lock-in: No)",
      "Air conditioning",
      "Attached washroom",
      "Free unlimited Wi-Fi",
      "Daily housekeeping (brooming, mopping, dusting)",
      "Self-use multiple washing machines & optional paid laundry",
      "Food available and optional",
    ],
    nearbyEstimates: [
      { place: "Airport", estimate: "1 km" },
      { place: "Symbiosis Law School", estimate: "2 km" },
      { place: "Symbiosis Management College", estimate: "2 km" },
      { place: "Commerzone IT Park", estimate: "2.5 km" },
      { place: "Phoenix Mall", estimate: "3 km" },
      { place: "Gigaspace IT Park", estimate: "3 km" },
      { place: "Panchshil Tech Park", estimate: "3.2 km" },
      { place: "Metro", estimate: "3 km" },
      { place: "Business Bay", estimate: "4 km" },
    ],
    propertyUrl: "https://reforbs.com/coliving/nirvana",
    ratingInfo: "4.9 / 5 (168 reviews)",
    coupleFriendly: true,
    annualLockIn: false,
    foodPolicy: "Available and optional; call for further details. Attached private kitchen for self-cooking.",
    laundryPolicy: "Self-use multiple washing machines; paid laundry service also available.",
    contactPhone: "+91 74200 40241",
    airConditioning: true,
  },

  // 5. Moksha (Co-Living - Page 8)
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
    locationCue: "Plot 61, Lane 2A, Sanjay Park, Viman Nagar - 411032",
    googleMapsUrl: "https://maps.app.goo.gl/8MsiHGMq8s6R2At28",
    description:
      "3BHK standalone building; each floor is a 3BHK (2 single/private sharing, 1 twin sharing). Maximum occupancy per floor: 4. Kitchen, balcony, living area, and dining area.",
    totalBedsInfo: "18 Twin Beds / 11 Private Beds",
    doubleDetails: [
      "Twin sharing: ₹17,000/month (18 beds listed, deposit: ₹17,000)",
      "Attached washroom",
      "Common kitchen shared by 3 rooms, balcony, living area",
      "Air conditioning",
      "Couple-friendly (Yes)",
      "Zero lock-in period",
    ],
    singleDetails: [
      "Private room: ₹24,000/month (11 beds listed - lowest listed private room rate in Reforbs)",
      "Attached washroom",
      "Common kitchen shared by 3 rooms, balcony, living area",
      "Air conditioning",
      "Couple-friendly (Yes)",
      "Zero lock-in period",
    ],
    amenities: [
      "Lowest private room rate in Reforbs: ₹24,000/month",
      "Couple-friendly eligibility (Yes)",
      "Zero lock-in period (Lock-in: No)",
      "Maximum occupancy per floor: 4",
      "Air conditioning",
      "Attached washrooms",
      "Common kitchen shared by 3 rooms",
      "Free unlimited Wi-Fi",
      "Daily housekeeping (brooming, mopping, dusting)",
      "Self-use multiple washing machines & optional paid laundry",
      "Food available and optional",
    ],
    nearbyEstimates: [
      { place: "Airport", estimate: "1 km" },
      { place: "Symbiosis Law School", estimate: "2 km" },
      { place: "Symbiosis Management College", estimate: "2 km" },
      { place: "Commerzone IT Park", estimate: "2.5 km" },
      { place: "Phoenix Mall", estimate: "3 km" },
      { place: "Gigaspace IT Park", estimate: "3 km" },
      { place: "Panchshil Tech Park", estimate: "3.2 km" },
      { place: "Metro", estimate: "3 km" },
      { place: "Business Bay", estimate: "4 km" },
    ],
    propertyUrl: "https://reforbs.com/coliving/moksha",
    ratingInfo: "4.9 / 5 (160 reviews)",
    coupleFriendly: true,
    annualLockIn: false,
    foodPolicy: "Available and optional; call for further details. Common kitchen shared by 3 rooms.",
    laundryPolicy: "Self-use multiple washing machines; paid laundry service also available.",
    contactPhone: "+91 74200 40241",
    airConditioning: true,
  },

  // 6. Vipasna (Co-Living - Page 9)
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
    locationCue: "Plot 36, Lane 3, Sanjay Park, Viman Nagar - 411032",
    googleMapsUrl: "https://maps.app.goo.gl/8MsiHGMq8s6R2At28",
    description:
      "Dorm layout. Standalone building with 4 rooms on every floor. Every room has an attached washroom. Each floor has a common kitchen, living area, and dining area. The source compares its structure to a hotel and describes it as suitable for people wanting premium rooms.",
    totalBedsInfo: "6 Twin Beds / 8 Private Beds",
    doubleDetails: [
      "Twin sharing: ₹17,000/month (6 beds listed, deposit: ₹17,000)",
      "Attached washroom to every room",
      "Common kitchen shared by 4 rooms",
      "Air conditioning",
      "Couple-friendly (Yes)",
      "Zero lock-in period",
    ],
    singleDetails: [
      "Private room: ₹27,000/month (8 beds listed, deposit: ₹27,000)",
      "Hotel-style premium ensuite room",
      "Attached washroom to every room",
      "Common kitchen shared by 4 rooms",
      "Air conditioning",
      "Couple-friendly (Yes)",
      "Zero lock-in period",
    ],
    amenities: [
      "Hotel-style structure with premium ensuite rooms",
      "Attached washroom to every room",
      "Couple-friendly eligibility (Yes)",
      "Zero lock-in period (Lock-in: No)",
      "Air conditioning",
      "Common kitchen shared by 4 rooms",
      "Free unlimited Wi-Fi",
      "Daily housekeeping (brooming, mopping, dusting)",
      "Self-use multiple washing machines & optional paid laundry",
      "Food available and optional",
    ],
    nearbyEstimates: [
      { place: "Airport", estimate: "1 km" },
      { place: "Symbiosis Law School", estimate: "2 km" },
      { place: "Symbiosis Management College", estimate: "2 km" },
      { place: "Commerzone IT Park", estimate: "2.5 km" },
      { place: "Phoenix Mall", estimate: "3 km" },
      { place: "Gigaspace IT Park", estimate: "3 km" },
      { place: "Panchshil Tech Park", estimate: "3.2 km" },
      { place: "Metro", estimate: "3 km" },
      { place: "Business Bay", estimate: "4 km" },
    ],
    propertyUrl: "https://reforbs.com/coliving/vipasna",
    ratingInfo: "4.9 / 5 (152 reviews)",
    coupleFriendly: true,
    annualLockIn: false,
    foodPolicy: "Available and optional; call for further details. Common kitchen shared by 4 rooms.",
    laundryPolicy: "Self-use multiple washing machines; paid laundry service also available.",
    contactPhone: "+91 74200 40241",
    airConditioning: true,
  },

  // 7. Park Island (Company Guesthouse - Page 10)
  {
    id: "park-island",
    name: "Park Island",
    aliases: ["park island", "park island guesthouse", "shastrinagar guesthouse", "corporate park island"],
    category: "Company Guesthouse",
    pageNumber: 10,
    doubleRate: 20000,
    doubleRateStr: "₹20,000/month",
    securityDeposit: "₹20,000",
    locationCue: "Shastrinagar, Pune, Maharashtra 411006",
    googleMapsUrl: "https://maps.app.goo.gl/8h4ivEDdFCMz5kFg9",
    description:
      "3BHK apartments in a gated society with multiple apartments on each floor. Fully furnished company guesthouse; employees of one dedicated company are allowed to stay. Not available as a regular PG.",
    totalBedsInfo: "12 Twin Beds (Private: 0 beds; rent and deposit NA)",
    doubleDetails: [
      "Twin sharing: ₹20,000/month (12 beds listed, deposit: ₹20,000)",
      "Company employees only",
      "Attached washroom (Table 1)",
      "Common kitchen for 3 rooms",
      "Air conditioning",
      "Couple-friendly: No",
      "Lock-in: No",
    ],
    amenities: [
      "Dedicated company guesthouse for employees of one dedicated company",
      "Not available as a regular PG",
      "Attached washroom (Table 1)",
      "Air conditioning",
      "Common kitchen for 3 rooms",
      "Free unlimited Wi-Fi",
      "Daily housekeeping (brooming, mopping, dusting)",
      "Self-use multiple washing machines & optional paid laundry",
      "Food available and optional",
      "Couple-friendly: No",
      "Lock-in: No",
    ],
    nearbyEstimates: [
      { place: "Commerzone IT Park", estimate: "1.5 km" },
      { place: "Business Bay", estimate: "2 km" },
      { place: "Airport", estimate: "3 km" },
      { place: "Phoenix Mall", estimate: "4 km" },
      { place: "Gigaspace IT Park", estimate: "5 km" },
      { place: "Metro", estimate: "5 km" },
      { place: "Panchshil Tech Park", estimate: "6 km" },
    ],
    propertyUrl: "https://reforbs.com/coliving/park-island",
    ratingInfo: "4.9 / 5 (142 reviews)",
    coupleFriendly: false,
    annualLockIn: false,
    foodPolicy: "Available and optional; call for details. Common kitchen for 3 rooms.",
    laundryPolicy: "Self-use multiple washing machines; paid laundry service also available.",
    contactPhone: "+91 74200 40241",
    airConditioning: true,
    isGuesthouse: true,
  },

  // 8. Pillar Homes (Company Guesthouse - Page 11)
  {
    id: "pillar-homes",
    name: "Pillar Homes",
    aliases: ["pillar homes", "pillar homes guesthouse", "clover park guesthouse", "corporate pillar homes"],
    category: "Company Guesthouse",
    pageNumber: 11,
    doubleRate: 25000,
    doubleRateStr: "₹25,000/month",
    securityDeposit: "₹25,000",
    locationCue: "Pillar Homes, Clover Park, Viman Nagar, Pune, Maharashtra 411014",
    googleMapsUrl: "https://maps.app.goo.gl/V4JFnudQ7dCT7euB7",
    description:
      "3BHK apartments in a gated society with multiple apartments on each floor. Fully furnished company guesthouse; employees of one dedicated company are allowed to stay. Not available as a regular PG.",
    totalBedsInfo: "27 Twin Beds (Private: 0 beds; rent and deposit NA)",
    doubleDetails: [
      "Twin sharing: ₹25,000/month (27 beds listed, deposit: ₹25,000)",
      "Company employees only",
      "Attached washroom (Table 1)",
      "Common kitchen for 3 rooms",
      "Air conditioning",
      "Couple-friendly: No",
      "Lock-in: No",
    ],
    amenities: [
      "Dedicated company guesthouse for employees of one dedicated company",
      "Not available as a regular PG",
      "Attached washroom (Table 1)",
      "Air conditioning",
      "Common kitchen for 3 rooms",
      "Free unlimited Wi-Fi",
      "Daily housekeeping (brooming, mopping, dusting)",
      "Self-use multiple washing machines & optional paid laundry",
      "Food available and optional",
      "Couple-friendly: No",
      "Lock-in: No",
    ],
    nearbyEstimates: [
      { place: "Panchshil Tech Park", estimate: "700 m" },
      { place: "Gigaspace IT Park", estimate: "800 m" },
      { place: "Bajaj Finserv", estimate: "1 km" },
      { place: "Phoenix Mall", estimate: "1 km" },
      { place: "Solitaire Business Hub", estimate: "1 km" },
      { place: "Metro", estimate: "1 km" },
      { place: "Symbiosis Management College", estimate: "2 km" },
      { place: "Airport", estimate: "2.5 km" },
      { place: "Symbiosis Law School", estimate: "3 km" },
    ],
    propertyUrl: "https://reforbs.com/coliving/pillar-homes",
    ratingInfo: "4.9 / 5 (135 reviews)",
    coupleFriendly: false,
    annualLockIn: false,
    foodPolicy: "Available and optional; call for details. Common kitchen for 3 rooms.",
    laundryPolicy: "Self-use multiple washing machines; paid laundry service also available.",
    contactPhone: "+91 74200 40241",
    airConditioning: true,
    isGuesthouse: true,
  },

  // 9. Suyog Enclave (Company Guesthouse - Page 12)
  {
    id: "suyog-enclave",
    name: "Suyog Enclave",
    aliases: ["suyog enclave", "suyog", "bajaj finserv guesthouse", "sakore nagar corporate"],
    category: "Company Guesthouse",
    pageNumber: 12,
    doubleRate: 25000,
    doubleRateStr: "₹25,000/month",
    securityDeposit: "₹25,000",
    locationCue: "64P, behind Bajaj Finserv, Sakore Nagar Road, Sakore Nagar, Viman Nagar, Pune, Maharashtra 411014",
    googleMapsUrl: "https://maps.app.goo.gl/2vLb3jCP81qCEZuL9",
    description:
      "3BHK apartments in a gated society with multiple apartments on each floor. Fully furnished company guesthouse; employees of one dedicated company are allowed to stay. Not available as a regular PG.",
    totalBedsInfo: "18 Twin Beds (Private: 0 beds; rent and deposit NA)",
    doubleDetails: [
      "Twin sharing: ₹25,000/month (18 beds listed, deposit: ₹25,000)",
      "Company employees only",
      "Attached washroom (Table 1)",
      "Common kitchen for 3 rooms",
      "Air conditioning",
      "Couple-friendly: No",
      "Lock-in: No",
    ],
    amenities: [
      "Dedicated company guesthouse for employees of one dedicated company",
      "Not available as a regular PG",
      "Attached washroom (Table 1)",
      "Air conditioning",
      "Common kitchen for 3 rooms",
      "Free unlimited Wi-Fi",
      "Daily housekeeping (brooming, mopping, dusting)",
      "Self-use multiple washing machines & optional paid laundry",
      "Food available and optional",
      "Couple-friendly: No",
      "Lock-in: No",
    ],
    nearbyEstimates: [
      { place: "Bajaj Finserv", estimate: "200 m" },
      { place: "Solitaire Business Hub", estimate: "500 m" },
      { place: "Panchshil Tech Park", estimate: "700 m" },
      { place: "Phoenix Mall", estimate: "800 m" },
      { place: "Gigaspace IT Park", estimate: "1 km" },
      { place: "Metro", estimate: "1 km" },
      { place: "Symbiosis Management College", estimate: "1.5 km" },
      { place: "Airport", estimate: "2.5 km" },
      { place: "Symbiosis Law School", estimate: "2.5 km" },
    ],
    propertyUrl: "https://reforbs.com/coliving/suyog",
    ratingInfo: "4.9 / 5 (138 reviews)",
    coupleFriendly: false,
    annualLockIn: false,
    foodPolicy: "Available and optional; call for details. Common kitchen for 3 rooms.",
    laundryPolicy: "Self-use multiple washing machines; paid laundry service also available.",
    contactPhone: "+91 74200 40241",
    airConditioning: true,
    isGuesthouse: true,
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
 * Includes common Indian customer phrasing
 */
export const SYNONYM_GROUPS: Record<string, string[]> = {
  rent: [
    "rent", "rental", "monthly cost", "monthly rent", "price", "pricing", "cost", "charges",
    "fees", "tariff", "rate", "budget", "bill", "expense", "cheapest", "lowest",
    "rent kitna hai", "kitna hai", "kiraya", "paisa", "room rent",
  ],
  deposit: [
    "deposit", "security deposit", "advance", "advance payment", "refundable deposit",
    "security amount", "caution deposit", "deposit kitna", "kitna deposit", "advance kitna",
  ],
  property: [
    "property", "properties", "hostel", "pg", "stay", "accommodation", "residence",
    "residences", "place", "living space", "spaces", "building", "flat",
  ],
  occupancy: [
    "occupancy", "single occupancy", "double occupancy", "single sharing", "double sharing",
    "private room", "sharing room", "room type", "sharing", "two people", "triple sharing",
    "triple", "beds",
  ],
  amenity: [
    "amenity", "amenities", "facility", "facilities", "service", "services", "features",
    "inclusions", "provision", "provisions", "benefits",
  ],
  wifi: [
    "wifi", "wi-fi", "internet", "broadband", "optical fibre", "fibre", "wireless",
    "connection", "connectivity", "net", "high-speed",
  ],
  cleaning: [
    "cleaning", "clean", "housekeeping", "daily cleaning", "maid", "sweeper", "hygiene",
    "maintenance", "room cleaning", "brooming", "mopping", "dusting", "broom", "mop", "dust",
  ],
  laundry: [
    "laundry", "washing machine", "washing clothes", "clothes wash", "wash", "dryer",
    "laundry facility", "laundry care", "paid laundry", "self-use laundry", "5 kg", "twice a week",
  ],
  kitchen: [
    "kitchen", "cooking", "cook", "cook my own food", "private kitchen", "shared kitchen",
    "pantry", "induction", "stove", "microwave",
  ],
  food: [
    "food", "meals", "mess", "meal plan", "breakfast", "dinner", "lunch", "running mess",
    "meal included", "optional food", "khana",
  ],
  parking: [
    "parking", "car parking", "bike parking", "vehicle", "two-wheeler", "four-wheeler",
  ],
  ac: [
    "ac", "air conditioner", "air conditioning", "cooling", "ac room", "non-ac", "bijli",
  ],
  cctv: [
    "cctv", "security", "surveillance", "guards", "security staff",
  ],
  rules: [
    "rules", "curfew", "bans", "timing", "lock-in", "notice period", "restrictions",
    "gate closing", "entry time", "30 days notice", "annual lock-in", "zero lock-in",
  ],
  guests: [
    "guests", "friends", "visitors", "invite friends", "overnight", "visitors allowed",
    "opposite gender", "boys and girls",
  ],
  couples: [
    "couple", "couples", "couple friendly", "unmarried", "boyfriend", "girlfriend", "partner",
    "live with", "stay with boyfriend", "live together", "stay together", "couple allowed",
  ],
  pets: [
    "pets", "pet", "dog", "cat", "animals", "pets allowed",
  ],
  smoking_alcohol: [
    "smoking", "smoke", "cigarette", "alcohol", "drinking", "drink", "beer", "flatmate consent",
  ],
  payment: [
    "payment", "payment methods", "upi", "card", "credit card", "neft", "imps", "cash",
    "how to pay", "due date",
  ],
  visit: [
    "visit", "walkthrough", "site visit", "tour", "free visit", "schedule visit", "book visit",
    "see the room", "inspection", "appointment", "timings", "tour hours", "visit before payment",
  ],
  booking: [
    "booking", "book", "reserve", "reservation", "hold", "documents", "aadhaar", "kyc",
    "move-in", "availability", "vacancies",
  ],
  contact: [
    "contact", "phone", "phone number", "call", "number", "mobile", "reach", "speak",
    "host", "helpline", "email", "support", "whatsapp", "maintenance helpline",
  ],
};

/**
 * Verified Passages strictly extracted from the 17 pages of reforbs_chatbot_owner_qa_knowledge.pdf
 */
export const VERIFIED_PDF_PASSAGES: KnowledgeItem[] = [
  // Page 2 - Property categories & Core FAQ
  {
    id: "qa-p2-categories",
    pageNumber: 2,
    section: "Property categories & core FAQ",
    question: "What types of accommodation does Reforbs offer?",
    content:
      "Reforbs’ owner document lists co-living, student accommodation, and company guesthouses in Pune. The guesthouse category is distinct from regular PG/student accommodation.\n• Co-Living: Nirvana, Moksha, Vipasna.\n• Student Accommodation: Shubh Gateway, Brindavan, Vairagya.\n• Company Guesthouse: Park Island, Pillar Homes, Suyog Enclave (employees of one dedicated company only; not available as regular PGs).",
    searchTerms: ["types of accommodation", "property categories", "co-living", "student accommodation", "company guesthouses", "list properties"],
    isFAQ: true,
    priorityWeight: 2.0,
  },

  // Page 3 - Quick reference & Lowest listed rates
  {
    id: "qa-p3-lowest-rates",
    pageNumber: 3,
    section: "Property and room-rate quick reference",
    question: "What are the lowest listed rates at Reforbs?",
    content:
      "Lowest listed rate across the room options in Table 1: Vairagya triple sharing at ₹15,000 per month. Lowest listed twin-sharing rate: ₹17,000 at Nirvana, Moksha, Vipasna, and Vairagya. Lowest listed private-room rate: Moksha at ₹24,000. These are document comparisons, not a live availability or final-quote guarantee.",
    searchTerms: ["lowest rates", "lowest listed rate", "cheapest room", "lowest rent", "rate reference", "pricing table"],
    isFAQ: true,
    priorityWeight: 2.0,
  },

  // Page 4 - Common Q&As
  {
    id: "qa-p4-cheapest-overall",
    pageNumber: 4,
    section: "Common customer questions and answers",
    question: "What is the cheapest Reforbs accommodation?",
    content:
      "The lowest listed room rate in the owner table is Vairagya triple sharing at ₹15,000 per month. This is a listed starting rate, not confirmation of current availability.",
    searchTerms: ["cheapest pg", "cheapest reforbs accommodation", "lowest rent", "budget room", "affordable accommodation", "cheapest room"],
    isFAQ: true,
    priorityWeight: 2.2,
  },
  {
    id: "qa-p4-cheapest-twin",
    pageNumber: 4,
    section: "Common customer questions and answers",
    question: "Which is the cheapest twin-sharing option?",
    content:
      "The lowest listed twin-sharing rent is ₹17,000 per month at Nirvana, Moksha, Vipasna, and Vairagya. Confirm the preferred property’s current availability with sales.",
    searchTerms: ["cheapest twin", "twin sharing price", "cheapest double", "lowest twin rate", "lowest sharing rent"],
    isFAQ: true,
    priorityWeight: 2.2,
  },
  {
    id: "qa-p4-cheapest-private",
    pageNumber: 4,
    section: "Common customer questions and answers",
    question: "What is the cheapest private room?",
    content:
      "Among the private-room rates listed, Moksha is lowest at ₹24,000 per month.",
    searchTerms: ["cheapest private room", "private room rent", "cheapest single", "lowest private rate"],
    isFAQ: true,
    priorityWeight: 2.2,
  },
  {
    id: "qa-p4-sharing-allowed",
    pageNumber: 4,
    section: "Common customer questions and answers",
    question: "Can two people share a room?",
    content:
      "Yes. The owner questionnaire says two people can share a room. The actual room type and availability depend on the property.",
    searchTerms: ["two people", "sharing", "double occupancy", "twin sharing", "two people share a room"],
    isFAQ: true,
    priorityWeight: 1.8,
  },
  {
    id: "qa-p4-ac",
    pageNumber: 4,
    section: "Common customer questions and answers",
    question: "Are rooms air-conditioned?",
    content:
      "The table marks AC rooms as available at Nirvana, Moksha, Vipasna, Park Island, Pillar Homes, Suyog Enclave, Shubh Gateway, and Brindavan. Vairagya is marked as non-AC.",
    searchTerms: ["ac", "air conditioning", "cooling", "air conditioned", "non-ac"],
    isFAQ: true,
    priorityWeight: 2.0,
  },
  {
    id: "qa-p4-wifi",
    pageNumber: 4,
    section: "Common customer questions and answers",
    question: "Is Wi-Fi included?",
    content:
      "The table lists free unlimited Wi-Fi for all nine properties.",
    searchTerms: ["wifi", "internet", "broadband", "wi-fi included", "free wifi"],
    isFAQ: true,
    priorityWeight: 1.8,
  },
  {
    id: "qa-p4-housekeeping",
    pageNumber: 4,
    section: "Common customer questions and answers",
    question: "Is housekeeping included?",
    content:
      "Daily cleaning is listed. The owner questionnaire says housekeeping covers brooming, mopping, and dusting.",
    searchTerms: ["cleaning", "housekeeping", "brooming", "mopping", "dusting", "daily cleaning"],
    isFAQ: true,
    priorityWeight: 1.8,
  },
  {
    id: "qa-p4-parking",
    pageNumber: 4,
    section: "Common customer questions and answers",
    question: "Is parking available?",
    content:
      "The owner questionnaire says bike and car parking are available. Confirm the parking arrangement at the selected property.",
    searchTerms: ["parking", "bike parking", "car parking", "vehicle parking"],
    isFAQ: true,
    priorityWeight: 1.8,
  },
  {
    id: "qa-p4-cooking",
    pageNumber: 4,
    section: "Common customer questions and answers",
    question: "Can residents cook their own food?",
    content:
      "Yes. The owner questionnaire says residents are allowed to cook their own food. Kitchen arrangements vary by property; see the property-specific details.",
    searchTerms: ["cook", "cooking", "kitchen", "cook their own food", "self cooking"],
    isFAQ: true,
    priorityWeight: 1.8,
  },
  {
    id: "qa-p4-washrooms",
    pageNumber: 4,
    section: "Common customer questions and answers",
    question: "Are washrooms attached/private?",
    content:
      "The questionnaire answers yes, and Table 1 marks washrooms as attached for the listed room options. Refer to the property page for the exact room arrangement.",
    searchTerms: ["bathroom", "washroom", "attached bathroom", "private bathroom", "attached washrooms"],
    isFAQ: true,
    priorityWeight: 1.8,
  },
  {
    id: "qa-p4-curfew",
    pageNumber: 4,
    section: "Common customer questions and answers",
    question: "Is there a curfew?",
    content:
      "The owner questionnaire says there are no curfew or entry-time restrictions.",
    searchTerms: ["curfew", "entry time", "late entry", "gate closing", "entry restrictions"],
    isFAQ: true,
    priorityWeight: 2.0,
  },
  {
    id: "qa-p4-pets",
    pageNumber: 4,
    section: "Common customer questions and answers",
    question: "Are pets allowed?",
    content:
      "No. The owner questionnaire says pets are not allowed.",
    searchTerms: ["pets", "dog", "cat", "animals", "pets allowed"],
    isFAQ: true,
    priorityWeight: 2.0,
  },
  {
    id: "qa-p4-smoking-alcohol",
    pageNumber: 4,
    section: "Common customer questions and answers",
    question: "Are smoking and alcohol allowed?",
    content:
      "Yes, with the consent of flatmates, according to the owner questionnaire.",
    searchTerms: ["smoking", "alcohol", "drinking", "smoke", "drink", "flatmate consent"],
    isFAQ: true,
    priorityWeight: 2.0,
  },

  // Page 5 - Deposit, Cancellation, Payments & Policies
  {
    id: "qa-p5-deposit-refund",
    pageNumber: 5,
    section: "Common customer questions and answers",
    question: "Is the security deposit refundable?",
    content:
      "Yes. The security deposit is fully refundable if the resident serves a 30-day notice period and no damage has occurred.",
    searchTerms: ["deposit refund", "refundable deposit", "notice period", "is deposit refundable", "30 days notice"],
    isFAQ: true,
    priorityWeight: 2.2,
  },
  {
    id: "qa-p5-cancellation",
    pageNumber: 5,
    section: "Common customer questions and answers",
    question: "What happens if I cancel?",
    content:
      "The owner document states: no refund in case of cancellation. This is separate from the security-deposit refund condition.",
    searchTerms: ["cancellation", "cancel booking", "refund", "what happens if i cancel"],
    isFAQ: true,
    priorityWeight: 2.2,
  },
  {
    id: "qa-p5-additional-fees",
    pageNumber: 5,
    section: "Common customer questions and answers",
    question: "Are there booking, maintenance, brokerage, or other additional fees?",
    content:
      "The owner questionnaire says no booking fees, maintenance charges, brokerage fees, or other additional costs. Paid laundry service is separately listed as an optional service where applicable.",
    searchTerms: ["extra fees", "maintenance charges", "brokerage", "booking charges", "additional costs"],
    isFAQ: true,
    priorityWeight: 1.8,
  },
  {
    id: "qa-p5-payment-methods",
    pageNumber: 5,
    section: "Common customer questions and answers",
    question: "What payment methods are accepted?",
    content:
      "UPI, credit card, NEFT/IMPS, and cash are listed as accepted payment methods. A rent due date is not provided in the document.",
    searchTerms: ["payment", "upi", "card", "neft", "imps", "cash", "due date", "payment methods"],
    isFAQ: true,
    priorityWeight: 2.0,
  },
  {
    id: "qa-p5-discounts",
    pageNumber: 5,
    section: "Common customer questions and answers",
    question: "Are discounts available?",
    content:
      "Discounts and special offers are to be discussed upon a property visit, according to the owner document.",
    searchTerms: ["discount", "offer", "student discount", "discounts available", "special offers"],
    isFAQ: true,
    priorityWeight: 1.8,
  },
  {
    id: "qa-p5-working-hours",
    pageNumber: 5,
    section: "Common customer questions and answers",
    question: "What are the working hours?",
    content:
      "The owner document lists working hours as 10 AM to 10 PM.",
    searchTerms: ["opening hours", "working hours", "contact hours", "timing"],
    isFAQ: true,
    priorityWeight: 1.8,
  },
  {
    id: "qa-p5-support-email",
    pageNumber: 5,
    section: "Common customer questions and answers",
    question: "What is the support email?",
    content:
      "The owner-provided email is reforbsar@gmail.com.",
    searchTerms: ["email", "support email", "contact email", "reforbsar@gmail.com"],
    isFAQ: true,
    priorityWeight: 1.8,
  },
  {
    id: "qa-p5-price-updates",
    pageNumber: 5,
    section: "Common customer questions and answers",
    question: "Who updates prices and policies?",
    content:
      "The owner document notes that the property management team is responsible for updating prices, vacancies, and policies. It says rates and deposits should be reviewed annually.",
    searchTerms: ["price update", "policy update", "owner", "who updates prices"],
    isFAQ: true,
    priorityWeight: 1.5,
  },

  // Page 6 - Booking, Availability, Visits & Handoff
  {
    id: "qa-p6-availability",
    pageNumber: 6,
    section: "Booking, availability, visits, and human handoff",
    question: "Which rooms are available right now?",
    content:
      "Live availability is not supplied in this knowledge document. Move-in dates depend on current availability. Please use the Call Us button below to speak directly with our Reforbs representative.",
    searchTerms: ["availability", "vacancies", "rooms available", "available tomorrow", "live vacancy"],
    isFAQ: true,
    priorityWeight: 2.2,
  },
  {
    id: "qa-p6-move-in",
    pageNumber: 6,
    section: "Booking, availability, visits, and human handoff",
    question: "When can I move in?",
    content:
      "Move-in dates depend on current availability and are not provided in this document. Please use the Call Us button below to speak directly with our Reforbs representative.",
    searchTerms: ["move-in", "joining date", "move date", "when can i move in"],
    isFAQ: true,
    priorityWeight: 2.0,
  },
  {
    id: "qa-p6-how-to-book",
    pageNumber: 6,
    section: "Booking, availability, visits, and human handoff",
    question: "How do I book a room?",
    content:
      "Booking questions must be handled by Reforbs personnel. Please use the Call Us button below to speak with our sales team.",
    searchTerms: ["booking", "reserve", "reservation", "how do i book a room"],
    isFAQ: true,
    priorityWeight: 2.2,
  },
  {
    id: "qa-p6-schedule-visit",
    pageNumber: 6,
    section: "Booking, availability, visits, and human handoff",
    question: "Can I schedule a property visit?",
    content:
      "Please contact Reforbs sales using the Call Us button below or by WhatsApp to arrange a visit.",
    searchTerms: ["visit", "site visit", "inspection", "schedule visit", "book visit", "how can i book a visit"],
    isFAQ: true,
    priorityWeight: 2.2,
  },
  {
    id: "qa-p6-visit-before-paying",
    pageNumber: 6,
    section: "Booking, availability, visits, and human handoff",
    question: "Can I visit before paying?",
    content:
      "The owner document does not explicitly answer whether a visit before payment is required or permitted. Please confirm with the sales team using the Call Us button below.",
    searchTerms: ["visit before payment", "payment before visit", "can i visit before paying"],
    isFAQ: true,
    priorityWeight: 1.8,
  },
  {
    id: "qa-p6-documents-needed",
    pageNumber: 6,
    section: "Booking, availability, visits, and human handoff",
    question: "Which documents are needed to book?",
    content:
      "Required booking documents are not specified in the owner document. Please confirm with the sales team using the Call Us button below.",
    searchTerms: ["documents", "id", "aadhaar", "kyc", "documents needed to book"],
    isFAQ: true,
    priorityWeight: 1.8,
  },
  {
    id: "qa-p6-notice-period",
    pageNumber: 6,
    section: "Booking, availability, visits, and human handoff",
    question: "What is the notice period?",
    content:
      "The owner document specifies a 30-day notice condition for a full security-deposit refund. It does not separately state other notice-period terms.",
    searchTerms: ["notice", "leaving", "moving out", "notice period"],
    isFAQ: true,
    priorityWeight: 1.8,
  },
  {
    id: "qa-p6-chatbot-reserve",
    pageNumber: 6,
    section: "Booking, availability, visits, and human handoff",
    question: "Can the chatbot confirm or reserve a room?",
    content:
      "No. The chatbot can answer from the knowledge document but cannot check live availability or confirm a booking. Please use the Call Us button below to speak with our team.",
    searchTerms: ["reserve a room", "hold", "booking confirmation", "can chatbot confirm"],
    isFAQ: true,
    priorityWeight: 1.8,
  },

  // Page 7 - Nirvana
  {
    id: "qa-p7-nirvana",
    pageNumber: 7,
    section: "Nirvana",
    question: "What is the rent at Nirvana?",
    content:
      "Nirvana (Co-Living) is located at Plot 34, Lane 2A, Sanjay Park, Viman Nagar - 411032.\n• Twin: 26 beds listed; rent ₹17,000/month; deposit ₹17,000.\n• Private: 7 beds listed; rent ₹29,000/month; deposit ₹29,000.\n• Setup: 1RK standalone building with 3 floors and 4 units of 1RK per floor (2 twin sharing, 2 single/private). Separate entrance, private attached kitchen, attached washroom. Suited to couples and people preferring privacy.\n• AC: Yes | Washroom: Attached | Couple-friendly: Yes\n• Food: Available and optional; call for further details.\n• Laundry: Self-use multiple washing machines; paid laundry service also available.\n• Restrictions: None listed | Lock-in: No\n• Contact: Available via the Call Us button below | Google Maps: https://maps.app.goo.gl/8MsiHGMq8s6R2At28 (flagged for owner verification)",
    searchTerms: ["nirvana", "rent at nirvana", "nirvana twin", "nirvana private", "nirvana co-living"],
    propertyNames: ["Nirvana"],
    isFAQ: true,
    priorityWeight: 2.2,
  },
  {
    id: "qa-p7-nirvana-couples",
    pageNumber: 7,
    section: "Nirvana",
    question: "Is Nirvana couple-friendly?",
    content:
      "The owner table marks this property as Yes for couple-friendly eligibility. Confirm any individual arrangement with the property manager using the Call Us button below.",
    searchTerms: ["nirvana couple friendly", "boyfriend at nirvana", "girlfriend at nirvana", "stay with boyfriend at nirvana"],
    propertyNames: ["Nirvana"],
    isFAQ: true,
    priorityWeight: 2.5,
  },

  // Page 8 - Moksha
  {
    id: "qa-p8-moksha",
    pageNumber: 8,
    section: "Moksha",
    question: "What is the rent at Moksha?",
    content:
      "Moksha (Co-Living) is located at Plot 61, Lane 2A, Sanjay Park, Viman Nagar - 411032.\n• Twin: 18 beds listed; rent ₹17,000/month; deposit ₹17,000.\n• Private: 11 beds listed; rent ₹24,000/month; deposit ₹24,000 (lowest private room rate in Reforbs).\n• Setup: 3BHK standalone building; each floor is a 3BHK (2 single/private sharing, 1 twin sharing). Maximum occupancy per floor: 4. Kitchen, balcony, living area, and dining area.\n• AC: Yes | Washroom: Attached | Couple-friendly: Yes\n• Food: Available and optional; call for further details.\n• Laundry: Self-use multiple washing machines; paid laundry service also available.\n• Restrictions: None listed | Lock-in: No\n• Contact: Available via the Call Us button below | Google Maps: https://maps.app.goo.gl/8MsiHGMq8s6R2At28 (flagged for owner verification)",
    searchTerms: ["moksha", "rent at moksha", "private room rent at moksha", "moksha twin", "moksha private"],
    propertyNames: ["Moksha"],
    isFAQ: true,
    priorityWeight: 2.2,
  },
  {
    id: "qa-p8-moksha-couples",
    pageNumber: 8,
    section: "Moksha",
    question: "Is Moksha couple-friendly?",
    content:
      "The owner table marks this property as Yes for couple-friendly eligibility. Confirm any individual arrangement with the property manager using the Call Us button below.",
    searchTerms: ["moksha couple friendly", "boyfriend at moksha", "couple at moksha"],
    propertyNames: ["Moksha"],
    isFAQ: true,
    priorityWeight: 2.2,
  },

  // Page 9 - Vipasna
  {
    id: "qa-p9-vipasna",
    pageNumber: 9,
    section: "Vipasna",
    question: "What is the rent at Vipasna?",
    content:
      "Vipasna (Co-Living) is located at Plot 36, Lane 3, Sanjay Park, Viman Nagar - 411032.\n• Twin: 6 beds listed; rent ₹17,000/month; deposit ₹17,000.\n• Private: 8 beds listed; rent ₹27,000/month; deposit ₹27,000.\n• Setup: Dorm layout. Standalone building with 4 rooms on every floor. Every room has an attached washroom. Common kitchen shared by 4 rooms, living area, and dining area. Hotel-like structure suitable for premium rooms.\n• AC: Yes | Washroom: Attached to every room | Couple-friendly: Yes\n• Food: Available and optional; call for further details.\n• Laundry: Self-use multiple washing machines; paid laundry service also available.\n• Restrictions: None listed | Lock-in: No\n• Contact: Available via the Call Us button below | Google Maps: https://maps.app.goo.gl/8MsiHGMq8s6R2At28 (flagged for owner verification)",
    searchTerms: ["vipasna", "vipasana", "rent at vipasna", "vipasna twin", "vipasna private"],
    propertyNames: ["Vipasna"],
    isFAQ: true,
    priorityWeight: 2.2,
  },
  {
    id: "qa-p9-vipasna-couples",
    pageNumber: 9,
    section: "Vipasna",
    question: "Is Vipasna couple-friendly?",
    content:
      "The owner table marks this property as Yes for couple-friendly eligibility. Confirm any individual arrangement with the property manager using the Call Us button below.",
    searchTerms: ["vipasna couple friendly", "vipasana couple friendly"],
    propertyNames: ["Vipasna"],
    isFAQ: true,
    priorityWeight: 2.2,
  },

  // Page 10 - Park Island
  {
    id: "qa-p10-park-island",
    pageNumber: 10,
    section: "Park Island",
    question: "What is the rent at Park Island?",
    content:
      "Park Island (Company Guesthouse) is located at Shastrinagar, Pune, Maharashtra 411006.\n• Twin: 12 beds listed; rent ₹20,000/month; deposit ₹20,000. Private: 0 beds; rent and deposit NA.\n• Important eligibility: Company guesthouse for employees of a dedicated company; not available as a regular PG.\n• AC: Yes | Washroom: Attached (Table 1) | Couple-friendly: No\n• Food: Available and optional; call for details.\n• Laundry: Self-use multiple washing machines; paid laundry service also available.\n• Restrictions: None listed in restrictions field; company-guesthouse eligibility still applies. Lock-in: No\n• Contact: Available via the Call Us button below | Google Maps: https://maps.app.goo.gl/8h4ivEDdFCMz5kFg9",
    searchTerms: ["park island", "rent at park island", "park island regular pg", "park island company guesthouse"],
    propertyNames: ["Park Island"],
    isFAQ: true,
    priorityWeight: 2.2,
  },

  // Page 11 - Pillar Homes
  {
    id: "qa-p11-pillar-homes",
    pageNumber: 11,
    section: "Pillar Homes",
    question: "What is the rent at Pillar Homes?",
    content:
      "Pillar Homes (Company Guesthouse) is located at Pillar Homes, Clover Park, Viman Nagar, Pune, Maharashtra 411014.\n• Twin: 27 beds listed; rent ₹25,000/month; deposit ₹25,000. Private: 0 beds; rent and deposit NA.\n• Important eligibility: Company guesthouse for employees of a dedicated company; not available as a regular PG.\n• AC: Yes | Washroom: Attached (Table 1) | Couple-friendly: No\n• Food: Available and optional; call for details.\n• Laundry: Self-use multiple washing machines; paid laundry service also available.\n• Restrictions: None listed in restrictions field; company-guesthouse eligibility still applies. Lock-in: No\n• Contact: Available via the Call Us button below | Google Maps: https://maps.app.goo.gl/V4JFnudQ7dCT7euB7",
    searchTerms: ["pillar homes", "rent at pillar homes", "pillar homes regular pg", "pillar homes company guesthouse"],
    propertyNames: ["Pillar Homes"],
    isFAQ: true,
    priorityWeight: 2.2,
  },

  // Page 12 - Suyog Enclave
  {
    id: "qa-p12-suyog-enclave",
    pageNumber: 12,
    section: "Suyog Enclave",
    question: "What is the rent at Suyog Enclave?",
    content:
      "Suyog Enclave (Company Guesthouse) is located at 64P, behind Bajaj Finserv, Sakore Nagar Road, Sakore Nagar, Viman Nagar, Pune, Maharashtra 411014.\n• Twin: 18 beds listed; rent ₹25,000/month; deposit ₹25,000. Private: 0 beds; rent and deposit NA.\n• Important eligibility: Company guesthouse for employees of a dedicated company; not available as a regular PG.\n• AC: Yes | Washroom: Attached (Table 1) | Couple-friendly: No\n• Food: Available and optional; call for details.\n• Laundry: Self-use multiple washing machines; paid laundry service also available.\n• Restrictions: None listed in restrictions field; company-guesthouse eligibility still applies. Lock-in: No\n• Contact: Available via the Call Us button below | Google Maps: https://maps.app.goo.gl/2vLb3jCP81qCEZuL9",
    searchTerms: ["suyog enclave", "suyog", "address of suyog enclave", "rent at suyog enclave", "suyog company guesthouse"],
    propertyNames: ["Suyog Enclave"],
    isFAQ: true,
    priorityWeight: 2.2,
  },

  // Page 13 - Shubh Gateway
  {
    id: "qa-p13-shubh-gateway",
    pageNumber: 13,
    section: "Shubh Gateway",
    question: "What is the rent at Shubh Gateway?",
    content:
      "Shubh Gateway (Student Accommodation) is located at Sr. No. 227, Plot No. 1, New Airport Road, opposite Symbiosis Law College, Viman Nagar, Pune, Maharashtra 411032.\n• Girls twin: 42 beds listed; ₹25,000/month; deposit ₹40,000.\n• Boys twin: 24 beds listed; ₹27,000/month; deposit ₹40,000.\n• Private rows list 0 beds and rent NA; deposit field shows ₹40,000, which must not be treated as an available private offer (refer to sales).\n• Setup: 3BHK apartments in a gated society with 4 towers A-D, 12 floors per tower and 4 units of 3BHK per floor. Selected apartments managed as student accommodation. Towers/apartments are gender-specific: boys only or girls only.\n• AC: Yes | Washroom: Attached/private | Couple-friendly: No\n• Food: Breakfast and dinner included.\n• Laundry: Included twice weekly, 5 kg.\n• Restrictions: Visitors of opposite genders are not allowed. Boys and girls accommodation is gender-specific. Lock-in: Annual\n• Contact: Available via the Call Us button below | Google Maps: https://maps.app.goo.gl/VR1T7UwD58H6UGa49",
    searchTerms: ["shubh gateway", "rent at shubh gateway", "girls twin sharing shubh gateway", "boys twin sharing shubh gateway", "shubh gateway laundry", "shubh gateway opposite gender"],
    propertyNames: ["Shubh Gateway"],
    isFAQ: true,
    priorityWeight: 2.5,
  },

  // Page 14 - Brindavan
  {
    id: "qa-p14-brindavan",
    pageNumber: 14,
    section: "Brindavan",
    question: "What is the rent at Brindavan?",
    content:
      "Brindavan (Student Accommodation) is located at Symbiosis Road, behind Dr Lal Path Lab, Sakore Nagar, Viman Nagar, Pune, Maharashtra 411014.\n• Twin: 32 beds listed; ₹27,000/month; deposit ₹30,000.\n• Private: 16 beds listed; ₹32,000/month; deposit ₹30,000.\n• Setup: 1BHK units in a standalone 4-floor building with 4 units per floor. Each 1BHK accommodates 3 people: one twin-sharing room and one single/private room. Separate entrance, private washroom, co-working space.\n• AC: Yes | Washroom: Private | Couple-friendly: No\n• Food: Breakfast, lunch and dinner included (all 3 meals).\n• Laundry: Included twice weekly, 5 kg.\n• Restrictions: Visitors of opposite genders are not allowed. Lock-in: Annual\n• Closest college: Symbiosis Management College 400 m (Symbiosis Law School is 2 km).\n• Contact: Available via the Call Us button below | Google Maps: https://maps.app.goo.gl/MJWzeZj1LZHcyn1V9",
    searchTerms: ["brindavan", "rent at brindavan", "food included at brindavan", "college closest to brindavan", "lock-in at brindavan"],
    propertyNames: ["Brindavan"],
    isFAQ: true,
    priorityWeight: 2.5,
  },

  // Page 15 - Vairagya
  {
    id: "qa-p15-vairagya",
    pageNumber: 15,
    section: "Vairagya",
    question: "What is the rent at Vairagya?",
    content:
      "Vairagya (Student Accommodation) is located near Symbiosis University, Lavale, Pune.\n• Triple: 27 beds listed; ₹15,000/month; deposit ₹20,000 (lowest listed rate in Reforbs).\n• Twin: 24 beds listed; ₹17,000/month; deposit ₹20,000.\n• Setup: Standalone building with 5 spacious 1BHK units. Each 1BHK holds 3 people in triple-sharing configuration; some units reserved for twin sharing only. Best suited for Symbiosis University, Lavale.\n• AC: No (non-AC property) | Washroom: Private/attached (Table 1) | Couple-friendly: No\n• Food: Breakfast and dinner included (running mess with in-house cooking).\n• Laundry: Self-use multiple washing machines; paid laundry service also available.\n• Address: Not provided in owner document. Do not invent.\n• Google Maps: Not supplied in owner document. Do not invent.\n• Restrictions: Visitors of opposite genders are not allowed. Lock-in: Annual\n• Landmarks: Symbiosis University 500 m; ISBM College 500 m.\n• Contact: Available via the Call Us button below",
    searchTerms: ["vairagya", "rent at vairagya", "triple sharing rent at vairagya", "is vairagya air-conditioned", "where is vairagya located"],
    propertyNames: ["Vairagya"],
    isFAQ: true,
    priorityWeight: 2.5,
  },

  // Page 16 - Shared policies, safety, and support + Source limitations
  {
    id: "qa-p16-maintenance-helpline",
    pageNumber: 16,
    section: "Shared policies, safety, and support",
    question: "What is the maintenance helpline number?",
    content:
      "Report maintenance issues through the common helpline number. The actual helpline number is not included in the document; do not invent it. For assistance, contact the Reforbs team using the Call Us button below or email reforbsar@gmail.com.",
    searchTerms: ["maintenance helpline", "helpline number", "maintenance helpline number", "report maintenance"],
    isFAQ: true,
    priorityWeight: 2.5,
  },
  {
    id: "qa-p16-power-backup",
    pageNumber: 16,
    section: "Shared policies, safety, and support",
    question: "Is there power backup?",
    content:
      "One light and one fan in each room are on power backup. The common area is also on power backup. The document does not specify broader backup coverage.",
    searchTerms: ["power backup", "electricity", "inverter", "power outage", "is there power backup"],
    isFAQ: true,
    priorityWeight: 2.0,
  },
  {
    id: "qa-p16-cctv",
    pageNumber: 16,
    section: "Shared policies, safety, and support",
    question: "Is there CCTV or security staff?",
    content:
      "The owner questionnaire says CCTV and security staff are provided.",
    searchTerms: ["cctv", "security", "guards", "security staff", "is there cctv"],
    isFAQ: true,
    priorityWeight: 2.0,
  },
  {
    id: "qa-p16-source-limitations",
    pageNumber: 16,
    section: "Important source limitations and owner checks",
    question: "What are the source limitations and owner checks?",
    content:
      "Important source limitations in the owner document:\n• Nirvana, Moksha, and Vipasna have distinct addresses but the same Google Maps URL is supplied for all three; keep supplied link but flag for owner verification.\n• Vairagya has no full street address or Google Maps URL in the supplied document.\n• Shubh Gateway private-room rows show 0 beds and rent NA, but deposit ₹40,000; do not advertise a private-room rate or infer availability.\n• Table 1 uses 'Total Beds' for bed counts by room type; do not interpret these as room counts or live vacant beds.\n• The questionnaire says no additional charges, while optional paid laundry is listed for some properties; explain paid laundry separately and do not invent its price.\n• The shared helpline number for maintenance/emergencies is not supplied.\n• No rent due date is provided.\n• The exact documents required for booking are not provided.",
    searchTerms: ["source limitations", "owner checks", "missing data", "gaps"],
    isFAQ: true,
    priorityWeight: 1.8,
  },

  // Page 17 - Overnight & visitor rules
  {
    id: "qa-p17-overnight-visitors",
    pageNumber: 17,
    section: "Retrieval index and synonyms",
    question: "What are the visitor and guest rules?",
    content:
      "Overnight guest rules are not stated in detail. For Shubh Gateway, Brindavan, and Vairagya, the document explicitly says opposite-gender visitors are not allowed. For co-living (Nirvana, Moksha, Vipasna), residents can invite friends and guests within social norms and mutual understanding, with zero arbitrary curfews or moral policing.",
    searchTerms: ["visitors", "guests", "overnight guests", "opposite-gender visitors", "opposite gender"],
    isFAQ: true,
    priorityWeight: 2.2,
  },
];

export const QUICK_QUESTIONS = [
  "Which properties are co-living?",
  "Which properties are student accommodation?",
  "What is the cheapest Reforbs room?",
  "Which properties are couple-friendly?",
  "What is the rent for Nirvana twin sharing?",
  "How much is Shubh Gateway girls' twin sharing?",
];
