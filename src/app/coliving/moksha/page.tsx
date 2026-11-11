import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyDetailView from "@/components/PropertyDetailView";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { getPropertyById, toPropertyDetailData } from "@/data/properties";

export const metadata: Metadata = buildPageMetadata({
  title: "Moksha Co-Living in Sanjay Park, Viman Nagar | Reforbs",
  description:
    "Stylish 3BHK co-living in Sanjay Park, Viman Nagar, Pune. Twin rooms from ₹17k & private rooms ₹24k with daily food, Wi-Fi & zero lock-in.",
  path: "/coliving/moksha",
  image: "/images/properties/moksha/image-1.jpg",
});

export default function MokshaPage() {
  const item = getPropertyById("moksha");
  if (!item) notFound();
  return <PropertyDetailView property={toPropertyDetailData(item)} />;
}
