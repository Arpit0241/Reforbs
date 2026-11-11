import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { corporatePropertiesData } from "@/data/properties";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Corporate Company Guesthouses in Pune | Reforbs Living",
  description:
    "Dedicated 3BHK corporate company guesthouses managed by Reforbs Living in Viman Nagar and Shastri Nagar, Pune for enterprise employee stays.",
  path: "/corporate-stays",
  image: "/images/properties/park-island/image-1.jpg",
  noindex: true,
});

export default function CorporateStaysPage() {
  return (
    <div className="pt-24 pb-20 bg-[#FAFAFA] min-h-screen">
      <section className="bg-gradient-to-b from-[#1B1D1C] to-[#005C5C] text-white py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFDE59] text-[#111827] font-black text-xs uppercase tracking-wider mb-5">
            <Building2 size={16} />
            <span>Enterprise &amp; B2B Hospitality</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-heading mb-4">
            Corporate Company Guesthouses
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto font-medium">
            These three Pune gated-society residences are leased exclusively as dedicated corporate guesthouses for partner enterprise employees and are not open as retail PGs.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {corporatePropertiesData.map((prop) => (
            <div key={prop.id} className="stanza-card bg-white">
              <div className="relative h-60 w-full overflow-hidden bg-[#111312]">
                <Image
                  src={prop.coverImage}
                  alt={prop.imagesMeta[0]?.alt || `${prop.name} corporate guesthouse in ${prop.locality}, Pune`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-[#FFDE59] text-[#111827] text-[11px] font-black px-3 py-1 rounded-full">
                  Corporate Only
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h2 className="text-xl font-black font-heading">{prop.name}</h2>
                  <p className="text-xs text-[#FFDE59] font-medium mt-0.5">{prop.locality}, Pune</p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-[#4A524F] font-medium leading-relaxed">
                  {prop.description}
                </p>
                <div className="space-y-1.5 text-xs text-[#4A524F] font-medium">
                  {prop.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#007A7A] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-[#E1E7E6] flex items-center justify-between">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.foundersWhatsappDigits}?text=Hi%20Reforbs%20Leadership%2C%20I%20would%20like%20to%20enquire%20about%20corporate%20guesthouse%20leasing.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-black text-[#007A7A] hover:underline"
                  >
                    Corporate Enquiry →
                  </a>
                  <Link
                    href={prop.link}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-[#007A7A] text-white text-xs font-black"
                  >
                    <span>Details</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
