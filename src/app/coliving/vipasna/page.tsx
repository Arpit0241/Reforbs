import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyDetailView from "@/components/PropertyDetailView";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { buildPropertySchema } from "@/lib/schema";
import { getPropertyById, toPropertyDetailData } from "@/data/properties";

export const metadata: Metadata = buildPageMetadata({
  title: "Vipasna Co-Living in Sanjay Park, Pune | Reforbs Living",
  description:
    "Hotel-style ensuite co-living in Sanjay Park near Viman Nagar, Pune. Twin ₹17k & private ₹27k with daily meals, AC, housekeeping & zero lock-in.",
  path: "/coliving/vipasna",
});

export default function VipasnaPage() {
  const item = getPropertyById("vipasna");
  if (!item) notFound();
  return (
    <>
      <JsonLd data={buildPropertySchema(item)} />
      <PropertyDetailView property={toPropertyDetailData(item)} />
    </>
  );
}
