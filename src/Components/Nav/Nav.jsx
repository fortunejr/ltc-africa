import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TopBar from "../TopBar/TopBar";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const [language, setLanguage] = useState("EN");

  const { t, i18n } = useTranslation();

  const handleLinkClick = () => {
    setOpen(false);
    setMobileCompanyOpen(false);
    setMobileSolutionsOpen(false);
  };

  const solutions = [
    {
      titleKey: "solutions.telecom",
      img: "/images/telecom.jpg",
      link: "/e-waste",
    },
    {
      titleKey: "solutions.agriculture",
      img: "/images/agric.jpg",
      link: "/agriculture",
    },
    {
      titleKey: "solutions.realEstate",
      img: "/images/realestate.jpg",
      link: "/real-estate",
    },
    {
      titleKey: "solutions.renewableEnergy",
      img: "/images/windmill.jpg",
      link: "/renewable-energy",
    },
  ];

  const toggleLanguage = () => {
    const newLang = language === "EN" ? "fr" : "en";
    i18n.changeLanguage(newLang);
    setLanguage(newLang.toUpperCase());
  };

  return (
    <nav className="bg-customLemon/80 fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="transition-opacity hover:opacity-90">
              <img src="/images/ltc-logo.png" alt="logo" className="w-16" />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4 lg:gap-8 text-[15px] font-semibold text-white">
            <Link to="/" className="hover:text-customBlue transition-colors">
              {t("nav.home")}
            </Link>

            <div
              className="relative h-20 flex items-center"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button
                className={`flex items-center gap-1 hover:text-customBlue transition-colors ${
                  companyOpen ? "text-customBlue" : ""
                }`}
              >
                {t("nav.company")}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${companyOpen ? "rotate-180" : ""}`}
                />
              </button>

              {companyOpen && (
                <div className="absolute top-[80px] left-0 w-52 bg-white border border-gray-100 shadow-xl py-2 animate-in fade-in slide-in-from-top-2 text-gray-700">
                  <Link className="block px-5 py-2.5 hover:bg-gray-50 hover:text-customGreen" to="/thecompany/#who-are-we">
                    {t("company.whoWeAre")}
                  </Link>
                  <Link className="block px-5 py-2.5 hover:bg-gray-50 hover:text-customGreen" to="/thecompany/#what-we-do">
                    {t("company.whatWeDo")}
                  </Link>
                  <Link className="block px-5 py-2.5 hover:bg-gray-50 hover:text-customGreen" to="/thecompany/#mission-vision">
                    {t("company.missionVision")}
                  </Link>
                  <Link className="block px-5 py-2.5 hover:bg-gray-50 hover:text-customGreen" to="/thecompany/#leadership">
                    {t("company.leadership")}
                  </Link>
                  <Link className="block px-5 py-2.5 hover:bg-gray-50 hover:text-customGreen" to="/thecompany/#governance-policy">
                    {t("company.governancePolicy")}
                  </Link>
                </div>
              )}
            </div>

            <div
              className="static flex items-center h-20"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 hover:text-customBlue transition-colors ${
                  solutionsOpen ? "text-customBlue" : ""
                }`}
              >
                {t("nav.solutions")}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {solutionsOpen && (
                <div className="absolute left-0 top-[80px] w-full bg-white shadow-2xl">
                  <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-4 gap-8">
                    {solutions.map((item, i) => (
                      <Link key={i} to={item.link} className="group block overflow-hidden hover:shadow-lg transition">
                        <div className="h-40 overflow-hidden">
                          <img
                            src={item.img}
                            alt={t(item.titleKey)}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          />
                        </div>

                        <div className="p-4">
                          <h3 className="text-sm font-semibold text-gray-700 group-hover:text-customGreen transition">
                            {t(item.titleKey)}
                          </h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/global-footprint" className="hover:text-customBlue transition-colors text-nowrap">
              {t("nav.globalFootprint")}
            </Link>

            <Link to="/circular-economy" className="hover:text-customBlue transition-colors text-nowrap">
              {t("nav.circularEconomy")}
            </Link>

            <Link to="/media" className="hover:text-customBlue transition-colors">
              {t("nav.media")}
            </Link>

            <Link to="/contact" className="bg-customGreen text-white px-5 py-2.5 hover:customGreen transition-all shadow-md">
              {t("nav.contactUs")}
            </Link>

            <button
              onClick={toggleLanguage}
              className="ml-4 px-3 py-1 border border-gray-300 text-white hover:bg-white  hover:text-black transition"
            >
              {language}
            </button>
          </div>

          {/* Mobile menu toggles */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 border border-gray-300 text-white hover:bg-gray-100 hover:text-black transition"
            >
              {language}
            </button>

            <button className="p-2 text-white" onClick={() => setOpen(!open)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white overflow-y-auto transition-all duration-300 ease-in-out ${open ? "max-h-screen" : "max-h-0"}`}>
        <ul className="flex flex-col p-6 gap-2 font-semibold text-gray-700">
          <li>
            <Link to="/" onClick={handleLinkClick} className="block py-2">
              {t("nav.home")}
            </Link>
          </li>

          <li>
            <button onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)} className="flex items-center justify-between w-full py-2">
              {t("nav.company")}
              <ChevronDown size={18} className={mobileCompanyOpen ? "rotate-180" : ""} />
            </button>

            <div className={`pl-4 overflow-hidden transition-all ${mobileCompanyOpen ? "max-h-60 mt-2 mb-4" : "max-h-0"}`}>
              <Link to="/thecompany/#who-are-we" onClick={handleLinkClick} className="block py-2 text-gray-500 font-medium">
                {t("company.whoWeAre")}
              </Link>
              <Link to="/thecompany/#what-we-do" onClick={handleLinkClick} className="block py-2 text-gray-500 font-medium">
                {t("company.whatWeDo")}
              </Link>
              <Link to="/thecompany/#mission-vision" onClick={handleLinkClick} className="block py-2 text-gray-500 font-medium">
                {t("company.missionVision")}
              </Link>
              <Link to="/thecompany/#leadership" onClick={handleLinkClick} className="block py-2 text-gray-500 font-medium">
                {t("company.leadership")}
              </Link>
              <Link to="/thecompany/#governance-policy" onClick={handleLinkClick} className="block py-2 text-gray-500 font-medium">
                {t("company.governancePolicy")}
              </Link>
            </div>
          </li>

          <li>
            <button onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)} className="flex items-center justify-between w-full py-2">
              {t("nav.solutions")}
              <ChevronDown size={18} className={mobileSolutionsOpen ? "rotate-180" : ""} />
            </button>

            <div className={`pl-4 overflow-hidden transition-all ${mobileSolutionsOpen ? "max-h-[500px] mt-2 mb-4" : "max-h-0"}`}>
              {solutions.map((item, i) => (
                <Link key={i} to={item.link} onClick={handleLinkClick} className="flex items-center gap-3 py-3 px-2 hover:bg-gray-50 transition">
                  <img src={item.img} alt={t(item.titleKey)} className="w-12 h-12 object-cover flex-shrink-0" />
                  <span className="text-gray-600 font-medium text-sm">{t(item.titleKey)}</span>
                </Link>
              ))}
            </div>
          </li>

          <li>
            <Link to="/circular-economy" onClick={handleLinkClick} className="block py-2">
              {t("nav.circularEconomy")}
            </Link>
          </li>

          <li>
            <Link to="/global-footprint" onClick={handleLinkClick} className="block py-2">
              {t("nav.globalFootprint")}
            </Link>
          </li>

          <li>
            <Link to="/media" onClick={handleLinkClick} className="block py-2">
              {t("nav.media")}
            </Link>
          </li>

          <li className="mt-4">
            <Link to="/contact" onClick={handleLinkClick} className="block w-full text-center bg-customGreen text-white py-3">
              {t("nav.contactUs")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;