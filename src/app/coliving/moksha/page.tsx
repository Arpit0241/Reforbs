import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

export const metadata = {
  title: "Moksha | Bohemian Co-Living in Viman Nagar Pune - Reforbs",
  description:
    "Reforbs Moksha - Serene garden patios, fairy-lit rooftop pergolas, private kitchens & gym in Viman Nagar, Pune. Co-living for creative minds and tech pros.",
};

const property: PropertyData = {
  id: "moksha",
  name: "Moksha",
  category: "Co-Living",
  tagline: "Serene & Sophisticated Co-Living with Bohemian Garden Patios",
  address: "Row House Lane, Near Joggers Park, Viman Nagar, Pune",
  landmark: "Near Viman Nagar Joggers Park & Symbiosis",
  rating: "4.9",
  reviewsCount: 164,
  priceSingle: "₹22,000",
  priceDouble: "₹14,500",
  heroImage: "/assets/pdf/extracted/page-3-image-1-X4.jpg",
  galleryImages: [
    "/assets/pdf/extracted/page-3-image-1-X4.jpg",
    "/assets/pdf/extracted/page-3-image-2-X6.jpg",
    "/assets/pdf/extracted/page-3-image-3-X7.jpg",
    "/assets/pdf/extracted/page-3-image-4-X8.jpg",
  ],
  description:
    "Moksha is created for young working professionals, consultants, and founders in Pune who crave deep productivity by day and soulful relaxation at dusk. Features bohemian pallet seating on open green terraces, fairy-lit rooftop pergolas, private culinary kitchen setups, and a close-knit community where real friendships flourish without corporate pretense.",
  roomTypes: [
    {
      type: "Double Occupancy",
      price: "₹14,500",
      deposit: "1 Month Rent",
      features: [
        "Two luxury wooden beds with posture mattresses",
        "Dual wardrobes with full-length mirror",
        "Co-working desk setup with fiber internet",
        "Attached bathroom with 24/7 hot geyser",
        "Garden or courtyard view",
      ],
    },
    {
      type: "Single Occupancy",
      price: "₹22,000",
      deposit: "1 Month Rent",
      features: [
        "Private executive room all to yourself",
        "Queen size bed with plush headboard",
        "Ergonomic work desk with high-speed ports",
        "Private balcony with outdoor seating",
        "Private en-suite luxury bathroom",
      ],
    },
  ],
  amenities: [
    { name: "Dual-Band Optical Wi-Fi", included: true },
    { name: "Daily Professional Care", included: true },
    { name: "In-House Fitness Gym", included: true },
    { name: "Bohemian Garden Terraces", included: true },
    { name: "Private Kitchen Facilities", included: true },
    { name: "Power Inverter Backup", included: true },
    { name: "Community Yoga & BBQ", included: true },
    { name: "Zero Lock-in Guarantee", included: true },
  ],
  landmarks: [
    { name: "Viman Nagar Joggers Park", distance: "2 mins walk (150m)" },
    { name: "Phoenix Marketcity", distance: "5 mins drive (1.4 km)" },
    { name: "Pune International Airport", distance: "7 mins drive (2.3 km)" },
    { name: "Symbiosis Campuses", distance: "6 mins walk (500m)" },
    { name: "EON IT Free Zone", distance: "14 mins drive (5.6 km)" },
  ],
};

export default function MokshaPage() {
  return <PropertyDetailView property={property} />;
}
