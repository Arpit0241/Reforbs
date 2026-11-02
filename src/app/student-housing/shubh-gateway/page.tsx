import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

export const metadata = {
  title: "Shubh Gateway | Student Housing Opposite Symbiosis Law School Pune - Reforbs",
  description:
    "Student housing opposite Symbiosis Law School (SLS) Viman Nagar. Benchmark amenities, high-speed Wi-Fi, single & double rooms, zero lock-ins.",
};

const property: PropertyData = {
  id: "shubh-gateway",
  name: "Shubh Gateway",
  category: "Student Housing",
  tagline: "Student Residence Directly Opposite Symbiosis Law School",
  address: "Opposite Symbiosis Law School, Viman Nagar",
  landmark: "Directly Opposite SLS Campus Gate",
  rating: "4.9",
  reviewsCount: 148,
  priceSingle: "₹18,000",
  priceDouble: "₹12,500",
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
    "Shubh Gateway is situated directly opposite Symbiosis Law School in Viman Nagar. Purpose-built for law and undergraduate students who value zero daily commute, high-speed fiber internet for exams and research, single occupant privacy, and freedom to study on their own schedule without warden curfews.",
  roomTypes: [
    {
      type: "Double Occupancy",
      price: "₹12,500",
      deposit: "1 Month Rent",
      features: [
        "Two single orthopaedic beds with spring mattresses",
        "Individual wooden wardrobes with personal keys",
        "Dual study desks with ergonomic chairs",
        "Attached washroom with 24/7 geyser",
        "High-speed optical fiber Wi-Fi included",
      ],
    },
    {
      type: "Single Occupancy",
      price: "₹18,000",
      deposit: "1 Month Rent",
      features: [
        "100% exclusive single occupant privacy",
        "Premium study suite with bookshelf & task light",
        "Spacious wooden wardrobe with full mirror",
        "Private attached bathroom",
        "Balcony with open city view",
      ],
    },
  ],
  amenities: [
    { name: "Free High-Speed WiFi", included: true },
    { name: "Daily Cleaning Services", included: true },
    { name: "Laundry Care", included: true },
    { name: "Quiet Study Desks", included: true },
    { name: "Private Kitchen Access", included: true },
    { name: "Full Power Backup", included: true },
    { name: "24/7 Security & CCTV", included: true },
    { name: "Freedom (Zero Bans)", included: true },
  ],
  landmarks: [
    { name: "Symbiosis Law School (SLS)", distance: "1 min walk (50m)" },
    { name: "Symbiosis Centre for Mgmt (SCMS)", distance: "4 mins walk (350m)" },
    { name: "Phoenix Marketcity", distance: "4 mins drive (1.2 km)" },
    { name: "Pune International Airport", distance: "7 mins drive (2.4 km)" },
    { name: "Viman Nagar Joggers Park", distance: "5 mins walk (400m)" },
    { name: "Koregaon Park", distance: "12 mins drive (4.5 km)" },
  ],
};

export default function ShubhGatewayPage() {
  return <PropertyDetailView property={property} />;
}
