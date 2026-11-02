import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Building2, Star, Phone } from "lucide-react";

export const metadata = {
  title: "Co-Living Spaces in Viman Nagar Pune | Reforbs Living",
  description:
    "Reforbs Moksha, Vipasana & Shubh Nirvana - Boutique co-living for working professionals in Viman Nagar, Pune. Private balconies, gyms, vibrant rooftop lounges, zero restrictions.",
};

const colivingProperties = [
  {
    name: "Moksha",
    sub: "Serene bohemian living near Joggers Park",
    price: "₹14,500",
    image: "/images/properties/moksha/image-1.jpg",
    link: "/coliving/moksha",
    rating: "4.9",
    reviews: 164,
    features: [
      "Bohemian garden patio & fairy-lit pergolas",
      "Pro active maintenance inside & outside premise",
      "Weekly community BBQs, yoga & founder sessions",
      "Single and double occupancy with private balconies",
    ],
  },
  {
    name: "Vipasana",
    sub: "Mindful urban sanctuary for high-focus professionals",
    price: "₹14,000",
    image: "/images/properties/vipasna/image-1.jpg",
    link: "/coliving/vipasana",
    rating: "4.9",
    reviews: 152,
    features: [
      "Quiet ergonomic work suites with gigabit fiber",
      "Spacious living area & private kitchen facilities",
      "Free parking, full power backup & daily cleaning",
      "Zero bans, curfews or arbitrary rules",
    ],
  },
  {
    name: "Shubh Nirvana",
    sub: "Flagship backpacker & hippie themed property",
    price: "₹15,000",
    image: "/images/properties/nirvana/image-1.jpg",
    link: "/coliving/shubh-nirvana",
    rating: "5.0",
    reviews: 189,
    features: [
      "Vibrant UV neon lounge & terrace gardens",
      "Private modular kitchen with complete cooking freedom",
      "In-house gym and pool table recreation",
      "Close to Phoenix Marketcity, IT corridors & Airport",
    ],
  },
  {
    name: "Suyog Co-Living",
    sub: "Premium work-life residence near Airport Road",
    price: "₹14,500",
    image: "/images/properties/suyog/image-1.jpg",
    link: "/coliving/suyog",
    rating: "4.8",
    reviews: 119,
    features: [
      "Spacious air-conditioned rooms & high ceilings",
      "Dedicated fiber optic internet for remote work",
      "Private kitchen freedom with full cooking independence",
      "Rapid connectivity to Airport & business parks",
    ],
  },
  {
    name: "Reforbs Park Island",
    sub: "Lush green community living with swimming pool",
    price: "₹15,500",
    image: "/images/properties/park-island/image-1.jpg",
    link: "/coliving/park-island",
    rating: "4.9",
    reviews: 142,
    features: [
      "Swimming pool and in-house fitness gym",
      "Private balcony suites with serene resort views",
      "Spacious common lounges & pool table recreation",
      "No lock-ins, curfews or arbitrary restrictions",
    ],
  },
  {
    name: "Pillar Homes Co-Living",
    sub: "Boutique architectural stays on cafe strip",
    price: "₹15,000",
    image: "/images/properties/pillar-homes/image-1.jpg",
    link: "/coliving/pillar-homes",
    rating: "4.9",
    reviews: 136,
    features: [
      "Minimalist Scandinavian wooden interiors",
      "Steps from Viman Nagar's top cafes & restaurants",
      "Private ensuites and full kitchen independence",
      "100% direct host booking with zero brokerage",
    ],
  },
  {
    name: "Langston Downtown",
    sub: "Executive co-living suites for IT & corporate leaders",
    price: "₹16,000",
    image: "/images/properties/langston-downtown/image-1.jpg",
    link: "/coliving/langston-downtown",
    rating: "5.0",
    reviews: 177,
    features: [
      "Executive suites with soundproof phone booths",
      "Dedicated business lounge & high-focus workspaces",
      "Direct transit access to Phoenix & Kharadi tech hubs",
      "VIP host support with daily professional housekeeping",
    ],
  },
];

export default function ColivingIndex() {
  return (
    <div className="pt-24 pb-20 bg-[#FAFAFA]">
      <section className="bg-gradient-to-b from-[#006A6A] to-[#007A7A] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFDE59]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFDE59] text-[#111827] font-black text-xs uppercase tracking-wider mb-6 font-heading shadow-md">
            <Building2 size={16} className="text-[#111827]" />
            <span>Co-Living for Working Professionals</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight mb-4 text-white">
            Co-Living in <span className="text-[#FFDE59] underline decoration-[#FFDE59]/40 underline-offset-8">Viman Nagar</span>
          </h1>
          <p className="text-white text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium text-white/95">
            Single &amp; Double occupancies, designed especially for Working professionals in a way so as to maintain their privacy intact. No rigid rules. No sales pressure.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {colivingProperties.map((prop, i) => (
            <div
              key={i}
              className="stanza-card group hover:translate-y-[-4px]"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#111312]">
                <Image
                  src={prop.image}
                  alt={prop.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111312]/80 via-transparent to-black/20" />
                <div className="absolute top-4 left-4 bg-[#FFDE59] text-[#1B1D1C] text-xs font-bold px-3 py-1 rounded-full">
                  Viman Nagar, Pune
                </div>
                <div className="absolute top-4 right-4 bg-white/95 px-3 py-1 rounded-full text-xs font-bold text-[#1B1D1C] flex items-center gap-1.5 shadow-sm">
                  <Star size={13} className="text-amber-500 fill-amber-500" />
                  <span>{prop.rating}</span>
                  <span className="text-[#666B68] font-normal">({prop.reviews})</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-black font-heading">{prop.name}</h3>
                  <p className="text-xs text-[#007A7A] font-bold mt-0.5">{prop.sub}</p>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#4A524F] font-medium">
                  {prop.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#007A7A] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#E1E7E6] flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-bold text-[#666B68] block uppercase">
                      From
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black font-heading text-[#007A7A]">
                        {prop.price}
                      </span>
                      <span className="text-xs text-[#666B68] font-semibold">/mo</span>
                    </div>
                    <a
                      href="tel:+917420040241"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#666B68] hover:text-[#007A7A] mt-0.5"
                    >
                      <Phone size={11} className="text-[#007A7A]" />
                      <span>Call: +91 74200 40241</span>
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/917420040241?text=Hi%20Reforbs%2C%20I%20am%20interested%20in%20${encodeURIComponent(prop.name)}%20(Co-Living).`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#E8F8F5] text-[#128C7E] hover:bg-[#25D366] hover:text-white border border-[#25D366]/40 transition-all font-black text-xs shadow-sm hover:scale-105 active:scale-95"
                      title="Chat on WhatsApp"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      <span>WhatsApp</span>
                    </a>
                    <Link href={prop.link} className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#007A7A] hover:bg-[#005C5C] text-white font-black text-xs shadow-md transition-all hover:scale-105 active:scale-95">
                      <span>Schedule Visit</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
