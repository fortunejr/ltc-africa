import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const EwasteNav = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // Force re-render when language changes
  const [langKey, setLangKey] = useState(0);

  const handleLinkClick = () => setOpen(false);

  const navItems = [
    { to: "/e-waste", labelKey: "ewasteNav.home" },
    { to: "/e-waste/about", labelKey: "ewasteNav.about" },
    { to: "/e-waste/services", labelKey: "ewasteNav.services" },
    { to: "/e-waste/climate-change", labelKey: "ewasteNav.climateChange" },
    { to: "/e-waste/sdg-initiatives", labelKey: "ewasteNav.sdg" },
    { to: "/global-footprint", labelKey: "ewasteNav.globalFootprint" },
    { to: "/e-waste/media", labelKey: "ewasteNav.media" },
    { to: "/e-waste/contact", labelKey: "ewasteNav.contact" },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang).then(() => setLangKey((k) => k + 1));
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-sm bg-customLemon/80">
      <div className="px-4">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="transition-opacity hover:opacity-90">
              <img src="/images/ltc-logo.png" alt="logo" className="w-16" />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-white">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="hover:text-black transition-colors"
              >
                {t(item.labelKey)}
              </Link>
            ))}

            <button
              onClick={toggleLanguage}
              className="ml-4 px-3 py-1 border border-gray-300  hover:bg-white  hover:text-black transition text-white"
            >
              {i18n.language.toUpperCase()}
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 text-white border border-gray-300 hover:bg-gray-100 hover:text-black transition"
            >
              {i18n.language.toUpperCase()}
            </button>

            <button className="p-2 text-white" onClick={() => setOpen(!open)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-screen py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col p-6 gap-2 font-semibold text-gray-700">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={handleLinkClick}
                className="block py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {t(item.labelKey)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default EwasteNav;