import { notFound } from "next/navigation";
import LocalGuideTemplate, { buildGuideMetadata } from "@/components/seo/LocalGuideTemplate";
import { getLocalGuideBySlug } from "@/data/guides";

const SLUG = "/coliving-near-airport-pune";
export const metadata = buildGuideMetadata(SLUG);

export default function GuidePage() {
  const guide = getLocalGuideBySlug(SLUG);
  if (!guide) notFound();
  return <LocalGuideTemplate guide={guide} />;
}
