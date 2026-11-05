import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

export const metadata = {
  title: "Park Island | Dedicated Corporate Guesthouse Shastrinagar - Reforbs",
  description:
    "Reforbs Park Island - Dedicated company guesthouse for corporate partner employees in Shastrinagar, Pune. Corporate managed housing (not open to general public / retail PGs).",
};

const property: PropertyData = {
  id: "park-island",
  name: "Park Island",
  category: "Company Guesthouse",
  tagline: "Dedicated Corporate Guesthouse (Exclusively for Designated Corporate Employees)",
  address: "Shastrinagar, Pune 411006",
  landmark: "Shastrinagar, Pune",
  rating: "4.9",
  reviewsCount: 142,
  priceDouble: "₹20,000",
  contactPhone: "+91 74200 40241",
  googleMapsUrl: "https://maps.app.goo.gl/o1S39E1QnLh1K7C77",
  coupleFriendly: false,
  annualLockIn: false,
  foodPolicy: "Food details to be confirmed with the team.",
  laundryPolicy: "Professional laundry services on premises",
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
    "Park Island is a dedicated corporate company guesthouse exclusively managed for employees of designated corporate partners. This property is reserved for contracted corporate personnel and is not open as a general public PG.",
  roomTypes: [
    {
      type: "Twin Sharing Corporate Suite",
      price: "₹20,000",
      deposit: "₹20,000 (1 Month Security Deposit)",
      features: [
        "Dedicated corporate employee accommodation",
        "Two luxury executive beds with orthopaedic bedding",
        "High-speed enterprise fiber Wi-Fi & work stations",
        "Attached washroom with 24/7 hot water supply",
        "Professional daily housekeeping",
      ],
    },
  ],
  amenities: [
    { name: "Dedicated Corporate Facility", included: true },
    { name: "Enterprise Optical Fiber Wi-Fi", included: true },
    { name: "Professional Daily Housekeeping", included: true },
    { name: "Corporate Guesthouse (Not Open PG)", included: true },
    { name: "Inverter Backup", included: true },
    { name: "24/7 Security & Access Control", included: true },
  ],
  landmarks: [
    { name: "Shastrinagar Main Chowk", distance: "2 mins walk (150m)" },
    { name: "Kharadi EON IT Park", distance: "8 mins drive (3.8 km)" },
    { name: "Kalyani Nagar Tech Parks", distance: "6 mins drive (2.4 km)" },
    { name: "Pune International Airport", distance: "10 mins drive (4.2 km)" },
  ],
};

export default function ParkIslandPage() {
  return <PropertyDetailView property={property} />;
}
