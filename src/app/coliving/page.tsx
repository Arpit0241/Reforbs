import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Building2 } from "lucide-react";

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
    image: "/assets/pdf/extracted/page-3-image-1-X4.jpg",
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
    image: "/assets/pdf/extracted/page-4-image-1-X4.jpg",
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
    image: "/assets/pdf/extracted/page-7-image-5-X9.jpg",
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
];

export default function ColivingIndex() {
  return (
    <div className="pt-24 pb-20 bg-[#FAFAFA]">
      <section className="bg-[#111312] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFDE59] text-[#1B1D1C] font-extrabold text-xs uppercase tracking-wider mb-6">
            <Building2 size={16} />
            <span>Co-Living for Working Professionals</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight mb-4">
            Co-Living in <span className="text-[#007A7A]">Viman Nagar</span>
          </h1>
          <p className="text-[#E1E7E6] text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
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
                <div className="absolute top-4 right-4 bg-white/95 px-3 py-1 rounded-full text-xs font-bold text-[#1B1D1C] flex items-center gap-1 shadow-sm">
                  <span className="text-amber-500">★</span>
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

                <div className="pt-4 border-t border-[#E1E7E6] flex items-center justify-between">
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
                  </div>

                  <Link href={prop.link} className="btn-teal text-xs py-2.5 px-4 font-bold">
                    <span>View Property</span>
                    <ArrowRight size={14} />
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
