import React, { useEffect, useState } from "react";
import { realestate, agriculture, ewaste } from "../../imports";
import { Link } from "react-router-dom";

const slides = [
  {
    image: realestate,
    title: "Smart Real Estate Solutions",
    subtitle:
      "Connecting properties with global opportunities through innovation.",
    link: 'real-estate'
  },
  {
    image: agriculture,
    title: "Empowering Modern Agriculture",
    subtitle:
      "Driving sustainable farming and agribusiness growth worldwide.",
    link: 'agriculture'
  },
  {
    image: ewaste,
    title: "Responsible E-Waste Management",
    subtitle:
      "Transforming electronic waste into environmental impact.",
    link: 'e-waste'
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />

          {/* Dark blue overlay (very subtle) */}
          <div className="absolute inset-0 bg-blue-950/35" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center pt-28 md:pt-36">
            {/* ↑ padding-top increases space for taller navbar */}
            <div className="container mx-auto px-6 md:px-12">
              <div className="max-w-2xl text-white">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                  {slide.title}
                </h1>

                <p className="text-base md:text-lg text-white/90 mb-8">
                  {slide.subtitle}
                </p>

                {/* Single CTA */}
                <Link to={`/${slide.link}`}>
                  <button className="rounded-xl bg-white px-7 py-3 font-semibold text-blue-950 hover:bg-blue-100 transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
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
