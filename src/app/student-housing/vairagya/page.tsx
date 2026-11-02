import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

export const metadata = {
  title: "Reforbs Vairagya | Student Housing in Viman Nagar Pune - Reforbs",
  description:
    "Reforbs Vairagya - Peaceful student residence near Symbiosis campuses in Viman Nagar. Quiet study suites, private balconies, high-speed Wi-Fi & zero curfew.",
};

const property: PropertyData = {
  id: "vairagya",
  name: "Reforbs Vairagya",
  category: "Student Housing",
  tagline: "Serene Student Sanctuary Near Symbiosis International Campuses",
  address: "Clover Park, Near Symbiosis Campus, Viman Nagar, Pune",
  landmark: "Near Symbiosis International School & Datta Mandir",
  rating: "4.9",
  reviewsCount: 128,
  priceSingle: "₹19,000",
  priceDouble: "₹13,000",
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
    "Reforbs Vairagya is designed as a peaceful, distraction-free residence for serious students in Viman Nagar. Enjoy sunlit rooms, private study desks, high-speed Wi-Fi, full kitchen access, and an uplifting atmosphere without the restrictions of traditional hostels.",
  roomTypes: [
    {
      type: "Double Occupancy",
      price: "₹13,000",
      deposit: "1 Month Rent",
      features: [
        "Two luxury wooden beds with posture mattresses",
        "Individual wooden wardrobes with personal keys",
        "Dual study desks with ergonomic chairs",
        "Attached washroom with 24/7 hot water geyser",
        "High-speed optical fiber Wi-Fi included",
      ],
    },
    {
      type: "Single Occupancy",
      price: "₹19,000",
      deposit: "1 Month Rent",
      features: [
        "100% exclusive single occupant privacy",
        "Premium study suite with task lighting",
        "Spacious wooden wardrobe with full mirror",
        "Private attached luxury bathroom",
        "Private balcony view",
      ],
    },
  ],
  amenities: [
    { name: "Dual-Band Optical Wi-Fi", included: true },
    { name: "Daily Professional Cleaning", included: true },
    { name: "Private Kitchen Freedom", included: true },
    { name: "Zero Moral Policing / Curfews", included: true },
    { name: "Full Power Backup", included: true },
    { name: "Laundry Facility On-Site", included: true },
    { name: "24/7 CCTV & Security", included: true },
    { name: "Direct Host Support", included: true },
  ],
  landmarks: [
    { name: "Symbiosis International School", distance: "2 mins walk (150m)" },
    { name: "Symbiosis Centre for Mgmt (SCMS)", distance: "5 mins walk (450m)" },
    { name: "Symbiosis Law School (SLS)", distance: "6 mins walk (500m)" },
    { name: "Phoenix Marketcity", distance: "5 mins drive (1.5 km)" },
    { name: "Pune International Airport", distance: "8 mins drive (2.6 km)" },
  ],
};

export default function VairagyaPage() {
  return <PropertyDetailView property={property} />;
}
