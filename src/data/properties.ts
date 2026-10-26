export interface PropertyItem {
  id: string;
  name: string;
  category: "Student Housing" | "Co-Living";
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
  gender: "Co-Ed" | "Unisex";
  roomTypes: ("Single" | "Double")[];
  cardGradient: string;
  coverImage: string;
  gallery: string[];
  description: string;
  highlights: string[];
  link: string;
}

export const propertiesData: PropertyItem[] = [
  // 1. Shubh Gateway (Opposite Symbiosis Law School)
  {
    id: "shubh-gateway",
    name: "Shubh Gateway",
    category: "Student Housing",
    tag: "Opposite Symbiosis Law School",
    outcome: "Zero-commute legal sanctuary • Opp. SLS Gate",
    monogram: "grad",
    stat1Value: "₹12,500",
    stat1Label: "Starting Rent /mo",
    stat2Value: "1 Min",
    stat2Label: "Walk to SLS Campus",
    location: "Viman Nagar, Pune",
    subLocation: "Directly opposite SLS Campus Gate",
    address: "Opp. Symbiosis Law School, VIP Road, Viman Nagar, Pune, Maharashtra 411014",
    lat: 18.5718,
    lng: 73.9149,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=18.5718,73.9149",
    price: "₹12,500",
    priceNum: 12500,
    priceDouble: "₹12,500",
    priceSingle: "₹18,000",
    rating: 4.9,
    reviews: 148,
    gender: "Co-Ed",
    roomTypes: ["Single", "Double"],
    cardGradient: "from-[#006E6E] via-[#004A4A] to-[#032323]",
    coverImage: "/assets/pdf/extracted/page-7-image-1-X4.jpg",
    gallery: [
      "/assets/pdf/extracted/page-7-image-1-X4.jpg",
      "/assets/pdf/extracted/page-7-image-2-X6.jpg",
      "/assets/pdf/extracted/page-7-image-3-X7.jpg",
      "/assets/pdf/extracted/page-7-image-4-X8.jpg",
    ],
    description:
      "Directly opposite Symbiosis Law School. Purpose-built for law students needing quiet study sanctuaries, zero daily commute, high-speed fiber, and round-the-clock supportive hosts.",
    highlights: ["Opposite SLS Campus", "Quiet Study Zone", "Zero Commute", "Private Kitchens"],
    link: "/student-housing/shubh-gateway",
  },

  // 2. Sakore Nagar (Near SCMS)
  {
    id: "sakore-nagar",
    name: "Reforbs Living Sakore Nagar",
    category: "Student Housing",
    tag: "Near SCMS & Symbiosis Hub",
    outcome: "Balcony bedrooms • Daily housekeeping included",
    monogram: "grad",
    stat1Value: "₹12,000",
    stat1Label: "Starting Rent /mo",
    stat2Value: "3 Mins",
    stat2Label: "Walk to SCMS Campus",
    location: "Sakore Nagar, Viman Nagar, Pune",
    subLocation: "3 mins walk to SCMS campus",
    address: "Lane 2, Sakore Nagar, Viman Nagar, Pune, Maharashtra 411014",
    lat: 18.5645,
    lng: 73.9082,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=18.5645,73.9082",
    price: "₹12,000",
    priceNum: 12000,
    priceDouble: "₹12,000",
    priceSingle: "₹17,500",
    rating: 4.8,
    reviews: 134,
    gender: "Co-Ed",
    roomTypes: ["Single", "Double"],
    cardGradient: "from-[#0F766E] via-[#115E59] to-[#042F2C]",
    coverImage: "/assets/pdf/extracted/page-6-image-1-X4.jpg",
    gallery: [
      "/assets/pdf/extracted/page-6-image-1-X4.jpg",
      "/assets/pdf/extracted/page-6-image-2-X6.jpg",
      "/assets/pdf/extracted/page-6-image-3-X7.jpg",
      "/assets/pdf/extracted/page-6-image-4-X8.jpg",
    ],
    description:
      "Modern student residence nestled in peaceful Sakore Nagar, Viman Nagar. Features spacious balconies, daily housekeeping, high-speed fiber, and full cooking freedom.",
    highlights: ["3 Mins to SCMS", "Balcony Bedrooms", "Daily Housekeeping", "Laundry Care"],
    link: "/student-housing/sakore-nagar",
  },

  // 3. Moksha (Near Joggers Park)
  {
    id: "moksha",
    name: "Moksha",
    category: "Co-Living",
    tag: "Bohemian Terraces & Patios",
    outcome: "Fairy-lit rooftop gardens • Work lounges",
    monogram: "compass",
    stat1Value: "₹14,500",
    stat1Label: "Starting Rent /mo",
    stat2Value: "100%",
    stat2Label: "Cooking Freedom",
    location: "Viman Nagar, Pune",
    subLocation: "Near Joggers Park & Cafes",
    address: "Near Joggers Park, Datta Mandir Chowk, Viman Nagar, Pune, Maharashtra 411014",
    lat: 18.5638,
    lng: 73.9165,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=18.5638,73.9165",
    price: "₹14,500",
    priceNum: 14500,
    priceDouble: "₹14,500",
    priceSingle: "₹22,000",
    rating: 4.9,
    reviews: 164,
    gender: "Co-Ed",
    roomTypes: ["Single", "Double"],
    cardGradient: "from-[#047857] via-[#064E3B] to-[#02241B]",
    coverImage: "/assets/pdf/extracted/page-3-image-1-X4.jpg",
    gallery: [
      "/assets/pdf/extracted/page-3-image-1-X4.jpg",
      "/assets/pdf/extracted/page-3-image-2-X6.jpg",
      "/assets/pdf/extracted/page-3-image-3-X7.jpg",
      "/assets/pdf/extracted/page-3-image-4-X8.jpg",
    ],
    description:
      "Curated co-living spaces with bohemian green patios, serene ambiance, and private workstations for creators, consultants, and IT pros in Pune.",
    highlights: ["Zen Terrace Garden", "Private Work Desks", "Full Power Backup", "Freedom to Cook"],
    link: "/coliving/moksha",
  },

  // 4. Vipasana (Clover Park)
  {
    id: "vipasana",
    name: "Vipasana",
    category: "Co-Living",
    tag: "Mindful Urban Sanctuary",
    outcome: "High-focus work suites • Gigabit optical fiber",
    monogram: "building",
    stat1Value: "₹14,000",
    stat1Label: "Starting Rent /mo",
    stat2Value: "4.9 ★",
    stat2Label: "Resident Rating (152)",
    location: "Viman Nagar, Pune",
    subLocation: "Clover Park, Viman Nagar",
    address: "Clover Park, near Symbiosis International School, Viman Nagar, Pune, Maharashtra 411014",
    lat: 18.5692,
    lng: 73.9198,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=18.5692,73.9198",
    price: "₹14,000",
    priceNum: 14000,
    priceDouble: "₹14,000",
    priceSingle: "₹21,000",
    rating: 4.9,
    reviews: 152,
    gender: "Co-Ed",
    roomTypes: ["Single", "Double"],
    cardGradient: "from-[#0E7490] via-[#155E75] to-[#082F3B]",
    coverImage: "/assets/pdf/extracted/page-4-image-1-X4.jpg",
    gallery: [
      "/assets/pdf/extracted/page-4-image-1-X4.jpg",
      "/assets/pdf/extracted/page-4-image-2-X6.jpg",
      "/assets/pdf/extracted/page-4-image-3-X7.jpg",
      "/assets/pdf/extracted/page-2-image-1-X4.jpg",
    ],
    description:
      "Vipasana balances high-energy career growth with calming, mindful living. Spotless rooms, ergonomic work suites, high-speed fiber, and relaxed social lounges.",
    highlights: ["High-Focus Work Suites", "Daily Cleaning", "Zero Moral Policing", "24/7 Security"],
    link: "/coliving/vipasana",
  },

  // 5. Shubh Nirvana (Near Phoenix Marketcity)
  {
    id: "shubh-nirvana",
    name: "Shubh Nirvana",
    category: "Co-Living",
    tag: "Flagship Hippie & Backpacker Lounge",
    outcome: "UV neon chill lounge • Pool table & BBQs",
    monogram: "building",
    stat1Value: "₹15,000",
    stat1Label: "Starting Rent /mo",
    stat2Value: "Zero",
    stat2Label: "Rigid Curfews / Bans",
    location: "Viman Nagar, Pune",
    subLocation: "Near Phoenix Marketcity & IT Corridor",
    address: "Viman Nagar, adjacent to Phoenix Marketcity, Pune, Maharashtra 411014",
    lat: 18.5605,
    lng: 73.9182,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=18.5605,73.9182",
    price: "₹15,000",
    priceNum: 15000,
    priceDouble: "₹15,000",
    priceSingle: "₹22,500",
    rating: 5.0,
    reviews: 189,
    gender: "Co-Ed",
    roomTypes: ["Single", "Double"],
    cardGradient: "from-[#164E63] via-[#0E3846] to-[#031F27]",
    coverImage: "/assets/pdf/extracted/page-7-image-5-X9.jpg",
    gallery: [
      "/assets/pdf/extracted/page-7-image-5-X9.jpg",
      "/assets/pdf/extracted/page-7-image-6-X10.jpg",
      "/assets/pdf/extracted/page-2-image-2-X6.jpg",
      "/assets/pdf/extracted/page-2-image-3-X7.jpg",
    ],
    description:
      "Our most vibrant co-living property inspired by the backpacker hostel cult. Glow lounges, rooftop gatherings, community BBQs, pool table, and friends welcome anytime.",
    highlights: ["UV Neon Chill Lounge", "Pool Table & Games", "Community Dinners", "No Bans or Curfews"],
    link: "/coliving/shubh-nirvana",
  },
];

export const VIMAN_NAGAR_CENTER = {
  lat: 18.5668,
  lng: 73.9135,
  defaultZoom: 14,
};
