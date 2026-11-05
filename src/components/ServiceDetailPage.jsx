import React, { useEffect, useState } from 'react';
import { ArrowLeft, CheckCircle2, Send, Cpu, Radio, Gauge, Cog, Phone, ShieldCheck, MapPin } from 'lucide-react';

const serviceDataMap = {
  iot: {
    id: "iot",
    icon: Radio,
    eyebrow: "INDUSTRIAL IOT & EDGE MONITORING",
    title: "Industrial IoT & Edge Solutions",
    subtitle: "Real-time visibility into machine uptime, cycle times, and floor bottlenecks without replacing existing machinery.",
    overview:
      "Most factories in Tamil Nadu run a mix of machine ages and brands. Our Industrial IoT solutions install non-invasively onto your existing machinery, pulling live operational data from lines that never had networking built-in. Within days, your operators and management gain clear, unambiguous shift visibility.",
    deliverables: [
      {
        title: "Non-Invasive Sensor Retrofits",
        desc: "Current CT clamps, vibration transmitters, optical piece counters, and temperature probes installed without cutting factory wiring."
      },
      {
        title: "Edge Gateways & Local Buffering",
        desc: "Ruggedized industrial micro-controllers that capture sensor signals locally with zero data loss during network drops."
      },
      {
        title: "Shop Floor TV & Tablet Dashboards",
        desc: "High-contrast visual displays installed on the floor showing live line output, target vs actuals, and running status."
      },
      {
        title: "Automated WhatsApp & SMS Alerts",
        desc: "Instant notifications sent directly to supervisors when a machine stops unexpectedly or drifts past operating tolerances."
      }
    ],
    sectors: ["Engineering & CNC Machining", "Textile Looms & Spinning", "Pumps & Motor Testing", "Injection Moulding"]
  },
  panels: {
    id: "panels",
    icon: Cpu,
    eyebrow: "CUSTOM CONTROL BOARDS & PLC INTEGRATION",
    title: "Automation Panel Boards",
    subtitle: "Custom-built, industrial-grade electrical and control panels designed, wired, and bench-tested in Coimbatore.",
    overview:
      "Stop fighting undocumented electrical cabinets with tangled wiring and obsolete components. We engineer fresh, clearly documented control panel boards tailored for your motors, drives, and machines. Every panel is 100% pre-tested in our Coimbatore workshop before it arrives on your floor.",
    deliverables: [
      {
        title: "Full CAD Schematics & Documentation",
        desc: "Complete electrical drawings, labeled wire ferrules, and component bill of materials so your maintenance team is never in the dark."
      },
      {
        title: "PLC, VFD & Servo Integration",
        desc: "Programming and enclosure integration for leading platforms (Siemens, Schneider, Delta, Mitsubishi, ABB) with clean cable routing."
      },
      {
        title: "Workshop Bench-Testing",
        desc: "100% pre-commissioning simulated under load in our Coimbatore workshop, reducing on-site downtime to hours instead of days."
      },
      {
        title: "Floor Commissioning & Training",
        desc: "Our engineers mount, terminate, and commission the board on your shift, training your technicians on fault identification."
      }
    ],
    sectors: ["OEM Machine Builders", "Textile Processing & Dyeing", "Foundries & Casting", "Food & Beverage Packaging"]
  },
  process: {
    id: "process",
    icon: Gauge,
    eyebrow: "CLOSED-LOOP REGULATION & BATCH CONTROL",
    title: "Process Automation",
    subtitle: "Automated temperature, pressure, and fluid control that eliminates human error and guarantees repeatable batch quality.",
    overview:
      "In processing facilities, a single batch variation can cause tens of thousands of rupees in scrapped output. Our process automation solutions take manual valve twisting and visual gauge watching out of the critical path, keeping your process variables within tight tolerances 24/7.",
    deliverables: [
      {
        title: "Closed-Loop PID Regulation",
        desc: "Self-correcting feedback loops for temperature, pressure, level, and flow that maintain target setpoints regardless of ambient drift."
      },
      {
        title: "Recipe Management Systems",
        desc: "One-touch recipe recalls on operator touchscreens (HMI) ensuring consistent parameters shift after shift."
      },
      {
        title: "Pneumatic & Actuated Valve Sequencing",
        desc: "Automated valve manifolds and safety interlocking to prevent cross-contamination and catastrophic over-pressure events."
      },
      {
        title: "Audit & Compliance Logging",
        desc: "Time-stamped historical process records stored locally for customer compliance, audit inspection, and QA tracking."
      }
    ],
    sectors: ["Textile Dyeing & Yarn Finishing", "Chemical & Adhesive Processing", "Rubber Vulcanization", "Food & Dairy Processing"]
  },
  production: {
    id: "production",
    icon: Cog,
    eyebrow: "MACHINE RETROFITS & LINE HANDLING",
    title: "Production Automation",
    subtitle: "Upgrading existing manual machinery with automated feeding, motion control, and safety systems.",
    overview:
      "You do not need to replace a reliable mechanical press, lathe, or packaging line just to achieve modern cycle speeds. We retrofit modern sensors, pneumatic actuation, and automated handling onto your existing lines, cutting cycle times and eliminating labor bottlenecks.",
    deliverables: [
      {
        title: "Part Feeding & Pick-and-Place",
        desc: "Pneumatic and motorized indexers that load and eject components automatically, keeping machine uptime constant."
      },
      {
        title: "Defect Detection & Rejection",
        desc: "Proximity, optical, and vision sensors that detect missing components or dimensions and reject faulty parts immediately."
      },
      {
        title: "Pushbutton to PLC Upgrades",
        desc: "Modernizing manual levers and foot-pedals into synchronized automated cycles with dual-hand safety interlocks."
      },
      {
        title: "Conveyor Synchronization",
        desc: "Line tracking and speed matching between consecutive workstations to eliminate floor accumulation bottlenecks."
      }
    ],
    sectors: ["Automotive Ancillary Components", "Stamping & Sheet Metal", "Plastic Injection Moulding", "Assembly Units"]
  }
};

export default function ServiceDetailPage({ serviceId, onBack, onNavigateService }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    message: ''
  });

  const service = serviceDataMap[serviceId] || serviceDataMap.iot;
  const Icon = service.icon;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans w-full">
      
      {/* Top Header Navigation Bar */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 w-full px-6 sm:px-10 lg:px-14 xl:px-20 py-4">
        <div className="flex items-center justify-between w-full">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-[#E87121] transition-colors py-1.5 px-3 rounded-none hover:bg-orange-50/50 group"
          >
            <ArrowLeft className="w-4 h-4 text-[#E87121] transition-transform group-hover:-translate-x-1" />
            <span>Back to Overview</span>
          </button>

          <div className="text-xs font-bold uppercase tracking-wider text-gray-400 hidden sm:block">
            Crabster Technology — Coimbatore
          </div>
        </div>
      </div>

      {/* Hero Section of Service Detail */}
      <section className="pt-12 pb-16 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-gray-100 bg-slate-50/60">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E87121] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E87121]"></span>
            <span>{service.eyebrow}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-tight mb-5">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl font-medium mb-6">
            {service.subtitle}
          </p>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-4xl font-normal">
            {service.overview}
          </p>
        </div>
      </section>

      {/* Engineering Deliverables Grid */}
      <section className="py-20 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-gray-100">
        <div className="w-full">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#E87121] mb-2">
              ENGINEERING SCOPE
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-950 tracking-tight">
              What we build and commission on your floor
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {service.deliverables.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white border border-gray-200/90 rounded-none p-8 hover:border-orange-300 hover:bg-orange-50/20 transition-all shadow-xs flex items-start gap-4"
              >
                <CheckCircle2 className="w-5 h-5 text-[#E87121] shrink-0 mt-0.5 stroke-[2]" />
                <div>
                  <h3 className="text-xl font-bold text-gray-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Industry Applications in Tamil Nadu */}
          <div className="mt-14 p-8 rounded-none bg-slate-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#E87121] mb-1">
                Typical Applications in Tamil Nadu
              </div>
              <div className="text-lg font-bold text-white">
                Proven across South India's manufacturing clusters:
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {service.sectors.map((sec, i) => (
                <span key={i} className="px-3.5 py-1.5 rounded-full bg-white/10 text-xs sm:text-sm font-semibold text-slate-200 border border-white/10">
                  {sec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Direct On-Page Enquiry & Consultation Form (No Popup!) */}
      <section className="py-20 px-6 sm:px-10 lg:px-14 xl:px-20 bg-slate-50/70 border-b border-gray-100">
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-none p-8 sm:p-12 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-[#E87121] mb-2">
              DISCUSS THIS SOLUTION
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
              Talk directly with a Crabster automation engineer
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              No sales reps or call centers. An engineer in Coimbatore will review your machine specifications.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-orange-100 text-[#E87121] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Requirement Received</h3>
              <p className="text-base text-gray-600 max-w-md mx-auto mb-6">
                Thank you! We have received your query for {service.title}. An engineer will reach out to you directly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', phone: '', company: '', message: '' });
                }}
                className="px-6 py-2.5 text-sm font-bold text-[#E87121] hover:underline"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-none focus:ring-2 focus:ring-[#E87121] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-none focus:ring-2 focus:ring-[#E87121] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-1.5">
                  Factory / Company Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Engineering Works"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-none focus:ring-2 focus:ring-[#E87121] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-1.5">
                  Machine Details or Problem on Floor
                </label>
                <textarea
                  rows="3"
                  placeholder="Describe your current setup, machine make, or what you want to achieve..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-none focus:ring-2 focus:ring-[#E87121] outline-none resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <MapPin className="w-4 h-4 text-[#E87121]" />
                  <span>On-site assessments across Tamil Nadu</span>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 text-sm font-bold text-white bg-[#E87121] hover:bg-[#D45E12] active:scale-[0.98] rounded-none shadow-md shadow-orange-500/25 transition-all inline-flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Requirement</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Switch to Other Services */}
      <section className="py-16 px-6 sm:px-10 lg:px-14 xl:px-20 bg-white">
        <div className="w-full">
          <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
            Explore Other Capabilities
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Object.values(serviceDataMap).map((s) => (
              <button
                key={s.id}
                onClick={() => onNavigateService(s.id)}
                className={`p-4 rounded-none border text-left transition-all ${
                  s.id === service.id
                    ? 'border-[#E87121] bg-orange-50/40 text-gray-950 font-bold'
                    : 'border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-950 font-medium'
                }`}
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-[#E87121] mb-1">
                  Service
                </div>
                <div className="text-sm font-bold leading-tight">
                  {s.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
