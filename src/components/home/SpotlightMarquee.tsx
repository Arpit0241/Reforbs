"use client";

import React, { useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp, Newspaper, CheckCircle2, Phone } from "lucide-react";

interface BrandItem {
  id: string;
  name: string;
  headline?: string;
  category?: string;
  svg: React.ReactNode;
}

const BRANDS: BrandItem[] = [
  {
    id: "forbes",
    name: "Forbes",
    category: "Business & Economy",
    headline: "How Co-Living Ecosystems are Redefining Urban Student Housing in Pune",
    svg: (
      <svg viewBox="0 0 160 44" className="h-7 sm:h-8 w-auto fill-current text-[#1B1D1C]">
        <text
          x="50%"
          y="68%"
          textAnchor="middle"
          fontFamily="'Georgia', 'Times New Roman', serif"
          fontSize="34"
          fontWeight="900"
          fontStyle="italic"
          letterSpacing="-0.5px"
        >
          Forbes
        </text>
      </svg>
    ),
  },
  {
    id: "vccircle",
    name: "VCCiRCLE",
    category: "Venture & Real Estate",
    headline: "ReForbs Expands Student Living Footprint with Zero-Lock-In Housing Model",
    svg: (
      <svg viewBox="0 0 160 40" className="h-6 sm:h-7 w-auto fill-current text-[#1B1D1C]">
        <text
          x="50%"
          y="72%"
          textAnchor="middle"
          fontFamily="'Montserrat', 'Arial Black', sans-serif"
          fontSize="23"
          fontWeight="900"
          letterSpacing="0.8px"
        >
          VCCiRCLE
        </text>
      </svg>
    ),
  },
  {
    id: "entrepreneur",
    name: "Entrepreneur",
    category: "Startups & Growth",
    headline: "Absolute Freedom of Choice: ReForbs Disrupts Pune's Traditional PG Market",
    svg: (
      <svg viewBox="0 0 210 42" className="h-7 sm:h-8 w-auto fill-current text-[#1B1D1C]">
        <text
          x="50%"
          y="68%"
          textAnchor="middle"
          fontFamily="'Georgia', 'Times New Roman', serif"
          fontSize="27"
          fontWeight="800"
          letterSpacing="-0.2px"
        >
          Entrepreneur
        </text>
      </svg>
    ),
  },
  {
    id: "yourstory",
    name: "YOURSTORY",
    category: "Founder Spotlight",
    headline: "From Cramped Hostels to High-Comfort Spaces: The Rise of ReForbs in Viman Nagar",
    svg: (
      <svg viewBox="0 0 170 42" className="h-7 sm:h-8 w-auto">
        <text
          x="12"
          y="28"
          fontFamily="'Montserrat', sans-serif"
          fontSize="22"
          fontWeight="900"
          fill="#1B1D1C"
          letterSpacing="0.5px"
        >
          YOUR
        </text>
        <text
          x="88"
          y="28"
          fontFamily="'Montserrat', sans-serif"
          fontSize="22"
          fontWeight="800"
          fill="#E11D48"
          letterSpacing="0.5px"
        >
          STORY
        </text>
        <circle cx="160" cy="18" r="4" fill="#E11D48" />
      </svg>
    ),
  },
  {
    id: "livemint",
    name: "livemint",
    category: "Urban Markets",
    headline: "Pune Student & Professional Co-Living Sees Strong Shift Towards Flexible Leasing",
    svg: (
      <svg viewBox="0 0 160 40" className="h-6 sm:h-7 w-auto">
        <text
          x="10"
          y="27"
          fontFamily="'Inter', 'Arial', sans-serif"
          fontSize="24"
          fontWeight="900"
          fill="#1B1D1C"
          letterSpacing="-0.5px"
        >
          live
        </text>
        <text
          x="58"
          y="27"
          fontFamily="'Inter', 'Arial', sans-serif"
          fontSize="24"
          fontWeight="900"
          fill="#1B1D1C"
          letterSpacing="-0.5px"
        >
          m
        </text>
        <circle cx="90" cy="12" r="3.5" fill="#F97316" />
        <rect x="87" y="17" width="6" height="10" fill="#1B1D1C" />
        <text
          x="97"
          y="27"
          fontFamily="'Inter', 'Arial', sans-serif"
          fontSize="24"
          fontWeight="900"
          fill="#1B1D1C"
          letterSpacing="-0.5px"
        >
          nt
        </text>
      </svg>
    ),
  },
  {
    id: "fortune",
    name: "FORTUNE",
    category: "Enterprise Spotlight",
    headline: "Building Modern Campus Living Infrastructure for India's New Generation",
    svg: (
      <svg viewBox="0 0 170 42" className="h-6 sm:h-7 w-auto fill-current text-[#1B1D1C]">
        <text
          x="50%"
          y="68%"
          textAnchor="middle"
          fontFamily="'Georgia', 'Times New Roman', serif"
          fontSize="25"
          fontWeight="900"
          letterSpacing="3.5px"
        >
          FORTUNE
        </text>
      </svg>
    ),
  },
  {
    id: "lokmat",
    name: "LOKMAT TIMES",
    category: "Pune Regional Press",
    headline: "Why Symbiosis Students are Choosing Premium Co-Living over Traditional PGs",
    svg: (
      <svg viewBox="0 0 190 40" className="h-6 sm:h-7 w-auto fill-current text-[#1B1D1C]">
        <text
          x="50%"
          y="68%"
          textAnchor="middle"
          fontFamily="'Georgia', 'Times New Roman', serif"
          fontSize="19"
          fontWeight="900"
          letterSpacing="1px"
        >
          LOKMAT TIMES
        </text>
      </svg>
    ),
  },
  {
    id: "dailyguardian",
    name: "The Daily Guardian",
    category: "National Lifestyle",
    headline: "Redefining Freedom & Mental Well-being in Modern Urban Student Communities",
    svg: (
      <svg viewBox="0 0 200 40" className="h-6 sm:h-7 w-auto fill-current text-[#1B1D1C]">
        <text
          x="50%"
          y="68%"
          textAnchor="middle"
          fontFamily="'Georgia', 'Times New Roman', serif"
          fontSize="18"
          fontWeight="800"
          letterSpacing="0.2px"
        >
          The Daily Guardian
        </text>
      </svg>
    ),
  },
  {
    id: "asianet",
    name: "asianet news",
    category: "Youth Trends",
    headline: "Pune Youth Co-Living Sector Attracts Record Influx of Outstation Scholars",
    svg: (
      <svg viewBox="0 0 180 40" className="h-6 sm:h-7 w-auto">
        <text
          x="12"
          y="26"
          fontFamily="'Inter', 'Arial', sans-serif"
          fontSize="20"
          fontWeight="900"
          fill="#1B1D1C"
          letterSpacing="-0.5px"
        >
          asianet
        </text>
        <text
          x="94"
          y="26"
          fontFamily="'Inter', 'Arial', sans-serif"
          fontSize="19"
          fontWeight="700"
          fill="#E11D48"
          letterSpacing="0px"
        >
          news
        </text>
      </svg>
    ),
  },
  {
    id: "mumbailive",
    name: "MUMBAI LIVE",
    category: "Metro Lifestyle",
    headline: "The New Standard of Hassle-Free Accommodation for Working Professionals",
    svg: (
      <svg viewBox="0 0 180 40" className="h-6 sm:h-7 w-auto">
        <text
          x="15"
          y="26"
          fontFamily="'Montserrat', 'Arial Black', sans-serif"
          fontSize="18"
          fontWeight="900"
          fill="#1B1D1C"
          letterSpacing="1px"
        >
          MUMBAI
        </text>
        <text
          x="115"
          y="26"
          fontFamily="'Montserrat', 'Arial Black', sans-serif"
          fontSize="18"
          fontWeight="900"
          fill="#E11D48"
          letterSpacing="1px"
        >
          LIVE
        </text>
      </svg>
    ),
  },
  {
    id: "economictimes",
    name: "The Economic Times",
    category: "Market Watch",
    headline: "Co-Living Occupancy in Pune Reaches All-Time High Driven by Institutional Upgrades",
    svg: (
      <svg viewBox="0 0 220 40" className="h-6 sm:h-7 w-auto fill-current text-[#1B1D1C]">
        <text
          x="50%"
          y="68%"
          textAnchor="middle"
          fontFamily="'Georgia', 'Times New Roman', serif"
          fontSize="17"
          fontWeight="800"
          letterSpacing="0.8px"
        >
          THE ECONOMIC TIMES
        </text>
      </svg>
    ),
  },
];

export default function SpotlightMarquee() {
  const [showPressDetails, setShowPressDetails] = useState(false);

  // Duplicate items for a seamless, continuous infinite CSS marquee loop
  const marqueeItems = [...BRANDS, ...BRANDS];

  return (
    <div className="w-full">
      {/* Infinite Horizontal Scrolling Marquee Track (Stanza Living Style) */}
      <div className="relative w-full overflow-hidden py-4 select-none">
        {/* Soft edge gradient fades for smooth card entry and exit */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10" />

        {/* Marquee Track */}
        <div className="flex gap-4 sm:gap-6 animate-marquee-infinite hover:[animation-play-state:paused] py-2">
          {marqueeItems.map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              className="bg-white rounded-2xl border border-[#E8ECEB] shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-card hover:border-[#007A7A]/40 transition-all duration-300 w-48 sm:w-60 h-20 sm:h-24 px-5 py-3 flex items-center justify-center shrink-0 group cursor-pointer"
              title={`${brand.name} - ${brand.headline}`}
              onClick={() => setShowPressDetails(true)}
            >
              <div className="opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200">
                {brand.svg}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive "Read More" Button (Stanza Living Style) */}
      <div className="mt-6 mb-8 text-center">
        <button
          onClick={() => setShowPressDetails(!showPressDetails)}
          className="inline-flex items-center gap-2 bg-[#007A7A] hover:bg-[#005F5F] text-white font-bold text-sm sm:text-base px-8 py-3 rounded-full shadow-md hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          aria-expanded={showPressDetails}
        >
          <span>{showPressDetails ? "Hide Coverage" : "Read More"}</span>
          {showPressDetails ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>

      {/* Expandable Media Coverage Drawer */}
      {showPressDetails && (
        <div className="mt-8 mb-10 max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-[#E1E7E6] shadow-card animate-fadeIn">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E6F4F3] flex items-center justify-center text-[#007A7A]">
                <Newspaper size={20} />
              </div>
              <div className="text-left">
                <h4 className="text-lg font-black text-[#1B1D1C]">Recent Press & Media Spotlights</h4>
                <p className="text-xs text-[#666B68]">Independent coverage of ReForbs across leading business and lifestyle publications</p>
              </div>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#007A7A] bg-[#E6F4F3] px-3 py-1 rounded-full">
              <CheckCircle2 size={14} /> Verified Articles
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {BRANDS.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl border border-gray-100 hover:border-[#007A7A]/30 hover:bg-[#F9FCFC] transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold text-[#007A7A] uppercase tracking-wider">
                    {item.name}
                  </span>
                  <span className="text-[11px] font-semibold text-gray-400">
                    {item.category}
                  </span>
                </div>
                <p className="text-sm font-bold text-[#1B1D1C] group-hover:text-[#007A7A] transition-colors leading-snug">
                  &ldquo;{item.headline}&rdquo;
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#666B68]">
            <span>Press inquiries & media interviews: <strong className="text-[#1B1D1C]">contact@reforbs.com</strong></span>
            <a
              href="tel:7420040241"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F4F3] hover:bg-[#007A7A] text-[#007A7A] hover:text-white transition-colors text-xs font-bold shadow-sm"
              aria-label="Call Us"
            >
              <Phone size={12} />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
