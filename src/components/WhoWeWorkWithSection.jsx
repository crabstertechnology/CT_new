import React from 'react';

export default function WhoWeWorkWithSection() {
  const industries = [
    {
      title: "Textiles & garments",
      description: "Output tracked on paper, breakdowns found at the loom."
    },
    {
      title: "Engineering & CNC",
      description: "Mixed batches, with machine utilisation invisible until month end."
    },
    {
      title: "Pumps & motors",
      description: "Test and assembly lines where results are still written down by hand."
    },
    {
      title: "Food processing & packaging",
      description: "Temperature, pressure and fill level that must hold every single shift."
    },
    {
      title: "Automotive components",
      description: "Cycle times and traceability that customers now expect to see evidence of."
    },
    {
      title: "Plastics & injection moulding",
      description: "Cycle drift and rejects that are only counted once the moulding is done."
    }
  ];

  return (
    <section 
      id="industries" 
      className="page-section min-h-screen flex flex-col justify-center bg-white border-b border-gray-100 relative px-6 sm:px-10 lg:px-14 xl:px-20 py-20 w-full"
    >
      <div className="w-full flex flex-col justify-center">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-14 sm:mb-16">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E87121] mb-2.5">
            WHO WE WORK WITH
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-gray-950 tracking-tight leading-tight">
            Built for the way Tamil Nadu's factories run
          </h2>
          <p className="mt-3.5 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl font-normal">
            Most of our work sits within a few hours of Coimbatore — Tiruppur, Erode, Pollachi and the surrounding industrial clusters — alongside general manufacturing and processing units.
          </p>
        </div>

        {/* 3-Column Industry Grid spanning full width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-12 lg:gap-y-14 w-full">
          {industries.map((ind, index) => (
            <div 
              key={index} 
              className="p-6 -mx-6 rounded-none hover:bg-orange-50/40 transition-colors duration-200 group"
            >
              <h3 className="text-xl sm:text-2xl lg:text-[1.65rem] font-bold text-gray-950 group-hover:text-[#E87121] transition-colors mb-2.5">
                {ind.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                {ind.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
