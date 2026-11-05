import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function StatementBanner() {
  const scrollToNext = () => {
    document.getElementById('problems')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="mission" 
      className="flex flex-col justify-center bg-[#09111E] text-white relative px-6 sm:px-10 lg:px-14 xl:px-20 py-20 sm:py-24 lg:py-28 overflow-hidden w-full"
    >
      {/* Background radial gradient with Crabster Orange tint */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#E87121]/15 blur-[150px] pointer-events-none"></div>

      <div className="w-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          {/* OUR PHILOSOPHY Badge in Crisp White with Sharp Corners */}
          <div className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-white mb-6 sm:mb-8 px-4 py-1.5 rounded-none bg-white/10 border border-white/20">
            OUR PHILOSOPHY
          </div>

          {/* Core Statement Heading - Balanced with comfortable line-height */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] font-black tracking-tight text-white leading-[1.25] sm:leading-[1.22] mb-6 sm:mb-8 max-w-4xl mx-auto">
            Industrial automation should not<br className="hidden md:inline" /> be reserved for large enterprises.
          </h2>

          {/* Narrative Description with Comfortable Line Spacing */}
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
            Most of it is priced, sold and explained for plants ten times your size. We build it for the ones doing the actual work — sized to the problem, described in plain terms, and quoted so you can see what you are paying for.
          </p>

          {/* Action Link */}
          <div className="mt-8 sm:mt-10">
            <button
              onClick={scrollToNext}
              className="inline-flex items-center gap-2 text-base sm:text-lg font-semibold text-slate-200 hover:text-white underline underline-offset-8 decoration-[#E87121] hover:decoration-white transition-all group rounded-none cursor-pointer"
            >
              <span>How we work</span>
              <ArrowRight className="w-5 h-5 text-[#E87121] transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
