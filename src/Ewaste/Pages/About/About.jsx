import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Cpu,
  Globe,
  Recycle,
  Leaf,
  User,
  Eye,
  Target,
} from "lucide-react";
import { iso9001, iso14001, iso45001, iso27001, r2 } from "../../../imports";
import { Link } from "react-router-dom";
import Certifications from "../../Components/Certifications/Certifications";
import { useTranslation } from "react-i18next";

/* ANIMATION VARIANTS */

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const AboutEwaste = () => {

  const { t } = useTranslation();

  const keyFacts = [
    {
      icon: Factory,
      header: t("ewasteAboutPage.keyFacts.facts.industry.header"),
      text: t("ewasteAboutPage.keyFacts.facts.industry.text"),
    },
    {
      icon: Cpu,
      header: t("ewasteAboutPage.keyFacts.facts.focus.header"),
      text: t("ewasteAboutPage.keyFacts.facts.focus.text"),
    },
    {
      icon: Globe,
      header: t("ewasteAboutPage.keyFacts.facts.region.header"),
      text: t("ewasteAboutPage.keyFacts.facts.region.text"),
    },
    {
      icon: Recycle,
      header: t("ewasteAboutPage.keyFacts.facts.services.header"),
      text: t("ewasteAboutPage.keyFacts.facts.services.text"),
    },
    {
      icon: Leaf,
      header: t("ewasteAboutPage.keyFacts.facts.sustainability.header"),
      text: t("ewasteAboutPage.keyFacts.facts.sustainability.text"),
    },
  ];

  return (
    <section className="bg-white text-slate-800 pt-20">

      {/* HERO */}
      <div className="relative w-full h-[85vh] overflow-hidden">
        <img
          src="/images/about-img.jpg"
          alt="LTC Africa Recycling"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/80" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center text-white"
        >

          <motion.h1
            variants={fadeUp}
            className="text-3xl lg:text-4xl mb-6 header-txt font-bold bg-customBlue w-fit p-2"
          >
            {t("ewasteAboutPage.hero.title")}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-xl text-customGreen font-medium max-w-3xl p-2"
          >
            {t("ewasteAboutPage.hero.subtitle")}
          </motion.p>

          <motion.p variants={fadeUp} className="uppercase font-bold my-2 p-2">
            {t("ewasteAboutPage.hero.explore")}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="space-y-1 text-base uppercase px-2"
          >
            <p>
              <a href="#who-we-are" className="hover:text-customGreen p-2">
                {t("ewasteAboutPage.hero.whoWeAre")}
              </a>
            </p>

            <p>
              <a href="#key-facts" className="hover:text-customGreen p-2">
                {t("ewasteAboutPage.hero.keyFacts")}
              </a>
            </p>

            <p>
              <a href="#certification" className="hover:text-customGreen p-2">
                {t("ewasteAboutPage.hero.certification")}
              </a>
            </p>
          </motion.div>

        </motion.div>
      </div>

      {/* INTRO / WHO WE ARE */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-24 space-y-12"
      >

        <motion.div
          id="about"
          className="space-y-6 text-gray-700 text-base leading-relaxed px-2 md:px-4"
        >

          <div id="who-we-are" className="pt-10 space-y-6">

            <motion.p
              variants={fadeUp}
              className="header-txt text-3xl md:text-4xl font-bold text-[#003333] text-center p-2"
            >
              {t("ewasteAboutPage.whoWeAre.title")}
            </motion.p>

            <motion.p variants={fadeUp} className="p-4">
              {t("ewasteAboutPage.whoWeAre.description")}
            </motion.p>

          </div>
        </motion.div>

        {/* KEY FACTS */}
        <motion.h2
          variants={fadeUp}
          id="key-facts"
          className="header-txt text-3xl md:text-4xl font-bold text-[#003333] text-center p-4"
        >
          {t("ewasteAboutPage.keyFacts.title")}
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 text-center"
        >

          {keyFacts.map(({ icon: Icon, header, text }, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white border border-gray-100 rounded-2xl transition-all"
            >

              <Icon className="mx-auto text-customGreen mb-3" size={28} />

              <p className="text-lg font-bold">
                {header}
              </p>

              <p className="text-sm text-gray-600">
                {text}
              </p>

            </motion.div>
          ))}

        </motion.div>

      </motion.div>

      {/* CERTIFICATIONS */}
      <div id="certification">
        <Certifications />
      </div>

    </section>
  );
};

export default AboutEwaste;