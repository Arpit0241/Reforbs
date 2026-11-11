export type AnalyticsEventName =
  | "whatsapp_click"
  | "call_click"
  | "visit_form_start"
  | "visit_form_submit";

export interface AnalyticsEventParams {
  source?: string;
  property?: string;
  label?: string;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Privacy-safe GA4 event tracker. Never forwards user PII (names or phone numbers).
 * Emits gtag events only when GA4 has been loaded via NEXT_PUBLIC_GA_MEASUREMENT_ID.
 */
export function trackEvent(
  eventName: AnalyticsEventName,
  params?: AnalyticsEventParams
): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, {
      event_category: "conversion",
      ...(params || {}),
    });
  }
}
