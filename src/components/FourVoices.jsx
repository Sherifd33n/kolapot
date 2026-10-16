import React from "react";

export default function FourVoices() {
  const voices = [
    { language: "ENGLISH", phrase: "Savings is Strength" },
    { language: "YORÙBÁ", phrase: "Àjọ ni agbára" },
    { language: "IGBO", phrase: "Nchekwa ego bụ ike" },
    { language: "HAUSA", phrase: "Tanadi shi ne karfi" },
  ];

  return (
    <section id="voices" className="px-4 sm:px-6 lg:px-8 pb-6">
      <div className="max-w-5xl mx-auto space-y-6 text-center">
        {/* Header */}
        <div>
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-[1px] w-16 sm:w-24 bg-[#E5A93C]/40"></div>
            <h3
              className="text-[18px] uppercase tracking-widest text-[#735722]"
              style={{ fontFamily: "'Inknut Antiqua', serif" }}
            >
              ONE IDEA. FOUR VOICES.
            </h3>
            <div className="h-[1px] w-16 sm:w-24 bg-[#E5A93C]/40"></div>
          </div>
          <p className="text-sm sm:text-base text-[#8C9686] font-sans">
            The same idea, spoken across four Nigerian languages.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-[#735722]/40">
          {voices.map((voice) => (
            <div key={voice.language} className="text-center px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-0">
              <h4 className="text-xs font-bold tracking-widest uppercase text-[#0B5D4B]">
                {voice.language}
              </h4>
              <p className="text-sm font-['Inria Serif'] font-medium text-[#0B5D4B] mt-0.5">
                {voice.phrase}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
