import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

export const metadata = {
  title: "Reforbs Park Island | Green Community Living in Viman Nagar - Reforbs",
  description:
    "Reforbs Park Island - Resort-style co-living with swimming pool, gym, lush green views, and balcony suites in Viman Nagar, Pune.",
};

const property: PropertyData = {
  id: "park-island",
  name: "Reforbs Park Island",
  category: "Co-Living",
  tagline: "Resort-Style Co-Living with Swimming Pool & Lush Garden Views",
  address: "Park Island Enclave, Off Airport Road, Viman Nagar, Pune",
  landmark: "Near Park Island & Viman Nagar IT Hubs",
  rating: "4.9",
  reviewsCount: 142,
  priceSingle: "₹23,000",
  priceDouble: "₹15,500",
  heroImage: "/images/properties/park-island/image-1.jpg",
  galleryImages: [
    "/images/properties/park-island/image-1.jpg",
    "/images/properties/park-island/image-2.jpg",
    "/images/properties/park-island/image-3.jpg",
    "/images/properties/park-island/image-4.jpg",
    "/images/properties/park-island/image-5.jpg",
    "/images/properties/park-island/image-6.jpg",
  ],
  description:
    "Reforbs Park Island blends community vibrancy with peaceful garden aesthetics. Overlooking manicured lawns with spacious balconies, pool table, swimming pool access, and relaxed community evenings, it offers an inspiring sanctuary after a demanding workday.",
  roomTypes: [
    {
      type: "Double Occupancy",
      price: "₹15,500",
      deposit: "1 Month Rent",
      features: [
        "Two luxury wooden beds with posture mattresses",
        "Individual wooden wardrobes with personal keys",
        "Dual work desks with high-speed ports",
        "Attached washroom with 24/7 hot water geyser",
        "Balcony with lush resort-style garden views",
      ],
    },
    {
      type: "Single Occupancy",
      price: "₹23,000",
      deposit: "1 Month Rent",
      features: [
        "Exclusive single room with private balcony",
        "Queen size bed with plush headboard",
        "Ergonomic work desk setup",
        "Attached luxury bathroom",
        "Full swimming pool & gym access",
      ],
    },
  ],
  amenities: [
    { name: "Swimming Pool Access", included: true },
    { name: "In-House Fitness Gym", included: true },
    { name: "Dual-Band Optical Wi-Fi", included: true },
    { name: "Daily Professional Cleaning", included: true },
    { name: "Private Kitchen Freedom", included: true },
    { name: "Zero Curfew or Moral Policing", included: true },
    { name: "Full Power Backup", included: true },
    { name: "Direct Host Support", included: true },
  ],
  landmarks: [
    { name: "Park Island Enclave & Gardens", distance: "On-Premise (0m)" },
    { name: "Airport Road Business Hub", distance: "3 mins drive (1.1 km)" },
    { name: "Phoenix Marketcity", distance: "5 mins drive (1.8 km)" },
    { name: "WeWork & IT Corridors", distance: "7 mins drive (2.4 km)" },
    { name: "Pune International Airport", distance: "6 mins drive (2.1 km)" },
  ],
};

export default function ParkIslandPage() {
  return <PropertyDetailView property={property} />;
}
