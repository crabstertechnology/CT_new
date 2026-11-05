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
      className="flex flex-col justify-center bg-white border-b border-gray-100 relative px-6 sm:px-10 lg:px-14 xl:px-20 py-20 w-full"
    >
      <div className="w-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Column: 4K Crisp Machine Photo (No overlay badge) */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-xl lg:max-w-none">
              <div className="overflow-hidden rounded-none shadow-xl border border-gray-200 bg-gray-100">
                <img
                  src="/assets/factory-machine-hd.jpg"
                  alt="Industrial Machinery Retrofit with Digital Operator Terminal"
                  className="w-full h-auto object-cover object-center max-h-[500px] xl:max-h-[560px]"
                  loading="eager"
                  onError={(e) => {
                    e.target.src = "/assets/factory-machine-4k.jpg";
                  }}
                />
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-gray-950 tracking-tight leading-tight mb-6 max-w-3xl">
              Modernise the machine you already own
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-normal mb-8 max-w-2xl">
              A fifteen-year-old line does not need replacing to behave like a newer one. We add the sensing, control and monitoring it was built without — no new machine, and no months of production lost to a rebuild.
            </p>

            {/* Bullet Points with Crabster Orange Icons */}
            <div className="space-y-4 mb-9 max-w-2xl">
              {points.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-none bg-orange-50 text-[#E87121] flex items-center justify-center shrink-0 mt-0.5 border border-orange-200">
                      <Icon className="w-4 h-4 stroke-[2]" />
                    </div>
                    <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed">
                      {pt.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Outlined Action Button */}
            <div>
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-gray-900 bg-white border border-gray-300 hover:border-[#E87121] hover:text-[#E87121] hover:bg-orange-50/40 active:scale-[0.98] rounded-none transition-all duration-150"
              >
                <span>How production automation works</span>
                <ArrowRight className="w-4 h-4 text-[#E87121]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
