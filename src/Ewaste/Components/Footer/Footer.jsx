import React from "react";
import { Mail, MapPin, Linkedin, Instagram, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { logo } from "../../../imports";

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-[#05070c] via-[#0a1220] to-[#05070c] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 pb-12 border-b border-white/10">
          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>

            <div className="space-y-6 text-sm text-white/80">
              <div className="flex gap-3">
                <div>
                  <p className="font-semibold text-white">
                    LTC Africa Group Administrative HQ Ghana:
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin size={38} className="mt-1" />
                <div>
                  <p className="font-semibold text-white">
                    Regional Office Madagascar:
                  </p>
                  <p>
                    ZEWA Group Collection & Recycling Center – Bat II Afriport
                    Warehouse, Forello Tanjumbato. Antananarivo, Madagascar
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} className="mt-1" />
                <div>
                  <p className="font-semibold text-white">
                    Regional Office Nigeria:
                  </p>
                  <p>4 Association Road, Governors Road Lagos Nigeria.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} className="mt-1" />
                <div>
                  <p className="font-semibold text-white">
                    Regional Office South Africa:
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} className="mt-1" />
                <div>
                  <p className="font-semibold text-white">
                    Regional Office Tanzania:
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} className="mt-1" />
                <div>
                  <p className="font-semibold text-white">
                    Regional Office Morocco:
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* GET IN TOUCH */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>

            <div className="space-y-2 text-sm text-white/80">
              <a
                href="mailto:Recycling@ltcafrica.com"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <Mail size={18} />
                <span>Recycling@ltcafrica.com</span>
              </a>

              <a
                href="tel:+261328681658"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <Phone size={18} />
                <span>WhatsApp +261 32 868 1658</span>
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <X size={18} />
              </a>
            </div>
          </div>

          {/* MAP */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Find Us on the Map</h3>

            <div className="rounded-2xl overflow-hidden border border-white/10">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.449491496961!2d47.51604732352138!3d-18.95574620870842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07ff25bab41c3%3A0x7cd8a63292d40a08!2sAFRIPORT%20zone%20d&#39;activit%C3%A9%20mixte!5e0!3m2!1sen!2sng!4v1768694400693!5m2!1sen!2sng"
                className="w-full h-65"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/50 gap-4">
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-white transition">
              Terms & Conditions
            </Link>
            <Link to="/cookies" className="hover:text-white transition">
              Cookies Policy
            </Link>
            <Link to="/privacy-policy" className="hover:text-white transition">
              Data Privacy
            </Link>
          </div>

          <p>
            © {new Date().getFullYear()} LTC Africa Recycling Limited. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
