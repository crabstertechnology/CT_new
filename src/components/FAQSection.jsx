import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    {
      question: "What does a project like this cost?",
      answer:
        "There is no single figure — a panel retrofit on one machine and a monitored line are different jobs. We quote after seeing the line, and the proposal separates hardware, programming and commissioning so you can see where the money goes."
    },
    {
      question: "Can you work on the machines we already have?",
      answer:
        "Yes. Retrofitting and modernising existing machinery is one of our core services, and it is usually the faster and cheaper route than replacing a line."
    },
    {
      question: "Will installation stop production?",
      answer:
        "As little as possible. Work is planned against your production schedule, and where a line has to stop we book the window with you in advance. Some monitoring can go in without stopping the machine at all."
    },
    {
      question: "We are a small plant. Is this for us?",
      answer:
        "Small and mid-sized manufacturers are exactly who we build for — typically ten to two hundred and fifty people, running manual or partly automated systems. Scope is sized to the problem and can be staged over time."
    },
    {
      question: "Do you work outside Coimbatore?",
      answer:
        "Yes. Most projects are in Coimbatore, Tiruppur, Erode and Pollachi, and we take on work elsewhere in Tamil Nadu. Distance changes how often we are on site, and we say so in the proposal."
    }
  ];

  // All questions closed by default - opens ONLY when clicked
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((i) => i !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <section 
      id="faq" 
      className="flex flex-col justify-center bg-slate-50/70 border-b border-gray-100 relative px-6 sm:px-10 lg:px-14 xl:px-20 py-20 w-full"
    >
      <div className="w-full flex flex-col justify-center">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-14">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E87121] mb-2.5">
            COMMON QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-gray-950 tracking-tight leading-tight">
            What owners ask us before the first visit
          </h2>
          <p className="mt-3.5 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl font-normal">
            Straight answers to what comes up on almost every first call.
          </p>
        </div>

        {/* Accordion List spanning full width */}
        <div className="divide-y divide-gray-200 border-t border-gray-200 w-full">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            return (
              <div key={index} className="py-5 sm:py-6 transition-colors">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between text-left group focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-950 group-hover:text-[#E87121] transition-colors pr-6">
                    {faq.question}
                  </h3>
                  <div className="text-[#E87121] shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 stroke-[2.5]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 stroke-[2] text-gray-400 group-hover:text-[#E87121]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-8 animate-in fade-in duration-200 max-w-4xl">
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
