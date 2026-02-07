import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { agric, ewastevid, realestate2, renewableenergy } from "../../imports";

const slides = [
  {
    video: realestate2,
    title: "Smart Real Estate Solutions",
    subtitle: "Connecting properties with global opportunities through innovation.",
    link: "real-estate",
  },
  {
    video: agric,
    title: "Empowering Modern Agriculture",
    subtitle: "Driving sustainable farming and agribusiness growth worldwide.",
    link: "agriculture",
  },
  {
    video: ewastevid,
    title: "Responsible E-Waste Management",
    subtitle: "Transforming electronic waste into environmental impact.",
    link: "e-waste",
  },
  {
    video: renewableenergy,
    title: "Renewable Energy",
    subtitle: "Harnessing nature to power a sustainable future for all.",
    link: "renewable-energy",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Play current video and pause others
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === current) {
          video.currentTime = 0; // Reset to start
          video.play().catch(err => console.log("Video play error:", err));
        } else {
          video.pause();
        }
      }
    });
  }, [current]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Videos */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={slide.video}
            className="h-full w-full object-cover brightness-90"
            muted
            playsInline
            loop
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/35" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col md:flex-row">
        {slides.map((slide, index) => {
          const isActive = current === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setCurrent(index)}
              className={`relative flex flex-1 flex-col items-center justify-center px-8 text-center transition-all duration-700 ease-out
                ${
                  index !== slides.length - 1
                    ? "md:border-r md:border-white/15"
                    : ""
                }
                ${
                  isActive
                    ? "md:flex-[1.5] bg-white/5 backdrop-blur-md"
                    : "hidden md:flex bg-black/30 backdrop-blur-sm"
                }
              `}
            >
              <div
                className={`max-w-sm transition-all duration-1000 ${
                  isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-50 translate-y-6"
                }`}
              >
                <div className="mb-6 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm text-[10px] font-semibold tracking-widest text-white">
                  0{index + 1}
                </div>

                <h2 className="mb-4 text-3xl font-light leading-tight tracking-tight text-white md:text-2xl lg:text-4xl drop-shadow-lg">
                  {slide.title}
                </h2>

                <p className="mb-10 text-sm leading-relaxed text-white/90 drop-shadow-md">
                  {slide.subtitle}
                </p>

                <Link to={`/${slide.link}`}>
                  <button className="group relative rounded-full bg-white px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-900 transition-all duration-300 hover:scale-105 active:scale-95">
                    Explore
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 items-center gap-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className="group flex flex-col items-center"
          >
            <span
              className={`mb-2 text-[10px] font-semibold tracking-widest transition-colors ${
                current === index ? "text-white" : "text-white/40"
              }`}
            >
              0{index + 1}
            </span>
            <div
              className={`h-[3px] rounded-full transition-all duration-500 ${
                current === index
                  ? "w-10 bg-white"
                  : "w-3 bg-white/30 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;