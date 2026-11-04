import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

export const metadata = {
  title: "Pillar Homes | Corporate Company Guesthouse Clover Park - Reforbs",
  description:
    "Reforbs Pillar Homes - Dedicated company guesthouse for corporate partner employees in Clover Park, Viman Nagar, Pune. Managed corporate residence (not an open PG).",
};

const property: PropertyData = {
  id: "pillar-homes",
  name: "Pillar Homes",
  category: "Company Guesthouse",
  tagline: "Dedicated Corporate Guesthouse in Clover Park (Contracted Corporate Personnel Only)",
  address: "Clover Park, Viman Nagar, Pune",
  landmark: "Clover Park, Viman Nagar",
  rating: "4.9",
  reviewsCount: 135,
  priceDouble: "₹25,000",
  contactPhone: "+91 74200 40241",
  googleMapsUrl: "https://maps.app.goo.gl/u5K8f7H9Y4X2Z1W18",
  coupleFriendly: false,
  annualLockIn: false,
  foodPolicy: "Corporate Dining / Catering Facilitated",
  laundryPolicy: "In-house laundry management",
  heroImage: "/images/properties/pillar-homes/image-1.jpg",
  galleryImages: [
    "/images/properties/pillar-homes/image-1.jpg",
    "/images/properties/pillar-homes/image-2.jpg",
    "/images/properties/pillar-homes/image-3.jpg",
    "/images/properties/pillar-homes/image-4.jpg",
    "/images/properties/pillar-homes/image-5.jpg",
    "/images/properties/pillar-homes/image-6.jpg",
  ],
  description:
    "Pillar Homes is a specialized company guesthouse located in prime Clover Park, Viman Nagar. Reserved exclusively for employees and associates of partner corporate clients, providing upscale hospitality, executive comfort, and complete discretion. Not available as a retail PG.",
  roomTypes: [
    {
      type: "Twin Sharing Executive Suite",
      price: "₹25,000",
      deposit: "₹25,000 (1 Month Security Deposit)",
      features: [
        "Reserved exclusively for corporate enterprise guests",
        "Two luxury wooden beds with posture mattresses",
        "Dual executive work desks with high-speed ports",
        "Attached washroom with 24/7 hot water geyser",
        "Full daily housekeeping and linen services included",
      ],
    },
  ],
  amenities: [
    { name: "Exclusive Corporate Guesthouse", included: true },
    { name: "Clover Park Prime Location", included: true },
    { name: "High-Speed Enterprise Wi-Fi", included: true },
    { name: "Professional Daily Cleaning", included: true },
    { name: "24/7 Power Backup & Security", included: true },
    { name: "Not an Open Public PG", included: true },
  ],
  landmarks: [
    { name: "Clover Park Central Green", distance: "2 mins walk (100m)" },
    { name: "Symbiosis Campuses", distance: "4 mins drive (1.1 km)" },
    { name: "Phoenix Marketcity", distance: "5 mins drive (1.4 km)" },
    { name: "Pune International Airport", distance: "7 mins drive (2.3 km)" },
  ],
};

export default function PillarHomesPage() {
  return <PropertyDetailView property={property} />;
}
