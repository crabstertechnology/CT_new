import React, { useState } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onSelectService, onNavigateSection, onGoToContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const handleNav = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigateSection) {
      onNavigateSection(sectionId);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { id: "iot", title: "Industrial IoT & Edge Solutions", desc: "Sensors, edge acquisition & live floor visibility" },
    { id: "panels", title: "Automation Panel Boards", desc: "Custom control panels, PLC & motor wiring" },
    { id: "process", title: "Process Automation", desc: "Automated temperature, pressure & level control" },
    { id: "production", title: "Production Automation", desc: "Machine retrofits & line handling systems" }
  ];

  const handleServiceClick = (id) => {
    setServicesDropdown(false);
    setMobileMenuOpen(false);
    if (onSelectService) {
      onSelectService(id);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200/40 shadow-xs transition-all w-full">
      {/* Maximum width edge-to-edge padding */}
      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20">
        <div className="flex items-center justify-between h-20 w-full">
          
          {/* Crabster Logo on Left-most corner */}
          <div className="flex items-center">
            <a 
              href="#" 
              onClick={(e) => { 
                e.preventDefault(); 
                window.location.hash = ''; 
                window.scrollTo({ top: 0, behavior: 'smooth' }); 
              }} 
              className="flex items-center gap-3 group"
            >
              <img
                src="/assets/crabster-logo.png"
                alt="Crabster Technology Logo"
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-150 group-hover:scale-105"
              />
              <span className="text-base sm:text-lg font-black tracking-wider text-gray-950 uppercase select-none">
                CRABSTER <span className="text-[#E87121]">TECHNOLOGY</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10 text-sm font-semibold text-gray-700">
            {/* Services with Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button 
                onClick={() => setServicesDropdown(!servicesDropdown)}
                className="flex items-center gap-1.5 py-2 hover:text-[#E87121] transition-colors focus:outline-none rounded-none"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-gray-500 ${servicesDropdown ? 'rotate-180 text-[#E87121]' : ''}`} />
              </button>

              {/* Sharp Dropdown Menu */}
              {servicesDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white border border-gray-200 rounded-none shadow-xl py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#E87121]">
                    Our Core Capabilities
                  </div>
                  {services.map((svc) => (
                    <button
                      key={svc.id}
                      onClick={() => handleServiceClick(svc.id)}
                      className="w-full text-left block px-3 py-2.5 rounded-none hover:bg-orange-50/50 transition-colors group cursor-pointer"
                    >
                      <div className="text-sm font-bold text-gray-900 group-hover:text-[#E87121] transition-colors">
                        {svc.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                        {svc.desc}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a 
              href="#industries" 
              onClick={(e) => handleNav(e, 'industries')}
              className="hover:text-[#E87121] transition-colors"
            >
              Industries
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNav(e, 'about')}
              className="hover:text-[#E87121] transition-colors"
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNav(e, 'contact')}
              className="hover:text-[#E87121] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button - Sharp */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-none text-gray-700 hover:text-[#E87121] hover:bg-orange-50 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu - Sharp */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 pt-3 pb-6 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#E87121] px-3 pt-2">
              Services
            </div>
            {services.map((svc) => (
              <button
                key={svc.id}
                onClick={() => handleServiceClick(svc.id)}
                className="w-full text-left px-3 py-2 text-sm text-gray-800 hover:bg-orange-50 rounded-none flex items-center justify-between"
              >
                <span>{svc.title}</span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
              </button>
            ))}
            <div className="border-t border-gray-100 my-2"></div>
            <a
              href="#industries"
              onClick={(e) => handleNav(e, 'industries')}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 rounded-none"
            >
              Industries
            </a>
            <a
              href="#about"
              onClick={(e) => handleNav(e, 'about')}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 rounded-none"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNav(e, 'contact')}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 rounded-none"
            >
              Contact
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onGoToContact) onGoToContact();
                }}
                className="w-full py-2.5 text-center text-sm font-bold text-white bg-[#E87121] hover:bg-[#D45E12] rounded-none shadow-md"
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
