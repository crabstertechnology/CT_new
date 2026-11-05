import React from 'react';
import { AlertTriangle, Clock, ShieldAlert, Sliders } from 'lucide-react';

export default function ProblemsSection() {
  const problems = [
    {
      title: "Machines that stop without warning",
      description:
        "Breakdowns get discovered when the line halts. By then the shift, the batch or the delivery is already late, and the fault is diagnosed under pressure.",
      icon: AlertTriangle,
      tag: "Unplanned Downtime"
    },
    {
      title: "Production numbers arrive after the fact",
      description:
        "Output is counted by hand at the end of the shift. Nobody can see which machine is slowing down while there is still time to do something about it.",
      icon: Clock,
      tag: "Lagging Visibility"
    },
    {
      title: "Panels nobody wants to open",
      description:
        "Control systems added over the years, rarely documented, with spares you struggle to source. Every fault takes longer to trace than the last one.",
      icon: ShieldAlert,
      tag: "Legacy Controls"
    },
    {
      title: "Manual steps that scale with volume",
      description:
        "Loading, counting, checking and recording done by hand. Cost grows with every order you accept, and quality depends on who is on shift.",
      icon: Sliders,
      tag: "Labour Bottleneck"
    }
  ];

  return (
    <section 
      id="problems" 
      className="page-section min-h-screen flex flex-col justify-center bg-white border-b border-gray-100 relative px-6 sm:px-10 lg:px-14 xl:px-20 py-20 w-full"
    >
      <div className="w-full flex flex-col justify-center">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-14 sm:mb-16">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 mb-3">
            WHERE IT USUALLY GOES WRONG
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-gray-950 tracking-tight leading-tight">
            The same four problems, in almost every plant we visit
          </h2>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl">
            They get filed as staffing problems or maintenance problems for years. They are visibility problems — by the time the numbers exist, the shift is already over.
          </p>
        </div>

        {/* 2x2 Problems Grid spanning full width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 lg:gap-y-14 w-full">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="group p-6 sm:p-8 -mx-6 sm:-mx-8 rounded-2xl hover:bg-slate-50 transition-colors duration-200"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-[1.65rem] font-bold text-gray-950 group-hover:text-blue-900 transition-colors leading-snug mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
