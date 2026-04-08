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
            {t("ewasteServicesPage.sustainability")}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold header-txt text-[#003333]">
            {t("ewasteServicesPage.headerTitle")}
          </h2>

          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            {t("ewasteServicesPage.headerText")}
          </p>
        </div>

        {/* CLIMATE IMAGE */}
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-80 md:h-116 rounded-2xl overflow-hidden">
            <img
              src={climate}
              alt={t("ewasteServicesPage.headerTitle")}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* INTRO */}
        <div className="max-w-5xl mx-auto space-y-6 text-slate-600 leading-relaxed">
          <p>{t("ewasteServicesPage.introParagraph1")}</p>
          <p>{t("ewasteServicesPage.introParagraph2")}</p>
        </div>

        {/* CONTENT */}
        <div className="max-w-6xl mx-auto space-y-24">
          {sections.map(({ key, bodyType }, index) => (
            <div
              key={index}
              className="border-l-2 border-customGreen pl-6 space-y-4"
            >
              <h3 className="text-xl md:text-2xl font-medium text-slate-900">
                {t(`ewasteServicesPage.sections.${key}.title`)}
              </h3>

              <div className="text-sm md:text-base text-slate-600 leading-relaxed">
                {bodyType === "listWithIntroOutro" && (
                  <>
                    <p className="mb-4">
                      {t(`ewasteServicesPage.sections.${key}.bodyIntro`)}
                    </p>
                    <ul className="space-y-2 list-disc pl-5">
                      {t(`ewasteServicesPage.sections.${key}.list`, { returnObjects: true }).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <p className="mt-4">
                      {t(`ewasteServicesPage.sections.${key}.bodyOutro`)}
                    </p>
                  </>
                )}
                {bodyType === "textWithOutro" && (
                  <>
                    <p className="mb-4">{t(`ewasteServicesPage.sections.${key}.bodyIntro`)}</p>
                    <p>{t(`ewasteServicesPage.sections.${key}.bodyOutro`)}</p>
                  </>
                )}
                {bodyType === "listOnly" && (
                  <ul className="space-y-2 list-disc pl-5">
                    {t(`ewasteServicesPage.sections.${key}.list`, { returnObjects: true }).map((item, i) => (
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
              {t("ewasteServicesPage.pledgeTitle")}
            </h3>
            <div className="text-slate-600 leading-relaxed space-y-4">
              <p>{t("ewasteServicesPage.pledgeIntro")}</p>

              <ul className="list-disc pl-6 space-y-2">
                {t("ewasteServicesPage.pledgeList", { returnObjects: true }).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <p>{t("ewasteServicesPage.pledgeOutro")}</p>
            </div>
          </div>

          <div className="relative">
            <img
              src={carbon}
              alt={t("ewasteServicesPage.pledgeTitle")}
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