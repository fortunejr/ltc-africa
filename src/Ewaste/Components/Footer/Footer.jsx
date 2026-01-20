import React from "react";
import { Mail, MapPin, Linkedin, Instagram, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { logo } from "../../../imports";

const Footer = () => {
  return (
    <footer className="bg-[#05070c] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 space-y-12">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* CONTACT */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact</h3>

            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1" />
                <p>Regional Office Madagascar: ZEWA Group Collection & Recycling Center – Bat II Afriport Warehouse, Antananarivo</p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1" />
                <p>Regional Office Nigeria: 4 Association Road, Governors Road Lagos</p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1" />
                <p>Regional Office South Africa</p>
              </div>
            </div>
          </div>

          {/* GET IN TOUCH */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Get in Touch</h3>

            <div className="flex flex-col gap-2 text-sm text-white/70">
              <a href="mailto:Recycling@ltcafrica.com" className="flex items-center gap-2 hover:text-white transition">
                <Mail size={16} /> Recycling@ltcafrica.com
              </a>
              <a href="tel:+261328681658" className="flex items-center gap-2 hover:text-white transition">
                <Phone size={16} /> WhatsApp +261 32 868 1658
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 mt-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                <Linkedin size={16} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                <Instagram size={16} />
              </a>
              <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                <X size={16} />
              </a>
            </div>
          </div>

          {/* MAP */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Find Us</h3>
            <div className="rounded-xl overflow-hidden">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.449491496961!2d47.51604732352138!3d-18.95574620870842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07ff25bab41c3%3A0x7cd8a63292d40a08!2sAFRIPORT%20zone%20d&#39;activit%C3%A9%20mixte!5e0!3m2!1sen!2sng!4v1768694400693!5m2!1sen!2sng"
                className="w-full h-52"
                loading="lazy"
              />
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/50 gap-3">
          <div className="flex flex-wrap gap-4">
            <Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link>
            <Link to="/cookies" className="hover:text-white transition">Cookies Policy</Link>
            <Link to="/privacy-policy" className="hover:text-white transition">Data Privacy</Link>
          </div>

          <p>© {new Date().getFullYear()} LTC Africa Recycling. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
