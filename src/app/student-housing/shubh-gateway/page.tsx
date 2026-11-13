import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyDetailView from "@/components/PropertyDetailView";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { buildPropertySchema } from "@/lib/schema";
import { getPropertyById, toPropertyDetailData } from "@/data/properties";

export const metadata: Metadata = buildPageMetadata({
  title: "Shubh Gateway | Boys & Girls PG in Viman Nagar Opp. SLS Pune | Reforbs",
  description:
    "Premier Boys PG & Girls PG in Viman Nagar directly opposite Symbiosis Law School (150m walk). Gender-segregated towers, meals & 2x/wk laundry included. AC rooms.",
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
