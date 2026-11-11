import { ImageResponse } from "next/og";
import { SITE_HOST } from "@/lib/siteUrl";

export const OG_SIZE = { width: 1200, height: 630 };

interface OgCardOptions {
  eyebrow: string;
  title: string;
  subtitle: string;
  badgeText?: string;
  locality?: string;
}

export function renderReforbsOgImage({
  eyebrow,
  title,
  subtitle,
  badgeText,
  locality = "Pune, Maharashtra",
}: OgCardOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background: "linear-gradient(135deg, #042929 0%, #006A6A 55%, #007A7A 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                backgroundColor: "#FFDE59",
                color: "#111827",
                padding: "10px 22px",
                borderRadius: "999px",
                fontSize: "20px",
                fontWeight: 900,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {eyebrow}
            </div>
            <div style={{ fontSize: "22px", color: "#E6F4F3", fontWeight: 700 }}>{locality}</div>
          </div>

          <div
            style={{
              fontSize: "26px",
              fontWeight: 900,
              letterSpacing: "0.18em",
              color: "#FFDE59",
            }}
          >
            REFORBS
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "1000px" }}>
          <div
            style={{
              fontSize: "62px",
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 500,
              lineHeight: 1.35,
              color: "#E6F4F3",
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid rgba(255, 255, 255, 0.18)",
            paddingTop: "24px",
          }}
        >
          <div style={{ fontSize: "22px", fontWeight: 700, color: "#FFDE59", letterSpacing: "0.18em" }}>
            #LIVETHEVIBES • DIRECT HOST PRICING
          </div>
          {badgeText ? (
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.14)",
                border: "1px solid rgba(255,255,255,0.3)",
                padding: "10px 24px",
                borderRadius: "999px",
                fontSize: "22px",
                fontWeight: 800,
              }}
            >
              {badgeText}
            </div>
          ) : (
            <div style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF" }}>{SITE_HOST}</div>
          )}
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
