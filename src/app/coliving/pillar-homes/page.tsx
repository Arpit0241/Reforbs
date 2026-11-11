import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata = buildPageMetadata({
  title: "Pillar Homes Corporate Guesthouse, Viman Nagar | Reforbs",
  description:
    "Dedicated corporate company guesthouse for partner enterprise employees in Clover Park, Viman Nagar, Pune. Not available as public PG accommodation.",
  path: "/coliving/pillar-homes",
  image: "/images/properties/pillar-homes/image-1.jpg",
  noindex: true,
});

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
  foodPolicy: "Food & daily meals included.",
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
        "Full daily housekeeping included",
      ],
    },
  ],
  amenities: [
    { name: "Food & Meals Included", included: true },
    { name: "Exclusive Corporate Guesthouse", included: true },
    { name: "Clover Park Prime Location", included: true },
    { name: "High-Speed Enterprise Wi-Fi", included: true },
    { name: "Professional Daily Cleaning", included: true },
    { name: "Inverter Backup & Security", included: true },
    { name: "Not an Open Public PG", included: true },
  ],
  landmarks: [
    { name: "Panchshil Tech Park", distance: "700 m" },
    { name: "Gigaspace IT Park", distance: "800 m" },
    { name: "Bajaj Finserv", distance: "1 km" },
    { name: "Phoenix Mall", distance: "1 km" },
    { name: "Solitaire Business Hub", distance: "1 km" },
    { name: "Metro Station", distance: "1 km" },
    { name: "Symbiosis Management College", distance: "2 km" },
    { name: "Pune Airport", distance: "2.5 km" },
    { name: "Symbiosis Law School", distance: "3 km" },
  ],
};

export default function PillarHomesPage() {
  return <PropertyDetailView property={property} />;
}
