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
      className="flex flex-col justify-center bg-white border-b border-gray-100 relative w-full overflow-hidden"
    >
      <div className="flex flex-col w-full px-6 sm:px-10 lg:px-14 xl:px-20 py-8 sm:py-10">

        {/* Centered Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#E87121] mb-2.5">
            WHERE IT USUALLY GOES WRONG
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-950 tracking-tight leading-[1.15] mb-3 max-w-3xl mx-auto">
            The same four problems, in almost every plant we visit
          </h2>

          <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl mx-auto font-normal text-justify">
            They get filed as staffing problems or maintenance problems for years. They are visibility problems — by the time the numbers exist, the shift is already over.
          </p>
        </div>

        {/* Thin divider */}
        <div className="w-full border-t border-gray-200 mb-6 sm:mb-8" />

        {/* 2×2 Grid — compact and neatly spaced */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          {problems.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isTop  = index < 2;
            return (
              <div
                key={index}
                className={[
                  "flex flex-col items-center text-center px-6 sm:px-10 lg:px-14 py-6 sm:py-8",
                  isLeft ? "md:border-r md:border-gray-200" : "",
                  isTop  ? "border-b border-gray-200"       : "",
                ].join(" ")}
              >
                <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-gray-950 tracking-tight leading-[1.2] mb-2.5">
                  {item.titleLine1}
                  {item.titleLine2 && (
                    <>
                      <br />
                      {item.titleLine2}
                    </>
                  )}
                </h3>

                <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal max-w-sm text-justify">
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
