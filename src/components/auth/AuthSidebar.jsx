import React from "react";
import { ArrowLeft } from "lucide-react";

export default function AuthSidebar({ onNavigate }) {
  return (
    <div className="relative w-full lg:w-[48%] xl:w-[45%] min-h-[280px] sm:min-h-[380px] lg:min-h-screen bg-[#072F24] overflow-hidden flex flex-col justify-between p-6 sm:p-10 lg:p-12">
      {/* Background Artwork */}
      <div className="absolute inset-0 z-0">
        <img
          src="/auth-image.png"
          alt="PallyPot Wealth and Savings Visual"
          className="w-full h-full object-cover object-bottom opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#072F24]/40 to-[#072F24]/90" />
      </div>

      {/* Top Header Content */}
      <div className="relative z-10 space-y-6">
        {/* Logo */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate?.("home")}
            className="group flex items-center gap-2 focus:outline-none cursor-pointer"
            title="Return to Home"
          >
            <img
              src="/logo.png"
              alt="PallyPot Logo"
              className="h-10 sm:h-12 w-auto drop-shadow-md group-hover:scale-105 transition-transform"
            />
          </button>

          {/* Quick Back to home on mobile/tablet */}
          <button
            onClick={() => onNavigate?.("home")}
            className="lg:hidden flex items-center gap-1.5 text-xs font-medium text-[#F7F4EB]/80 bg-[#0B4032]/80 backdrop-blur px-3 py-1.5 rounded-full border border-[#195945] hover:text-white cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
        </div>

        {/* Golden Divider Line */}
        <div className="w-14 h-0.5 bg-[#D9A441]" />

        {/* Heading */}
        <div className="space-y-5 pt-5">
          <h1 className="font-['Sixtyfour',serif] opacity-60 text-[20px] sm:text-3xl lg:text-4xl tracking-wider text-[#FFFFFF]">
            Home of
            <br />
            collective
            <br />
            <span className="text-[#F1DF7E]">saving.</span>
          </h1>

          {/* Cursive Subtitle */}
          <p className="font-['Satisfy',cursive] text-lg sm:text-xl text-[#F1DF7E] tracking-wide leading-relaxed pt-2">
            Built for you. Built by you.
            <br />
            Strengthened by community.
          </p>
        </div>
      </div>

      {/* Bottom spacer for desktop */}
      <div className="relative z-10 hidden lg:block pb-4">
        <button
          onClick={() => onNavigate?.("home")}
          className="inline-flex items-center gap-2 text-xs font-medium text-[#C8D6D0] hover:text-[#E5A93C] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to main website</span>
        </button>
      </div>
    </div>
  );
}
