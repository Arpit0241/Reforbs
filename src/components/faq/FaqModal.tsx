"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  X,
  Search,
  ChevronDown,
  Building2,
  GraduationCap,
  MessageSquare,
  Phone,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import { colivingFaqs, studentHousingFaqs, FaqItem } from "@/data/faqs";

interface FaqModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: "coliving" | "student-housing";
}

export default function FaqModal({
  isOpen,
  onClose,
  initialType = "coliving",
}: FaqModalProps) {
  const [activeTab, setActiveTab] = useState<"coliving" | "student-housing">(
    initialType
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Sync initial type when opening
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialType);
      setSearchQuery("");
      setExpandedId(null);
    }
  }, [isOpen, initialType]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isOpen]);

  const currentFaqs = activeTab === "coliving" ? colivingFaqs : studentHousingFaqs;

  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return currentFaqs;
    const q = searchQuery.toLowerCase().trim();
    return currentFaqs.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
    );
  }, [currentFaqs, searchQuery]);

  const toggleAccordion = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="faq-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0A0D0C]/80 backdrop-blur-sm transition-opacity animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#E1E7E6] overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[88vh] z-10 animate-scaleUp">
        {/* Header */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-[#005F5F] via-[#007A7A] to-[#044848] text-white shrink-0 relative">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FFDE59]/20 border border-[#FFDE59]/40 flex items-center justify-center shrink-0 text-[#FFDE59]">
                {activeTab === "coliving" ? (
                  <Building2 size={22} />
                ) : (
                  <GraduationCap size={22} />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#FFDE59]">
                    Official Reforbs Knowledge Base
                  </span>
                </div>
                <h2
                  id="faq-modal-title"
                  className="text-lg sm:text-2xl font-black font-heading tracking-tight mt-0.5 text-white"
                >
                  {activeTab === "coliving"
                    ? "Co-Living Frequently Asked Questions"
                    : "Student Housing Frequently Asked Questions"}
                </h2>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center shrink-0 border border-white/20 transition-all"
              aria-label="Close FAQ dialog"
            >
              <X size={20} />
            </button>
          </div>

          {/* Tab Selector */}
          <div className="mt-4 flex items-center gap-2 p-1 bg-black/25 rounded-2xl border border-white/15">
            <button
              onClick={() => {
                setActiveTab("coliving");
                setExpandedId(null);
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeTab === "coliving"
                  ? "bg-[#FFDE59] text-[#111827] shadow-md"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <Building2 size={15} />
              <span>FAQ Co-Living</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("student-housing");
                setExpandedId(null);
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeTab === "student-housing"
                  ? "bg-[#FFDE59] text-[#111827] shadow-md"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <GraduationCap size={15} />
              <span>FAQ Student Housing</span>
            </button>
          </div>

          {/* Quick Search Bar */}
          <div className="mt-3 relative">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${
                activeTab === "coliving" ? "co-living" : "student housing"
              } questions (e.g., rent, deposit, notice, food)...`}
              className="w-full pl-9 pr-8 py-2.5 bg-black/20 focus:bg-black/35 text-white placeholder-white/50 text-xs sm:text-sm rounded-xl border border-white/20 focus:outline-none focus:border-[#FFDE59] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Scrollable Questions List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 bg-[#F9FAFB] overscroll-contain">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 px-4">
              <div className="w-12 h-12 rounded-full bg-[#E6F4F3] text-[#007A7A] flex items-center justify-center mx-auto mb-3">
                <HelpCircle size={24} />
              </div>
              <h3 className="text-base font-bold text-[#111827]">
                No matching questions found
              </h3>
              <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
                We couldn&apos;t find any questions matching &ldquo;{searchQuery}&rdquo;. Try a different keyword or contact our support team.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-3 text-xs font-bold text-[#007A7A] hover:underline"
              >
                Reset Search
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isExpanded = expandedId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isExpanded
                      ? "border-[#007A7A] shadow-md ring-1 ring-[#007A7A]/20"
                      : "border-[#E1E7E6] hover:border-gray-300 shadow-xs"
                  }`}
                >
                  {/* Question Header (Accordion Trigger) */}
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isExpanded}
                    className="w-full text-left p-3.5 sm:p-4 flex items-start justify-between gap-3 min-h-[48px] hover:bg-gray-50/70 transition-colors"
                  >
                    <div className="flex items-start gap-2.5 flex-1">
                      <span className="w-6 h-6 rounded-lg bg-[#E6F4F3] text-[#007A7A] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {faq.id}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#111827] leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-gray-400 transition-transform duration-200 ${
                        isExpanded
                          ? "transform rotate-180 text-[#007A7A] bg-[#E6F4F3]"
                          : ""
                      }`}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  {/* Collapsible Answer */}
                  {isExpanded && (
                    <div className="px-4 pb-4 pt-1 sm:px-6 sm:pb-5 border-t border-gray-100 bg-[#FAFCFC]">
                      <div className="pl-8 text-xs sm:text-sm text-gray-700 leading-relaxed font-normal whitespace-pre-line">
                        {faq.answer}

                        {/* Contextual Action Button if defined */}
                        {faq.actionType === "whatsapp" && (
                          <div className="mt-3 pt-2">
                            <a
                              href={`https://wa.me/917420040241?text=${encodeURIComponent(
                                `Hello Reforbs Team! Regarding FAQ #${faq.id}: "${faq.question}", I would like to get more information.`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-sm transition-all active:scale-95"
                            >
                              <MessageSquare size={14} />
                              <span>Connect on WhatsApp with Representative</span>
                            </a>
                          </div>
                        )}

                        {faq.actionType === "call" && (
                          <div className="mt-3 pt-2">
                            <a
                              href="tel:7420040241"
                              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#007A7A] hover:bg-[#005F5F] text-white text-xs font-bold shadow-sm transition-all active:scale-95"
                            >
                              <Phone size={14} />
                              <span>Call Reforbs Support Team</span>
                            </a>
                          </div>
                        )}

                        {faq.actionType === "contact" && (
                          <div className="mt-3 pt-2">
                            <a
                              href="/contact"
                              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#007A7A] hover:bg-[#005F5F] text-white text-xs font-bold shadow-sm transition-all active:scale-95"
                            >
                              <ExternalLink size={14} />
                              <span>Visit Contact Page</span>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 bg-white border-t border-[#E1E7E6] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-[11px] sm:text-xs text-gray-500 text-center sm:text-left">
            <span>Need personalized help? Chat with our team or schedule a visit.</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href="tel:7420040241"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-[#E1E7E6] text-xs font-bold text-[#111827] hover:bg-gray-50"
            >
              <Phone size={14} className="text-[#007A7A]" />
              <span>Call Us</span>
            </a>
            <a
              href="https://wa.me/917420040241?text=Hi%20Reforbs%20Living!%20I%20have%20a%20question%20about%20your%20properties."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-sm"
            >
              <MessageSquare size={14} />
              <span>WhatsApp Chat</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-xs font-bold text-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
