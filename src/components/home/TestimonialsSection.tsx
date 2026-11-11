import Image from "next/image";
import Link from "next/link";
import { Award, Quote, CheckCircle2 } from "lucide-react";
import SpotlightMarquee from "./SpotlightMarquee";
import { SITE_CONFIG } from "@/data/site";

export default function TestimonialsSection() {
  const hasVerifiedPress = SITE_CONFIG.verifiedPressArticles.length > 0;

  return (
    <section className="py-24 bg-white border-b border-[#E1E7E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-eyebrow mb-4">Community Voices</span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1B1D1C] font-heading">
            Hear It From Our <span className="text-[#007A7A]">Residents</span>
          </h2>
          <p className="text-[#666B68] text-sm sm:text-base mt-3 font-medium">
            Over the years, Reforbs has focused on giving residents genuine freedom of choice. Here are authentic reviews shared by Pune residents:
          </p>
        </div>

        {/* Real Google Review Screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-3xl overflow-hidden border border-[#E1E7E6] shadow-card hover:shadow-card-hover transition-all bg-[#FAFAFA]">
            <Image
              src="/assets/review-kushagra-shivannya.png"
              alt="Google reviews from Reforbs residents Kushagra Tiwari and Shivannya Dhule"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="rounded-3xl overflow-hidden border border-[#E1E7E6] shadow-card hover:shadow-card-hover transition-all bg-[#FAFAFA]">
            <Image
              src="/assets/review-saurav-kalpana.png"
              alt="Google reviews from Reforbs residents Saurav Goswami and Kalpana Dholi"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Verified Press (only when links are verified) or Resident Charter */}
        <div className="bg-[#FAFAFA] rounded-3xl p-8 sm:p-12 border border-[#E1E7E6] text-center shadow-card">
          {hasVerifiedPress ? (
            <>
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#007A7A] mb-3">
                <Award size={16} />
                <span>Media Coverage</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1B1D1C] font-heading mb-3">
                The <span className="text-[#007A7A]">Spotlight</span> On Us
              </h3>
              <div className="w-full mb-8">
                <SpotlightMarquee />
              </div>
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-8">
              <div className="bg-white rounded-2xl p-4 border border-[#E1E7E6]">
                <div className="flex items-center gap-2 text-xs font-black text-[#007A7A] uppercase tracking-wider mb-1">
                  <CheckCircle2 size={15} />
                  <span>Co-Living Policy</span>
                </div>
                <p className="text-xs sm:text-sm text-[#4A524F] font-medium">
                  Zero lock-in period across Nirvana, Moksha &amp; Vipasna with 30 days notice and private or shared kitchens.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-[#E1E7E6]">
                <div className="flex items-center gap-2 text-xs font-black text-[#007A7A] uppercase tracking-wider mb-1">
                  <CheckCircle2 size={15} />
                  <span>Student Housing Policy</span>
                </div>
                <p className="text-xs sm:text-sm text-[#4A524F] font-medium">
                  Annual academic calendar commitment near Symbiosis campuses with daily meals &amp; transparent terms.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-[#E1E7E6]">
                <div className="flex items-center gap-2 text-xs font-black text-[#007A7A] uppercase tracking-wider mb-1">
                  <CheckCircle2 size={15} />
                  <span>Zero Brokerage</span>
                </div>
                <p className="text-xs sm:text-sm text-[#4A524F] font-medium">
                  100% direct host booking with zero pushy follow-up calls —{" "}
                  <Link href="/properties" className="text-[#007A7A] underline font-bold">
                    explore residences
                  </Link>
                  .
                </p>
              </div>
            </div>
          )}

          {/* ReForbs Cult Text */}
          <div className="max-w-3xl mx-auto pt-6 border-t border-[#E1E7E6]">
            <Quote size={28} className="text-[#007A7A] mx-auto mb-3 opacity-40" />
            <p className="text-base sm:text-lg md:text-xl font-bold text-[#1B1D1C] leading-relaxed font-heading">
              &ldquo;Over the years, Reforbs has focused on resident freedom — transparent meals, private kitchens in Co-Living, zero Co-Living lock-in, and the freedom to make your room truly yours. That&apos;s ReForbs Cult !!&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
