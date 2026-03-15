import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import TopBar from "../TopBar/TopBar";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  // Mobile accordions
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  // Language state
  const [language, setLanguage] = useState("EN");

  const handleLinkClick = () => {
    setOpen(false);
    setMobileCompanyOpen(false);
    setMobileSolutionsOpen(false);
  };

  const solutions = [
    {
      title: "IT /Telecom ASSET & WEEE MANAGEMENT",
      img: "/images/telecom.jpg",
      link: "/e-waste",
    },
    {
      title: "Agricultural & Farm Waste Solutions",
      img: "/images/agric.jpg",
      link: "/agriculture",
    },
    {
      title: "Smart Real Estate Management",
      img: "/images/realestate.jpg",
      link: "/real-estate",
    },
    {
      title: "Renewable & Green Energy Solution",
      img: "/images/windmill.jpg",
      link: "/renewable-energy",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="transition-opacity hover:opacity-90">
              <img src="/images/ltc-logo.png" alt="logo" className="w-16" />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8 text-[15px] font-semibold text-gray-700">
            <Link to="/" className="hover:text-customGreen transition-colors">
              Home
            </Link>

            {/* COMPANY DROPDOWN */}
            <div
              className="relative h-20 flex items-center"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button
                className={`flex items-center gap-1 hover:text-customGreen transition-colors ${
                  companyOpen ? "text-customGreen" : ""
                }`}
              >
                The Company
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    companyOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {companyOpen && (
                <div className="absolute top-[80px] left-0 w-52 bg-white border border-gray-100 shadow-xl py-2 animate-in fade-in slide-in-from-top-2">
                  <Link
                    className="block px-5 py-2.5 hover:bg-gray-50 hover:text-customGreen"
                    to="/thecompany/#who-are-we"
                  >
                    Who We Are
                  </Link>
                  <Link
                    className="block px-5 py-2.5 hover:bg-gray-50 hover:text-customGreen"
                    to="/thecompany/#what-we-do"
                  >
                    What We Do
                  </Link>
                  <Link
                    className="block px-5 py-2.5 hover:bg-gray-50 hover:text-customGreen"
                    to="/thecompany/#mission-vision"
                  >
                    Mission & Vision
                  </Link>
                  <Link
                    className="block px-5 py-2.5 hover:bg-gray-50 hover:text-customGreen"
                    to="/thecompany/#leadership"
                  >
                    Leadership
                  </Link>
                  <Link
                    className="block px-5 py-2.5 hover:bg-gray-50 hover:text-customGreen"
                    to="/"
                  >
                    Governance Policy
                  </Link>
                </div>
              )}
            </div>

            {/* SOLUTIONS MEGA MENU */}
            <div
              className="static flex items-center h-20"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 hover:text-customGreen transition-colors ${
                  solutionsOpen ? "text-customGreen" : ""
                }`}
              >
                Solutions
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    solutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {solutionsOpen && (
                <div className="absolute left-0 top-[80px] w-full bg-white border-t border-gray-100 shadow-2xl">
                  <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-4 gap-8">
                    {solutions.map((item, i) => (
                      <Link
                        key={i}
                        to={item.link}
                        className="group block rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition"
                      >
                        <div className="h-40 overflow-hidden">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-sm font-semibold text-gray-700 group-hover:text-customGreen transition">
                            {item.title}
                          </h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/circular-economy"
              className="hover:text-customGreen transition-colors text-nowrap"
            >
              Circular Economy
            </Link>
            <Link
              to="/global-footprint"
              className="hover:text-customGreen transition-colors text-nowrap"
            >
              Global Footprint
            </Link>
            <Link
              to="/media"
              className="hover:text-customGreen transition-colors"
            >
              Media
            </Link>
            <Link
              to="/contact"
              className="bg-customGreen text-white px-5 py-2.5 rounded-full hover:customGreen transition-all shadow-md"
            >
              Contact
            </Link>

            {/* LANGUAGE SWITCH BUTTON */}
            <button
              onClick={() =>
                setLanguage(language === "EN" ? "FR" : "EN")
              }
              className="ml-4 px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition"
            >
              {language}
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden flex items-center gap-2">
            {/* LANGUAGE SWITCHER */}
            <button
              onClick={() =>
                setLanguage(language === "EN" ? "FR" : "EN")
              }
              className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100 transition"
            >
              {language}
            </button>

            <button
              className="p-2 text-gray-600"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 overflow-y-auto transition-all duration-300 ease-in-out ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col p-6 gap-2 font-semibold text-gray-700">
          <li>
            <Link to="/" onClick={handleLinkClick} className="block py-2">
              Home
            </Link>
          </li>

          {/* MOBILE COMPANY ACCORDION */}
          <li>
            <button
              onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
              className="flex items-center justify-between w-full py-2"
            >
              The Company
              <ChevronDown
                size={18}
                className={mobileCompanyOpen ? "rotate-180" : ""}
              />
            </button>
            <div
              className={`pl-4 overflow-hidden transition-all ${
                mobileCompanyOpen ? "max-h-60 mt-2 mb-4" : "max-h-0"
              }`}
            >
              <Link
                to="/thecompany/#who-are-we"
                onClick={handleLinkClick}
                className="block py-2 text-gray-500 font-medium"
              >
                Who Are We
              </Link>
              <Link
                to="/thecompany/#what-we-do"
                onClick={handleLinkClick}
                className="block py-2 text-gray-500 font-medium"
              >
                What We Do
              </Link>
              <Link
                to="/thecompany/#mission-vision"
                onClick={handleLinkClick}
                className="block py-2 text-gray-500 font-medium"
              >
                Mission & Vision
              </Link>
              <Link
                to="/thecompany/#leadership"
                onClick={handleLinkClick}
                className="block py-2 text-gray-500 font-medium"
              >
                Leadership
              </Link>
              <Link
                to="/"
                onClick={handleLinkClick}
                className="block py-2 text-gray-500 font-medium"
              >
                Governance Policy
              </Link>
            </div>
          </li>

          {/* MOBILE SOLUTIONS ACCORDION */}
          <li>
            <button
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className="flex items-center justify-between w-full py-2"
            >
              Solutions
              <ChevronDown
                size={18}
                className={mobileSolutionsOpen ? "rotate-180" : ""}
              />
            </button>
            <div
              className={`pl-4 overflow-hidden transition-all ${
                mobileSolutionsOpen ? "max-h-[500px] mt-2 mb-4" : "max-h-0"
              }`}
            >
              {solutions.map((item, i) => (
                <Link
                  key={i}
                  to={item.link}
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 py-3 px-2 rounded-lg hover:bg-gray-50 transition"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded-md flex-shrink-0"
                  />
                  <span className="text-gray-600 font-medium text-sm">
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          </li>

          <li>
            <Link
              to="/circular-economy"
              onClick={handleLinkClick}
              className="block py-2"
            >
              Circular Economy
            </Link>
          </li>
          <li>
            <Link
              to="/global-footprint"
              onClick={handleLinkClick}
              className="block py-2"
            >
              Global Footprint
            </Link>
          </li>
          <li>
            <Link to="/media" onClick={handleLinkClick} className="block py-2">
              Media
            </Link>
          </li>
          <li className="mt-4">
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="block w-full text-center bg-customGreen text-white py-3 rounded-lg"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
