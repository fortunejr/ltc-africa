import React from "react";
import { Mail, MapPin, Linkedin, Instagram, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#05070c] text-white py-16">
      <div className="mx-auto px-6 space-y-12">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* CONTACT */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">{t("ewasteFooter.contactTitle")}</h3>

            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 shrink-0" />
                <p>{t("ewasteFooter.hqOffice")}</p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 shrink-0" />
                <p>{t("ewasteFooter.regionalOffice")}</p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 shrink-0" />
                <p>{t("ewasteFooter.regionalFacilities")}</p>
              </div>
            </div>
          </div>

          {/* GET IN TOUCH */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">{t("ewasteFooter.getInTouchTitle")}</h3>

            <div className="flex flex-col gap-2 text-sm text-white/70">
              <a
                href={`mailto:${t("ewasteFooter.email")}`}
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Mail size={16} /> {t("ewasteFooter.email")}
              </a>
              <a
                href="tel:+261328681658"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Phone size={16} /> {t("ewasteFooter.whatsapp")}
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                aria-label={t("ewasteFooter.linkedin")}
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                aria-label={t("ewasteFooter.instagram")}
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                aria-label={t("ewasteFooter.twitter")}
              >
                <FaXTwitter size={16} />
              </a>
            </div>
          </div>

          {/* MAP */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("ewasteFooter.findUsTitle")}</h3>
            <div className="rounded-xl overflow-hidden">
              <iframe
                title="LTC Africa Madagascar Location"
                src="https://www.google.com/maps?q=Bat%20II%20Afriport%20Warehouse%20Forello%20Tanjumbato%20Antananarivo%20Madagascar&output=embed"
                className="w-full h-52"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/+261328681658`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 p-2 hover:animate-slide-up transition-all duration-300 z-50"
          aria-label="WhatsApp"
        >
          <img
            className="lg:h-16 lg:w-16 h-10"
            src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png"
            alt="WhatsApp"
          />
        </a>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/50 gap-3">
          <div className="flex flex-wrap gap-4">
            <Link to="/termsandconditions" className="hover:text-white transition">
              {t("ewasteFooter.terms")}
            </Link>
            <Link to="/cookie-policy" className="hover:text-white transition">
              {t("ewasteFooter.cookies")}
            </Link>
            <Link to="/privacy-policy" className="hover:text-white transition">
              {t("ewasteFooter.privacy")}
            </Link>
          </div>

          <p>{t("ewasteFooter.copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;