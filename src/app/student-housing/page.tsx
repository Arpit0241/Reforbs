import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, GraduationCap } from "lucide-react";

export const metadata = {
  title: "Student Housing in Viman Nagar Pune | Reforbs Living",
  description:
    "Curated student accommodations opposite Symbiosis Law School (SLS) and near Symbiosis Centre for Management Studies (SCMS) in Viman Nagar, Pune. Single & double occupancy.",
};

const studentProperties = [
  {
    name: "Shubh Gateway",
    sub: "Directly opposite Symbiosis Law School (SLS)",
    price: "₹12,500",
    image: "/assets/pdf/extracted/page-7-image-1-X4.jpg",
    link: "/student-housing/shubh-gateway",
    rating: "4.9",
    reviews: 148,
    features: [
      "1 min walk to SLS campus gate",
      "Dedicated study suites with quiet zones",
      "High-speed optical fiber for research & moots",
      "No curfew penalties or warden hassles",
    ],
  },
  {
    name: "Reforbs Living Sakore Nagar",
    sub: "Walking distance to Symbiosis Centre for Mgmt Studies",
    price: "₹12,000",
    image: "/assets/pdf/extracted/page-6-image-1-X4.jpg",
    link: "/student-housing/sakore-nagar",
    rating: "4.8",
    reviews: 134,
    features: [
      "3 mins walk to SCMS campus",
      "Single & double rooms with study desks",
      "Daily housekeeping & laundry care included",
      "Private kitchen freedom (no forced food fees)",
    ],
  },
];

export default function StudentHousingIndex() {
  return (
    <div className="pt-24 pb-20 bg-[#FAFAFA]">
      <section className="bg-[#111312] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#007A7A] text-white font-extrabold text-xs uppercase tracking-wider mb-6">
            <GraduationCap size={16} />
            <span>Student Living Redefined</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight mb-4">
            Student Housing in <span className="text-[#FFDE59]">Viman Nagar</span>
          </h1>
          <p className="text-[#E1E7E6] text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Beautifully curated rooms for students with single and double occupancies. With benchmark amenities &amp; detailed infrastructure, every room is built to perfection to make every student feel at home.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {studentProperties.map((prop, i) => (
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
                <div className="absolute top-4 left-4 bg-[#007A7A] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Viman Nagar, Pune
                </div>
                <div className="absolute top-4 right-4 bg-white/95 px-3 py-1 rounded-full text-xs font-bold text-[#1B1D1C] flex items-center gap-1 shadow-sm">
                  <span className="text-amber-500">★</span>
                  <span>{prop.rating}</span>
                  <span className="text-[#666B68] font-normal">({prop.reviews})</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-black font-heading">{prop.name}</h3>
                  <p className="text-xs text-[#FFDE59] font-medium mt-0.5">{prop.sub}</p>
                </div>
              </div>

              <div className="p-6 sm:p-8">
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
