import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyDetailView from "@/components/PropertyDetailView";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { getPropertyById, toPropertyDetailData } from "@/data/properties";

export const metadata: Metadata = buildPageMetadata({
  title: "Shubh Gateway Student Housing Opp. SLS Pune | Reforbs",
  description:
    "Student housing 150m opposite Symbiosis Law School, Viman Nagar, Pune. Girls Twin ₹25k & Boys Twin ₹27k with meals, laundry & gated towers.",
  path: "/student-housing/shubh-gateway",
  image: "/images/properties/sls/image-1.jpg",
});

export default function ShubhGatewayPage() {
  const item = getPropertyById("shubh-gateway");
  if (!item) notFound();
  return <PropertyDetailView property={toPropertyDetailData(item)} />;
}
