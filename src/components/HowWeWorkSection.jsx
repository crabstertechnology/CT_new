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
      className="flex flex-col justify-center bg-slate-50/70 border-b border-gray-100 relative px-6 sm:px-10 lg:px-14 xl:px-20 py-10 sm:py-12 w-full"
    >
      <div className="w-full flex flex-col items-center justify-center">
        
        {/* Section Header - Centered */}
        <div className="max-w-3xl mb-8 sm:mb-10 text-center mx-auto">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E87121] mb-2.5">
            HOW WE WORK
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold text-gray-950 tracking-tight leading-tight mb-3">
            From the first walk round the plant to a running system
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Each stage ends with something you can check before the next one starts: a written scope, a panel design, a tested system.
          </p>
        </div>

        {/* Vertical Connected Timeline — Centered Block with Straight Line */}
        <div className="w-full max-w-2xl sm:max-w-3xl mx-auto">
          <div className="flex flex-col">
            {steps.map((step, idx) => {
              const isLast = idx === steps.length - 1;
              return (
                <div key={idx} className="flex items-start gap-5 sm:gap-7 group">
                  
                  {/* Timeline Column: Circle + Exactly Centered Vertical Line */}
                  <div className="flex flex-col items-center shrink-0 self-stretch">
                    {/* Circular Numbered Badge in Crabster Orange */}
                    <div className="relative z-10 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-[#E87121] text-[#E87121] text-sm sm:text-base font-bold shadow-xs group-hover:bg-[#E87121] group-hover:text-white transition-colors duration-200">
                      {step.number}
                    </div>

                    {/* Perfectly Centered Straight Vertical Line */}
                    {!isLast && (
                      <div 
                        className="w-[2px] bg-orange-200 flex-1 my-1" 
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`pt-1.5 flex-1 ${!isLast ? 'pb-6 sm:pb-7' : 'pb-0'}`}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-950 mb-1 group-hover:text-[#E87121] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl font-normal">
                      {step.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
