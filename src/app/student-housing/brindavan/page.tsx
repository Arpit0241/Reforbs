import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyDetailView from "@/components/PropertyDetailView";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { buildPropertySchema } from "@/lib/schema";
import { getPropertyById, toPropertyDetailData } from "@/data/properties";

export const metadata: Metadata = buildPageMetadata({
  title: "Brindavan Student Housing in Viman Nagar, Pune | Reforbs",
  description:
    "Boho student housing on Symbiosis Road, Sakore Nagar, Viman Nagar, 150m from SCMS & SID. Twin ₹27k & Private ₹32k/month with daily meals & AC.",
  path: "/student-housing/brindavan",
});

export default function BrindavanPage() {
  const item = getPropertyById("brindavan");
  if (!item) notFound();
  return (
    <>
      <JsonLd data={buildPropertySchema(item)} />
      <PropertyDetailView property={toPropertyDetailData(item)} />
    </>
  );
}
