import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata = buildPageMetadata({
  title: "Vairagya | Student Housing near Symbiosis Lavale from ₹15k",
  description:
    "Budget student housing 500m from Symbiosis University Lavale & ISBM, Pune. Breakfast, dinner mess, Wi-Fi and attached washrooms from ₹15,000/month.",
  path: "/student-housing/vairagya",
  image: "/images/properties/vairagya/image-1.jpg",
});

const property: PropertyData = {
  id: "vairagya",
  name: "Vairagya",
  category: "Student Housing",
  tagline: "Serene Student Sanctuary 500m from Symbiosis University Lavale & ISBM",
  address: "Near Symbiosis University, Lavale, Pune",
  landmark: "500m to Symbiosis University Lavale Campus & ISBM",
  rating: "4.9",
  reviewsCount: 128,
  priceDouble: "₹17,000",
  contactPhone: "+91 73876 14629",
  googleMapsUrl: "https://maps.google.com/?q=Symbiosis+University+Lavale",
  coupleFriendly: false,
  annualLockIn: true,
  foodPolicy: "Breakfast and dinner included.",
  laundryPolicy: "Laundry facilities available on premises",
  heroImage: "/images/properties/vairagya/image-1.jpg",
  galleryImages: [
    "/images/properties/vairagya/image-1.jpg",
    "/images/properties/vairagya/image-2.jpg",
    "/images/properties/vairagya/image-3.jpg",
    "/images/properties/vairagya/image-4.jpg",
    "/images/properties/vairagya/image-5.jpg",
    "/images/properties/vairagya/image-6.jpg",
  ],
  description:
    "Vairagya is designed as a peaceful, distraction-free residence for university students in Lavale, just 500m from Symbiosis University and ISBM. Enjoy sunlit rooms, private study desks, high-speed Wi-Fi, and a running mess with breakfast and dinner included on an annual academic cycle. (Note: Non-AC property).",
  roomTypes: [
    {
      type: "Triple Sharing Room",
      price: "₹15,000",
      deposit: "₹20,000",
      features: [
        "Running mess with breakfast & dinner included",
        "Three orthopedic beds with personal study stations",
        "Individual wooden wardrobes with personal keys",
        "Attached washroom with 24/7 hot water geyser",
        "Opposite-gender visitors strictly not allowed",
      ],
    },
    {
      type: "Twin Sharing Room",
      price: "₹17,000",
      deposit: "₹20,000",
      features: [
        "Running mess with breakfast & dinner included",
        "Two luxury wooden beds with posture mattresses",
        "Dual study desks with ergonomic chairs",
        "Attached washroom with 24/7 hot water geyser",
        "Opposite-gender visitors strictly not allowed",
      ],
    },
  ],
  amenities: [
    { name: "Breakfast & Dinner Mess Included", included: true },
    { name: "500m to Symbiosis Lavale", included: true },
    { name: "High-Speed Optical Wi-Fi", included: true },
    { name: "Daily Professional Cleaning", included: true },
    { name: "Quiet Study Sanctuary", included: true },
    { name: "Annual Academic Lock-in", included: true },
    { name: "Inverter Backup & Security", included: true },
    { name: "Natural Ventilation (Non-AC)", included: true },
  ],
  landmarks: [
    { name: "Symbiosis University", distance: "500 m" },
    { name: "ISBM College", distance: "500 m" },
  ],
};

export default function VairagyaPage() {
  return <PropertyDetailView property={property} />;
}
