import React from "react";

export default function BotanicalFrame({ children }) {
  return (
    <div className="relative min-h-screen w-full bg-[#FAF7F2] text-[#1A2E26] overflow-x-hidden">
      {/* Decorative Botanical Corner Artwork (Clipped into corners) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
        {/* Top Left Botanical Artwork */}
        <img
          src="/top-left.png"
          alt=""
          className="absolute top-0 left-0 w-48 sm:w-72 md:w-96 lg:w-[460px] -translate-x-[22%] -translate-y-[22%] object-contain object-left-top mix-blend-multiply opacity-25 sm:opacity-30"
        />

        {/* Bottom Right Botanical Artwork */}
        <img
          src="/bottom-right.png"
          alt=""
          className="absolute bottom-0 right-0 w-52 sm:w-80 md:w-96 lg:w-[500px] translate-x-[22%] translate-y-[22%] object-contain object-right-bottom mix-blend-multiply opacity-25 sm:opacity-30"
        />
      </div>

      {/* Main Page Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        {children}
      </div>
    </div>
  );
}
