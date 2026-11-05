export interface PropertyItem {
  id: string;
  name: string;
  category: "Co-Living" | "Student Accommodation" | "Company Guesthouse";
  city: "Pune" | "Goa" | "Bangalore";
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
  lat: number;
  lng: number;
  googleMapsUrl: string;
  price: string;
  priceNum: number;
  priceDouble: string;
  priceSingle: string;
  rating: number;
  reviews: number;
  gender: string;
  roomTypes: ("Twin" | "Private" | "Triple" | "Girls' Twin" | "Boys' Twin" | "Single" | "Double")[];
  cardGradient: string;
  coverImage: string;
  gallery: string[];
  description: string;
  highlights: string[];
  link: string;
  // Operational details from Owner Document
  contactPhone: string;
  coupleFriendly: boolean;
  lockInPeriod: "No" | "Annual";
  foodPlan: string;
  laundryPlan: string;
  airConditioning: boolean;
  isGuesthouse: boolean;
  totalBedsInfo: string;
  depositInfo: string;
}

export const propertiesData: PropertyItem[] = [
  // =============================================================
  // A. CO-LIVING PROPERTIES
  // =============================================================

  // 1. NIRVANA
  {
    id: "nirvana",
    name: "Nirvana",
    category: "Co-Living",
    city: "Pune",
    tag: "Couple-Friendly 1RK Suites with Private Kitchen",
    outcome: "Private kitchen & washroom • 1 km to Airport",
    monogram: "building",
    stat1Value: "₹17,000",
    stat1Label: "Starting Rent /month",
    stat2Value: "1 Month",
    stat2Label: "Refundable Deposit",
    location: "Sanjay Park, Viman Nagar, Pune",
    subLocation: "Plot 34, Lane 2A, Sanjay Park",
    address: "Plot 34, Lane 2A, Sanjay Park, Viman Nagar, Pune – 411032",
    lat: 18.575,
    lng: 73.9052,
    googleMapsUrl: "https://maps.app.goo.gl/8MsiHGMq8s6R2At28",
    price: "₹17,000",
    priceNum: 17000,
    priceDouble: "₹17,000",
    priceSingle: "₹29,000",
    rating: 5.0,
    reviews: 189,
    gender: "Co-Ed",
    roomTypes: ["Twin", "Private"],
    cardGradient: "from-[#164E63] via-[#0E3846] to-[#031F27]",
    coverImage: "/images/properties/nirvana/image-1.jpg",
    gallery: [
      "/images/properties/nirvana/image-1.jpg",
      "/images/properties/nirvana/image-2.jpg",
      "/images/properties/nirvana/image-3.jpg",
      "/images/properties/nirvana/image-4.jpg",
      "/images/properties/nirvana/image-5.jpg",
      "/images/properties/nirvana/image-6.jpg",
    ],
    description:
      "Standalone 3-storey building with four 1RK units per floor (two twin-sharing and two single/private). Every unit features a separate entrance, private attached kitchen, and attached washroom with individual AC. Best suited for couples and residents preferring absolute privacy.",
    highlights: ["Private Kitchen per 1RK", "AC Rooms & Attached Washroom", "Zero Lock-in"],
    link: "/coliving/nirvana",
    contactPhone: "7420040241",
    coupleFriendly: true,
    lockInPeriod: "No",
    foodPlan: "Available and optional (contact team for arrangements)",
    laundryPlan: "Self-use washing machines available; paid service also available",
    airConditioning: true,
    isGuesthouse: false,
    totalBedsInfo: "26 Twin Beds, 7 Private Beds",
    depositInfo: "Twin: ₹17,000 | Private: ₹29,000 (1 month rent, fully refundable with 30 days notice)",
  },

  // 2. MOKSHA
  {
    id: "moksha",
    name: "Moksha",
    category: "Co-Living",
    city: "Pune",
    tag: "Bohemian 3BHK Floors with Green Terraces",
    outcome: "Spacious 3BHK layout • Max 4 residents/floor",
    monogram: "compass",
    stat1Value: "₹17,000",
    stat1Label: "Starting Rent /month",
    stat2Value: "1 Month",
    stat2Label: "Refundable Deposit",
    location: "Sanjay Park, Viman Nagar, Pune",
    subLocation: "Plot 61, Lane 2A, Sanjay Park",
    address: "Plot 61, Lane 2A, Sanjay Park, Viman Nagar – 411032",
    lat: 18.5758,
    lng: 73.9056,
    googleMapsUrl: "https://maps.app.goo.gl/8MsiHGMq8s6R2At28",
    price: "₹17,000",
    priceNum: 17000,
    priceDouble: "₹17,000",
    priceSingle: "₹24,000",
    rating: 4.9,
    reviews: 164,
    gender: "Co-Ed",
    roomTypes: ["Twin", "Private"],
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
    description:
      "Standalone building where every floor is a beautifully curated 3BHK (two single/private rooms and one twin sharing room). Maximum occupancy per floor is 4 residents. Each floor has its own common kitchen, balcony, living, and dining area.",
    highlights: ["Max 4 Residents/Floor", "Common Kitchen & Balcony", "Zero Lock-in"],
    link: "/coliving/moksha",
    contactPhone: "7420040241",
    coupleFriendly: true,
    lockInPeriod: "No",
    foodPlan: "Available and optional",
    laundryPlan: "Self-use washing machines and optional paid service",
    airConditioning: true,
    isGuesthouse: false,
    totalBedsInfo: "18 Twin Beds, 11 Private Beds",
    depositInfo: "Twin: ₹17,000 | Private: ₹24,000 (1 month rent, fully refundable with 30 days notice)",
  },

  // 3. VIPASNA
  {
    id: "vipasna",
    name: "Vipasna",
    category: "Co-Living",
    city: "Pune",
    tag: "Hotel-Style Premium Ensuite Suites",
    outcome: "Ensuite washroom in every room • 4 rooms/floor",
    monogram: "building",
    stat1Value: "₹17,000",
    stat1Label: "Starting Rent /month",
    stat2Value: "1 Month",
    stat2Label: "Refundable Deposit",
    location: "Sanjay Park, Viman Nagar, Pune",
    subLocation: "Plot 36, Lane 3, Sanjay Park",
    address: "Plot 36, Lane 3, Sanjay Park, Viman Nagar – 411032",
    lat: 18.5742,
    lng: 73.9048,
    googleMapsUrl: "https://maps.app.goo.gl/8MsiHGMq8s6R2At28",
    price: "₹17,000",
    priceNum: 17000,
    priceDouble: "₹17,000",
    priceSingle: "₹27,000",
    rating: 4.9,
    reviews: 152,
    gender: "Co-Ed",
    roomTypes: ["Twin", "Private"],
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
    description:
      "Standalone hotel-style building with 4 premium rooms on every floor. Every single room features an attached washroom. Each floor offers a shared kitchen, living, and dining area. Designed for professionals seeking upscale, quiet comfort.",
    highlights: ["Hotel-Style Ensuite Rooms", "AC in Every Room", "Zero Lock-in"],
    link: "/coliving/vipasna",
    contactPhone: "7420040241",
    coupleFriendly: true,
    lockInPeriod: "No",
    foodPlan: "Available and optional",
    laundryPlan: "Self-use washing machines and optional paid service",
    airConditioning: true,
    isGuesthouse: false,
    totalBedsInfo: "6 Twin Beds, 8 Private Beds",
    depositInfo: "Twin: ₹17,000 | Private: ₹27,000 (1 month rent, fully refundable with 30 days notice)",
  },

  // =============================================================
  // B. STUDENT ACCOMMODATION
  // =============================================================

  // 4. SHUBH GATEWAY
  {
    id: "shubh-gateway",
    name: "Shubh Gateway",
    category: "Student Accommodation",
    city: "Pune",
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
    lat: 18.5718,
    lng: 73.9149,
    googleMapsUrl: "https://maps.app.goo.gl/VR1T7UwD58H6UGa49",
    price: "₹25,000",
    priceNum: 25000,
    priceDouble: "₹25,000",
    priceSingle: "₹27,000",
    rating: 4.9,
    reviews: 148,
    gender: "Boys & Girls (Separate Towers)",
    roomTypes: ["Girls' Twin", "Boys' Twin"],
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
    description:
      "Gated society across 4 towers (A, B, C, D) with 12 floors and four 3BHK units per floor. Gender-specific towers and apartments (Boys-only and Girls-only). Includes breakfast & dinner, twice-weekly laundry (up to 5 kg), AC rooms, attached washrooms, and fully equipped kitchens.",
    highlights: ["150m to SLS Campus Gate", "Breakfast & Dinner Included", "Laundry Included (2x/wk, 5kg)", "Opposite-Gender Visitors Not Allowed"],
    link: "/student-housing/shubh-gateway",
    contactPhone: "7057897430",
    coupleFriendly: false,
    lockInPeriod: "Annual",
    foodPlan: "Included – Breakfast and Dinner included",
    laundryPlan: "Included – Twice a week, up to 5 kg",
    airConditioning: true,
    isGuesthouse: false,
    totalBedsInfo: "42 Girls' Twin Beds, 24 Boys' Twin Beds",
    depositInfo: "₹40,000 (Fully refundable subject to 30 days notice & no damage; No cancellation refund)",
  },

  // 5. BRINDAVAN
  {
    id: "brindavan",
    name: "Brindavan",
    category: "Student Accommodation",
    city: "Pune",
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
    lat: 18.5645,
    lng: 73.9082,
    googleMapsUrl: "https://maps.app.goo.gl/MJWzeZj1LZHcyn1V9",
    price: "₹27,000",
    priceNum: 27000,
    priceDouble: "₹27,000",
    priceSingle: "₹32,000",
    rating: 4.8,
    reviews: 134,
    gender: "Boys and Girls",
    roomTypes: ["Twin", "Private"],
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
    description:
      "Standalone 4-storey building with four 1BHK units per floor. Each 1BHK accommodates 3 students (one twin room and one single room) with separate entrances, private washroom, and co-working space. Features all 3 meals (breakfast, lunch, dinner) and laundry twice weekly.",
    highlights: ["400m to SCMS Campus", "All 3 Meals Included (BF, Lunch, Dinner)", "Laundry Included (2x/wk, 5kg)", "AC Rooms & Private Washrooms"],
    link: "/student-housing/brindavan",
    contactPhone: "9637019838",
    coupleFriendly: false,
    lockInPeriod: "Annual",
    foodPlan: "Included – Breakfast, Lunch, and Dinner included",
    laundryPlan: "Included – Twice a week, up to 5 kg",
    airConditioning: true,
    isGuesthouse: false,
    totalBedsInfo: "32 Twin Beds, 16 Private Beds",
    depositInfo: "₹30,000 (Fully refundable subject to 30 days notice & no damage; No cancellation refund)",
  },

  // 6. VAIRAGYA
  {
    id: "vairagya",
    name: "Vairagya",
    category: "Student Accommodation",
    city: "Pune",
    tag: "Best Suited for Symbiosis University, Lavale",
    outcome: "Meals included • Triple & twin sharing from ₹15k",
    monogram: "grad",
    stat1Value: "₹15,000",
    stat1Label: "Triple Sharing /month",
    stat2Value: "₹17,000",
    stat2Label: "Twin Sharing /month",
    location: "Near Symbiosis University, Lavale",
    subLocation: "500m to Symbiosis University & ISBM",
    address: "Near Symbiosis University, Lavale, Pune (Complete street address pending owner confirmation)",
    lat: 18.535,
    lng: 73.732,
    googleMapsUrl: "https://maps.google.com/?q=Symbiosis+University+Lavale",
    price: "₹15,000",
    priceNum: 15000,
    priceDouble: "₹17,000",
    priceSingle: "₹15,000",
    rating: 4.9,
    reviews: 128,
    gender: "Boys and Girls",
    roomTypes: ["Triple", "Twin"],
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
    description:
      "Standalone building with five spacious 1BHK units. Every 1BHK accommodates 3 students in triple-sharing configuration, with select units reserved for twin-sharing. Features a running mess with in-house cooking, breakfast and dinner included, attached washrooms, and zero AC.",
    highlights: ["500m to Symbiosis University Lavale", "Breakfast & Dinner Included", "In-House Mess", "Self-Use Washing Machines"],
    link: "/student-housing/vairagya",
    contactPhone: "7387614629",
    coupleFriendly: false,
    lockInPeriod: "Annual",
    foodPlan: "Included – Breakfast and Dinner included (Running in-house mess)",
    laundryPlan: "Self-use washing machines available; paid laundry service also available",
    airConditioning: false,
    isGuesthouse: false,
    totalBedsInfo: "24 Twin Beds, 27 Triple Beds",
    depositInfo: "₹20,000 (Fully refundable subject to 30 days notice & no damage; No cancellation refund)",
  },

  // =============================================================
  // C. COMPANY GUESTHOUSES (NOT REGULAR PG ACCOMMODATION)
  // =============================================================

  // 7. PARK ISLAND
  {
    id: "park-island",
    name: "Park Island",
    category: "Company Guesthouse",
    city: "Pune",
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
    lat: 18.552,
    lng: 73.896,
    googleMapsUrl: "https://maps.app.goo.gl/8h4ivEDdFCMz5kFg9",
    price: "₹20,000",
    priceNum: 20000,
    priceDouble: "₹20,000",
    priceSingle: "NA",
    rating: 4.9,
    reviews: 142,
    gender: "Corporate Employees Only",
    roomTypes: ["Twin"],
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
    description:
      "Gated society with multiple fully furnished 3BHK apartments operated strictly as company guesthouses for employees of one dedicated company. Not available as regular public PG or student accommodation.",
    highlights: ["Company Guesthouse Only", "Fully Furnished 3BHK", "AC Rooms & Daily Cleaning", "Not Open as Public PG"],
    link: "/coliving/park-island",
    contactPhone: "7420040241",
    coupleFriendly: false,
    lockInPeriod: "No",
    foodPlan: "Available and optional (confirm details with management)",
    laundryPlan: "Self-use washing machines available",
    airConditioning: true,
    isGuesthouse: true,
    totalBedsInfo: "12 Twin Beds (Private rooms NA)",
    depositInfo: "₹20,000 (Fully refundable subject to 30 days notice & no damage)",
  },

  // 8. PILLAR HOMES
  {
    id: "pillar-homes",
    name: "Pillar Homes",
    category: "Company Guesthouse",
    city: "Pune",
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
    lat: 18.562,
    lng: 73.911,
    googleMapsUrl: "https://maps.app.goo.gl/V4JFnudQ7dCT7euB7",
    price: "₹25,000",
    priceNum: 25000,
    priceDouble: "₹25,000",
    priceSingle: "NA",
    rating: 4.9,
    reviews: 136,
    gender: "Corporate Employees Only",
    roomTypes: ["Twin"],
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
    description:
      "Gated society featuring multiple fully furnished 3BHK apartments operated strictly as company guesthouses for employees of one dedicated company. Not available as regular public PG or student accommodation.",
    highlights: ["Company Guesthouse Only", "Fully Furnished 3BHK", "AC Rooms & Attached Washrooms", "Not Open as Public PG"],
    link: "/coliving/pillar-homes",
    contactPhone: "7420040241",
    coupleFriendly: false,
    lockInPeriod: "No",
    foodPlan: "Available and optional",
    laundryPlan: "Self-use washing machines available",
    airConditioning: true,
    isGuesthouse: true,
    totalBedsInfo: "27 Twin Beds (Private rooms NA)",
    depositInfo: "₹25,000 (Fully refundable subject to 30 days notice & no damage)",
  },

  // 9. SUYOG ENCLAVE
  {
    id: "suyog-enclave",
    name: "Suyog Enclave",
    category: "Company Guesthouse",
    city: "Pune",
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
    lat: 18.563,
    lng: 73.91,
    googleMapsUrl: "https://maps.app.goo.gl/2vLb3jCP81qCEZuL9",
    price: "₹25,000",
    priceNum: 25000,
    priceDouble: "₹25,000",
    priceSingle: "NA",
    rating: 4.8,
    reviews: 119,
    gender: "Corporate Employees Only",
    roomTypes: ["Twin"],
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
    description:
      "Gated society with multiple 3BHK apartments operated strictly as company guesthouses for employees of one dedicated company. Not available as regular public PG or student accommodation.",
    highlights: ["Company Guesthouse Only", "200m to Bajaj Finserv", "AC Rooms & Attached Washrooms", "Not Open as Public PG"],
    link: "/coliving/suyog",
    contactPhone: "7420040241",
    coupleFriendly: false,
    lockInPeriod: "No",
    foodPlan: "Available and optional",
    laundryPlan: "Self-use washing machines available",
    airConditioning: true,
    isGuesthouse: true,
    totalBedsInfo: "18 Twin Beds (Private rooms NA)",
    depositInfo: "₹25,000 (Fully refundable subject to 30 days notice & no damage)",
  },
];

export const VIMAN_NAGAR_CENTER = {
  lat: 18.5679,
  lng: 73.9143,
  defaultZoom: 14,
};

