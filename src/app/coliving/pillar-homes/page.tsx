import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyDetailView from "@/components/PropertyDetailView";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { getPropertyById, toPropertyDetailData } from "@/data/properties";

export const metadata: Metadata = buildPageMetadata({
  title: "Pillar Homes Corporate Stays, Viman Nagar | Reforbs",
  description:
    "Pillar Homes in Sakore Nagar, Viman Nagar is an exclusive company guesthouse for corporate partner employees in Pune. Not open as a retail PG.",
  path: "/coliving/pillar-homes",
  image: "/images/properties/pillar-homes/image-1.jpg",
  noindex: true,
});

export default function PillarHomesPage() {
  const item = getPropertyById("pillar-homes");
  if (!item) notFound();
  return <PropertyDetailView property={toPropertyDetailData(item)} />;
}
