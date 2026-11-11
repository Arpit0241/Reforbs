import { renderReforbsOgImage, OG_SIZE } from "@/lib/ogImageTemplate";
import { getPropertyById } from "@/data/properties";

export const runtime = "edge";
export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Brindavan Student Housing near SCMS & SID, Viman Nagar, Pune";

export default function OpenGraphImage() {
  const p = getPropertyById("brindavan")!;
  return renderReforbsOgImage({
    eyebrow: "Student Housing",
    title: p.name,
    subtitle: `${p.tag} • ${p.foodPlan}`,
    badgeText: `Twin ${p.priceDouble} | Private ${p.priceSingle}`,
    locality: `${p.locality}, Pune`,
  });
}
