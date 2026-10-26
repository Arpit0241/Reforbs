export interface LeadData {
  name: string;
  phone: string;
  property: string;
  visitDate?: string;
  source: string;
}

/**
 * Builds the WhatsApp direct chat URL with a clean, prefilled inquiry message
 */
export function buildWhatsAppUrl(data: LeadData): string {
  const phoneTarget = "917420040241";
  const dateInfo = data.visitDate ? ` for ${data.visitDate}` : "";
  const message = `Hi Reforbs! My name is ${data.name.trim()}. I am interested in ${data.property}${dateInfo}. Please share pricing, availability, and tour details!`;
  return `https://wa.me/${phoneTarget}?text=${encodeURIComponent(message)}`;
}

/**
 * Automatically launches WhatsApp in the user's browser/app
 */
export function openWhatsAppDirectly(data: LeadData): string {
  const url = buildWhatsAppUrl(data);
  if (typeof window !== "undefined") {
    // Attempt opening in a new tab; fall back to location change if blocked
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) {
      window.location.href = url;
    }
  }
  return url;
}

/**
 * Submits lead to Google Sheets webhook via /api/lead AND automatically opens WhatsApp
 */
export async function submitLead(data: LeadData): Promise<{ success: boolean; whatsappUrl: string }> {
  const whatsappUrl = buildWhatsAppUrl(data);

  // 1. Post to Google Sheets via backend API route
  try {
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      }),
      keepalive: true,
    }).catch((err) => {
      console.warn("Background sheet sync:", err);
    });
  } catch (err) {
    console.warn("Lead submission error:", err);
  }

  // 2. Automatically launch WhatsApp for direct conversation
  openWhatsAppDirectly(data);

  return { success: true, whatsappUrl };
}
