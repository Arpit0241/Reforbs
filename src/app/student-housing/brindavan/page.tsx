import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

export const metadata = {
  title: "Brindavan | All-Inclusive Student Accommodation Sakore Nagar - Reforbs",
  description:
    "Reforbs Brindavan - All-inclusive student accommodation on Symbiosis Rd behind Dr Lal Path Lab, Sakore Nagar, Pune. All 3 meals (breakfast, lunch, dinner) included, laundry twice weekly, annual lock-in.",
};

const property: PropertyData = {
  id: "brindavan",
  name: "Brindavan",
  category: "Student Housing",
  tagline: "All-Inclusive Student Accommodation with 3 Daily Meals & Laundry Care",
  address: "Symbiosis Rd, behind Dr Lal Path Lab, Sakore Nagar, Pune",
  landmark: "Behind Dr Lal Path Lab, Sakore Nagar",
  rating: "4.9",
  reviewsCount: 139,
  priceSingle: "₹32,000",
  priceDouble: "₹27,000",
  contactPhone: "+91 96370 19838",
  googleMapsUrl: "https://maps.app.goo.gl/qM8hH4U3C7Yy8x3L8",
  coupleFriendly: false,
  annualLockIn: true,
  foodPolicy: "Breakfast, lunch and dinner included.",
  laundryPolicy: "Laundry Included 2x a Week (up to 5 kg)",
  heroImage: "/images/properties/sakore-nagar/image-1.jpg",
  galleryImages: [
    "/images/properties/sakore-nagar/image-1.jpg",
    "/images/properties/sakore-nagar/image-2.jpg",
    "/images/properties/sakore-nagar/image-3.jpg",
    "/images/properties/sakore-nagar/image-4.jpg",
    "/images/properties/sakore-nagar/image-5.jpg",
    "/images/properties/sakore-nagar/image-6.jpg",
  ],
  description:
    "Brindavan is located behind Dr Lal Path Lab on Symbiosis Road in Sakore Nagar. Designed specifically for students who want a turnkey, distraction-free environment with all 3 nutritious meals provided daily, laundry done twice a week (up to 5 kg), and study quietness on an annual academic cycle.",
  roomTypes: [
    {
      type: "Twin Sharing Student Suite",
      price: "₹27,000",
      deposit: "₹30,000",
      features: [
        "All 3 daily meals included (Breakfast, Lunch, Dinner)",
        "Laundry twice a week (up to 5 kg) included",
        "Two orthopedic single beds & dedicated study stations",
        "Attached modern bathroom with continuous hot water",
        "Opposite-gender visitors strictly not allowed",
      ],
    },
    {
      type: "Private Student Suite",
      price: "₹32,000",
      deposit: "₹30,000",
      features: [
        "100% private single occupancy room for focused academics",
        "All 3 daily meals included (Breakfast, Lunch, Dinner)",
        "Laundry twice a week (up to 5 kg) included",
        "Executive study desk with ergonomic chair & bookshelf",
        "Opposite-gender visitors strictly not allowed",
      ],
    },
  ],
  amenities: [
    { name: "All 3 Meals (BF, Lunch, Dinner)", included: true },
    { name: "Laundry 2x a Week (5kg)", included: true },
    { name: "High-Speed Optical Wi-Fi", included: true },
    { name: "Daily Housekeeping & Care", included: true },
    { name: "Single-Gender Floor Guidelines", included: true },
    { name: "Annual Academic Lock-in", included: true },
    { name: "Inverter Backup & Security", included: true },
    { name: "Walking Distance to SCMS & SLS", included: true },
  ],
  landmarks: [
    { name: "Dr Lal Path Lab Sakore Nagar", distance: "Directly Behind (30 sec walk)" },
    { name: "Symbiosis SCMS Campus", distance: "4 mins walk (300m)" },
    { name: "Symbiosis Law School (SLS)", distance: "6 mins walk (450m)" },
    { name: "Phoenix Marketcity", distance: "4 mins drive (1.3 km)" },
    { name: "Pune Airport", distance: "5 mins drive (1.8 km)" },
  ],
};

export default function BrindavanPage() {
  return <PropertyDetailView property={property} />;
}
