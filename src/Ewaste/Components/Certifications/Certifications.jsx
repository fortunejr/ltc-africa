import React from "react";
import { motion } from "framer-motion";
import { sust, compliance, global, permit } from "../../../imports";

const certificationsData = [
  {
    title: "National & Regional Environmental Permits",
    image: permit,
    items: [
      "Waste Management License / Permit issued by national environmental agencies.",
      "Hazardous Waste Handling Permit – Authorizes collection, transport, storage, and disposal of hazardous electronic components.",
      "Import/Export Permit for E-Waste – Compliance with transboundary e-waste movements under national laws.",
      "Local Operational Compliance Certificates – For warehouses, processing centers, and collection depots",
    ],
  },
  {
    title: "International Conventions & Compliance",
    image: compliance,
    items: [
      "Basel Convention Compliance – Ensures all transboundary movements of hazardous waste and e-waste are conducted legally and safely.",
      "EU WEEE Directive Guidelines (as best practice) – Adoption of extended producer responsibility (EPR) standards and safe electronic waste management principles.",
    ],
  },
  {
    title: "Global Certifications & Standards",
    image: global,
    items: [
      "ISO 14001: Environmental Management System (EMS) – Demonstrates commitment to sustainable operations and continual environmental performance improvement.",
      "ISO 9001: Quality Management System – Ensures quality and consistency in recycling, processing, and ITAD services.",
      "R2 (Responsible Recycling) Certification – Industry standard for safe, responsible, and secure electronics recycling and IT asset disposition.",
      "OHSAS 18001 / ISO 45001: Occupational Health &amp; Safety Management – Commitment to worker safety and operational risk management.",
      "ISO 27001 (Information Security Management) – For secure handling and data destruction in IT asset disposition (ITAD) operations.",
    ],
  },
  {
    title: "Corporate Sustainability & Recognition",
    image: sust,
    items: [
      "EPR Program Certification – For clients and partners under Extended Producer Responsibility initiatives.",
      "CSR &amp; ESG Reporting Compliance – Supporting corporate clients in sustainability reporting and environmental stewardship.",
    ],
  },
  {
    title: "Partnership-Based Approvals",
    image: "/images/partner-based.jpg",
    items: [
      "Authorized partner of UNEP, UNDP, WFP, and other international environmental programs for responsible e-waste management and circular economy initiatives.",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] },
  },
};

const Certifications = () => {
  return (
    <section className="w-full bg-gray-50/50 py-24 md:py-32 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto  lg:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header - Centered for more impact */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <span className="text-customGreen font-bold tracking-[0.2em] text-xs uppercase block mb-4">
            Compliance & Standards
          </span>
          <h2 className="header-txt text-3xl md:text-4xl font-bold text-[#003333] tracking-tight">
            Certifications & Regulatory Alignment
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              className="group bg-white p-2 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
              variants={itemVariants}
            >
              {/* Image Container */}
              <div className="relative mb-6 overflow-hidden rounded-xl bg-gray-100 aspect-[4/3]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003333]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="px-4 pb-6 flex-grow">
                <h3 className="text-xl font-bold text-[#003333] mb-4 leading-snug group-hover:text-customGreen transition-colors">
                  {cert.title}
                </h3>

                <ul className="space-y-3">
                  {cert.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-customGreen flex-shrink-0" />
                      <p className="text-sm text-gray-500 leading-relaxed italic group-hover:text-gray-700 transition-colors">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Certifications;