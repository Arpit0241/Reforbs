import Image from "next/image";
import { Star, Quote, CheckCircle, Award } from "lucide-react";

const reviews = [
  {
    name: "Rohan Deshmukh",
    role: "Symbiosis Law School (SLS) Student",
    property: "ABC – Near SLS",
    rating: 5,
    text: "Reforbs is the best decision I made moving to Pune. 2 mins walk to SLS campus, no grumpy wardens or illogical curfews, and my own quiet single room to prepare for moot court competitions. The vibes on the terrace at night are unbeatable!",
  },
  {
    name: "Aanya Verma",
    role: "Symbiosis Centre for Mgmt (SCMS)",
    property: "XYZ – Near SCMS",
    rating: 5,
    text: "They literally don't impose food on you. I have my own private kitchen corner and can cook what I like or order with roommates. When they promised 'no follow-up pushy sales calls', they actually meant it. Super respectful management.",
  },
  {
    name: "Siddharth Mehta",
    role: "Senior Software Engineer, Tech Mahindra",
    property: "Reforbs Nirvana, Viman Nagar",
    rating: 5,
    text: "Moved from Bangalore to Pune and was dreading typical PG broker traps. Reforbs Nirvana feels like a boutique backpackers resort. Gigabit fiber never drops, gym inside, and the community BBQs helped me make close friends in 2 weeks.",
  },
  {
    name: "Pooja Hegde",
    role: "Product Designer, SaaS Startup",
    property: "Reforbs Moksha, Viman Nagar",
    rating: 5,
    text: "The interior decor and lighting are stunning! As a designer, my environment dictates my energy. Living in Moksha with leafy balcony spaces and supportive hosts who resolve maintenance within an hour has been a dream.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag mb-3">Genuine Resident Love</span>
          <h2 className="section-title">
            What Customers Say About Us
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Real feedback from students and working professionals living across our Viman Nagar properties.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-brand-teal bg-brand-teal-50 px-3 py-1 rounded-full border border-brand-teal-100">
                    {rev.property}
                  </span>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle size={14} className="text-emerald-500" />
                  </div>
                  <div className="text-xs text-slate-500">{rev.role}</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
                  <Quote size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Spotlight on Us (Slide 13 & image8.png) */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-teal mb-2">
            <Award size={16} />
            <span>As Featured In Mainstream Media</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-slate-900 mb-2">
            The <span className="text-brand-teal">Spotlight</span> On Us
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto mb-8">
            We don&apos;t just make second homes in Pune. We make headlines as well.
          </p>

          <div className="relative h-20 sm:h-24 w-full max-w-4xl mx-auto">
            <Image
              src="/images/image8.png"
              alt="Reforbs in Forbes, Entrepreneur, VCCIRCLE, YourStory, LiveMint"
              fill
              className="object-contain filter grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
