import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Phone, GraduationCap, Star } from "lucide-react";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { studentPropertiesData } from "@/data/properties";
import { SITE_CONFIG } from "@/data/site";
import { STUDENT_HUB_FAQS } from "@/data/hubFaqs";
import SsrFaqSection from "@/components/seo/SsrFaqSection";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, buildFaqSchema, buildPropertyListSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: "Student Housing Near Symbiosis Pune | Reforbs Living",
  description:
    "Reforbs student housing 150m from SLS, SCMS & SID in Viman Nagar and 500m from Symbiosis Lavale. Meals, AC & Wi-Fi included from ₹15,000/month.",
  path: "/student-housing",
  image: "/images/properties/sls/image-1.jpg",
});

export default function StudentHousingIndex() {
  return (
    <div className="pt-24 pb-20 bg-[#FAFAFA]">
      <section className="bg-gradient-to-b from-[#006A6A] to-[#007A7A] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFDE59]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFDE59] text-[#111827] font-black text-xs uppercase tracking-wider mb-6 font-heading shadow-md">
            <GraduationCap size={16} className="text-[#111827]" />
            <span>Dedicated Symbiosis Student Accommodations</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight mb-4 text-white">
            Student Housing in{" "}
            <span className="text-[#FFDE59] underline decoration-[#FFDE59]/40 underline-offset-8">
              Viman Nagar &amp; Lavale
            </span>
          </h1>
          <p className="text-white text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium text-white/95">
            Walking distance to Symbiosis Law School (150m), SCMS/SID (150m), and Symbiosis University Lavale / ISBM (500m). Daily meals, AC, and Wi-Fi included on an annual academic term.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studentPropertiesData.map((prop) => (
            <div key={prop.id} className="stanza-card group hover:translate-y-[-4px]">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#111312]">
                <Image
                  src={prop.coverImage}
                  alt={prop.imagesMeta[0]?.alt || `${prop.name} student accommodation in ${prop.locality}, Pune`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111312]/85 via-black/20 to-black/20" />
                <div className="absolute top-4 left-4 bg-[#007A7A] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {prop.locality}, Pune
                </div>
                {prop.verifiedRating && (
                  <div className="absolute top-4 right-4 bg-white/95 px-3 py-1 rounded-full text-xs font-bold text-[#1B1D1C] flex items-center gap-1.5 shadow-sm">
                    <Star size={13} className="text-amber-500 fill-amber-500" />
                    <span>{prop.verifiedRating.ratingValue.toFixed(1)}</span>
                    <span className="text-[#666B68] font-normal">({prop.verifiedRating.reviewCount})</span>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h2 className="text-2xl font-black font-heading">{prop.name}</h2>
                  <p className="text-xs text-[#FFDE59] font-medium mt-0.5">{prop.tag}</p>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#4A524F] font-medium">
                  {prop.highlights.slice(0, 4).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#007A7A] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#E1E7E6] flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-bold text-[#666B68] block uppercase">From</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black font-heading text-[#007A7A]">
                        {prop.price}
                      </span>
                      <span className="text-xs text-[#666B68] font-semibold">/month</span>
                    </div>
                    <a
                      href={`tel:${prop.contactPhone || SITE_CONFIG.primaryPhoneE164}`}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#007A7A] hover:text-[#005F5F] mt-0.5"
                    >
                      <Phone size={11} className="text-[#007A7A]" />
                      <span>Call Us</span>
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/${prop.whatsappNumber || SITE_CONFIG.primaryWhatsappDigits}?text=Hi%20Reforbs%2C%20I%20am%20interested%20in%20${encodeURIComponent(prop.name)}%20(Student%20Housing).`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#E8F8F5] text-[#128C7E] hover:bg-[#25D366] hover:text-white border border-[#25D366]/40 transition-all font-black text-xs shadow-sm hover:scale-105 active:scale-95"
                      title="Chat on WhatsApp"
                    >
                      <span>WhatsApp</span>
                    </a>
                    <Link
                      href={prop.link}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#007A7A] hover:bg-[#005C5C] text-white font-black text-xs shadow-md transition-all hover:scale-105 active:scale-95"
                    >
                      <span>View Residence</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-[#E1E7E6] shadow-card">
          <h2 className="text-lg font-black font-heading text-[#1B1D1C] mb-2">
            Student Housing Policy Summary
          </h2>
          <p className="text-xs sm:text-sm text-[#4A524F] leading-relaxed font-medium">
            {SITE_CONFIG.policiesSummary.studentHousingLockIn} {SITE_CONFIG.policiesSummary.foodPolicy} For opposite-gender visitor guidelines, Shubh Gateway follows strictly gender-segregated towers while Brindavan and Vairagya offer property-specific visitor hours confirmed at onboarding.
          </p>
        </div>
      </div>

      <SsrFaqSection
        title="Student Housing Near Symbiosis FAQs"
        subtitle="Everything students and parents need to know about distance from SLS/SCMS/Lavale, annual lock-in, meals, laundry, and safety."
        faqs={STUDENT_HUB_FAQS}
      />
      <JsonLd
        data={[
          buildPropertyListSchema("Student Housing Near Symbiosis Pune", "/student-housing", studentPropertiesData),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Student Housing", path: "/student-housing" },
          ]),
          buildFaqSchema(STUDENT_HUB_FAQS),
        ]}
      />
    </div>
  );
}
