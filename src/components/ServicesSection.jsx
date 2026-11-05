import React from 'react';
import { Radio, Cpu, Gauge, Cog, ArrowRight } from 'lucide-react';

export default function ServicesSection({ onSelectService }) {
  const services = [
    {
      id: "iot",
      icon: Radio,
      title: "Industrial IoT & Edge Solutions",
      description:
        "Live data from machines that never had it: sensors, edge acquisition, remote monitoring and displays that show what each line is actually doing.",
      linkText: "Explore IoT solutions"
    },
    {
      id: "panels",
      icon: Cpu,
      title: "Automation Panel Boards",
      description:
        "Custom control panels designed, wired and tested in-house — motor and machine control, PLC integration, then assembly and commissioning on your floor.",
      linkText: "Explore panel boards"
    },
    {
      id: "process",
      icon: Gauge,
      title: "Process Automation",
      description:
        "Temperature, pressure and level control that holds itself, so a batch no longer depends on who is watching the gauge that shift.",
      linkText: "Explore process automation"
    },
    {
      id: "production",
      icon: Cog,
      title: "Production Automation",
      description:
        "Line and machine automation, material handling, and retrofits that bring existing equipment up to modern control without replacing it.",
      linkText: "Explore production automation"
    }
  ];

  return (
    <section 
      id="services" 
      className="flex flex-col justify-center bg-slate-50/70 border-b border-gray-100 relative px-6 sm:px-10 lg:px-14 xl:px-20 py-10 sm:py-12 w-full"
    >
      <div className="w-full flex flex-col justify-center">
        
        {/* Section Heading */}
        <div className="max-w-4xl mb-6 sm:mb-8">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E87121] mb-2">
            WHAT WE DO
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold text-gray-950 tracking-tight leading-tight">
            Four ways we modernise a plant
          </h2>
          <p className="mt-2.5 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl">
            Start with the one that matches your problem. Most projects end up combining two — sensors on the machines, and a panel or controller that acts on what they report.
          </p>
        </div>

        {/* 2x2 Gray Card Grid spanning full width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="bg-white hover:bg-orange-50/20 border border-gray-200 hover:border-orange-200 rounded-none p-8 sm:p-10 flex flex-col justify-between shadow-xs transition-all duration-200 group"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-none border border-orange-200/80 bg-orange-50/80 flex items-center justify-center text-[#E87121] shadow-xs mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-2xl sm:text-[1.65rem] font-bold text-gray-950 mb-3 tracking-tight group-hover:text-[#E87121] transition-colors">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 font-normal">
                    {svc.description}
                  </p>
                </div>

                {/* Explore Link -> Navigates to dedicated page, no popup */}
                <div className="pt-3 border-t border-gray-100">
                  <button
                    onClick={() => onSelectService(svc.id)}
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#E87121] hover:text-[#D45E12] group/link focus:outline-none cursor-pointer"
                  >
                    <span>{svc.linkText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
