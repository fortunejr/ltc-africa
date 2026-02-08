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
  const hoverTimeout = useRef(null);
  const playId = useRef(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Video control (race-condition safe)
  useEffect(() => {
    const currentVideo = videoRefs.current[current];
    if (!currentVideo) return;

    // Unique play generation
    const myPlayId = ++playId.current;

    // Pause all other videos
    videoRefs.current.forEach((video, index) => {
      if (video && index !== current && !video.paused) {
        video.pause();
      }
    });

    // Play only if needed
    if (!currentVideo.paused) return;

    const playPromise = currentVideo.play();

    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        // Ignore outdated or aborted play attempts
        if (myPlayId !== playId.current) return;
        if (err.name !== "AbortError") {
          console.error("Video play error:", err);
        }
      });
    }
  }, [current]);

  // Throttled hover
  const handleHover = (index) => {
    clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setCurrent(index);
    }, 150);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Videos */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={slide.video}
            muted
            playsInline
            loop
            preload="metadata"
            className="h-full w-full object-cover"
            style={{ filter: "brightness(0.75)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        </div>
      ))}

      {/* Content */}
      <div className="cursor-default relative z-10 flex h-full w-full flex-col md:flex-row">
        {slides.map((slide, index) => {
          const isActive = current === index;

          return (
            <div
              key={index}
              onMouseEnter={() => handleHover(index)}
              className={`relative flex flex-1 flex-col items-center justify-center px-8 text-center transition-all duration-700 ease-in-out
                ${index !== slides.length - 1 ? "md:border-r md:border-white/5" : ""}
                ${isActive ? "md:flex-[2] bg-black/10" : "hidden md:flex hover:bg-white/5"}
              `}
            >
              <div
                className={`max-w-md transition-all duration-1000 ${
                  isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[10px] font-bold tracking-widest text-white">
                  0{index + 1}
                </div>

                <h2 className="mb-4 text-4xl font-extralight tracking-tight text-white md:text-3xl lg:text-5xl">
                  {slide.title}
                </h2>

                <p className="mx-auto mb-10 max-w-xs text-sm font-light text-white/80">
                  {slide.subtitle}
                </p>

                <Link to={`/${slide.link}`}>
                  <button className="rounded-full bg-white px-12 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-900 transition-all hover:bg-blue-50 active:scale-95">
                    Explore
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center gap-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className="flex flex-col items-center"
          >
            <div
              className={`h-[2px] transition-all duration-700 ${
                current === index
                  ? "w-16 bg-white"
                  : "w-6 bg-white/20 hover:bg-white/40"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
