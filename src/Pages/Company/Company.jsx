import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eye, Target, User } from "lucide-react";
import { useLocation } from "react-router-dom";
import GovernancePolicy from "../../Components/GovernancePolicy/GovernancePolicy";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const location = useLocation();

  const [openIndex, setOpenIndex] = useState(null);
  const toggleSector = (index) => setOpenIndex(openIndex === index ? null : index);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const sectors = [
    { img: "https://images.unsplash.com/photo-1549319114-d67887c51aed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", key: "itTelecom" },
    { img: "/images/agric.jpg", key: "agriculture" },
    { img: "/images/realestate.jpeg", key: "realEstate" },
    { img: "/images/windmill.jpg", key: "renewableEnergy" },
  ];

  return (
    <section className="bg-white text-[#111] font-sans">
      {/* HERO */}
      <div className="relative w-full h-[80vh] overflow-hidden pt-2">
        <img src="/images/company-collage.png" alt="corporate" className="absolute w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white">
          <h1 className="text-3xl lg:text-4xl mb-6 header-txt font-bold bg-customBlue w-fit px-4 py-2">
            {t("companyPage.hero.title", "The Company")}
          </h1>

          <div className="space-y-2 text-base">
            <p className="flex flex-col uppercase">
              <a href="#who-are-we" className="text-white hover:text-customGreen transition-colors">
                {t("companyPage.hero.links.whoAreWe", "Who We Are")}
              </a>
              <a href="#what-we-do" className="text-white hover:text-customGreen transition-colors">
                {t("companyPage.hero.links.whatWeDo", "What We Do")}
              </a>
              <a href="#mission-vision" className="text-white hover:text-customGreen transition-colors">
                {t("companyPage.hero.links.missionVision", "Mission & Vision")}
              </a>
              <a href="#leadership" className="text-white hover:text-customGreen transition-colors">
                {t("companyPage.hero.links.leadership", "Leadership")}
              </a>
              <a href="#governance-policy" className="text-white hover:text-customGreen transition-colors">
                {t("companyPage.hero.links.governancePolicy", "Governance Policy")}
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="bg-customGreen/5">
        <div id="who-are-we" className="max-w-6xl mx-auto px-6 py-24 ">
          <div className="mb-10 ">
            <h1 className="text-3xl lg:text-4xl font-semibold mb-4 header-txt text-customBlue">
              {t("companyPage.about.title", "About the Group Company")}
            </h1>

            <h2 className="text-xl text-gray-600">
              {t("companyPage.about.subtitle", "LTC Africa Group Corporate Introduction")}
            </h2>
          </div>

          <div className="space-y-12 text-base text-gray-700 leading-relaxed">
            <p>{t("companyPage.about.description", "LTC Africa Group is a leading African company committed to delivering comprehensive, innovative, and sustainable solutions across multiple sectors to empower businesses, service providers, and institutions throughout Africa. As a Group, LTC Africa leverages decades of expertise, industry best practices, and cutting-edge technology to provide end-to-end services that drive efficiency, maximize value, and support Africa’s economic growth while maintaining the highest environmental and social standards.")}</p>

            <h1 id="what-we-do" className="text-3xl lg:text-4xl font-semibold header-txt text-customBlue scroll-mt-32">
              {t("companyPage.whatWeDo.title", "What We Do")}
            </h1>

            {/* SECTORS */}
            <div className="space-y-24 mt-10">
              {sectors.map((sector, index) => (
                <div key={sector.key} className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <img src={sector.img} alt={t(`companyPage.whatWeDo.sectors.${sector.key}.title`)} className="w-full h-[340px] object-cover shadow-xl" />
                  </div>

                  <div>
                    <h2 className="header-txt font-bold text-2xl mb-6">
                      {t(`companyPage.whatWeDo.sectors.${sector.key}.title`)}
                    </h2>

                    <p className="text-gray-700 leading-relaxed">
                      {t(`companyPage.whatWeDo.sectors.${sector.key}.text`)}
                    </p>

                    <a href="https://wa.me/+261328681658">
                      <button className="mt-4 bg-customGreen text-white font-semibold px-4 py-2 hover:bg-customGreen/80 transition-colors cursor-pointer">
                        {t("companyPage.whatWeDo.learnMore", "Learn more")}
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <p>{t("companyPage.about.closing", "With a holistic approach that combines technology, sustainability, and operational excellence, LTC Africa Group stands as a trusted partner for African businesses, service providers, and institutions seeking to transform challenges into opportunities. From managing electronic and agricultural waste to developing smart properties and clean energy solutions, LTC Africa Group exemplifies innovation, responsibility, and a commitment to driving lasting impact, economic growth, and environmental stewardship throughout Africa.")}</p>
          </div>
        </div>
      </div>

      {/* VISION & MISSION */}
      <div id="mission-vision" className="bg-slate-900 py-32 relative overflow-hidden scroll-mt-32">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-customBlue/5 skew-x-12 translate-x-32" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div className="grid lg:grid-cols-2 gap-12" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-customGreen/20 rounded-full">
                  <Eye className="w-10 h-10 text-customGreen" />
                </div>
                <h3 className="text-3xl header-txt font-bold text-white">{t("companyPage.vision.title", "Our Vision")}</h3>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed font-light">{t("companyPage.vision.text", "To be Africa’s leading integrated solutions group, driving sustainable transformation through innovation and circular economy practices, thrive in a resilient and environmentally responsible future.")}</p>
            </motion.div>

            <motion.div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-customGreen/20 rounded-full">
                  <Target className="w-10 h-10 text-customGreen" />
                </div>
                <h3 className="text-3xl font-bold text-white header-txt">{t("companyPage.mission.title", "Our Mission")}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{t("companyPage.mission.text", "To deliver comprehensive, technology-driven, and sustainable solutions across IT/Telecom Asset & WEEE Management, Agricultural & Farm Waste Management, Smart Real Estate, and Renewable Energy by maximizing value and accelerating inclusive economic growth.")}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* LEADERSHIP */}
<div
  id="leadership"
  className="lg:px-28 px-6 py-20 bg-customLemon/20 scroll-mt-32"
>
  <h2 className="header-txt text-3xl md:text-4xl font-bold text-[#003333] mb-14 text-center">
    {t("companyPage.leadership.title", "Leadership")}
  </h2>

  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
  >
    {[
      ["Engr. Adeleye A. Tani", t("companyPage.leadership.roles.ceo", "Founder/Group CEO")],
      ["Mr. Sam Ladipo", t("companyPage.leadership.roles.coo", "Group Chief Operation Director")],
      ["Mrs. Folake Ademola", t("companyPage.leadership.roles.cfo", "Chief Financial Director")],
      ["Mr. Colpas Kari", t("companyPage.leadership.roles.sales", "Head of Sale & Marketing")],
      [
        "Mrs. Florentine Razaiarivony",
        t(
          "companyPage.leadership.roles.sustainability",
          "Head of Sustainability, Partnerships & Compliance"
        )
      ],
      ["Mr. Dominic Anomah", t("companyPage.leadership.roles.mena", "Regional Director – MENA Africa")],
      ["Ms. Margaret Dolapo A", t("companyPage.leadership.roles.pr", "Head of PR & CSR")]
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

      <div id="governance-policy">
        <GovernancePolicy />
      </div>
    </section>
  );
};

export default Company;