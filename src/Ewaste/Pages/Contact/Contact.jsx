import React from "react";
import { Mail, MapPin, Phone, Users } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const ContactEwaste = () => {
  return (
    <section className="py-36 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-5xl font-bold text-[#003333] header-txt">
            Contact Us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Get in touch with LTC Africa
          </p>
        </div>

        {/* Contact Details */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* Offices */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-customGreen" />
              Our Offices
            </h3>

            <ul className="space-y-4 text-gray-700 leading-relaxed">
              {/* <li className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
                <strong>LTC Africa Group Administrative HQ (Ghana)</strong>
              </li> */}
              <li className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
                <strong>Regional Office – Madagascar:</strong>
                <br />
                ZEWA Group Collection & Recycling Center – Bat II Afriport
                Warehouse, Forello Tanjumbato, Antananarivo, Madagascar
              </li>
              <li className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
                <strong>Regional Office – Nigeria:</strong>
                <br />
                4 Association Road, Governors Road, Lagos, Nigeria
              </li>
              {/* <li className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
                <strong>Regional Office – South Africa</strong>
              </li>
              <li className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
                <strong>Regional Office – Tanzania</strong>
              </li>
              <li className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
                <strong>Regional Office – Morocco</strong>
              </li> */}
            </ul>
          </div>

          {/* Contact Channels */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
              <Users className="w-6 h-6 text-customGreen" />
              Get in Touch
            </h3>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-customGreen" />
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:Recycling@ltcafrica"
                  className="underline hover:text-customGreen transition-colors"
                >
                  Recycling@ltcafrica
                </a>
              </p>

              <p className="flex items-center gap-2">
                <BsWhatsapp className="w-5 h-5 text-customGreen" />
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/261328681658"
                  className="underline hover:text-customGreen transition-colors"
                >
                  +261 32 868 1658
                </a>
              </p>

            </div>

            <div className="pt-6 border-t border-gray-200 space-y-3 text-gray-700">
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-customGreen" />
                <strong>Global Partnerships:</strong>
                <br />
                <a
                  href="mailto:Operations@Ltcafrica"
                  className="underline hover:text-customGreen transition-colors"
                >
                  Operations@Ltcafrica
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactEwaste;
