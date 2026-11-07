import React, { useEffect, useState } from 'react';
import SEO from './SEO';
import { 
  ArrowLeft, CheckCircle2, Send, Cpu, Radio, Gauge, Cog, 
  Phone, ShieldCheck, MapPin, ArrowRight, Zap, FileText, 
  Settings, Clock, Award, Check, Loader2, AlertCircle
} from 'lucide-react';

const seoMap: Record<string, { title: string; description: string; keywords: string; image: string }> = {
  iot: {
    title: "Industrial IoT & Floor Visibility Dashboards | Crabster Technology Coimbatore",
    description: "Real-time visibility into machine uptime, cycle times, and floor bottlenecks without replacing machinery. Edge hardware & live floor TV dashboards in Tamil Nadu.",
    keywords: "Industrial IoT Coimbatore, IIoT Tamil Nadu, shop floor dashboards, machine downtime tracking, OEE monitoring, non-invasive sensors",
    image: "https://www.crabstertech.in/assets/step-01-study.jpg"
  },
  panels: {
    title: "Automation Panel Boards & PLC Integration | Crabster Technology Coimbatore",
    description: "Custom-built industrial-grade electrical & automation control panels. CAD design, wiring, PLC programming, and full bench testing in Coimbatore.",
    keywords: "Automation panel boards Coimbatore, PLC control panels, VFD control cabinets, electrical automation panel, motor control centers Tamil Nadu",
    image: "https://www.crabstertech.in/assets/control-panel-hd.jpg"
  },
  process: {
    title: "Process Automation & Batch Control Systems | Crabster Technology",
    description: "Automated temperature, pressure, and fluid regulation that eliminates human error and guarantees repeatable batch consistency across Tamil Nadu.",
    keywords: "Process automation Tamil Nadu, batch process control, PID temperature controller, CIP automation, chemical plant automation Coimbatore",
    image: "https://www.crabstertech.in/assets/step-03-design.jpg"
  },
  production: {
    title: "Production Automation & Machine Retrofits | Crabster Technology Coimbatore",
    description: "Upgrade existing manual machinery with automated feeding, motion control, and safety systems. Cut cycle times by 30-50% without buying new machines.",
    keywords: "Machine retrofit Coimbatore, line automation, hydraulic press retrofit, automated part handling, plant modernisation Tamil Nadu",
    image: "https://www.crabstertech.in/assets/factory-machine-hd.jpg"
  }
};

const serviceDataMap = {
  iot: {
    id: "iot",
    icon: Radio,
    eyebrow: "INDUSTRIAL IOT & FLOOR VISIBILITY",
    title: "Industrial IoT & Edge Solutions",
    subtitle: "Real-time visibility into machine uptime, cycle times, and floor bottlenecks without replacing existing machinery.",
    overview:
      "Most factories in Tamil Nadu run a mix of machine ages and brands. Our Industrial IoT solutions install non-invasively onto your existing machinery, pulling live operational data from lines that never had networking built-in. Within days, your operators and management gain clear, unambiguous shift visibility.",
    image: "/assets/step-01-study.jpg",
    badge: "Edge Hardware + Live Cloud / Floor TV",
    stats: [
      { label: "Deployment Time", value: "2–4 Days", sub: "Non-invasive installation" },
      { label: "Machine Compatibility", value: "100%", sub: "Works with legacy & new lines" },
      { label: "Data Reliability", value: "99.9%", sub: "Local buffer on edge gateway" },
      { label: "Alert Latency", value: "< 5 Sec", sub: "Instant WhatsApp & SMS dispatch" }
    ],
    deliverables: [
      {
        num: "01",
        title: "Non-Invasive Sensor Retrofits",
        desc: "Current CT clamps, vibration transmitters, optical piece counters, and temperature probes installed without cutting factory wiring or voiding OEM warranties.",
        specs: "Current CTs • Hall effect sensors • Optical counters • RTD probes"
      },
      {
        num: "02",
        title: "Edge Gateways & Local Buffering",
        desc: "Ruggedized industrial micro-controllers that capture sensor signals locally with zero data loss during network drops or power flickers.",
        specs: "DIN-rail mounted • RS485 / Modbus • Dual-band Wi-Fi • Offline flash storage"
      },
      {
        num: "03",
        title: "Shop Floor TV & Tablet Dashboards",
        desc: "High-contrast visual displays installed on the floor showing live line output, target vs actuals, cycle drift, and machine running status.",
        specs: "High-visibility Android TV apps • Real-time websockets • Shift breakdown logs"
      },
      {
        num: "04",
        title: "Automated WhatsApp & SMS Alerts",
        desc: "Instant notifications sent directly to supervisors and maintenance leads when a machine stops unexpectedly or drifts past operating tolerances.",
        specs: "Configurable alert rules • Escalation matrix • Shift summary reports"
      }
    ],
    process: [
      { step: "01", title: "Floor Walk & Sensor Selection", desc: "We identify non-invasive attachment points for sensors on your running lines." },
      { step: "02", title: "Edge Hardware Assembly", desc: "Gateways programmed and bench-tested in our Coimbatore workshop." },
      { step: "03", title: "Floor Mounting & Wiring", desc: "Fitted around your shift schedule with zero unplanned stoppage." },
      { step: "04", title: "Dashboard & Alert Setup", desc: "Live screens configured and operator training delivered on your floor." }
    ],
    sectors: [
      { name: "Engineering & CNC Machining", useCase: "Spindle runtime, cycle count & tool wear tracking" },
      { name: "Textile Looms & Spinning", useCase: "Loom stop detection, shift hank production & motor current" },
      { name: "Pumps & Motor Testing", useCase: "Electrical load, voltage drift & automated test-bench logging" },
      { name: "Plastics & Injection Moulding", useCase: "Cycle time drift, shot counting & heater temperature monitoring" }
    ]
  },
  panels: {
    id: "panels",
    icon: Cpu,
    eyebrow: "CUSTOM CONTROL BOARDS & PLC INTEGRATION",
    title: "Automation Panel Boards",
    subtitle: "Custom-built, industrial-grade electrical and control panels designed, wired, and bench-tested in Coimbatore.",
    overview:
      "Stop fighting undocumented electrical cabinets with tangled wiring and obsolete components. We engineer fresh, clearly documented control panel boards tailored for your motors, drives, and machines. Every panel is 100% pre-tested in our Coimbatore workshop before it arrives on your floor.",
    image: "/assets/control-panel-hd.jpg",
    badge: "100% In-House CAD Design & Bench Testing",
    stats: [
      { label: "Testing Standard", value: "100%", sub: "Full simulated load pre-test" },
      { label: "Component Sourcing", value: "Tier-1", sub: "Siemens, Schneider, Delta, ABB" },
      { label: "Documentation", value: "Complete", sub: "Full schematics & wire ferrule chart" },
      { label: "Commissioning Downtime", value: "< 6 Hrs", sub: "Plug-and-play installation" }
    ],
    deliverables: [
      {
        num: "01",
        title: "Full CAD Schematics & Documentation",
        desc: "Complete electrical drawings, labeled wire ferrules, and component bill of materials so your maintenance team is never in the dark.",
        specs: "AutoCAD Electrical drawings • Terminal strip diagrams • Color-coded ferrule chart"
      },
      {
        num: "02",
        title: "PLC, VFD & Servo Integration",
        desc: "Programming and enclosure integration for leading platforms with clean cable routing, active cooling, and noise isolation.",
        specs: "Siemens S7-1200 • Delta DVP/AS • Schneider Modicon • Mitsubishi FX"
      },
      {
        num: "03",
        title: "Workshop Bench-Testing",
        desc: "100% pre-commissioning simulated under load in our Coimbatore workshop, reducing on-site downtime to hours instead of days.",
        specs: "I/O point-to-point verification • Motor dry runs • Safety relay sequence testing"
      },
      {
        num: "04",
        title: "Floor Commissioning & Training",
        desc: "Our engineers mount, terminate, and commission the board on your shift, training your technicians on fault identification.",
        specs: "On-site termination • Operator HMI walkthrough • Spare parts recommendations"
      }
    ],
    process: [
      { step: "01", title: "Line Audit & Load Study", desc: "Measuring motor ratings, duty cycles, and floor space constraints." },
      { step: "02", title: "CAD Schematic Design", desc: "Full electrical drafting with component approvals from your team." },
      { step: "03", title: "Workshop Build & Bench Test", desc: "Neat routing, ferruled terminations, and complete simulated load test." },
      { step: "04", title: "Floor Mounting & Handover", desc: "Installed, terminated, live-tested, and documentation handed over." }
    ],
    sectors: [
      { name: "OEM Machine Builders", useCase: "Turnkey control panels built to repeatable machine specifications" },
      { name: "Textile Processing & Dyeing", useCase: "IP-rated stainless panels with temperature and valve logic" },
      { name: "Foundries & Casting", useCase: "Heavy-duty dust-sealed motor control centers and VFD panels" },
      { name: "Food & Beverage Packaging", useCase: "Sanitary stainless enclosures with high-speed indexing PLC" }
    ]
  },
  process: {
    id: "process",
    icon: Gauge,
    eyebrow: "CLOSED-LOOP REGULATION & BATCH CONTROL",
    title: "Process Automation",
    subtitle: "Automated temperature, pressure, and fluid control that eliminates human error and guarantees repeatable batch quality.",
    overview:
      "In processing facilities, a single batch variation can cause tens of thousands of rupees in scrapped output. Our process automation solutions take manual valve twisting and visual gauge watching out of the critical path, keeping your process variables within tight tolerances 24/7.",
    image: "/assets/step-03-design.jpg",
    badge: "Closed-Loop PID Control & Recipe Management",
    stats: [
      { label: "Batch Consistency", value: "±0.5%", sub: "Automated PID tolerance" },
      { label: "Scrap Reduction", value: "Up to 80%", sub: "Eliminates operator timing errors" },
      { label: "Recipe Memory", value: "99+ Recipes", sub: "One-touch parameter recall" },
      { label: "Audit Logging", value: "100%", sub: "Time-stamped process records" }
    ],
    deliverables: [
      {
        num: "01",
        title: "Closed-Loop PID Regulation",
        desc: "Self-correcting feedback loops for temperature, pressure, level, and flow that maintain target setpoints regardless of ambient drift.",
        specs: "Autotuned PID algorithms • SSR / SCR power controllers • Modulating valves"
      },
      {
        num: "02",
        title: "Recipe Management Systems",
        desc: "One-touch recipe recalls on operator touchscreens (HMI) ensuring consistent parameters shift after shift.",
        specs: "Multi-step temperature ramp-and-soak • Password-protected parameter editing"
      },
      {
        num: "03",
        title: "Pneumatic & Actuated Valve Sequencing",
        desc: "Automated valve manifolds and safety interlocking to prevent cross-contamination and catastrophic over-pressure events.",
        specs: "Pneumatic solenoid racks • Limit-switch position feedback • Safety interlocks"
      },
      {
        num: "04",
        title: "Audit & Compliance Logging",
        desc: "Time-stamped historical process records stored locally for customer compliance, audit inspection, and QA tracking.",
        specs: "CSV data export via USB • Hourly trend charts • Alarm history logs"
      }
    ],
    process: [
      { step: "01", title: "Thermal & Flow Analysis", desc: "Assessing tank volumes, thermal lag, and valve actuation points." },
      { step: "02", title: "Instrument Specification", desc: "Selecting industrial RTDs, pressure transmitters, and control valves." },
      { step: "03", title: "Controller Programming", desc: "Coding PID loops, safety bounds, and touch HMI recipe screens." },
      { step: "04", title: "Water / Live Material Tuning", desc: "Tuning PID parameters under actual operating conditions." }
    ],
    sectors: [
      { name: "Textile Dyeing & Yarn Finishing", useCase: "Automated liquor ratio, bath temperature ramping & drain sequences" },
      { name: "Chemical & Adhesive Processing", useCase: "Exothermic reaction temperature control & dosing valve automation" },
      { name: "Rubber Vulcanization", useCase: "Platen steam pressure regulation, cure timers & automated degas" },
      { name: "Food & Dairy Processing", useCase: "Pasteurization holding times, CIP sequencing & tank level control" }
    ]
  },
  production: {
    id: "production",
    icon: Cog,
    eyebrow: "MACHINE RETROFITS & LINE HANDLING",
    title: "Production Automation",
    subtitle: "Upgrading existing manual machinery with automated feeding, motion control, and safety systems.",
    overview:
      "You do not need to replace a reliable mechanical press, lathe, or packaging line just to achieve modern cycle speeds. We retrofit modern sensors, pneumatic actuation, and automated handling onto your existing lines, cutting cycle times and eliminating labor bottlenecks.",
    image: "/assets/factory-machine-hd.jpg",
    badge: "Retrofits for Existing Lines Without Machine Replacement",
    stats: [
      { label: "Cycle Time Drop", value: "30–50%", sub: "Automated loading & ejection" },
      { label: "Capital Saved", value: "70%+", sub: "Compared to buying new machinery" },
      { label: "Safety Compliance", value: "Dual-Hand", sub: "Optical curtains & safety relays" },
      { label: "Downtime During Retrofit", value: "1–3 Days", sub: "Pre-fabricated mounting brackets" }
    ],
    deliverables: [
      {
        num: "01",
        title: "Part Feeding & Pick-and-Place",
        desc: "Pneumatic and motorized indexers that load and eject components automatically, keeping machine uptime constant.",
        specs: "Pneumatic rodless cylinders • Vacuum grippers • Linear guide rails"
      },
      {
        num: "02",
        title: "Defect Detection & Rejection",
        desc: "Proximity, optical, and vision sensors that detect missing components or dimensions and reject faulty parts immediately.",
        specs: "Fiber-optic presence sensors • Auto-rejection air blast • Reject bin verification"
      },
      {
        num: "03",
        title: "Pushbutton to PLC Upgrades",
        desc: "Modernizing manual levers and foot-pedals into synchronized automated cycles with dual-hand safety interlocks.",
        specs: "Optical light curtains • Safety relays • Multi-mode operator selector"
      },
      {
        num: "04",
        title: "Conveyor Synchronization",
        desc: "Line tracking and speed matching between consecutive workstations to eliminate floor accumulation bottlenecks.",
        specs: "VFD speed tracking • Optical queue sensors • Indexing stopper gates"
      }
    ],
    process: [
      { step: "01", title: "Motion & Cycle Study", desc: "Timing operator movements and identifying manual bottlenecks on the line." },
      { step: "02", title: "Mechanical CAD & Brackets", desc: "Designing custom mounting brackets that bolt to existing machine frames." },
      { step: "03", title: "Electrical & Pneumatic Assembly", desc: "Pre-wiring control box and manifold assemblies in Coimbatore." },
      { step: "04", title: "Floor Retrofit & Shift Handover", desc: "Bolting hardware, testing cycle interlocks, and training floor operators." }
    ],
    sectors: [
      { name: "Automotive Ancillary Components", useCase: "Automated press loading, part seating verification & air ejection" },
      { name: "Stamping & Sheet Metal", useCase: "Strip feeder synchronization, die protection & dual-hand safety" },
      { name: "Plastic Injection Moulding", useCase: "Sprue picking robots, conveyor takeoff & part sorting gates" },
      { name: "Assembly Units", useCase: "Semi-automated screw driving, torque verification & pass/fail marking" }
    ]
  }
};

export default function ServiceDetailPage({ serviceId, onBack, onNavigateService }: { serviceId: string; onBack: () => void; onNavigateService: (id: string) => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const service = serviceDataMap[serviceId as keyof typeof serviceDataMap] || serviceDataMap.iot;
  const Icon = service.icon;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          description: `[Requirement for ${service.title}]\nCompany: ${formData.company}\nDetails / Problem:\n${formData.message}`,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit requirement');
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error('Error submitting requirement:', err);
      setErrorMessage(err.message || 'Something went wrong while sending your requirement.');
    } finally {
      setLoading(false);
    }
  };

  const scrollToEnquiry = () => {
    document.getElementById('service-enquiry')?.scrollIntoView({ behavior: 'smooth' });
  };

  const seoData = seoMap[serviceId] || seoMap.iot;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "serviceType": service.eyebrow,
    "description": seoData.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Crabster Technology",
      "url": "https://www.crabstertech.in",
      "telephone": "+91 98765 43210",
      "email": "crabstertech@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Tamil Nadu"
    },
    "url": `https://www.crabstertech.in/#service-${serviceId}`
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans w-full">
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl={`https://www.crabstertech.in/#service-${serviceId}`}
        image={seoData.image}
        jsonLd={jsonLd}
      />
      
      {/* 1. Sub-Header Navigation & Breadcrumbs */}
      <div className="bg-[#09111E] border-b border-gray-800 text-gray-300 w-full px-6 sm:px-10 lg:px-14 xl:px-20 py-3.5">
        <div className="flex items-center justify-between w-full text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 font-bold text-gray-300 hover:text-[#E87121] transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 text-[#E87121] transition-transform group-hover:-translate-x-1" />
              <span>All Capabilities</span>
            </button>
            <span className="text-gray-600">/</span>
            <span className="text-gray-400 font-medium hidden sm:inline">Services</span>
            <span className="text-gray-600 hidden sm:inline">/</span>
            <span className="text-[#E87121] font-semibold">{service.title}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-gray-300">Coimbatore Workshop Available</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Section: High-Impact Industrial Layout */}
      <section className="bg-[#09111E] text-white pt-10 pb-16 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-gray-800 relative overflow-hidden w-full">
        {/* Ambient Orange Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#E87121]/10 blur-[130px] pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full relative z-10">
          
          {/* Left Column: Technical Narrative & Actions */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Category Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E87121] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E87121]"></span>
              <span>{service.eyebrow}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black text-white tracking-tight leading-[1.12] mb-4">
              {service.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed mb-5">
              {service.subtitle}
            </p>

            {/* Full Technical Overview */}
            <p className="text-base text-gray-400 leading-relaxed font-normal mb-8 max-w-2xl">
              {service.overview}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToEnquiry}
                className="px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-[#E87121] hover:bg-[#D45E12] active:scale-[0.98] rounded-none shadow-md shadow-orange-500/20 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Discuss Floor Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+917010396642"
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-gray-200 bg-white/5 border border-gray-700 hover:border-[#E87121] hover:text-white rounded-none transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#E87121]" />
                <span>+91 70103 96642</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="relative overflow-hidden rounded-none shadow-2xl border border-gray-800 bg-gray-900 group">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Card Ribbon */}
              <div className="p-5 bg-gradient-to-t from-black via-black/95 to-black/80 border-t border-gray-800">
                <div className="text-xs uppercase font-bold tracking-wider text-[#E87121] mb-1">
                  Crabster Delivery Guarantee
                </div>
                <div className="text-sm font-semibold text-gray-200">
                  {service.badge}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Engineering Stats Row */}
        <div className="mt-14 pt-8 border-t border-gray-800/90 grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {service.stats.map((st, i) => (
            <div key={i} className="border-l-2 border-[#E87121] pl-4">
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {st.value}
              </div>
              <div className="text-xs font-bold text-gray-300 uppercase tracking-wider mt-0.5">
                {st.label}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">
                {st.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Detailed Deliverables Section */}
      <section className="py-14 sm:py-16 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-gray-100 bg-white">
        <div className="w-full">
          <div className="max-w-3xl mb-10">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E87121] mb-2">
              TECHNICAL DELIVERABLES
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">
              What we build, test and commission on your floor
            </h2>
            <p className="text-base text-gray-600 mt-2 font-normal">
              Every deliverable ends with tangible hardware and code you fully own — with no ongoing licensing locks.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {service.deliverables.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white border border-gray-200 rounded-none p-7 sm:p-8 hover:border-orange-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-[#E87121] uppercase tracking-widest bg-orange-50 px-2.5 py-1 border border-orange-200">
                      Deliverable {item.num}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-[#E87121]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-950 mb-3 tracking-tight group-hover:text-[#E87121] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-base text-gray-600 leading-relaxed font-normal mb-5">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Technical Specifications
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-gray-700">
                    {item.specs}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Engineering Process Flow */}
      <section className="py-14 sm:py-16 px-6 sm:px-10 lg:px-14 xl:px-20 bg-slate-50/70 border-b border-gray-100">
        <div className="w-full">
          <div className="max-w-3xl mb-10">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E87121] mb-2">
              DELIVERY WORKFLOW
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">
              From requirement walk to signed commissioning
            </h2>
            <p className="text-base text-gray-600 mt-2 font-normal">
              Structured engineering steps managed by our Coimbatore engineering team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((pr, i) => (
              <div key={i} className="bg-white border border-gray-200 p-6 rounded-none relative">
                <div className="text-3xl font-black text-orange-200 mb-3">
                  {pr.step}
                </div>
                <h4 className="text-lg font-bold text-gray-950 mb-2">
                  {pr.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {pr.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Target Floor Applications & Tamil Nadu Clusters */}
      <section className="py-14 sm:py-16 px-6 sm:px-10 lg:px-14 xl:px-20 bg-white border-b border-gray-100">
        <div className="w-full">
          <div className="max-w-3xl mb-8">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E87121] mb-2">
              PROVEN USE CASES
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">
              Where this solution runs across Tamil Nadu
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.sectors.map((sec, i) => (
              <div key={i} className="p-6 bg-slate-50 border border-gray-200 rounded-none hover:border-[#E87121] transition-all">
                <div className="text-xs font-bold text-[#E87121] uppercase tracking-wider mb-2">
                  Sector {i + 1}
                </div>
                <h4 className="text-lg font-bold text-gray-950 mb-2">
                  {sec.name}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {sec.useCase}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. On-Page Engineering Enquiry & Consultation Form */}
      <section id="service-enquiry" className="py-16 px-6 sm:px-10 lg:px-14 xl:px-20 bg-slate-900 text-white border-b border-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
          
          {/* Left Column: Direct Consultation Contact Context */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E87121] mb-2">
              START A CONVERSATION
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              Discuss this with an engineer in Coimbatore
            </h2>
            <p className="text-base text-gray-400 leading-relaxed mb-6">
              Share the machine make, line bottleneck, or what you want to achieve. A Crabster engineer will review and respond with specific technical advice.
            </p>

            <div className="space-y-4 pt-2 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#E87121] shrink-0" />
                <div>
                  <div className="text-xs text-gray-400">Direct Engineer Line</div>
                  <a href="tel:+917010396642" className="text-base font-bold text-white hover:text-[#E87121]">
                    +91 70103 96642
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#E87121] shrink-0" />
                <div>
                  <div className="text-xs text-gray-400">Workshop &amp; Engineering Office</div>
                  <div className="font-medium text-white">Veerapandi, Coimbatore – 641019, Tamil Nadu</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#E87121] shrink-0" />
                <div>
                  <div className="text-xs text-gray-400">Engineering Response SLA</div>
                  <div className="font-medium text-white">Within 4 working hours for Tamil Nadu plants</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Sharp Form */}
          <div className="lg:col-span-7 xl:col-span-7 bg-white text-gray-900 p-8 sm:p-10 rounded-none shadow-2xl">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 rounded-none">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-950 mb-2">Requirement Received</h3>
                <p className="text-base text-gray-600 max-w-md mx-auto mb-6">
                  Thank you! We have received your query for <span className="font-bold text-[#E87121]">{service.title}</span>. An engineer will reach out to you directly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
                  }}
                  className="px-6 py-2.5 text-sm font-bold text-[#E87121] hover:underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-lg font-bold text-gray-950 mb-2">
                  Send Requirement for {service.title}
                </div>

                {errorMessage && (
                  <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-800 p-3 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={loading}
                      className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-none focus:border-[#E87121] focus:ring-1 focus:ring-[#E87121] outline-none disabled:opacity-60"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={loading}
                      className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-none focus:border-[#E87121] focus:ring-1 focus:ring-[#E87121] outline-none disabled:opacity-60"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      disabled={loading}
                      className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-none focus:border-[#E87121] focus:ring-1 focus:ring-[#E87121] outline-none disabled:opacity-60"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1.5">
                      Factory / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Engineering Works"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      disabled={loading}
                      className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-none focus:border-[#E87121] focus:ring-1 focus:ring-[#E87121] outline-none disabled:opacity-60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1.5">
                    Machine Make, Model or Floor Problem *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe your current machines, controllers, or what you want automated..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={loading}
                    className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-none focus:border-[#E87121] focus:ring-1 focus:ring-[#E87121] outline-none resize-none disabled:opacity-60"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-white bg-[#E87121] hover:bg-[#D45E12] active:scale-[0.98] rounded-none shadow-md shadow-orange-500/20 transition-all inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Requirement...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Requirement to Engineer</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 7. Bottom Navigation to Other Capabilities */}
      <section className="py-14 sm:py-16 px-6 sm:px-10 lg:px-14 xl:px-20 bg-slate-50 border-t border-gray-100">
        <div className="w-full">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#E87121] mb-1">
                OTHER CAPABILITIES
              </div>
              <h3 className="text-2xl font-black text-gray-950 tracking-tight">
                Explore our other automation services
              </h3>
            </div>

            <button
              onClick={onBack}
              className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-[#E87121] transition-colors"
            >
              <span>Back to Overview</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {Object.values(serviceDataMap).map((s) => {
              const SvcIcon = s.icon;
              const isCurrent = s.id === service.id;

              return (
                <button
                  key={s.id}
                  onClick={() => onNavigateService(s.id)}
                  className={`p-6 rounded-none border text-left transition-all group cursor-pointer ${
                    isCurrent
                      ? 'border-[#E87121] bg-white shadow-md ring-1 ring-[#E87121]'
                      : 'border-gray-200 bg-white hover:border-orange-300 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <SvcIcon className={`w-6 h-6 ${isCurrent ? 'text-[#E87121]' : 'text-gray-400 group-hover:text-[#E87121]'} transition-colors`} />
                    {isCurrent && (
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#E87121] bg-orange-50 px-2 py-0.5 border border-orange-200">
                        Current
                      </span>
                    )}
                  </div>

                  <h4 className={`text-lg font-bold mb-1.5 transition-colors ${isCurrent ? 'text-[#E87121]' : 'text-gray-950 group-hover:text-[#E87121]'}`}>
                    {s.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">
                    {s.subtitle}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
