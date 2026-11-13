import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyDetailView from "@/components/PropertyDetailView";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { buildPropertySchema } from "@/lib/schema";
import { getPropertyById, toPropertyDetailData } from "@/data/properties";

export const metadata: Metadata = buildPageMetadata({
  title: "Nirvana | Couple Friendly PG in Viman Nagar & Sanjay Park | Reforbs",
  description:
    "Couple friendly PG in Viman Nagar & Sanjay Park with private kitchen & AC. Twin (₹17k) & private 1RK suites (₹29k). Zero lock-in with 30-day notice. Food included.",
  path: "/coliving/nirvana",
});

export default function NirvanaPage() {
  const item = getPropertyById("nirvana");
  if (!item) notFound();
  return (
    <>
      <JsonLd data={buildPropertySchema(item)} />
      <PropertyDetailView property={toPropertyDetailData(item)} />
    </>
  );
}
