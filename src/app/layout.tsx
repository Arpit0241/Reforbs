import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyBottomBar from "@/components/StickyBottomBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://reforbs.com"),
  title: "Reforbs Living | Modern Co-Living & Student Housing in Pune",
  description:
    "Reforbs offers innovative co-living spaces and student housing in Viman Nagar, Pune. Enjoy single & double occupancy rooms, benchmark amenities, vibrant backpacker-inspired community, and zero restrictions. Discover Nirvana, Moksha, ABC (near SLS) & XYZ (near SCMS).",
  keywords:
    "coliving pune, student housing pune, viman nagar pg, reforbs, reforbs living, symbiosis law school accommodation, scms pune pg, nirvana coliving, moksha coliving, pune coliving spaces",
  openGraph: {
    title: "Reforbs Living | Modern Co-Living & Student Housing in Pune",
    description:
      "Experience the future of shared living in Pune. Curated spaces built for comfort, freedom, and emotional connect.",
    url: "https://reforbs.com",
    siteName: "Reforbs Living",
    images: [{ url: "/images/image4.png", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-white text-slate-900 selection:bg-brand-teal selection:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <StickyBottomBar />
      </body>
    </html>
  );
}
