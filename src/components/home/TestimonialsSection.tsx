import Image from "next/image";
import { Award, Quote } from "lucide-react";
import SpotlightMarquee from "./SpotlightMarquee";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white border-b border-[#E1E7E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header from reforbs.com */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-eyebrow mb-3">Stories from our reforbs family</div>
          <h2 className="section-heading-lg">
            Hear from <span className="text-[#007A7A]">our client</span>
          </h2>
          <p className="text-[#666B68] text-sm sm:text-base mt-3 font-medium">
            Over the years, Reforbs has made sure that tenants enjoy absolute freedom of choice. Here is what real residents say about us on Google:
          </p>
        </div>

        {/* Real Google Review Screenshots from reforbs.com */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-3xl overflow-hidden border border-[#E1E7E6] shadow-card hover:shadow-card-hover transition-all bg-[#FAFAFA]">
            <Image
              src="/assets/review-kushagra-shivannya.png"
              alt="Google reviews from Kushagra Tiwari and Shivannya Dhule"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="rounded-3xl overflow-hidden border border-[#E1E7E6] shadow-card hover:shadow-card-hover transition-all bg-[#FAFAFA]">
            <Image
              src="/assets/review-saurav-kalpana.png"
              alt="Google reviews from Saurav Goswami and Kalpana Dholi"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* The Spotlight on us Section */}
        <div className="bg-[#FAFAFA] rounded-3xl p-8 sm:p-12 border border-[#E1E7E6] text-center shadow-card">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#007A7A] mb-3">
            <Award size={16} />
            <span>As Featured In Mainstream Media</span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1B1D1C] font-heading mb-3">
            The <span className="text-[#007A7A]">Spotlight</span> On Us
          </h3>
          <p className="text-sm sm:text-base text-[#666B68] max-w-xl mx-auto mb-8 font-medium">
            We don&apos;t just make second homes in Pune. We make headlines as well.
          </p>

          {/* Stanza Living Style Auto-Scrolling Media Brand Cards */}
          <div className="w-full mb-8">
            <SpotlightMarquee />
          </div>

          {/* ReForbs Cult Text below image */}
          <div className="max-w-3xl mx-auto pt-6 border-t border-[#E1E7E6]">
            <Quote size={28} className="text-[#007A7A] mx-auto mb-3 opacity-40" />
            <p className="text-base sm:text-lg md:text-xl font-bold text-[#1B1D1C] leading-relaxed font-heading">
              &ldquo;Over the period of years, ReForbs has made sure that tenants enjoy absolute freedom of choice. We don&apos;t impose our food service on you. We don&apos;t believe in lock ins. We let you change layout of the room. We let you voice out your demands. That&apos;s ReForbs Cult !!&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
