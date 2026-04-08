import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { sust, compliance, global, permit } from "../../../imports";

const Certifications = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const certificationsData = [
    {
      title: t("certifications.sections.permits.title"),
      image: permit,
      items: t("certifications.sections.permits.items", { returnObjects: true })
    },
    {
      title: t("certifications.sections.compliance.title"),
      image: compliance,
      items: t("certifications.sections.compliance.items", { returnObjects: true })
    },
    {
      title: t("certifications.sections.global.title"),
      image: global,
      items: t("certifications.sections.global.items", { returnObjects: true })
    },
    {
      title: t("certifications.sections.sustainability.title"),
      image: sust,
      items: t("certifications.sections.sustainability.items", { returnObjects: true })
    },
    {
      title: t("certifications.sections.partnerships.title"),
      image: "/images/partner-based.jpg",
      items: t("certifications.sections.partnerships.items", { returnObjects: true })
    }
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-customGreen py-20 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-center mb-24">
          <h2 className="header-txt text-3xl md:text-4xl font-bold text-[#003333] tracking-tight leading-tight">
            {t("certifications.title")}
          </h2>

          <span className="text-white font-bold tracking-[0.25em] text-xs uppercase block mt-5">
            {t("certifications.subtitle")}
          </span>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
            {certificationsData.map((cert, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col w-full max-w-[380px]"
              >
                <div className="relative mb-8 overflow-hidden rounded-xl bg-gray-100 aspect-[4/3]">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <h3 className="text-xl font-semibold text-[#003333] mb-4 leading-snug group-hover:text-customGreen transition-colors">
                  {cert.title}
                </h3>

                <button
                  onClick={() => toggleDropdown(index)}
                  className="text-customGreen text-sm font-semibold mb-4 text-left"
                >
                  {openIndex === index
                    ? t("certifications.readLess")
                    : t("certifications.readMore")}
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-4 overflow-hidden"
                    >
                      {cert.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-customGreen flex-shrink-0" />
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {item}
                          </p>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;