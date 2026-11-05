import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function StatementBanner() {
  const scrollToNext = () => {
    document.getElementById('problems')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="mission" 
      className="page-section min-h-screen flex flex-col justify-center bg-[#09111E] text-white relative px-6 sm:px-10 lg:px-14 xl:px-20 py-20 overflow-hidden w-full"
    >
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-blue-700/10 blur-[140px] pointer-events-none"></div>

      <div className="w-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto text-center relative z-10 py-6">
          
          <div className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-400 mb-6 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/40">
            OUR PHILOSOPHY
          </div>

          {/* Core Statement Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[3.8rem] font-extrabold tracking-tight text-white leading-tight sm:leading-[1.18]">
            Industrial automation should not be reserved for large enterprises.
          </h2>

          {/* Narrative Description */}
          <p className="mt-8 text-slate-300 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto font-normal">
            Most of it is priced, sold and explained for plants ten times your size. We build it for the ones doing the actual work — sized to the problem, described in plain terms, and quoted so you can see what you are paying for.
          </p>

          {/* Action Link */}
          <div className="mt-10">
            <button
              onClick={scrollToNext}
              className="inline-flex items-center gap-2 text-base sm:text-lg font-medium text-slate-200 hover:text-white underline underline-offset-8 decoration-blue-500 hover:decoration-white transition-all group"
            >
              <span>How we work</span>
              <ArrowRight className="w-5 h-5 text-blue-400 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
