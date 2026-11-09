import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AmenitiesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Block 1: Move-in Ready - Start living your best life from day one */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative h-80 sm:h-96 md:h-[440px] rounded-3xl overflow-hidden shadow-card border border-[#E1E7E6]">
            <Image
              src="/images/move-in-ready-reforbs.jpg"
              alt="Start living your best life from day one - Fully furnished modern room"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="lg:col-span-6 space-y-5">
            <span className="badge-eyebrow">Move-in Ready</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1D1C] font-heading leading-tight">
              Start living your best life from <span className="text-[#007A7A]">day one</span>.
            </h2>
            <p className="text-gray-800 text-base leading-relaxed font-medium">
              Bring a box full of hopes, dreams, ambitions... and of course, your personal belongings. Everything else — furniture, appliances, food — has already been taken care of.
            </p>
            <div className="pt-2 space-y-3 text-xs sm:text-sm text-[#1B1D1C] font-bold">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={18} className="text-[#007A7A] shrink-0" />
                <span>Fully furnished with ergonomic study desks and posture mattresses</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={18} className="text-[#007A7A] shrink-0" />
                <span>Just not an accommodation, but an experience to cherish!!</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={18} className="text-[#007A7A] shrink-0" />
                <span>Memories that will last a lifetime!!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Block 2: Slide 10 - Step into a room that has room for everything */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-5">
            <span className="badge-eyebrow">Ample Storage &amp; Space</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1D1C] font-heading leading-tight">
              Step into a room that has <span className="text-[#007A7A]">room for everything</span>.
            </h2>
            <p className="text-gray-800 text-base leading-relaxed font-medium">
              Your clothes and bag will not be fighting for space on the same chair. At Reforbs Living, there&apos;s ample room for all your possessions. Even a framed photo of your family, for the rare occasions you miss home.
            </p>
            <div className="bg-[#FAF6E8] p-5 rounded-2xl border border-[#E6D7A8] text-xs sm:text-sm text-[#1B1D1C]">
              <p className="font-extrabold mb-1">Single &amp; Double Privacy Guaranteed:</p>
              <p className="text-gray-800 font-medium">
                All single rooms are for single occupants only. You get your private sanctuary without feeling cramped.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 relative h-80 sm:h-96 md:h-[440px] rounded-3xl overflow-hidden shadow-card border border-[#E1E7E6]">
            <Image
              src="/images/spacious-room-storage.jpg"
              alt="Room that has room for everything - Spacious layout with ample storage"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Block 3: Zero Daily Hassle - Take your daily list of chores and tear it up */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative h-80 sm:h-96 md:h-[440px] rounded-3xl overflow-hidden shadow-card border border-[#E1E7E6]">
            <Image
              src="/images/chores-taken-care.jpg"
              alt="Housekeeping and chores taken care of - Clean serviced living spaces"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="lg:col-span-6 space-y-5">
            <span className="badge-eyebrow">Zero Daily Hassle</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1D1C] font-heading leading-tight">
              Take your daily list of chores. <br />
              <span className="text-[#007A7A] underline decoration-[#FFDE59] decoration-4 underline-offset-8">
                And tear it up.
              </span>
            </h2>
            <p className="text-gray-800 text-base leading-relaxed font-medium">
              You have better things to do than wash your clothes, clean up your room and cook your meals. So our team of pros will do them all for you.
            </p>
            <div className="p-5 rounded-2xl bg-[#E6F4F3] border border-[#BDE3DF]">
              <h4 className="text-sm font-extrabold text-[#007A7A] mb-1">
                Making your life remarkably easy in Pune:
              </h4>
              <p className="text-xs sm:text-sm text-gray-800 font-medium">
                We go a step further than just solving your day-to-day issues. During your entire stay, we don&apos;t shy away from solving any issue that we can. In our premise or outside of it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
