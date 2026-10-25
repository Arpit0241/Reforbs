import Image from "next/image";
import { Award, Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white border-b border-[#E1E7E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header from reforbs.com */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-eyebrow mb-3">Stories from our tribe</div>
          <h2 className="section-heading-lg">
            Hear from <span className="text-[#007A7A]">our community</span>
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

        {/* The ReForbs Cult Manifesto (Slide 14) */}
        <div className="bg-[#FAF6E8] rounded-3xl p-8 sm:p-12 border border-[#E6D7A8] max-w-4xl mx-auto text-center mb-16 shadow-sm">
          <Quote size={32} className="text-[#007A7A] mx-auto mb-4 opacity-40" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1B1D1C] font-heading leading-relaxed mb-4">
            &ldquo;Over the period of years, ReForbs has made sure that tenants enjoy absolute freedom of choice. We don&apos;t impose our food service on you. We don&apos;t believe in lock ins. We let you change layout of the room. We let you voice out your demands. That&apos;s ReForbs Cult !! We are a family away from your family.&rdquo;
          </h3>
          <span className="text-xs font-black uppercase tracking-widest text-[#007A7A]">
            — Official Reforbs Cult Philosophy
          </span>
        </div>

        {/* The Spotlight on us (Slide 13 & image8.png) */}
        <div className="bg-[#FAFAFA] rounded-3xl p-8 sm:p-10 border border-[#E1E7E6] text-center">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#007A7A] mb-2">
            <Award size={16} />
            <span>As Featured In Mainstream Media</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#1B1D1C] font-heading mb-2">
            The <span className="text-[#007A7A]">Spotlight</span> On Us
          </h3>
          <p className="text-xs sm:text-sm text-[#666B68] max-w-xl mx-auto mb-8 font-medium">
            We don&apos;t just make second homes in Pune. We make headlines as well.
          </p>

          <div className="relative h-20 sm:h-24 w-full max-w-4xl mx-auto">
            <Image
              src="/images/image8.png"
              alt="Reforbs in Forbes, Entrepreneur, VCCIRCLE, YourStory, LiveMint"
              fill
              className="object-contain filter grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
