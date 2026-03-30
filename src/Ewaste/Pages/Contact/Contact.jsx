import React from "react";
import { Mail, MapPin, Users } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const ContactEwaste = () => {
  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#003333] header-txt mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600">
            Get in touch with LTC Africa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Offices */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="w-6 h-6 text-customGreen" />
              <h3 className="text-2xl font-semibold text-[#003333]">
                Our Offices
              </h3>
            </div>

            <div className="space-y-6">

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <p className="font-semibold text-gray-900 mb-1">
                  HQ Office Nigeria
                </p>
                <p className="text-gray-600">
                  4 Association Road, Governors Road Lagos
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <p className="font-semibold text-gray-900 mb-1">
                  Regional Office Madagascar
                </p>
                <p className="text-gray-600">
                  Bat 49B II Afriport Warehouse, Antananarivo Madagascar
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <p className="font-semibold text-gray-900 mb-1">
                  Regional Facilities
                </p>
                <p className="text-gray-600">
                  Ghana, Botswana, Tanzania, Morocco, South Africa
                </p>
              </div>

            </div>
          </div>

          {/* Contact Channels */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-6 h-6 text-customGreen" />
              <h3 className="text-2xl font-semibold text-[#003333]">
                Get in Touch
              </h3>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 space-y-6">

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-customGreen mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a
                    href="mailto:Recycling@ltcafrica"
                    className="text-gray-600 hover:text-customGreen transition-colors"
                  >
                    Recycling@ltcafrica
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <BsWhatsapp className="w-5 h-5 text-customGreen mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">WhatsApp</p>
                  <a
                    href="https://wa.me/261328681658"
                    className="text-gray-600 hover:text-customGreen transition-colors"
                  >
                    +261 32 868 1658
                  </a>
                </div>
              </div>

              <div className="border-t pt-6 flex items-start gap-4">
                <Mail className="w-5 h-5 text-customGreen mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">
                    Global Partnerships
                  </p>
                  <a
                    href="mailto:Operations@Ltcafrica"
                    className="text-gray-600 hover:text-customGreen transition-colors"
                  >
                    Operations@Ltcafrica
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactEwaste;