import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

export const metadata = {
  title: "Vipasana | Peaceful Modern Co-Living in Viman Nagar Pune - Reforbs",
  description:
    "Reforbs Vipasana - Mindful, modern co-living in Viman Nagar, Pune. High-focus study/work suites, private kitchens, attached balconies, zero restrictions.",
};

const property: PropertyData = {
  id: "vipasana",
  name: "Vipasana",
  category: "Co-Living",
  tagline: "Mindful, High-Focus Urban Sanctuary for Working Professionals",
  address: "Central Avenue, Viman Nagar, Pune 411014",
  landmark: "Near Symbiosis International School & Phoenix Mall",
  rating: "4.9",
  reviewsCount: 152,
  priceSingle: "₹21,000",
  priceDouble: "₹14,000",
  heroImage: "/assets/pdf/extracted/page-4-image-1-X4.jpg",
  galleryImages: [
    "/assets/pdf/extracted/page-4-image-1-X4.jpg",
    "/assets/pdf/extracted/page-4-image-2-X6.jpg",
    "/assets/pdf/extracted/page-4-image-3-X7.jpg",
    "/assets/pdf/extracted/page-2-image-1-X4.jpg",
  ],
  description:
    "Vipasana is tailored for focused professionals and serious students who need absolute peace, ergonomic workspaces, and clean minimalist aesthetic without sacrificing an active social community. Complete with spacious shared living rooms, private kitchens, laundry, and round-the-clock supportive property hosts.",
  roomTypes: [
    {
      type: "Double Occupancy",
      price: "₹14,000",
      deposit: "1 Month Rent",
      features: [
        "Two beds with posture care mattresses",
        "Individual wooden wardrobes with locks",
        "Dual work desks with task lighting",
        "Attached bathroom with hot geyser",
        "High-speed fiber internet included",
      ],
    },
    {
      type: "Single Occupancy",
      price: "₹21,000",
      deposit: "1 Month Rent",
      features: [
        "Private suite all to yourself",
        "Large study/work station with monitor room",
        "Private balcony for fresh air breaks",
        "Attached bathroom with modern fittings",
        "Air conditioner & personal storage",
      ],
    },
  ],
  amenities: [
    { name: "High-Speed Optical Wi-Fi", included: true },
    { name: "Daily Professional Cleaning", included: true },
    { name: "Laundry Facility", included: true },
    { name: "Spacious Living Area", included: true },
    { name: "Private Kitchen Access", included: true },
    { name: "Full Power Backup", included: true },
    { name: "Free Vehicle Parking", included: true },
    { name: "Zero Restrictions on Friends", included: true },
  ],
  landmarks: [
    { name: "Phoenix Marketcity", distance: "4 mins drive (1.1 km)" },
    { name: "Symbiosis Campuses", distance: "5 mins walk (400m)" },
    { name: "Viman Nagar Metro Station", distance: "6 mins walk (600m)" },
    { name: "Pune Airport", distance: "7 mins drive (2.4 km)" },
    { name: "WeWork Viman Nagar", distance: "3 mins walk (250m)" },
  ],
};

export default function VipasanaPage() {
  return <PropertyDetailView property={property} />;
}
