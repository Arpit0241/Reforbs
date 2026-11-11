"use client";

import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { usePropertyMap } from "@/context/PropertyMapContext";
import { VIMAN_NAGAR_CENTER, PropertyItem } from "@/data/properties";
import { Navigation, ZoomIn, ZoomOut, Search } from "lucide-react";

function getMarkerHtml(item: PropertyItem, isActive: boolean, isHovered: boolean, isVisited: boolean) {
  let badgeClasses = "bg-[#007A7A] text-white border-[1.5px] border-white shadow-sm";
  if (isActive || isHovered) {
    badgeClasses =
      "bg-[#FFDE59] text-[#111827] border-2 border-[#111827] shadow-xl scale-110 ring-4 ring-[#007A7A]/30 font-black";
  } else if (isVisited) {
    badgeClasses = "bg-[#005555] text-white/90 border-[1.5px] border-white/80 shadow-xs";
  }

  return `
    <div class="relative group cursor-pointer transition-transform duration-200" style="transform: translate(-50%, -100%);">
      <div class="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-extrabold whitespace-nowrap transition-all ${badgeClasses}">
        <span class="w-1.5 h-1.5 rounded-full ${isActive || isHovered ? "bg-[#007A7A]" : "bg-[#FFDE59]"}"></span>
        <span>${item.price}</span>
      </div>
      <div class="w-2 h-2 bg-inherit rotate-45 mx-auto -mt-1 border-r border-b ${
        isActive || isHovered ? "bg-[#FFDE59] border-[#111827]" : "bg-[#007A7A] border-white"
      }"></div>
    </div>
  `;
}

function getPopupHtml(item: PropertyItem) {
  return `
    <div class="w-[265px] min-w-[250px] max-w-[calc(100vw-36px)] p-3 font-sans bg-white rounded-2xl box-border">
      <a href="${item.link}" class="block relative h-32 w-full rounded-xl overflow-hidden mb-2.5 bg-[#111827] group" title="View ${item.name} details">
        <img src="${item.coverImage}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <div class="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-[#007A7A] text-white shadow-xs">
          ${item.category}
        </div>
        <div class="absolute bottom-2 left-2 px-2.5 py-1 rounded-xl text-xs font-black bg-[#FFDE59] text-[#111827] shadow-sm">
          ${item.price}<span class="text-[10px] font-bold text-gray-800">/month</span>
        </div>
      </a>

      <a href="${item.link}" class="block hover:text-[#007A7A] transition-colors" title="View ${item.name} details">
        <h4 class="font-extrabold text-sm text-[#111827] font-heading mb-0.5 truncate flex items-center justify-between">
          <span class="truncate">${item.name}</span>
          <span class="text-xs text-[#007A7A] font-black shrink-0 ml-1">→</span>
        </h4>
      </a>
      <div class="text-[11px] text-[#4B5563] mb-3 font-medium truncate block">
        📍 ${item.address || item.subLocation}
      </div>

      <div class="grid grid-cols-2 gap-2 pt-2.5 border-t border-[#E5E7EB]">
        <a href="${item.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-gmaps flex items-center justify-center gap-1 px-2.5 py-2 rounded-xl text-[11px] font-black text-center transition-all shadow-xs" style="background-color: #FFDE59 !important; color: #111827 !important; border: 1.5px solid #111827 !important;" title="Open in Google Maps">
          <span>📍 Google Maps</span>
        </a>
        <a href="${item.link}" class="btn-details flex items-center justify-center gap-1 px-2.5 py-2 rounded-xl text-[11px] font-black text-center transition-colors shadow-xs" style="background-color: #007A7A !important; color: #FFFFFF !important;" title="View Property Details">
          <span>Details →</span>
        </a>
      </div>
    </div>
  `;
}

export default function PropertyMap() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [id: string]: L.Marker }>({});
  const isProgrammaticMoveRef = useRef(false);
  const lastClickedMarkerRef = useRef<{ id: string | null; time: number }>({ id: null, time: 0 });

  const {
    listings,
    activeListingId,
    hoveredListingId,
    visitedListingIds,
    fitBoundsTrigger,
    isMobileMapOpen,
    setActiveListingId,
    setHoveredListingId,
  } = usePropertyMap();

  const [showSearchThisArea, setShowSearchThisArea] = useState(false);
  const [isMapReady, setIsMapReady] = useState(false);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // 1. CARTO Basemaps API Key from Vercel/browser environment variable
    const cartoApiKey = process.env.NEXT_PUBLIC_CARTO_API_KEY?.trim();
    const hasCartoKey = Boolean(cartoApiKey && cartoApiKey !== "YOUR_KEY");

    // 2. Tile URL: If CARTO key is provided, use CARTO Voyager with key;
    // otherwise use reliable OpenStreetMap standard HTTPS tiles (zero watermark, zero key required)
    const tileLayerUrl = hasCartoKey
      ? `https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?key=${cartoApiKey}`
      : "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

    const attribution = hasCartoKey
      ? '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions" target="_blank" rel="noopener noreferrer">CARTO</a>'
      : '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors';

    const map = L.map(mapContainerRef.current, {
      center: [VIMAN_NAGAR_CENTER.lat, VIMAN_NAGAR_CENTER.lng],
      zoom: VIMAN_NAGAR_CENTER.defaultZoom,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: true,
      maxZoom: 19,
      minZoom: 11,
      trackResize: true,
      closePopupOnClick: false, // Prevents popup closing when moving mouse onto map canvas
    });

    const tileLayer = L.tileLayer(tileLayerUrl, {
      attribution,
      subdomains: hasCartoKey ? "abcd" : "abc",
      maxZoom: 19,
      minZoom: 11,
      crossOrigin: true,
    });

    // Fallback if CARTO tile error / invalid key occurs
    let switchedToOsm = false;
    tileLayer.on("tileerror", () => {
      if (hasCartoKey && !switchedToOsm) {
        switchedToOsm = true;
        console.warn("CARTO tile error detected. Falling back to OpenStreetMap standard tiles.");
        tileLayer.setUrl("https://tile.openstreetmap.org/{z}/{x}/{y}.png");
      }
    });

    tileLayer.addTo(map);

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

    // Initial resize trigger after DOM attaches
    const initTimer = setTimeout(() => {
      map.invalidateSize();
    }, 100);

    return () => {
      clearTimeout(initTimer);
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // ResizeObserver: Automatically recalculate map size whenever container changes dimensions
  useEffect(() => {
    const container = mapContainerRef.current;
    const map = mapInstanceRef.current;
    if (!container || !map || !isMapReady) return;

    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    const ro = new ResizeObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize({ pan: false });
        }
      }, 50);
    });

    ro.observe(container);

    return () => {
      clearTimeout(resizeTimer);
      ro.disconnect();
    };
  }, [isMapReady]);

  // Window resize & device orientation change listener
  useEffect(() => {
    const handleResize = () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize({ pan: false });
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  // Re-invalidate map size when mobile full-screen map modal opens or closes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !isMapReady) return;

    const t1 = setTimeout(() => map.invalidateSize(), 50);
    const t2 = setTimeout(() => {
      map.invalidateSize();
      if (activeListingId) {
        const target = listings.find((p) => p.id === activeListingId);
        if (target) {
          map.panTo([target.lat, target.lng], { animate: true });
        }
      } else if (listings.length > 0) {
        const bounds = L.latLngBounds(listings.map((p) => [p.lat, p.lng]));
        if (bounds.isValid()) {
          map.fitBounds(bounds, { padding: [40, 40], maxZoom: 15 });
        }
      }
    }, 200);
    const t3 = setTimeout(() => map.invalidateSize(), 450);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isMobileMapOpen, isMapReady, activeListingId, listings]);

  // 1. Create / Recreate markers ONLY when listings list or map ready state changes
  // (NOT on hover or active state changes - this prevents popups from disappearing!)
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !isMapReady) return;

    // Remove existing markers
    Object.values(markersRef.current).forEach((marker) => marker.remove());
    markersRef.current = {};

    if (listings.length === 0) {
      map.setView([VIMAN_NAGAR_CENTER.lat, VIMAN_NAGAR_CENTER.lng], 13);
      return;
    }

    const bounds = L.latLngBounds([]);

    listings.forEach((item) => {
      bounds.extend([item.lat, item.lng]);

      const isActive = item.id === activeListingId;
      const isHovered = item.id === hoveredListingId;
      const isVisited = visitedListingIds.includes(item.id);

      const html = getMarkerHtml(item, isActive, isHovered, isVisited);
      const zIndex = (isActive || isHovered) ? 1000 : 100 + Math.round((item.lat - 18.5) * 10000);

      const icon = L.divIcon({
        html,
        className: "custom-property-pin",
        iconSize: [68, 32],
        iconAnchor: [34, 32],
      });

      const marker = L.marker([item.lat, item.lng], {
        icon,
        zIndexOffset: zIndex,
        riseOnHover: true,
        alt: `${item.name} - ${item.price}`,
      });

      // Bind popup with safe settings so moving mouse to map canvas does not dismiss it
      marker.bindPopup(getPopupHtml(item), {
        closeButton: true,
        closeOnClick: false, // Never close when clicking or moving over the map canvas
        autoClose: true,     // Keep one active popup open at a time
        offset: [0, -28],
        minWidth: 250,
        maxWidth: 280,
        autoPan: true,
        autoPanPadding: [20, 70],
        className: "custom-property-popup",
      });

      // MARKER CLICK HANDLER:
      // First click: selects the property, opens the popup on the map, and scrolls matching card into view.
      // Second click on the same marker while popup is open: redirects directly to Google Maps location!
      marker.on("click", (e) => {
        L.DomEvent.stopPropagation(e);
        const now = Date.now();
        const isSameMarker = lastClickedMarkerRef.current.id === item.id;
        const isRecent = (now - lastClickedMarkerRef.current.time) < 4000;
        const isPopupAlreadyOpen = marker.isPopupOpen();

        if (isSameMarker && isRecent && isPopupAlreadyOpen) {
          // SECOND CLICK: Redirect to Google Maps location!
          window.open(item.googleMapsUrl, "_blank", "noopener,noreferrer");
          lastClickedMarkerRef.current = { id: null, time: 0 };
        } else {
          // FIRST CLICK: Select property in maps, open popup, pan, scroll card into view
          lastClickedMarkerRef.current = { id: item.id, time: now };
          setActiveListingId(item.id);
          marker.openPopup();
          const cardEl = document.getElementById(`property-card-${item.id}`);
          if (cardEl) {
            cardEl.scrollIntoView({ behavior: "smooth", block: "center" });
          }
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
  }, [listings, isMapReady, fitBoundsTrigger, setActiveListingId, setHoveredListingId]);

  // 2. Lightweight visual update when activeListingId, hoveredListingId, or visited changes
  // Updates marker pins smoothly without destroying markers or closing open popups!
  useEffect(() => {
    listings.forEach((item) => {
      const marker = markersRef.current[item.id];
      if (!marker) return;

      const isActive = item.id === activeListingId;
      const isHovered = item.id === hoveredListingId;
      const isVisited = visitedListingIds.includes(item.id);

      const html = getMarkerHtml(item, isActive, isHovered, isVisited);
      const zIndex = (isActive || isHovered) ? 1000 : 100 + Math.round((item.lat - 18.5) * 10000);

      marker.setIcon(
        L.divIcon({
          html,
          className: "custom-property-pin",
          iconSize: [68, 32],
          iconAnchor: [34, 32],
        })
      );
      marker.setZIndexOffset(zIndex);
    });
  }, [listings, activeListingId, hoveredListingId, visitedListingIds]);

  // 3. Smooth camera pan and popup display for active listing
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !activeListingId || !isMapReady) return;

    const targetItem = listings.find((p) => p.id === activeListingId);
    if (
      !targetItem ||
      typeof targetItem.lat !== "number" ||
      typeof targetItem.lng !== "number" ||
      !isFinite(targetItem.lat) ||
      !isFinite(targetItem.lng)
    )
      return;

    isProgrammaticMoveRef.current = true;
    const currentZoom = typeof map.getZoom === "function" ? map.getZoom() : 15;
    const targetZoom = isFinite(currentZoom) ? Math.max(currentZoom, 15) : 15;

    try {
      map.flyTo([targetItem.lat, targetItem.lng], targetZoom, {
        duration: 0.65,
        easeLinearity: 0.25,
      });
    } catch (e) {
      console.warn("Leaflet flyTo skipped:", e);
    }

    // Keep popup open for active marker
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
