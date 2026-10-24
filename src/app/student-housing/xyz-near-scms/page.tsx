import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

export const metadata = {
  title: "XYZ – Near SCMS (Symbiosis Mgmt) | Student Housing Viman Nagar Pune - Reforbs",
  description:
    "Student housing near Symbiosis Centre for Management Studies (SCMS) Viman Nagar. Modern interiors, high-speed Wi-Fi, single & double rooms, zero lock-ins.",
};

const property: PropertyData = {
  id: "xyz-near-scms",
  name: "XYZ – Near SCMS",
  category: "Student Housing",
  tagline: "Vibrant Student Residence steps from Symbiosis Management Campus",
  address: "Near Symbiosis Centre for Management Studies, Viman Nagar",
  landmark: "Symbiosis Centre for Management Studies (SCMS)",
  rating: "4.8",
  reviewsCount: 128,
  priceSingle: "₹17,500",
  priceDouble: "₹12,000",
  heroImage: "/images/image5.png",
  galleryImages: [
    "/images/image5.png",
    "/images/image4.png",
    "/images/image3.png",
    "/images/image6.png",
    "/images/image7.png",
  ],
  description:
    "Reforbs XYZ is designed for business and undergrad scholars studying at SCMS and adjacent Symbiosis institutes in Viman Nagar. Every room is built to perfection to make students feel at home, complete with individual study suites, personal wardrobe storage, attached washrooms, and zero compulsory mess fees.",
  roomTypes: [
    {
      type: "Double Occupancy",
      price: "₹12,000",
      deposit: "1 Month Rent",
      features: [
        "Two ergonomic single beds",
        "Individual wooden lockers & wardrobes",
        "Dedicated study desks with task lights",
        "Attached washroom with 24/7 hot water",
        "Wi-Fi and weekly deep cleaning",
      ],
    },
    {
      type: "Single Occupancy",
      price: "₹17,500",
      deposit: "1 Month Rent",
      features: [
        "Exclusive room all to yourself",
        "Executive study desk & swivel chair",
        "Private balcony for quiet coffee breaks",
        "Full-sized closet with full mirror",
        "Attached modern washroom",
      ],
    },
  ],
  amenities: [
    { name: "High-Speed Wi-Fi", icon: "wifi", included: true },
    { name: "Daily Professional Cleaning", icon: "sparkles", included: true },
    { name: "Free Laundry Washers", icon: "shirt", included: true },
    { name: "CCTV & Digital Entry", icon: "shield", included: true },
    { name: "Presentation & Study Zone", icon: "book", included: true },
    { name: "Power Inverter Backup", icon: "power", included: true },
    { name: "Kitchenette Facility", icon: "utensils", included: true },
    { name: "Gaming & Pool Zone", icon: "gamepad", included: true },
  ],
  landmarks: [
    { name: "Symbiosis Centre for Mgmt (SCMS)", distance: "3 mins walk (250m)" },
    { name: "Symbiosis Law School (SLS)", distance: "5 mins walk (400m)" },
    { name: "Phoenix Marketcity", distance: "4 mins drive (1.2 km)" },
    { name: "Viman Nagar Joggers Park", distance: "4 mins walk (350m)" },
    { name: "Pune Airport", distance: "7 mins drive (2.2 km)" },
    { name: "Dutta Mandir Chowk", distance: "3 mins walk (200m)" },
  ],
};

export default function XYZNearSCMSPage() {
  return <PropertyDetailView property={property} />;
}
