import React from 'react';
import { MapPin, ArrowUp, Phone, Globe, ExternalLink, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer({ onSelectService, onNavigateSection, onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (e, sectionId) => {
    e.preventDefault();
    if (onNavigateSection) {
      onNavigateSection(sectionId);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleService = (e, serviceId) => {
    e.preventDefault();
    if (onSelectService) {
      onSelectService(serviceId);
    } else {
      window.location.hash = `service-${serviceId}`;
    }
  };

  return (
    <footer id="site-footer" className="bg-[#0B1017] text-gray-400 font-sans border-t border-gray-800 w-full">
      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 pt-10 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 w-full">
          
          {/* Left Column: Brand & Regional Coverage on Far Left Corner */}
          <div className="md:col-span-5 lg:col-span-5 space-y-5">
            {/* Crabster Logo */}
            <div>
              <a 
                href="#" 
                onClick={(e) => handleNav(e, 'hero')} 
                className="flex items-center gap-3 group inline-flex"
              >
                <img
                  src="/assets/crabster-logo.png"
                  alt="Crabster Technology Logo"
                  className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
                />
                <span className="text-base sm:text-lg font-black tracking-wider text-white uppercase">
                  CRABSTER <span className="text-[#E87121]">TECHNOLOGY</span>
                </span>
              </a>
            </div>

            {/* Address & Contact Info */}
            <div className="space-y-2.5 pt-1 text-sm sm:text-base">
              <div className="flex items-start gap-2.5 text-gray-300">
                <MapPin className="w-4 h-4 text-[#E87121] shrink-0 mt-1" />
                <span>Veerapandi, Coimbatore – 641019, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-300">
                <Phone className="w-4 h-4 text-[#E87121] shrink-0" />
                <a href="tel:+917010396642" className="hover:text-white transition-colors">
                  +91 70103 96642
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-gray-300">
                <Globe className="w-4 h-4 text-[#E87121] shrink-0" />
                <a href="https://shop.crabstertech.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  shop.crabstertech.in <ExternalLink className="w-3 h-3 text-gray-500" />
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/crabster-technology"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E87121] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/crabstertechnology/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E87121] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@crabstertechnology"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E87121] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Columns: Services and Company on Far Right Corner */}
          <div className="md:col-span-7 lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 gap-8 sm:gap-12">
            
            {/* Services Links */}
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-4">
                Services
              </h4>
              <ul className="space-y-2.5 text-sm sm:text-base text-gray-400">
                <li>
                  <a 
                    href="#service-iot" 
                    onClick={(e) => handleService(e, 'iot')} 
                    className="hover:text-[#E87121] transition-colors"
                  >
                    Industrial IoT &amp; Edge Solutions
                  </a>
                </li>
                <li>
                  <a 
                    href="#service-panels" 
                    onClick={(e) => handleService(e, 'panels')} 
                    className="hover:text-[#E87121] transition-colors"
                  >
                    Automation Panel Boards
                  </a>
                </li>
                <li>
                  <a 
                    href="#service-process" 
                    onClick={(e) => handleService(e, 'process')} 
                    className="hover:text-[#E87121] transition-colors"
                  >
                    Process Automation
                  </a>
                </li>
                <li>
                  <a 
                    href="#service-production" 
                    onClick={(e) => handleService(e, 'production')} 
                    className="hover:text-[#E87121] transition-colors"
                  >
                    Production Automation
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-4">
                Company &amp; Portals
              </h4>
              <ul className="space-y-2.5 text-sm sm:text-base text-gray-400">
                <li>
                  <a href="https://shop.crabstertech.in/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E87121] transition-colors flex items-center gap-1.5">
                    Crabster Store <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
                  </a>
                </li>
                <li>
                  <a 
                    href="#industries" 
                    onClick={(e) => handleNav(e, 'industries')} 
                    className="hover:text-[#E87121] transition-colors"
                  >
                    Industries
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    onClick={(e) => handleNav(e, 'about')} 
                    className="hover:text-[#E87121] transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    onClick={(e) => handleNav(e, 'contact')} 
                    className="hover:text-[#E87121] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Horizontal Divider and Copyright */}
        <div className="mt-14 pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-gray-500 w-full gap-4">
          <p>&copy; {new Date().getFullYear()} Crabster Technology. All rights reserved. Coimbatore, Tamil Nadu, India.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors group cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-[#E87121] transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
