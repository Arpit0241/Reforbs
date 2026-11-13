import { notFound } from "next/navigation";
import LocalGuideTemplate, { buildGuideMetadata } from "@/components/seo/LocalGuideTemplate";
import { getLocalGuideBySlug } from "@/data/guides";

const SLUG = "/pg-in-viman-nagar";
export const metadata = buildGuideMetadata(SLUG);

export default function Page() {
  const guide = getLocalGuideBySlug(SLUG);
  if (!guide) notFound();
  return <LocalGuideTemplate guide={guide} />;
}
