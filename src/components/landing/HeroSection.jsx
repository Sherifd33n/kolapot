import React from "react";
import {
  TrendingUp,
  Users,
  ShieldCheck,
  Activity,
  Sparkles,
} from "lucide-react";

const features = [
  { icon: TrendingUp, label: ["COLLECTIVE", "GROWTH"], offset: "mr-0" },
  { icon: Users, label: ["GROUP", "SAVINGS"], offset: "mr-0 lg:mr-24" },
  { icon: ShieldCheck, label: ["SECURE", "PAYMENTS"], offset: "mr-0" },
  { icon: Activity, label: ["PAYOUT", "TRACKING"], offset: "mr-0 lg:mr-24" },
];

export default function HeroSection({ onOpenCreateModal }) {
  return (
    <section
      id="home"
      className="relative pt-2 pb-16 md:pb-2 overflow-hidden px-4 sm:px-6 lg:px-8 bg-[#0B5D4B] [clip-path:polygon(0_0,100%_0,100%_calc(100%-40px),50%_100%,0_calc(100%-40px))] md:[clip-path:polygon(0_0,100%_0,100%_calc(100%-65px),50%_100%,0_calc(100%-65px))]"
    >
      {/* Background Decorative Tropical Leaves - Right Side */}
      <img
        src="/menu-rightbg.png"
        alt=""
        className="absolute right-0 top-0 h-full w-auto object-cover object-left opacity-[0.12] pointer-events-none select-none z-0"
      />

      {/* Big Arch Headline: THE MODERN ÀJỌ */}
      <div className="max-w-7xl mx-auto text-center relative z-10 mb-4 sm:mb-6 px-2">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide text-[#D9A441] font-['Nosifer'] leading-tight">
          THE MODERN ÀjO
        </h1>
      </div>

      {/* Main Grid: Left Stepper, Center Pot Visual & Surrounding Badges, Right Feature List */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center relative z-20">
        {/* Left Column: Why PallyPot? & Stepper */}
        <div className="lg:col-span-3 text-left space-y-6 order-2 lg:order-1">
          <div>
            <span className="text-sm uppercase font-medium tracking-widest text-[#E5A93C] block mb-1 font-poppins">
              WHY PALLYPOT?
            </span>
            <h2 className="text-2xl sm:text-3xl font-['Salsa'] font-normal text-[#F7F4EB] leading-tight">
              Some goals are better reached together.
            </h2>
          </div>

          <div className="space-y-6 pt-2">
            {/* Step 01 */}
            <div className="group flex items-start gap-4">
              <span className="font-serif italic font-extralight text-3xl sm:text-4xl text-[#E5A93C] transition-transform duration-300 group-hover:scale-110">
                01
              </span>
              <div className="pt-1 border-l-2 border-[#1A4E3D] pl-4">
                <h3 className="text-xs font-normal uppercase tracking-wider text-[#DBC341]">
                  YOUR PEOPLE
                </h3>
                <p className="text-sm text-[#ffffff] mt-0.5 font-light">
                  Bring your circle along.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="group flex items-start gap-4">
              <span className="font-serif italic font-extralight text-3xl sm:text-4xl text-[#E5A93C] transition-transform duration-300 group-hover:scale-110">
                02
              </span>
              <div className="pt-1 border-l-2 border-[#1A4E3D] pl-4">
                <h3 className="text-xs font-normal uppercase tracking-wider text-[#DBC341]">
                  YOUR GOAL
                </h3>
                <p className="text-sm text-[#ffffff] mt-0.5 font-light">
                  Save for what matters to you.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="group flex items-start gap-4">
              <span className="font-serif italic font-light text-3xl sm:text-4xl text-[#E5A93C] transition-transform duration-300 group-hover:scale-110">
                03
              </span>
              <div className="pt-1 border-l-2 border-[#1A4E3D] pl-4">
                <h3 className="text-xs font-normal uppercase tracking-wider text-[#DBC341]">
                  YOUR TURN
                </h3>
                <p className="text-sm text-[#ffffff] mt-0.5 font-light">
                  When it's your turn, it's your turn.
                </p>
              </div>
            </div>
          </div>

          {/* Circular Stamp / Seal */}
          <div className="pt-4 flex items-center gap-3">
            <div className="relative w-28 h-28 rounded-full flex items-center justify-center p-1 group hover:border-[#E5A93C] transition-colors cursor-pointer">
              <div className="absolute inset-0 animate-[spin_20s_linear_infinite] flex items-center justify-center text-[7px] uppercase font-bold tracking-[0.2em] text-[#E5A93C]">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                    fill="none"
                  />
                  <text fill="#A0B67E">
                    <textPath xlinkHref="#circlePath" startOffset="0%">
                      FROM THE CIRCLE. FOR THE CIRCLE
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Centerpiece: Hero Àjọ Artwork */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center order-1 lg:order-2 my-4 lg:my-0">
          {/* Ambient Warm Golden Glow behind artwork */}
          <div className="absolute w-[300px] sm:w-[440px] lg:w-[500px] h-[300px] sm:h-[440px] lg:h-[500px] rounded-full bg-[#E5A93C]/15 blur-3xl pointer-events-none"></div>

          {/* Single Hero Image Artwork Container */}
          <div className="relative w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[720px] flex items-center justify-center group">
            <img
              src="/hero-image.png"
              alt="Community members saving together around the modern Àjọ pot"
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02] drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)] -mt-6 sm:-mt-14 lg:-mt-28"
              loading="eager"
            />
          </div>
        </div>

        {/* Right Column: Tradition Tagline & Pill Features */}
        <div className="lg:col-span-3 text-left space-y-8 order-3">
          {/* Heading */}
          <div className="font-sans text-[16px] font-normal text-[#F8F5EE] leading-[25px] mb-6 lg:-mb-20">
            <h3 className="">
              Same <br /> tradition.
              <br />
              <span className="">
                A simpler, <br /> safer way.
              </span>
            </h3>
            <div className="mt-3 h-0.5 w-12 bg-[#E5A93C]" />
          </div>

          {/* Staggered features */}
          <div className="flex flex-col gap-6 sm:gap-8 items-start sm:items-end">
            {features.map(({ icon: Icon, label, offset }) => (
              <div
                key={label.join(" ")}
                className={`flex items-center gap-3 group cursor-pointer ${offset}`}
              >
                <div className="w-10 h-10 shrink-0 rounded-full border border-[#F1DF7E] flex items-center justify-center text-[#F1DF7E] group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-normal tracking-wider uppercase leading-snug text-[#F1DF7E] group-hover:text-[#E5A93C] transition-colors">
                  {label[0]}
                  <br />
                  {label[1]}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
