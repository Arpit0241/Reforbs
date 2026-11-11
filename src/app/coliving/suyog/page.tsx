import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyDetailView from "@/components/PropertyDetailView";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { getPropertyById, toPropertyDetailData } from "@/data/properties";

export const metadata: Metadata = buildPageMetadata({
  title: "Suyog Enclave Corporate Guesthouse, Pune | Reforbs",
  description:
    "Suyog Enclave behind Bajaj Finserv in Sakore Nagar, Viman Nagar is a dedicated corporate company guesthouse for partner teams. Not open as public PG.",
  path: "/coliving/suyog",
  image: "/images/properties/suyog/image-1.jpg",
  noindex: true,
});

export default function SuyogPage() {
  const item = getPropertyById("suyog");
  if (!item) notFound();
  return <PropertyDetailView property={toPropertyDetailData(item)} />;
}
