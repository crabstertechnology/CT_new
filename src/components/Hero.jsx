import React from 'react';

export default function Hero({ onOpenContact }) {
  return (
    <section 
      id="hero" 
      className="pt-24 pb-16 flex flex-col justify-center bg-white relative overflow-hidden w-full"
    >
      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Tagline / Eyebrow */}
            <div className="inline-flex items-center text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E87121] mb-4 sm:mb-5">
              INDUSTRIAL IOT, PANELS &amp; AUTOMATION — COIMBATORE
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-[4rem] font-extrabold text-gray-950 tracking-tight leading-[1.12] mb-6 max-w-3xl">
              Upgrade the plant you already have, without enterprise prices.
            </h1>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-normal mb-8 max-w-2xl">
              Crabster Technology designs and builds Industrial IoT, control panels and automation systems for small and mid-sized manufacturers across Tamil Nadu — starting from the problem on your floor, not a product catalogue.
            </p>

            {/* CTA Buttons - Sharp Edges */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-[#E87121] hover:bg-[#D45E12] active:scale-[0.98] rounded-none shadow-md transition-all duration-150 cursor-pointer"
              >
                Talk to an engineer
              </button>

              <a
                href="#services"
                className="px-7 py-3.5 text-sm sm:text-base font-semibold text-gray-800 bg-white border border-gray-300 hover:border-[#E87121] hover:text-[#E87121] hover:bg-orange-50/40 active:scale-[0.98] rounded-none transition-all duration-150"
              >
                Explore our services
              </a>
            </div>
          </div>

          {/* Right Column: 4K Crisp Control Panel Image - Sharp Edges */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl lg:max-w-none">
              <div className="overflow-hidden rounded-none shadow-2xl border border-gray-200 bg-gray-100">
                <img
                  src="/assets/control-panel-hd.jpg"
                  alt="Industrial Electrical Control Panel and PLC System by Crabster Technology"
                  className="w-full h-auto object-cover object-center max-h-[520px] xl:max-h-[560px] rounded-none"
                  loading="eager"
                  onError={(e) => {
                    e.target.src = "/assets/control-panel-4k.jpg";
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
