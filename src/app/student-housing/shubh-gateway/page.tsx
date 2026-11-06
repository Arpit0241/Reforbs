import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

export const metadata = {
  title: "Shubh Gateway | Student Accommodation Opposite SLS Viman Nagar - Reforbs",
  description:
    "Reforbs Shubh Gateway - Premier student accommodation directly opposite Symbiosis Law School gate. Gender-segregated towers, breakfast & dinner included, laundry twice weekly, annual lock-in.",
};

const property: PropertyData = {
  id: "shubh-gateway",
  name: "Shubh Gateway",
  category: "Student Housing",
  tagline: "Student Residence Directly Opposite Symbiosis Law School Gate",
  address: "Opposite SLS Gate, Viman Nagar, Pune",
  landmark: "Directly Opposite Symbiosis Law School (SLS) Gate",
  rating: "4.9",
  reviewsCount: 148,
  priceDouble: "₹25,000 (Girls) / ₹27,000 (Boys)",
  contactPhone: "+91 70578 97430",
  googleMapsUrl: "https://maps.app.goo.gl/o1S39E1QnLh1K7C77",
  coupleFriendly: false,
  annualLockIn: true,
  foodPolicy: "Breakfast and dinner included.",
  laundryPolicy: "Laundry Included 2x a Week (up to 5 kg)",
  heroImage: "/images/properties/sls/image-1.jpg",
  galleryImages: [
    "/images/properties/sls/image-1.jpg",
    "/images/properties/sls/image-2.jpg",
    "/images/properties/sls/image-3.jpg",
    "/images/properties/sls/image-4.jpg",
    "/images/properties/sls/image-5.jpg",
    "/images/properties/sls/image-6.jpg",
  ],
  description:
    "Shubh Gateway is situated directly opposite the Symbiosis Law School gate in Viman Nagar. Featuring gender-segregated towers, wholesome breakfast and dinner, professional laundry twice weekly (up to 5 kg), and study-focused tranquility on an annual academic cycle.",
  roomTypes: [
    {
      type: "Girls' Twin Sharing",
      price: "₹25,000",
      deposit: "₹40,000",
      features: [
        "Dedicated Girls' Tower with biometric access",
        "Breakfast & dinner included daily",
        "Laundry twice a week (up to 5 kg) included",
        "Two orthopedic single beds & study workstations",
        "Opposite-gender visitors strictly not allowed",
      ],
    },
    {
      type: "Boys' Twin Sharing",
      price: "₹27,000",
      deposit: "₹40,000",
      features: [
        "Dedicated Boys' Tower with high-speed optical Wi-Fi",
        "Breakfast & dinner included daily",
        "Laundry twice a week (up to 5 kg) included",
        "Dual study desks with ergonomic seating",
        "Opposite-gender visitors strictly not allowed",
      ],
    },
  ],
  amenities: [
    { name: "Breakfast & Dinner Included", included: true },
    { name: "Laundry 2x a Week (5kg)", included: true },
    { name: "Zero Commute to SLS Gate", included: true },
    { name: "High-Speed Optical Wi-Fi", included: true },
    { name: "Daily Housekeeping & Care", included: true },
    { name: "Gender-Segregated Living", included: true },
    { name: "Inverter Backup & Security", included: true },
    { name: "Annual Academic Lock-in", included: true },
  ],
  landmarks: [
    { name: "Symbiosis Law School", distance: "150 m" },
    { name: "Pune Airport", distance: "400 m" },
    { name: "Symbiosis Management College", distance: "1.2 km" },
    { name: "Phoenix Mall", distance: "2.5 km" },
    { name: "Commerzone IT Park", distance: "2.5 km" },
    { name: "Gigaspace IT Park", distance: "2.5 km" },
    { name: "Panchshil Tech Park", distance: "2.5 km" },
    { name: "Metro Station", distance: "3 km" },
  ],
};

export default function ShubhGatewayPage() {
  return <PropertyDetailView property={property} />;
}
