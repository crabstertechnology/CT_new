import React from 'react';
import { MapPin, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="page-section bg-[#101720] text-gray-400 font-sans border-t border-gray-800 w-full">
      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 w-full">
          
          {/* Left Column: Brand & Regional Coverage on Far Left Corner */}
          <div className="md:col-span-6 lg:col-span-7 space-y-4">
            {/* Script Logo */}
            <div>
              <span className="logo-script text-3xl sm:text-4xl font-semibold text-white tracking-wide">
                Logo
              </span>
            </div>

            {/* Location with Pin Icon */}
            <div className="space-y-1 pt-1">
              <div className="flex items-center gap-2 text-sm sm:text-base text-gray-300 font-medium">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
              <p className="text-sm sm:text-base text-gray-400 pl-6">
                Serving Coimbatore, Tiruppur, Erode and Pollachi
              </p>
            </div>
          </div>

          {/* Right Columns: Services and Company on Far Right Corner */}
          <div className="md:col-span-6 lg:col-span-5 grid grid-cols-2 gap-8 sm:gap-12">
            
            {/* Services Links */}
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-4">
                Services
              </h4>
              <ul className="space-y-2.5 text-sm sm:text-base text-gray-400">
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Industrial IoT &amp; Edge Solutions
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Automation Panel Boards
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Process Automation
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Production Automation
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-4">
                Company
              </h4>
              <ul className="space-y-2.5 text-sm sm:text-base text-gray-400">
                <li>
                  <a href="#industries" className="hover:text-white transition-colors">
                    Industries
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Horizontal Divider and Copyright */}
        <div className="mt-14 pt-8 border-t border-gray-800 flex items-center justify-between text-xs sm:text-sm text-gray-500 w-full">
          <p>Crabster Technology. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-blue-400 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
