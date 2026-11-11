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
  Star,
  CheckCheck,
  ChevronDown,
  Calendar,
} from "lucide-react";
import { submitLead } from "@/lib/leads";
import { normalizeTelHref } from "@/lib/siteUrl";

export interface PropertyRelatedSummary {
  name: string;
  href: string;
  category: string;
  locality: string;
  price: string;
}

export interface PropertyData {
  id: string;
  slug?: string;
  name: string;
  category: "Student Housing" | "Student Accommodation" | "Co-Living" | "Company Guesthouse";
  tagline: string;
  locality?: string;
  address: string;
  landmark: string;
  rating?: string;
  reviewsCount?: number;
  priceSingle?: string;
  priceDouble?: string;
  priceTriple?: string;
  heroImage: string;
  heroAlt?: string;
  galleryImages: string[];
  galleryAlts?: string[];
  description: string;
  answerFirstSummary?: string;
  roomTypes: {
    type: string;
    price: string;
    deposit: string;
    features: string[];
  }[];
  amenities: { name: string; included: boolean }[];
  landmarks: { name: string; distance: string }[];
  coupleFriendly?: boolean;
  annualLockIn?: boolean;
  lockInPolicy?: string;
  visitorPolicy?: string;
  genderPolicy?: string;
  foodPolicy?: string;
  laundryPolicy?: string;
  contactPhone?: string;
  googleMapsUrl?: string;
  faq?: { question: string; answer: string }[];
  lastUpdated?: string;
  isGuesthouse?: boolean;
  relatedProperties?: PropertyRelatedSummary[];
}

export default function PropertyDetailView({ property }: { property: PropertyData }) {
  const [selectedOccupancy, setSelectedOccupancy] = useState<"single" | "double">("double");
  const [visitSubmitted, setVisitSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [visitForm, setVisitForm] = useState({ name: "", phone: "", date: "" });
  const [activePhoto, setActivePhoto] = useState(property.heroImage);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activePhotoIndex = property.galleryImages.indexOf(activePhoto);
  const activeAlt =
    activePhotoIndex >= 0 && property.galleryAlts?.[activePhotoIndex]
      ? property.galleryAlts[activePhotoIndex]
      : property.heroAlt || `${property.name} ${property.category} in ${property.locality || "Pune"}`;

  const handleVisitSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await submitLead({
      name: visitForm.name,
      phone: visitForm.phone,
      property: property.name,
      visitDate: visitForm.date,
      source: `Property Detail: ${property.name}`,
    });
    setWhatsappUrl(res.whatsappUrl);
    setVisitSubmitted(true);
    setSubmitting(false);
  };

  return (
    <div className="pt-24 pb-20 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold text-[#666B68] mb-6 overflow-x-auto whitespace-nowrap py-1">
          <Link href="/" className="hover:text-[#007A7A]">Home</Link>
          <span>/</span>
          <Link href="/properties" className="hover:text-[#007A7A]">Properties</Link>
          <span>/</span>
          <span className="text-[#666B68]">{property.locality || "Pune"}</span>
          <span>/</span>
          <Link
            href={
              property.category === "Co-Living"
                ? "/coliving"
                : property.isGuesthouse
                ? "/corporate-stays"
                : "/student-housing"
            }
            className="text-[#666B68] hover:text-[#007A7A]"
          >
            {property.category}
          </Link>
          <span>/</span>
          <span className="font-extrabold text-[#1B1D1C]">{property.name}</span>
        </nav>

        {/* Property Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-4xl font-black text-[#1B1D1C] font-heading">
              {property.name}
            </h1>
            <div className="text-xs sm:text-sm text-[#4A524F] flex flex-wrap items-center gap-2 mt-1.5 font-medium">
              <MapPin size={16} className="text-[#007A7A] shrink-0" />
              <span>{property.address} • <strong className="text-[#1B1D1C]">{property.landmark}</strong></span>
              {property.googleMapsUrl && (
                <a
                  href={property.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-black bg-[#FFDE59] text-[#111827] px-2.5 py-0.5 rounded-full hover:bg-[#FACC15] transition-colors"
                >
                  <span>Google Maps ↗</span>
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {property.rating && property.reviewsCount ? (
              <div className="bg-white px-4 py-2 rounded-2xl border border-[#E1E7E6] shadow-sm flex items-center gap-1.5">
                <Star size={15} className="text-amber-500 fill-amber-500" />
                <span className="font-black text-[#1B1D1C] text-base">{property.rating}</span>
                <span className="text-xs text-[#666B68] font-medium">({property.reviewsCount} reviews)</span>
              </div>
            ) : null}
            {property.lastUpdated && (
              <div className="bg-white px-3.5 py-2 rounded-2xl border border-[#E1E7E6] shadow-sm flex items-center gap-1.5 text-xs font-bold text-[#4A524F]">
                <Calendar size={14} className="text-[#007A7A]" />
                <span>Updated {property.lastUpdated}</span>
              </div>
            )}
          </div>
        </div>

        {/* Stanza-style Photo Gallery Grid with Mobile Swipe & Dots */}
        <div className="mb-8 sm:mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 h-[280px] sm:h-[380px] md:h-[480px]">
            {/* Main Large Image */}
            <div className="md:col-span-8 relative rounded-3xl overflow-hidden shadow-card bg-[#111312] border border-[#E1E7E6]">
              <Image
                src={activePhoto}
                alt={activeAlt}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover transition-all duration-300"
                priority
              />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-[#111312]/80 backdrop-blur-md px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#007A7A]" />
                <span>Verified Property Photos</span>
              </div>

              {/* Mobile pagination dots overlay */}
              <div className="md:hidden absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                {property.galleryImages.slice(0, 4).map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActivePhoto(img)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activePhoto === img ? "bg-[#FFDE59] w-4" : "bg-white/60"
                    }`}
                    aria-label={`View photo ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Thumbnails (unchanged on md+) */}
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
                    alt={property.galleryAlts?.[i] || `${property.name} view ${i + 1}`}
                    fill
                    sizes="180px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Horizontal Thumbnail Strip for 1-Tap Switching */}
          <div className="flex md:hidden items-center gap-2 overflow-x-auto no-scrollbar pt-3">
            {property.galleryImages.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActivePhoto(img)}
                className={`relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all active:scale-95 ${
                  activePhoto === img
                    ? "border-[#007A7A] shadow-md scale-105"
                    : "border-transparent opacity-70"
                }`}
              >
                <Image
                  src={img}
                  alt={property.galleryAlts?.[i] || `${property.name} mobile photo ${i + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Content + Sticky Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            {/* Overview & Answer-First Key Facts */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E1E7E6] shadow-card">
              <h2 className="text-xl font-black font-heading text-[#1B1D1C] mb-3">
                About {property.name}
              </h2>
              {property.answerFirstSummary && (
                <p className="text-sm sm:text-base text-[#1B1D1C] bg-[#E6F4F3]/60 border border-[#BDE3DF] rounded-2xl p-4 mb-4 font-semibold leading-relaxed">
                  {property.answerFirstSummary}
                </p>
              )}
              <p className="text-sm sm:text-base text-[#4A524F] leading-relaxed mb-6 font-medium">
                {property.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#E1E7E6] text-xs">
                <div>
                  <span className="text-[#666B68] block font-bold">Occupancy</span>
                  <span className="font-black text-[#1B1D1C] text-sm">
                    {property.roomTypes.map((r) => r.type.replace(/\s*\(.*\)/, "")).join(", ") || "Single & Double"}
                  </span>
                </div>
                <div>
                  <span className="text-[#666B68] block font-bold">Food Policy</span>
                  <span className="font-black text-[#1B1D1C] text-sm">
                    {property.foodPolicy || "Contact property team"}
                  </span>
                </div>
                <div>
                  <span className="text-[#666B68] block font-bold">Lock-in</span>
                  <span className="font-black text-[#007A7A] text-sm">
                    {property.lockInPolicy || (property.annualLockIn ? "Annual Lock-in" : "Zero Lock-in")}
                  </span>
                </div>
                <div>
                  <span className="text-[#666B68] block font-bold">Resident Profile</span>
                  <span className="font-black text-[#1B1D1C] text-sm">
                    {property.genderPolicy || (property.coupleFriendly ? "Unisex & Couple-Friendly" : "Co-Living / Student")}
                  </span>
                </div>
              </div>

              {property.visitorPolicy && (
                <div className="mt-4 pt-4 border-t border-[#E1E7E6] text-xs text-[#4A524F] font-medium">
                  <strong className="text-[#1B1D1C]">Visitors &amp; Freedom Policy:</strong> {property.visitorPolicy}
                </div>
              )}
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
                Nearby Locations &amp; Distances
              </h2>
              <p className="text-xs sm:text-sm text-[#666B68] mb-6 font-medium">
                Verified distances to key colleges, IT parks, malls, airport, and transit hubs.
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
                We don&apos;t believe in imposing restrictions and bans. Instead, it&apos;s all about mutual compatibility and understanding. As long as we do things within social norms !!
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#007A7A] bg-white px-3.5 py-1.5 rounded-full border border-[#E6D7A8]">
                <CheckCircle2 size={14} /> Reforbs Freedom Policy
              </div>
            </div>

            {/* Property FAQs */}
            {property.faq && property.faq.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E1E7E6] shadow-card">
                <h2 className="text-xl font-black font-heading text-[#1B1D1C] mb-4">
                  Frequently Asked Questions — {property.name}
                </h2>
                <div className="space-y-3">
                  {property.faq.map((item, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={idx} className="rounded-2xl border border-[#E1E7E6] overflow-hidden bg-[#FAFAFA]">
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          aria-expanded={isOpen}
                          className="w-full px-4 py-3.5 flex items-center justify-between text-left font-bold text-sm text-[#1B1D1C] hover:bg-[#F2F6F5] transition-colors"
                        >
                          <span>{item.question}</span>
                          <ChevronDown
                            size={16}
                            className={`text-[#007A7A] shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 text-xs sm:text-sm text-[#4A524F] leading-relaxed font-medium">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Related Reforbs Residences */}
            {property.relatedProperties && property.relatedProperties.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E1E7E6] shadow-card">
                <h2 className="text-xl font-black font-heading text-[#1B1D1C] mb-2">
                  Explore Nearby Reforbs Residences in Pune
                </h2>
                <p className="text-xs sm:text-sm text-[#666B68] mb-5 font-medium">
                  Compare other verified direct-host Reforbs homes across Viman Nagar, Sanjay Park, and Lavale.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {property.relatedProperties.map((rel) => (
                    <Link
                      key={rel.href}
                      href={rel.href}
                      className="p-4 rounded-2xl border border-[#E1E7E6] bg-[#FAFAFA] hover:border-[#007A7A] hover:bg-[#E6F4F3]/30 transition-all flex flex-col justify-between gap-2"
                    >
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#007A7A]">
                          {rel.category} • {rel.locality}
                        </span>
                        <h3 className="text-sm font-black text-[#1B1D1C] mt-1">{rel.name}</h3>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-[#E1E7E6] text-xs font-black text-[#1B1D1C]">
                        <span>From {rel.price}/mo</span>
                        <ArrowRight size={14} className="text-[#007A7A]" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
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
                    {selectedOccupancy === "double"
                      ? property.priceDouble || property.priceSingle || property.priceTriple
                      : property.priceSingle || property.priceDouble || property.priceTriple}
                  </span>
                  <span className="text-xs text-[#666B68] font-bold">/ month</span>
                </div>
                <div className="text-xs text-[#007A7A] font-extrabold mt-1 flex items-center gap-1.5">
                  <CheckCheck size={14} className="text-[#007A7A]" />
                  <span>Free Wi-Fi, Daily Housekeeping &amp; Maintenance Included</span>
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
                    href={
                      whatsappUrl ||
                      "https://wa.me/917420040241?text=Hi%20Reforbs!%20I%20just%20scheduled%20a%20site%20visit."
                    }
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
                      className="w-full px-3.5 py-3 rounded-xl border border-[#E1E7E6] text-base sm:text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#007A7A] bg-[#FAFAFA] min-h-[44px]"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp Mobile Number"
                      value={visitForm.phone}
                      onChange={(e) => setVisitForm({ ...visitForm, phone: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-xl border border-[#E1E7E6] text-base sm:text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#007A7A] bg-[#FAFAFA] min-h-[44px]"
                    />
                  </div>

                  <div>
                    <input
                      type="date"
                      required
                      value={visitForm.date}
                      onChange={(e) => setVisitForm({ ...visitForm, date: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-xl border border-[#E1E7E6] text-base sm:text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#007A7A] bg-[#FAFAFA] min-h-[44px]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-teal w-full min-h-[48px] py-3.5 rounded-xl justify-center font-black text-xs shadow-md active:scale-98 disabled:opacity-60"
                  >
                    <span>{submitting ? "Scheduling..." : "Confirm Free Site Visit"}</span>
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}

              {/* Direct Instant Action Buttons - Stanza Living Style */}
              <div className="pt-2 grid grid-cols-2 gap-2">
                <a
                  href={normalizeTelHref(property.contactPhone)}
                  className="flex items-center justify-center gap-1.5 min-h-[46px] py-3 px-3 rounded-2xl border border-[#007A7A] bg-[#E6F4F3] hover:bg-[#007A7A] hover:text-white text-[#007A7A] text-xs font-black transition-all active:scale-95 shadow-sm"
                  title="Call Us"
                  aria-label="Call Us"
                >
                  <Phone size={15} />
                  <span>Call Us</span>
                </a>

                <a
                  href={`https://wa.me/${
                    property.contactPhone
                      ? property.contactPhone.replace(/\D/g, "").length === 10
                        ? "91" + property.contactPhone.replace(/\D/g, "")
                        : property.contactPhone.replace(/\D/g, "")
                      : "917420040241"
                  }?text=Hi%20Reforbs!%20I%20am%20interested%20in%20${encodeURIComponent(
                    property.name
                  )}%20(${encodeURIComponent(property.address)}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 min-h-[46px] py-3 px-3 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-black shadow-md transition-all active:scale-95"
                  title="WhatsApp Property Manager"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
