"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  ArrowDown,
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

  return (
    <section className="relative min-h-[65vh] sm:min-h-[70vh] lg:min-h-[85vh] flex items-center justify-center pt-20 sm:pt-24 pb-8 sm:pb-12 lg:py-24 overflow-hidden bg-[#0D1110]">
      {/* Full-Width Edge-to-Edge Hero Background Photograph Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full pointer-events-none select-none">
        <Image
          src="/images/reforbs-hero-community.webp"
          alt="Reforbs Community Lifestyle - Fresh vibrant student and professional co-living in Viman Nagar, Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[52%_center] sm:object-center transform scale-[1.01]"
          quality={92}
        />

        {/* Subtle, Fresh Dark Teal Gradient Overlay (Preserves natural daylight, brightness & fresh lifestyle colors) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1110]/65 via-transparent to-[#0D1110]/75 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1110]/80 via-[#0A1A18]/25 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,122,122,0.12)_0%,_rgba(13,17,16,0.45)_100%)] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-1 sm:pt-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow Live Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/55 backdrop-blur-md border border-white/25 text-[#FFDE59] text-[11px] sm:text-xs font-extrabold mb-3 sm:mb-5 shadow-lg max-w-full">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shrink-0" />
            <span className="text-white">Reforbs Living</span>
            <span className="text-white/40">•</span>
            <span>Viman Nagar, Pune</span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="text-white/90 hidden sm:inline font-semibold">Direct Host Booking</span>
          </div>

          {/* Master Headline with Custom Styled Underline on 'experience' */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.18] sm:leading-[1.15] mb-4 sm:mb-6 font-heading drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)]">
            Not just an accommodation, <br className="hidden sm:block" />
            but an{" "}
            <span className="relative inline-block text-[#FFDE59]">
              experience
              <svg
                className="absolute -bottom-1.5 sm:-bottom-3 left-0 w-full h-2.5 sm:h-4 text-[#007A7A]"
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

          {/* Supporting Description (Desktop only; hidden completely on mobile per prompt) */}
          <p className="hidden lg:block text-base sm:text-lg text-white/90 font-medium max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Curated student sanctuaries and vibrant co-living spaces in Viman Nagar, Pune. Designed for freedom, comfort, zero lock-ins, and direct host pricing.
          </p>

          {/* Mobile-Only Explore Spaces CTA Button (~86% width, 56px height) */}
          <div className="flex items-center justify-center mb-5 sm:mb-6 lg:hidden">
            <a
              href="#properties"
              className="w-[86%] max-w-sm h-14 min-h-[56px] px-6 rounded-2xl bg-[#007A7A] hover:bg-[#005F5F] text-white font-extrabold text-sm shadow-xl hover:shadow-glow active:scale-95 inline-flex items-center justify-center gap-2.5 transition-all duration-200"
              aria-label="Explore Reforbs Spaces"
            >
              <Search size={16} className="shrink-0" />
              <span>Explore Spaces (5)</span>
              <ArrowDown size={14} className="text-[#FFDE59] animate-bounce shrink-0" />
            </a>
          </div>

          {/* Mobile-Only Feature Highlights Line */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-white/90 font-bold lg:hidden px-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 whitespace-nowrap shadow-sm">
              ✓ Zero Lock-in
            </span>
            <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 whitespace-nowrap shadow-sm">
              ✓ Private Balconies
            </span>
            <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 whitespace-nowrap shadow-sm">
              ✓ No Mess Fees
            </span>
          </div>

          {/* Desktop-Only Centered Explore Spaces Button */}
          <div className="hidden lg:flex items-center justify-center mt-2 mb-6">
            <a
              href="#properties"
              className="btn-teal min-h-[52px] py-3.5 px-9 rounded-2xl justify-center font-extrabold text-base shadow-2xl hover:shadow-glow active:scale-95 inline-flex items-center gap-2.5 transition-all duration-200"
            >
              <Search size={18} />
              <span>Explore Spaces (5)</span>
              <ArrowDown size={16} className="text-[#FFDE59] animate-bounce" />
            </a>
          </div>

          {/* Desktop-Only Feature Highlights Line */}
          <div className="hidden lg:flex items-center justify-center gap-4 text-xs text-white/90 font-bold mt-4">
            <span className="px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 shadow-sm">
              ✓ Zero Lock-in Period
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 shadow-sm">
              ✓ Private Kitchen &amp; Balconies
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 shadow-sm">
              ✓ No Imposed Mess Fees
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 shadow-sm">
              ✓ Single &amp; Double Privacy
            </span>
          </div>
        </div>

        {/* Desktop-Only Community Highlight Category Pills */}
        <div className="hidden lg:flex mt-10 items-center justify-center gap-3 overflow-x-auto no-scrollbar max-w-full px-2 py-1">
          {communityPills.map((pill, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActivePill(idx)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black whitespace-nowrap shrink-0 transition-all duration-300 min-h-[36px] ${
                activePill === idx
                  ? "bg-white text-[#1B1D1C] shadow-lg ring-2 ring-[#007A7A]/30"
                  : "bg-black/50 backdrop-blur-md text-white/90 hover:bg-black/70 hover:text-white border border-white/20"
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
