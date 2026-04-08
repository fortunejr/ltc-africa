import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import {
  Building2,
  ShieldCheck,
  Leaf,
  Radio,
  Banknote,
  Stethoscope,
  GraduationCap,
  Factory,
  ShoppingCart,
  HeartHandshake,
  Hotel,
  Truck,
  Ship,
  Plane,
  Cpu,
  Landmark,
  Pickaxe,
  FishingHook,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ServicesEwaste = () => {
  const { t } = useTranslation();

  const industries = [
    { name: t("servicesComponent.industries.telecom"), icon: Radio },
    { name: t("servicesComponent.industries.mining"), icon: Pickaxe },
    { name: t("servicesComponent.industries.marine"), icon: FishingHook },
    { name: t("servicesComponent.industries.finance"), icon: Banknote },
    { name: t("servicesComponent.industries.government"), icon: ShieldCheck },
    { name: t("servicesComponent.industries.energy"), icon: Leaf },
    { name: t("servicesComponent.industries.media"), icon: Building2 },
    { name: t("servicesComponent.industries.healthcare"), icon: Stethoscope },
    { name: t("servicesComponent.industries.education"), icon: GraduationCap },
    { name: t("servicesComponent.industries.manufacturing"), icon: Factory },
    { name: t("servicesComponent.industries.retail"), icon: ShoppingCart },
    { name: t("servicesComponent.industries.ngos"), icon: HeartHandshake },
    { name: t("servicesComponent.industries.hospitality"), icon: Hotel },
    { name: t("servicesComponent.industries.logistics"), icon: Truck },
    { name: t("servicesComponent.industries.shipping"), icon: Ship },
    { name: t("servicesComponent.industries.aviation"), icon: Plane },
    { name: t("servicesComponent.industries.utilities"), icon: Landmark },
    { name: t("servicesComponent.industries.realEstate"), icon: Building2 },
    { name: t("servicesComponent.industries.itSoftware"), icon: Cpu },
  ];

  const services = [
    {
      title: t("servicesComponent.services.itTelecomTitle"),
      text: t("servicesComponent.services.itTelecomText"),
      image: "/images/pile.jpg",
    },
    {
      title: t("servicesComponent.services.hazardousTitle"),
      text: t("servicesComponent.services.hazardousText"),
      image: "/images/hazard.jpg",
    },
    {
      title: t("servicesComponent.services.medicalTitle"),
      text: t("servicesComponent.services.medicalText"),
      image: "/images/medical.jpg",
    },
  ];

  return (
    <section className="bg-[#fcfcfc] py-24 md:py-32 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="max-w-3xl mx-auto text-center mb-24"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#003333] header-txt mb-6 tracking-tight">
            {t("servicesComponent.headerTitle")}
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed">
            {t("servicesComponent.headerText")}
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 mb-28"
          variants={containerVariants}
        >
          <motion.div
            className="relative overflow-hidden border border-gray-200 bg-white shadow-sm group"
            variants={itemVariants}
          >
            <div className="h-[420px] w-full overflow-hidden">
              <img
                src={services[0].image}
                alt={services[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute bottom-10 left-10 max-w-lg text-white">
              <h3 className="text-3xl font-bold mb-4">{services[0].title}</h3>

              <p className="text-sm leading-relaxed text-white/90">
                {services[0].text}
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {services.slice(1).map((service, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 shadow-sm hover:shadow-xl transition duration-300 group"
                variants={itemVariants}
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-customGreen">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="mb-24" variants={containerVariants}>
          <motion.div
            className="flex items-center justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            <div className="h-px w-12 bg-gray-300" />
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">
              {t("servicesComponent.industriesTitle")}
            </h3>
            <div className="h-px w-12 bg-gray-300" />
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
          >
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 px-3 py-3 border border-gray-200 bg-white text-gray-600 text-sm font-medium hover:border-customGreen hover:text-customGreen hover:shadow-md transition"
                  variants={itemVariants}
                >
                  <Icon size={18} strokeWidth={1.5} />
                  <span>{industry.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div className="text-center" variants={itemVariants}>
          <Link
            to="/e-waste/services"
            className="inline-flex items-center justify-center px-10 py-4 bg-customBlue text-white text-sm font-bold uppercase tracking-widest hover:bg-customGreen transition shadow-lg"
          >
            {t("servicesComponent.cta")}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesEwaste;