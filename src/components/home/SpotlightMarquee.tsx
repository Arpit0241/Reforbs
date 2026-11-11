"use client";

import React from "react";
import { ExternalLink, Newspaper, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export default function SpotlightMarquee() {
  const articles = SITE_CONFIG.verifiedPressArticles;

  // Guard: never render unverified synthetic press mentions or unlinked media badges
  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <div className="flex items-center gap-2.5 text-left">
          <div className="w-10 h-10 rounded-xl bg-[#E6F4F3] flex items-center justify-center text-[#007A7A]">
            <Newspaper size={20} />
          </div>
          <div>
            <h4 className="text-lg font-black text-[#1B1D1C]">Press &amp; Media Spotlights</h4>
            <p className="text-xs text-[#666B68]">Verified coverage of Reforbs Living</p>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#007A7A] bg-[#E6F4F3] px-3 py-1 rounded-full">
          <CheckCircle2 size={14} /> Verified Links
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
        {articles.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl border border-gray-100 hover:border-[#007A7A]/30 hover:bg-[#F9FCFC] transition-all group block"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-extrabold text-[#007A7A] uppercase tracking-wider">
                {item.publication}
              </span>
              <ExternalLink size={14} className="text-[#666B68] group-hover:text-[#007A7A]" />
            </div>
            <h5 className="text-sm font-bold text-[#1B1D1C] group-hover:text-[#007A7A] transition-colors">
              {item.title}
            </h5>
          </a>
        ))}
      </div>
    </div>
  );
}
