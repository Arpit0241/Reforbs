import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyDetailView from "@/components/PropertyDetailView";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { buildPropertySchema } from "@/lib/schema";
import { getPropertyById, toPropertyDetailData } from "@/data/properties";

export const metadata: Metadata = buildPageMetadata({
  title: "Vairagya Student Housing Near Symbiosis Lavale | Reforbs",
  description:
    "Student housing 500m from Symbiosis University & ISBM in Lavale, Pune. Triple ₹15,000 & twin ₹17,000/month with daily meals, laundry & Wi-Fi.",
  path: "/student-housing/vairagya",
});

export default function VairagyaPage() {
  const item = getPropertyById("vairagya");
  if (!item) notFound();
  return (
    <>
      <JsonLd data={buildPropertySchema(item)} />
      <PropertyDetailView property={toPropertyDetailData(item)} />
    </>
  );
}
