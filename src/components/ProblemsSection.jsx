import React from 'react';

export default function ProblemsSection() {
  const problems = [
    {
      titleLine1: "Machines that stop",
      titleLine2: "without warning",
      description:
        "Breakdowns get discovered when the line halts. By then the shift, the batch or the delivery is already late, and the fault is diagnosed under pressure."
    },
    {
      titleLine1: "Production numbers",
      titleLine2: "arrive after the fact",
      description:
        "Output is counted by hand at the end of the shift. Nobody can see which machine is slowing down while there is still time to do something about it."
    },
    {
      titleLine1: "Panels nobody wants to open",
      titleLine2: null,
      description:
        "Control systems added over the years, rarely documented, with spares you struggle to source. Every fault takes longer to trace than the last one."
    },
    {
      titleLine1: "Manual steps that",
      titleLine2: "scale with volume",
      description:
        "Loading, counting, checking and recording done by hand. Cost grows with every order you accept, and quality depends on who is on shift."
    }
  ];

  return (
    <section 
      id="problems" 
      className="page-section min-h-screen flex flex-col justify-center bg-white border-b border-gray-100 relative px-6 sm:px-10 lg:px-14 xl:px-20 py-24 w-full"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        
        {/* Centered Header matching attached design */}
        <div className="mb-16 sm:mb-20 text-center max-w-2xl mx-auto">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E87121] mb-4">
            WHERE IT USUALLY GOES WRONG
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-black text-gray-950 tracking-tight leading-[1.2] mb-5">
            The same four problems, in<br className="hidden sm:inline" /> almost every plant we visit
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl mx-auto font-normal">
            They get filed as staffing problems or maintenance problems for years. They are visibility problems — by the time the numbers exist, the shift is already over.
          </p>
        </div>

        {/* 2x2 Problems Grid - Centered text, clean typography, no boxes or icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 sm:gap-x-20 gap-y-14 sm:gap-y-16 w-full text-center">
          {problems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-md mx-auto">
              <h3 className="text-2xl sm:text-[1.65rem] font-extrabold text-gray-950 tracking-tight leading-tight mb-3 text-center">
                {item.titleLine1}
                {item.titleLine2 && (
                  <>
                    <br className="hidden sm:inline" />
                    {" "}{item.titleLine2}
                  </>
                )}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal max-w-sm text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
