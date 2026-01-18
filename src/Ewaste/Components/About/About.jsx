import React from "react";
import { about } from "../../../imports";

const AboutEwaste = () => {
  return (
    <section className="relative w-full py-20 px-4 bg-linear-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative blurred shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#3067a6]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-24 w-96 h-96 bg-[#3067a6]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          
          {/* IMAGE */}
          <div data-aos="fade-right" className="relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]">
              <img
                src={about}
                alt="LTC Africa Recycling About Us"
                className="w-full h-130 object-cover"
              />

              {/* Brand overlay */}
              <div className="absolute inset-0 bg-linear-to-tr from-[#3067a6]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />
            </div>

            {/* Floating glow ring */}
            <div className="absolute -inset-4 rounded-3xl border border-[#3067a6]/30 opacity-0 group-hover:opacity-100 transition duration-700" />
          </div>

          {/* CONTENT */}
          <div data-aos="fade-left">
            <p className="text-[#3067a6] font-semibold mb-4 uppercase tracking-widest relative inline-block">
              LTC Africa Recycling Limited
              <span className="absolute left-0 -bottom-1 w-1/2 h-0.5 bg-[#3067a6] animate-pulse" />
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              About Us
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              LTC Africa Recycling, a proud member of the <span className="font-semibold">(LTC Africa Group)</span>,
              is a modern and fully registered Waste Electrical and Electronic Equipment (WEEE) management company
              dedicated to redefining how Africa handles electronic waste.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              Through innovative ITAD solutions, we help organizations securely recover value from outdated or
              decommissioned electronic equipment while protecting sensitive data, promoting reuse, and minimizing
              carbon emissions.
            </p>

            {/* CTA */}
            <a
              href="/e-waste/about"
              className="inline-flex items-center gap-3 rounded-full bg-[#3067a6] px-8 py-3 text-white text-sm font-semibold shadow-lg transition-all duration-300 hover:bg-[#24548c] hover:scale-105"
            >
              Learn More
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEwaste;
