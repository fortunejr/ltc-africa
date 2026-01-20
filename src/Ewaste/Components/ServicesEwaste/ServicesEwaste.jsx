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
  Landmark
} from "lucide-react";

const industries = [
  { name: "Telecom", icon: Radio },
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
  { name: "IT & Software", icon: Cpu }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const ServicesEwaste = () => {
  return (
    <section className="bg-gray-50 py-20 overflow-x-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Core E-Waste & ITAD Services
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            We deliver responsible e-waste management and IT Asset Disposition
            services across Africa, helping organizations securely recover,
            refurbish, and recycle electronic assets.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
        >
          {[
            {
              title: "IT Equipment",
              text: "Laptops, servers, monitors, printers, UPS systems, networking devices, storage media, tablets, and accessories."
            },
            {
              title: "Telecom Equipment",
              text: "Mobile phones, PBX systems, BTS components, antennas, CCTV, POS terminals, and satellite devices."
            },
            {
              title: "Hazardous Components",
              text: "Batteries, toner cartridges, transformers, circuit boards, mercury lamps, PCB boards, and chips."
            },
            {
              title: "Other Equipment",
              text: "Medical electronics and audio-visual equipment such as monitors, speakers, and projectors."
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6"
              variants={itemVariants}
            >
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">
                {service.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Industries */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
        >
          <motion.h3
            className="text-2xl font-semibold text-center text-gray-900 mb-10"
            variants={itemVariants}
          >
            Industries We Serve
          </motion.h3>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariants}
          >
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-700 text-sm"
                  variants={itemVariants}
                >
                  <Icon size={16} />
                  <span>{industry.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          <Link
            to="/e-waste/services"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
          >
            View Full E-Waste Services
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesEwaste;
