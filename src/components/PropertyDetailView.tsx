"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  CheckCircle2,
  Phone,
  ArrowRight,
  Info,
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
  amenities: { name: string; included: boolean }[];
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
    <div className="pt-24 pb-20 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-bold text-[#666B68] mb-6 overflow-x-auto whitespace-nowrap py-1">
          <Link href="/" className="hover:text-[#007A7A]">Home</Link>
          <span>/</span>
          <Link href="/#properties" className="hover:text-[#007A7A]">Pune</Link>
          <span>/</span>
          <span className="text-[#666B68]">Viman Nagar</span>
          <span>/</span>
          <span className="text-[#666B68]">{property.category}</span>
          <span>/</span>
          <span className="font-extrabold text-[#1B1D1C]">{property.name}</span>
        </nav>

        {/* Property Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="badge-eyebrow">
                {property.category}
              </span>
              <span className="text-xs font-black px-3 py-1 rounded-full bg-[#FFDE59] text-[#1B1D1C]">
                Co-Ed Friendly
              </span>
              <span className="text-xs font-bold text-[#666B68] bg-white px-3 py-1 rounded-full border border-[#E1E7E6]">
                Viman Nagar, Pune
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-[#1B1D1C] font-heading">
              {property.name}
            </h1>
            <p className="text-xs sm:text-sm text-[#4A524F] flex items-center gap-1.5 mt-1.5 font-medium">
              <MapPin size={16} className="text-[#007A7A] shrink-0" />
              <span>{property.address} • <strong className="text-[#1B1D1C]">{property.landmark}</strong></span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white px-4 py-2 rounded-2xl border border-[#E1E7E6] shadow-sm flex items-center gap-1.5">
              <span className="text-amber-500 text-base">★</span>
              <span className="font-black text-[#1B1D1C] text-base">{property.rating}</span>
              <span className="text-xs text-[#666B68] font-medium">({property.reviewsCount} reviews)</span>
            </div>
          </div>
        </div>

        {/* Stanza-style Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-10 h-[360px] sm:h-[480px]">
          {/* Main Large Image */}
          <div className="md:col-span-8 relative rounded-3xl overflow-hidden shadow-card bg-[#111312] border border-[#E1E7E6]">
            <Image
              src={activePhoto}
              alt={property.name}
              fill
              className="object-cover transition-all duration-300"
              priority
            />
            <div className="absolute bottom-4 left-4 bg-[#111312]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-white">
              Official Property Photos
            </div>
          </div>

          {/* Thumbnails */}
          <div className="hidden md:grid md:col-span-4 grid-cols-2 gap-3">
            {property.galleryImages.slice(0, 4).map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActivePhoto(img)}
                className={`relative rounded-2xl overflow-hidden border-2 transition-all ${
                  activePhoto === img
                    ? "border-[#007A7A] shadow-md scale-95"
                    : "border-transparent opacity-80 hover:opacity-100"
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

        {/* Content + Sticky Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E1E7E6] shadow-card">
              <h2 className="text-xl font-black font-heading text-[#1B1D1C] mb-4">
                About {property.name}
              </h2>
              <p className="text-sm sm:text-base text-[#4A524F] leading-relaxed mb-6 font-medium">
                {property.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E1E7E6] text-xs">
                <div>
                  <span className="text-[#666B68] block font-bold">Occupancy</span>
                  <span className="font-black text-[#1B1D1C] text-sm">Single &amp; Double</span>
                </div>
                <div>
                  <span className="text-[#666B68] block font-bold">Food Policy</span>
                  <span className="font-black text-[#1B1D1C] text-sm">Freedom (No Mess Lock)</span>
                </div>
                <div>
                  <span className="text-[#666B68] block font-bold">House Freedom</span>
                  <span className="font-black text-[#007A7A] text-sm">Zero Bans / Curfews</span>
                </div>
              </div>
            </div>

            {/* Room Options & Pricing */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E1E7E6] shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-black font-heading text-[#1B1D1C]">
                  Room &amp; Occupancy Types
                </h2>
                <span className="text-xs font-black text-[#007A7A] bg-[#E6F4F3] px-3 py-1 rounded-full">
                  Zero Brokerage
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.roomTypes.map((room, idx) => {
                  const isSelected =
                    (idx === 0 && selectedOccupancy === "double") ||
                    (idx === 1 && selectedOccupancy === "single");

                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedOccupancy(idx === 0 ? "double" : "single")}
                      className={`p-6 rounded-3xl border-2 cursor-pointer transition-all ${
                        isSelected
                          ? "border-[#007A7A] bg-[#E6F4F3]/30 shadow-md"
                          : "border-[#E1E7E6] hover:border-[#4AA8A0] bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-extrabold text-[#1B1D1C] text-base">{room.type}</span>
                        {isSelected && (
                          <CheckCircle2 size={18} className="text-[#007A7A]" />
                        )}
                      </div>
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-2xl font-black text-[#007A7A] font-heading">
                          {room.price}
                        </span>
                        <span className="text-xs text-[#666B68] font-bold">/month</span>
                      </div>
                      <div className="text-xs text-[#666B68] mb-4 font-medium">
                        Refundable Security: {room.deposit}
                      </div>

                      <ul className="space-y-1.5 text-xs text-[#4A524F] border-t border-[#E1E7E6] pt-3 font-medium">
                        {room.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-1.5">
                            <Check size={13} className="text-[#007A7A]" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Everything Included in Rent */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E1E7E6] shadow-card">
              <h2 className="text-xl font-black font-heading text-[#1B1D1C] mb-6">
                Everything Included In Your Rent
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {property.amenities.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-[#FAFAFA] border border-[#E1E7E6] flex flex-col items-center text-center"
                  >
                    <span className="text-xs font-bold text-[#1B1D1C]">{item.name}</span>
                    <span className="text-[10px] text-[#007A7A] font-extrabold mt-1">
                      Included
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Highlights */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E1E7E6] shadow-card">
              <h2 className="text-xl font-black font-heading text-[#1B1D1C] mb-2">
                Location &amp; Walking Distances
              </h2>
              <p className="text-xs sm:text-sm text-[#666B68] mb-6 font-medium">
                Situated in prime Viman Nagar, Pune. Walk to classes or grab cabs to work easily.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.landmarks.map((lm, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAFAFA] border border-[#E1E7E6] text-xs font-bold"
                  >
                    <span className="text-[#1B1D1C]">{lm.name}</span>
                    <span className="text-[#007A7A] bg-[#E6F4F3] px-2.5 py-1 rounded-full">
                      {lm.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* House Rules */}
            <div className="bg-[#FAF6E8] rounded-3xl p-6 sm:p-8 border border-[#E6D7A8]">
              <h3 className="text-lg font-black font-heading text-[#1B1D1C] mb-2">
                This is YOUR home !! Live as if you OWN it ……
              </h3>
              <p className="text-xs sm:text-sm text-[#4A524F] leading-relaxed mb-4 font-medium">
                We don&apos;t believe in imposing restrictions and bans. Instead, it&apos;s all about mutual compatibility and understanding. As long as we do things within social norms !! (Smily)
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#007A7A] bg-white px-3.5 py-1.5 rounded-full border border-[#E6D7A8]">
                <CheckCircle2 size={14} /> Reforbs Freedom Policy
              </div>
            </div>
          </div>

          {/* Sticky Booking Widget */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-8 border border-[#E1E7E6] shadow-stanza space-y-6">
              <div>
                <span className="text-xs font-black text-[#666B68] uppercase tracking-wider block">
                  Monthly Rent
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-black text-[#007A7A] font-heading">
                    {selectedOccupancy === "double" ? property.priceDouble : property.priceSingle}
                  </span>
                  <span className="text-xs text-[#666B68] font-bold">/ month</span>
                </div>
                <div className="text-xs text-[#007A7A] font-extrabold mt-1">
                  ✓ Free Wi-Fi, Daily Housekeeping &amp; Maintenance Included
                </div>
              </div>

              {/* Anti-spam promise */}
              <div className="bg-[#FAF6E8] rounded-2xl p-4 border border-[#E6D7A8] text-xs text-[#1B1D1C] flex items-start gap-2.5">
                <Info size={16} className="text-[#007A7A] mt-0.5 shrink-0" />
                <span>
                  <strong>Take it if you like it!!</strong> We don&apos;t push for sales. You will never receive follow-up disturbance calls from our side.
                </span>
              </div>

              {/* Form */}
              {visitSubmitted ? (
                <div className="text-center py-6 bg-[#E6F4F3] rounded-2xl p-4 border border-[#BDE3DF]">
                  <div className="w-12 h-12 rounded-full bg-[#007A7A] text-white flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="font-black text-[#1B1D1C] text-base mb-1 font-heading">
                    Walkthrough Scheduled!
                  </h4>
                  <p className="text-xs text-[#4A524F] mb-4 font-medium">
                    Our Viman Nagar property host will message you via WhatsApp with the exact building entry pin.
                  </p>
                  <a
                    href="https://wa.me/919876543210?text=Hi%20Reforbs!%20I%20just%20scheduled%20a%20site%20visit."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-teal text-xs py-2.5 px-4 w-full justify-center"
                  >
                    Open WhatsApp Chat
                  </a>
                </div>
              ) : (
                <form onSubmit={handleVisitSubmit} className="space-y-3">
                  <h4 className="font-black text-[#1B1D1C] text-sm font-heading">
                    Schedule a Free Walkthrough
                  </h4>

                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={visitForm.name}
                      onChange={(e) => setVisitForm({ ...visitForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E1E7E6] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#007A7A] bg-[#FAFAFA]"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp Mobile Number"
                      value={visitForm.phone}
                      onChange={(e) => setVisitForm({ ...visitForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E1E7E6] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#007A7A] bg-[#FAFAFA]"
                    />
                  </div>

                  <div>
                    <input
                      type="date"
                      required
                      value={visitForm.date}
                      onChange={(e) => setVisitForm({ ...visitForm, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E1E7E6] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#007A7A] bg-[#FAFAFA]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-teal w-full py-3 rounded-xl justify-center font-black text-xs shadow-md"
                  >
                    <span>Confirm Free Site Visit</span>
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}

              {/* Direct WhatsApp Call */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/919876543210?text=Hi%20Reforbs!%20I%20am%20interested%20in%20${encodeURIComponent(
                    property.name
                  )}%20in%20Viman%20Nagar.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-yellow text-xs py-3 rounded-xl justify-center font-black shadow-sm w-full"
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
