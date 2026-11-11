import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyDetailView from "@/components/PropertyDetailView";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { getPropertyById, toPropertyDetailData } from "@/data/properties";

export const metadata: Metadata = buildPageMetadata({
  title: "Vairagya Student Housing Near Symbiosis Lavale | Reforbs",
  description:
    "Student housing 500m from Symbiosis University & ISBM in Lavale, Pune. Triple ₹15,000 & twin ₹17,000/month with daily meals, laundry & Wi-Fi.",
  path: "/student-housing/vairagya",
  image: "/images/properties/vairagya/image-1.jpg",
});

export default function VairagyaPage() {
  const item = getPropertyById("vairagya");
  if (!item) notFound();
  return <PropertyDetailView property={toPropertyDetailData(item)} />;
}
