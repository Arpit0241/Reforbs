"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { usePropertyMap } from "@/context/PropertyMapContext";
import PropertyMapCard from "./PropertyMapCard";
import {
  MapPin,
  List,
  Map as MapIcon,
  Search,
  Filter,
  X,
  GraduationCap,
  Building2,
  SlidersHorizontal,
  ArrowRight,
  Phone,
  MessageCircle,
  Star,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
} from "lucide-react";

// Dynamic import with ssr: false for Leaflet
const PropertyMap = dynamic(() => import("./PropertyMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] rounded-3xl bg-[#F0F4F4] animate-pulse flex flex-col items-center justify-center text-[#666B68] border border-[#E1E7E6]">
      <div className="w-12 h-12 rounded-2xl bg-[#E6F4F3] text-[#007A7A] flex items-center justify-center mb-3 animate-spin">
        <MapPin size={24} />
      </div>
      <p className="text-xs font-bold uppercase tracking-wider text-[#007A7A]">Loading interactive map...</p>
    </div>
  ),
});

interface ListingToMapSplitViewProps {
  isEmbedded?: boolean;
}

export default function ListingToMapSplitView({ isEmbedded = false }: ListingToMapSplitViewProps) {
  const {
    listings,
    allListings,
    activeListingId,
    hoveredListingId,
    activeListing,
    filters,
    isMobileMapOpen,
    setActiveListingId,
    setFilter,
    resetFilters,
    toggleMobileMap,
  } = usePropertyMap();

  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const listContainerRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Scroll Sync via IntersectionObserver (Mobile & Desktop)
  useEffect(() => {
    if (!listContainerRef.current) return;

    // Disconnect previous observer
    if (observerRef.current) observerRef.current.disconnect();

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "-25% 0px -25% 0px", // Focus on central 50% of viewport
      threshold: 0.5,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const propId = entry.target.getAttribute("data-property-id");
          if (propId) {
            setActiveListingId(propId);
          }
        }
      });
    }, options);

    const cards = listContainerRef.current.querySelectorAll("[data-property-id]");
    cards.forEach((card) => observerRef.current?.observe(card));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [listings, setActiveListingId]);

  // Swipe carousel navigation on mobile map view
  const activeIndex = listings.findIndex((p) => p.id === activeListingId);

  const handlePrevListing = () => {
    if (listings.length === 0) return;
    const prevIdx = (activeIndex - 1 + listings.length) % listings.length;
    setActiveListingId(listings[prevIdx].id);
  };

  const handleNextListing = () => {
    if (listings.length === 0) return;
    const nextIdx = (activeIndex + 1) % listings.length;
    setActiveListingId(listings[nextIdx].id);
  };

  return (
    <div className={`relative w-full ${isEmbedded ? "py-2" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"}`}>
      {/* Skip to map for screen readers */}
      <a
        href="#map-panel"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#007A7A] text-white rounded-lg font-bold text-xs"
      >
        Skip to interactive map
      </a>

      {/* Top Filter & Search Controls Bar */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#E1E7E6] shadow-sm mb-6">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            <button
              onClick={() => setFilter("category", "all")}
              className={`min-h-[44px] px-4 py-2.5 rounded-full text-xs font-black transition-all whitespace-nowrap active:scale-95 ${
                filters.category === "all"
                  ? "bg-[#007A7A] text-white shadow-sm"
                  : "bg-[#FAFAFA] text-[#4A524F] hover:bg-[#E6F4F3] hover:text-[#007A7A] border border-[#E1E7E6]"
              }`}
            >
              All Properties ({allListings.length})
            </button>
            <button
              onClick={() => setFilter("category", "student")}
              className={`min-h-[44px] px-4 py-2.5 rounded-full text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-95 ${
                filters.category === "student"
                  ? "bg-[#007A7A] text-white shadow-sm"
                  : "bg-[#FAFAFA] text-[#4A524F] hover:bg-[#E6F4F3] hover:text-[#007A7A] border border-[#E1E7E6]"
              }`}
            >
              <GraduationCap size={15} />
              <span>Student Housing (2)</span>
            </button>
            <button
              onClick={() => setFilter("category", "coliving")}
              className={`min-h-[44px] px-4 py-2.5 rounded-full text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-95 ${
                filters.category === "coliving"
                  ? "bg-[#007A7A] text-white shadow-sm"
                  : "bg-[#FAFAFA] text-[#4A524F] hover:bg-[#E6F4F3] hover:text-[#007A7A] border border-[#E1E7E6]"
              }`}
            >
              <Building2 size={15} />
              <span>Co-Living (3)</span>
            </button>
          </div>

          {/* Quick Search & Filter Drawer Trigger */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1 sm:w-64">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B7280]" />
              <input
                type="text"
                placeholder="Search SLS, SCMS, park..."
                value={filters.searchQuery}
                onChange={(e) => setFilter("searchQuery", e.target.value)}
                className="w-full min-h-[44px] pl-9 pr-8 py-2 text-xs font-bold rounded-2xl bg-[#FAFAFA] border border-[#E1E7E6] focus:outline-none focus:border-[#007A7A] focus:ring-2 focus:ring-[#007A7A]/20"
              />
              {filters.searchQuery && (
                <button
                  onClick={() => setFilter("searchQuery", "")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Price Filter Pill */}
            <div className="relative">
              <select
                value={filters.maxPrice}
                onChange={(e) => setFilter("maxPrice", Number(e.target.value))}
                className="min-h-[44px] px-3.5 py-2 text-xs font-black rounded-2xl bg-[#FAFAFA] border border-[#E1E7E6] text-[#111827] focus:outline-none focus:border-[#007A7A] cursor-pointer"
                aria-label="Filter by maximum price"
              >
                <option value={25000}>Max Price: Any</option>
                <option value={12500}>Under ₹12,500/mo</option>
                <option value={14000}>Under ₹14,000/mo</option>
                <option value={15000}>Under ₹15,000/mo</option>
              </select>
            </div>

            {(filters.category !== "all" || filters.maxPrice < 25000 || filters.searchQuery) && (
              <button
                onClick={resetFilters}
                className="min-h-[44px] px-3 py-2 rounded-2xl bg-[#FEE2E2] hover:bg-[#FECACA] text-[#DC2626] font-black text-xs flex items-center gap-1 transition-all"
                title="Reset all filters"
              >
                <RotateCcw size={13} />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Popular Campus & Micro-Market Quick Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-3 mt-3 border-t border-[#F3F4F6]">
          <span className="text-[10px] font-black uppercase text-[#6B7280] shrink-0 mr-1">Nearby:</span>
          {[
            { label: "All Areas", query: "" },
            { label: "Opp. Symbiosis SLS", query: "SLS" },
            { label: "Near SCMS Campus", query: "SCMS" },
            { label: "Sanjay Park", query: "Sanjay Park" },
            { label: "Sakore Nagar", query: "Sakore" },
            { label: "Clover Park", query: "Clover" },
          ].map((chip, idx) => {
            const isActive = filters.searchQuery === chip.query || (!filters.searchQuery && chip.query === "");
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setFilter("searchQuery", chip.query)}
                className={`min-h-[32px] px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap transition-all active:scale-95 ${
                  isActive
                    ? "bg-[#007A7A] text-white shadow-xs"
                    : "bg-[#FAFAFA] text-[#4A524F] hover:bg-[#E6F4F3] hover:text-[#007A7A] border border-[#E1E7E6]"
                }`}
              >
                {chip.label}
              </button>
            );
          })}
        </div>

        {/* Results summary line */}
        <div className="flex items-center justify-between text-xs text-[#6B7280] font-bold pt-2.5 mt-2.5 border-t border-[#F3F4F6]">
          <span>
            Showing <strong className="text-[#111827]">{listings.length}</strong> of {allListings.length} Reforbs Residences in Viman Nagar
          </span>
          <span className="hidden sm:inline-block text-[#007A7A]">
            Hover card or click marker to sync map view
          </span>
        </div>
      </div>

      {/* Main Split Layout Container */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Listings Column (Desktop: 7 cols ~ 58% width) */}
        <div
          ref={listContainerRef}
          className={`lg:col-span-7 space-y-6 ${
            isMobileMapOpen ? "hidden lg:block" : "block"
          }`}
        >
          {listings.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-[#E1E7E6] shadow-sm">
              <div className="w-16 h-16 rounded-full bg-[#E6F4F3] text-[#007A7A] flex items-center justify-center mx-auto mb-4 font-bold">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-black text-[#111827] font-heading mb-2">
                No residences match your current filters
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] max-w-md mx-auto mb-6">
                Try widening your price range or searching for a different landmark like Symbiosis Law School, SCMS, or Joggers Park.
              </p>
              <button
                onClick={resetFilters}
                className="btn-teal text-xs py-3 px-6 font-black rounded-full"
              >
                View All Reforbs Properties
              </button>
            </div>
          ) : (
            listings.map((property) => (
              <PropertyMapCard
                key={property.id}
                property={property}
                isActive={property.id === activeListingId}
                isHovered={property.id === hoveredListingId}
              />
            ))
          )}
        </div>

        {/* Right Sticky Map Column (Desktop: 5 cols ~ 42% width) */}
        <div
          id="map-panel"
          className={`lg:col-span-5 lg:sticky lg:top-24 h-[calc(100dvh-7.5rem)] min-h-[520px] self-start ${
            isMobileMapOpen
              ? "fixed inset-0 top-16 z-40 bg-white block h-[calc(100dvh-4rem)] rounded-none"
              : "hidden lg:block"
          }`}
        >
          <PropertyMap />

          {/* Mobile Bottom Swipable Listing Card Carousel (Visible only on mobile map view) */}
          {isMobileMapOpen && activeListing && (
            <div className="absolute bottom-6 left-4 right-4 z-[500] animate-fadeIn">
              <div className="bg-gradient-to-r from-[#0D1110] via-[#004A4A] to-[#032323] text-white rounded-3xl p-3.5 shadow-2xl border border-white/20 flex items-center gap-3">
                {/* Thumbnail */}
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-[#111827] border border-white/20">
                  <Image
                    src={activeListing.coverImage}
                    alt={activeListing.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded-full text-[9px] font-black uppercase bg-black/60 text-white border border-white/20">
                    {activeListing.category === "Student Housing" ? "Student" : "Co-Living"}
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-white/80">
                    <MapPin size={11} className="text-[#FFDE59] shrink-0" />
                    <span className="truncate">{activeListing.subLocation}</span>
                  </div>
                  <h4 className="font-extrabold text-sm text-white font-heading truncate">
                    {activeListing.name}
                  </h4>
                  <div className="text-xs font-black text-[#FFDE59] mt-0.5">
                    {activeListing.price} <span className="text-[10px] text-white/70 font-medium">/mo</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-2">
                    <a
                      href={activeListing.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-[#FFDE59] text-[#111827] font-black text-[11px] text-center flex items-center gap-0.5 shadow-sm active:scale-95"
                      title="Open on Google Maps"
                    >
                      <span>📍 Maps ↗</span>
                    </a>
                    <Link
                      href={activeListing.link}
                      className="px-2.5 py-1 rounded-lg bg-white/20 hover:bg-white text-white hover:text-[#111827] font-bold text-[11px] text-center border border-white/25 transition-colors"
                    >
                      Details
                    </Link>
                    <a
                      href={`https://wa.me/917420040241?text=Hi%20Reforbs%2C%20I%20am%20interested%20in%20${encodeURIComponent(activeListing.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-[#25D366] text-white font-bold text-[11px] text-center shadow-sm"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* Prev / Next controls */}
                <div className="flex flex-col gap-1 shrink-0">
                  <button
                    onClick={handlePrevListing}
                    className="w-8 h-8 rounded-full bg-[#FAFAFA] border border-gray-200 flex items-center justify-center text-gray-700 active:scale-95"
                    aria-label="Previous listing"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={handleNextListing}
                    className="w-8 h-8 rounded-full bg-[#FAFAFA] border border-gray-200 flex items-center justify-center text-gray-700 active:scale-95"
                    aria-label="Next listing"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Mobile Map / List Toggle Button (Only on standalone /properties view, centered at bottom) */}
      {!isEmbedded && (
        <div className="lg:hidden fixed bottom-20 left-1/2 -translate-x-1/2 z-40">
          <button
            onClick={toggleMobileMap}
            className="inline-flex items-center gap-2 min-h-[46px] px-5 py-2.5 rounded-full bg-[#111827] text-white hover:bg-[#007A7A] shadow-2xl font-black text-xs tracking-wider uppercase transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20 whitespace-nowrap"
            aria-label={isMobileMapOpen ? "Switch to List View" : "Switch to Map View"}
          >
            {isMobileMapOpen ? (
              <>
                <List size={16} className="text-[#FFDE59]" />
                <span>Show List View</span>
              </>
            ) : (
              <>
                <MapIcon size={16} className="text-[#FFDE59]" />
                <span>Explore Map ({listings.length})</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
