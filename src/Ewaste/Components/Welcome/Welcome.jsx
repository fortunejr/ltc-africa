import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const leftItem = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const rightItem = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const Welcome = () => {
  const [expanded, setExpanded] = useState(false);

  const shortText = `Pioneering Sustainable WEEE & IT/Telecom Waste Solutions Across Africa.

LTC Africa Recycling, a proud member of the LTC Africa Group, is a modern and fully registered Waste Electrical and Electronic Equipment (WEEE) management company dedicated to redefining how Africa handles electronic waste. Since our inception in 2013, we have grown into a pan-African leader in sustainable, compliant, and technology-driven e-waste management, while advancing the circular economy through responsible recycling, IT asset disposition (ITAD), and resource recovery.

With facilities located in Nigeria, Ghana, Morocco, South Africa, Botswana, Tanzania, and Madagascar, we provide end-to-end e-waste management and on-site collection services without geographical limits.`;

  return (
    <section className="relative w-full bg-white py-12 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-64 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]" />

      <motion.div
        className="max-w-8xl mx-auto px-6 md:px-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left Images */}
        <motion.div
          variants={leftItem}
          className="relative flex items-center justify-center lg:justify-start mb-12 lg:mb-0"
        >
          <div className="relative z-10 w-3/4 lg:w-2/3 shadow-2xl">
            <img
              src="/images/recycle.jpg"
              alt="LTC Facility"
              className="w-full h-[350px] md:h-[500px] object-cover"
            />

            <div className="absolute bottom-0 left-0 w-full h-2 bg-customGreen" />

            {/* <div className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-[#003333] flex items-center justify-center shadow-lg cursor-pointer hover:bg-customGreen transition-colors">
              <div className="w-0 h-0 border-t-[6px] md:border-t-[8px] border-t-transparent border-l-[10px] md:border-l-[12px] border-l-white border-b-[6px] md:border-b-[8px] border-b-transparent ml-1" />
            </div> */}
          </div>

          <motion.div
            variants={leftItem}
            className="relative z-0 w-1/2 -ml-16 mt-32 shadow-xl hidden lg:block"
          >
            <img
              src="/images/parts.jpg"
              alt="E-waste"
              className="w-full h-[400px] object-cover"
            />

            <div className="absolute -top-10 -left-10 w-20 h-24 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:10px_10px]" />
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div variants={rightItem} className="flex flex-col">
          <motion.h2
            variants={textItem}
            className="header-txt text-3xl md:text-5xl font-bold text-[#003333] leading-tight mb-6 md:mb-8"
          >
            Welcome to{" "}
            <span className="text-customBlue">
              LTC <br className="hidden md:block" /> Africa Recycling
            </span>
          </motion.h2>

          <motion.div
            variants={textItem}
            className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 whitespace-pre-line"
          >
            {expanded ? fullText : shortText}
          </motion.div>

          <motion.div variants={textItem}>
            <Link to={"/e-waste/about"}>
              <button className="cursor-pointer group flex items-center gap-2 text-xs md:text-sm font-bold tracking-widest text-gray-400 hover:text-customGreen uppercase transition-colors">
                Learn More
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Welcome;
