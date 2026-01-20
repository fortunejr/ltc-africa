import React from "react";
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
} from "lucide-react";

const industries = [
  { name: "Telecom", icon: Radio },
  { name: "Finance", icon: Banknote },
  { name: "Government", icon: ShieldCheck },
  { name: "Energy", icon: Leaf },
  { name: "Media", icon: Building2 },
  { name: "Healthcare", icon: Stethoscope },
  { name: "Education", icon: GraduationCap },
  { name: "Manufacturing", icon: Factory },
  { name: "Retail", icon: ShoppingCart },
  { name: "NGOs", icon: HeartHandshake },
  { name: "Hospitality", icon: Hotel },
  { name: "Logistics", icon: Truck },
  { name: "Shipping", icon: Ship },
  { name: "Aviation", icon: Plane },
  { name: "Public Utilities", icon: Landmark },
  { name: "Real Estate", icon: Building2 },
  { name: "IT & Software", icon: Cpu }
];

const ServicesEwaste = () => {
  return (
    <section className="w-full bg-white text-slate-800 py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-32">

        {/* CORE SERVICE */}
        <div className="max-w-4xl space-y-6">
          <span className="text-sm uppercase tracking-widest text-customGreen">
            What We Do
          </span>

          <h1 className="text-3xl md:text-5xl font-semibold text-slate-900">
            Core Services
          </h1>

          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            At LTC Africa Recycling, we specialize in borderless e-waste
            management and IT Asset Disposition (ITAD) with recovery solutions
            across Africa. Our mobile and location-independent operations enable
            organizations to manage, refurbish, sell, and responsibly recycle
            decommissioned IT and electronic assets wherever they are.
          </p>
        </div>

        {/* INDUSTRIES */}
        <div className="space-y-10">
          <h2 className="text-center text-2xl md:text-4xl font-semibold text-slate-900">
            Industries We Serve
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-slate-700"
                >
                  <Icon size={18} className="text-customGreen" />
                  <span>{industry.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* WHAT WE ACCEPT */}
        <div className="space-y-16 max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-900">
            What We Accept
          </h2>

          <div className="grid gap-12 md:grid-cols-2">
            {[
              {
                title: "IT Equipment",
                text:
                  "Desktop computers, laptops, servers, monitors, keyboards, printers, scanners, UPS systems, routers, network switches, storage devices, tablets, SIM cards, cables, and accessories."
              },
              {
                title: "Telecom Equipment",
                text:
                  "Mobile phones, PBX systems, BTS components, antennas, CCTV systems, POS terminals, VoIP devices, satellite equipment, networking racks, and communication hardware."
              },
              {
                title: "Hazardous Components",
                text:
                  "Batteries, toner cartridges, capacitors, transformers, circuit boards, mercury lamps, PCB boards, and electronic chips."
              },
              {
                title: "Other Equipment",
                text:
                  "Medical electronic devices such as ECG systems and monitors, as well as audio-visual equipment including speakers and projectors."
              }
            ].map((item, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-medium text-customBlue">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <div className="space-y-20 max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-900">
            Our Services
          </h2>

          {[
            {
              title: "Borderless Collection & Recycling",
              text:
                "We provide nationwide and cross-border collection of Waste Electrical and Electronic Equipment through mobile recycling units and certified logistics partners. Our model allows fast response, lower logistics costs, and compliant recycling services across Africa."
            },
            {
              title: "IT Asset Recovery & Management",
              text:
                "We manage decommissioned IT and telecom assets through secure inventory, auditing, valuation, and certified data destruction, ensuring maximum recovery value and full regulatory compliance."
            },
            {
              title: "Extended Producer Responsibility (EPR)",
              text:
                "We design and manage EPR programs for governments, manufacturers, importers, and distributors, ensuring responsible take-back, traceability, and compliant recycling of electronic waste."
            },
            {
              title: "Consultancy & Environmental Advisory",
              text:
                "Our advisory services support organizations and governments with sustainability planning, circular economy integration, carbon reduction strategies, and regulatory compliance training."
            },
            {
              title: "Buyback & Remarketing",
              text:
                "Through structured buyback and resale programs, we help organizations recover financial value from decommissioned assets through repair, refurbishment, resale, reuse, or material recovery."
            },
            {
              title: "WEEE to Renewable Energy",
              text:
                "By combining refurbished batteries with solar technology, we transform electronic waste into clean, affordable energy solutions for homes, businesses, and communities across Africa."
            }
          ].map((service, index) => (
            <div
              key={index}
              className="border-l-2 border-customGreen pl-6 space-y-3"
            >
              <h3 className="text-xl font-medium text-slate-900">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                {service.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesEwaste;
