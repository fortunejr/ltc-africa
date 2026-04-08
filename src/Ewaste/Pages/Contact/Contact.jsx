import React from "react";
import { Mail, MapPin, Users } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ContactEwaste = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://img.freepik.com/free-photo/view-world-travel-map-with-compass-shoes_23-2149459982.jpg?t=st=1775069320~exp=1775072920~hmac=4caf2f6196537d13bdc259c4cf2d8e71e0e43e56ae0a6cd2029cf2e3c1ce7a86&w=1480"
          alt="Africa map"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="absolute inset-0 bg-customGreen/5"></div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div variants={item} className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#003333] header-txt mb-1">
            {t("contactEwaste.title")}
          </h2>
          <p className="text-base text-gray-600">
            {t("contactEwaste.description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Offices */}
          <motion.div variants={item}>
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="w-6 h-6 text-customGreen" />
              <h3 className="text-2xl font-semibold text-[#003333]">
                {t("contactEwaste.offices.header")}
              </h3>
            </div>

            <div className="space-y-6">
              {["hq", "regionalMadagascar", "regionalFacilities"].map((key) => (
                <motion.div
                  key={key}
                  variants={item}
                  className="bg-white/90 backdrop-blur p-6 rounded-xl border border-gray-200"
                >
                  <p className="font-semibold text-gray-900 mb-1">
                    {t(`contactEwaste.offices.${key}.title`)}
                  </p>
                  <p className="text-gray-600">
                    {t(`contactEwaste.offices.${key}.address`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Channels */}
          <motion.div variants={item}>
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-6 h-6 text-customGreen" />
              <h3 className="text-2xl font-semibold text-[#003333]">
                {t("contactEwaste.contactChannels.header")}
              </h3>
            </div>

            <motion.div
              variants={container}
              className="bg-white/90 backdrop-blur p-8 rounded-xl border border-gray-200 space-y-6"
            >
              {/* Email */}
              <motion.div variants={item} className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-customGreen mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">
                    {t("contactEwaste.contactChannels.email.label")}
                  </p>
                  <a
                    href={`mailto:${t("contactEwaste.contactChannels.email.value")}`}
                    className="text-gray-600 hover:text-customGreen transition-colors"
                  >
                    {t("contactEwaste.contactChannels.email.value")}
                  </a>
                </div>
              </motion.div>

              {/* WhatsApp */}
              <motion.div variants={item} className="flex items-start gap-4">
                <BsWhatsapp className="w-5 h-5 text-customGreen mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">
                    {t("contactEwaste.contactChannels.whatsapp.label")}
                  </p>
                  <a
                    href={t("contactEwaste.contactChannels.whatsapp.link")}
                    className="text-gray-600 hover:text-customGreen transition-colors"
                  >
                    {t("contactEwaste.contactChannels.whatsapp.value")}
                  </a>
                </div>
              </motion.div>

              {/* Global Partnerships */}
              <motion.div variants={item} className="border-t pt-6 flex items-start gap-4">
                <Mail className="w-5 h-5 text-customGreen mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">
                    {t("contactEwaste.contactChannels.partnerships.label")}
                  </p>
                  <a
                    href={`mailto:${t("contactEwaste.contactChannels.partnerships.value")}`}
                    className="text-gray-600 hover:text-customGreen transition-colors"
                  >
                    {t("contactEwaste.contactChannels.partnerships.value")}
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactEwaste;