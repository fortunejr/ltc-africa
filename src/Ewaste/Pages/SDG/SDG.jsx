import React from "react";
import { motion } from "framer-motion";
import { CloudSnow, Trash2, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const sdgGoals = [3,4,7,8,9,11,12,13,17];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

const SDGEwaste = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-20">
      <div className="flex flex-col gap-40">
        {/* Header Section with Video */}
        <div className="relative flex items-center justify-center py-48 overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
            <source src="/videos/trees.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="relative z-20 flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 gap-20">
            <div className="max-w-3xl text-center md:text-left">
              <span className="text-sm uppercase tracking-widest text-customGreen">{t("sdgServicesPage.headerSmall")}</span>
              <h2 className="text-3xl md:text-5xl font-bold header-txt text-white">{t("sdgServicesPage.headerTitle")}</h2>
              <p className="mt-6 text-lg text-gray-100 leading-relaxed">{t("sdgServicesPage.headerText")}</p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 overflow-hidden rounded-2xl">
                <img src="/images/sustainable.png" alt={t("sdgServicesPage.headerTitle")} className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* SDG Cards */}
        <div className="px-6 max-w-7xl mx-auto flex flex-col gap-40">
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={container}>
            {sdgGoals.map(id => (
              <motion.div key={id} className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm" variants={fadeUp}>
                <span className="text-xs font-medium text-gray-400">SDG {id}</span>
                <h3 className="mt-2 text-lg font-semibold text-blue-950">{t(`sdgServicesPage.sdgCards.${id}.title`)}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{t(`sdgServicesPage.sdgCards.${id}.text`)}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Impact Stats */}
          <motion.div className="grid sm:grid-cols-3 gap-12 text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={container}>
            <motion.div className="rounded-xl bg-gray-50 p-10 flex flex-col items-center" variants={fadeUp}>
              <Trash2 className="text-blue-950 mb-4" size={40} />
              <h4 className="text-4xl font-semibold text-blue-950">{t("sdgServicesPage.impactStats.eWasteNum")}</h4>
              <p className="mt-2 text-sm text-gray-600">{t("sdgServicesPage.impactStats.eWaste")}</p>
            </motion.div>
            <motion.div className="rounded-xl bg-gray-50 p-10 flex flex-col items-center" variants={fadeUp}>
              <Users className="text-blue-950 mb-4" size={40} />
              <h4 className="text-4xl font-semibold text-blue-950">{t("sdgServicesPage.impactStats.jobsNum")}</h4>
              <p className="mt-2 text-sm text-gray-600">{t("sdgServicesPage.impactStats.jobs")}</p>
            </motion.div>
            <motion.div className="rounded-xl bg-gray-50 p-10 flex flex-col items-center" variants={fadeUp}>
              <CloudSnow className="text-blue-950 mb-4" size={40} />
              <h4 className="text-4xl font-semibold text-blue-950">{t("sdgServicesPage.impactStats.co2Num")}</h4>
              <p className="mt-2 text-sm text-gray-600">{t("sdgServicesPage.impactStats.co2")}</p>
            </motion.div>
          </motion.div>

          {/* Framework Section */}
          <motion.div className="rounded-2xl bg-gray-50 p-12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <h3 className="text-2xl font-semibold text-[#003333] mb-8">{t("sdgServicesPage.frameworkTitle")}</h3>
            <ul className="grid md:grid-cols-2 gap-8 text-base text-gray-700">
              {Object.entries(t("sdgServicesPage.frameworkList", { returnObjects: true })).map(([key, text]) => (
                <li key={key}><span className="font-medium text-blue-950">{key.charAt(0).toUpperCase() + key.slice(1)}:</span> {text}</li>
              ))}
            </ul>
          </motion.div>

          {/* Commitment Section */}
          <motion.div className="max-w-4xl mx-auto text-center space-y-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <h3 className="text-3xl md:text-4xl font-bold text-[#003333] header-txt">{t("sdgServicesPage.commitmentTitle")}</h3>
            <p className="text-lg text-gray-700 leading-relaxed">{t("sdgServicesPage.commitmentText")}</p>
          </motion.div>

          {/* Africa Impact Section */}
          <motion.div className="max-w-4xl mx-auto text-left md:text-center space-y-10 pb-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <h3 className="text-3xl md:text-4xl font-bold text-[#003333] header-txt">{t("sdgServicesPage.africaImpactTitle")}</h3>
            <ul className="list-disc list-inside space-y-5 text-gray-700 text-lg leading-relaxed">
              {t("sdgServicesPage.africaImpactList", { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="mt-10 text-lg font-medium text-gray-800 italic">{t("sdgServicesPage.africaImpactQuote")}</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SDGEwaste;