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
      "OHSAS 18001 / ISO 45001: Occupational Health & Safety Management – Commitment to worker safety and operational risk management.",
      "ISO 27001 (Information Security Management) – For secure handling and data destruction in IT asset disposition (ITAD) operations.",
    ],
  },
  {
    title: "Corporate Sustainability & Recognition",
    image: sust,
    items: [
      "EPR Program Certification – For clients and partners under Extended Producer Responsibility initiatives.",
      "CSR & ESG Reporting Compliance – Supporting corporate clients in sustainability reporting and environmental stewardship.",
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
    <section className="w-full bg-customGreen py-28 md:py-36 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div className="text-center mb-24" variants={itemVariants}>
          <span className="text-white font-bold tracking-[0.25em] text-xs uppercase block mb-5">
            Compliance & Standards
          </span>

          <h2 className="header-txt text-3xl md:text-4xl lg:text-5xl font-bold text-[#003333] tracking-tight leading-tight">
            Certifications & Regulatory Alignment
          </h2>
        </motion.div>

        {/* Grid Wrapper */}
        <div className="flex justify-center">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={containerVariants}
          >
            {certificationsData.map((cert, index) => (
              <motion.div
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full w-full max-w-[380px]"
                variants={itemVariants}
              >
                {/* Image */}
                <div className="relative mb-8 overflow-hidden rounded-xl bg-gray-100 aspect-[4/3]">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-[#003333] mb-6 leading-snug group-hover:text-customGreen transition-colors">
                    {cert.title}
                  </h3>

                  <ul className="space-y-4">
                    {cert.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-customGreen flex-shrink-0" />
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;