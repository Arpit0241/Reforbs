import PropertyDetailView, { PropertyData } from "@/components/PropertyDetailView";

export const metadata = {
  title: "Suyog Enclave | Dedicated Corporate Guesthouse Sakore Nagar - Reforbs",
  description:
    "Reforbs Suyog Enclave - Dedicated company guesthouse behind Bajaj Finserv in Sakore Nagar, Pune. Exclusively for corporate partner employees (not open to general public / retail PGs).",
};

const property: PropertyData = {
  id: "suyog-enclave",
  name: "Suyog Enclave",
  category: "Company Guesthouse",
  tagline: "Dedicated Corporate Guesthouse behind Bajaj Finserv (Corporate Personnel Only)",
  address: "64P, behind Bajaj Finserv, Sakore Nagar, Pune",
  landmark: "Behind Bajaj Finserv, Sakore Nagar",
  rating: "4.9",
  reviewsCount: 138,
  priceDouble: "₹25,000",
  contactPhone: "+91 74200 40241",
  googleMapsUrl: "https://maps.app.goo.gl/j3K9N2M8P7L1X6W58",
  coupleFriendly: false,
  annualLockIn: false,
  foodPolicy: "Food & daily meals included.",
  laundryPolicy: "Professional laundry services on premises",
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
    "Suyog Enclave is a dedicated company guesthouse located behind Bajaj Finserv in Sakore Nagar, Pune. Reserved exclusively for employees of partnered corporate enterprises, featuring corporate-standard housekeeping, security, and tranquility. Not an open PG.",
  roomTypes: [
    {
      type: "Twin Sharing Corporate Suite",
      price: "₹25,000",
      deposit: "₹25,000 (1 Month Security Deposit)",
      features: [
        "Reserved exclusively for corporate enterprise guests",
        "Two executive beds with ergonomic work desks",
        "Attached washroom with continuous hot water supply",
        "Daily housekeeping included",
        "High-speed enterprise fiber network",
      ],
    },
  ],
  amenities: [
    { name: "Food & Meals Included", included: true },
    { name: "Dedicated Corporate Guesthouse", included: true },
    { name: "Behind Bajaj Finserv Hub", included: true },
    { name: "Enterprise Optical Fiber Wi-Fi", included: true },
    { name: "Professional Daily Cleaning", included: true },
    { name: "Inverter Backup & Security", included: true },
    { name: "Not an Open Public PG", included: true },
  ],
  landmarks: [
    { name: "Bajaj Finserv", distance: "200 m" },
    { name: "Solitaire Business Hub", distance: "500 m" },
    { name: "Panchshil Tech Park", distance: "700 m" },
    { name: "Phoenix Mall", distance: "800 m" },
    { name: "Gigaspace IT Park", distance: "1 km" },
    { name: "Metro Station", distance: "1 km" },
    { name: "Symbiosis Management College", distance: "1.5 km" },
    { name: "Symbiosis Law School", distance: "2.5 km" },
    { name: "Pune Airport", distance: "2.5 km" },
  ],
};

export default function SuyogEnclavePage() {
  return <PropertyDetailView property={property} />;
}
