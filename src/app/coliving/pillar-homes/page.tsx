import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

export const metadata = {
  title: "Pillar Homes Co-Living | Designer Stays in Viman Nagar - Reforbs",
  description:
    "Pillar Homes - Scandinavian minimalist designer co-living in the heart of Viman Nagar cafe strip. Zero broker fee, private kitchens, high-speed Wi-Fi.",
};

const property: PropertyData = {
  id: "pillar-homes",
  name: "Pillar Homes Co-Living",
  category: "Co-Living",
  tagline: "Architectural Designer Living in the Heart of the Cafe Strip",
  address: "Near Cafe Peter, Central Viman Nagar, Pune",
  landmark: "Walking Distance to Cafes, Gyms & Phoenix Mall",
  rating: "4.9",
  reviewsCount: 136,
  priceSingle: "₹22,000",
  priceDouble: "₹15,000",
  heroImage: "/images/properties/pillar-homes/image-1.jpg",
  galleryImages: [
    "/images/properties/pillar-homes/image-1.jpg",
    "/images/properties/pillar-homes/image-2.jpg",
    "/images/properties/pillar-homes/image-3.jpg",
    "/images/properties/pillar-homes/image-4.jpg",
    "/images/properties/pillar-homes/image-5.jpg",
    "/images/properties/pillar-homes/image-6.jpg",
  ],
  description:
    "Pillar Homes offers architecturally refined living spaces in central Viman Nagar. Features clean minimalist wooden finishes, premium en-suite bathrooms, ergonomic work setups, and zero broker interference, nestled steps from the vibrant neighborhood dining scene.",
  roomTypes: [
    {
      type: "Double Occupancy",
      price: "₹15,000",
      deposit: "1 Month Rent",
      features: [
        "Designer custom-built wooden beds",
        "Individual tall wardrobes with mirror",
        "Dedicated work desks with task illumination",
        "En-suite designer washroom with 24/7 geyser",
        "High-speed fiber connectivity",
      ],
    },
    {
      type: "Single Occupancy",
      price: "₹22,000",
      deposit: "1 Month Rent",
      features: [
        "Private architectural master bedroom",
        "Queen size bed with posture-care mattress",
        "Spacious private study suite",
        "Designer private bathroom",
        "Balcony with neighborhood views",
      ],
    },
  ],
  amenities: [
    { name: "Minimalist Scandinavian Design", included: true },
    { name: "Dual-Band Optical Wi-Fi", included: true },
    { name: "Daily Professional Cleaning", included: true },
    { name: "Private Kitchen Freedom", included: true },
    { name: "Heart of Cafe Strip Location", included: true },
    { name: "Zero Moral Policing / Curfews", included: true },
    { name: "Full Power Backup", included: true },
    { name: "Direct Host Support", included: true },
  ],
  landmarks: [
    { name: "Viman Nagar Cafe Strip & Dining", distance: "1 min walk (50m)" },
    { name: "Joggers Park & Recreation", distance: "4 mins walk (300m)" },
    { name: "Phoenix Marketcity", distance: "5 mins drive (1.5 km)" },
    { name: "Symbiosis Campuses", distance: "6 mins walk (500m)" },
    { name: "Pune International Airport", distance: "8 mins drive (2.7 km)" },
  ],
};

export default function PillarHomesPage() {
  return <PropertyDetailView property={property} />;
}
