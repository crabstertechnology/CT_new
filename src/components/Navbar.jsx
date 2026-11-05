import React, { useState } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const services = [
    { title: "Industrial IoT & Edge Solutions", desc: "Sensors, edge acquisition & live floor visibility", href: "#services" },
    { title: "Automation Panel Boards", desc: "Custom control panels, PLC & motor wiring", href: "#services" },
    { title: "Process Automation", desc: "Automated temperature, pressure & level control", href: "#services" },
    { title: "Production Automation", desc: "Machine retrofits & line handling systems", href: "#services" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all w-full">
      {/* Maximum width edge-to-edge padding */}
      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20">
        <div className="flex items-center justify-between h-20 w-full">
          
          {/* Logo on Left-most corner */}
          <div className="flex items-center">
            <a href="#" className="flex items-center group">
              <span className="logo-script text-3xl sm:text-4xl font-semibold text-gray-900 tracking-wide group-hover:text-blue-900 transition-colors">
                Logo
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-700">
            {/* Services with Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button 
                onClick={() => setServicesDropdown(!servicesDropdown)}
                className="flex items-center gap-1.5 py-2 hover:text-[#0E3B64] transition-colors focus:outline-none"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-gray-500 ${servicesDropdown ? 'rotate-180 text-[#0E3B64]' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {servicesDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white border border-gray-100 rounded-xl shadow-xl py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-700">
                    Our Core Capabilities
                  </div>
                  {services.map((svc, idx) => (
                    <a
                      key={idx}
                      href={svc.href}
                      onClick={() => setServicesDropdown(false)}
                      className="block px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="text-sm font-semibold text-gray-900 group-hover:text-[#0E3B64]">
                        {svc.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                        {svc.desc}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#industries" className="hover:text-[#0E3B64] transition-colors">
              Industries
            </a>
            <a href="#about" className="hover:text-[#0E3B64] transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-[#0E3B64] transition-colors">
              Contact
            </a>
          </nav>

          {/* Right Action Button on Right-most corner */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-[#0E3B64] hover:bg-[#092645] active:scale-[0.98] rounded-md transition-all shadow-sm"
            >
              Talk to an engineer
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 pt-3 pb-6 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 px-3 pt-2">
              Services
            </div>
            {services.map((svc, idx) => (
              <a
                key={idx}
                href={svc.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-gray-800 hover:bg-gray-50 rounded-lg flex items-center justify-between"
              >
                <span>{svc.title}</span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
              </a>
            ))}
            <div className="border-t border-gray-100 my-2"></div>
            <a
              href="#industries"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              Industries
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              Contact
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#0E3B64] hover:bg-[#092645] rounded-md shadow-sm"
              >
                Talk to an engineer
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
