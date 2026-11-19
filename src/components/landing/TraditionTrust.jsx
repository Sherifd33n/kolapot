import React from "react";

export default function TraditionTrust() {
  return (
    <section
      id="trust"
      className="py-16 px-4 sm:px-6 lg:px-8 relative text-center"
    >
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Cultural Spiral Divider Motif */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 px-2">
          <div className="h-[1px] w-14 sm:w-24 md:w-40 bg-gradient-to-r from-transparent via-[#E5A93C]/40 to-[#E5A93C]/70"></div>

          <div className="w-10 h-10 rounded-full border border-[#E5A93C]/60 flex items-center justify-center p-1.5 shadow-lg shadow-amber-500/10 shrink-0">
            {/* African spiral / cowrie medallion */}
            <svg
              viewBox="0 0 40 40"
              className="w-full h-full text-[#E5A93C]"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M20 5 C 12 5, 6 11, 6 19 C 6 27, 12 34, 20 34 C 28 34, 34 27, 34 19 C 34 13, 29 8, 22 8 C 16 8, 12 12, 12 17 C 12 22, 16 26, 21 26 C 25 26, 28 23, 28 19 C 28 16, 26 14, 23 14 C 20 14, 18 16, 18 18"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="h-[1px] w-14 sm:w-24 md:w-40 bg-gradient-to-l from-transparent via-[#E5A93C]/40 to-[#E5A93C]/70"></div>
        </div>

        {/* Headline: A TRADITION BUILT ON TRUST */}
        <div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-widest leading-tight text-[#0B5D4B]"
            style={{
              fontFamily: "'Metal Mania'",
            }}
          >
            A TRADITION BUILT ON TRUST.
          </h2>
        </div>

        {/* Narrative Copy */}
        <div className="space-y-1 text-sm sm:text-lg text-[#14312B] leading-relaxed max-w-3xl mx-auto font-normal font-['Pontano Sans'] font-medium">
          <p>Àjọ has always been more than putting money together.</p>
          <p>
            It is people showing up for one another, contribution after
            contribution.
          </p>
          <p className="">
            Every contribution is a promise to the circle. Every turn is
            something you worked towards together.
          </p>
        </div>

        {/* Values String */}
        <div className="px-2">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-extrabold uppercase tracking-[0.15em] sm:tracking-[0.2em] px-3 sm:px-6 py-2.5 text-[#0B5D4B]">
            <span>COMMUNITY</span>
            <span className="text-[#4E7D6D]">•</span>
            <span>CONSISTENCY</span>
            <span className="text-[#4E7D6D]">•</span>
            <span>TRUST</span>
            <span className="text-[#4E7D6D]">•</span>
            <span>SHARED GOALS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
