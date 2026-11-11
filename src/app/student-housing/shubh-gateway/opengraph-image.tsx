import { renderReforbsOgImage, OG_SIZE } from "@/lib/ogImageTemplate";
import { getPropertyById } from "@/data/properties";

export const runtime = "edge";
export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Shubh Gateway Student Housing opposite Symbiosis Law School, Pune";

export default function OpenGraphImage() {
  const p = getPropertyById("shubh-gateway")!;
  return renderReforbsOgImage({
    eyebrow: "Student Housing",
    title: p.name,
    subtitle: `${p.tag} • ${p.foodPlan}`,
    badgeText: `From ${p.price}/month`,
    locality: `${p.locality}, Pune`,
  });
}
