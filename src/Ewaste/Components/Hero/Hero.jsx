import React, { useEffect, useState } from "react";
import {
  recycling,
  ewastevideo,
  dirttruck,
  garbage,
  circularsustain,
} from "../../../imports";

const slides = [
  {
    video: recycling,
    title: "WEEE & Telecom Equipment Management",
    text:
      "We advance sustainable WEEE and telecom equipment management through a circular model built on repair, refurbishment, reuse, and recycling. This approach extends device lifecycles, improves resource efficiency, and reduces environmental impact.",
  },
  {
    video: ewastevideo,
    title: "ITAD & Recovery Solutions",
    text:
      "We help organizations recover maximum value from decommissioned assets through secure ITAD, global partnerships, asset buyback, and compliant recycling processes.",
  },
  {
    video: garbage,
    title: "Social & Environmental Commitment",
    text:
      "Our operations reduce carbon emissions through responsible WEEE collection, pollution prevention, and energy efficient recycling initiatives across Africa.",
  },
  {
    video: dirttruck,
    title: "Extended Producer Responsibility (EPR)",
    text:
      "We support organizations and governments in meeting EPR and regulatory targets through traceable collection, compliant recycling, and transparent reporting.",
  },
  {
    video: circularsustain,
    title: "Circular Sustainability & Advisory",
    text:
      "We deliver advisory programs, training, and awareness initiatives that help organizations transition into circular, low carbon, and sustainable operations.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

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
          {/* Background video */}
          <video
            src={slide.video}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Bottom gradient fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-customBlue via-customBlue/70 to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
              <div className="max-w-2xl text-white">
                <h1 className="mb-5 text-3xl md:text-6xl font-semibold leading-tight">
                  {slide.title}
                </h1>

                <p className="mb-8 text-sm md:text-lg text-white/90 leading-relaxed">
                  {slide.text}
                </p>

                <a
                  href="/e-waste/contact"
                  className="inline-flex items-center rounded bg-customGreen px-6 py-3 text-sm md:text-base font-medium text-white transition hover:opacity-90"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 w-6 rounded-full transition ${
              current === index ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
