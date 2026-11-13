import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyDetailView from "@/components/PropertyDetailView";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { buildPropertySchema } from "@/lib/schema";
import { getPropertyById, toPropertyDetailData } from "@/data/properties";

export const metadata: Metadata = buildPageMetadata({
  title: "Moksha | 3BHK Co-Living & PG in Sanjay Park, Viman Nagar | Reforbs",
  description:
    "Low-density 3BHK PG in Sanjay Park near Viman Nagar & Yerwada. Max 4 residents per floor. Twin ₹17k & private ₹24k with daily food, Wi-Fi & zero lock-in.",
  path: "/coliving/moksha",
});

export default function MokshaPage() {
  const item = getPropertyById("moksha");
  if (!item) notFound();
  return (
    <>
      <JsonLd data={buildPropertySchema(item)} />
      <PropertyDetailView property={toPropertyDetailData(item)} />
    </>
  );
}
