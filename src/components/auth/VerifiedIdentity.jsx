import React from "react";
import { Check, ArrowRight } from "lucide-react";
import BotanicalFrame from "./BotanicalFrame";

export default function VerifiedIdentity({ onNavigate }) {
  const verificationItems = [
    { label: "Personal information", status: "Complete" },
    { label: "BVN verification", status: "Complete" },
    { label: "NIN verification", status: "Complete" },
    { label: "Identity verification", status: "Complete" },
  ];

  return (
    <BotanicalFrame>
      <div className="flex-1 flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
        {/* Brand Logo at Top */}
        <div className="mb-2 text-center">
          <button
            onClick={() => onNavigate?.("home")}
            className="group inline-flex items-center gap-2 focus:outline-none"
            title="Go to home"
          >
            <img
              src="/logo-2.png"
              alt="PallyPot Logo"
              className="h-9 sm:h-11 w-auto transition-transform group-hover:scale-105 drop-shadow-sm"
              onError={(e) => {
                e.currentTarget.src = "/logo.png";
              }}
            />
          </button>
        </div>

        {/* 3D Illustration sitting directly above card */}
        <div className="relative z-10 -mb-6 sm:-mb-8 w-60 sm:w-72 md:w-80 flex items-center justify-center pointer-events-none select-none">
          <img
            src="/verified-image.png"
            alt="Identity Verified Illustration"
            className="w-full h-auto object-contain drop-shadow-md"
          />
        </div>

        {/* Verified White Card */}
        <div className="relative z-0 w-full max-w-[540px] bg-white rounded-3xl border border-[#EBE6DD] pt-10 pb-8 px-4 sm:px-8 md:px-10 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.05)] text-center space-y-3 animate-fadeIn">
          {/* Header */}
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#0B5D4B] block mb-2">
              IDENTITY VERIFIED
            </span>
            <h1 className="text-2xl sm:text-3xl font-['Lusitana',serif] font-bold text-[#000000] leading-tight">
              Your identity has been verified
              <br />
              successfully.
            </h1>
            <p className="text-xs sm:text-sm text-[#7E7F7D] font-normal leading-relaxed mt-2.5">
              Your profile and identity details have been confirmed.
              <br className=""/>
              You may now proceed to your PallyPot dashboard.
            </p>
          </div>

          {/* Checklist Container */}
          <div className="bg-[#FAF7F2] rounded-2xl p-3 sm:p-5 space-y-3 border border-[#F0EBE1] text-left">
            {verificationItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-2 py-1"
              >
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#BDE8D0] text-[#064335] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#000000] truncate">
                    {item.label}
                  </span>
                </div>
                <span className="bg-[#D3ECD9] text-[#0A5A38] text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full shrink-0">
                  {item.status}
                </span>
              </div>
            ))}
          </div>

          {/* Status: VERIFIED Banner */}
          <div className="w-full py-3 px-4 bg-[#DFF5E5] rounded-full flex items-center justify-center gap-2 text-xs sm:text-sm text-[#064335] border border-[#C5EBCE]">
            <div className="w-7 h-7 rounded-full bg-[#064335] text-white flex items-center justify-center text-[10px] font-bold">
              <Check className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span>
              Status: <strong className="font-bold tracking-wide">VERIFIED</strong>
            </span>
          </div>

          {/* Continue to dashboard CTA */}
          <button
            onClick={() => onNavigate?.("dashboard")}
            className="w-full py-3.5 sm:py-4 px-6 bg-[#064335] hover:bg-[#052A21] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base group cursor-pointer"
          >
            <span>Continue to dashboard</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </BotanicalFrame>
  );
}
