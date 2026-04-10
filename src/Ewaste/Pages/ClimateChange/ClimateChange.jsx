import React from "react";
import { useTranslation } from "react-i18next";
import { carbon, climate } from "../../../imports";

const ClimateChange = () => {
  const { t } = useTranslation();

  const sections = [
    {
      key: "carbonEmissions",
      bodyType: "listWithIntroOutro"
    },
    {
      key: "circularEconomy",
      bodyType: "textWithOutro"
    },
    {
      key: "lowEmission",
      bodyType: "listOnly"
    },
    {
      key: "carbonPrograms",
      bodyType: "listWithOutro"
    },
    {
      key: "partnerships",
      bodyType: "listOnly"
    },
    {
      key: "innovation",
      bodyType: "listOnly"
    },
    {
      key: "alignment",
      bodyType: "listOnly"
    },
    {
      key: "impact",
      bodyType: "listOnly"
    }
  ];

  return (
    <section className="bg-slate-50 py-36 text-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-sm uppercase tracking-widest text-customGreen">
            {t("ewasteClimateChange.sustainability")}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold header-txt text-[#003333]">
            {t("ewasteClimateChange.headerTitle")}
          </h2>

          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            {t("ewasteClimateChange.headerText")}
          </p>
        </div>

        {/* CLIMATE IMAGE */}
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-80 md:h-116 rounded-2xl overflow-hidden">
            <img
              src={climate}
              alt={t("ewasteClimateChange.headerTitle")}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* INTRO */}
        <div className="max-w-5xl mx-auto space-y-6 text-slate-600 leading-relaxed">
          <p>{t("ewasteClimateChange.introParagraph1")}</p>
          <p>{t("ewasteClimateChange.introParagraph2")}</p>
        </div>

        {/* CONTENT */}
        <div className="max-w-6xl mx-auto space-y-24">
          {sections.map(({ key, bodyType }, index) => (
            <div
              key={index}
              className="border-l-2 border-customGreen pl-6 space-y-4"
            >
              <h3 className="text-xl md:text-2xl font-medium text-slate-900">
                {t(`ewasteClimateChange.sections.${key}.title`)}
              </h3>

              <div className="text-sm md:text-base text-slate-600 leading-relaxed">
                {bodyType === "listWithIntroOutro" && (
                  <>
                    <p className="mb-4">
                      {t(`ewasteClimateChange.sections.${key}.bodyIntro`)}
                    </p>
                    <ul className="space-y-2 list-disc pl-5">
                      {t(`ewasteClimateChange.sections.${key}.list`, { returnObjects: true }).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <p className="mt-4">
                      {t(`ewasteClimateChange.sections.${key}.bodyOutro`)}
                    </p>
                  </>
                )}
                {bodyType === "textWithOutro" && (
                  <>
                    <p className="mb-4">{t(`ewasteClimateChange.sections.${key}.bodyIntro`)}</p>
                    <p>{t(`ewasteClimateChange.sections.${key}.bodyOutro`)}</p>
                  </>
                )}
                {bodyType === "listOnly" && (
                  <ul className="space-y-2 list-disc pl-5">
                    {t(`ewasteClimateChange.sections.${key}.list`, { returnObjects: true }).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* PLEDGE */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">
              {t("ewasteClimateChange.pledgeTitle")}
            </h3>
            <div className="text-slate-600 leading-relaxed space-y-4">
              <p>{t("ewasteClimateChange.pledgeIntro")}</p>

              <ul className="list-disc pl-6 space-y-2">
                {t("ewasteClimateChange.pledgeList", { returnObjects: true }).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <p>{t("ewasteClimateChange.pledgeOutro")}</p>
            </div>
          </div>

          <div className="relative">
            <img
              src={carbon}
              alt={t("ewasteClimateChange.pledgeTitle")}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 rounded-xl ring-1 ring-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClimateChange;