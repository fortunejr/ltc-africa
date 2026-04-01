import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  const services = [
    {
      title: "IT/Telecom Equipment",
      text: "Desktop computers, laptops, servers, monitors, printers, network devices, storage equipment, mobile phones, PBX systems, antennas, CCTV systems, POS terminals and other telecom infrastructure.",
      image: "/images/pile.jpg",
    },
    {
      title: "Hazardous Components",
      text: "Batteries (Li-ion, lead-acid), toner cartridges, capacitors, transformers, circuit boards, fluorescent tubes and mercury containing lamps.",
      image: "/images/hazard.jpg",
    },
    {
      title: "Medical Electronics",
      text: "Medical electronic devices including ECG machines, monitoring equipment and other hospital electronic systems.",
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
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-24"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#003333] header-txt mb-6 tracking-tight">
            Core E-Waste & ITAD Services
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed">
            We deliver responsible e-waste management and IT Asset Disposition
            services across Africa, helping organizations securely recover,
            refurbish and recycle electronic assets.
          </p>
        </motion.div>

        {/* Services Layout */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 mb-28"
          variants={containerVariants}
        >
          {/* Featured Service */}
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

          {/* Secondary Services */}
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

        {/* Industries */}
        <motion.div className="mb-24" variants={containerVariants}>
          <motion.div
            className="flex items-center justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            <div className="h-px w-12 bg-gray-300" />
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">
              Industries We Serve
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

        {/* CTA */}
        <motion.div className="text-center" variants={itemVariants}>
          <Link
            to="/e-waste/services"
            className="inline-flex items-center justify-center px-10 py-4 bg-customBlue text-white text-sm font-bold uppercase tracking-widest hover:bg-customGreen transition shadow-lg"
          >
            View Full E-Waste Services
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesEwaste;
