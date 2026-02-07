import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { logo } from "../../imports";

// Demo component - replace with your actual NavLink from react-router-dom
const NavLink = ({ to, children, className, onClick }) => (
  <a href={to} className={className} onClick={onClick}>
    {children}
  </a>
);

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  const navItems = [
    { to: "/e-waste", label: "E-waste Solution" },
    { to: "/agriculture", label: "Agricultural Solution" },
    { to: "/real-estate", label: "Real Estate Management" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between relative">

        {/* LEFT: Logo */}
        <div className="flex items-center">
          <a href="/" className="block">
            <div className="h-16 w-auto flex items-center">
              <img src={logo} alt="Logo" className="h-full w-auto" />
            </div>
          </a>
        </div>

        {/* CENTER: Desktop Navlinks */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-6 text-xs lg:text-sm font-medium tracking-normal absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
          {navItems.map((item) => (
            <li key={item.to}>
              <a
                href={item.to}
                className="transition-all hover:text-gray-600 hover:border-b-2 hover:border-black hover:pb-1"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden p-1 hover:bg-gray-100 rounded transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50 transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-128 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-4 p y-3 text-sm font-medium">
          {navItems.map((item, index) => (
            <li 
              key={item.to} 
              className={index !== navItems.length - 1 ? "border-b border-gray-100" : ""}
            >
              <a
                href={item.to}
                onClick={handleLinkClick}
                className="block py-3 transition-colors hover:text-gray-600"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;