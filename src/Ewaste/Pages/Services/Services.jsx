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
    <section className="w-full bg-white text-slate-800">
      <div className="container mx-auto px-6 md:px-12 py-24 space-y-24">

        {/* CORE SERVICE */}
        <div className="max-w-6xl space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-950">
            Core Service
          </h1>

          <p className="leading-relaxed text-base md:text-lg">
            At LTC Africa Recycling, we specialize in borderless e-waste management and IT Asset Deposition (ITAD)
            with recovery solutions across Africa. Our operations are designed to be mobile, flexible, and location-
            independent, enabling organizations to manage, sell, refurbish and recycle their decommissioned
            IT/ Electronic Waste Equipment Assets efficiently — wherever they are.
          </p>
        </div>

        {/* INDUSTRIES */}
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

        {/* WHAT WE ACCEPT */}
        <div className="max-w-6xl space-y-10">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-950">
            What We Accept
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-900">IT Equipment</h3>
              <p className="leading-relaxed text-sm md:text-base">
                Desktop computers, Laptops, Servers and mainframes, Monitors (LCD, LED, CRT) Keyboards, mice,
                Printers, Scanners, fax machines, Photocopiers, UPS (Uninterruptible Power Supplies), Network switches,
                routers, External storage devices (HDDs, SSDs, NAS), Cables and connectors, Tablets and e-readers, Sim
                Cards, Projectors..Etc,
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-900">Telecom Equipment</h3>
              <p className="leading-relaxed text-sm md:text-base">
                Mobile phones and smartphones, Landline phones, PBX systems and telephone exchanges, Modems and
                internet routers, Base transceiver stations (BTS) components, Antennas and network towers, CCTV
                cameras and security systems, Access control systems, Payment terminals and POS systems Satellite
                communication equipment, Switchboards and patch panels, Networking racks and cabinets, VoIP phones
                and accessories…Etc..
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-900">Hazardous Components</h3>
              <p className="leading-relaxed text-sm md:text-base">
                Batteries (Li-ion, lead-acid, NiMH), Toner and ink cartridges, Capacitors, transformers, and circuit boards
                Fluorescent tubes, mercury-containing lamps, PCB boards and electronic chips. Etc..
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-900">Other Equipment’s</h3>
              <p className="leading-relaxed text-sm md:text-base">
                Medical electronic devices (e.g., ECG, monitors) Audio-visual equipment (speakers, microphones,
                projectors)
              </p>
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <div className="max-w-6xl space-y-16">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-950">
            Our Services
          </h2>

          {[
            {
              title: "1. Borderless Collection & Recycling",
              text: `We provide nationwide and cross-border collection of Waste Electrical and Electronic Equipment (WEEE)
through our mobile recycling units and trusted logistics partners. Our no-fixed-location model allows us
to serve clients across multiple African regions with seamless, certified recycling services in full
compliance with international and local environmental standards.

With our borderless and mobile operating model, we performs swift on-site evaluations, dismantling,
and data destruction without the need for a fixed recycling facility, this allows faster response, lower
logistics costs, and greater accessibility to clients across Africa.`,
            },
            {
              title: "2. IT Asset Recovery & Management",
              text: `At LTC Africa Recycling, we help organizations take control of their decommissioned IT, electronic, and
telecom equipment, from servers, routers, and switches, laptops, phones, and network infrastructure.
Our mission is to help maximize both environmental and economic value while ensuring complete
security and compliance.

We provide end-to-end ITAD services which comprise inventory and assessment, auditing, coordination,
and management of large-scale IT assets. We ensure secure data destruction, fair valuation, and
responsible resale or recycling.`,
            },
            {
              title: "3. Extended Producer Responsibility (EPR)",
              text: `We partner with governments, service providers, manufacturers, importers, and distributors to design,
manage and implement EPR (Extended Producer Responsibility) programs that ensure responsible take-
back, collection, and recycling of electronic and other waste generated by producers across African
countries.`,
            },
            {
              title: "4. Consultancy & Environmental Advisory",
              text: `Our Corporate consultancy team provides expert guidance to organizations, governments, and NGOs on
e-waste management, sustainability planning, carbon footprint reduction, and circular economy
integration. We also deliver tailored training programs on e-waste management and environmental
compliance.`,
            },
            {
              title: "5. Buyback & Remarketing",
              text: `We help and guide various organization and service provider through our smart asset buyback and resale
solutions; we help clients recover financial value from outdated or decommissioned equipment assets.
Usable items can mostly be Repair, refurbished, resold, or reuse, while non-functional equipment is
processed for material recovery, to ensure zero-waste operations.`,
            },
            {
              title: "6. WEEE To Renewable Energy",
              text: `With Our Waste to Energy Solution: We are Powering Africa, sustainably!

By combining refurbished batteries with solar power technology, we create affordable, sustainable
energy solutions that bring light, opportunity, and independence to communities, businesses, and
homes.

It’s more than energy because it’s impacted every battery we refurbish, every panel we install, turns
e-waste into clean, reliable, and sustainable energy.`,
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-4"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-blue-950">
                {service.title}
              </h3>
              <p className="whitespace-pre-line leading-relaxed text-sm md:text-base">
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
