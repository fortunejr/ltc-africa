import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#05070c] text-white py-16">
      <div className="mx-auto px-6 space-y-12">
        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/50 gap-3">
          <div className="flex flex-wrap gap-4">
            <Link to="/termsandconditions" className="hover:text-white transition">
              {t("homeFooter.terms")}
            </Link>
            <Link to="/cookie-policy" className="hover:text-white transition">
              {t("homeFooter.cookies")}
            </Link>
            <Link to="/privacy-policy" className="hover:text-white transition">
              {t("homeFooter.privacy")}
            </Link>
          </div>

          <p>
            {t("homeFooter.copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;