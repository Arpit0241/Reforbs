import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

export const metadata = {
  title: "Shubh Nirvana | Flagship Hippie Co-Living Viman Nagar Pune - Reforbs",
  description:
    "Shubh Nirvana by Reforbs - Flagship backpacker & hippie inspired co-living in Viman Nagar, Pune. UV neon lounge, gym, pool table, rooftop garden, zero curfews.",
};

const property: PropertyData = {
  id: "shubh-nirvana",
  name: "Shubh Nirvana",
  category: "Co-Living",
  tagline: "Flagship Hippie & Backpacker Inspired Living for Young Professionals",
  address: "Lane 2, Near Phoenix Marketcity, Viman Nagar, Pune",
  landmark: "Near Phoenix Marketcity & EON IT Corridor",
  rating: "5.0",
  reviewsCount: 189,
  priceSingle: "₹22,500",
  priceDouble: "₹15,000",
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
    "Shubh Nirvana is our signature co-living flagship in Viman Nagar, celebrated for its backpacker hostel energy, UV-lit chill zone, in-house gym, and pool table. Created for ambitious bachelors who want high productivity during the week and an unforgettable social circle on weekends with zero curfews or arbitrary rules.",
  roomTypes: [
    {
      type: "Double Occupancy",
      price: "₹15,000",
      deposit: "1 Month Rent",
      features: [
        "Two luxury wooden beds with pocket spring mattresses",
        "Individual wardrobes with digital locks",
        "Private balcony overlooking greenery",
        "Designer attached bathroom",
        "Housekeeping, linen & Wi-Fi included",
      ],
    },
    {
      type: "Single Occupancy",
      price: "₹22,500",
      deposit: "1 Month Rent",
      features: [
        "100% private bedroom exclusively for you",
        "King single bed with hotel-grade linen",
        "Private workstation with high-speed port",
        "Attached modern bathroom with rain shower",
        "Private balcony & individual AC",
      ],
    },
  ],
  amenities: [
    { name: "Gigabit Fiber Wi-Fi", included: true },
    { name: "Pro Housekeeping & Linen", included: true },
    { name: "In-House Fitness Gym", included: true },
    { name: "Pool Table & Games Lounge", included: true },
    { name: "UV Neon Chill Space", included: true },
    { name: "Private Modular Kitchen", included: true },
    { name: "Full Generator Backup", included: true },
    { name: "Zero Bans or Curfews", included: true },
  ],
  landmarks: [
    { name: "Phoenix Marketcity Mall", distance: "4 mins drive (1.1 km)" },
    { name: "WeWork / Regus Viman Nagar", distance: "3 mins walk (250m)" },
    { name: "EON IT Park / Kharadi", distance: "12 mins drive (5.2 km)" },
    { name: "Pune International Airport", distance: "6 mins drive (2.1 km)" },
    { name: "Symbiosis Campuses", distance: "5 mins walk (400m)" },
  ],
};

export default function ShubhNirvanaPage() {
  return <PropertyDetailView property={property} />;
}
