import { renderReforbsOgImage, OG_SIZE } from "@/lib/ogImageTemplate";
import { getPropertyById } from "@/data/properties";

export const runtime = "edge";
export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Vipasna Co-Living in Sanjay Park, Pune";

export default function OpenGraphImage() {
  const p = getPropertyById("vipasna")!;
  return renderReforbsOgImage({
    eyebrow: p.category,
    title: p.name,
    subtitle: `${p.tag} • ${p.lockInPolicy}`,
    badgeText: `Twin ${p.priceDouble} | Private ${p.priceSingle}`,
    locality: `${p.locality}, Pune`,
  });
}
