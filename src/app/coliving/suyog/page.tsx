import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

export const metadata = {
  title: "Suyog Co-Living | Premium Residence in Viman Nagar Pune - Reforbs",
  description:
    "Reforbs Suyog - Premium co-living near Dutta Mandir Chowk & Airport Road, Viman Nagar. Air-conditioned rooms, gigabit fiber, private kitchens, zero restrictions.",
};

const property: PropertyData = {
  id: "suyog",
  name: "Suyog Co-Living",
  category: "Co-Living",
  tagline: "Elevated Living & High-Focus Work Suites Near Airport Road",
  address: "Near Dutta Mandir Chowk, Viman Nagar, Pune",
  landmark: "Near Dutta Mandir & Symbiosis International Campuses",
  rating: "4.8",
  reviewsCount: 119,
  priceSingle: "₹21,500",
  priceDouble: "₹14,500",
  heroImage: "/images/properties/suyog/image-1.jpg",
  galleryImages: [
    "/images/properties/suyog/image-1.jpg",
    "/images/properties/suyog/image-2.jpg",
    "/images/properties/suyog/image-3.jpg",
    "/images/properties/suyog/image-4.jpg",
    "/images/properties/suyog/image-5.jpg",
    "/images/properties/suyog/image-6.jpg",
  ],
  description:
    "Suyog delivers elevated living for tech professionals, consultants, and founders in Viman Nagar. Fully furnished rooms with high ceilings, private kitchen setups, dual-band Wi-Fi, and convenient proximity to Pune Airport and premier business parks.",
  roomTypes: [
    {
      type: "Double Occupancy",
      price: "₹14,500",
      deposit: "1 Month Rent",
      features: [
        "Two luxury wooden beds with posture mattresses",
        "Individual wooden wardrobes with personal keys",
        "Dual study/work desks with ergonomic chairs",
        "Attached washroom with 24/7 hot water geyser",
        "High-speed optical fiber Wi-Fi included",
      ],
    },
    {
      type: "Single Occupancy",
      price: "₹21,500",
      deposit: "1 Month Rent",
      features: [
        "100% exclusive single occupant privacy",
        "Air-conditioned executive suite",
        "Spacious wooden wardrobe with full mirror",
        "Private attached luxury bathroom",
        "Private balcony overlooking green canopy",
      ],
    },
  ],
  amenities: [
    { name: "Dual-Band Optical Wi-Fi", included: true },
    { name: "Daily Professional Cleaning", included: true },
    { name: "Private Kitchen Freedom", included: true },
    { name: "Air Conditioned Units Available", included: true },
    { name: "Zero Moral Policing / Curfews", included: true },
    { name: "Full Power Backup", included: true },
    { name: "Laundry Facility On-Site", included: true },
    { name: "Direct Host Support", included: true },
  ],
  landmarks: [
    { name: "Dutta Mandir Chowk", distance: "2 mins walk (100m)" },
    { name: "Pune International Airport", distance: "5 mins drive (1.8 km)" },
    { name: "Phoenix Marketcity", distance: "6 mins drive (2.0 km)" },
    { name: "Symbiosis Campuses", distance: "6 mins walk (500m)" },
    { name: "Kalyani Nagar IT Corridor", distance: "10 mins drive (3.8 km)" },
  ],
};

export default function SuyogPage() {
  return <PropertyDetailView property={property} />;
}
