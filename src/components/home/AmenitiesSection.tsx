import Image from "next/image";
import {
  Sparkles,
  Wifi,
  Shirt,
  UtensilsCrossed,
  ShieldCheck,
  Dumbbell,
  Gamepad2,
  Tv,
  Power,
  RotateCcw,
  Coffee,
  CheckCircle2,
} from "lucide-react";

const amenitiesList = [
  {
    icon: Shirt,
    title: "Pro Laundry & Linen",
    desc: "Clean clothes on demand. No chore marathons on Sunday mornings.",
  },
  {
    icon: Sparkles,
    title: "Spotless Housekeeping",
    desc: "Daily professional cleaning so your room always feels like day one.",
  },
  {
    icon: Wifi,
    title: "Hyper-Speed Optical Wi-Fi",
    desc: "Dual-band gigabit fiber for remote meetings, exams, and 4K streaming.",
  },
  {
    icon: UtensilsCrossed,
    title: "Private Kitchen Freedom",
    desc: "Cook your own food or order in. Zero forced boring mess subscriptions.",
  },
  {
    icon: Dumbbell,
    title: "In-House Fitness Zones",
    desc: "Equipped workout spaces and yoga spots right inside the building.",
  },
  {
    icon: Gamepad2,
    title: "Recreation & Pool Tables",
    desc: "Blow off steam with pool, foosball, board games, and movie nights.",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Smart Security",
    desc: "Digital biometric entry, monitored premises, and supportive property hosts.",
  },
  {
    icon: RotateCcw,
    title: "Zero Lock-in Pressure",
    desc: "True flexibility. Move out or switch rooms whenever life demands.",
  },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner with Slide 11 content & image6.png */}
        <div className="bg-gradient-to-br from-brand-teal-50 via-white to-brand-yellow-50/50 rounded-3xl p-8 sm:p-12 border border-brand-teal-100 mb-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="section-tag mb-4">Ultimate Convenience</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-slate-900 leading-tight mb-4">
                Take your daily list of chores. <br />
                <span className="text-brand-teal underline decoration-brand-yellow decoration-4 underline-offset-4">
                  And tear it up.
                </span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                You have better things to do than wash clothes, scrub floors, and stress about dinner. Our team of dedicated pros takes care of every single chore for you.
              </p>

              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm mb-6">
                <h4 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-teal" />
                  Making your life remarkably easy in Pune:
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  We go a step further than just solving standard room complaints. During your entire stay, we don&apos;t shy away from solving any issue that we can — whether inside our premises or helping you navigate Pune outside of it!
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
              <Image
                src="/images/image6.png"
                alt="Housekeeping and Laundry at Reforbs"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* 8 Essential Amenities Grid */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-slate-900">
            Benchmark Amenities &amp; Infrastructure
          </h3>
          <p className="text-sm text-slate-600 mt-2">
            Every element is engineered for single and double occupants to stay productive and deeply relaxed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenitiesList.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-100 hover:border-brand-teal-200 hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-4 group-hover:bg-brand-teal group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h4 className="text-base font-bold font-heading text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
