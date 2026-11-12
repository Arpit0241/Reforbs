import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DeferredChatbot from "@/components/chatbot/DeferredChatbot";
import StickyBottomBar from "@/components/StickyBottomBar";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import JsonLd from "@/components/seo/JsonLd";
import { buildOrganizationSchema, buildWebSiteSchema } from "@/lib/schema";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#007A7A",
};

import { canonicalUrl, getSiteUrl } from "@/lib/siteUrl";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: "Co-Living & Student Housing in Pune, Zero Lock-in | Reforbs",
  description:
    "Furnished co-living and student housing in Pune near Symbiosis, Viman Nagar and IT parks. Private kitchens, food and Wi-Fi included. Book a free visit.",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/icon.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "qoSKpPpZxskd9cuwhgm0Q6MjeD83pi2Y8IJCecYhM9w",
    other: process.env.NEXT_PUBLIC_BING_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION }
      : undefined,
  },
  openGraph: {
    title: "Co-Living & Student Housing in Pune, Zero Lock-in | Reforbs",
    description:
      "Furnished co-living and student housing in Pune near Symbiosis, Viman Nagar and IT parks. Private kitchens, food and Wi-Fi included.",
    url: canonicalUrl("/"),
    siteName: "Reforbs Living",
    images: [
      {
        url: "/images/reforbs-hero-community.webp",
        width: 1200,
        height: 630,
        alt: "Reforbs Living Co-Living & Student Housing Community in Pune",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Co-Living & Student Housing in Pune, Zero Lock-in | Reforbs",
    description:
      "Furnished co-living and student housing in Pune near Symbiosis, Viman Nagar and IT parks.",
    images: ["/images/reforbs-hero-community.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="antialiased font-sans bg-white text-slate-900 selection:bg-brand-teal selection:text-white">
        <JsonLd data={[buildOrganizationSchema(), buildWebSiteSchema()]} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <DeferredChatbot />
        <StickyBottomBar />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
