import { Sparkles, Heart, Users, Smile } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="pt-12 sm:pt-16 pb-8 sm:pb-10 bg-white border-b border-[#E1E7E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="badge-eyebrow mb-2">The Reforbs Difference</div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1B1D1C] font-heading">
            What makes Reforbs <span className="text-[#007A7A]">different</span>
          </h2>
          <p className="text-[#666B68] text-sm sm:text-base mt-2 font-medium">
            Where most coliving spaces market security and restrictions, we focus on ownership, freedom, and deep human connection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Freedom */}
          <div className="group p-7 rounded-3xl bg-[#FAFAFA] border border-[#E1E7E6] hover:border-[#007A7A] hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#E6F4F3] text-[#007A7A] group-hover:bg-[#007A7A] group-hover:text-white flex items-center justify-center mb-5 font-bold transition-all duration-300 shadow-sm">
              <Smile size={24} />
            </div>
            <h3 className="text-lg font-black text-[#1B1D1C] group-hover:text-[#007A7A] font-heading mb-2 transition-colors">
              Freedom
            </h3>
            <p className="text-xs sm:text-sm text-[#4A524F] leading-relaxed font-medium">
              Zero forced food packages, zero lock-ins, and no arbitrary bans. Live as if you own the place.
            </p>
          </div>

          {/* Card 2: Community (Reforbs Premium Teal Theme) */}
          <div className="group p-7 rounded-3xl bg-[#FAFAFA] border border-[#E1E7E6] hover:border-[#007A7A] hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#E6F4F3] text-[#007A7A] group-hover:bg-[#007A7A] group-hover:text-white flex items-center justify-center mb-5 font-bold transition-all duration-300 shadow-sm">
              <Users size={24} />
            </div>
            <h3 className="text-lg font-black text-[#1B1D1C] group-hover:text-[#007A7A] font-heading mb-2 transition-colors">
              Community
            </h3>
            <p className="text-xs sm:text-sm text-[#4A524F] leading-relaxed font-medium">
              A welcoming tribe to cope with stress, overcome loneliness, and build lifelong friendships.
            </p>
          </div>

          {/* Card 3: Comfort */}
          <div className="group p-7 rounded-3xl bg-[#FAFAFA] border border-[#E1E7E6] hover:border-[#007A7A] hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#E6F4F3] text-[#007A7A] group-hover:bg-[#007A7A] group-hover:text-white flex items-center justify-center mb-5 font-bold transition-all duration-300 shadow-sm">
              <Heart size={24} />
            </div>
            <h3 className="text-lg font-black text-[#1B1D1C] group-hover:text-[#007A7A] font-heading mb-2 transition-colors">
              Comfort
            </h3>
            <p className="text-xs sm:text-sm text-[#4A524F] leading-relaxed font-medium">
              Sustainable design, private setups, high-speed fiber internet, and self-usable amenities.
            </p>
          </div>

          {/* Card 4: Vibes (Reforbs Premium Teal Theme) */}
          <div className="group p-7 rounded-3xl bg-[#FAFAFA] border border-[#E1E7E6] hover:border-[#007A7A] hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#E6F4F3] text-[#007A7A] group-hover:bg-[#007A7A] group-hover:text-white flex items-center justify-center mb-5 font-bold transition-all duration-300 shadow-sm">
              <Sparkles size={24} />
            </div>
            <h3 className="text-lg font-black text-[#1B1D1C] group-hover:text-[#007A7A] font-heading mb-2 transition-colors">
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
