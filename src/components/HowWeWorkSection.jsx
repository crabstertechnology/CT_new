import React from 'react';

export default function HowWeWorkSection() {
  const steps = [
    {
      number: "01",
      title: "Requirement study",
      description:
        "We walk the line with your team, watch how the work actually moves, and agree which problems are worth fixing first."
    },
    {
      number: "02",
      title: "Survey and scope",
      description:
        "Machine list, measurements and a written scope, with hardware, programming and commissioning priced separately."
    },
    {
      number: "03",
      title: "Design and build",
      description:
        "Panel design, embedded and IoT development, sensors and software, built and bench-tested in our workshop."
    },
    {
      number: "04",
      title: "Install and commission",
      description:
        "Work is scheduled around your production plan. Panels are fitted, sensors wired, systems tested live with your operators."
    },
    {
      number: "05",
      title: "Handover and support",
      description:
        "You keep the drawings, the code and access to your own data, with the same team to call when a machine behaves differently."
    }
  ];

  return (
    <section 
      id="how-we-work" 
      className="page-section min-h-screen flex flex-col justify-center bg-slate-50/70 border-b border-gray-100 relative px-6 sm:px-10 lg:px-14 xl:px-20 py-20 w-full"
    >
      <div className="w-full flex flex-col justify-center">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-14">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 mb-2.5">
            HOW WE WORK
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-gray-950 tracking-tight leading-tight">
            From the first walk round the plant to a running system
          </h2>
          <p className="mt-3.5 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl font-normal">
            Each stage ends with something you can check before the next one starts: a written scope, a panel design, a tested system.
          </p>
        </div>

        {/* Vertical Connected Timeline spanning full width */}
        <div className="relative pl-3 sm:pl-4 max-w-5xl">
          {/* Continuous vertical connecting line */}
          <div 
            className="absolute left-[22px] sm:left-[27px] top-5 bottom-8 w-[2px] bg-blue-200" 
            aria-hidden="true"
          />

          <div className="space-y-7 sm:space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex items-start gap-5 sm:gap-7 group">
                
                {/* Circular Numbered Badge */}
                <div className="relative z-10 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-blue-600 text-blue-700 text-sm sm:text-base font-bold shadow-xs shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                  {step.number}
                </div>

                {/* Content */}
                <div className="pt-0.5 flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-950 mb-1.5 group-hover:text-blue-900 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl font-normal">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
