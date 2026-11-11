import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, CheckCircle2, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import type { LocalGuidePage } from "@/data/guides";
import { getLocalGuideBySlug, LOCAL_GUIDES } from "@/data/guides";
import { publicPropertiesData } from "@/data/properties";
import { SITE_CONFIG } from "@/data/site";
import { buildPageMetadata } from "@/lib/seoMetadata";
import SsrFaqSection from "@/components/seo/SsrFaqSection";
import JsonLd from "@/components/seo/JsonLd";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPropertyListSchema,
} from "@/lib/schema";

export function buildGuideMetadata(slug: string): Metadata {
  const guide = getLocalGuideBySlug(slug);
  if (!guide) {
    return buildPageMetadata({
      title: "Pune Co-Living & Student Housing Guides | Reforbs",
      description:
        "Local housing guides for Symbiosis Law School, SCMS, SID, Lavale, Viman Nagar, and Sanjay Park residences in Pune by Reforbs Living.",
      path: slug,
    });
  }
  return buildPageMetadata({
    title: guide.title,
    description: guide.description,
    path: guide.slug,
  });
}

export default function LocalGuideTemplate({ guide }: { guide: LocalGuidePage }) {
  const matchedProperties = guide.propertyIds
    .map((id) => publicPropertiesData.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const relatedGuides = guide.relatedGuideSlugs
    .map((slug) => LOCAL_GUIDES.find((g) => g.slug === slug))
    .filter((g): g is LocalGuidePage => Boolean(g));

  return (
    <div className="pt-24 pb-20 bg-[#FAFAFA] min-h-screen">
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Properties", path: "/properties" },
            { name: guide.navLabel, path: guide.slug },
          ]),
          buildPropertyListSchema(guide.h1, guide.slug, matchedProperties),
          buildFaqSchema(guide.faqs),
        ]}
      />

      {/* Teal Hero Banner */}
      <section className="bg-gradient-to-b from-[#006A6A] to-[#007A7A] text-white py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/80 mb-5"
          >
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/properties" className="hover:text-white">
              Pune Properties
            </Link>
            <span>/</span>
            <span className="text-[#FFDE59]">{guide.navLabel}</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFDE59] text-[#111827] font-black text-[11px] uppercase tracking-wider mb-4">
            <MapPin size={14} />
            <span>{guide.eyebrow}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight mb-4 leading-tight">
            {guide.h1}
          </h1>
          <p className="text-sm sm:text-lg text-white/95 max-w-3xl leading-relaxed font-medium mb-6">
            {guide.heroSubtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
            <span className="inline-flex items-center gap-1.5 bg-white/15 border border-white/25 px-3 py-1.5 rounded-full">
              <Calendar size={13} className="text-[#FFDE59]" />
              <span>Last updated: {guide.lastUpdated}</span>
            </span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-[#FFDE59] text-[#111827] px-4 py-1.5 rounded-full font-black hover:bg-[#FACC15] transition-colors"
            >
              <span>{guide.ctaText}</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-10">
        {/* Answer-First Citable Summary Box */}
        <section className="bg-[#E6F4F3] border border-[#BDE3DF] rounded-3xl p-6 sm:p-8 shadow-sm">
          <span className="text-[11px] font-black uppercase tracking-wider text-[#007A7A] block mb-2">
            Quick Summary • Verified Reforbs Facts
          </span>
          <p className="text-sm sm:text-base text-[#1B1D1C] font-semibold leading-relaxed">
            {guide.answerFirstSummary}
          </p>
        </section>

        {/* Comparison Table if Present */}
        {guide.comparisonTable && (
          <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E1E7E6] shadow-card">
            <h2 className="text-xl sm:text-2xl font-black font-heading text-[#1B1D1C] mb-5">
              {guide.comparisonTable.heading}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#E1E7E6] text-[#1B1D1C] font-black">
                    {guide.comparisonTable.headers.map((header) => (
                      <th key={header} className="py-3 pr-4">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E1E7E6] font-medium text-[#4A524F]">
                  {guide.comparisonTable.rows.map((row) => (
                    <tr key={row.feature} className="hover:bg-[#FAFAFA]">
                      <td className="py-3.5 pr-4 font-black text-[#1B1D1C]">{row.feature}</td>
                      <td className="py-3.5 pr-4">{row.col1}</td>
                      <td className="py-3.5 pr-4">{row.col2}</td>
                      <td className="py-3.5 pr-4">{row.col3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Recommended Reforbs Residences */}
        <section>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-[#1B1D1C]">
              Recommended Reforbs Residences
            </h2>
            <Link
              href="/properties"
              className="text-xs font-black text-[#007A7A] hover:underline flex items-center gap-1"
            >
              <span>View Interactive Map</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {matchedProperties.map((prop) => (
              <div key={prop.id} className="stanza-card bg-white flex flex-col justify-between">
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-[#111312]">
                    <Image
                      src={prop.coverImage}
                      alt={prop.imagesMeta[0]?.alt || `${prop.name} in ${prop.locality}, Pune`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3 bg-[#FFDE59] text-[#111827] text-[11px] font-black px-2.5 py-0.5 rounded-full">
                      {prop.category}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="text-lg font-black font-heading">{prop.name}</h3>
                      <p className="text-[11px] text-[#FFDE59] font-bold">{prop.locality}, Pune</p>
                    </div>
                  </div>

                  <div className="p-5 space-y-2 text-xs text-[#4A524F] font-medium">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[#007A7A] shrink-0 mt-0.5" />
                      <span>{prop.landmark}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[#007A7A] shrink-0 mt-0.5" />
                      <span>{prop.lockInPolicy}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[#007A7A] shrink-0 mt-0.5" />
                      <span>{prop.foodPlan}</span>
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-[#E1E7E6] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#666B68] block">
                      From
                    </span>
                    <span className="text-lg font-black text-[#007A7A] font-heading">
                      {prop.price}/mo
                    </span>
                  </div>
                  <Link
                    href={prop.slug}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#007A7A] hover:bg-[#005C5C] text-white font-black text-xs transition-colors"
                  >
                    <span>Explore</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Local Editorial Sections */}
        <section className="space-y-6">
          {guide.sections.map((sec) => (
            <div
              key={sec.heading}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E1E7E6] shadow-card space-y-3"
            >
              <h2 className="text-xl sm:text-2xl font-black font-heading text-[#1B1D1C]">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-[#4A524F] leading-relaxed font-medium">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </section>

        {/* Direct Zero-Spam Call / WhatsApp Strip */}
        <section className="bg-[#111312] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-black font-heading text-white">
              Take it only if you like it — Zero Brokerage &amp; Zero Pushy Calls
            </h2>
            <p className="text-xs sm:text-sm text-[#A0AAA5] mt-1 font-medium">
              Tour hours: {SITE_CONFIG.tourHours}. Speak directly with the Pune host team.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5 shrink-0">
            <a
              href={`tel:${SITE_CONFIG.primaryPhoneE164}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-[#111827] font-black text-xs hover:bg-[#FFDE59] transition-colors"
            >
              <Phone size={14} />
              <span>Call {SITE_CONFIG.primaryPhoneDisplay}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#007A7A] text-white font-black text-xs hover:bg-[#005C5C] transition-colors"
            >
              <span>Book Walkthrough</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </div>

      {/* Server-Rendered FAQ Section matching FAQPage JSON-LD */}
      <SsrFaqSection
        title={`FAQs: ${guide.navLabel}`}
        faqs={guide.faqs}
        ctaText={guide.ctaText}
      />

      {/* Related Guides */}
      {relatedGuides.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <h2 className="text-lg font-black font-heading text-[#1B1D1C] mb-4">
            Related Pune Housing &amp; Location Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedGuides.map((rg) => (
              <Link
                key={rg.slug}
                href={rg.slug}
                className="p-4 rounded-2xl bg-white border border-[#E1E7E6] hover:border-[#007A7A] transition-colors flex flex-col justify-between gap-2"
              >
                <div>
                  <span className="text-[10px] font-black uppercase text-[#007A7A]">
                    {rg.eyebrow}
                  </span>
                  <h3 className="text-sm font-black text-[#1B1D1C] mt-1">{rg.navLabel}</h3>
                </div>
                <span className="text-xs font-bold text-[#007A7A] inline-flex items-center gap-1">
                  Read guide <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
