import React from "react";

const ContactEwaste = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Contact Us
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Get in touch with LTC Africa Recycling for partnerships, services,
            and sustainable e-waste management solutions across Africa and beyond.
          </p>
        </div>

        {/* Map Placeholder */}
        <div className="rounded-3xl border border-gray-200 h-80 flex items-center justify-center text-gray-400">
          Google Map – Office Locations & Address Pins
        </div>

        {/* Contact Details */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Offices */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Our Offices
            </h3>

            <ul className="space-y-4 text-gray-600 leading-relaxed">
              <li>
                <strong>LTC Africa Group Administrative HQ (Ghana)</strong>
              </li>
              <li>
                <strong>Regional Office – Madagascar:</strong><br />
                ZEWA Group Collection &amp; Recycling Center – Bat II Afriport Warehouse,
                Forello Tanjumbato, Antananarivo, Madagascar
              </li>
              <li>
                <strong>Regional Office – Nigeria:</strong><br />
                4 Association Road, Governors Road, Lagos, Nigeria
              </li>
              <li>
                <strong>Regional Office – South Africa</strong>
              </li>
              <li>
                <strong>Regional Office – Tanzania</strong>
              </li>
              <li>
                <strong>Regional Office – Morocco</strong>
              </li>
            </ul>
          </div>

          {/* Contact Channels */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Get in Touch
            </h3>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:Recycling@ltcafrica"
                  className="underline hover:text-black"
                >
                  Recycling@ltcafrica
                </a>
              </p>

              <p>
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/261328681658"
                  className="underline hover:text-black"
                >
                  +261 32 868 1658
                </a>
              </p>

              <p>
                <strong>Social Media:</strong><br />
                Facebook · LinkedIn · X
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200 space-y-3 text-gray-600">
              <p>
                <strong>Global Partnerships:</strong><br />
                <a
                  href="mailto:Operations@Ltcafrica"
                  className="underline hover:text-black"
                >
                  Operations@Ltcafrica
                </a>
              </p>

              <p className="text-sm">
                Terms &amp; Conditions of Service · Website Cookies · Code of Conduct ·
                Data Privacy Policy
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactEwaste;
