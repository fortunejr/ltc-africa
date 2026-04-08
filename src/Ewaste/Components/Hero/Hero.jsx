import React, { useEffect, useState } from "react";
import {
  recycling,
  ewastevideo,
  dirttruck,
  garbage,
  circularsustain,
  telecommunication,
  carbonemission,
  itad,
} from "../../../imports";
import { useTranslation } from "react-i18next";

const slidesData = [
  {
    video: telecommunication,
    titleKey: "ewaste.hero.weeeTelecom.title",
    textKey: "ewaste.hero.weeeTelecom.text",
  },
  {
    video: itad,
    titleKey: "ewaste.hero.itad.title",
    textKey: "ewaste.hero.itad.text",
  },
  {
    video: carbonemission,
    titleKey: "ewaste.hero.socialCommitment.title",
    textKey: "ewaste.hero.socialCommitment.text",
  },
  {
    video: dirttruck,
    titleKey: "ewaste.hero.epr.title",
    textKey: "ewaste.hero.epr.text",
  },
  {
    video: circularsustain,
    titleKey: "ewaste.hero.circularSustain.title",
    textKey: "ewaste.hero.circularSustain.text",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slidesData.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slidesData.map((slide, index) => (
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
          <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black via-black/70 to-transparent" />

          {/* Content */}
          <div className="relative z-10 pt-14 flex h-full items-center">
            <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
              <div className="max-w-2xl text-white">
                <h1 className="header-txt mb-5 text-3xl md:text-6xl font-semibold lg:leading-14">
                  {t(slide.titleKey)}
                </h1>

                <p className="mb-8 text-sm md:text-lg text-white/90 leading-relaxed">
                  {t(slide.textKey)}
                </p>

                <a
                  href="/e-waste/contact"
                  className="inline-flex items-center bg-customGreen px-6 py-3 text-sm md:text-base font-medium text-white transition hover:opacity-90"
                >
                  {t("ewaste.hero.contact")}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 w-1.5 rounded-full transition ${
              current === index ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;