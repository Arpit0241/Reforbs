import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyDetailView from "@/components/PropertyDetailView";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { buildPropertySchema } from "@/lib/schema";
import { getPropertyById, toPropertyDetailData } from "@/data/properties";

export const metadata: Metadata = buildPageMetadata({
  title: "Shubh Gateway Student Housing Opp. SLS Pune | Reforbs",
  description:
    "Student housing 150m opposite Symbiosis Law School, Viman Nagar, Pune. Girls Twin ₹25k & Boys Twin ₹27k with meals, laundry & gated towers.",
  path: "/student-housing/shubh-gateway",
});

export default function ShubhGatewayPage() {
  const item = getPropertyById("shubh-gateway");
  if (!item) notFound();
  return (
    <>
      <JsonLd data={buildPropertySchema(item)} />
      <PropertyDetailView property={toPropertyDetailData(item)} />
    </>
  );
}
