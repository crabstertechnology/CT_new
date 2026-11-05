import React, { useState } from 'react';

export default function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Requirement study",
      image: "/assets/step-01-study.jpg",
      description:
        "We walk the line with your team, watch how the work actually moves, and agree which problems are worth fixing first."
    },
    {
      number: "02",
      title: "Survey and scope",
      image: "/assets/step-02-survey.jpg",
      description:
        "Machine list, measurements and a written scope, with hardware, programming and commissioning priced separately."
    },
    {
      number: "03",
      title: "Design and build",
      image: "/assets/step-03-design.jpg",
      description:
        "Panel design, embedded and IoT development, sensors and software, built and bench-tested in our workshop."
    },
    {
      number: "04",
      title: "Install and commission",
      image: "/assets/step-04-install.jpg",
      description:
        "Work is scheduled around your production plan. Panels are fitted, sensors wired, systems tested live with your operators."
    },
    {
      number: "05",
      title: "Handover and support",
      image: "/assets/step-05-support.jpg",
      description:
        "You keep the drawings, the code and access to your own data, with the same team to call when a machine behaves differently."
    }
  ];

  return (
    <section 
      id="how-we-work" 
      className="flex flex-col justify-center bg-slate-50/70 border-b border-gray-100 relative px-6 sm:px-10 lg:px-14 xl:px-20 py-12 sm:py-16 w-full"
    >
      <div className="w-full flex flex-col justify-center">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-12">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E87121] mb-2">
            HOW WE WORK
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold text-gray-950 tracking-tight leading-tight mb-3">
            From the first walk round the plant to a running system
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl font-normal">
            Each stage ends with something you can check before the next one starts: a written scope, a panel design, a tested system.
          </p>
        </div>

        {/* 2-Column Split: Straight Timeline on Left, Clean Stage Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start w-full">
          
          {/* Left Column: Straight Flow 1, 2, 3, 4, 5 */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="flex flex-col">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                const isLast = idx === steps.length - 1;

                return (
                  <div
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className="flex items-start gap-5 sm:gap-7 cursor-pointer group"
                  >
                    {/* Timeline Column: Circle + Centered Vertical Line in a Straight Line */}
                    <div className="flex flex-col items-center shrink-0 self-stretch">
                      <div 
                        className={`relative z-10 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full text-sm sm:text-base font-bold shadow-xs transition-colors duration-200 ${
                          isActive
                            ? 'bg-[#E87121] text-white border-2 border-[#E87121]'
                            : 'bg-white border-2 border-[#E87121] text-[#E87121] group-hover:bg-[#E87121] group-hover:text-white'
                        }`}
                      >
                        {step.number}
                      </div>

                      {!isLast && (
                        <div 
                          className="w-[2px] bg-orange-200 flex-1 my-1" 
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    {/* Step Details */}
                    <div className={`pt-1.5 flex-1 ${!isLast ? 'pb-7 sm:pb-8' : 'pb-0'}`}>
                      <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-1.5 transition-colors ${
                        isActive ? 'text-[#E87121]' : 'text-gray-950 group-hover:text-[#E87121]'
                      }`}>
                        {step.title}
                      </h3>

                      <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Clean Stage Image */}
          <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-none shadow-xl border border-gray-200 bg-gray-100">
              <div key={activeStep} className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden animate-in fade-in duration-200">
                <img
                  src={steps[activeStep].image}
                  alt={`${steps[activeStep].title} - Crabster Technology Process`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
