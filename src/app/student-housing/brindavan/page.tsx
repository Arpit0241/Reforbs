import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyDetailView from "@/components/PropertyDetailView";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { getPropertyById, toPropertyDetailData } from "@/data/properties";

export const metadata: Metadata = buildPageMetadata({
  title: "Brindavan Student Housing in Viman Nagar, Pune | Reforbs",
  description:
    "Boho student housing on Symbiosis Road, Sakore Nagar, Viman Nagar, 150m from SCMS & SID. Twin ₹27k & Private ₹32k/month with daily meals & AC.",
  path: "/student-housing/brindavan",
  image: "/images/properties/brindavan/image-1.jpg",
});

export default function BrindavanPage() {
  const item = getPropertyById("brindavan");
  if (!item) notFound();
  return <PropertyDetailView property={toPropertyDetailData(item)} />;
}
