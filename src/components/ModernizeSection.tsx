import React from 'react';
import { Wrench, Radio, TrendingUp, ArrowRight } from 'lucide-react';

export default function ModernizeSection({ onOpenContact }) {
  const points = [
    {
      icon: Wrench,
      text: "Existing panels, drives and machine controls rebuilt or brought up to current standards."
    },
    {
      icon: Radio,
      text: "Sensors and data acquisition fitted to machines that were never instrumented."
    },
    {
      icon: TrendingUp,
      text: "Monitoring that proves the improvement machine by machine, not just at month end."
    }
  ];

  return (
    <section 
      id="modernize" 
      className="flex flex-col justify-center bg-white border-b border-gray-100 relative px-6 sm:px-10 lg:px-14 xl:px-20 py-10 sm:py-12 w-full"
    >
      <div className="w-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center w-full">
          
          {/* Left Column: 4K Crisp Machine Photo (No overlay badge) */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-xl lg:max-w-none">
              <div className="overflow-hidden rounded-none shadow-xl border border-gray-200 bg-gray-100 group relative">
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="group relative block w-full text-left overflow-hidden rounded-none focus:outline-none"
                >
                  <img
                    src="/assets/factory-machine-hd.jpg"
                    alt="Industrial Machinery Retrofit with Digital Operator Terminal"
                    className="w-full h-auto object-cover object-center max-h-[500px] xl:max-h-[560px] transition-transform duration-300 group-hover:scale-105"
                    loading="eager"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/assets/factory-machine-4k.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:bg-black/60 flex flex-col justify-end p-6 sm:p-8">
                    <span className="inline-block text-xs uppercase tracking-widest text-orange-400 font-semibold mb-1">
                      Action
                    </span>
                    <span className="text-white text-xl sm:text-2xl font-bold flex items-center justify-between">
                      <span>How production automation works</span>
                      <ArrowRight className="w-5 h-5 text-orange-400 transform transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Eyebrow */}
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E87121] mb-3">
              THE AFFORDABLE ROUTE
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold text-gray-950 tracking-tight leading-tight mb-4 max-w-3xl">
              Modernise the machine you already own
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-normal mb-6 max-w-2xl">
              A fifteen-year-old line does not need replacing to behave like a newer one. We add the sensing, control and monitoring it was built without — no new machine, and no months of production lost to a rebuild.
            </p>

            {/* Bullet Points with Clean Crabster Orange Icons */}
            <div className="space-y-4 mb-9 max-w-2xl">
              {points.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5">
                    <Icon className="w-5 h-5 text-[#E87121] shrink-0 mt-1 stroke-[2]" />
                    <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed">
                      {pt.text}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
