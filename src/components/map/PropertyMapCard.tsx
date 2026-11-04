"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PropertyItem } from "@/data/properties";
import { usePropertyMap } from "@/context/PropertyMapContext";
import {
  MapPin,
  Star,
  Check,
  ArrowRight,
  GraduationCap,
  Building2,
  Compass,
} from "lucide-react";

interface PropertyMapCardProps {
  property: PropertyItem;
  isActive: boolean;
  isHovered: boolean;
}

export default function PropertyMapCard({
  property,
  isActive,
  isHovered,
}: PropertyMapCardProps) {
  const { setActiveListingId, setHoveredListingId } = usePropertyMap();
  const [activePhoto, setActivePhoto] = useState(property.coverImage);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Debounced hover handler (150ms) to avoid map jitter during rapid mouse movements
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredListingId(property.id);
      setActiveListingId(property.id);
    }, 150);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredListingId(null);
  };

  // Keyboard accessibility
  const handleFocus = () => {
    setActiveListingId(property.id);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  return (
    <div
      id={`property-card-${property.id}`}
      data-property-id={property.id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      tabIndex={0}
      className={`group relative rounded-3xl overflow-hidden transition-all duration-300 focus:outline-none bg-[#0D2826] bg-gradient-to-br ${property.cardGradient || "from-[#006E6E] via-[#004A4A] to-[#032323]"} text-white border border-white/20 shadow-xl hover:shadow-2xl ${
        isActive || isHovered
          ? "ring-4 ring-[#FFDE59] shadow-2xl scale-[1.01] -translate-y-1 border-white/40"
          : "hover:-translate-y-0.5 hover:border-white/30"
      }`}
    >
      {/* Ambient Radial Luxury Glow */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-0">
        {/* Left Photo & Thumbnail Gallery (5 cols) */}
        <div className="sm:col-span-5 relative bg-[#0D1110] flex flex-col justify-between">
          <div className="relative h-56 sm:h-full w-full overflow-hidden min-h-[220px]">
            <Image
              src={activePhoto}
              alt={property.name}
              fill
              sizes="(max-width: 640px) 100vw, 320px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/40 backdrop-blur-md text-white border border-white/25 shadow-sm">
                {property.category}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-sm flex items-center gap-1">
                <Star size={11} className="text-[#FFDE59] fill-[#FFDE59]" />
                <span>{property.rating}</span>
              </span>
            </div>

            {/* Price Pill on Photo */}
            <div className="absolute bottom-3 left-3 z-10">
              <span className="px-3 py-1.5 rounded-xl font-black text-xs bg-[#FFDE59] text-[#111827] shadow-xl">
                {property.price} <span className="text-[10px] font-bold text-gray-800">/mo</span>
              </span>
            </div>
          </div>

          {/* 4 Photo Thumbnails */}
          <div className="flex items-center gap-1.5 p-2 bg-black/60 backdrop-blur-md overflow-x-auto no-scrollbar border-t border-white/10">
            {property.gallery.slice(0, 4).map((thumb, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActivePhoto(thumb);
                }}
                className={`relative w-11 h-8 rounded-lg overflow-hidden shrink-0 border transition-all ${
                  activePhoto === thumb
                    ? "border-[#FFDE59] ring-2 ring-[#FFDE59]/50 scale-105"
                    : "border-white/30 opacity-70 hover:opacity-100"
                }`}
                aria-label={`Show photo ${idx + 1} of ${property.name}`}
              >
                <Image src={thumb} alt="" fill sizes="44px" className="object-cover" />
              </button>
            ))}
            <span className="text-[10px] text-white/70 font-semibold ml-auto pr-1 whitespace-nowrap">
              4 Photos
            </span>
          </div>
        </div>

        {/* Right Info Section (7 cols) */}
        <div className="sm:col-span-7 p-5 sm:p-6 flex flex-col justify-between bg-black/20">
          <div>
            {/* Monogram and Locality */}
            <div className="flex items-start justify-between gap-2 mb-2.5">
              <a
                href={property.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white/95 hover:text-[#FFDE59] transition-colors group/maplink"
                title={`Open ${property.name} on Google Maps`}
              >
                <MapPin size={14} className="text-[#FFDE59] shrink-0 group-hover/maplink:scale-110 transition-transform" />
                <span className="line-clamp-1">{property.subLocation}</span>
                <span className="text-[10px] font-black bg-[#FFDE59] text-[#111827] px-2 py-0.5 rounded-full shadow-sm hover:bg-white transition-colors">
                  Maps ↗
                </span>
              </a>
              <div className="w-8 h-8 rounded-xl bg-white/15 backdrop-blur-md text-white border border-white/20 flex items-center justify-center shrink-0">
                {property.monogram === "grad" ? (
                  <GraduationCap size={16} />
                ) : property.monogram === "compass" ? (
                  <Compass size={16} />
                ) : (
                  <Building2 size={16} />
                )}
              </div>
            </div>

            {/* Name */}
            <Link href={property.link} className="block group-hover:text-[#FFDE59] transition-colors">
              <h3 className="text-xl sm:text-2xl font-black font-heading text-white tracking-tight mb-1">
                {property.name}
              </h3>
            </Link>

            <p className="text-xs text-white/80 font-medium leading-relaxed mb-3.5 line-clamp-2">
              {property.description}
            </p>

            {/* Key stats row */}
            <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-black/25 backdrop-blur-md border border-white/15 mb-3.5">
              <div>
                <span className="text-[10px] uppercase font-bold text-white/70 block">
                  {property.stat1Label}
                </span>
                <span className="text-base sm:text-lg font-black text-[#FFDE59] font-heading">{property.stat1Value}</span>
              </div>
              <div className="border-l border-white/20 pl-3">
                <span className="text-[10px] uppercase font-bold text-white/70 block">
                  {property.stat2Label}
                </span>
                <span className="text-base sm:text-lg font-black text-white font-heading">{property.stat2Value}</span>
              </div>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {property.highlights.slice(0, 3).map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white/15 text-white backdrop-blur-sm border border-white/20"
                >
                  <Check size={11} className="text-[#FFDE59]" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/20">
            {/* WhatsApp CTA (>= 44px) */}
            <a
              href={`https://wa.me/${
                property.contactPhone
                  ? property.contactPhone.replace(/\D/g, "").length === 10
                    ? "91" + property.contactPhone.replace(/\D/g, "")
                    : property.contactPhone.replace(/\D/g, "")
                  : "917420040241"
              }?text=Hi%20Reforbs%2C%20I%20am%20interested%20in%20${encodeURIComponent(
                property.name
              )}%20(${encodeURIComponent(property.subLocation)}).%20Please%20share%20details.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 min-h-[46px] px-3 py-2 rounded-xl bg-white/15 hover:bg-[#25D366] text-white border border-white/25 transition-all font-bold text-xs active:scale-95 text-center shadow-sm"
              aria-label={`WhatsApp host for ${property.name}`}
            >
              <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Details CTA (>= 44px) */}
            <Link
              href={property.link}
              className="flex items-center justify-center gap-1.5 min-h-[46px] px-3 py-2 rounded-xl bg-[#FFDE59] hover:bg-[#FACC15] text-[#111827] font-black text-xs shadow-md transition-all active:scale-95 text-center"
            >
              <span>View Details</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
