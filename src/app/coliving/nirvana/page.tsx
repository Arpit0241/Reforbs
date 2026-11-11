import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyDetailView from "@/components/PropertyDetailView";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { getPropertyById, toPropertyDetailData } from "@/data/properties";

export const metadata: Metadata = buildPageMetadata({
  title: "Nirvana Co-Living in Sanjay Park, Viman Nagar | Reforbs",
  description:
    "Furnished twin (₹17k) & private 1RK (₹29k) co-living with private kitchens in Sanjay Park, 1.5 km from Viman Nagar & Pune Airport. Zero lock-in.",
  path: "/coliving/nirvana",
  image: "/images/properties/nirvana/image-1.jpg",
});

export default function NirvanaPage() {
  const item = getPropertyById("nirvana");
  if (!item) notFound();
  return <PropertyDetailView property={toPropertyDetailData(item)} />;
}
