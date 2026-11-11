import { renderReforbsOgImage, OG_SIZE } from "@/lib/ogImageTemplate";
import { getPropertyById } from "@/data/properties";

export const runtime = "edge";
export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Vairagya Student Housing near Symbiosis Lavale & ISBM, Pune";

export default function OpenGraphImage() {
  const p = getPropertyById("vairagya")!;
  return renderReforbsOgImage({
    eyebrow: "Student Housing",
    title: p.name,
    subtitle: `${p.tag} • ${p.foodPlan}`,
    badgeText: `From ${p.price}/month`,
    locality: `${p.locality}, Pune`,
  });
}
