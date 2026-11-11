const RAW_CONFIGURED_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "") || "";

const RAW_SITE_URL = RAW_CONFIGURED_SITE_URL || "https://reforbs.com";

export const CONFIGURED_SITE_URL = RAW_CONFIGURED_SITE_URL;
export const SITE_URL = RAW_SITE_URL;
export const SITE_HOST = new URL(SITE_URL).host.toLowerCase();
export const IS_CANONICAL_DOMAIN_ACTIVE =
  RAW_CONFIGURED_SITE_URL.toLowerCase() === "https://reforbs.com";

export function getSiteUrl(): URL {
  return new URL(SITE_URL);
}

const TRACKING_PARAMS = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "fbclid",
  "gclid",
  "mc_cid",
  "mc_eid",
  "ref",
]);

export function canonicalUrl(pathname: string = "/"): string {
  const clean = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const normalized = clean === "/" ? "/" : clean.replace(/\/+$/, "");
  return normalized === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;
}

export function stripTrackingSearchParams(searchParams: URLSearchParams): URLSearchParams {
  const next = new URLSearchParams();
  searchParams.forEach((v, k) => {
    if (!TRACKING_PARAMS.has(k.toLowerCase())) {
      next.append(k, v);
    }
  });
  return next;
}

export function normalizeTelHref(phone?: string): string {
  const digits = (phone || "917420040241").replace(/\D/g, "");
  if (digits.length === 10) return `tel:+91${digits}`;
  if (digits.startsWith("91") && digits.length === 12) return `tel:+${digits}`;
  return "tel:+917420040241";
}
