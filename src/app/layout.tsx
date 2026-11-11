import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReforbsChatbot from "@/components/chatbot/ReforbsChatbot";
import StickyBottomBar from "@/components/StickyBottomBar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#007A7A",
};

import { getSiteUrl } from "@/lib/siteUrl";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: "Co-Living & Student Housing in Pune, Zero Lock-in | Reforbs",
  description:
    "Furnished co-living and student housing in Pune near Symbiosis, Viman Nagar and IT parks. Private kitchens, food and Wi-Fi included. Book a free visit.",
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION }
      : undefined,
  },
  openGraph: {
    title: "Co-Living & Student Housing in Pune, Zero Lock-in | Reforbs",
    description:
      "Furnished co-living and student housing in Pune near Symbiosis, Viman Nagar and IT parks. Private kitchens, food and Wi-Fi included.",
    url: "/",
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
    <html lang="en-IN">
      <body className="antialiased font-sans bg-white text-slate-900 selection:bg-brand-teal selection:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ReforbsChatbot />
        <StickyBottomBar />
      </body>
    </html>
  );
}
