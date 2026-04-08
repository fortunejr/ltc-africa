import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  agric,
  ewastevid,
  realestate2,
  renewableenergy,
  telecommunication,
} from "../../imports";

const slidesData = [
  {
    video: telecommunication,
    titleKey: "hero.telecom.title",
    subtitleKey: "hero.telecom.subtitle",
    link: "e-waste",
  },
  {
    video: "/videos/farm.mp4",
    titleKey: "hero.agriculture.title",
    subtitleKey: "hero.agriculture.subtitle",
    link: "agriculture",
  },
  {
    video: "/videos/realestate.mp4",
    titleKey: "hero.realEstate.title",
    subtitleKey: "hero.realEstate.subtitle",
    link: "real-estate",
  },
  {
    video: renewableenergy,
    titleKey: "hero.energy.title",
    subtitleKey: "hero.energy.subtitle",
    link: "renewable-energy",
  },
];

const Hero = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef([]);
  const hoverTimeout = useRef(null);
  const playId = useRef(0);

  // Auto slide every 8s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slidesData.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Video control
  useEffect(() => {
    const currentVideo = videoRefs.current[current];
    if (!currentVideo) return;

    const myPlayId = ++playId.current;

    videoRefs.current.forEach((video, index) => {
      if (video && index !== current && !video.paused) video.pause();
    });

    if (!currentVideo.paused) return;

    const playPromise = currentVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        if (myPlayId !== playId.current) return;
        if (err.name !== "AbortError") console.error("Video play error:", err);
      });
    }
  }, [current]);

  const handleHover = (index) => {
    clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setCurrent(index), 150);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Videos */}
      {slidesData.map((slide, index) => (
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
        {slidesData.map((slide, index) => {
          const isActive = current === index;

          return (
            <div
              key={index}
              onMouseEnter={() => handleHover(index)}
              className={`relative flex flex-1 flex-col items-center justify-center px-8 text-center transition-all duration-700 ease-in-out
                ${index !== slidesData.length - 1 ? "md:border-r md:border-white/5" : ""}
                ${isActive ? "md:flex-[2]" : "hidden md:flex hover:bg-white/"}`}
            >
              <div
                className={`max-w-md transition-all duration-1000 ${
                  isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <h2 className="mb-4 text-4xl font-light tracking-tight text-white md:text-3xl lg:text-5xl">
                  {t(slide.titleKey)}
                </h2>

                <p className="mx-auto mb-10 max-w-xs text-sm font-light text-white/80">
                  {t(slide.subtitleKey)}
                </p>

                <Link to={`/${slide.link}`}>
                  <button className="cursor-pointer bg-white px-12 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-900 transition-all hover:bg-customGreen hover:text-white active:scale-95">
                    {t("hero.explore")}
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center gap-10">
        {slidesData.map((_, index) => (
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