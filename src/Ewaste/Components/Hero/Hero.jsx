import React, { useEffect, useState } from "react";
import {
  recycling,
  ewastevideo,
  dirtinwater,
  dirttruck,
  garbage,
} from "../../../imports";

const slides = [
  {
    video: recycling,
    title: "WEEE & Telecom Equipment Management",
    text: `We advance sustainable management of WEEE & Telecom equipment through a circular
approach: Repair → Refurbish → Reuse → Recycle. Extending the life of devices like
computers, servers, routers, phones, and telecom hardware maximizes resource efficiency,
reduces environmental impact, and promotes a low-carbon future.`,
  },
  {
    video: ewastevideo,
    title: "ITAD & Recovery Solution",
    text: `We help organizations maximize value from decommissioned WEEE & Telecom assets
through end-to-end ITAD solutions, global partnerships, consultancy, after-sales support,
asset buyback, and responsible recycling. What was once waste becomes strategic resources,
creating economic and environmental impact.`,
  },
  {
    video: garbage,
    title: "Social Environmental Commitment",
    text: `We reduce carbon emissions through responsible WEEE collection, pollution prevention,
and sustainable recycling initiatives. By promoting a circular economy and energy-efficient
operations, we support partners across Africa in achieving their sustainability goals.`,
  },
  {
    video: dirttruck,
    title: "Extended Producer Responsibility (EPR)",
    text: `Through EPR programs, we engage corporate organizations, government agencies, and local
partners to meet environmental and regulatory targets effectively by ensuring responsible
collection, traceable recycling, and compliant e-waste management.`,
  },
  {
    video: dirtinwater,
    title: "Circular Sustainability & Advisory",
    text: `We offer expert advisory programs to help organizations achieve circular sustainability
through effective waste management, carbon reduction, and strategic frameworks. Beyond recycling,
we deliver training and awareness initiatives to inspire eco-conscious practices.`,
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 9s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Video */}
          <video
            src={slide.video}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover scale-105"
          />

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-customBlue/30 mix-blend-multiply"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12 z-20">
            <div className="max-w-3xl text-center md:text-left text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-sm md:text-lg mb-6 leading-relaxed text-white/90 drop-shadow-md whitespace-pre-line">
                {slide.text}
              </p>
              <a
                href="/e-waste/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm md:text-base font-semibold text-[#3067a6] shadow-lg transition-all duration-300 hover:bg-white/90 hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 transform ${
              current === index ? "bg-white scale-125" : "bg-white/50 hover:scale-110"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
