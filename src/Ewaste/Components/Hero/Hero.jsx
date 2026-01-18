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
    text: `We are dedicated to advancing sustainable management of WEEE &Telecom equipment through a circular
approach based on Repair → Refurbish → Reuse → Recycle. By extending the life of devices like
computers, servers, routers, phones, and telecom hardware etc.., we maximize resource efficiency,
minimize environmental impact, and promote a sustainable, low-carbon future.`,
  },
  {
    video: ewastevideo,
    title: "ITAD & Recovery Solution",
    text: `We help organizations maximize recovery value from decommissioned WEEE & Telecom assets through
end-to-end ITAD solutions through global partnership & consultancy, after-sales support, asset buyback,
and responsible recycling, through was once waste is transformed into strategic resources, creating both
economic and environmental impact.`,
  },
  {
    video: garbage,
    title: "Social Environmental Commitment",
    text: `We are committed to reducing carbon emissions through responsible WEEE collection, pollution
prevention, and sustainable recycling initiatives, By promoting a circular economy and energy-efficient
operations, with the aim to support our partners across Africa achieve their low-carbon and sustainability
goals.`,
  },
  {
    video: dirttruck,
    title: "Extended Producer Responsibility (EPR)",
    text: `Through our EPR programs, we engage with corporate organizations, government agencies, and local
partners to meet their environmental and regulatory targets effectively, by ensuring responsible
collection, traceable recycling, and compliant management of electronic waste.`,
  },
  {
    video: dirtinwater,
    title: "Circular Sustainability & Advisory",
    text: `We offer expert advisory and consultancy programs thar helps organizations achieve circular sustainable
operations through effective waste management awareness, carbon reduction, and strategic frameworks.
Beyond recycling, we deliver training and awareness initiatives that inspire industries and communities to
adopt eco-conscious practices and sustainable e-waste management.`,
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
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
            className="h-full w-full object-cover"
          />

          {/* BLUE OVERLAY */}
          <div className="absolute inset-0 bg-[#3067a6]/70" />
          <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/50" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center pt-32 md:pt-40 z-10">
            <div className="container mx-auto px-6 md:px-12">
              <div className="max-w-3xl text-white">
                <h1 className="text-2xl md:text-5xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>

                <p className="whitespace-pre-line text-sm md:text-sm text-white/90 leading-relaxed mb-8">
                  {slide.text}
                </p>

                {/* CONTACT US BUTTON */}
                <a
                  href="/e-waste/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#3067a6] transition-all duration-300 hover:bg-white/90 hover:scale-105"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              current === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
