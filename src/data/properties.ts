import type { PropertyData } from "@/components/PropertyDetailView";

export interface RoomOption {
  type: string;
  occupancy: string;
  priceDisplay: string;
  priceInr: number;
  depositDisplay: string;
  depositInr: number;
  features: string[];
}

export interface NearbyDistance {
  name: string;
  distance: string;
}

export interface PropertyImageMeta {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface PropertyFaq {
  question: string;
  answer: string;
}

export interface PropertyItem {
  id: string;
  slug: string;
  name: string;
  category: "Co-Living" | "Student Accommodation" | "Company Guesthouse";
  city: "Pune" | "Goa" | "Bangalore";
  status: "active" | "corporate";
  hasPublicPgAccess: boolean;
  locality: string;
  streetAddress: string;
  pincode: string;
  tag: string;
  outcome: string;
  monogram: "grad" | "building" | "compass";
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  location: string;
  subLocation: string;
  address: string;
  landmark: string;
  lat: number;
  lng: number;
  geoVerified: boolean;
  googleMapsUrl: string;
  price: string;
  priceNum: number;
  priceDouble: string;
  priceSingle: string;
  gender: string;
  roomTypes: ("Twin" | "Private" | "Triple" | "Girls' Twin" | "Boys' Twin" | "Single" | "Double")[];
  roomOptions: RoomOption[];
  cardGradient: string;
  coverImage: string;
  gallery: string[];
  imagesMeta: PropertyImageMeta[];
  description: string;
  answerFirstSummary: string;
  highlights: string[];
  amenitiesList: { name: string; included: boolean }[];
  nearbyDistances: NearbyDistance[];
  faq: PropertyFaq[];
  link: string;
  contactPhone: string;
  whatsappNumber: string;
  coupleFriendly: boolean;
  lockInPeriod: "No" | "Annual";
  lockInPolicy: string;
  visitorPolicy: string;
  genderPolicy: string;
  foodPlan: string;
  laundryPlan: string;
  airConditioning: boolean;
  isGuesthouse: boolean;
  totalBedsInfo: string;
  depositInfo: string;
  lastUpdated: string;
  rentDisplay?: string;
  depositDisplay?: string;
  inclusionsDisplay?: string;
  roomConfigDisplay?: string;
  acRoomsDisplay?: string;
  attachedWashroomDisplay?: string;
  // Verified rating remains null unless confirmed against live GBP
  verifiedRating?: { ratingValue: number; reviewCount: number; sourceLabel: string } | null;
}

function buildGalleryMeta(
  name: string,
  locality: string,
  category: string,
  gallery: string[],
  customLabels?: string[]
): PropertyImageMeta[] {
  const defaultLabels = [
    "furnished bedroom and living space",
    "interior bedroom setup with wardrobe and seating",
    "kitchen and dining setup",
    "modern attached washroom and fixtures",
    "building lounge and natural lighting view",
    "interior corridor and room amenities",
  ];
  return gallery.map((src, idx) => ({
    src,
    alt: `${name} ${category.toLowerCase()} in ${locality}, Pune — ${
      customLabels?.[idx] || defaultLabels[idx % defaultLabels.length]
    }`,
    width: 1200,
    height: 800,
  }));
}

export const propertiesData: PropertyItem[] = [
  // =============================================================
  // A. CO-LIVING PROPERTIES (PUBLIC RETAIL)
  // =============================================================

  // 1. NIRVANA
  {
    id: "nirvana",
    slug: "/coliving/nirvana",
    name: "Nirvana",
    category: "Co-Living",
    city: "Pune",
    status: "active",
    hasPublicPgAccess: true,
    locality: "Sanjay Park",
    streetAddress: "Plot 34, Lane 2A, Sanjay Park",
    pincode: "411032",
    tag: "Couple-Friendly 1RK Suites with Private Kitchen",
    outcome: "Private kitchen & washroom • Zero lock-in",
    monogram: "building",
    stat1Value: "₹17,000",
    stat1Label: "Twin Sharing /month",
    stat2Value: "₹29,000",
    stat2Label: "Private 1RK /month",
    location: "Sanjay Park, Viman Nagar, Pune",
    subLocation: "Plot 34, Lane 2A, Sanjay Park",
    address: "Plot 34, Lane 2A, Sanjay Park, Viman Nagar, Pune – 411032",
    landmark: "Opposite green open space, Sanjay Park",
    lat: 18.575,
    lng: 73.9052,
    geoVerified: true,
    googleMapsUrl: "https://maps.app.goo.gl/8MsiHGMq8s6R2At28",
    price: "₹17,000",
    priceNum: 17000,
    priceDouble: "₹17,000",
    priceSingle: "₹29,000",
    gender: "Co-Ed",
    roomTypes: ["Twin", "Private"],
    roomOptions: [
      {
        type: "Twin Sharing 1RK",
        occupancy: "2 Residents / 1RK",
        priceDisplay: "₹17,000",
        priceInr: 17000,
        depositDisplay: "₹17,000 (1 Month Rent)",
        depositInr: 17000,
        features: [
          "Independent 1RK unit with separate entrance",
          "Private attached kitchen with induction and microwave",
          "Attached washroom with geyser & individual split AC",
          "High-speed Wi-Fi, daily housekeeping & food included",
        ],
      },
      {
        type: "Private 1RK Suite",
        occupancy: "Single / Couple",
        priceDisplay: "₹29,000",
        priceInr: 29000,
        depositDisplay: "₹29,000 (1 Month Rent)",
        depositInr: 29000,
        features: [
          "100% private 1RK apartment with private kitchen",
          "Couple-friendly policy with zero moral policing",
          "Attached washroom, individual AC, balcony access",
          "Zero lock-in with 30-day notice period",
        ],
      },
    ],
    cardGradient: "from-[#164E63] via-[#0E3846] to-[#031F27]",
    coverImage: "/images/properties/nirvana/image-2.jpg",
    gallery: [
      "/images/properties/nirvana/image-2.jpg",
      "/images/properties/nirvana/image-3.jpg",
      "/images/properties/nirvana/image-4.jpg",
      "/images/properties/nirvana/image-5.jpg",
      "/images/properties/nirvana/image-6.jpg",
      "/images/properties/nirvana/image-1.jpg",
    ],
    imagesMeta: buildGalleryMeta("Nirvana", "Sanjay Park, Viman Nagar", "Co-Living 1RK", [
      "/images/properties/nirvana/image-2.jpg",
      "/images/properties/nirvana/image-3.jpg",
      "/images/properties/nirvana/image-4.jpg",
      "/images/properties/nirvana/image-5.jpg",
      "/images/properties/nirvana/image-6.jpg",
      "/images/properties/nirvana/image-1.jpg",
    ]),
    description:
      "Standalone 3-storey building with four 1RK units per floor (two twin-sharing and two single/private). Every unit features a separate entrance, private attached kitchen, and attached washroom with individual AC. Best suited for couples and residents preferring absolute privacy.",
    answerFirstSummary:
      "Nirvana is a couple-friendly co-living building in Sanjay Park, Viman Nagar, Pune, offering self-contained 1RK units with a private kitchen, attached washroom, and individual AC. Twin sharing starts at ₹17,000/month and private 1RKs are ₹29,000/month with a refundable 1-month deposit and zero lock-in.",
    highlights: ["Private Kitchen per 1RK", "AC Rooms & Attached Washroom", "Zero Lock-in"],
    amenitiesList: [
      { name: "Private Attached Kitchen", included: true },
      { name: "Individual Split AC", included: true },
      { name: "Attached Modern Washroom & Geyser", included: true },
      { name: "High-Speed Fiber Wi-Fi", included: true },
      { name: "Daily Housekeeping (Brooming & Mopping)", included: true },
      { name: "Self-Use Washing Machines", included: true },
      { name: "Daily Food Included (Optional Discussion)", included: true },
      { name: "Couple Friendly & Zero Lock-in", included: true },
    ],
    nearbyDistances: [
      { name: "Pune International Airport", distance: "~1.0 km" },
      { name: "Symbiosis Viman Nagar Campus", distance: "~2.0 km" },
      { name: "Phoenix Marketcity Viman Nagar", distance: "~2.2 km" },
      { name: "Commerzone IT Park Yerwada", distance: "~3.5 km" },
    ],
    faq: [
      {
        question: "Is Nirvana co-living in Pune couple-friendly?",
        answer:
          "Yes. Nirvana welcomes couples in private 1RK units with zero moral policing and separate unit entrances.",
      },
      {
        question: "Does every room at Nirvana have a private kitchen?",
        answer:
          "Yes. Every 1RK suite at Nirvana includes its own private attached kitchen equipped for independent cooking.",
      },
      {
        question: "What is the rent, deposit, and lock-in period at Nirvana?",
        answer:
          "Twin sharing is ₹17,000/month and Private 1RK is ₹29,000/month. The security deposit equals 1 month's rent (refundable within 7 working days with a 30-day calendar notice served by the 5th of the month), with zero lock-in.",
      },
    ],
    link: "/coliving/nirvana",
    contactPhone: "+917420040241",
    whatsappNumber: "917420040241",
    coupleFriendly: true,
    lockInPeriod: "No",
    lockInPolicy: "Zero lock-in period (30-day calendar notice served by the 5th of the month)",
    visitorPolicy: "Couple-friendly; friends welcome in private units while respecting fellow residents",
    genderPolicy: "Co-Ed (Independent 1RK suites)",
    foodPlan: "Included – Daily meals & food arrangements included",
    laundryPlan: "Self-use washing machines available; paid service also available",
    airConditioning: true,
    isGuesthouse: false,
    totalBedsInfo: "26 Twin Beds, 7 Private Beds",
    depositInfo: "Twin: ₹17,000 | Private: ₹29,000 (1 month rent, refundable with 30 days notice)",
    lastUpdated: "2026-11-04",
    rentDisplay: "₹17,000",
    depositDisplay: "₹17,000",
    inclusionsDisplay: "Food, Wi-Fi, Daily Housekeeping, Water",
    roomConfigDisplay: "1RK Private Suites (Private Kitchen)",
    acRoomsDisplay: "Yes (Individual AC in all units)",
    attachedWashroomDisplay: "Yes (Private attached washroom)",
    verifiedRating: null,
  },

  // 2. MOKSHA
  {
    id: "moksha",
    slug: "/coliving/moksha",
    name: "Moksha",
    category: "Co-Living",
    city: "Pune",
    status: "active",
    hasPublicPgAccess: true,
    locality: "Sanjay Park",
    streetAddress: "Plot 61, Lane 2A, Sanjay Park",
    pincode: "411032",
    tag: "Bohemian 3BHK Floors with Green Terraces",
    outcome: "Spacious 3BHK layout • Max 4 residents/floor",
    monogram: "compass",
    stat1Value: "₹17,000",
    stat1Label: "Twin Sharing /month",
    stat2Value: "₹24,000",
    stat2Label: "Private Room /month",
    location: "Sanjay Park, Viman Nagar, Pune",
    subLocation: "Plot 61, Lane 2A, Sanjay Park",
    address: "Plot 61, Lane 2A, Sanjay Park, Viman Nagar, Pune – 411032",
    landmark: "Near Joggers Park & Cafes, Sanjay Park",
    lat: 18.5758,
    lng: 73.9056,
    geoVerified: true,
    googleMapsUrl: "https://maps.app.goo.gl/8MsiHGMq8s6R2At28",
    price: "₹17,000",
    priceNum: 17000,
    priceDouble: "₹17,000",
    priceSingle: "₹24,000",
    gender: "Co-Ed",
    roomTypes: ["Twin", "Private"],
    roomOptions: [
      {
        type: "Twin Sharing Room",
        occupancy: "2 Residents (3BHK Floor)",
        priceDisplay: "₹17,000",
        priceInr: 17000,
        depositDisplay: "₹17,000 (1 Month Rent)",
        depositInr: 17000,
        features: [
          "Max 4 residents per 3BHK floor",
          "Floor common kitchen, balcony, living & dining area",
          "AC, Wi-Fi, daily housekeeping & food included",
          "Zero lock-in with 30-day notice period",
        ],
      },
      {
        type: "Private Single Room",
        occupancy: "Single Resident",
        priceDisplay: "₹24,000",
        priceInr: 24000,
        depositDisplay: "₹24,000 (1 Month Rent)",
        depositInr: 24000,
        features: [
          "Dedicated private bedroom inside 3BHK layout",
          "Lowest private room rate among Reforbs co-living homes",
          "Couple-friendly with shared balcony & common kitchen",
          "Zero lock-in with 30-day notice period",
        ],
      },
    ],
    cardGradient: "from-[#047857] via-[#064E3B] to-[#02241B]",
    coverImage: "/images/properties/moksha/image-1.jpg",
    gallery: [
      "/images/properties/moksha/image-1.jpg",
      "/images/properties/moksha/image-2.jpg",
      "/images/properties/moksha/image-3.jpg",
      "/images/properties/moksha/image-4.jpg",
      "/images/properties/moksha/image-5.jpg",
      "/images/properties/moksha/image-6.jpg",
    ],
    imagesMeta: buildGalleryMeta("Moksha", "Sanjay Park, Viman Nagar", "3BHK Co-Living", [
      "/images/properties/moksha/image-1.jpg",
      "/images/properties/moksha/image-2.jpg",
      "/images/properties/moksha/image-3.jpg",
      "/images/properties/moksha/image-4.jpg",
      "/images/properties/moksha/image-5.jpg",
      "/images/properties/moksha/image-6.jpg",
    ]),
    description:
      "Standalone building where every floor is a beautifully curated 3BHK (two single/private rooms and one twin sharing room). Maximum occupancy per floor is 4 residents. Each floor has its own common kitchen, balcony, living, and dining area.",
    answerFirstSummary:
      "Moksha is a low-density 3BHK co-living residence in Sanjay Park, Viman Nagar, Pune, housing at most 4 residents per floor with a shared kitchen, balcony, and lounge. Twin rooms are ₹17,000/month and private rooms are ₹24,000/month with zero lock-in.",
    highlights: ["Max 4 Residents/Floor", "Common Kitchen & Balcony", "Zero Lock-in"],
    amenitiesList: [
      { name: "3BHK Floor Plan (Max 4 Residents/Floor)", included: true },
      { name: "Floor Kitchen, Living Room & Balcony", included: true },
      { name: "Air Conditioning in All Rooms", included: true },
      { name: "High-Speed Wi-Fi & Power Backup", included: true },
      { name: "Daily Housekeeping", included: true },
      { name: "Daily Food Included (Optional Discussion)", included: true },
      { name: "Self-Use Washing Machines", included: true },
      { name: "Zero Lock-in Period", included: true },
    ],
    nearbyDistances: [
      { name: "Joggers Park, Viman Nagar", distance: "~600 m" },
      { name: "Pune International Airport", distance: "~1.2 km" },
      { name: "Phoenix Marketcity Viman Nagar", distance: "~2.0 km" },
      { name: "EON / Kharadi IT Corridor", distance: "~6.0 km" },
    ],
    faq: [
      {
        question: "How crowded are the floors at Moksha co-living?",
        answer:
          "Each floor is a single 3BHK apartment housing a maximum of 4 residents total (two private rooms and one twin-sharing room).",
      },
      {
        question: "What is the private room rent at Moksha?",
        answer:
          "Private single-occupancy rooms at Moksha are ₹24,000/month (with ₹24,000 refundable deposit), and twin sharing is ₹17,000/month, with zero lock-in.",
      },
    ],
    link: "/coliving/moksha",
    contactPhone: "+917420040241",
    whatsappNumber: "917420040241",
    coupleFriendly: true,
    lockInPeriod: "No",
    lockInPolicy: "Zero lock-in period (30-day calendar notice served by the 5th of the month)",
    visitorPolicy: "Couple-friendly; visitors welcome in private rooms while respecting floor roommates",
    genderPolicy: "Co-Ed (Max 4 per floor)",
    foodPlan: "Included – Daily meals & food arrangements included",
    laundryPlan: "Self-use washing machines and optional paid service",
    airConditioning: true,
    isGuesthouse: false,
    totalBedsInfo: "18 Twin Beds, 11 Private Beds",
    depositInfo: "Twin: ₹17,000 | Private: ₹24,000 (1 month rent, refundable with 30 days notice)",
    lastUpdated: "2026-11-04",
    rentDisplay: "₹17,000",
    depositDisplay: "₹17,000",
    inclusionsDisplay: "Food, Wi-Fi, Daily Housekeeping, Water, Common Balcony",
    roomConfigDisplay: "Spacious 3BHK Floors (Max 4 residents/floor)",
    acRoomsDisplay: "Yes (AC in all rooms)",
    attachedWashroomDisplay: "Yes (Ensuite / Dedicated washrooms)",
    verifiedRating: null,
  },

  // 3. VIPASNA
  {
    id: "vipasna",
    slug: "/coliving/vipasna",
    name: "Vipasna",
    category: "Co-Living",
    city: "Pune",
    status: "active",
    hasPublicPgAccess: true,
    locality: "Sanjay Park",
    streetAddress: "Plot 36, Lane 3, Sanjay Park",
    pincode: "411032",
    tag: "Hotel-Style Premium Ensuite Suites",
    outcome: "Ensuite washroom in every room • 4 rooms/floor",
    monogram: "building",
    stat1Value: "₹17,000",
    stat1Label: "Twin Sharing /month",
    stat2Value: "₹27,000",
    stat2Label: "Private Ensuite /month",
    location: "Sanjay Park, Viman Nagar, Pune",
    subLocation: "Plot 36, Lane 3, Sanjay Park",
    address: "Plot 36, Lane 3, Sanjay Park, Viman Nagar, Pune – 411032",
    landmark: "Lane 3, Sanjay Park, Pune",
    lat: 18.5742,
    lng: 73.9048,
    geoVerified: true,
    googleMapsUrl: "https://maps.app.goo.gl/8MsiHGMq8s6R2At28",
    price: "₹17,000",
    priceNum: 17000,
    priceDouble: "₹17,000",
    priceSingle: "₹27,000",
    gender: "Co-Ed",
    roomTypes: ["Twin", "Private"],
    roomOptions: [
      {
        type: "Twin Sharing Ensuite",
        occupancy: "2 Residents",
        priceDisplay: "₹17,000",
        priceInr: 17000,
        depositDisplay: "₹17,000 (1 Month Rent)",
        depositInr: 17000,
        features: [
          "Attached private washroom inside every room",
          "AC, ergonomic study/work desk, shared floor kitchen",
          "Daily housekeeping, Wi-Fi & meals included",
          "Zero lock-in with 30-day notice period",
        ],
      },
      {
        type: "Private Ensuite Suite",
        occupancy: "Single / Couple",
        priceDisplay: "₹27,000",
        priceInr: 27000,
        depositDisplay: "₹27,000 (1 Month Rent)",
        depositInr: 27000,
        features: [
          "Private hotel-style room with attached ensuite bathroom",
          "Couple-friendly policy with calm work atmosphere",
          "Floor kitchen & dining access, AC & fiber Wi-Fi",
          "Zero lock-in with 30-day notice period",
        ],
      },
    ],
    cardGradient: "from-[#006E6E] via-[#004A4A] to-[#032323]",
    coverImage: "/images/properties/vipasna/image-1.jpg",
    gallery: [
      "/images/properties/vipasna/image-1.jpg",
      "/images/properties/vipasna/image-2.jpg",
      "/images/properties/vipasna/image-3.jpg",
      "/images/properties/vipasna/image-4.jpg",
      "/images/properties/vipasna/image-5.jpg",
      "/images/properties/vipasna/image-6.jpg",
    ],
    imagesMeta: buildGalleryMeta("Vipasna", "Sanjay Park, Viman Nagar", "Ensuite Co-Living", [
      "/images/properties/vipasna/image-1.jpg",
      "/images/properties/vipasna/image-2.jpg",
      "/images/properties/vipasna/image-3.jpg",
      "/images/properties/vipasna/image-4.jpg",
      "/images/properties/vipasna/image-5.jpg",
      "/images/properties/vipasna/image-6.jpg",
    ]),
    description:
      "Standalone hotel-style building with 4 premium rooms on every floor. Every single room features an attached washroom. Each floor offers a shared kitchen, living, and dining area. Designed for professionals seeking upscale, quiet comfort.",
    answerFirstSummary:
      "Vipasna offers boutique hotel-style ensuite rooms in Sanjay Park, Viman Nagar, Pune, with 4 rooms per floor, an attached washroom in every room, shared floor kitchen, and AC. Twin sharing is ₹17,000/month and private suites are ₹27,000/month with zero lock-in.",
    highlights: ["Hotel-Style Ensuite Rooms", "AC in Every Room", "Zero Lock-in"],
    amenitiesList: [
      { name: "Ensuite Attached Washroom in Every Room", included: true },
      { name: "Air Conditioning & Fiber Internet", included: true },
      { name: "Floor Shared Kitchen & Dining Lounge", included: true },
      { name: "Daily Housekeeping", included: true },
      { name: "Self-Use Washing Machines", included: true },
      { name: "Couple Friendly & Zero Lock-in", included: true },
    ],
    nearbyDistances: [
      { name: "Pune International Airport", distance: "~1.1 km" },
      { name: "Viman Nagar Business District", distance: "~1.8 km" },
      { name: "Commerzone IT Park Yerwada", distance: "~3.5 km" },
    ],
    faq: [
      {
        question: "Does Vipasna have attached washrooms in all rooms?",
        answer:
          "Yes. Every twin and private room at Vipasna includes an attached ensuite washroom with a hot water geyser.",
      },
      {
        question: "What is the difference between Vipasna and Nirvana?",
        answer:
          "Nirvana features private kitchens inside each 1RK unit (Private ₹29,000), while Vipasna offers hotel-style ensuite rooms with a shared kitchen per 4-room floor (Private ₹27,000).",
      },
    ],
    link: "/coliving/vipasna",
    contactPhone: "+917420040241",
    whatsappNumber: "917420040241",
    coupleFriendly: true,
    lockInPeriod: "No",
    lockInPolicy: "Zero lock-in period (30-day calendar notice served by the 5th of the month)",
    visitorPolicy: "Couple-friendly; calm co-living norms respected across all 4 floor units",
    genderPolicy: "Co-Ed",
    foodPlan: "Included – Daily meals & food arrangements included",
    laundryPlan: "Self-use washing machines and optional paid service",
    airConditioning: true,
    isGuesthouse: false,
    totalBedsInfo: "6 Twin Beds, 8 Private Beds",
    depositInfo: "Twin: ₹17,000 | Private: ₹27,000 (1 month rent, refundable with 30 days notice)",
    lastUpdated: "2026-11-04",
    rentDisplay: "₹17,000",
    depositDisplay: "₹17,000",
    inclusionsDisplay: "Food, Wi-Fi, Daily Housekeeping, Water, Shared Kitchen",
    roomConfigDisplay: "Hotel-Style Ensuite Rooms (4 rooms/floor)",
    acRoomsDisplay: "Yes (AC in every room)",
    attachedWashroomDisplay: "Yes (Ensuite attached washroom in all rooms)",
    verifiedRating: null,
  },

  // =============================================================
  // B. STUDENT ACCOMMODATION (PUBLIC RETAIL)
  // =============================================================

  // 4. SHUBH GATEWAY
  {
    id: "shubh-gateway",
    slug: "/student-housing/shubh-gateway",
    name: "Shubh Gateway",
    category: "Student Accommodation",
    city: "Pune",
    status: "active",
    hasPublicPgAccess: true,
    locality: "Viman Nagar",
    streetAddress: "Sr. No 227, Plot No. 1, New Airport Rd, opposite Symbiosis Law College",
    pincode: "411032",
    tag: "Opposite Symbiosis Law School (150m)",
    outcome: "Meals & laundry included • Gender-segregated towers",
    monogram: "grad",
    stat1Value: "₹25,000",
    stat1Label: "Girls Twin /month",
    stat2Value: "₹27,000",
    stat2Label: "Boys Twin /month",
    location: "Viman Nagar, Pune",
    subLocation: "Opposite Symbiosis Law School, New Airport Rd",
    address:
      "Shubh Gateway, Sr. No 227, Plot No. 1, New Airport Rd, opposite Symbiosis Law College, Viman Nagar, Pune, Maharashtra 411032",
    landmark: "Directly Opposite Symbiosis Law School (SLS) Gate (150 m)",
    lat: 18.5718,
    lng: 73.9149,
    geoVerified: true,
    googleMapsUrl: "https://maps.app.goo.gl/VR1T7UwD58H6UGa49",
    price: "₹25,000",
    priceNum: 25000,
    priceDouble: "₹25,000",
    priceSingle: "₹27,000",
    gender: "Boys & Girls (Separate Towers)",
    roomTypes: ["Girls' Twin", "Boys' Twin"],
    roomOptions: [
      {
        type: "Girls' Twin Sharing",
        occupancy: "2 Female Students",
        priceDisplay: "₹25,000",
        priceInr: 25000,
        depositDisplay: "₹40,000 (Refundable)",
        depositInr: 40000,
        features: [
          "Girls-only gated tower opposite Symbiosis Law School",
          "Breakfast & dinner included daily",
          "Twice-weekly laundry (up to 5 kg) included",
          "AC room, attached washroom & high-speed Wi-Fi",
        ],
      },
      {
        type: "Boys' Twin Sharing",
        occupancy: "2 Male Students",
        priceDisplay: "₹27,000",
        priceInr: 27000,
        depositDisplay: "₹40,000 (Refundable)",
        depositInr: 40000,
        features: [
          "Boys-only gated tower opposite Symbiosis Law School",
          "Breakfast & dinner included daily",
          "Twice-weekly laundry (up to 5 kg) included",
          "AC room, attached washroom & high-speed Wi-Fi",
        ],
      },
    ],
    cardGradient: "from-[#006E6E] via-[#004A4A] to-[#032323]",
    coverImage: "/images/properties/sls/image-1.jpg",
    gallery: [
      "/images/properties/sls/image-1.jpg",
      "/images/properties/sls/image-2.jpg",
      "/images/properties/sls/image-3.jpg",
      "/images/properties/sls/image-4.jpg",
      "/images/properties/sls/image-5.jpg",
      "/images/properties/sls/image-6.jpg",
    ],
    imagesMeta: buildGalleryMeta("Shubh Gateway", "Opposite Symbiosis Law School, Viman Nagar", "Student Housing", [
      "/images/properties/sls/image-1.jpg",
      "/images/properties/sls/image-2.jpg",
      "/images/properties/sls/image-3.jpg",
      "/images/properties/sls/image-4.jpg",
      "/images/properties/sls/image-5.jpg",
      "/images/properties/sls/image-6.jpg",
    ]),
    description:
      "Gated society across 4 towers (A, B, C, D) with 12 floors and four 3BHK units per floor. Gender-specific towers and apartments (Boys-only and Girls-only). Includes breakfast & dinner, twice-weekly laundry (up to 5 kg), AC rooms, attached washrooms, and common kitchens.",
    answerFirstSummary:
      "Shubh Gateway is student housing located 150m opposite Symbiosis Law School (SLS) Gate on New Airport Road, Viman Nagar, Pune. Featuring gender-segregated towers, AC rooms, attached washrooms, breakfast, dinner, and twice-weekly laundry, Girls' Twin is ₹25,000/month and Boys' Twin is ₹27,000/month on an annual academic term.",
    highlights: ["150m to SLS Campus Gate", "Breakfast & Dinner Included", "Laundry Included (2x/wk, 5kg)", "Gender-Segregated Towers"],
    amenitiesList: [
      { name: "150m Walk to Symbiosis Law School (SLS)", included: true },
      { name: "Breakfast & Dinner Included", included: true },
      { name: "Laundry 2x Weekly (Up to 5 kg)", included: true },
      { name: "Gender-Segregated Boys & Girls Towers", included: true },
      { name: "Air Conditioning & Attached Washrooms", included: true },
      { name: "High-Speed Fiber Wi-Fi & Housekeeping", included: true },
    ],
    nearbyDistances: [
      { name: "Symbiosis Law School (SLS Pune)", distance: "150 m (1–2 min walk)" },
      { name: "Symbiosis Viman Nagar Campus (SCMS / SID)", distance: "~1.2 km" },
      { name: "Pune International Airport", distance: "~1.5 km" },
      { name: "Phoenix Marketcity Viman Nagar", distance: "~1.8 km" },
    ],
    faq: [
      {
        question: "How far is Shubh Gateway from Symbiosis Law School (SLS)?",
        answer:
          "Shubh Gateway sits directly opposite the Symbiosis Law School (SLS) campus gate on New Airport Road, roughly 150 meters away.",
      },
      {
        question: "Are boys and girls in separate buildings or wings?",
        answer:
          "Yes. Shubh Gateway uses gender-segregated towers and apartments (Boys-only and Girls-only), and opposite-gender visitors are strictly not allowed.",
      },
      {
        question: "What is the fee, deposit, and lock-in at Shubh Gateway?",
        answer:
          "Girls' Twin is ₹25,000/month and Boys' Twin is ₹27,000/month with a ₹40,000 refundable deposit, billed on an annual academic lock-in (annual or semi-annual instalments).",
      },
    ],
    link: "/student-housing/shubh-gateway",
    contactPhone: "+917057897430",
    whatsappNumber: "917057897430",
    coupleFriendly: false,
    lockInPeriod: "Annual",
    lockInPolicy: "Annual academic lock-in period (annual or semi-annual fee instalments)",
    visitorPolicy: "Gender-segregated towers; opposite-gender visitors strictly not allowed",
    genderPolicy: "Boys & Girls in separate gender-segregated towers",
    foodPlan: "Included – Breakfast and Dinner included",
    laundryPlan: "Included – Twice a week, up to 5 kg",
    airConditioning: true,
    isGuesthouse: false,
    totalBedsInfo: "42 Girls' Twin Beds, 24 Boys' Twin Beds",
    depositInfo: "₹40,000 (Refundable subject to term completion, 30 days notice & no damage)",
    lastUpdated: "2026-11-04",
    rentDisplay: "₹25,000",
    depositDisplay: "₹40,000",
    inclusionsDisplay: "Breakfast & Dinner Included, Laundry (2x/wk), Wi-Fi, Cleaning",
    roomConfigDisplay: "Gated Society 3BHK (Boys & Girls Separate Towers)",
    acRoomsDisplay: "Yes (AC in all rooms)",
    attachedWashroomDisplay: "Yes (Attached washrooms)",
    verifiedRating: null,
  },

  // 5. BRINDAVAN
  {
    id: "brindavan",
    slug: "/student-housing/brindavan",
    name: "Brindavan",
    category: "Student Accommodation",
    city: "Pune",
    status: "active",
    hasPublicPgAccess: true,
    locality: "Sakore Nagar, Viman Nagar",
    streetAddress: "Symbiosis Rd, behind Dr Lal Path Lab, Sakore Nagar, Viman Nagar",
    pincode: "411014",
    tag: "Near SCMS & SCMC Campus (400m)",
    outcome: "All 3 meals & laundry included • 400m to SCMS",
    monogram: "grad",
    stat1Value: "₹27,000",
    stat1Label: "Twin Sharing /month",
    stat2Value: "₹32,000",
    stat2Label: "Private Room /month",
    location: "Sakore Nagar, Viman Nagar, Pune",
    subLocation: "Symbiosis Rd, behind Dr Lal Path Lab",
    address: "Symbiosis Rd, behind Dr Lal Path Lab, Sakore Nagar, Viman Nagar, Pune, Maharashtra 411014",
    landmark: "400m to SCMS & SID Symbiosis Campus",
    lat: 18.5645,
    lng: 73.9082,
    geoVerified: true,
    googleMapsUrl: "https://maps.app.goo.gl/MJWzeZj1LZHcyn1V9",
    price: "₹27,000",
    priceNum: 27000,
    priceDouble: "₹27,000",
    priceSingle: "₹32,000",
    gender: "Students (Annual Term)",
    roomTypes: ["Twin", "Private"],
    roomOptions: [
      {
        type: "Twin Sharing Room",
        occupancy: "2 Students (1BHK Unit)",
        priceDisplay: "₹27,000",
        priceInr: 27000,
        depositDisplay: "₹30,000 (Refundable)",
        depositInr: 30000,
        features: [
          "All 3 meals included (Breakfast, Lunch & Dinner)",
          "Laundry twice a week (up to 5 kg) included",
          "AC room, private washroom & co-working study area",
          "Annual academic lock-in period",
        ],
      },
      {
        type: "Private Student Room",
        occupancy: "Single Student (1BHK Unit)",
        priceDisplay: "₹32,000",
        priceInr: 32000,
        depositDisplay: "₹30,000 (Refundable)",
        depositInr: 30000,
        features: [
          "Private study bedroom inside curated 1BHK student unit",
          "All 3 daily meals + twice-weekly laundry included",
          "AC, Wi-Fi, housekeeping & dedicated desk",
          "400m walk to SCMS, SCMC & SID",
        ],
      },
    ],
    cardGradient: "from-[#005F5F] via-[#004242] to-[#022421]",
    coverImage: "/images/properties/scmc-sid/image-1.jpg",
    gallery: [
      "/images/properties/scmc-sid/image-1.jpg",
      "/images/properties/scmc-sid/image-2.jpg",
      "/images/properties/scmc-sid/image-3.jpg",
      "/images/properties/scmc-sid/image-4.jpg",
      "/images/properties/scmc-sid/image-5.jpg",
      "/images/properties/scmc-sid/image-6.jpg",
    ],
    imagesMeta: buildGalleryMeta("Brindavan", "Sakore Nagar, Viman Nagar", "Student Housing", [
      "/images/properties/scmc-sid/image-1.jpg",
      "/images/properties/scmc-sid/image-2.jpg",
      "/images/properties/scmc-sid/image-3.jpg",
      "/images/properties/scmc-sid/image-4.jpg",
      "/images/properties/scmc-sid/image-5.jpg",
      "/images/properties/scmc-sid/image-6.jpg",
    ]),
    description:
      "Standalone 4-storey building with four 1BHK units per floor. Each 1BHK accommodates 3 students (one twin room and one single room) with separate entrances, private washroom, and co-working space. Features all 3 meals (breakfast, lunch, dinner) and laundry twice weekly.",
    answerFirstSummary:
      "Brindavan is all-inclusive student housing on Symbiosis Road in Sakore Nagar, Viman Nagar, Pune—400m from SCMS, SCMC, and SID. Twin sharing is ₹27,000/month and private rooms are ₹32,000/month, including all 3 daily meals, AC, twice-weekly laundry, and housekeeping on an annual academic term.",
    highlights: ["400m to SCMS Campus", "All 3 Meals Included", "Laundry Included (2x/wk, 5kg)", "AC & Private Washrooms"],
    amenitiesList: [
      { name: "All 3 Daily Meals (Breakfast, Lunch & Dinner)", included: true },
      { name: "Laundry 2x Weekly (Up to 5 kg)", included: true },
      { name: "400m Walk to SCMS / SCMC / SID", included: true },
      { name: "Air Conditioning & Attached Washrooms", included: true },
      { name: "Wi-Fi, Co-Working Setup & Daily Housekeeping", included: true },
    ],
    nearbyDistances: [
      { name: "Symbiosis SCMS / SCMC / SID Viman Nagar", distance: "~400 m (4 min walk)" },
      { name: "Symbiosis Law School (SLS Pune)", distance: "~1.1 km" },
      { name: "Phoenix Marketcity Viman Nagar", distance: "~1.4 km" },
    ],
    faq: [
      {
        question: "Are lunch and dinner both included at Brindavan?",
        answer:
          "Yes. Brindavan includes all three meals daily—breakfast, lunch, and dinner—plus twice-weekly laundry up to 5 kg.",
      },
      {
        question: "How far is Brindavan from SCMS, SCMC, and SID?",
        answer:
          "Brindavan is located behind Dr Lal Path Lab on Symbiosis Road in Sakore Nagar, roughly 400 meters from the Symbiosis Viman Nagar campus.",
      },
    ],
    link: "/student-housing/brindavan",
    contactPhone: "+919637019838",
    whatsappNumber: "919637019838",
    coupleFriendly: false,
    lockInPeriod: "Annual",
    lockInPolicy: "Annual academic lock-in period (annual or semi-annual fee instalments)",
    visitorPolicy: "Student residence guidelines apply; opposite-gender visitors strictly not allowed",
    genderPolicy: "Students Only",
    foodPlan: "Included – Breakfast, Lunch, and Dinner included",
    laundryPlan: "Included – Twice a week, up to 5 kg",
    airConditioning: true,
    isGuesthouse: false,
    totalBedsInfo: "32 Twin Beds, 16 Private Beds",
    depositInfo: "₹30,000 (Refundable subject to term completion, 30 days notice & no damage)",
    lastUpdated: "2026-11-04",
    rentDisplay: "₹27,000",
    depositDisplay: "₹30,000",
    inclusionsDisplay: "All 3 Meals Included, Laundry (2x/wk), Wi-Fi, Daily Cleaning",
    roomConfigDisplay: "Curated 1BHK Units (3 students per 1BHK)",
    acRoomsDisplay: "Yes (AC in all rooms)",
    attachedWashroomDisplay: "Yes (Private washroom per unit)",
    verifiedRating: null,
  },

  // 6. VAIRAGYA
  {
    id: "vairagya",
    slug: "/student-housing/vairagya",
    name: "Vairagya",
    category: "Student Accommodation",
    city: "Pune",
    status: "active",
    hasPublicPgAccess: true,
    locality: "Lavale",
    streetAddress: "Near Symbiosis University, Lavale",
    pincode: "412115",
    tag: "Best Suited for Symbiosis University, Lavale",
    outcome: "Meals included • Triple & twin sharing from ₹15k",
    monogram: "grad",
    stat1Value: "₹15,000",
    stat1Label: "Triple Sharing /month",
    stat2Value: "₹17,000",
    stat2Label: "Twin Sharing /month",
    location: "Lavale, Pune",
    subLocation: "500m to Symbiosis University & ISBM, Lavale",
    address: "Near Symbiosis University & ISBM, Lavale, Pune",
    landmark: "500m to Symbiosis University Lavale Campus & ISBM",
    lat: 18.535,
    lng: 73.732,
    geoVerified: false, // Flagged in FACTS_TO_CONFIRM.md until exact plot coordinates are provided
    googleMapsUrl: "https://maps.google.com/?q=Symbiosis+University+Lavale",
    price: "₹15,000",
    priceNum: 15000,
    priceDouble: "₹17,000",
    priceSingle: "₹15,000",
    gender: "Students (Annual Term)",
    roomTypes: ["Triple", "Twin"],
    roomOptions: [
      {
        type: "Triple Sharing Room",
        occupancy: "3 Students",
        priceDisplay: "₹15,000",
        priceInr: 15000,
        depositDisplay: "₹20,000 (Refundable)",
        depositInr: 20000,
        features: [
          "Lowest student housing rate at Reforbs",
          "Breakfast & dinner included via in-house running mess",
          "Attached washrooms, Wi-Fi & study desks",
          "Non-AC rooms on annual academic term",
        ],
      },
      {
        type: "Twin Sharing Room",
        occupancy: "2 Students",
        priceDisplay: "₹17,000",
        priceInr: 17000,
        depositDisplay: "₹20,000 (Refundable)",
        depositInr: 20000,
        features: [
          "Spacious 1BHK twin configuration",
          "Breakfast & dinner included via in-house running mess",
          "500m to Symbiosis University Lavale & ISBM",
          "Non-AC rooms on annual academic term",
        ],
      },
    ],
    cardGradient: "from-[#005F5F] via-[#004242] to-[#022421]",
    coverImage: "/images/properties/vairagya/image-1.jpg",
    gallery: [
      "/images/properties/vairagya/image-1.jpg",
      "/images/properties/vairagya/image-2.jpg",
      "/images/properties/vairagya/image-3.jpg",
      "/images/properties/vairagya/image-4.jpg",
      "/images/properties/vairagya/image-5.jpg",
      "/images/properties/vairagya/image-6.jpg",
    ],
    imagesMeta: buildGalleryMeta("Vairagya", "Lavale (near Symbiosis University)", "Student Housing", [
      "/images/properties/vairagya/image-1.jpg",
      "/images/properties/vairagya/image-2.jpg",
      "/images/properties/vairagya/image-3.jpg",
      "/images/properties/vairagya/image-4.jpg",
      "/images/properties/vairagya/image-5.jpg",
      "/images/properties/vairagya/image-6.jpg",
    ]),
    description:
      "Standalone building with five spacious 1BHK units 500m from Symbiosis University Lavale and ISBM. Rooms come in triple-sharing and twin-sharing configurations with a running mess for breakfast and dinner, attached washrooms, Wi-Fi, and Non-AC ventilation.",
    answerFirstSummary:
      "Vairagya is student housing located 500m from Symbiosis University Lavale and ISBM in Pune. Designed for campus proximity with a running breakfast and dinner mess, Wi-Fi, and attached washrooms (Non-AC), triple sharing is ₹15,000/month and twin sharing is ₹17,000/month on an annual academic term.",
    highlights: ["500m to Symbiosis University Lavale", "Breakfast & Dinner Mess", "Self-Use Washing Machines", "Non-AC Ventilation"],
    amenitiesList: [
      { name: "500m from Symbiosis Lavale & ISBM", included: true },
      { name: "Breakfast & Dinner Running Mess", included: true },
      { name: "Attached Washroom per Unit", included: true },
      { name: "High-Speed Wi-Fi & Study Desks", included: true },
      { name: "Self-Use Washing Machines", included: true },
      { name: "Air Conditioning (Non-AC Property)", included: false },
    ],
    nearbyDistances: [
      { name: "Symbiosis University Lavale Campus", distance: "~500 m" },
      { name: "ISBM Pune (Nande-Lavale)", distance: "~500 m" },
    ],
    faq: [
      {
        question: "Does Vairagya near Symbiosis Lavale have AC rooms?",
        answer: "No. Vairagya is a Non-AC student residence.",
      },
      {
        question: "What meals and deposit apply at Vairagya?",
        answer:
          "Breakfast and dinner via the in-house running mess are included in the rent (₹15,000/month triple, ₹17,000/month twin), with a ₹20,000 refundable security deposit and annual lock-in.",
      },
    ],
    link: "/student-housing/vairagya",
    contactPhone: "+917387614629",
    whatsappNumber: "917387614629",
    coupleFriendly: false,
    lockInPeriod: "Annual",
    lockInPolicy: "Annual academic lock-in period",
    visitorPolicy: "Student residence rules; opposite-gender visitors not allowed",
    genderPolicy: "Students Only",
    foodPlan: "Included – Breakfast and Dinner included (Running in-house mess)",
    laundryPlan: "Self-use washing machines available; paid laundry service also available",
    airConditioning: false,
    isGuesthouse: false,
    totalBedsInfo: "24 Twin Beds, 27 Triple Beds",
    depositInfo: "₹20,000 (Refundable subject to term completion, 30 days notice & no damage)",
    lastUpdated: "2026-11-04",
    rentDisplay: "₹15,000",
    depositDisplay: "₹20,000",
    inclusionsDisplay: "Breakfast & Dinner (In-House Mess), Wi-Fi, Housekeeping",
    roomConfigDisplay: "Spacious 1BHK Units (Triple & Twin Sharing)",
    acRoomsDisplay: "No (Non-AC)",
    attachedWashroomDisplay: "Yes (Attached washroom in each unit)",
    verifiedRating: null,
  },

  // =============================================================
  // C. COMPANY GUESTHOUSES (CORPORATE ONLY — NOT REGULAR PUBLIC PG)
  // =============================================================

  // 7. PARK ISLAND
  {
    id: "park-island",
    slug: "/coliving/park-island",
    name: "Park Island",
    category: "Company Guesthouse",
    city: "Pune",
    status: "corporate",
    hasPublicPgAccess: false,
    locality: "Shastrinagar",
    streetAddress: "Park Island Enclave, Shastrinagar",
    pincode: "411006",
    tag: "Dedicated Corporate Guesthouse (Not Regular PG)",
    outcome: "Reserved for dedicated corporate employees",
    monogram: "building",
    stat1Value: "₹20,000",
    stat1Label: "Twin Sharing /month",
    stat2Value: "Corporate Only",
    stat2Label: "Not a Regular PG",
    location: "Shastrinagar, Pune",
    subLocation: "Park Island Enclave, Shastrinagar",
    address: "Shastrinagar, Pune, Maharashtra 411006",
    landmark: "Park Island Enclave, Shastrinagar",
    lat: 18.552,
    lng: 73.896,
    geoVerified: true,
    googleMapsUrl: "https://maps.app.goo.gl/8h4ivEDdFCMz5kFg9",
    price: "₹20,000",
    priceNum: 20000,
    priceDouble: "₹20,000",
    priceSingle: "NA",
    gender: "Corporate Employees Only",
    roomTypes: ["Twin"],
    roomOptions: [
      {
        type: "Twin Sharing Corporate Suite",
        occupancy: "Corporate Partner Employees Only",
        priceDisplay: "₹20,000",
        priceInr: 20000,
        depositDisplay: "₹20,000 (1 Month Deposit)",
        depositInr: 20000,
        features: [
          "Reserved strictly for employees of one dedicated company",
          "Fully furnished 3BHK corporate apartment",
          "AC rooms, daily cleaning, meals & Wi-Fi included",
        ],
      },
    ],
    cardGradient: "from-[#0A2E28] via-[#041E1A] to-[#021310]",
    coverImage: "/images/properties/park-island/image-1.jpg",
    gallery: [
      "/images/properties/park-island/image-1.jpg",
      "/images/properties/park-island/image-2.jpg",
      "/images/properties/park-island/image-3.jpg",
      "/images/properties/park-island/image-4.jpg",
      "/images/properties/park-island/image-5.jpg",
      "/images/properties/park-island/image-6.jpg",
    ],
    imagesMeta: buildGalleryMeta("Park Island", "Shastrinagar", "Corporate Company Guesthouse", [
      "/images/properties/park-island/image-1.jpg",
      "/images/properties/park-island/image-2.jpg",
      "/images/properties/park-island/image-3.jpg",
      "/images/properties/park-island/image-4.jpg",
      "/images/properties/park-island/image-5.jpg",
      "/images/properties/park-island/image-6.jpg",
    ]),
    description:
      "Gated society with multiple fully furnished 3BHK apartments operated strictly as company guesthouses for employees of one dedicated company. Not available as regular public PG or student accommodation.",
    answerFirstSummary:
      "Park Island in Shastrinagar, Pune is a dedicated corporate company guesthouse exclusively operated for employees of one partnered enterprise. It is not open to the general public as a PG.",
    highlights: ["Company Guesthouse Only", "Fully Furnished 3BHK", "AC Rooms & Daily Cleaning", "Not Open as Public PG"],
    amenitiesList: [
      { name: "Exclusive Corporate Occupancy", included: true },
      { name: "Fully Furnished 3BHK + Kitchen", included: true },
      { name: "AC, Daily Cleaning & Wi-Fi", included: true },
    ],
    nearbyDistances: [{ name: "Commerzone / Yerwada Hub", distance: "~2.0 km" }],
    faq: [
      {
        question: "Is Park Island available as a regular PG for public walk-ins?",
        answer:
          "No. Park Island is reserved strictly for employees of one dedicated corporate partner and is not open as a regular retail PG.",
      },
    ],
    link: "/coliving/park-island",
    contactPhone: "+917420040241",
    whatsappNumber: "917420040241",
    coupleFriendly: false,
    lockInPeriod: "No",
    lockInPolicy: "Zero individual lock-in (managed under corporate partner lease)",
    visitorPolicy: "Governed by gated society & corporate partner rules",
    genderPolicy: "Corporate Employees Only",
    foodPlan: "Included – Daily meals & food arrangements included",
    laundryPlan: "Self-use washing machines available",
    airConditioning: true,
    isGuesthouse: true,
    totalBedsInfo: "12 Twin Beds (Private rooms NA)",
    depositInfo: "₹20,000 (Fully refundable subject to 30 days notice & no damage)",
    lastUpdated: "2026-11-04",
    rentDisplay: "₹20,000",
    depositDisplay: "₹20,000",
    inclusionsDisplay: "Food, Daily Cleaning, High-Speed Wi-Fi, Maintenance, Kitchen Access",
    roomConfigDisplay: "Executive 3BHK Corporate Apartments (Corporate Only)",
    acRoomsDisplay: "Yes (AC in all rooms)",
    attachedWashroomDisplay: "Yes (Attached & Dedicated washrooms)",
    verifiedRating: null,
  },

  // 8. PILLAR HOMES
  {
    id: "pillar-homes",
    slug: "/coliving/pillar-homes",
    name: "Pillar Homes",
    category: "Company Guesthouse",
    city: "Pune",
    status: "corporate",
    hasPublicPgAccess: false,
    locality: "Clover Park, Viman Nagar",
    streetAddress: "Pillar Homes, Clover Park, Viman Nagar",
    pincode: "411014",
    tag: "Dedicated Corporate Guesthouse (Not Regular PG)",
    outcome: "Reserved for dedicated corporate employees",
    monogram: "building",
    stat1Value: "₹25,000",
    stat1Label: "Twin Sharing /month",
    stat2Value: "Corporate Only",
    stat2Label: "Not a Regular PG",
    location: "Clover Park, Viman Nagar, Pune",
    subLocation: "Pillar Homes, Clover Park",
    address: "Pillar Homes, Clover Park, Viman Nagar, Pune, Maharashtra 411014",
    landmark: "Clover Park, Viman Nagar",
    lat: 18.562,
    lng: 73.911,
    geoVerified: true,
    googleMapsUrl: "https://maps.app.goo.gl/V4JFnudQ7dCT7euB7",
    price: "₹25,000",
    priceNum: 25000,
    priceDouble: "₹25,000",
    priceSingle: "NA",
    gender: "Corporate Employees Only",
    roomTypes: ["Twin"],
    roomOptions: [
      {
        type: "Twin Sharing Executive Suite",
        occupancy: "Corporate Partner Employees Only",
        priceDisplay: "₹25,000",
        priceInr: 25000,
        depositDisplay: "₹25,000 (1 Month Deposit)",
        depositInr: 25000,
        features: [
          "Reserved exclusively for employees of one dedicated company",
          "Fully furnished 3BHK apartments in Clover Park",
          "AC rooms, attached washrooms, daily cleaning & meals included",
        ],
      },
    ],
    cardGradient: "from-[#0A2E28] via-[#041E1A] to-[#021310]",
    coverImage: "/images/properties/pillar-homes/image-1.jpg",
    gallery: [
      "/images/properties/pillar-homes/image-1.jpg",
      "/images/properties/pillar-homes/image-2.jpg",
      "/images/properties/pillar-homes/image-3.jpg",
      "/images/properties/pillar-homes/image-4.jpg",
      "/images/properties/pillar-homes/image-5.jpg",
      "/images/properties/pillar-homes/image-6.jpg",
    ],
    imagesMeta: buildGalleryMeta("Pillar Homes", "Clover Park, Viman Nagar", "Corporate Company Guesthouse", [
      "/images/properties/pillar-homes/image-1.jpg",
      "/images/properties/pillar-homes/image-2.jpg",
      "/images/properties/pillar-homes/image-3.jpg",
      "/images/properties/pillar-homes/image-4.jpg",
      "/images/properties/pillar-homes/image-5.jpg",
      "/images/properties/pillar-homes/image-6.jpg",
    ]),
    description:
      "Gated society featuring multiple fully furnished 3BHK apartments operated strictly as company guesthouses for employees of one dedicated company. Not available as regular public PG or student accommodation.",
    answerFirstSummary:
      "Pillar Homes in Clover Park, Viman Nagar, Pune is a dedicated corporate company guesthouse managed exclusively for employees of one partnered enterprise. It is not available for retail PG bookings.",
    highlights: ["Company Guesthouse Only", "Fully Furnished 3BHK", "AC Rooms & Attached Washrooms", "Not Open as Public PG"],
    amenitiesList: [
      { name: "Exclusive Corporate Occupancy", included: true },
      { name: "Furnished 3BHK + Kitchen", included: true },
      { name: "AC, Daily Cleaning & High-Speed Wi-Fi", included: true },
    ],
    nearbyDistances: [{ name: "Viman Nagar IT Corridors", distance: "~1.0 km" }],
    faq: [
      {
        question: "Can students or individual professionals book Pillar Homes?",
        answer:
          "No. Pillar Homes is operated strictly as a company guesthouse for employees of a dedicated corporate partner.",
      },
    ],
    link: "/coliving/pillar-homes",
    contactPhone: "+917420040241",
    whatsappNumber: "917420040241",
    coupleFriendly: false,
    lockInPeriod: "No",
    lockInPolicy: "Zero individual lock-in (managed under corporate partner lease)",
    visitorPolicy: "Governed by gated society & corporate partner rules",
    genderPolicy: "Corporate Employees Only",
    foodPlan: "Included – Daily meals & food arrangements included",
    laundryPlan: "Self-use washing machines available",
    airConditioning: true,
    isGuesthouse: true,
    totalBedsInfo: "27 Twin Beds (Private rooms NA)",
    depositInfo: "₹25,000 (Fully refundable subject to 30 days notice & no damage)",
    lastUpdated: "2026-11-04",
    rentDisplay: "₹25,000",
    depositDisplay: "₹25,000",
    inclusionsDisplay: "Food, Daily Cleaning, High-Speed Wi-Fi, Maintenance, Furnished Kitchen",
    roomConfigDisplay: "Premium 3BHK Corporate Apartments (Corporate Only)",
    acRoomsDisplay: "Yes (AC in all rooms)",
    attachedWashroomDisplay: "Yes (Attached washrooms in all master bedrooms)",
    verifiedRating: null,
  },

  // 9. SUYOG ENCLAVE
  {
    id: "suyog-enclave",
    slug: "/coliving/suyog",
    name: "Suyog Enclave",
    category: "Company Guesthouse",
    city: "Pune",
    status: "corporate",
    hasPublicPgAccess: false,
    locality: "Sakore Nagar, Viman Nagar",
    streetAddress: "64P, behind Bajaj Finserv, Sakore Nagar Rd, Sakore Nagar, Viman Nagar",
    pincode: "411014",
    tag: "Dedicated Corporate Guesthouse (Not Regular PG)",
    outcome: "Reserved for dedicated corporate employees",
    monogram: "building",
    stat1Value: "₹25,000",
    stat1Label: "Twin Sharing /month",
    stat2Value: "Corporate Only",
    stat2Label: "Not a Regular PG",
    location: "Sakore Nagar, Viman Nagar, Pune",
    subLocation: "Behind Bajaj Finserv, Sakore Nagar Rd",
    address: "64P, behind Bajaj Finserv, Sakore Nagar Rd, Sakore Nagar, Viman Nagar, Pune, Maharashtra 411014",
    landmark: "Behind Bajaj Finserv, Sakore Nagar (~200 m)",
    lat: 18.563,
    lng: 73.91,
    geoVerified: true,
    googleMapsUrl: "https://maps.app.goo.gl/2vLb3jCP81qCEZuL9",
    price: "₹25,000",
    priceNum: 25000,
    priceDouble: "₹25,000",
    priceSingle: "NA",
    gender: "Corporate Employees Only",
    roomTypes: ["Twin"],
    roomOptions: [
      {
        type: "Twin Sharing Corporate Suite",
        occupancy: "Corporate Partner Employees Only",
        priceDisplay: "₹25,000",
        priceInr: 25000,
        depositDisplay: "₹25,000 (1 Month Deposit)",
        depositInr: 25000,
        features: [
          "Reserved strictly for employees of one dedicated company",
          "200m from Bajaj Finserv Viman Nagar",
          "AC rooms, attached washrooms, daily cleaning & meals",
        ],
      },
    ],
    cardGradient: "from-[#0A2E28] via-[#041E1A] to-[#021310]",
    coverImage: "/images/properties/suyog/image-1.jpg",
    gallery: [
      "/images/properties/suyog/image-1.jpg",
      "/images/properties/suyog/image-2.jpg",
      "/images/properties/suyog/image-3.jpg",
      "/images/properties/suyog/image-4.jpg",
      "/images/properties/suyog/image-5.jpg",
      "/images/properties/suyog/image-6.jpg",
    ],
    imagesMeta: buildGalleryMeta("Suyog Enclave", "Sakore Nagar, Viman Nagar", "Corporate Company Guesthouse", [
      "/images/properties/suyog/image-1.jpg",
      "/images/properties/suyog/image-2.jpg",
      "/images/properties/suyog/image-3.jpg",
      "/images/properties/suyog/image-4.jpg",
      "/images/properties/suyog/image-5.jpg",
      "/images/properties/suyog/image-6.jpg",
    ]),
    description:
      "Gated society with multiple 3BHK apartments operated strictly as company guesthouses for employees of one dedicated company. Not available as regular public PG or student accommodation.",
    answerFirstSummary:
      "Suyog Enclave behind Bajaj Finserv in Sakore Nagar, Viman Nagar, Pune is a dedicated corporate company guesthouse exclusively operated for employees of a contracted partner enterprise. It is not open as a retail PG.",
    highlights: ["Company Guesthouse Only", "200m to Bajaj Finserv", "AC Rooms & Attached Washrooms", "Not Open as Public PG"],
    amenitiesList: [
      { name: "Exclusive Corporate Occupancy", included: true },
      { name: "200m to Bajaj Finserv Corporate Hub", included: true },
      { name: "AC, Daily Cleaning & High-Speed Wi-Fi", included: true },
    ],
    nearbyDistances: [{ name: "Bajaj Finserv Viman Nagar", distance: "~200 m" }],
    faq: [
      {
        question: "Is Suyog Enclave open to public tenants or students?",
        answer:
          "No. Suyog Enclave is a dedicated company guesthouse for corporate partner employees only.",
      },
    ],
    link: "/coliving/suyog",
    contactPhone: "+917420040241",
    whatsappNumber: "917420040241",
    coupleFriendly: false,
    lockInPeriod: "No",
    lockInPolicy: "Zero individual lock-in (managed under corporate partner lease)",
    visitorPolicy: "Governed by gated society & corporate partner rules",
    genderPolicy: "Corporate Employees Only",
    foodPlan: "Included – Daily meals & food arrangements included",
    laundryPlan: "Self-use washing machines available",
    airConditioning: true,
    isGuesthouse: true,
    totalBedsInfo: "18 Twin Beds (Private rooms NA)",
    depositInfo: "₹25,000 (Fully refundable subject to 30 days notice & no damage)",
    lastUpdated: "2026-11-04",
    rentDisplay: "₹25,000",
    depositDisplay: "₹25,000",
    inclusionsDisplay: "Food, Daily Cleaning, High-Speed Wi-Fi, Maintenance, Furnished Kitchen",
    roomConfigDisplay: "Comfort 3BHK Corporate Apartments (Corporate Only)",
    acRoomsDisplay: "Yes (AC in all rooms)",
    attachedWashroomDisplay: "Yes (Attached washrooms)",
    verifiedRating: null,
  },
];

export const publicPropertiesData = propertiesData.filter((p) => p.hasPublicPgAccess);
export const colivingPropertiesData = propertiesData.filter(
  (p) => p.category === "Co-Living" && p.hasPublicPgAccess
);
export const studentPropertiesData = propertiesData.filter(
  (p) => p.category === "Student Accommodation" && p.hasPublicPgAccess
);
export const corporatePropertiesData = propertiesData.filter(
  (p) => p.category === "Company Guesthouse" || !p.hasPublicPgAccess
);

export function getPropertyById(id: string): PropertyItem | undefined {
  return propertiesData.find((p) => p.id === id || p.slug.endsWith(`/${id}`));
}

export function getRelatedProperties(currentId: string): PropertyItem[] {
  const current = getPropertyById(currentId);
  if (!current) return publicPropertiesData.slice(0, 3);
  return publicPropertiesData
    .filter((p) => p.id !== current.id)
    .sort((a, b) => Number(b.category === current.category) - Number(a.category === current.category))
    .slice(0, 3);
}

export function toPropertyDetailData(item: PropertyItem): PropertyData {
  const catLabel: PropertyData["category"] =
    item.category === "Student Accommodation" ? "Student Housing" : item.category;

  return {
    id: item.id,
    slug: item.slug,
    name: item.name,
    category: catLabel,
    locality: item.locality,
    tagline: item.tag,
    address: item.address,
    landmark: item.landmark,
    rating: item.verifiedRating ? String(item.verifiedRating.ratingValue) : undefined,
    reviewsCount: item.verifiedRating ? item.verifiedRating.reviewCount : undefined,
    priceSingle: item.priceSingle !== "NA" ? item.priceSingle : undefined,
    priceDouble: item.priceDouble,
    heroImage: item.coverImage,
    heroAlt: item.imagesMeta[0]?.alt || `${item.name} in ${item.locality}, Pune`,
    galleryImages: item.gallery,
    galleryAlts: item.imagesMeta.map((m) => m.alt),
    description: item.description,
    answerFirstSummary: item.answerFirstSummary,
    roomTypes: item.roomOptions.map((ro) => ({
      type: ro.type,
      price: ro.priceDisplay,
      deposit: ro.depositDisplay,
      features: ro.features,
    })),
    amenities: item.amenitiesList,
    landmarks: item.nearbyDistances,
    coupleFriendly: item.coupleFriendly,
    annualLockIn: item.lockInPeriod === "Annual",
    lockInPolicy: item.lockInPolicy,
    visitorPolicy: item.visitorPolicy,
    genderPolicy: item.genderPolicy,
    foodPolicy: item.foodPlan,
    laundryPolicy: item.laundryPlan,
    contactPhone: item.contactPhone,
    googleMapsUrl: item.googleMapsUrl,
    faq: item.faq,
    lastUpdated: item.lastUpdated,
    isGuesthouse: item.isGuesthouse,
    relatedProperties: getRelatedProperties(item.id).map((r) => ({
      name: r.name,
      category: r.category,
      locality: r.locality,
      price: r.price,
      href: r.link,
    })),
  };
}

export const VIMAN_NAGAR_CENTER = {
  lat: 18.5679,
  lng: 73.9143,
  defaultZoom: 14,
};
