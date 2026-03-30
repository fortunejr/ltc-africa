import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Eye, Target, User } from "lucide-react";
import { useLocation } from "react-router-dom";
import GovernancePolicy from "../../Components/GovernancePolicy/GovernancePolicy";

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45 },
  },
};

const Company = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  const sectors = [
    {
      title: "IT/TELECEOM ASSET & WEEE Management",
      img: "/images/telecom.jpg",
      text: `In the IT and Telecom sector, LTC Africa Group provides complete
      asset and WEEE (Waste Electrical and Electronic Equipment)
      management solutions. From secure decommissioning, data destruction,
      and refurbishment of IT and telecom equipment to certified recycling
      and remarketing, the Group ensures compliance with global
      environmental standards, protects sensitive data, and helps
      organizations recover maximum value from retired assets. These
      solutions not only reduce electronic waste but also promote a
      circular economy, contributing to sustainable industrial practices
      across the continent.`,
    },
    {
      title: "Agriculture & Farm Waste Management",
      img: "/images/agric.jpg",
      text: `In Agriculture and Farm Waste Management, LTC Africa Group champions
      sustainable farming practices and also transforming organic and farm
      waste into valuable resources such as compost, biofertilizers, and
      renewable energy. By helping farmers improve soil fertility,
      increase crop yields, and reduce environmental impact, the Group
      fosters climate-smart agriculture and circular farming systems.
      These initiatives address critical challenges in food security,
      resource management, and environmental sustainability, while
      creating long-term economic opportunities for local communities.`,
    },
    {
      title: "Smart Real Estate Management",
      img: "/images/realestate.jpeg",
      text: `Also the Group’s Smart Real Estate Management solutions integrate
      advanced technology, data analytics, and intelligent systems to
      optimize property performance and enhance tenant experiences.
      Through digital monitoring, predictive maintenance, energy-efficient
      solutions, and lifecycle asset planning, LTC Africa ensures
      properties operate at peak efficiency while maximizing long-term
      value. These smart infrastructure strategies support urban
      development, reduce operational costs, and promote sustainable real
      estate practices across commercial, institutional, and residential
      projects.`,
    },
    {
      title: "Renewable & Green Energy Solution",
      img: "/images/windmill.jpg",
      text: `In the Renewable and Green Energy sector, LTC Africa Group drives
      Africa’s clean energy transition by delivering scalable solutions in
      solar, wind, hydro, and bioenergy. The Group designs and implements
      energy strategies that reduce carbon emissions, increase access to
      reliable and sustainable power, and promote cost-effective energy
      generation for industries, businesses, and communities. By focusing
      on renewable energy solutions, LTC Africa contributes to climate
      action, energy resilience, and sustainable development across the
      continent.`,
    },
  ];

  return (
    <section className="bg-white text-[#111] font-sans">
      {/* HERO */}
      <div className="relative w-full h-[80vh] overflow-hidden pt-2">
        <img
          src="/images/company-collage.png"
          alt="corporate"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white">
          <h1 className="text-3xl lg:text-4xl mb-6 header-txt font-bold bg-customBlue w-fit px-4 py-2">
            The Company
          </h1>

          {/* <p className="font-bold my-1">EXPLORE THIS PAGE</p> */}

          <div className="space-y-2 text-base">
            <p className="flex flex-col uppercase">
              <a
                href="#who-are-we"
                className="text-white hover:text-customGreen transition-colors"
              >
                Who We Are
              </a>
              <a
                href="#what-we-do"
                className="text-white hover:text-customGreen transition-colors"
              >
                What We Do 
              </a>
              <a
                href="#mission-vision"
                className="text-white hover:text-customGreen transition-colors"
              >
                Mission & Vision
              </a>
              <a
                href="#leadership"
                className="text-white hover:text-customGreen transition-colors"
              >
                Leadership
              </a>
              <a
                href="#governance-policy"
                className="text-white hover:text-customGreen transition-colors"
              >
                Governance Policy
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div id="who-are-we" className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-10">
          <h1 className="text-3xl lg:text-4xl font-semibold mb-4 header-txt text-customBlue">
            About the Group Company
          </h1>

          <h2 className="text-xl text-gray-600">
            LTC Africa Group Corporate Introduction
          </h2>
        </div>

        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
          <p>
            LTC Africa Group is a leading African company committed to
            delivering comprehensive, innovative, and sustainable solutions
            across multiple sectors to empower businesses, service providers,
            and institutions throughout Africa. As a Group, LTC Africa leverages
            decades of expertise, industry best practices, and cutting-edge
            technology to provide end-to-end services that drive efficiency,
            maximize value, and support Africa’s economic growth while
            maintaining the highest environmental and social standards.
          </p>

          <h1
            id="what-we-do"
            className="text-3xl lg:text-4xl font-semibold header-txt text-customBlue scroll-mt-32"
          >
            What We do
          </h1>

          {/* SECTORS */}
          <div className="space-y-24 mt-10">
            {sectors.map((sector, index) => (
              <div
                key={sector.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div
                  className={`relative ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <img
                    src={sector.img}
                    alt={sector.title}
                    className="w-full h-[340px] object-cover rounded-2xl shadow-xl"
                  />
                </div>

                <div>
                  <h2 className="header-txt font-bold text-2xl mb-6">
                    {sector.title}
                  </h2>

                  <p className="text-gray-700 leading-relaxed">{sector.text}</p>
                </div>
              </div>
            ))}
          </div>

          <p>
            With a holistic approach that combines technology, sustainability,
            and operational excellence, LTC Africa Group stands as a trusted
            partner for African businesses, service providers, and institutions
            seeking to transform challenges into opportunities. From managing
            electronic and agricultural waste to developing smart properties and
            clean energy solutions, LTC Africa Group exemplifies innovation,
            responsibility, and a commitment to driving lasting impact, economic
            growth, and environmental stewardship throughout Africa.
          </p>
        </div>
      </div>

      {/* VISION & MISSION */}
      <div
        id="mission-vision"
        className="bg-slate-900 py-32 relative overflow-hidden scroll-mt-32"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-customBlue/5 skew-x-12 translate-x-32" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="grid lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-customGreen/20 rounded-full">
                  <Eye className="w-10 h-10 text-customGreen" />
                </div>

                <h3 className="text-3xl header-txt font-bold text-white">
                  Our Vision
                </h3>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed font-light">
                To be Africa’s leading integrated solutions group, driving
                sustainable transformation through innovation and circular
                economy practices, thrive in a resilient and environmentally
                responsible future.
              </p>
            </motion.div>

            <motion.div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-customGreen/20 rounded-full">
                  <Target className="w-10 h-10 text-customGreen" />
                </div>

                <h3 className="text-3xl font-bold text-white header-txt">
                  Our Mission
                </h3>
              </div>

              <p className="text-gray-300 leading-relaxed">
                To deliver comprehensive, technology-driven, and sustainable
                solutions across IT/Telecom Asset & WEEE Management,
                Agricultural & Farm Waste Management, Smart Real Estate, and
                Renewable Energy by maximizing value and accelerating inclusive
                economic growth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* LEADERSHIP */}
      <div
        id="leadership"
        className=" lg:px-28 px-6 py-20 bg-gray-50 scroll-mt-32"
      >
        <h2 className="header-txt text-3xl md:text-4xl font-bold text-[#003333] mb-14 text-center">
          Leadership
        </h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <div className="bg-amber-100 rounded-full p-3">
                  <User />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">{name}</h4>
                  <p className="text-sm text-gray-500 mt-1">{role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div id = "governance-policy">
        <GovernancePolicy />
      </div>
    </section>
  );
};

export default Company;
