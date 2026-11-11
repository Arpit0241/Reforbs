import React from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle } from "lucide-react";
import type { FaqSchemaInput } from "@/lib/schema";

interface SsrFaqSectionProps {
  title: string;
  subtitle?: string;
  faqs: FaqSchemaInput[];
  ctaText?: string;
  ctaHref?: string;
}

export default function SsrFaqSection({
  title,
  subtitle,
  faqs,
  ctaText = "Schedule a Free Walkthrough",
  ctaHref = "/contact",
}: SsrFaqSectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-[#FAFAFA] border-t border-[#E1E7E6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="badge-eyebrow mb-3 inline-flex items-center gap-1.5">
            <HelpCircle size={14} />
            <span>Verified Answers</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#1B1D1C] font-heading">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-[#4A524F] mt-2 font-medium max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <details
              key={faq.question}
              open={idx < 2}
              className="group bg-white rounded-2xl border border-[#E1E7E6] shadow-sm overflow-hidden"
            >
              <summary className="list-none cursor-pointer p-5 flex items-center justify-between gap-4 font-black text-sm sm:text-base text-[#1B1D1C] hover:text-[#007A7A] transition-colors font-heading">
                <span>{faq.question}</span>
                <ChevronDown
                  size={18}
                  className="text-[#007A7A] shrink-0 transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-[#4A524F] leading-relaxed border-t border-[#E1E7E6]/70 font-medium">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#007A7A] hover:bg-[#005C5C] text-white font-black text-xs sm:text-sm shadow-sm transition-colors"
          >
            <span>{ctaText}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
