import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  ShieldCheck,
  Leaf,
  Radio,
  Banknote,
  Stethoscope,
  GraduationCap,
  Factory,
  ShoppingCart,
  HeartHandshake,
  Hotel,
  Truck,
  Ship,
  Plane,
  Cpu,
  Landmark
} from 'lucide-react';

const industries = [
  { name: 'Telecom', icon: Radio },
  { name: 'Finance', icon: Banknote },
  { name: 'Government', icon: ShieldCheck },
  { name: 'Energy', icon: Leaf },
  { name: 'Media', icon: Building2 },
  { name: 'Healthcare', icon: Stethoscope },
  { name: 'Education', icon: GraduationCap },
  { name: 'Manufacturing', icon: Factory },
  { name: 'Retail', icon: ShoppingCart },
  { name: 'NGOs', icon: HeartHandshake },
  { name: 'Hospitality', icon: Hotel },
  { name: 'Logistics', icon: Truck },
  { name: 'Shipping', icon: Ship },
  { name: 'Aviation', icon: Plane },
  { name: 'Public Utilities', icon: Landmark },
  { name: 'Real Estate', icon: Building2 },
  { name: 'IT & Software', icon: Cpu }
];

const ServicesEwaste = () => {
  return (
    <section className="bg-[#f2f7ff] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl font-bold text-[#2f5da4] mb-4">
            Core E-Waste & ITAD Services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At LTC Africa Recycling, we provide borderless e-waste management and
            IT Asset Disposition (ITAD) solutions across Africa. Our mobile,
            location-independent operations help organizations responsibly manage,
            recover, refurbish, and recycle electronic assets — anywhere.
          </p>
        </div>

        {/* Services Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              title: 'IT Equipment',
              text: 'Desktops, laptops, servers, monitors, printers, UPS systems, networking devices, storage media, tablets, SIM cards, and accessories.'
            },
            {
              title: 'Telecom Equipment',
              text: 'Mobile phones, PBX systems, BTS components, antennas, CCTV, POS terminals, VoIP devices, and satellite equipment.'
            },
            {
              title: 'Hazardous Components',
              text: 'Batteries, toner cartridges, capacitors, transformers, circuit boards, mercury lamps, PCB boards, and electronic chips.'
            },
            {
              title: 'Other Equipment',
              text: 'Medical electronic devices (ECG, monitors) and audio-visual equipment such as speakers and projectors.'
            }
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition flex flex-col"
            >
              <h3 className="text-lg font-semibold text-[#2f5da4] mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 grow">
                {service.text}
              </p>
            </div>
          ))}
        </div>

        {/* Industries We Serve */}
        <div className="bg-white/70 backdrop-blur rounded-3xl p-10 mb-16">
          <h3 className="text-2xl font-semibold text-center text-[#2f5da4] mb-8">
            Industries We Serve
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-white shadow-sm text-[#2f5da4] font-medium text-sm hover:shadow-md transition"
                >
                  <Icon size={18} />
                  <span>{industry.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/e-waste/services"
            className="inline-block bg-[#2f5da4] text-white px-8 py-3 rounded-full font-medium hover:bg-[#244a83] transition"
          >
            View Full E-Waste Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesEwaste;
