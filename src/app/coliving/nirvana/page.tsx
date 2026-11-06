import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

export const metadata = {
  title: "Nirvana | Premium Co-Living Sanjay Park Pune - Reforbs",
  description:
    "Nirvana by Reforbs - Premium 1RK co-living in Sanjay Park, Pune. Attached private kitchen, couple friendly, zero lock-in, high-speed Wi-Fi.",
};

const property: PropertyData = {
  id: "nirvana",
  name: "Nirvana",
  category: "Co-Living",
  tagline: "Private 1RK Living with Kitchen & Couple-Friendly Freedom",
  address: "Plot 34, Lane 2A, Sanjay Park, Pune 411032",
  landmark: "Opposite green open space, Sanjay Park",
  rating: "4.9",
  reviewsCount: 168,
  priceSingle: "₹29,000",
  priceDouble: "₹17,000",
  contactPhone: "+91 74200 40241",
  googleMapsUrl: "https://maps.app.goo.gl/8MsiHGMq8s6R2At28",
  coupleFriendly: true,
  annualLockIn: false,
  foodPolicy: "Optional food arrangements available. Contact the property team for details.",
  laundryPolicy: "Washing machine available on premises",
  heroImage: "/images/properties/nirvana/image-1.jpg",
  galleryImages: [
    "/images/properties/nirvana/image-1.jpg",
    "/images/properties/nirvana/image-2.jpg",
    "/images/properties/nirvana/image-3.jpg",
    "/images/properties/nirvana/image-4.jpg",
    "/images/properties/nirvana/image-5.jpg",
    "/images/properties/nirvana/image-6.jpg",
  ],
  description:
    "Nirvana provides independent 1RK apartments designed with attached private kitchens, ensuite washrooms, and private balconies. Enjoy 100% couple-friendly freedom with zero lock-in period and hotel-grade housekeeping.",
  roomTypes: [
    {
      type: "Twin Sharing 1RK",
      price: "₹17,000",
      deposit: "₹17,000 (1 Month Rent)",
      features: [
        "Two luxury wooden beds with orthopaedic spring mattresses",
        "Attached modular kitchen with induction & cooking freedom",
        "Individual wardrobes & dedicated storage",
        "Ensuite modern washroom with 24/7 hot water geyser",
        "High-speed fiber Wi-Fi & daily housekeeping included",
        "Food included",
      ],
    },
    {
      type: "Private 1RK Apartment",
      price: "₹29,000",
      deposit: "₹29,000 (1 Month Rent)",
      features: [
        "100% private 1RK studio apartment exclusively for you",
        "King-size bed with orthopaedic mattress",
        "Private modular kitchen with cooking freedom",
        "Couple friendly with zero judgment or curfews",
        "Private balcony & individual split AC",
        "Food included",
      ],
    },
  ],
  amenities: [
    { name: "Private Kitchen in 1RK", included: true },
    { name: "Couple Friendly Policy", included: true },
    { name: "Zero Lock-in Period", included: true },
    { name: "Gigabit Fiber Wi-Fi", included: true },
    { name: "Professional Housekeeping", included: true },
    { name: "Washing Machine Access", included: true },
    { name: "Inverter Backup", included: true },
    { name: "24/7 Security & CCTV", included: true },
  ],
  landmarks: [
    { name: "Phoenix Marketcity Mall", distance: "4 mins drive (1.1 km)" },
    { name: "Symbiosis Law & Management Campuses", distance: "5 mins drive (1.4 km)" },
    { name: "WeWork / Regus Viman Nagar", distance: "4 mins walk (350m)" },
    { name: "Pune International Airport", distance: "6 mins drive (2.1 km)" },
    { name: "EON IT Park / Kharadi", distance: "12 mins drive (5.2 km)" },
  ],
};

export default function NirvanaPage() {
  return <PropertyDetailView property={property} />;
}
