import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function StatementBanner() {
  const scrollToNext = () => {
    document.getElementById('problems')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="mission" 
      className="flex flex-col justify-center bg-[#09111E] text-white relative px-6 sm:px-10 lg:px-14 xl:px-20 py-12 sm:py-14 overflow-hidden w-full"
    >
      {/* Background radial gradient with Crabster Orange tint */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#E87121]/15 blur-[150px] pointer-events-none"></div>

      <div className="w-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          {/* OUR PHILOSOPHY Badge in Crisp White with Sharp Corners */}
          <div className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-white mb-4 px-4 py-1.5 rounded-none bg-white/10 border border-white/20">
            OUR PHILOSOPHY
          </div>

          {/* Core Statement Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.4rem] font-extrabold tracking-tight text-white leading-tight sm:leading-[1.18] mb-4">
            Industrial automation should not be reserved for large enterprises.
          </h2>

          {/* Narrative Description */}
          <p className="mt-4 text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto font-normal text-justify">
            Most of it is priced, sold and explained for plants ten times your size. We build it for the ones doing the actual work — sized to the problem, described in plain terms, and quoted so you can see what you are paying for.
          </p>

          {/* Action Link */}
          <div className="mt-6">
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
