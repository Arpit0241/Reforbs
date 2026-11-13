import Script from "next/script";

export default function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  if (!measurementId) {
    return null;
  }

  return (
    <Script id="ga4-config" strategy="afterInteractive">
      {`
        if (typeof window.gtag === 'function') {
          window.gtag('config', '${measurementId}', { anonymize_ip: true });
        }
      `}
    </Script>
  );
}
