import React from "react";
import { motion } from "framer-motion";
import { Globe, CheckCircle, Users, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const GlobalFootprint = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Globe, value: "120+", label: t("globalFootprint.stats.countries") },
    { icon: Users, value: "4", label: t("globalFootprint.stats.continents") },
    { icon: CheckCircle, value: "100%", label: t("globalFootprint.stats.certified") },
    { icon: Award, value: "Global", label: t("globalFootprint.stats.network") },
  ];

  return (
    <section className="bg-white py-36 px-6">
      <div className="space-y-20">
        {/* Header */}
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#003333] header-txt">
            {t("globalFootprint.title")}
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {t("globalFootprint.description")}
          </p>
        </motion.div>

        {/* Map Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full">
            <img
              src="/images/map.png"
              alt={t("globalFootprint.mapAlt")}
              className="w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Compliance / Standards */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-start max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
            <p>{t("globalFootprint.compliance.description")}</p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6 shadow-md">
            <h3 className="text-lg font-semibold text-blue-950 mb-4">
              {t("globalFootprint.compliance.title")}
            </h3>
            <ul className="space-y-2 text-gray-600 list-disc list-inside text-sm md:text-base">
              <li>{t("globalFootprint.compliance.item1")}</li>
              <li>{t("globalFootprint.compliance.item2")}</li>
              <li>{t("globalFootprint.compliance.item3")}</li>
              <li>{t("globalFootprint.compliance.item4")}</li>
            </ul>
          </div>
        </motion.div>

        {/* Global Partnerships */}
        <motion.div
          className="rounded-2xl bg-gray-50 p-8 space-y-4 shadow-md max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-xl font-semibold text-blue-950">
            {t("globalFootprint.partnerships.title")}
          </h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-5xl mx-auto">
            {t("globalFootprint.partnerships.desc1")}
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-5xl mx-auto">
            {t("globalFootprint.partnerships.desc2")}
          </p>
          <ul className="list-disc list-inside space-y-2 max-w-5xl mx-auto text-gray-600 text-sm md:text-base">
            <li>{t("globalFootprint.partnerships.item1")}</li>
            <li>{t("globalFootprint.partnerships.item2")}</li>
            <li>{t("globalFootprint.partnerships.item3")}</li>
            <li>{t("globalFootprint.partnerships.item4")}</li>
          </ul>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-5xl mx-auto">
            {t("globalFootprint.partnerships.desc3")}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={i}
              className="rounded-xl bg-gray-50 p-6 flex flex-col items-center shadow hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <Icon className="text-blue-950 mb-3" size={36} />
              <h4 className="text-3xl font-semibold text-blue-950">{value}</h4>
              <p className="mt-1 text-sm text-gray-600 text-center">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalFootprint;