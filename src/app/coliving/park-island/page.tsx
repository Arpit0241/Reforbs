import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyDetailView from "@/components/PropertyDetailView";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { getPropertyById, toPropertyDetailData } from "@/data/properties";

export const metadata: Metadata = buildPageMetadata({
  title: "Park Island Corporate Guesthouse, Shastri Nagar | Reforbs",
  description:
    "Park Island at Shastri Nagar near Viman Nagar is a dedicated corporate company guesthouse for partner employees in Pune. Not open as public PG.",
  path: "/coliving/park-island",
  image: "/images/properties/park-island/image-1.jpg",
  noindex: true,
});

export default function ParkIslandPage() {
  const item = getPropertyById("park-island");
  if (!item) notFound();
  return <PropertyDetailView property={toPropertyDetailData(item)} />;
}
