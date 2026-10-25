"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Check,
  ArrowRight,
  GraduationCap,
  Building2,
  Star,
  Phone,
} from "lucide-react";

export interface PropertyItem {
  id: string;
  name: string;
  category: "Student Housing" | "Co-Living";
  tag: string;
  location: string;
  subLocation: string;
  priceDouble: string;
  priceSingle: string;
  coverImage: string;
  gallery: string[];
  description: string;
  highlights: string[];
  link: string;
}

export const propertiesData: PropertyItem[] = [
  // Student Housing
  {
    id: "shubh-gateway",
    name: "Shubh Gateway",
    category: "Student Housing",
    tag: "Opposite Symbiosis Law School",
    location: "Viman Nagar, Pune",
    subLocation: "Directly opposite SLS Campus Gate",
    priceDouble: "₹12,500",
    priceSingle: "₹18,000",
    coverImage: "/assets/pdf/extracted/page-7-image-1-X4.jpg",
    gallery: [
      "/assets/pdf/extracted/page-7-image-1-X4.jpg",
      "/assets/pdf/extracted/page-7-image-2-X6.jpg",
      "/assets/pdf/extracted/page-7-image-3-X7.jpg",
      "/assets/pdf/extracted/page-7-image-4-X8.jpg",
    ],
    description:
      "Opposite Symbiosis Law School. Purpose-built for law students needing quiet study sanctuaries, zero daily commute, high-speed optical fiber, and round-the-clock supportive hosts.",
    highlights: ["Opposite SLS Campus", "Quiet Study Zone", "Zero Commute", "Private Kitchens"],
    link: "/student-housing/shubh-gateway",
  },
  {
    id: "sakore-nagar",
    name: "Reforbs Living Sakore Nagar",
    category: "Student Housing",
    tag: "Near SCMS & Symbiosis Hub",
    location: "Sakore Nagar, Viman Nagar, Pune",
    subLocation: "3 mins walk to SCMS campus",
    priceDouble: "₹12,000",
    priceSingle: "₹17,500",
    coverImage: "/assets/pdf/extracted/page-6-image-1-X4.jpg",
    gallery: [
      "/assets/pdf/extracted/page-6-image-1-X4.jpg",
      "/assets/pdf/extracted/page-6-image-2-X6.jpg",
      "/assets/pdf/extracted/page-6-image-3-X7.jpg",
      "/assets/pdf/extracted/page-6-image-4-X8.jpg",
    ],
    description:
      "Modern student residence nestled in peaceful Sakore Nagar, Viman Nagar. Features spacious balconies, daily housekeeping, high-speed fiber, and no imposed meal locks.",
    highlights: ["3 Mins to SCMS", "Balcony Bedrooms", "Daily Housekeeping", "Laundry Care"],
    link: "/student-housing/sakore-nagar",
  },

  // Co-Living
  {
    id: "moksha",
    name: "Moksha",
    category: "Co-Living",
    tag: "Bohemian Terraces & Patios",
    location: "Viman Nagar, Pune",
    subLocation: "Near Joggers Park & Cafes",
    priceDouble: "₹14,500",
    priceSingle: "₹22,000",
    coverImage: "/assets/pdf/extracted/page-3-image-1-X4.jpg",
    gallery: [
      "/assets/pdf/extracted/page-3-image-1-X4.jpg",
      "/assets/pdf/extracted/page-3-image-2-X6.jpg",
      "/assets/pdf/extracted/page-3-image-3-X7.jpg",
      "/assets/pdf/extracted/page-3-image-4-X8.jpg",
    ],
    description:
      "Curated co-living spaces with bohemian green patios, serene ambiance, and private workstations for creators, consultants, and IT pros in Pune.",
    highlights: ["Zen Terrace Garden", "Private Work Desks", "Full Power Backup", "Freedom to Cook"],
    link: "/coliving/moksha",
  },
  {
    id: "vipasana",
    name: "Vipasana",
    category: "Co-Living",
    tag: "Peaceful Urban Sanctuary",
    location: "Viman Nagar, Pune",
    subLocation: "Central Viman Nagar Avenue",
    priceDouble: "₹14,000",
    priceSingle: "₹21,000",
    coverImage: "/assets/pdf/extracted/page-4-image-1-X4.jpg",
    gallery: [
      "/assets/pdf/extracted/page-4-image-1-X4.jpg",
      "/assets/pdf/extracted/page-4-image-2-X6.jpg",
      "/assets/pdf/extracted/page-4-image-3-X7.jpg",
      "/assets/pdf/extracted/page-2-image-1-X4.jpg",
    ],
    description:
      "Vipasana balances high-energy career growth with calming, mindful living. Spotless rooms, ergonomic work suites, high-speed fiber, and relaxed social lounges.",
    highlights: ["High-Focus Work Suites", "Daily Cleaning", "Zero Moral Policing", "24/7 Security"],
    link: "/coliving/vipasana",
  },
  {
    id: "shubh-nirvana",
    name: "Shubh Nirvana",
    category: "Co-Living",
    tag: "Flagship Hippie & Backpacker Lounge",
    location: "Viman Nagar, Pune",
    subLocation: "Near Phoenix Marketcity & IT Corridor",
    priceDouble: "₹15,000",
    priceSingle: "₹22,500",
    coverImage: "/assets/pdf/extracted/page-7-image-5-X9.jpg",
    gallery: [
      "/assets/pdf/extracted/page-7-image-5-X9.jpg",
      "/assets/pdf/extracted/page-7-image-6-X10.jpg",
      "/assets/pdf/extracted/page-2-image-2-X6.jpg",
      "/assets/pdf/extracted/page-2-image-3-X7.jpg",
    ],
    description:
      "Our most vibrant co-living property inspired by the backpacker hostel cult. Glow lounges, rooftop gatherings, community BBQs, pool table, and friends welcome anytime.",
    highlights: ["UV Neon Chill Lounge", "Pool Table & Games", "Community Dinners", "No Bans or Curfews"],
    link: "/coliving/shubh-nirvana",
  },
];

export default function FeaturedProperties() {
  const [activeTab, setActiveTab] = useState<"all" | "student" | "coliving">("all");
  const [activePhotoMap, setActivePhotoMap] = useState<{ [id: string]: string }>({});

  const filtered =
    activeTab === "all"
      ? propertiesData
      : activeTab === "student"
      ? propertiesData.filter((p) => p.category === "Student Housing")
      : propertiesData.filter((p) => p.category === "Co-Living");

  const setPhoto = (propId: string, img: string) => {
    setActivePhotoMap((prev) => ({ ...prev, [propId]: img }));
  };

  return (
    <section id="properties" className="py-24 bg-[#FAFAFA] relative">
      <div id="student-housing" className="absolute -top-24 left-0" />
      <div id="co-living" className="absolute -top-24 left-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="badge-eyebrow mb-3">Our Properties</div>
            <h2 className="section-heading-lg">
              Spaces built around <span className="text-[#007A7A]">comfort</span>
            </h2>
            <p className="text-[#2D3748] text-sm sm:text-base max-w-xl mt-3 font-semibold">
              Choose a home with the essentials covered, relaxed common spaces, and easy access to colleges and work hubs in Pune.
            </p>
          </div>

          {/* Stanza-style Category Switcher */}
          <div className="flex items-center gap-2 mt-6 md:mt-0 p-1.5 bg-white rounded-full border border-[#E1E7E6] shadow-sm max-w-full overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab("all")}
              className={`min-h-[44px] px-4 sm:px-5 py-2.5 rounded-full text-xs font-extrabold transition-all whitespace-nowrap active:scale-95 ${
                activeTab === "all"
                  ? "bg-[#007A7A] text-white shadow-sm"
                  : "text-[#666B68] hover:text-[#007A7A]"
              }`}
            >
              All Properties ({propertiesData.length})
            </button>
            <button
              onClick={() => setActiveTab("student")}
              className={`min-h-[44px] px-4 sm:px-5 py-2.5 rounded-full text-xs font-extrabold transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-95 ${
                activeTab === "student"
                  ? "bg-[#007A7A] text-white shadow-sm"
                  : "text-[#666B68] hover:text-[#007A7A]"
              }`}
            >
              <GraduationCap size={15} />
              <span>Student Housing (2)</span>
            </button>
            <button
              onClick={() => setActiveTab("coliving")}
              className={`min-h-[44px] px-4 sm:px-5 py-2.5 rounded-full text-xs font-extrabold transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-95 ${
                activeTab === "coliving"
                  ? "bg-[#007A7A] text-white shadow-sm"
                  : "text-[#666B68] hover:text-[#007A7A]"
              }`}
            >
              <Building2 size={15} />
              <span>Co-Living (3)</span>
            </button>
          </div>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filtered.map((property) => {
            const currentImg = activePhotoMap[property.id] || property.coverImage;

            return (
              <div
                key={property.id}
                className="stanza-card group flex flex-col justify-between"
              >
                <div>
                  {/* Image Display */}
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#1B1D1C]">
                    <Image
                      src={currentImg}
                      alt={property.name}
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111312]/80 via-transparent to-black/20" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span
                        className={`text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md ${
                          property.category === "Student Housing"
                            ? "bg-[#007A7A] text-white"
                            : "bg-[#FFDE59] text-[#1B1D1C]"
                        }`}
                      >
                        {property.category}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#1B1D1C] shadow-sm flex items-center gap-1.5">
                      <Star size={13} className="text-amber-500 fill-amber-500" />
                      <span>4.9 / 5</span>
                    </div>

                    {/* Bottom Image Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-1.5 text-xs text-[#FFDE59] font-bold mb-1">
                        <MapPin size={14} />
                        <span>{property.subLocation}</span>
                      </div>
                      <h3 className="text-2xl font-black text-white font-heading">
                        {property.name}
                      </h3>
                    </div>
                  </div>

                  {/* Real Photo Thumbnails Strip */}
                  <div className="p-4 bg-[#F1F4F4]/70 border-b border-[#E1E7E6] flex items-center gap-2 overflow-x-auto">
                    {property.gallery.map((thumb, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setPhoto(property.id, thumb)}
                        className={`relative w-16 h-12 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                          currentImg === thumb
                            ? "border-[#007A7A] shadow-md scale-105"
                            : "border-transparent opacity-75 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={thumb}
                          alt={`${property.name} thumbnail ${idx}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                    <span className="text-[11px] text-[#666B68] font-bold ml-auto pl-2 whitespace-nowrap">
                      4 Real Photos
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <p className="text-xs sm:text-sm text-[#1F2937] leading-relaxed mb-5 font-semibold">
                      {property.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid grid-cols-2 gap-2.5 py-4 border-y border-[#E1E7E6] text-xs font-bold text-[#1B1D1C]">
                      {property.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check size={14} className="text-[#007A7A] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pricing & CTAs - Stanza Living Layout */}
                <div className="px-5 sm:px-7 pb-6 pt-3 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-t border-[#E1E7E6]">
                  <div>
                    <span className="text-[11px] font-bold text-[#666B68] uppercase tracking-wider block">
                      Starting Rent
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-black text-[#007A7A] font-heading">
                        {property.priceDouble}
                      </span>
                      <span className="text-xs text-[#666B68] font-semibold">/mo</span>
                    </div>
                    <span className="text-[11px] text-[#007A7A] font-bold block">
                      Single: {property.priceSingle}/mo
                    </span>
                    <a
                      href="tel:+917420040241"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#666B68] hover:text-[#007A7A] mt-2 py-1 active:scale-95"
                    >
                      <Phone size={13} className="text-[#007A7A]" />
                      <span>Call Host: +91 74200 40241</span>
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-2 w-full sm:w-auto sm:flex sm:items-center">
                    {/* Stanza-style WhatsApp Button (>= 44px) */}
                    <a
                      href={`https://wa.me/917420040241?text=Hi%20Reforbs%2C%20I%20am%20interested%20in%20${encodeURIComponent(property.name)}%20(${encodeURIComponent(property.subLocation)}).%20Please%20share%20details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 min-h-[46px] px-3.5 py-3 rounded-2xl bg-[#E8F8F5] text-[#128C7E] hover:bg-[#25D366] hover:text-white border border-[#25D366]/40 transition-all font-black text-xs shadow-sm active:scale-95 text-center"
                      title="Chat on WhatsApp"
                      aria-label={`WhatsApp chat for ${property.name}`}
                    >
                      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      <span>WhatsApp</span>
                    </a>

                    {/* Stanza-style Schedule Visit CTA Button (>= 44px) */}
                    <Link
                      href={property.link}
                      className="flex items-center justify-center gap-1.5 min-h-[46px] px-4 py-3 rounded-2xl bg-[#007A7A] hover:bg-[#005C5C] text-white font-black text-xs shadow-md transition-all active:scale-95 text-center"
                    >
                      <span>Schedule Visit</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Amenities Bar from reforbs.com */}
        <div id="amenities" className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-[#E1E7E6] shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="badge-eyebrow mb-2">Amenities</span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#1B1D1C] font-heading">
              Everything you need, already included
            </h3>
            <p className="text-xs sm:text-sm text-[#666B68] mt-2 font-medium">
              Zero extra hidden maintenance bills. Everything is transparent and ready on day one.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {[
              "Free High Speed WiFi",
              "TV & Streaming",
              "Work Desks",
              "Spacious Living Area",
              "Private Kitchen",
              "Daily Cleaning Services",
              "Free Parking",
              "Freedom (Zero Bans)",
              "Laundry Care",
              "Full Power Backup",
            ].map((facility, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-3.5 rounded-2xl bg-[#FAFAFA] border border-[#E1E7E6] text-xs font-bold text-[#1B1D1C] hover:bg-[#E6F4F3] hover:text-[#007A7A] transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#007A7A]" />
                <span>{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
