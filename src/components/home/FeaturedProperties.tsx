"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Wifi, Sparkles, Coffee, Shield, Check, ArrowRight, Eye, PhoneCall } from "lucide-react";

interface Property {
  id: string;
  name: string;
  subtitle: string;
  type: "student" | "coliving";
  typeLabel: string;
  location: string;
  near: string;
  priceSingle: string;
  priceDouble: string;
  image: string;
  rating: string;
  reviewsCount: number;
  tags: string[];
  features: string[];
  link: string;
}

const properties: Property[] = [
  {
    id: "abc-near-sls",
    name: "ABC – Near SLS",
    subtitle: "Curated Student Residence near Symbiosis Law School",
    type: "student",
    typeLabel: "Student Housing",
    location: "Viman Nagar, Pune",
    near: "2 mins walk from SLS Campus",
    priceSingle: "₹18,000",
    priceDouble: "₹12,500",
    image: "/images/image4.png",
    rating: "4.9",
    reviewsCount: 142,
    tags: ["Symbiosis Law Hub", "Single / Double", "Study Lounge"],
    features: ["High-Speed Wi-Fi", "Daily Pro Housekeeping", "Private Work Desks", "Zero Lock-in"],
    link: "/student-housing/abc-near-sls",
  },
  {
    id: "xyz-near-scms",
    name: "XYZ – Near SCMS",
    subtitle: "Modern Student Haven near Symbiosis Centre for Mgmt Studies",
    type: "student",
    typeLabel: "Student Housing",
    location: "Viman Nagar, Pune",
    near: "3 mins walk from SCMS Campus",
    priceSingle: "₹17,500",
    priceDouble: "₹12,000",
    image: "/images/image5.png",
    rating: "4.8",
    reviewsCount: 128,
    tags: ["SCMS Proximity", "Balcony Rooms", "Chilled Vibes"],
    features: ["Superfast Fiber Internet", "Housekeeping Included", "Student Mentorship", "Rooftop Hangout"],
    link: "/student-housing/xyz-near-scms",
  },
  {
    id: "nirvana",
    name: "Reforbs Nirvana",
    subtitle: "Flagship Co-Living Ecosystem for Young Professionals",
    type: "coliving",
    typeLabel: "Co-Living",
    location: "Viman Nagar, Pune",
    near: "Near Phoenix Marketcity & IT Corridor",
    priceSingle: "₹21,000",
    priceDouble: "₹14,500",
    image: "/images/image3.png",
    rating: "5.0",
    reviewsCount: 189,
    tags: ["Backpackers Vibe", "Private Balconies", "Neon Lounge"],
    features: ["Private Kitchen & Dining", "In-house Gym & Pool Table", "DIY / Yoga Nights", "No Bans or Curfews"],
    link: "/coliving/nirvana",
  },
  {
    id: "moksha",
    name: "Reforbs Moksha",
    subtitle: "Serene & Sophisticated Co-Living with Bohemian Garden Patios",
    type: "coliving",
    typeLabel: "Co-Living",
    location: "Viman Nagar, Pune",
    near: "Prime Viman Nagar / 10 Mins to Airport",
    priceSingle: "₹22,500",
    priceDouble: "₹15,000",
    image: "/images/image7.png",
    rating: "4.9",
    reviewsCount: 164,
    tags: ["Zen Garden", "Private Kitchenette", "Community Cult"],
    features: ["Daily Professional Maintenance", "Fairy-Lit Terraces", "Networking Evenings", "100% Freedom"],
    link: "/coliving/moksha",
  },
];

export default function FeaturedProperties() {
  const [activeTab, setActiveTab] = useState<"all" | "student" | "coliving">("all");

  const filtered = activeTab === "all" ? properties : properties.filter((p) => p.type === activeTab);

  return (
    <section id="properties" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="section-tag mb-3">Our Pune Residences</span>
            <h2 className="section-title">
              Properties Built for Real Connection
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              All 4 properties are located in Pune&apos;s prime educational &amp; commercial hotspot — Viman Nagar.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 mt-6 md:mt-0 p-1.5 bg-white rounded-full border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === "all"
                  ? "bg-brand-teal text-white shadow-sm"
                  : "text-slate-600 hover:text-brand-teal"
              }`}
            >
              All (4)
            </button>
            <button
              onClick={() => setActiveTab("student")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === "student"
                  ? "bg-brand-teal text-white shadow-sm"
                  : "text-slate-600 hover:text-brand-teal"
              }`}
            >
              Student Housing (2)
            </button>
            <button
              onClick={() => setActiveTab("coliving")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === "coliving"
                  ? "bg-brand-teal text-white shadow-sm"
                  : "text-slate-600 hover:text-brand-teal"
              }`}
            >
              Co-Living (2)
            </button>
          </div>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((property) => (
            <div
              key={property.id}
              className="card-premium group flex flex-col justify-between hover:translate-y-[-4px]"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span
                      className={`text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md ${
                        property.type === "student"
                          ? "bg-brand-teal text-white"
                          : "bg-brand-yellow text-brand-dark-900"
                      }`}
                    >
                      {property.typeLabel}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center gap-1 shadow-sm">
                    <span className="text-amber-500">★</span>
                    <span>{property.rating}</span>
                    <span className="text-slate-400 font-normal">({property.reviewsCount})</span>
                  </div>

                  {/* Bottom Image Overlay Info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-brand-yellow font-semibold mb-1">
                      <MapPin size={14} />
                      <span>{property.location} • {property.near}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black font-heading text-white">
                      {property.name}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <p className="text-xs sm:text-sm text-slate-600 mb-4 line-clamp-2">
                    {property.subtitle}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {property.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Feature Checklist */}
                  <div className="grid grid-cols-2 gap-2 py-4 border-y border-slate-100 text-xs text-slate-700 font-medium">
                    {property.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <Check size={14} className="text-brand-teal shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Pricing & CTAs */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Double / Single Sharing
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-black font-heading text-brand-teal">
                      {property.priceDouble}
                    </span>
                    <span className="text-xs text-slate-500">/mo onwards</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={property.link}
                    className="btn-teal text-xs py-2.5 px-4 font-bold"
                  >
                    <span>View Property</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-yellow/30 text-brand-dark-900 flex items-center justify-center shrink-0">
              <Sparkles size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">Want to customize your room setup?</h4>
              <p className="text-xs sm:text-sm text-slate-600">
                At Reforbs you can change the room layout and choose your own terms. That&apos;s the Reforbs Cult!
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="btn-outline-teal text-xs font-bold py-2.5 px-5 whitespace-nowrap"
          >
            Speak to a Property Host
          </Link>
        </div>
      </div>
    </section>
  );
}
