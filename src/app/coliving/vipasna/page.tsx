import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata = buildPageMetadata({
  title: "Vipasna | Co-Living in Sanjay Park, Pune from ₹17,000",
  description:
    "Hotel-style ensuite co-living in Sanjay Park, Pune with AC, attached washrooms, Wi-Fi & shared kitchen. Couple-friendly, zero lock-in from ₹17,000/mo.",
  path: "/coliving/vipasna",
  image: "/images/properties/vipasna/image-1.jpg",
});

const property: PropertyData = {
  id: "vipasna",
  name: "Vipasna",
  category: "Co-Living",
  tagline: "Hotel-Style Ensuite Living with Mindful Urban Luxury & Freedom",
  address: "Plot 36, Lane 3, Sanjay Park, Pune 411032",
  landmark: "Lane 3, Sanjay Park, Pune",
  rating: "4.9",
  reviewsCount: 152,
  priceSingle: "₹27,000",
  priceDouble: "₹17,000",
  contactPhone: "+91 74200 40241",
  googleMapsUrl: "https://maps.app.goo.gl/8MsiHGMq8s6R2At28",
  coupleFriendly: true,
  annualLockIn: false,
  foodPolicy: "Food & daily meals included.",
  laundryPolicy: "Washing machine available on premises",
  heroImage: "/images/properties/vipasna/image-1.jpg",
  galleryImages: [
    "/images/properties/vipasna/image-1.jpg",
    "/images/properties/vipasna/image-2.jpg",
    "/images/properties/vipasna/image-3.jpg",
    "/images/properties/vipasna/image-4.jpg",
    "/images/properties/vipasna/image-5.jpg",
    "/images/properties/vipasna/image-6.jpg",
  ],
  description:
    "Vipasna offers hotel-style ensuite rooms designed for high-focus professionals and couples. Clean architectural lines, acoustic privacy, ergonomic workstations, zero lock-in period, and couple-friendly guidelines create a calm sanctuary in Pune.",
  roomTypes: [
    {
      type: "Twin Sharing Ensuite",
      price: "₹17,000",
      deposit: "₹17,000 (1 Month Rent)",
      features: [
        "Two luxury wooden beds with posture mattresses",
        "Individual wooden wardrobes & dedicated storage",
        "Dual study and work desks with ergonomic seating",
        "Private attached bathroom with continuous hot water",
        "High-speed fiber Wi-Fi & daily housekeeping",
      ],
    },
    {
      type: "Private Ensuite Studio",
      price: "₹27,000",
      deposit: "₹27,000 (1 Month Rent)",
      features: [
        "Private hotel-style ensuite room exclusively for you",
        "King-size bed with orthopedic mattress",
        "Ergonomic work desk with multiple power outlets",
        "Private attached designer washroom",
        "Couple friendly with no curfew restrictions",
      ],
    },
  ],
  amenities: [
    { name: "Food & Meals Included", included: true },
    { name: "Hotel-Style Ensuite Rooms", included: true },
    { name: "Couple Friendly Freedom", included: true },
    { name: "Zero Lock-in Period", included: true },
    { name: "Gigabit Optical Wi-Fi", included: true },
    { name: "Daily Housekeeping & Care", included: true },
    { name: "Washing Machine Access", included: true },
    { name: "Shared Culinary Kitchen", included: true },
    { name: "Inverter Backup & Security", included: true },
  ],
  landmarks: [
    { name: "Pune Airport", distance: "1 km" },
    { name: "Symbiosis Law School", distance: "2 km" },
    { name: "Symbiosis Management College", distance: "2 km" },
    { name: "Commerzone IT Park", distance: "2.5 km" },
    { name: "Phoenix Mall", distance: "3 km" },
    { name: "Gigaspace IT Park", distance: "3 km" },
    { name: "Metro Station", distance: "3 km" },
    { name: "Panchshil Tech Park", distance: "3.2 km" },
    { name: "Business Bay", distance: "4 km" },
  ],
};

export default function VipasnaPage() {
  return <PropertyDetailView property={property} />;
}
