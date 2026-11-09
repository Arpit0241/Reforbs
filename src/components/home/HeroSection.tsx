"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ArrowDown,
} from "lucide-react";

const offeringsPills = [
  { label: "Co-Living", href: "/coliving" },
  { label: "Student Housing", href: "/student-housing" },
  { label: "Hotels & Resorts", href: "/goa" },
  { label: "Bag Packers", href: "/goa" },
  { label: "Cafes", href: "/coming-soon" },
  { label: "Second Homes", href: "/coming-soon" },
];

const featurePills = [
  { label: "Zero Lock-in Period" },
  { label: "Private Kitchen & Balconies" },
  { label: "NO RESTRICTIONS" },
  { label: "BOHEMIAN DECOR" },
];

const communityPills = [
  { label: "Vibrant Community" },
  { label: "Ample Amenities" },
  { label: "Delicious Food" },
  { label: "Absolute Privacy" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[85vh] flex flex-col justify-between lg:justify-center pt-14 sm:pt-16 pb-6 sm:pb-8 lg:py-24 overflow-hidden bg-[#0D1110]">
      {/* Mobile-Specific Hero Background Photograph (User-supplied authentic 9:16 portrait image) */}
      <div className="lg:hidden absolute inset-0 z-0 overflow-hidden w-full h-full pointer-events-none select-none">
        <Image
          src="/images/reforbs-hero-community-mobile.webp"
          alt="Reforbs Community Lifestyle - Fresh vibrant student and professional co-living in Viman Nagar, Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_28%] sm:object-center transform scale-[1.01]"
          quality={92}
        />

        {/* Subtle, Fresh Dark Teal Gradient Overlay for Mobile (Keeps daylight, brightness & fresh lifestyle colors) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1110]/70 via-transparent to-[#0D1110]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1110]/85 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,122,122,0.1)_0%,_rgba(13,17,16,0.35)_100%)] pointer-events-none" />
      </div>

      {/* Desktop-Specific Full-Width Hero Background Photograph (Preserved exactly as requested) */}
      <div className="hidden lg:block absolute inset-0 z-0 overflow-hidden w-full h-full pointer-events-none select-none">
        <Image
          src="/images/reforbs-hero-community.webp"
          alt="Reforbs Community Lifestyle - Fresh vibrant student and professional co-living in Viman Nagar, Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-[1.01]"
          quality={92}
        />

        {/* Subtle, Fresh Dark Teal Gradient Overlay for Desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1110]/65 via-transparent to-[#0D1110]/75 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1110]/80 via-[#0A1A18]/25 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,122,122,0.12)_0%,_rgba(13,17,16,0.45)_100%)] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between lg:justify-center">
        <div className="text-center max-w-4xl mx-auto w-full pt-1 sm:pt-3">
          {/* Master Headline with Custom Styled Underline on 'experience' */}
          <h1 className="text-[26px] sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.15] mb-2 sm:mb-4 font-heading drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)]">
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
            Curated student sanctuaries and vibrant co-living spaces. Designed for freedom, comfort, zero lock-ins, and direct host pricing.
          </p>

          {/* Desktop-Only Centered OUR USPs Button */}
          <div className="hidden lg:flex items-center justify-center mt-2 mb-6">
            <a
              href="#why-reforbs"
              className="btn-teal min-h-[52px] py-3.5 px-9 rounded-2xl justify-center font-extrabold text-base shadow-2xl hover:shadow-glow active:scale-95 inline-flex items-center gap-2.5 transition-all duration-200"
            >
              <Search size={18} />
              <span>OUR USPs</span>
              <ArrowDown size={16} className="text-[#FFDE59] animate-bounce" />
            </a>
          </div>

          {/* Row 1: Offerings / Properties (Same equal, uniform styling) */}
          <div className="hidden lg:flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto mt-4 px-2">
            {offeringsPills.map((pill, idx) => (
              <Link
                key={`offering-${idx}`}
                href={pill.href}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black whitespace-nowrap shrink-0 min-h-[38px] bg-black/55 backdrop-blur-md text-white border border-white/20 hover:border-[#FFDE59] hover:text-[#FFDE59] hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm group"
              >
                <span className="w-2 h-2 rounded-full shrink-0 bg-[#FFDE59] group-hover:scale-125 transition-transform" />
                <span>{pill.label}</span>
              </Link>
            ))}
          </div>

          {/* Row 2: Feature Highlights (Same equal, uniform styling) */}
          <div className="hidden lg:flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto mt-2.5 px-2">
            {featurePills.map((pill, idx) => (
              <div
                key={`feature-${idx}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black whitespace-nowrap shrink-0 min-h-[38px] bg-black/55 backdrop-blur-md text-white/95 border border-white/20 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full shrink-0 bg-[#FFDE59]" />
                <span>{pill.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Community Highlights (Same equal, uniform styling) */}
        <div className="hidden lg:flex mt-6 items-center justify-center gap-2.5 overflow-x-auto no-scrollbar max-w-full px-2 py-1">
          {communityPills.map((pill, idx) => (
            <div
              key={`community-${idx}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black whitespace-nowrap shrink-0 min-h-[38px] bg-black/55 backdrop-blur-md text-white/95 border border-white/20 select-none cursor-default shadow-sm"
            >
              <span className="w-2 h-2 rounded-full shrink-0 bg-[#FFDE59]" />
              <span>{pill.label}</span>
            </div>
          ))}
        </div>

        {/* Mobile-Only Bottom CTA & Badges Group */}
        <div className="lg:hidden w-full flex flex-col items-center justify-center mt-auto pt-6 sm:pt-8 pb-1 z-10">
          {/* Sleek, Smaller OUR USPs CTA Button */}
          <div className="mb-3 flex items-center justify-center">
            <a
              href="#why-reforbs"
              className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-xl sm:rounded-2xl bg-[#007A7A] hover:bg-[#005F5F] text-white font-bold text-sm sm:text-[15px] shadow-lg hover:shadow-glow active:scale-95 inline-flex items-center justify-center transition-all duration-200"
              aria-label="Our USPs"
            >
              <span>OUR USPs</span>
            </a>
          </div>

          {/* Mobile-Only All Pills (Identical, equal styling across all rows) */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-[10.5px] sm:text-[11px] font-bold text-white px-2">
            {offeringsPills.map((pill, idx) => (
              <Link
                key={`m-offering-${idx}`}
                href={pill.href}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 whitespace-nowrap shadow-sm hover:border-[#FFDE59] active:scale-95 transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-[#FFDE59]" />
                <span>{pill.label}</span>
              </Link>
            ))}

            {featurePills.map((pill, idx) => (
              <div
                key={`m-feature-${idx}`}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 whitespace-nowrap shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-[#FFDE59]" />
                <span>{pill.label}</span>
              </div>
            ))}

            {communityPills.map((pill, idx) => (
              <div
                key={`m-community-${idx}`}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 whitespace-nowrap shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-[#FFDE59]" />
                <span>{pill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
