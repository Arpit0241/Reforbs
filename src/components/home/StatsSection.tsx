import { Sparkles, Heart, Users, Smile } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="py-20 bg-white border-b border-[#E1E7E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="badge-eyebrow mb-2">The Reforbs Difference</div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1B1D1C] font-heading">
            What makes Reforbs <span className="text-[#007A7A]">different</span>
          </h2>
          <p className="text-[#666B68] text-sm sm:text-base mt-2 font-medium">
            Where most coliving spaces market security and restrictions, we focus on ownership, freedom, and deep human connection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-7 rounded-3xl bg-[#FAFAFA] border border-[#E1E7E6] hover:border-[#007A7A] hover:bg-white hover:shadow-card transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#E6F4F3] text-[#007A7A] flex items-center justify-center mb-5 font-bold">
              <Smile size={24} />
            </div>
            <h3 className="text-lg font-black text-[#1B1D1C] font-heading mb-2">
              Freedom
            </h3>
            <p className="text-xs sm:text-sm text-[#4A524F] leading-relaxed font-medium">
              Zero forced food packages, zero lock-ins, and no arbitrary bans. Live as if you own the place.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#FAFAFA] border border-[#E1E7E6] hover:border-[#007A7A] hover:bg-white hover:shadow-card transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF9D4] text-[#1B1D1C] flex items-center justify-center mb-5 font-bold">
              <Users size={24} />
            </div>
            <h3 className="text-lg font-black text-[#1B1D1C] font-heading mb-2">
              Community
            </h3>
            <p className="text-xs sm:text-sm text-[#4A524F] leading-relaxed font-medium">
              A welcoming tribe to cope with stress, overcome loneliness, and build lifelong friendships.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#FAFAFA] border border-[#E1E7E6] hover:border-[#007A7A] hover:bg-white hover:shadow-card transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#E6F4F3] text-[#007A7A] flex items-center justify-center mb-5 font-bold">
              <Heart size={24} />
            </div>
            <h3 className="text-lg font-black text-[#1B1D1C] font-heading mb-2">
              Comfort
            </h3>
            <p className="text-xs sm:text-sm text-[#4A524F] leading-relaxed font-medium">
              Sustainable design, private setups, high-speed fiber internet, and self-usable amenities.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#FAFAFA] border border-[#E1E7E6] hover:border-[#007A7A] hover:bg-white hover:shadow-card transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF9D4] text-[#1B1D1C] flex items-center justify-center mb-5 font-bold">
              <Sparkles size={24} />
            </div>
            <h3 className="text-lg font-black text-[#1B1D1C] font-heading mb-2">
              Vibes
            </h3>
            <p className="text-xs sm:text-sm text-[#4A524F] leading-relaxed font-medium">
              Inspired by vibrant backpacker culture — cool, artistic, hippie properties you love coming home to.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
