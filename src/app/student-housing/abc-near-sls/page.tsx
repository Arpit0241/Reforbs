import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

export const metadata = {
  title: "ABC – Near SLS (Symbiosis Law) | Student Housing Viman Nagar Pune - Reforbs",
  description:
    "Student housing near Symbiosis Law School (SLS) Viman Nagar. Benchmark amenities, high-speed Wi-Fi, single & double rooms, zero lock-ins.",
};

const property: PropertyData = {
  id: "abc-near-sls",
  name: "ABC – Near SLS",
  category: "Student Housing",
  tagline: "Curated Student Residence 200m from Symbiosis Law School",
  address: "Lane 1, Near Symbiosis Law School, Viman Nagar",
  landmark: "Symbiosis Law School (SLS)",
  rating: "4.9",
  reviewsCount: 142,
  priceSingle: "₹18,000",
  priceDouble: "₹12,500",
  heroImage: "/images/image4.png",
  galleryImages: [
    "/images/image4.png",
    "/images/image5.png",
    "/images/image3.png",
    "/images/image6.png",
    "/images/image7.png",
  ],
  description:
    "Reforbs ABC is specifically designed for Symbiosis Law School students seeking zero-commute living in Viman Nagar. Features dedicated quiet study spaces, personal workstation desks, single occupant bedrooms built for focus, high-speed optical fiber, and a lively community where future advocates relax together on the rooftop.",
  roomTypes: [
    {
      type: "Double Occupancy",
      price: "₹12,500",
      deposit: "1 Month Rent",
      features: [
        "Two single orthopaedic beds",
        "Individual wooden wardrobes",
        "Dual study desks with ergonomic chairs",
        "Attached washroom with geyser",
        "High-speed Wi-Fi included",
      ],
    },
    {
      type: "Single Occupancy",
      price: "₹18,000",
      deposit: "1 Month Rent",
      features: [
        "Exclusive single occupant privacy",
        "Spacious wooden wardrobe & full mirror",
        "Premium study suite with bookshelf",
        "Private attached bathroom",
        "Balcony with city view",
      ],
    },
  ],
  amenities: [
    { name: "Optical Fiber Wi-Fi", icon: "wifi", included: true },
    { name: "Daily Pro Housekeeping", icon: "sparkles", included: true },
    { name: "Laundry & Linen Care", icon: "shirt", included: true },
    { name: "24/7 Security & CCTV", icon: "shield", included: true },
    { name: "Quiet Study Lounge", icon: "book", included: true },
    { name: "Full Power Backup", icon: "power", included: true },
    { name: "Private Kitchen Access", icon: "utensils", included: true },
    { name: "Rooftop Chill Zone", icon: "sun", included: true },
  ],
  landmarks: [
    { name: "Symbiosis Law School (SLS)", distance: "2 mins walk (200m)" },
    { name: "Symbiosis Centre for Mgmt (SCMS)", distance: "5 mins walk (450m)" },
    { name: "Pune International Airport", distance: "8 mins drive (2.4 km)" },
    { name: "Phoenix Marketcity Pune", distance: "5 mins drive (1.5 km)" },
    { name: "Viman Nagar Metro Station", distance: "6 mins walk (600m)" },
    { name: "Koregaon Park", distance: "12 mins drive (4.8 km)" },
  ],
};

export default function ABCNearSLSPage() {
  return <PropertyDetailView property={property} />;
}
