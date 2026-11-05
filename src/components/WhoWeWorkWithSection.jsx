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
      className="flex flex-col justify-center bg-white border-b border-gray-100 relative px-6 sm:px-10 lg:px-14 xl:px-20 py-10 sm:py-12 w-full"
    >
      <div className="w-full flex flex-col justify-center">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-6 sm:mb-8">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E87121] mb-2">
            WHO WE WORK WITH
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold text-gray-950 tracking-tight leading-tight">
            Built for the way Tamil Nadu's factories run
          </h2>
          <p className="mt-2.5 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl font-normal text-justify">
            Most of our work sits within a few hours of Coimbatore — Tiruppur, Erode, Pollachi and the surrounding industrial clusters — alongside general manufacturing and processing units.
          </p>
        </div>

        {/* 3-Column Industry Grid spanning full width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 lg:gap-y-8 w-full">
          {industries.map((ind, index) => (
            <div 
              key={index} 
              className="p-4 -mx-4 rounded-none hover:bg-orange-50/40 transition-colors duration-200 group"
            >
              <h3 className="text-lg sm:text-xl lg:text-[1.5rem] font-bold text-gray-950 group-hover:text-[#E87121] transition-colors mb-2">
                {ind.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal text-justify">
                {ind.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
