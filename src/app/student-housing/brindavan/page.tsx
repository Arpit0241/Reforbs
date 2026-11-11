import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata = buildPageMetadata({
  title: "Brindavan | Student Housing near SCMS Pune from ₹27,000",
  description:
    "All-inclusive student housing in Sakore Nagar, Viman Nagar (400m to SCMS). 3 daily meals, laundry, AC & Wi-Fi included on annual term from ₹27,000/mo.",
  path: "/student-housing/brindavan",
  image: "/images/properties/scmc-sid/image-1.jpg",
});

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
    { name: "Symbiosis Management College", distance: "400 m" },
    { name: "IIHM", distance: "1 km" },
    { name: "Allen Career Institute", distance: "1.2 km" },
    { name: "Pune Airport", distance: "1.5 km" },
    { name: "Phoenix Mall", distance: "1.5 km" },
    { name: "Metro Station", distance: "1.5 km" },
    { name: "Symbiosis Law School", distance: "2 km" },
  ],
};

export default function BrindavanPage() {
  return <PropertyDetailView property={property} />;
}
