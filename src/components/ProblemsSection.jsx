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
      className="page-section min-h-screen flex flex-col justify-center bg-white border-b border-gray-100 relative w-full"
    >
      {/* Full-bleed vertical layout: header top, grid fills remaining space */}
      <div className="flex flex-col flex-1 w-full h-full px-6 sm:px-10 lg:px-14 xl:px-20 py-16 lg:py-20">

        {/* Centered Header */}
        <div className="text-center mb-14 lg:mb-16">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#E87121] mb-5">
            WHERE IT USUALLY GOES WRONG
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-black text-gray-950 tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto">
            The same four problems,<br className="hidden sm:inline" /> in almost every plant we visit
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto font-normal">
            They get filed as staffing problems or maintenance problems for years. They are visibility problems — by the time the numbers exist, the shift is already over.
          </p>
        </div>

        {/* Full-width divider */}
        <div className="w-full border-t border-gray-200 mb-14 lg:mb-16" />

        {/* 2×2 Problems Grid — large, edge-to-edge, no boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full flex-1">
          {problems.map((item, index) => {
            const isLeft  = index % 2 === 0;
            const isTop   = index < 2;
            return (
              <div
                key={index}
                className={[
                  "flex flex-col items-center text-center px-8 sm:px-14 lg:px-20 py-12 lg:py-16",
                  isLeft  ? "md:border-r md:border-gray-200" : "",
                  isTop   ? "border-b border-gray-200"       : "",
                ].join(" ")}
              >
                <h3 className="text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-5xl font-extrabold text-gray-950 tracking-tight leading-[1.15] mb-5">
                  {item.titleLine1}
                  {item.titleLine2 && (
                    <>
                      <br />
                      {item.titleLine2}
                    </>
                  )}
                </h3>

                <p className="text-base sm:text-lg lg:text-xl text-gray-500 leading-relaxed font-normal max-w-md">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
