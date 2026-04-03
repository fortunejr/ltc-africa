import React from "react";
import { Mail, MapPin, Linkedin, Instagram, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#05070c] text-white py-16">
      <div className=" mx-auto px-6 space-y-12">
        {/* TOP GRID */}


        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/50 gap-3">
          <div className="flex flex-wrap gap-4">
            <Link
              to="/termsandconditions"
              className="hover:text-white transition"
            >
              Terms & Conditions
            </Link>
            <Link to="/cookie-policy" className="hover:text-white transition">
              Cookies Policy
            </Link>
            <Link to="/privacy-policy" className="hover:text-white transition">
              Data Privacy
            </Link>
          </div>

          <p>
            © {new Date().getFullYear()} LTC Africa Group. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
