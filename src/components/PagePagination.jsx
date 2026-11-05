import React, { useEffect, useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function PagePagination({ sections }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || 'hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Keyboard navigation (Page Up/Down, Arrow Up/Down)
    const handleKeyDown = (e) => {
      // Don't intercept if inside an input or textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
        return;
      }

      const currentIndex = sections.findIndex((s) => s.id === activeSection);
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (currentIndex < sections.length - 1) {
          e.preventDefault();
          scrollToSection(sections[currentIndex + 1].id);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (currentIndex > 0) {
          e.preventDefault();
          scrollToSection(sections[currentIndex - 1].id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSection, sections]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentIndex = sections.findIndex((s) => s.id === activeSection);
  const currentNum = String(currentIndex + 1).padStart(2, '0');
  const totalNum = String(sections.length).padStart(2, '0');

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3 select-none">
      {/* Up Button */}
      <button
        onClick={() => {
          if (currentIndex > 0) scrollToSection(sections[currentIndex - 1].id);
        }}
        disabled={currentIndex === 0}
        aria-label="Previous page"
        className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-gray-700 shadow-md border border-gray-200 flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
      >
        <ChevronUp className="w-4 h-4" />
      </button>

      {/* Slide dots and tooltips */}
      <div className="bg-white/90 backdrop-blur-md border border-gray-200/90 rounded-full py-4 px-2 shadow-lg flex flex-col items-center gap-2.5">
        {sections.map((section, idx) => {
          const isActive = section.id === activeSection;
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative flex items-center justify-center focus:outline-none p-1"
              aria-label={`Go to ${section.label}`}
            >
              {/* Dot */}
              <span
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-2.5 h-6 bg-[#0E3B64]'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />

              {/* Tooltip on hover */}
              <span className="absolute right-8 px-2.5 py-1 bg-gray-900 text-white text-xs font-medium rounded-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-md">
                {String(idx + 1).padStart(2, '0')}. {section.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Page indicator pill */}
      <div className="bg-white/90 backdrop-blur-md border border-gray-200/90 px-2.5 py-1 rounded-full text-[11px] font-bold text-gray-700 tracking-wider shadow-sm">
        <span className="text-blue-700">{currentNum}</span>
        <span className="text-gray-300 mx-0.5">/</span>
        <span>{totalNum}</span>
      </div>

      {/* Down Button */}
      <button
        onClick={() => {
          if (currentIndex < sections.length - 1) scrollToSection(sections[currentIndex + 1].id);
        }}
        disabled={currentIndex === sections.length - 1}
        aria-label="Next page"
        className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-gray-700 shadow-md border border-gray-200 flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
      >
        <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  );
}
