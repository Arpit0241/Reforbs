import Image from "next/image";
import Link from "next/link";
import { Sparkles, Heart, Users, Compass, ShieldCheck, SunMedium, Lock, Sliders, LifeBuoy, Palette, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | Reforbs Living - Pune's Vibrant Co-Living Ecosystem",
  description:
    "Reforbs is an innovative living space solution in Pune built on Privacy, Comfort, Support & Vibes. Inspired by backpacker culture for students and professionals.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-950 via-brand-dark to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-yellow/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow text-brand-dark-900 font-extrabold text-xs uppercase tracking-wider mb-6">
            <Heart size={14} className="fill-brand-dark-900" />
            <span>It&apos;s All About Emotional Connect</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight mb-6 max-w-4xl mx-auto">
            We Build An <span className="text-brand-teal">Ecosystem</span>, <br />
            Not Just Accommodations.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Reforbs is an innovative living space solution in Pune. Affordable and customized spaces enabling tenants not just to stay, but to live, work, study, and play. Our tenants never want to leave!
          </p>
        </div>
      </section>

      {/* Origin Story & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative h-96 sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="/images/image3.png"
                alt="Reforbs Spaces and Living Culture"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="section-tag">Our Vision</span>
              <h2 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 leading-tight">
                Not Started as a Business, But as a Purpose-Driven Endeavor.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Rather than an ordinary rental business, Reforbs began as an endeavor to genuinely address the real everyday needs of working professionals and students in Pune.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Our vision is to offer out-of-the-box measures to provide a memorable living experience to tenants. Its foundation is cemented together with four unshakeable pillars:
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-brand-teal-50 border border-brand-teal-100">
                  <div className="text-brand-teal font-extrabold text-sm uppercase tracking-wider mb-1">
                    01. Privacy
                  </div>
                  <div className="text-xs text-slate-600">Single rooms, personal space &amp; quiet retreats</div>
                </div>
                <div className="p-4 rounded-2xl bg-brand-yellow-50 border border-brand-yellow-200">
                  <div className="text-brand-dark-900 font-extrabold text-sm uppercase tracking-wider mb-1">
                    02. Comfort
                  </div>
                  <div className="text-xs text-slate-600">Sustainable design &amp; self-usable amenities</div>
                </div>
                <div className="p-4 rounded-2xl bg-brand-teal-50 border border-brand-teal-100">
                  <div className="text-brand-teal font-extrabold text-sm uppercase tracking-wider mb-1">
                    03. Support
                  </div>
                  <div className="text-xs text-slate-600">Day-to-day assistance inside &amp; outside the stay</div>
                </div>
                <div className="p-4 rounded-2xl bg-brand-yellow-50 border border-brand-yellow-200">
                  <div className="text-brand-dark-900 font-extrabold text-sm uppercase tracking-wider mb-1">
                    04. Vibes
                  </div>
                  <div className="text-xs text-slate-600">Backpacker energy, freedom &amp; community cult</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Are We Unique - Backpacker Concept */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="section-tag mb-3">Our Core Differentiator</span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-slate-900">
              Why We Rebel Against Traditional PG Thinking
            </h2>
            <p className="text-slate-600 text-base mt-4 leading-relaxed">
              Where most co-living companies conventionally market spaces around boring corporate buzzwords like &quot;security, hassle-free, strict management&quot; — we at Reforbs focus on:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand-teal text-white flex items-center justify-center font-bold text-lg mb-6">
                🎒
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
                The Backpacker Spirit
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Inspired by the backpackers hostel culture celebrated by today&apos;s youth. Reforbs has curated properties that are vibrant, artistic, and hippie.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand-yellow text-brand-dark-900 flex items-center justify-center font-bold text-lg mb-6">
                🎉
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
                Bring Friends Over
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                When you return from college or the office, you should have a space to unwind, invite your friends over, and make unforgettable memories without nosy wardens.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand-teal text-white flex items-center justify-center font-bold text-lg mb-6">
                🤝
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
                Sense of Ownership
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We believe in complete freedom of choice. You can customize your room layout, choose whether you want food, and participate actively in the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -3P and -3D Official Breakdown */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow text-brand-dark-900 font-extrabold text-xs uppercase mb-4">
              REFORBS RAISES THE BAR
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading">
              The -3P and -3D Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* -3P */}
            <div className="bg-slate-800/90 rounded-3xl p-8 border border-brand-yellow/30">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700">
                <span className="text-3xl font-black text-brand-yellow font-heading">-3P</span>
                <span className="text-sm font-bold text-slate-300">Privacy • Personalization • Positivity</span>
              </div>
              <div className="space-y-6 text-sm">
                <div>
                  <h4 className="font-bold text-white text-base mb-1">PRIVACY</h4>
                  <p className="text-slate-300 leading-relaxed">
                    It&apos;s safe to say you get all the privacy you need. All our single rooms are exclusively for single occupants — you are the only tenant in your sanctuary.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white text-base mb-1">PERSONALIZATION</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Home-like atmosphere tailored to your habits. Enjoy private kitchen spaces, dining areas, balconies, and individual layouts you control.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white text-base mb-1">POSITIVITY</h4>
                  <p className="text-slate-300 leading-relaxed">
                    A positive environment that nurtures mental well-being. Fresh and light vibes, uniting residents through genuine social bonding on a day-to-day basis.
                  </p>
                </div>
              </div>
            </div>

            {/* -3D */}
            <div className="bg-slate-800/90 rounded-3xl p-8 border border-brand-teal/30">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700">
                <span className="text-3xl font-black text-brand-teal font-heading">-3D</span>
                <span className="text-sm font-bold text-slate-300">Daily Support • Decor • Details</span>
              </div>
              <div className="space-y-6 text-sm">
                <div>
                  <h4 className="font-bold text-white text-base mb-1">DAILY SUPPORT</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Reliable day-to-day support giving you the peace of mind to focus on career and studies. Quick, efficient on-site maintenance resolves issues right away.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white text-base mb-1">DECOR</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Talented interior designers beautify every space to inspire productivity by day and bring calm and peace at dusk.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white text-base mb-1">DETAILS</h4>
                  <p className="text-slate-300 leading-relaxed">
                    From personal utility fixtures to mood-lifting artwork, every thoughtful detail is the cornerstone of everything we do at Reforbs Coliving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-brand-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black font-heading mb-2">
              Ready to Experience Reforbs in Viman Nagar?
            </h3>
            <p className="text-white/90 text-sm max-w-xl">
              Schedule a visit anytime. Remember: We never follow up with pushy sales calls!
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-yellow text-sm font-bold py-3.5 px-8 shadow-lg shrink-0"
          >
            Schedule Free Visit
          </Link>
        </div>
      </section>
    </div>
  );
}
