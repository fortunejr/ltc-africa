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
            Welcome to LTC Africa Recycling!
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-xl text-customGreen font-medium max-w-3xl p-2"
          >
            Pioneering Sustainable WEEE & IT/Telecom Waste Solutions Across
            Africa
          </motion.p>

          <motion.p variants={fadeUp} className="uppercase font-bold my-2 p-2">
            Explore this page
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="space-y-1 text-base uppercase px-2"
          >
            <p>
              <a href="#about" className="hover:text-customGreen p-2">
                About The Company
              </a>
            </p>
            <p>
              <a
                href="#who-we-are"
                className="hover:text-customGreen p-2"
              >
                Who We Are
              </a>
            </p>
            <p>
              <a
                href="#key-facts"
                className="hover:text-customGreen p-2"
              >
                Key Facts
              </a>
            </p>
            <p>
              <a
                href="#values"
                className="hover:text-customGreen p-2"
              >
                Our Values
              </a>
            </p>
            <p>
              <a
                href="#mission"
                className="hover:text-customGreen p-2"
              >
                Mission & Vision
              </a>
            </p>
            <p>
              <a
                href="#leadership"
                className="hover:text-customGreen p-2"
              >
                Leadership
              </a>
            </p>
            <p>
              <a
                href="#certification"
                className="hover:text-customGreen p-2"
              >
                Certification
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
          <motion.p variants={fadeUp} className="p-4">
            LTC Africa Recycling, a proud member of the LTC Africa Group, is a
            modern and fully registered Waste Electrical and Electronic
            Equipment (WEEE) management company dedicated to redefining how
            Africa handles electronic waste. Since our inception in 2013, we
            have grown into a pan-African leader in sustainable, compliant, and
            technology-driven e-waste management, while also advancing the
            circular economy through responsible recycling, IT asset disposition
            (ITAD), and resource recovery.
          </motion.p>

          <motion.p variants={fadeUp} className="p-4">
            With borderless operations and facilities strategically located in
            Nigeria, Ghana, Morocco, South Africa, Botswana, Tanzania, and
            Madagascar, LTC Africa Recycling provides end-to-end e-waste
            management and on-site collection services without the limits of
            geographical area or location.
          </motion.p>

          <motion.p variants={fadeUp} className="p-4">
            Through innovative ITAD solutions, we help organizations securely
            recover value from outdated or decommissioned electronic equipment
            while protecting sensitive data, promoting reuse, and minimizing
            carbon emissions.
          </motion.p>

          <motion.p variants={fadeUp} className="p-4">
            Backed by a diverse team of over 80 professionals, we combine
            technical expertise, sustainability-driven innovation, and integrity
            to deliver customized recycling solutions for corporate
            organizations, telecom operators, government agencies, and
            communities across Africa.
          </motion.p>

          <motion.p variants={fadeUp} className="p-4">
            At LTC Africa Recycling, we stand for innovation, integrity,
            accountability, and impact in every operation.
          </motion.p>

          <div id="who-we-are" className="pt-10 space-y-6">
            <motion.p
              variants={fadeUp}
              
              className="header-txt text-3xl md:text-4xl font-bold text-[#003333] text-center p-2"
            >
              Who we are!
            </motion.p>

            <motion.p variants={fadeUp} className="p-4">
              LTC Recycling Limited is an African telecommunications asset
              management and recycling company. It focuses on sustainable
              lifecycle solutions for telecom infrastructure.
            </motion.p>
          </div>
        </motion.div>

        {/* KEY FACTS */}
        <motion.h2
          variants={fadeUp}
          id="key-facts"
          className="header-txt text-3xl md:text-4xl font-bold text-[#003333] text-center p-4"
        >
          Key Facts
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 text-center"
        >
          {[
            {
              icon: Factory,
              header: "Industry:",
              text: "Telecommunications asset management and recycling",
            },
            {
              icon: Cpu,
              header: "Primary focus:",
              text: "Network equipment recovery and materials recycling",
            },
            { icon: Globe, header: "Region of operation:", text: " Africa" },
            {
              icon: Recycle,
              header: "Services:",
              text: "Decommissioning, logistics, refurbishment, and e-waste recycling",
            },
            {
              icon: Leaf,
              header: "Sustainability goal:",
              text: "Circular economy for telecom assets",
            },
          ].map(({ icon: Icon, header, text }, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white border border-gray-100 rounded-2xl transition-all"
            >
              <Icon className="mx-auto text-customGreen mb-3" size={28} />
              <p className="text-lg font-bold">{header}</p>
              <p className="text-sm text-gray-600">{text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* MISSION / VISION */}
        <div id="mission" className="grid lg:grid-cols-2 gap-8 mt-16">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-100 p-6"
          >
            <h3 className="text-2xl font-bold text-customBlue mb-4 flex gap-2">
              <Target />
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed p-2">
              Our mission is to revolutionize electronic waste by unlocking the
              true value of waste and establishing new benchmarks in circular
              economy innovation...
            </p>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-100 p-6"
          >
            <h3 className="text-2xl font-bold text-customBlue mb-4 flex gap-2">
              <Eye />
              Our Vision
            </h3>

            <p className="text-gray-600 leading-relaxed p-2">
              To be Africa’s most trusted and sustainable e-waste management and
              resource recovery company, while setting industry standards
              innovation, compliance, and circular economy excellence.
            </p>
          </motion.div>
        </div>

        {/* LEADERSHIP */}
        <div id="leadership" className="mt-20">
          <h2 className="header-txt text-3xl md:text-4xl font-bold text-[#003333] mb-6 text-center p-4">
            Leadership
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              ["Engr. Adeleye A. Tani", "Founder/Group CEO"],
              ["Mr. Sam Ladipo", "Group Chief Operation Director"],
              ["Mrs. Folake Ademola", "Chief Financial Director"],
              ["Mr. Colpas Kari", "Head of Sale & Marketing"],
              [
                "Mrs. Florentine Razaiarivony",
                "Head of Sustainability, Partnerships & Compliance",
              ],
              ["Mr. Dominic Anomah", "Regional Director – MENA Africa"],
              ["Ms. Margaret Dolapo A", "Head of PR & CSR"],
            ].map(([name, role], i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="bg-white border flex gap-3 items-center border-gray-100 rounded-2xl p-6"
              >
                <div className="bg-amber-100 rounded-full p-2">
                  <User />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">{name}</h4>
                  <p className="text-sm text-gray-500 mt-1">{role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      {/* CERTIFICATIONS */}
      <div id="certification" className="">
        <Certifications />
      </div>
    </section>
  );
};

export default AboutEwaste;
