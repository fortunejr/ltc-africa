import React, { useState } from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  const [expanded, setExpanded] = useState(false);

  // Note: Keeping your exact wording as requested
  const shortText = `Pioneering Sustainable WEEE & IT/Telecom Waste Solutions Across Africa.

LTC Africa Recycling, a proud member of the LTC Africa Group, is a modern and fully registered Waste Electrical and Electronic Equipment (WEEE) management company dedicated to redefining how Africa handles electronic waste. Since our inception in 2013, we have grown into a pan-African leader in sustainable, compliant, and technology-driven e-waste management, while advancing the circular economy through responsible recycling, IT asset disposition (ITAD), and resource recovery.

With facilities located in Nigeria, Ghana, Morocco, South Africa, Botswana, Tanzania, and Madagascar, we provide end-to-end e-waste management and on-site collection services without geographical limits.`;


  return (
    <section className="relative w-full bg-white py-12 md:py-24 overflow-hidden">
      {/* Top Left Background Pattern (Subtle Topography) */}
      <div className="absolute top-0 left-0 w-full h-64 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />

      {/* Adjusted padding for mobile (px-6) vs desktop (px-20) */}
      <div className="max-w-8xl mx-auto px-6 md:px-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Staggered Images */}
        {/* Added mb-12 on mobile to give space before the text starts */}
        <div className="relative flex items-center justify-center lg:justify-start mb-12 lg:mb-0">
          
          {/* Main Tall Image */}
          {/* h-[350px] on mobile, h-[500px] on desktop */}
          <div className="relative z-10 w-3/4 lg:w-2/3 shadow-2xl">
            <img
              src="/images/recycle.jpg"
              alt="LTC Facility"
              className="w-full h-[350px] md:h-[500px] object-cover"
            />
            {/* Green Bottom Border Accent */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-customGreen" />

            {/* Floating Video/Play Button Box - Adjusted position for small screens */}
            <div className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-[#003333] flex items-center justify-center shadow-lg cursor-pointer hover:bg-customGreen transition-colors">
              <div className="w-0 h-0 border-t-[6px] md:border-t-[8px] border-t-transparent border-l-[10px] md:border-l-[12px] border-l-white border-b-[6px] md:border-b-[8px] border-b-transparent ml-1" />
            </div>
          </div>

          {/* Secondary Staggered Image */}
          {/* Changed 'hidden md:block' to 'hidden lg:block' to keep mobile view clean */}
          <div className="relative z-0 w-1/2 -ml-16 mt-32 shadow-xl hidden lg:block">
            <img
              src="/images/parts.jpg"
              alt="E-waste"
              className="w-full h-[400px] object-cover"
            />
            {/* Dots Pattern Overlay */}
            <div className="absolute -top-10 -left-10 w-20 h-24 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:10px_10px]" />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col">
          {/* Adjusted font sizes for mobile (text-3xl) vs desktop (text-5xl) */}
          <h2 className="header-txt text-3xl md:text-5xl font-bold text-[#003333] leading-tight mb-6 md:mb-8">
            Welcome to{" "}
            <span className="text-customBlue">
              LTC <br className="hidden md:block" /> Africa Recycling
            </span>
          </h2>

          <div className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 whitespace-pre-line">
            {expanded ? fullText : shortText}
          </div>

          <Link to={"/e-waste/about"}>
          <button
            className="cursor-pointer group flex items-center gap-2 text-xs md:text-sm font-bold tracking-widest text-gray-400 hover:text-customGreen uppercase transition-colors"
          >
            Learn More
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Welcome;