import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const EwasteNav = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const handleLinkClick = () => setOpen(false);

  const navItems = [
    { to: "/e-waste", label: "Home" },
    { to: "/e-waste/about", label: "About Us" },
    { to: "/e-waste/services", label: "Services" },
    { to: "/e-waste/climate-change", label: "Climate Change" },
    { to: "/e-waste/sdg-initiatives", label: "SDG Initiatives" },
    { to: "/global-footprint", label: "Global Footprint" },
    { to: "/e-waste/media", label: "Media" },
    { to: "/e-waste/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="px-4">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="transition-opacity hover:opacity-90">
              <img src="/images/ltc-logo.png" alt="logo" className="w-16" />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="hover:text-customGreen transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* LANGUAGE SWITCH BUTTON */}
            <button
              onClick={() => setLanguage(language === "EN" ? "FR" : "EN")}
              className="ml-4 px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition"
            >
              {language}
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden flex items-center gap-2">
            {/* LANGUAGE SWITCHER */}
            <button
              onClick={() => setLanguage(language === "EN" ? "FR" : "EN")}
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
        className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${
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
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default EwasteNav;
