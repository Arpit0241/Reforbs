import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata = buildPageMetadata({
  title: "Park Island Corporate Guesthouse, Shastrinagar | Reforbs",
  description:
    "Dedicated corporate company guesthouse for partner enterprise employees in Shastrinagar, Pune. Managed 3BHK corporate residence, not open as public PG.",
  path: "/coliving/park-island",
  image: "/images/properties/park-island/image-1.jpg",
  noindex: true,
});

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
  foodPolicy: "Food & daily meals included.",
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
    { name: "Food & Meals Included", included: true },
    { name: "Dedicated Corporate Facility", included: true },
    { name: "Enterprise Optical Fiber Wi-Fi", included: true },
    { name: "Professional Daily Housekeeping", included: true },
    { name: "Corporate Guesthouse (Not Open PG)", included: true },
    { name: "Inverter Backup", included: true },
    { name: "24/7 Security & Access Control", included: true },
  ],
  landmarks: [
    { name: "Commerzone IT Park", distance: "1.5 km" },
    { name: "Business Bay", distance: "2 km" },
    { name: "Pune Airport", distance: "3 km" },
    { name: "Phoenix Mall", distance: "4 km" },
    { name: "Gigaspace IT Park", distance: "5 km" },
    { name: "Metro Station", distance: "5 km" },
    { name: "Panchshil Tech Park", distance: "6 km" },
  ],
};

export default function ParkIslandPage() {
  return <PropertyDetailView property={property} />;
}
