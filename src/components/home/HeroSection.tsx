"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  MapPin,
  Building2,
  GraduationCap,
  Compass,
  CheckCircle2,
} from "lucide-react";

const communityPills = [
  {
    label: "Vibrant Community",
    caption: "Young adult Indian professionals enjoying together in a modern co-living lounge",
  },
  {
    label: "Recreation & Lounge",
    caption: "Residents enjoying pool and games in our shared recreation lounge",
  },
  {
    label: "Dining & Kitchen",
    caption: "Students and young professionals sharing meals in a welcoming modern dining space",
  },
  {
    label: "Shared Living Spaces",
    caption: "Cozy, stylish shared living rooms built for comfort and connection",
  },
];

export default function HeroSection() {
  const [activePill, setActivePill] = useState(0);
  const [activeCategory, setActiveCategory] = useState<"all" | "student" | "coliving">("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedHub, setSelectedHub] = useState("all");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetElement = document.getElementById("properties");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] lg:min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-[#0D1110]">
      {/* Full-Width Hero Background Photograph Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full pointer-events-none select-none">
        <Image
          src="/images/reforbs-hero-community.webp"
          alt="Reforbs Community Lifestyle - Young adult residents connecting in our Viman Nagar co-living lounge"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] sm:object-[center_35%] transform scale-[1.01]"
          quality={90}
        />

        {/* Sophisticated Dark Teal-to-Black Gradient Overlay for High Contrast & Warmth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1110]/85 via-[#002B2B]/45 to-[#0D1110]/92 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,122,122,0.18)_0%,_rgba(13,17,16,0.65)_100%)] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-2 sm:pt-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow Live Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[#FFDE59] text-xs sm:text-sm font-extrabold mb-5 sm:mb-6 shadow-lg max-w-full">
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse shrink-0" />
            <span className="text-white">Reforbs Living</span>
            <span className="text-white/40">•</span>
            <span>Viman Nagar, Pune</span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="text-white/90 hidden sm:inline font-semibold">Direct Host Booking</span>
          </div>

          {/* Master Headline with Custom Styled Underline on 'experience' */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.12] mb-8 sm:mb-10 font-heading drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
            Not just an accommodation, <br className="hidden sm:block" />
            but an{" "}
            <span className="relative inline-block text-[#FFDE59]">
              experience
              <svg
                className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-[#007A7A]"
                viewBox="0 0 250 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M3 14C60 4 170 3 247 10C170 17 80 18 3 14Z"
                  fill="currentColor"
                />
              </svg>
            </span>{" "}
            to cherish.
          </h1>
        </div>

        {/* Stanza Living-Style Modern Search & Quick Filter Component (Centerpiece) */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-4 sm:p-7 shadow-2xl border border-white/80">
          {/* Top Category Tab Pills */}
          <div className="flex items-center justify-between gap-3 border-b border-[#E1E7E6] pb-4 mb-5 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 shrink-0 sm:flex-wrap">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={`min-h-[44px] px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all whitespace-nowrap active:scale-95 ${
                  activeCategory === "all"
                    ? "bg-[#007A7A] text-white shadow-sm"
                    : "text-[#666B68] hover:bg-[#F1F4F4]"
                }`}
              >
                All 5 Properties
              </button>

              <button
                type="button"
                onClick={() => setActiveCategory("student")}
                className={`min-h-[44px] flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all whitespace-nowrap active:scale-95 ${
                  activeCategory === "student"
                    ? "bg-[#007A7A] text-white shadow-sm"
                    : "text-[#666B68] hover:bg-[#F1F4F4]"
                }`}
              >
                <GraduationCap size={16} className={activeCategory === "student" ? "text-white" : "text-[#007A7A]"} />
                <span>Student Housing</span>
                <span className="text-[11px] bg-black/10 px-2 py-0.5 rounded-full font-bold hidden sm:inline">
                  Near SLS &amp; SCMS
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveCategory("coliving")}
                className={`min-h-[44px] flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all whitespace-nowrap active:scale-95 ${
                  activeCategory === "coliving"
                    ? "bg-[#007A7A] text-white shadow-sm"
                    : "text-[#666B68] hover:bg-[#F1F4F4]"
                }`}
              >
                <Building2 size={16} className={activeCategory === "coliving" ? "text-white" : "text-[#007A7A]"} />
                <span>Co-Living</span>
                <span className="text-[11px] bg-black/10 px-2 py-0.5 rounded-full font-bold hidden sm:inline">
                  Working Pros
                </span>
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-2 text-xs font-bold text-[#007A7A] bg-[#E6F4F3] px-3.5 py-1.5 rounded-full shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#007A7A] animate-ping" />
              <span>Immediate Move-In Ready</span>
            </div>
          </div>

          {/* Form Filter Row */}
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            {/* Target Locality Dropdown */}
            <div className="sm:col-span-5 bg-[#F1F4F4] rounded-2xl p-3 px-4 border border-[#E1E7E6]">
              <label className="block text-[10px] font-black uppercase tracking-wider text-[#666B68] mb-0.5">
                City &amp; Micro-Market
              </label>
              <div className="flex items-center gap-2 text-[#1B1D1C] font-bold text-sm">
                <MapPin size={16} className="text-[#007A7A] shrink-0" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="bg-transparent w-full text-base sm:text-sm font-bold text-[#1B1D1C] focus:outline-none cursor-pointer"
                  aria-label="Select micro-market in Pune"
                >
                  <option value="all">Viman Nagar, Pune (All Hubs)</option>
                  <option value="sanjay-park">Sanjay Park, Viman Nagar</option>
                  <option value="sakore-nagar">Sakore Nagar (Near SCMS)</option>
                  <option value="clover-park">Clover Park Avenue</option>
                  <option value="dutta-mandir">Dutta Mandir Chowk</option>
                </select>
              </div>
            </div>

            {/* Landmark / College Dropdown */}
            <div className="sm:col-span-4 bg-[#F1F4F4] rounded-2xl p-3 px-4 border border-[#E1E7E6]">
              <label className="block text-[10px] font-black uppercase tracking-wider text-[#666B68] mb-0.5">
                College or Corporate Hub
              </label>
              <div className="flex items-center gap-2 text-[#1B1D1C] font-bold text-sm">
                <Compass size={16} className="text-[#007A7A] shrink-0" />
                <select
                  value={selectedHub}
                  onChange={(e) => setSelectedHub(e.target.value)}
                  className="bg-transparent w-full text-base sm:text-sm font-bold text-[#1B1D1C] focus:outline-none cursor-pointer"
                  aria-label="Select college or corporate hub"
                >
                  <option value="all">Symbiosis Law School (SLS)</option>
                  <option value="scms">Symbiosis Management (SCMS)</option>
                  <option value="phoenix">Phoenix Marketcity / WeWork</option>
                  <option value="panchshil">Panchshil Tech Park / EON</option>
                  <option value="airport">Pune Airport Corridor</option>
                </select>
              </div>
            </div>

            {/* Explore Spaces Button */}
            <div className="sm:col-span-3">
              <button
                type="submit"
                className="btn-teal w-full min-h-[48px] py-3.5 rounded-2xl justify-center font-extrabold text-sm shadow-md active:scale-98"
              >
                <Search size={16} />
                <span>Explore Spaces</span>
              </button>
            </div>
          </form>

          {/* Stanza-style Quick Pick Landmark Chips */}
          <div className="mt-4 pt-4 border-t border-[#E1E7E6]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold text-[#666B68] uppercase tracking-wider mr-1">
                Popular Searches:
              </span>
              {[
                { label: "Opp. Symbiosis SLS", href: "/student-housing/shubh-gateway" },
                { label: "Near SCMS Campus", href: "/student-housing/sakore-nagar" },
                { label: "Moksha Terrace Lounge", href: "/coliving/moksha" },
                { label: "Vipasana Work Suites", href: "/coliving/vipasana" },
                { label: "Shubh Nirvana Flagship", href: "/coliving/shubh-nirvana" },
              ].map((chip, idx) => (
                <Link
                  key={idx}
                  href={chip.href}
                  className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#F1F4F4] text-[#1B1D1C] hover:bg-[#E6F4F3] hover:text-[#007A7A] transition-colors border border-[#E1E7E6]"
                >
                  {chip.label}
                </Link>
              ))}
            </div>

            {/* Quick Perks Line */}
            <div className="mt-4 pt-3 border-t border-[#E1E7E6] flex flex-wrap items-center justify-between text-xs text-[#4A524F] font-semibold gap-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#007A7A]" /> Zero Lock-in Period
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#007A7A]" /> Private Kitchen &amp; Balconies
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#007A7A]" /> No Imposed Mess Fees
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#007A7A]" /> Single &amp; Double Privacy
              </span>
            </div>
          </div>
        </div>

        {/* Community Highlight Category Pills */}
        <div className="mt-8 flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar max-w-full px-2 py-1">
          {communityPills.map((pill, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActivePill(idx)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-black whitespace-nowrap shrink-0 transition-all duration-300 min-h-[36px] ${
                activePill === idx
                  ? "bg-white text-[#1B1D1C] shadow-lg ring-2 ring-[#007A7A]/30"
                  : "bg-black/40 backdrop-blur-md text-white/90 hover:bg-black/60 hover:text-white border border-white/20"
              }`}
            >
              <span className={`w-2 h-2 rounded-full shrink-0 ${activePill === idx ? "bg-[#007A7A]" : "bg-[#FFDE59]"}`} />
              <span>{pill.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
