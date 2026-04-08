import React from "react";
import { useTranslation } from "react-i18next";

const CircularEconomy = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-36 px-6">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#003333] header-txt">
            {t("circularEconomy.title")}
          </h1>

          <p className="text-lg text-gray-700 font-medium">
            {t("circularEconomy.subtitle")}
          </p>
        </div>

        {/* INTRO */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <img
            src="/images/infinity.jpeg"
            alt={t("circularEconomy.introAlt")}
            className="rounded-2xl object-cover w-full h-[450px]"
          />

          <div className="space-y-6 text-base text-gray-600 leading-relaxed">
            <p>{t("circularEconomy.introText")}</p>

            <h3 className="text-xl font-semibold text-blue-950">
              {t("circularEconomy.commitmentTitle")}
            </h3>

            <p>{t("circularEconomy.commitmentText")}</p>
          </div>
        </div>

        {/* PRINCIPLES HEADER */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl header-txt font-semibold text-blue-950">
            {t("circularEconomy.principlesTitle")}
          </h2>
        </div>

        {/* PRINCIPLES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {t("circularEconomy.principles", { returnObjects: true }).map((principle, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden">
              <img src={principle.image} className="h-48 w-full object-cover" />
              <div className="p-7 space-y-4">
                <h3 className="font-semibold text-blue-950 text-lg">
                  {principle.title}
                </h3>

                <p className="text-base text-gray-600">{principle.description}</p>

                {principle.items && (
                  <ul className="text-base text-gray-600 space-y-1 list-disc pl-5">
                    {principle.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* KEY FOCUS AREAS */}
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <img
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7"
            className="rounded-2xl object-cover w-full h-[420px]"
          />

          <div className="space-y-6 text-base text-gray-600 leading-relaxed">
            <h3 className="text-2xl font-semibold text-blue-950">
              {t("circularEconomy.focusTitle")}
            </h3>

            {t("circularEconomy.focusAreas", { returnObjects: true }).map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <ul className="space-y-1 list-disc pl-5">
              {t("circularEconomy.focusList", { returnObjects: true }).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* IMPACT + GOVERNANCE */}
        <div className="grid md:grid-cols-3 gap-10">
          {t("circularEconomy.metrics", { returnObjects: true }).map((metric, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-8 space-y-5">
              <h3 className="text-xl font-semibold text-blue-950">{metric.title}</h3>
              <p className="text-gray-600">{metric.description}</p>
              {metric.items && (
                <ul className="space-y-2 list-disc pl-5 text-gray-600">
                  {metric.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CircularEconomy;