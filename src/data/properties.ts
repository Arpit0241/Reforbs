export interface PropertyItem {
  id: string;
  name: string;
  category: "Student Housing" | "Co-Living";
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
  // -------------------------------------------------------------
  // STUDENT HOUSING (Pune)
  // -------------------------------------------------------------

  // 1. Shubh Gateway (Opp. SLS)
  {
    id: "shubh-gateway",
    name: "Shubh Gateway (Opp. SLS)",
    category: "Student Housing",
    city: "Pune",
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
      "Directly opposite Symbiosis Law School. Purpose-built for law students needing quiet study sanctuaries, zero daily commute, high-speed fiber, and round-the-clock supportive hosts.",
    highlights: ["Opposite SLS Campus", "Quiet Study Zone", "Zero Commute", "Private Kitchens"],
    link: "/student-housing/shubh-gateway",
  },

  // 2. Sakore Nagar (SCMC / SID / SCMS)
  {
    id: "sakore-nagar",
    name: "Reforbs Living Sakore Nagar (SCMC/SID)",
    category: "Student Housing",
    city: "Pune",
    tag: "Near SCMS, SCMC & Symbiosis Hub",
    outcome: "Balcony bedrooms • Daily housekeeping included",
    monogram: "grad",
    stat1Value: "₹12,000",
    stat1Label: "Starting Rent /mo",
    stat2Value: "3 Mins",
    stat2Label: "Walk to SCMC Campus",
    location: "Sakore Nagar, Viman Nagar, Pune",
    subLocation: "3 mins walk to SCMC & SCMS campus",
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
      "Modern student residence nestled in peaceful Sakore Nagar, Viman Nagar. Features spacious balconies, daily housekeeping, high-speed fiber, and full cooking freedom.",
    highlights: ["3 Mins to SCMC & SCMS", "Balcony Bedrooms", "Daily Housekeeping", "Laundry Care"],
    link: "/student-housing/sakore-nagar",
  },

  // 3. Vairagya
  {
    id: "vairagya",
    name: "Reforbs Vairagya",
    category: "Student Housing",
    city: "Pune",
    tag: "Serene Student Sanctuary",
    outcome: "Quiet study suites • Balconies & zero curfew",
    monogram: "grad",
    stat1Value: "₹13,000",
    stat1Label: "Starting Rent /mo",
    stat2Value: "4 Mins",
    stat2Label: "Walk to Symbiosis Campuses",
    location: "Viman Nagar, Pune",
    subLocation: "Near Symbiosis International School & Datta Mandir",
    address: "Clover Park, Near Symbiosis Campus, Viman Nagar, Pune, Maharashtra 411014",
    lat: 18.5675,
    lng: 73.916,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=18.5675,73.9160",
    price: "₹13,000",
    priceNum: 13000,
    priceDouble: "₹13,000",
    priceSingle: "₹19,000",
    rating: 4.9,
    reviews: 128,
    gender: "Co-Ed",
    roomTypes: ["Single", "Double"],
    cardGradient: "from-[#115E59] via-[#044E46] to-[#022D28]",
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
      "Vairagya provides a peaceful, distraction-free environment for students. Sunlit rooms, private study desks, high-speed internet, and relaxed common areas foster academic excellence and balanced living.",
    highlights: ["Quiet Study Sanctuary", "Zero Curfew Penalties", "High-Speed Wi-Fi", "Private Kitchen Access"],
    link: "/student-housing/vairagya",
  },

  // -------------------------------------------------------------
  // CO-LIVING (Pune)
  // -------------------------------------------------------------

  // 4. Moksha
  {
    id: "moksha",
    name: "Moksha",
    category: "Co-Living",
    city: "Pune",
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
      "Curated co-living spaces with bohemian green patios, serene ambiance, and private workstations for creators, consultants, and IT pros in Pune.",
    highlights: ["Zen Terrace Garden", "Private Work Desks", "Full Power Backup", "Freedom to Cook"],
    link: "/coliving/moksha",
  },

  // 5. Shubh Nirvana
  {
    id: "shubh-nirvana",
    name: "Shubh Nirvana",
    category: "Co-Living",
    city: "Pune",
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
      "Our most vibrant co-living property inspired by the backpacker hostel cult. Glow lounges, rooftop gatherings, community BBQs, pool table, and friends welcome anytime.",
    highlights: ["UV Neon Chill Lounge", "Pool Table & Games", "Community Dinners", "No Bans or Curfews"],
    link: "/coliving/shubh-nirvana",
  },

  // 6. Vipasana
  {
    id: "vipasana",
    name: "Vipasana",
    category: "Co-Living",
    city: "Pune",
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
      "Vipasana balances high-energy career growth with calming, mindful living. Spotless rooms, ergonomic work suites, high-speed fiber, and relaxed social lounges.",
    highlights: ["High-Focus Work Suites", "Daily Cleaning", "Zero Moral Policing", "24/7 Security"],
    link: "/coliving/vipasana",
  },

  // 7. Suyog
  {
    id: "suyog",
    name: "Suyog Co-Living",
    category: "Co-Living",
    city: "Pune",
    tag: "Premium Work-Life Residence",
    outcome: "Spacious air-conditioned rooms • Gigabit optical fiber",
    monogram: "building",
    stat1Value: "₹14,500",
    stat1Label: "Starting Rent /mo",
    stat2Value: "100%",
    stat2Label: "Cooking Freedom",
    location: "Viman Nagar, Pune",
    subLocation: "Near Dutta Mandir Chowk & Airport Road",
    address: "Near Dutta Mandir Chowk, Viman Nagar, Pune, Maharashtra 411014",
    lat: 18.5652,
    lng: 73.915,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=18.5652,73.9150",
    price: "₹14,500",
    priceNum: 14500,
    priceDouble: "₹14,500",
    priceSingle: "₹21,500",
    rating: 4.8,
    reviews: 119,
    gender: "Co-Ed",
    roomTypes: ["Single", "Double"],
    cardGradient: "from-[#0F766E] via-[#0D5F58] to-[#032926]",
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
      "Suyog delivers elevated living for tech professionals and consultants. Fully furnished rooms with high ceilings, private kitchens, dual-band Wi-Fi, and convenient proximity to Pune Airport and IT business parks.",
    highlights: ["Air Conditioned Rooms", "Gigabit Fiber", "Close to Airport", "Housekeeping Support"],
    link: "/coliving/suyog",
  },

  // 8. Park Island
  {
    id: "park-island",
    name: "Reforbs Park Island",
    category: "Co-Living",
    city: "Pune",
    tag: "Lush Green Community Living",
    outcome: "Balcony suites • Resort-style green views",
    monogram: "compass",
    stat1Value: "₹15,500",
    stat1Label: "Starting Rent /mo",
    stat2Value: "Pool & Gym",
    stat2Label: "In-Premise Access",
    location: "Viman Nagar, Pune",
    subLocation: "Park Island Enclave, Viman Nagar",
    address: "Park Island Enclave, Off Airport Road, Viman Nagar, Pune, Maharashtra 411014",
    lat: 18.5705,
    lng: 73.9175,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=18.5705,73.9175",
    price: "₹15,500",
    priceNum: 15500,
    priceDouble: "₹15,500",
    priceSingle: "₹23,000",
    rating: 4.9,
    reviews: 142,
    gender: "Co-Ed",
    roomTypes: ["Single", "Double"],
    cardGradient: "from-[#047857] via-[#065F46] to-[#022D21]",
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
      "Park Island blends community vibrancy with peaceful garden aesthetics. Overlooking green lawns with spacious balconies, pool table, and community events, it offers an inspiring haven after work.",
    highlights: ["Resort Style Views", "Private Balconies", "Swimming Pool & Gym", "High-Speed Wi-Fi"],
    link: "/coliving/park-island",
  },

  // 9. Pillar Homes
  {
    id: "pillar-homes",
    name: "Pillar Homes Co-Living",
    category: "Co-Living",
    city: "Pune",
    tag: "Boutique Architectural Stays",
    outcome: "Modern Scandinavian interiors • Full kitchen independence",
    monogram: "building",
    stat1Value: "₹15,000",
    stat1Label: "Starting Rent /mo",
    stat2Value: "100%",
    stat2Label: "Privacy First Design",
    location: "Viman Nagar, Pune",
    subLocation: "Heart of Viman Nagar Cafe Strip",
    address: "Near Cafe Peter, Viman Nagar, Pune, Maharashtra 411014",
    lat: 18.566,
    lng: 73.912,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=18.5660,73.9120",
    price: "₹15,000",
    priceNum: 15000,
    priceDouble: "₹15,000",
    priceSingle: "₹22,000",
    rating: 4.9,
    reviews: 136,
    gender: "Co-Ed",
    roomTypes: ["Single", "Double"],
    cardGradient: "from-[#0284C7] via-[#0369A1] to-[#082F49]",
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
      "Architecturally refined living spaces in central Viman Nagar. Pillar Homes features minimalist wooden finishes, premium en-suite bathrooms, ergonomic work setups, and zero broker interference.",
    highlights: ["Boutique Architecture", "Cafe Strip Location", "Dual-Band Wi-Fi", "Zero Brokerage"],
    link: "/coliving/pillar-homes",
  },

  // 10. Langston Downtown
  {
    id: "langston-downtown",
    name: "Langston Downtown",
    category: "Co-Living",
    city: "Pune",
    tag: "Executive Co-Living Suites",
    outcome: "Luxury private suites • High-focus business lounge",
    monogram: "building",
    stat1Value: "₹16,000",
    stat1Label: "Starting Rent /mo",
    stat2Value: "Top Rated",
    stat2Label: "For IT & Consulting",
    location: "Viman Nagar, Pune",
    subLocation: "Direct access to Phoenix & Kharadi IT Hubs",
    address: "Downtown Central, Near Hyatt Regency & Airport Road, Viman Nagar, Pune 411014",
    lat: 18.5585,
    lng: 73.914,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=18.5585,73.9140",
    price: "₹16,000",
    priceNum: 16000,
    priceDouble: "₹16,000",
    priceSingle: "₹24,000",
    rating: 5.0,
    reviews: 177,
    gender: "Co-Ed",
    roomTypes: ["Single", "Double"],
    cardGradient: "from-[#0F766E] via-[#115E59] to-[#042F2C]",
    coverImage: "/images/properties/langston-downtown/image-1.jpg",
    gallery: [
      "/images/properties/langston-downtown/image-1.jpg",
      "/images/properties/langston-downtown/image-2.jpg",
      "/images/properties/langston-downtown/image-3.jpg",
      "/images/properties/langston-downtown/image-4.jpg",
      "/images/properties/langston-downtown/image-5.jpg",
      "/images/properties/langston-downtown/image-6.jpg",
    ],
    description:
      "Our premier executive residence for corporate professionals and startup leaders. Features upscale suites, dedicated soundproof phone booths for remote calls, and direct access to IT hubs.",
    highlights: ["Executive Suites", "Soundproof Work Booths", "Private Balconies", "Airport Proximity"],
    link: "/coliving/langston-downtown",
  },
];

export const VIMAN_NAGAR_CENTER = {
  lat: 18.5668,
  lng: 73.9135,
  defaultZoom: 14,
};
