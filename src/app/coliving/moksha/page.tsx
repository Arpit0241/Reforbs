import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

export const metadata = {
  title: "Moksha | Boutique Co-Living Sanjay Park Pune - Reforbs",
  description:
    "Reforbs Moksha - Serene 3BHK co-living (max 4 per floor) in Sanjay Park, Pune. Couple friendly, zero lock-in, private kitchens & high-speed Wi-Fi.",
};

const property: PropertyData = {
  id: "moksha",
  name: "Moksha",
  category: "Co-Living",
  tagline: "Serene & Spacious 3BHK Living (Max 4 per Floor) with Complete Freedom",
  address: "Plot 61, Lane 2A, Sanjay Park, Pune 411032",
  landmark: "Near Joggers Park & Cafes, Sanjay Park",
  rating: "4.9",
  reviewsCount: 164,
  priceSingle: "₹24,000",
  priceDouble: "₹17,000",
  contactPhone: "+91 74200 40241",
  googleMapsUrl: "https://maps.app.goo.gl/8MsiHGMq8s6R2At28",
  coupleFriendly: true,
  annualLockIn: false,
  foodPolicy: "Food & daily meals included.",
  laundryPolicy: "Washing machine available on premises",
  heroImage: "/images/properties/moksha/image-1.jpg",
  galleryImages: [
    "/images/properties/moksha/image-1.jpg",
    "/images/properties/moksha/image-2.jpg",
    "/images/properties/moksha/image-3.jpg",
    "/images/properties/moksha/image-4.jpg",
    "/images/properties/moksha/image-5.jpg",
    "/images/properties/moksha/image-6.jpg",
  ],
  description:
    "Moksha features a generous 3BHK layout with a maximum of only 4 residents per floor for unmatched privacy and breathing room. Enjoy fairy-lit terrace spaces, full cooking freedom, zero lock-in period, and couple-friendly policies without arbitrary curfews.",
  roomTypes: [
    {
      type: "Twin Sharing Room",
      price: "₹17,000",
      deposit: "₹17,000 (1 Month Rent)",
      features: [
        "Two luxury wooden beds with posture mattresses",
        "Dual wardrobes with full-length mirror",
        "Co-working desk setup with fiber internet",
        "Attached bathroom with 24/7 hot geyser",
        "Daily housekeeping & high-speed optical Wi-Fi included",
      ],
    },
    {
      type: "Private Room",
      price: "₹24,000",
      deposit: "₹24,000 (1 Month Rent)",
      features: [
        "Private executive bedroom exclusively for you",
        "Queen size bed with plush headboard",
        "Ergonomic work desk with high-speed ports",
        "Private attached luxury washroom",
        "Couple friendly with no curfew restrictions",
      ],
    },
  ],
  amenities: [
    { name: "Food & Meals Included", included: true },
    { name: "Max 4 Residents per Floor", included: true },
    { name: "Couple Friendly Freedom", included: true },
    { name: "Zero Lock-in Period", included: true },
    { name: "Gigabit Optical Wi-Fi", included: true },
    { name: "Daily Professional Care", included: true },
    { name: "Washing Machine Access", included: true },
    { name: "Full Modular Kitchen", included: true },
    { name: "Inverter Backup & CCTV", included: true },
  ],
  landmarks: [
    { name: "Pune Airport", distance: "1 km" },
    { name: "Symbiosis Law School", distance: "2 km" },
    { name: "Symbiosis Management College", distance: "2 km" },
    { name: "Commerzone IT Park", distance: "2.5 km" },
    { name: "Phoenix Mall", distance: "3 km" },
    { name: "Gigaspace IT Park", distance: "3 km" },
    { name: "Metro Station", distance: "3 km" },
    { name: "Panchshil Tech Park", distance: "3.2 km" },
    { name: "Business Bay", distance: "4 km" },
  ],
};

export default function MokshaPage() {
  return <PropertyDetailView property={property} />;
}
