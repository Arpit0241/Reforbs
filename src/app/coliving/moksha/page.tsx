import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

export const metadata = {
  title: "Reforbs Moksha | Bohemian Garden Co-Living Viman Nagar Pune",
  description:
    "Reforbs Moksha - Serene garden patios, fairy-lit rooftop terraces, private kitchens & gym in Viman Nagar, Pune. Co-living for creative minds and tech pros.",
};

const property: PropertyData = {
  id: "moksha",
  name: "Reforbs Moksha",
  category: "Co-Living",
  tagline: "Serene & Sophisticated Co-Living with Bohemian Garden Patios",
  address: "Row House Lane, Near Joggers Park, Viman Nagar, Pune",
  landmark: "Near Viman Nagar Joggers Park & Symbiosis",
  rating: "4.9",
  reviewsCount: 164,
  priceSingle: "₹22,500",
  priceDouble: "₹15,000",
  heroImage: "/images/image7.png",
  galleryImages: [
    "/images/image7.png",
    "/images/image3.png",
    "/images/image4.png",
    "/images/image6.png",
    "/images/image5.png",
  ],
  description:
    "Reforbs Moksha is created for young professionals, creators, and consultants who crave both deep productivity and soulful relaxation. Featuring bohemian pallet seating on open green terraces, fairy-lit rooftop pergolas, private culinary kitchens, and a close-knit community where meaningful friendships thrive without corporate formality.",
  roomTypes: [
    {
      type: "Double Occupancy",
      price: "₹15,000",
      deposit: "1 Month Rent",
      features: [
        "Two luxury wooden beds with posture mattresses",
        "Dual wardrobes with full-length vanity mirror",
        "Co-working desk setup with fiber internet",
        "Attached bathroom with 24/7 hot geyser",
        "Garden or courtyard view",
      ],
    },
    {
      type: "Single Occupancy",
      price: "₹22,500",
      deposit: "1 Month Rent",
      features: [
        "Private executive room all to yourself",
        "Queen size bed with plush headboard",
        "Ergonomic work desk & dual display space",
        "Private balcony with outdoor bohemian seating",
        "Private en-suite luxury bathroom",
      ],
    },
  ],
  amenities: [
    { name: "Dual-Band Fiber Wi-Fi", icon: "wifi", included: true },
    { name: "Daily Professional Care", icon: "sparkles", included: true },
    { name: "In-House Gym & Fitness", icon: "dumbbell", included: true },
    { name: "Bohemian Garden Terraces", icon: "sun", included: true },
    { name: "Private Kitchen Facilities", icon: "utensils", included: true },
    { name: "Power Inverter Backup", icon: "power", included: true },
    { name: "Community Yoga & BBQ", icon: "users", included: true },
    { name: "Zero Lock-in Guarantee", icon: "shield", included: true },
  ],
  landmarks: [
    { name: "Viman Nagar Joggers Park", distance: "2 mins walk (150m)" },
    { name: "Phoenix Marketcity", distance: "5 mins drive (1.4 km)" },
    { name: "Pune International Airport", distance: "7 mins drive (2.3 km)" },
    { name: "Symbiosis SLS & SCMS", distance: "6 mins walk (500m)" },
    { name: "EON IT Free Zone", distance: "14 mins drive (5.6 km)" },
    { name: "Cafe Peter & Local Eateries", distance: "2 mins walk (100m)" },
  ],
};

export default function MokshaPage() {
  return <PropertyDetailView property={property} />;
}
