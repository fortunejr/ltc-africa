import React from "react";
import { motion } from "framer-motion";
import { sust, compliance, global, permit } from "../../../imports";

const certificationsData = [
  {
    title: "National & Regional Environmental Permits",
    image: permit,
    items: [
      "Waste Management License / Permit issued by national environmental agencies across countries of operation.",
      "Hazardous Waste Handling Permit authorizing collection, transport, storage, and disposal of hazardous electronic components.",
    ],
  },
  {
    title: "International Conventions & Compliance",
    image: compliance,
    items: [
      "Basel Convention compliance ensuring lawful and safe transboundary movement of e-waste.",
      "Alignment with EU WEEE Directive guidelines and Extended Producer Responsibility principles.",
    ],
  },
  {
    title: "Global Certifications & Standards",
    image: global,
    items: [
      "ISO 14001 Environmental Management System for sustainable operations.",
      "ISO 9001 Quality Management System ensuring consistency across recycling and ITAD services.",
    ],
  },
  {
    title: "Corporate Sustainability & Recognition",
    image: sust,
    items: [
      "EPR program certifications for corporate and manufacturing partners.",
      "CSR and ESG reporting support for environmental accountability and compliance.",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Certifications = () => {
  return (
    <section className="w-full bg-white py-24 overflow-x-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Heading */}
        <motion.div
          className="max-w-2xl mb-16"
          variants={itemVariants}
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            Compliance & Standards
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Certifications & Regulatory Alignment
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
        >
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              className="flex flex-col"
              variants={itemVariants}
            >
              {/* Image */}
              <div className="mb-6 overflow-hidden rounded-lg">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 object-cover"
                />
              </div>

              {/* Content */}
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {cert.title}
              </h3>

              <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                {cert.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Certifications;
