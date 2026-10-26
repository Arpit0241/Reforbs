"use client";

import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { usePropertyMap } from "@/context/PropertyMapContext";
import { VIMAN_NAGAR_CENTER, PropertyItem } from "@/data/properties";
import { MapPin, Navigation, ZoomIn, ZoomOut, Search, Compass } from "lucide-react";

export default function PropertyMap() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [id: string]: L.Marker }>({});
  const isProgrammaticMoveRef = useRef(false);

  const {
    listings,
    activeListingId,
    hoveredListingId,
    visitedListingIds,
    fitBoundsTrigger,
    setActiveListingId,
    setHoveredListingId,
  } = usePropertyMap();

  const [showSearchThisArea, setShowSearchThisArea] = useState(false);
  const [isMapReady, setIsMapReady] = useState(false);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // 100% Free OpenStreetMap tiles - zero API key required, crisp and detailed local Pune landmarks
    const tileLayerUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const attribution =
      '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors';

    const map = L.map(mapContainerRef.current, {
      center: [VIMAN_NAGAR_CENTER.lat, VIMAN_NAGAR_CENTER.lng],
      zoom: VIMAN_NAGAR_CENTER.defaultZoom,
      zoomControl: false,
      scrollWheelZoom: true,
      maxZoom: 19,
      minZoom: 11,
    });

    L.tileLayer(tileLayerUrl, {
      attribution,
      maxZoom: 19,
    }).addTo(map);

    // Track user drag/pan to offer "Search this area"
    map.on("dragstart", () => {
      if (!isProgrammaticMoveRef.current) {
        setShowSearchThisArea(true);
      }
    });

    map.on("moveend", () => {
      isProgrammaticMoveRef.current = false;
    });

    mapInstanceRef.current = map;
    setIsMapReady(true);

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Markers whenever listings, activeListingId, hoveredListingId, or visited change
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !isMapReady) return;

    // Remove existing markers
    Object.values(markersRef.current).forEach((marker) => marker.remove());
    markersRef.current = {};

    if (listings.length === 0) {
      // Recenter on Viman Nagar if no listings
      map.setView([VIMAN_NAGAR_CENTER.lat, VIMAN_NAGAR_CENTER.lng], 13);
      return;
    }

    const bounds = L.latLngBounds([]);

    listings.forEach((item) => {
      bounds.extend([item.lat, item.lng]);

      const isActive = item.id === activeListingId;
      const isHovered = item.id === hoveredListingId;
      const isVisited = visitedListingIds.includes(item.id);

      // Custom divIcon Marker styled with Reforbs design tokens
      let badgeClasses = "bg-[#007A7A] text-white border-2 border-white shadow-md";
      let zIndex = 100;

      if (isActive || isHovered) {
        badgeClasses =
          "bg-[#FFDE59] text-[#111827] border-2 border-[#111827] shadow-xl scale-110 ring-4 ring-[#007A7A]/30";
        zIndex = 999;
      } else if (isVisited) {
        badgeClasses = "bg-[#005555] text-white/95 border-2 border-white/80 shadow-sm";
      }

      const customHtml = `
        <div class="relative group cursor-pointer transition-transform duration-200" style="transform: translate(-50%, -100%);">
          <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-full font-black text-xs whitespace-nowrap transition-all ${badgeClasses}">
            <span class="w-2 h-2 rounded-full ${isActive || isHovered ? "bg-[#007A7A]" : "bg-[#FFDE59]"}"></span>
            <span>${item.price}</span>
          </div>
          <div class="w-2.5 h-2.5 bg-inherit rotate-45 mx-auto -mt-1.5 border-r border-b ${
            isActive || isHovered ? "bg-[#FFDE59] border-[#111827]" : "bg-[#007A7A] border-white"
          }"></div>
        </div>
      `;

      const icon = L.divIcon({
        html: customHtml,
        className: "custom-property-pin",
        iconSize: [80, 40],
        iconAnchor: [40, 40],
      });

      const marker = L.marker([item.lat, item.lng], {
        icon,
        zIndexOffset: zIndex,
        riseOnHover: true,
        alt: `${item.name} - ${item.price}`,
      });

      // Marker popup content
      const popupContent = `
        <div class="w-64 p-1 font-sans">
          <div class="relative h-28 w-full rounded-xl overflow-hidden mb-2 bg-[#111827]">
            <img src="${item.coverImage}" alt="${item.name}" class="w-full h-full object-cover" />
            <div class="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-[#007A7A] text-white">
              ${item.category}
            </div>
            <div class="absolute bottom-2 left-2 px-2 py-0.5 rounded-full text-[11px] font-black bg-[#FFDE59] text-[#111827]">
              ${item.price}/mo
            </div>
          </div>
          <h4 class="font-extrabold text-sm text-[#111827] font-heading mb-0.5 line-clamp-1">${item.name}</h4>
          <p class="text-[11px] text-[#4B5563] mb-2 font-medium line-clamp-1">${item.subLocation}</p>
          <div class="flex items-center justify-between gap-2 pt-2 border-t border-[#E5E7EB]">
            <span class="text-[11px] font-bold text-[#007A7A]">★ ${item.rating} (${item.reviews})</span>
            <a href="${item.link}" class="px-3 py-1 rounded-lg bg-[#007A7A] hover:bg-[#005F5F] text-white text-[11px] font-bold text-center transition-colors">
              View Details
            </a>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent, {
        closeButton: false,
        offset: [0, -32],
        className: "custom-property-popup",
      });

      // Click on marker: selects listing, scrolls matching card on left into view
      marker.on("click", () => {
        setActiveListingId(item.id);
        const cardEl = document.getElementById(`property-card-${item.id}`);
        if (cardEl) {
          cardEl.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });

      marker.on("mouseover", () => {
        setHoveredListingId(item.id);
      });

      marker.on("mouseout", () => {
        setHoveredListingId(null);
      });

      marker.addTo(map);
      markersRef.current[item.id] = marker;
    });

    // Fit bounds on first load or filter change
    if (bounds.isValid() && fitBoundsTrigger > 0) {
      map.fitBounds(bounds, {
        padding: [50, 50],
        maxZoom: 15,
        animate: true,
      });
    }
  }, [
    listings,
    activeListingId,
    hoveredListingId,
    visitedListingIds,
    fitBoundsTrigger,
    isMapReady,
    setActiveListingId,
    setHoveredListingId,
  ]);

  // Smooth camera pan to active listing
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !activeListingId || !isMapReady) return;

    const targetItem = listings.find((p) => p.id === activeListingId);
    if (!targetItem) return;

    isProgrammaticMoveRef.current = true;
    const targetZoom = Math.max(map.getZoom(), 15);

    // Pan smoothly without jarring zoom jumps
    map.flyTo([targetItem.lat, targetItem.lng], targetZoom, {
      duration: 0.65,
      easeLinearity: 0.25,
    });

    // Open popup for active marker
    const marker = markersRef.current[activeListingId];
    if (marker && !marker.isPopupOpen()) {
      marker.openPopup();
    }
  }, [activeListingId, isMapReady, listings]);

  // Initial fit bounds
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !isMapReady || listings.length === 0) return;

    const bounds = L.latLngBounds(listings.map((p) => [p.lat, p.lng]));
    if (bounds.isValid()) {
      map.fitBounds(bounds, {
        padding: [60, 60],
        maxZoom: 15,
        animate: false,
      });
    }
  }, [isMapReady, listings]);

  const handleZoomIn = () => {
    mapInstanceRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    mapInstanceRef.current?.zoomOut();
  };

  const handleRecenter = () => {
    if (!mapInstanceRef.current || listings.length === 0) return;
    const bounds = L.latLngBounds(listings.map((p) => [p.lat, p.lng]));
    if (bounds.isValid()) {
      mapInstanceRef.current.fitBounds(bounds, {
        padding: [50, 50],
        maxZoom: 15,
        animate: true,
      });
    }
    setShowSearchThisArea(false);
  };

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden border border-[#E1E7E6] shadow-md bg-[#F4F6F6]">
      {/* Map Target DOM Element */}
      <div ref={mapContainerRef} className="w-full h-full z-0" tabIndex={0} aria-label="Interactive map of Reforbs properties" />

      {/* Floating Controls Overlay */}
      <div className="absolute top-4 right-4 z-[400] flex flex-col gap-2">
        <button
          onClick={handleZoomIn}
          className="w-10 h-10 rounded-xl bg-white/95 text-[#111827] hover:bg-[#007A7A] hover:text-white shadow-md flex items-center justify-center transition-all active:scale-95 border border-[#E5E7EB]"
          aria-label="Zoom In"
        >
          <ZoomIn size={18} />
        </button>
        <button
          onClick={handleZoomOut}
          className="w-10 h-10 rounded-xl bg-white/95 text-[#111827] hover:bg-[#007A7A] hover:text-white shadow-md flex items-center justify-center transition-all active:scale-95 border border-[#E5E7EB]"
          aria-label="Zoom Out"
        >
          <ZoomOut size={18} />
        </button>
        <button
          onClick={handleRecenter}
          className="w-10 h-10 rounded-xl bg-white/95 text-[#111827] hover:bg-[#007A7A] hover:text-white shadow-md flex items-center justify-center transition-all active:scale-95 border border-[#E5E7EB]"
          title="Fit all properties in view"
          aria-label="Recenter map"
        >
          <Navigation size={18} />
        </button>
      </div>

      {/* Floating "Search This Area" Pill (Appears when map is dragged) */}
      {showSearchThisArea && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[400] animate-fadeIn">
          <button
            onClick={handleRecenter}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#111827] hover:bg-[#007A7A] hover:text-white font-black text-xs shadow-xl border border-[#E5E7EB] transition-all hover:scale-105 active:scale-95"
          >
            <Search size={14} className="text-[#007A7A] group-hover:text-white" />
            <span>Search This Area ({listings.length} Available)</span>
          </button>
        </div>
      )}

      {/* Map Legend Overlay */}
      <div className="absolute bottom-4 left-4 z-[400] hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#111827] text-[11px] font-bold shadow-md border border-[#E5E7EB]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#007A7A]" />
        <span>Reforbs Residence</span>
        <span className="text-gray-300">•</span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFDE59] border border-gray-900" />
        <span>Selected</span>
      </div>
    </div>
  );
}
