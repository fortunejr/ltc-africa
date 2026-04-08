import React from "react";
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
import { itequipments, harzadous, telecom, others } from "../../../imports";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const industries = [
  { name: "Telecom", icon: Radio },
  { name: "Mining", icon: Pickaxe },
  { name: "Marine", icon: FishingHook },
  { name: "Finance", icon: Banknote },
  { name: "Government", icon: ShieldCheck },
  { name: "Energy", icon: Leaf },
  { name: "Media", icon: Building2 },
  { name: "Healthcare", icon: Stethoscope },
  { name: "Education", icon: GraduationCap },
  { name: "Manufacturing", icon: Factory },
  { name: "Retail", icon: ShoppingCart },
  { name: "NGOs", icon: HeartHandshake },
  { name: "Hospitality", icon: Hotel },
  { name: "Logistics", icon: Truck },
  { name: "Shipping", icon: Ship },
  { name: "Aviation", icon: Plane },
  { name: "Public Utilities", icon: Landmark },
  { name: "Real Estate", icon: Building2 },
  { name: "IT & Software", icon: Cpu },
];

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

  const services = [
    {
      title: t("ewasteServicesPage.services.borderlessCollection.title"),
      text: t("ewasteServicesPage.services.borderlessCollection.text"),
    },
    {
      title: t("ewasteServicesPage.services.assetRecovery.title"),
      text: t("ewasteServicesPage.services.assetRecovery.text"),
    },
    {
      title: t("ewasteServicesPage.services.epr.title"),
      text: t("ewasteServicesPage.services.epr.text"),
    },
    {
      title: t("ewasteServicesPage.services.consultancy.title"),
      text: t("ewasteServicesPage.services.consultancy.text"),
    },
    {
      title: t("ewasteServicesPage.services.buyback.title"),
      text: t("ewasteServicesPage.services.buyback.text"),
    },
    {
      title: t("ewasteServicesPage.services.weeeToEnergy.title"),
      text: t("ewasteServicesPage.services.weeeToEnergy.text"),
    },
  ];

  const acceptedItems = [
    {
      title: t("ewasteServicesPage.accepted.it.title"),
      text: t("ewasteServicesPage.accepted.it.text"),
      image: itequipments,
    },
    {
      title: t("ewasteServicesPage.accepted.telecom.title"),
      text: t("ewasteServicesPage.accepted.telecom.text"),
      image: telecom,
    },
    {
      title: t("ewasteServicesPage.accepted.hazardous.title"),
      text: t("ewasteServicesPage.accepted.hazardous.text"),
      image: harzadous,
    },
    {
      title: t("ewasteServicesPage.accepted.others.title"),
      text: t("ewasteServicesPage.accepted.others.text"),
      image: others,
    },
  ];

  return (
    <section className="w-full bg-white text-slate-800 py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-32">

        {/* CORE SERVICE */}
        <div className="max-w-4xl space-y-6">
          <span className="text-sm uppercase tracking-widest text-customGreen">
            {t("ewasteServicesPage.coreServices.header")}
          </span>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed mt-5">
            {t("ewasteServicesPage.coreServices.description")}
          </p>
        </div>

        {/* SERVICES */}
        <div className="space-y-20 max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-bold header-txt text-[#003333]">
            {t("ewasteServicesPage.services.title")}
          </h2>

          {services.map((service, index) => (
            <div key={index} className="border-l-2 border-customGreen pl-6 space-y-3">
              <h3 className="text-xl font-medium text-slate-900">{service.title}</h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">{service.text}</p>
            </div>
          ))}
        </div>

        {/* INDUSTRIES */}
        <div className="space-y-10">
          <h2 className="text-center text-2xl md:text-4xl font-bold header-txt text-[#003333]">
            {t("ewasteServicesPage.industries.title")}
          </h2>

          <motion.div className="flex flex-wrap justify-center gap-4" variants={containerVariants}>
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 px-3 py-3 border border-gray-200 bg-white text-gray-600 text-sm font-medium hover:border-customGreen hover:text-customGreen hover:shadow-md transition"
                  variants={itemVariants}
                >
                  <Icon size={18} strokeWidth={1.5} />
                  <span>{t(`ewasteServicesPage.industries.list.${industry.name}`)}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* WHAT WE ACCEPT */}
        <div className="space-y-16 max-w-6xl">
          <h2 className="text-2xl md:text-4xl header-txt font-bold text-[#003333]">
            {t("ewasteServicesPage.accepted.title")}
          </h2>

          <div className="grid gap-10 sm:grid-cols-2">
            {acceptedItems.map((item, index) => (
              <div key={index} className="group rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden transition hover:shadow-lg">
                <div className="h-48 w-full overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-contain  transition-transform duration-300 group-hover:scale-105"/>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-medium text-customBlue">{item.title}</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesEwaste;