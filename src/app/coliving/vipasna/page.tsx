import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyDetailView from "@/components/PropertyDetailView";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { buildPropertySchema } from "@/lib/schema";
import { getPropertyById, toPropertyDetailData } from "@/data/properties";

export const metadata: Metadata = buildPageMetadata({
  title: "Vipasna | Hotel-Style Ensuite PG in Sanjay Park, Viman Nagar | Reforbs",
  description:
    "Boutique ensuite PG in Lane 3, Sanjay Park near Viman Nagar & Yerwada. Every room has private bathroom & AC. Twin ₹17k & private ₹27k. Zero lock-in.",
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
