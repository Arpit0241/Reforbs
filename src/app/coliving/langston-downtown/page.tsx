import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

export const metadata = {
  title: "Langston Downtown | Executive Co-Living in Viman Nagar - Reforbs",
  description:
    "Langston Downtown - Premier executive co-living for corporate professionals & founders. Soundproof work booths, business lounge, private kitchens, zero lock-ins.",
};

const property: PropertyData = {
  id: "langston-downtown",
  name: "Langston Downtown",
  category: "Co-Living",
  tagline: "Premier Executive Co-Living Suites for Tech & Corporate Leaders",
  address: "Downtown Central, Near Hyatt Regency & Airport Road, Viman Nagar, Pune",
  landmark: "Direct Access to Phoenix & Kharadi IT Hubs",
  rating: "5.0",
  reviewsCount: 177,
  priceSingle: "₹24,000",
  priceDouble: "₹16,000",
  heroImage: "/images/properties/langston-downtown/image-1.jpg",
  galleryImages: [
    "/images/properties/langston-downtown/image-1.jpg",
    "/images/properties/langston-downtown/image-2.jpg",
    "/images/properties/langston-downtown/image-3.jpg",
    "/images/properties/langston-downtown/image-4.jpg",
    "/images/properties/langston-downtown/image-5.jpg",
    "/images/properties/langston-downtown/image-6.jpg",
  ],
  description:
    "Langston Downtown is our top-tier executive residence tailored for corporate professionals, tech leads, and founders in Pune. Enjoy upscale private suites, soundproof phone booths for confidential client meetings, ergonomic work setups, and seamless transit to Kharadi and Yerawada IT corridors.",
  roomTypes: [
    {
      type: "Double Occupancy",
      price: "₹16,000",
      deposit: "1 Month Rent",
      features: [
        "Two luxury executive beds with posture-care mattresses",
        "Individual wooden wardrobes with digital safe",
        "Dual workstation desks with ergonomic chairs",
        "Attached luxury bathroom with 24/7 hot water geyser",
        "High-speed redundant optical fiber included",
      ],
    },
    {
      type: "Single Occupancy",
      price: "₹24,000",
      deposit: "1 Month Rent",
      features: [
        "100% executive single occupant privacy",
        "King/Queen bed with premium linen & headboard",
        "Executive private office desk setup",
        "Private ensuite luxury bathroom",
        "Private balcony overlooking downtown Viman Nagar",
      ],
    },
  ],
  amenities: [
    { name: "Executive Business Lounge", included: true },
    { name: "Soundproof Call Booths", included: true },
    { name: "Dual Redundant Optical Wi-Fi", included: true },
    { name: "Daily Professional Cleaning", included: true },
    { name: "Private Modular Kitchens", included: true },
    { name: "Zero Moral Policing / Curfews", included: true },
    { name: "Full Power Backup", included: true },
    { name: "Direct Host VIP Support", included: true },
  ],
  landmarks: [
    { name: "Hyatt Regency & Central Hub", distance: "2 mins walk (150m)" },
    { name: "Phoenix Marketcity", distance: "3 mins walk (250m)" },
    { name: "Pune International Airport", distance: "5 mins drive (1.9 km)" },
    { name: "Kharadi EON Free Zone", distance: "10 mins drive (4.2 km)" },
    { name: "Yerawada Business Bay", distance: "8 mins drive (3.2 km)" },
  ],
};

export default function LangstonDowntownPage() {
  return <PropertyDetailView property={property} />;
}
