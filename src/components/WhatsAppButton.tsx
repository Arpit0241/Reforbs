"use client";

import { useState } from "react";
import { Phone, X, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside aria-label="Support chat" className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50">
      {/* Expandable Stanza Living-Style Popover */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-[#E1E7E6] overflow-hidden animate-fadeIn mb-2 z-50">
          {/* Header */}
          <div className="bg-[#007A7A] text-white p-4 sm:p-5 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md">
                  <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#25D366] rounded-full border-2 border-white" />
              </div>
              <div>
                <h4 className="font-black text-white text-base font-heading">
                  Reforbs Help Desk
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-[#E1E7E6]">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Online • Replies in &lt; 5 mins</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10"
              aria-label="Close support dialog"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 space-y-4">
            <p className="text-xs text-[#4A524F] leading-relaxed font-medium">
              Hi there! Looking for rooms or coliving in <strong>Viman Nagar, Pune</strong>? Chat with our team or call host Arpit directly.
            </p>

            {/* Action 1: WhatsApp */}
            <a
              href="https://wa.me/917420040241?text=Hi%20Reforbs%20Living!%20I%20am%20exploring%20spaces%20in%20Viman%20Nagar%2C%20Pune."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-extrabold text-sm shadow-md transition-all hover:scale-[1.02] active:scale-98"
            >
              <div className="flex items-center gap-2.5">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </div>
              <ArrowRight size={16} />
            </a>

            {/* Action 2: Call */}
            <a
              href="tel:+917420040241"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F1F4F4] hover:bg-[#E6F4F3] text-[#1B1D1C] font-extrabold text-sm border border-[#E1E7E6] transition-all"
            >
              <div className="flex items-center gap-2.5">
                <Phone size={18} className="text-[#007A7A]" />
                <div>
                  <span className="block text-xs font-bold text-[#1B1D1C]">Call Host Directly</span>
                  <span className="text-[11px] text-[#666B68] font-semibold">+91 74200 40241</span>
                </div>
              </div>
              <span className="text-[11px] text-[#007A7A] font-extrabold bg-[#E6F4F3] px-2 py-0.5 rounded-md">
                1-Tap Call
              </span>
            </a>

            <div className="pt-2 text-[11px] text-[#666B68] text-center font-medium flex items-center justify-center gap-1">
              <ShieldCheck size={13} className="text-[#007A7A]" />
              <span>Zero pushy calls guaranteed</span>
            </div>
          </div>
        </div>
      )}

      {/* Persistent Stanza Living-Style Floating Pill */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 pl-3 pr-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-stanza transition-all duration-300 hover:scale-105 active:scale-95 group relative border-2 border-white"
        aria-label="Open support chat on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFDE59] opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FFDE59]" />
        </span>

        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </div>

        <span className="text-xs sm:text-sm font-black tracking-wide">
          Chat with us
        </span>
      </button>
    </aside>
  );
}
