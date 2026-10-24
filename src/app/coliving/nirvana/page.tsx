import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

export const metadata = {
  title: "Reforbs Nirvana | Premium Co-Living Viman Nagar Pune",
  description:
    "Reforbs Nirvana - Hippie & backpacker inspired co-living in Viman Nagar, Pune. Neon chill lounge, private kitchens, in-house gym, zero restrictions on friends.",
};

const property: PropertyData = {
  id: "nirvana",
  name: "Reforbs Nirvana",
  category: "Co-Living",
  tagline: "Hippie & Backpacker Inspired Living for Young Working Professionals",
  address: "Central Avenue, Viman Nagar, Pune 411014",
  landmark: "Near Phoenix Marketcity & WeWork Viman Nagar",
  rating: "5.0",
  reviewsCount: 189,
  priceSingle: "₹21,000",
  priceDouble: "₹14,500",
  heroImage: "/images/image3.png",
  galleryImages: [
    "/images/image3.png",
    "/images/image7.png",
    "/images/image4.png",
    "/images/image6.png",
    "/images/image5.png",
  ],
  description:
    "Reforbs Nirvana is our flagship co-living property inspired by the vibrant, artistic, and hippie atmosphere of world-class backpacker hostels. Designed for young IT & corporate professionals in Pune who refuse to settle for sterile apartment life. Includes an artistic UV-lit chill zone, rooftop plant terrace, fully equipped co-working pods, in-house gym, pool table, and full freedom to invite friends over.",
  roomTypes: [
    {
      type: "Double Occupancy",
      price: "₹14,500",
      deposit: "1 Month Rent",
      features: [
        "Two plush beds with spring mattresses",
        "Individual wardrobes with secure digital locks",
        "Private balcony overlooking green canopy",
        "Designer attached bathroom",
        "Housekeeping, linen & Wi-Fi included",
      ],
    },
    {
      type: "Single Occupancy",
      price: "₹21,000",
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
    { name: "Gigabit Fiber Wi-Fi", icon: "wifi", included: true },
    { name: "Pro Housekeeping & Linen", icon: "sparkles", included: true },
    { name: "In-House Fitness Gym", icon: "dumbbell", included: true },
    { name: "Pool Table & Game Lounge", icon: "gamepad", included: true },
    { name: "UV Neon Chill Space", icon: "sun", included: true },
    { name: "Private Modular Kitchen", icon: "utensils", included: true },
    { name: "Full Generator Backup", icon: "power", included: true },
    { name: "Zero Bans or Curfews", icon: "shield", included: true },
  ],
  landmarks: [
    { name: "Phoenix Marketcity Mall", distance: "4 mins drive (1.1 km)" },
    { name: "WeWork / Regus Viman Nagar", distance: "3 mins walk (250m)" },
    { name: "EON IT Park / Kharadi", distance: "12 mins drive (5.2 km)" },
    { name: "Pune International Airport", distance: "6 mins drive (2.1 km)" },
    { name: "Symbiosis Campuses", distance: "5 mins walk (400m)" },
    { name: "Koregaon Park Restaurants", distance: "10 mins drive (4.2 km)" },
  ],
};

export default function NirvanaPage() {
  return <PropertyDetailView property={property} />;
}
