import React, { useState } from 'react';
import { Radio, Cpu, Gauge, Cog, ArrowRight, CheckCircle2, X } from 'lucide-react';

export default function ServicesSection({ onOpenContact }) {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: "iot",
      icon: Radio,
      title: "Industrial IoT & Edge Solutions",
      description:
        "Live data from machines that never had it: sensors, edge acquisition, remote monitoring and displays that show what each line is actually doing.",
      linkText: "Explore IoT solutions",
      details: {
        highlights: [
          "Non-invasive sensor retrofits (current, vibration, temperature, counting)",
          "Floor-mounted TV / tablet displays for operators and supervisors",
          "Real-time OEE, line speed and cycle time calculations",
          "Automated WhatsApp / SMS alerts when machines exceed threshold tolerances"
        ],
        idealFor: "Factories with mixed-vintage machinery wanting live production visibility without replacing old equipment."
      }
    },
    {
      id: "panels",
      icon: Cpu,
      title: "Automation Panel Boards",
      description:
        "Custom control panels designed, wired and tested in-house — motor and machine control, PLC integration, then assembly and commissioning on your floor.",
      linkText: "Explore panel boards",
      details: {
        highlights: [
          "Complete electrical schematic design & CAD documentation",
          "MCC, VFD, Servo, and PLC automation panels built to industrial standards",
          "100% pre-tested in Coimbatore workshop prior to plant delivery",
          "Neat wire numbering, component tagging & standard spare parts sourcing"
        ],
        idealFor: "OEM machinery manufacturers and plants upgrading outdated, undocumented electrical cabinets."
      }
    },
    {
      id: "process",
      icon: Gauge,
      title: "Process Automation",
      description:
        "Temperature, pressure and level control that holds itself, so a batch no longer depends on who is watching the gauge that shift.",
      linkText: "Explore process automation",
      details: {
        highlights: [
          "Closed-loop PID temperature, pressure, fluid and flow regulation",
          "Batch recipe management with one-touch recipe recalls",
          "Automated valve actuation and safety interlocking",
          "Historical batch logging for quality control and compliance audits"
        ],
        idealFor: "Textile dyeing, chemical, food processing, rubber, casting, and thermal treatment facilities."
      }
    },
    {
      id: "production",
      icon: Cog,
      title: "Production Automation",
      description:
        "Line and machine automation, material handling, and retrofits that bring existing equipment up to modern control without replacing it.",
      linkText: "Explore production automation",
      details: {
        highlights: [
          "Custom mechanical pneumatic & hydraulic integration",
          "Part feeding, pick-and-place, and conveyor synchronization",
          "Integration of optical/proximity sensors for automatic defect rejection",
          "Upgrades from manual foot-pedals and pushbuttons to PLC control"
        ],
        idealFor: "Assembly lines, packaging units, and stamping operations eliminating labor bottlenecks."
      }
    }
  ];

  return (
    <section 
      id="services" 
      className="page-section min-h-screen flex flex-col justify-center bg-slate-50/70 border-b border-gray-100 relative px-6 sm:px-10 lg:px-14 xl:px-20 py-20 w-full"
    >
      <div className="w-full flex flex-col justify-center">
        
        {/* Section Heading */}
        <div className="max-w-4xl mb-12 sm:mb-14">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E87121] mb-2.5">
            WHAT WE DO
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-gray-950 tracking-tight leading-tight">
            Four ways we modernise a plant
          </h2>
          <p className="mt-3.5 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl">
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
                className="bg-white hover:bg-orange-50/20 border border-gray-200 hover:border-orange-200 rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-xs transition-all duration-200 group"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl border border-orange-200/80 bg-orange-50/80 flex items-center justify-center text-[#E87121] shadow-xs mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-2xl sm:text-[1.65rem] font-bold text-gray-950 mb-3 tracking-tight group-hover:text-[#E87121] transition-colors">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 font-normal">
                    {svc.description}
                  </p>
                </div>

                {/* Explore Link */}
                <div className="pt-3 border-t border-gray-100">
                  <button
                    onClick={() => setSelectedService(svc)}
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#E87121] hover:text-[#D45E12] group/link focus:outline-none"
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

      {/* Interactive Modal for Service Details */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1 rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#E87121] flex items-center justify-center border border-orange-200">
                <selectedService.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {selectedService.title}
              </h3>
            </div>

            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              {selectedService.description}
            </p>

            <div className="bg-slate-50 rounded-xl p-4 border border-gray-200/80 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#E87121] mb-3">
                Key Deliverables &amp; Engineering Scope
              </div>
              <ul className="space-y-2.5">
                {selectedService.details.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between gap-4 pt-2">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenContact();
                }}
                className="px-6 py-2.5 text-sm font-bold text-white bg-[#E87121] hover:bg-[#D45E12] rounded-md shadow-md shadow-orange-500/20"
              >
                Discuss this requirement
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
