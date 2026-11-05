import React from 'react';

export default function Hero({ onOpenContact }) {
  return (
    <section 
      id="hero" 
      className="page-section min-h-screen pt-20 pb-10 flex flex-col justify-center bg-white relative overflow-hidden w-full"
    >
      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Tagline / Eyebrow */}
            <div className="inline-flex items-center text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 mb-4 sm:mb-5">
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

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#0E3B64] hover:bg-[#092645] active:scale-[0.98] rounded shadow-sm transition-all duration-150"
              >
                Talk to an engineer
              </button>

              <a
                href="#services"
                className="px-7 py-3.5 text-sm sm:text-base font-semibold text-[#0E3B64] bg-white border border-gray-300 hover:border-gray-400 hover:bg-gray-50 active:scale-[0.98] rounded transition-all duration-150"
              >
                Explore our services
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-8 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>Coimbatore Engineering &amp; Assembly</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                <span>On-floor Plant Assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                <span>Retrofits for Existing Lines</span>
              </div>
            </div>
          </div>

          {/* Right Column: Control Panel Image */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl lg:max-w-none">
              <div className="overflow-hidden rounded-xl shadow-2xl border border-gray-200 bg-gray-100">
                <img
                  src="/assets/control-panel.jpg"
                  alt="Industrial Electrical Control Panel and PLC System by Crabster Technology"
                  className="w-full h-auto object-cover object-center max-h-[520px] xl:max-h-[560px]"
                  loading="eager"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80";
                  }}
                />
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded text-xs sm:text-sm font-medium tracking-wide">
                  Custom PLC &amp; Edge Integration
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
