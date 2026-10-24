"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <aside aria-label="Support chat" className="fixed bottom-20 sm:bottom-6 right-5 sm:right-6 z-40">
      <a
        href="https://wa.me/917420040241?text=Hi%20Reforbs!%20I%20am%20exploring%20your%20student%20housing%20and%20coliving%20spaces%20in%20Viman%20Nagar%2C%20Pune."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group relative"
        aria-label="Chat with Reforbs on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFDE59] rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFDE59] rounded-full border-2 border-white" />
        <MessageCircle size={28} className="text-white fill-white" />

        <span className="absolute right-16 bg-[#111312] text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-[#272B29]">
          Chat with Property Host
        </span>
      </a>
    </aside>
  );
}
