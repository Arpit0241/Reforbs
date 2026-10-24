import Image from "next/image";
import Link from "next/link";
import { MapPin, CheckCircle, ArrowRight, Building2, Star, ShieldCheck, Sparkles } from "lucide-react";

export const metadata = {
  title: "Co-Living Spaces in Viman Nagar Pune | Reforbs Living",
  description:
    "Reforbs Nirvana & Moksha - Boutique co-living for working professionals in Viman Nagar, Pune. Private balconies, gyms, vibrant rooftop lounges, zero restrictions.",
};

const colivingProperties = [
  {
    name: "Reforbs Nirvana",
    sub: "Flagship backpacker & hippie themed property",
    price: "₹14,500",
    image: "/images/image3.png",
    link: "/coliving/nirvana",
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
    name: "Reforbs Moksha",
    sub: "Serene bohemian living near Joggers Park",
    price: "₹15,000",
    image: "/images/image7.png",
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
];

export default function ColivingIndex() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-gradient-to-b from-slate-950 via-brand-dark to-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow text-brand-dark-900 font-extrabold text-xs uppercase tracking-wider mb-6">
            <Building2 size={16} />
            <span>Co-Living for Working Professionals</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight mb-4">
            Co-Living in <span className="text-brand-teal">Viman Nagar</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Where urban professionals come home to unwind, socialize, and enjoy total independence. No rigid rules. No sales pressure.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {colivingProperties.map((prop, i) => (
            <div
              key={i}
              className="card-premium group hover:translate-y-[-4px]"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                <Image
                  src={prop.image}
                  alt={prop.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                <div className="absolute top-4 left-4 bg-brand-yellow text-brand-dark-900 text-xs font-bold px-3 py-1 rounded-full">
                  Viman Nagar, Pune
                </div>
                <div className="absolute top-4 right-4 bg-white/95 px-3 py-1 rounded-full text-xs font-bold text-slate-900 flex items-center gap-1">
                  <span className="text-amber-500">★</span>
                  <span>{prop.rating}</span>
                  <span className="text-slate-400 font-normal">({prop.reviews})</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-black font-heading">{prop.name}</h3>
                  <p className="text-xs text-brand-teal font-medium mt-0.5">{prop.sub}</p>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-700">
                  {prop.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <CheckCircle size={15} className="text-brand-teal shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block uppercase">
                      From
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black font-heading text-brand-teal">
                        {prop.price}
                      </span>
                      <span className="text-xs text-slate-500">/mo</span>
                    </div>
                  </div>

                  <Link href={prop.link} className="btn-teal text-xs py-2.5 px-5 font-bold">
                    <span>View Property Details</span>
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
