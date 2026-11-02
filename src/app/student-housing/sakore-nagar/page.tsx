import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

export const metadata = {
  title: "Reforbs Living Sakore Nagar | Student Housing Near SCMS Pune - Reforbs",
  description:
    "Student housing near Symbiosis Centre for Management Studies (SCMS) Sakore Nagar, Viman Nagar. Modern interiors, high-speed Wi-Fi, single & double rooms.",
};

const property: PropertyData = {
  id: "sakore-nagar",
  name: "Reforbs Living Sakore Nagar",
  category: "Student Housing",
  tagline: "Modern Student Living near SCMS & Symbiosis Hub",
  address: "Sakore Nagar, Near SCMS Campus, Viman Nagar, Pune",
  landmark: "Near Symbiosis Centre for Management Studies (SCMS)",
  rating: "4.8",
  reviewsCount: 134,
  priceSingle: "₹17,500",
  priceDouble: "₹12,000",
  heroImage: "/images/properties/scmc-sid/image-1.jpg",
  galleryImages: [
    "/images/properties/scmc-sid/image-1.jpg",
    "/images/properties/scmc-sid/image-2.jpg",
    "/images/properties/scmc-sid/image-3.jpg",
    "/images/properties/scmc-sid/image-4.jpg",
    "/images/properties/scmc-sid/image-5.jpg",
    "/images/properties/scmc-sid/image-6.jpg",
  ],
  description:
    "Reforbs Living Sakore Nagar is a peaceful student residence just 3 minutes away from SCMS and nearby colleges in Viman Nagar. Beautifully curated rooms built to perfection to make every student feel at home, complete with individual study setups, private balconies, and absolute freedom of choice regarding food.",
  roomTypes: [
    {
      type: "Double Occupancy",
      price: "₹12,000",
      deposit: "1 Month Rent",
      features: [
        "Two ergonomic single beds",
        "Individual wardrobes with secure locks",
        "Dedicated study desks with task lights",
        "Attached washroom with hot geyser",
        "Wi-Fi and weekly deep cleaning",
      ],
    },
    {
      type: "Single Occupancy",
      price: "₹17,500",
      deposit: "1 Month Rent",
      features: [
        "Exclusive single occupant privacy",
        "Executive study desk & chair",
        "Private balcony for study breaks",
        "Full-sized closet with full mirror",
        "Attached modern washroom",
      ],
    },
  ],
  amenities: [
    { name: "High-Speed Optical Wi-Fi", included: true },
    { name: "Daily Professional Cleaning", included: true },
    { name: "Laundry Care", included: true },
    { name: "CCTV & Digital Entry", included: true },
    { name: "Quiet Study Desks", included: true },
    { name: "Power Inverter Backup", included: true },
    { name: "Kitchenette Facility", included: true },
    { name: "Recreation & Lounge", included: true },
  ],
  landmarks: [
    { name: "Symbiosis Centre for Mgmt (SCMS)", distance: "3 mins walk (250m)" },
    { name: "Symbiosis Law School (SLS)", distance: "5 mins walk (400m)" },
    { name: "Viman Nagar Joggers Park", distance: "4 mins walk (350m)" },
    { name: "Phoenix Marketcity", distance: "4 mins drive (1.2 km)" },
    { name: "Pune Airport", distance: "6 mins drive (2.1 km)" },
  ],
};

export default function SakoreNagarPage() {
  return <PropertyDetailView property={property} />;
}
