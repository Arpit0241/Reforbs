"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Star,
  Share2,
  Heart,
  CheckCircle2,
  Wifi,
  Shirt,
  Sparkles,
  UtensilsCrossed,
  ShieldCheck,
  Dumbbell,
  Gamepad2,
  Calendar,
  Phone,
  Clock,
  ArrowRight,
  Info,
  Building,
  Check,
} from "lucide-react";

export interface PropertyData {
  id: string;
  name: string;
  category: "Student Housing" | "Co-Living";
  tagline: string;
  address: string;
  landmark: string;
  rating: string;
  reviewsCount: number;
  priceSingle: string;
  priceDouble: string;
  heroImage: string;
  galleryImages: string[];
  description: string;
  roomTypes: {
    type: string;
    price: string;
    deposit: string;
    features: string[];
  }[];
  amenities: { name: string; icon: string; included: boolean }[];
  landmarks: { name: string; distance: string }[];
}

export default function PropertyDetailView({ property }: { property: PropertyData }) {
  const [selectedOccupancy, setSelectedOccupancy] = useState<"single" | "double">("double");
  const [visitSubmitted, setVisitSubmitted] = useState(false);
  const [visitForm, setVisitForm] = useState({ name: "", phone: "", date: "" });
  const [activePhoto, setActivePhoto] = useState(property.heroImage);

  const handleVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVisitSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 overflow-x-auto whitespace-nowrap py-1">
          <Link href="/" className="hover:text-brand-teal">Home</Link>
          <span>/</span>
          <Link href="/#properties" className="hover:text-brand-teal">Pune</Link>
          <span>/</span>
          <span className="text-slate-400">Viman Nagar</span>
          <span>/</span>
          <span className="text-slate-400">{property.category}</span>
          <span>/</span>
          <span className="font-bold text-slate-800">{property.name}</span>
        </nav>

        {/* Property Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-brand-teal text-white shadow-sm">
                {property.category}
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-yellow text-brand-dark-900">
                Co-Ed Friendly
              </span>
              <span className="text-xs font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                Viman Nagar, Pune
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black font-heading text-slate-900">
              {property.name}
            </h1>
            <p className="text-sm text-slate-600 flex items-center gap-1.5 mt-1.5">
              <MapPin size={16} className="text-brand-teal shrink-0" />
              <span>{property.address} • <strong className="text-slate-800">{property.landmark}</strong></span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-1.5">
              <span className="text-amber-500 text-base">★</span>
              <span className="font-black text-slate-900 text-base">{property.rating}</span>
              <span className="text-xs text-slate-400">({property.reviewsCount} reviews)</span>
            </div>
          </div>
        </div>

        {/* Stanza-style Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-10 h-[380px] sm:h-[460px]">
          {/* Main Large Image */}
          <div className="md:col-span-8 relative rounded-3xl overflow-hidden shadow-md bg-slate-950">
            <Image
              src={activePhoto}
              alt={property.name}
              fill
              className="object-cover transition-all duration-300"
              priority
            />
            <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-white">
              Official Reforbs Property Photos
            </div>
          </div>

          {/* 4 Thumbnails on the right */}
          <div className="hidden md:grid md:col-span-4 grid-cols-2 gap-3">
            {property.galleryImages.slice(0, 4).map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActivePhoto(img)}
                className={`relative rounded-2xl overflow-hidden border-2 transition-all ${
                  activePhoto === img ? "border-brand-teal shadow-md scale-95" : "border-transparent opacity-85 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`${property.name} gallery ${i}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Two-Column Layout (Content + Sticky Booking Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Details, Rooms, Amenities, Rules, Location */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview / About */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-black font-heading text-slate-900 mb-4">
                About {property.name}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {property.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Occupancy Options</span>
                  <span className="font-bold text-slate-800 text-sm">Single &amp; Double</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Food Choice</span>
                  <span className="font-bold text-slate-800 text-sm">Freedom (No Mess Lock)</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">House Rules</span>
                  <span className="font-bold text-emerald-600 text-sm">Zero Bans / Curfews</span>
                </div>
              </div>
            </div>

            {/* Room Options & Pricing */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-black font-heading text-slate-900">
                  Select Room &amp; Occupancy
                </h2>
                <span className="text-xs font-semibold text-brand-teal bg-brand-teal-50 px-3 py-1 rounded-full">
                  Zero Brokerage
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {property.roomTypes.map((room, idx) => {
                  const isSelected =
                    (idx === 0 && selectedOccupancy === "double") ||
                    (idx === 1 && selectedOccupancy === "single");

                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedOccupancy(idx === 0 ? "double" : "single")}
                      className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                        isSelected
                          ? "border-brand-teal bg-brand-teal-50/40 shadow-md"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-slate-900 text-base">{room.type}</span>
                        {isSelected && (
                          <CheckCircle2 size={18} className="text-brand-teal" />
                        )}
                      </div>
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-2xl font-black font-heading text-brand-teal">
                          {room.price}
                        </span>
                        <span className="text-xs text-slate-500">/month</span>
                      </div>
                      <div className="text-xs text-slate-500 mb-4">
                        Refundable Security: {room.deposit}
                      </div>

                      <ul className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                        {room.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-1.5">
                            <Check size={13} className="text-brand-teal" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Amenities Included */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-black font-heading text-slate-900 mb-6">
                Everything Included In Your Rent
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {property.amenities.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-2 font-bold text-sm">
                      ✓
                    </div>
                    <span className="text-xs font-bold text-slate-800">{item.name}</span>
                    <span className="text-[10px] text-emerald-600 font-semibold mt-1">
                      100% Free
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Surrounding Landmarks & Distances */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-black font-heading text-slate-900 mb-2">
                Location &amp; Nearby Highlights
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Situated in the most walkable and happening micro-market of Pune: Viman Nagar.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.landmarks.map((lm, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm"
                  >
                    <span className="font-semibold text-slate-800">{lm.name}</span>
                    <span className="text-xs font-bold text-brand-teal bg-brand-teal-50 px-2.5 py-1 rounded-full">
                      {lm.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reforbs House Freedom Vibe */}
            <div className="bg-gradient-to-r from-brand-teal/10 via-brand-yellow/10 to-white rounded-3xl p-6 sm:p-8 border border-brand-teal-200">
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                This is YOUR home. Live as if you OWN it.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                We don&apos;t believe in imposing senseless bans, curfew fines, or restrictive wardens. As long as things are within social respect, you are free to study late, host study groups, invite friends, and enjoy community rooftop sessions!
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-teal bg-white px-3.5 py-1.5 rounded-full border border-brand-teal-200">
                <CheckCircle2 size={14} /> Respectful Compatibility, Zero Moral Policing
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking Widget (Stanza Living Conversion Funnel) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
              {/* Pricing summary */}
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Starting Rent
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-black font-heading text-brand-teal">
                    {selectedOccupancy === "double" ? property.priceDouble : property.priceSingle}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/ month</span>
                </div>
                <div className="text-xs text-emerald-600 font-semibold mt-1">
                  ✓ Includes Housekeeping, Wi-Fi &amp; Maintenance
                </div>
              </div>

              {/* No-Spam Guarantee Pill */}
              <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
                <Info size={16} className="text-brand-teal mt-0.5 shrink-0" />
                <span>
                  <strong>Our Anti-Spam Promise:</strong> We never push for sales. You will never receive follow-up disturbance calls!
                </span>
              </div>

              {/* Visit Booking Form */}
              {visitSubmitted ? (
                <div className="text-center py-6 bg-emerald-50 rounded-2xl p-4 border border-emerald-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">
                    Site Visit Scheduled!
                  </h4>
                  <p className="text-xs text-slate-600 mb-4">
                    Our Viman Nagar property host will ping you with exact location &amp; entrance pin.
                  </p>
                  <a
                    href="https://wa.me/919876543210?text=Hi%20Reforbs!%20I%20booked%20a%20visit%20for%20this%20property."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-teal text-xs py-2.5 px-4 w-full justify-center"
                  >
                    Open WhatsApp Chat
                  </a>
                </div>
              ) : (
                <form onSubmit={handleVisitSubmit} className="space-y-3">
                  <h4 className="font-bold text-slate-900 text-sm">
                    Schedule an In-Person Walkthrough
                  </h4>

                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={visitForm.name}
                      onChange={(e) => setVisitForm({ ...visitForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-teal"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp Mobile Number"
                      value={visitForm.phone}
                      onChange={(e) => setVisitForm({ ...visitForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-teal"
                    />
                  </div>

                  <div>
                    <input
                      type="date"
                      required
                      value={visitForm.date}
                      onChange={(e) => setVisitForm({ ...visitForm, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-teal bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-teal w-full py-3 rounded-xl justify-center font-bold text-xs shadow-md"
                  >
                    <span>Confirm Free Site Visit</span>
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}

              {/* Instant WhatsApp direct */}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={`https://wa.me/919876543210?text=Hi%20Reforbs!%20I%20am%20interested%20in%20${encodeURIComponent(
                    property.name
                  )}%20in%20Viman%20Nagar.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-yellow text-xs py-3 rounded-xl justify-center font-bold shadow-sm"
                >
                  <Phone size={14} />
                  <span>Chat with Property Manager</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
