import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Requirement study",
      tag: "On-Site Floor Assessment",
      image: "/assets/step-01-study.jpg",
      description:
        "We walk the line with your team, watch how the work actually moves, and agree which problems are worth fixing first."
    },
    {
      number: "02",
      title: "Survey and scope",
      tag: "Technical Specification & Drawings",
      image: "/assets/step-02-survey.jpg",
      description:
        "Machine list, measurements and a written scope, with hardware, programming and commissioning priced separately."
    },
    {
      number: "03",
      title: "Design and build",
      tag: "Workshop Panel Assembly & Testing",
      image: "/assets/step-03-design.jpg",
      description:
        "Panel design, embedded and IoT development, sensors and software, built and bench-tested in our workshop."
    },
    {
      number: "04",
      title: "Install and commission",
      tag: "Floor Wiring & Live Commissioning",
      image: "/assets/step-04-install.jpg",
      description:
        "Work is scheduled around your production plan. Panels are fitted, sensors wired, systems tested live with your operators."
    },
    {
      number: "05",
      title: "Handover and support",
      tag: "Operator Training & Complete Documentation",
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
            Each stage ends with something you can check before the next one starts: a written scope, a panel design, a tested system. Click each stage to inspect our engineering process.
          </p>
        </div>

        {/* 2-Column Interactive Split: Steps on Left, Interactive Stage Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start w-full">
          
          {/* Left Column: All Steps & Content */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="flex flex-col">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                const isLast = idx === steps.length - 1;

                return (
                  <div
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`flex items-start gap-4 sm:gap-6 p-4 -mx-4 rounded-none cursor-pointer transition-all duration-200 group ${
                      isActive 
                        ? 'bg-white shadow-sm border-l-4 border-l-[#E87121] pl-5' 
                        : 'hover:bg-orange-50/30'
                    }`}
                  >
                    {/* Timeline Column: Circle Badge + Centered Vertical Line */}
                    <div className="flex flex-col items-center shrink-0 self-stretch">
                      <div 
                        className={`relative z-10 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full text-sm sm:text-base font-bold shadow-xs transition-all duration-200 ${
                          isActive
                            ? 'bg-[#E87121] text-white ring-4 ring-orange-100 scale-105'
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
                    <div className={`pt-1 flex-1 ${!isLast ? 'pb-5 sm:pb-6' : 'pb-1'}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs uppercase font-bold tracking-wider ${
                          isActive ? 'text-[#E87121]' : 'text-gray-400 group-hover:text-[#E87121]'
                        }`}>
                          Stage {step.number} • {step.tag}
                        </span>
                      </div>

                      <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-1.5 transition-colors ${
                        isActive ? 'text-[#E87121]' : 'text-gray-950 group-hover:text-[#E87121]'
                      }`}>
                        {step.title}
                      </h3>

                      <p className="text-base text-gray-600 leading-relaxed font-normal">
                        {step.description}
                      </p>

                      {/* Small visual feedback when active */}
                      {isActive && (
                        <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-bold text-[#E87121]">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Currently viewing stage</span>
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Stage Image that updates when clicked */}
          <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-none shadow-xl border border-gray-200 bg-gray-950">
              
              {/* Image with subtle fade-in keying */}
              <div key={activeStep} className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden animate-in fade-in duration-300">
                <img
                  src={steps[activeStep].image}
                  alt={`${steps[activeStep].title} - Crabster Technology Process`}
                  className="w-full h-full object-cover object-center"
                />

                {/* Dark gradient overlay at bottom for high legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-7">
                  <div className="inline-block text-[11px] uppercase font-bold tracking-widest text-[#E87121] bg-black/60 backdrop-blur-xs px-2.5 py-1 mb-2 self-start border border-orange-500/30">
                    STAGE {steps[activeStep].number}
                  </div>
                  <h4 className="text-white text-xl sm:text-2xl font-extrabold tracking-tight mb-1">
                    {steps[activeStep].title}
                  </h4>
                  <p className="text-gray-300 text-xs sm:text-sm font-medium line-clamp-2">
                    {steps[activeStep].tag}
                  </p>
                </div>
              </div>

              {/* Bottom Quick Switcher Bar */}
              <div className="bg-[#0B1017] border-t border-gray-800 p-3 px-4 flex items-center justify-between text-xs text-gray-400">
                <span className="font-semibold text-gray-300">Stage {activeStep + 1} of 5</span>
                <div className="flex items-center gap-1.5">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`h-2 transition-all rounded-none ${
                        activeStep === i 
                          ? 'w-6 bg-[#E87121]' 
                          : 'w-2 bg-gray-700 hover:bg-gray-500'
                      }`}
                      aria-label={`Jump to stage ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
