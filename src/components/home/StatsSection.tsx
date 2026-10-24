import { Shield, Sparkles, Heart, Users, Coffee, Smile } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="py-16 bg-brand-teal-50/50 border-b border-brand-teal-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-tag mb-3">Redefining Urban Pune Living</span>
          <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-900">
            How Are We Radically Unique?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Most co-living companies market standard boxes with strict rules. We focus on feelings, vibes, and true emotional connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-card transition-all">
            <div className="w-14 h-14 rounded-2xl bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-6">
              <Sparkles size={28} />
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
              Backpacker Inspired Freedom
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Inspired by the global backpackers concept popular in today&apos;s generation. Vibrant, cool, hippie properties where you come back from office or college and feel alive.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-card transition-all">
            <div className="w-14 h-14 rounded-2xl bg-brand-yellow/30 text-brand-dark-900 flex items-center justify-center mb-6">
              <Smile size={28} />
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
              Zero Rigid Bans &amp; Curfews
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              This is YOUR home! Live as if you OWN it. We believe in mutual compatibility, good music, inviting friends over, and social harmony within respectful norms.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-card transition-all">
            <div className="w-14 h-14 rounded-2xl bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-6">
              <Heart size={28} />
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
              Deep Emotional Connect
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We create spaces bursting with personality. Not just rooms, but entire properties filled with glowing aesthetic lounges, community dinners, and real friendships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
