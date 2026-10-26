"use client";

import React, { createContext, useContext, useState, useMemo, useCallback } from "react";
import { PropertyItem, propertiesData } from "@/data/properties";

export interface FilterState {
  category: "all" | "student" | "coliving";
  maxPrice: number;
  searchQuery: string;
}

interface PropertyMapContextType {
  listings: PropertyItem[];
  allListings: PropertyItem[];
  activeListingId: string | null;
  hoveredListingId: string | null;
  visitedListingIds: string[];
  filters: FilterState;
  isMobileMapOpen: boolean;
  fitBoundsTrigger: number;
  searchThisAreaVisible: boolean;
  activeListing: PropertyItem | null;
  setActiveListingId: (id: string | null) => void;
  setHoveredListingId: (id: string | null) => void;
  markAsVisited: (id: string) => void;
  setFilter: (key: keyof FilterState, value: any) => void;
  resetFilters: () => void;
  toggleMobileMap: () => void;
  setIsMobileMapOpen: (open: boolean) => void;
  triggerFitBounds: () => void;
  setSearchThisAreaVisible: (visible: boolean) => void;
}

const defaultFilters: FilterState = {
  category: "all",
  maxPrice: 25000,
  searchQuery: "",
};

const PropertyMapContext = createContext<PropertyMapContextType | null>(null);

export function PropertyMapProvider({
  children,
  initialCategory = "all",
}: {
  children: React.ReactNode;
  initialCategory?: "all" | "student" | "coliving";
}) {
  const [activeListingId, setActiveListingIdState] = useState<string | null>(
    propertiesData[0]?.id || null
  );
  const [hoveredListingId, setHoveredListingId] = useState<string | null>(null);
  const [visitedListingIds, setVisitedListingIds] = useState<string[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    ...defaultFilters,
    category: initialCategory,
  });
  const [isMobileMapOpen, setIsMobileMapOpen] = useState(false);
  const [fitBoundsTrigger, setFitBoundsTrigger] = useState(0);
  const [searchThisAreaVisible, setSearchThisAreaVisible] = useState(false);

  const markAsVisited = useCallback((id: string) => {
    setVisitedListingIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const setActiveListingId = useCallback((id: string | null) => {
    setActiveListingIdState(id);
    if (id) {
      setVisitedListingIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
    }
  }, []);

  const setFilter = useCallback((key: keyof FilterState, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setFitBoundsTrigger((prev) => prev + 1);
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(defaultFilters);
    setFitBoundsTrigger((prev) => prev + 1);
  }, []);

  const toggleMobileMap = useCallback(() => {
    setIsMobileMapOpen((prev) => !prev);
  }, []);

  const triggerFitBounds = useCallback(() => {
    setFitBoundsTrigger((prev) => prev + 1);
  }, []);

  // Filter listings based on single source of truth
  const filteredListings = useMemo(() => {
    return propertiesData.filter((item) => {
      // Category filter
      if (filters.category === "student" && item.category !== "Student Housing") {
        return false;
      }
      if (filters.category === "coliving" && item.category !== "Co-Living") {
        return false;
      }

      // Max Price filter
      if (item.priceNum > filters.maxPrice) {
        return false;
      }

      // Search query filter
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesLocation = item.subLocation.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesHighlights = item.highlights.some((h) => h.toLowerCase().includes(query));
        if (!matchesName && !matchesLocation && !matchesDesc && !matchesHighlights) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  const activeListing = useMemo(() => {
    return propertiesData.find((p) => p.id === activeListingId) || null;
  }, [activeListingId]);

  const value = {
    listings: filteredListings,
    allListings: propertiesData,
    activeListingId,
    hoveredListingId,
    visitedListingIds,
    filters,
    isMobileMapOpen,
    fitBoundsTrigger,
    searchThisAreaVisible,
    activeListing,
    setActiveListingId,
    setHoveredListingId,
    markAsVisited,
    setFilter,
    resetFilters,
    toggleMobileMap,
    setIsMobileMapOpen,
    triggerFitBounds,
    setSearchThisAreaVisible,
  };

  return <PropertyMapContext.Provider value={value}>{children}</PropertyMapContext.Provider>;
}

export function usePropertyMap() {
  const context = useContext(PropertyMapContext);
  if (!context) {
    throw new Error("usePropertyMap must be used within a PropertyMapProvider");
  }
  return context;
}
