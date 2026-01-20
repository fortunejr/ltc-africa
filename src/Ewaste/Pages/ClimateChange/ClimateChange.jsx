import React from "react";
import { carbon, climate } from "../../../imports";

const ClimateChange = () => {
  return (
    <section className="bg-slate-50 py-28 text-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-sm uppercase tracking-widest text-customGreen">
            Sustainability
          </span>

          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900">
            Climate Change & Climate Action
          </h2>

          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Our climate commitment focuses on driving climate action and carbon
            footprint reduction across Africa by transforming electronic waste
            into a catalyst for environmental protection, economic resilience,
            and sustainable growth.
          </p>
        </div>

        {/* CLIMATE IMAGE */}
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-80 md:h-116 rounded-2xl overflow-hidden">
            <img
              src={climate}
              alt="Climate action and sustainability"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* INTRO */}
        <div className="max-w-5xl mx-auto space-y-6 text-slate-600 leading-relaxed">
          <p>
            At{" "}
            <span className="font-medium text-slate-900">
              LTC Africa Recycling
            </span>
            , we recognize that electronic waste is not only a waste management
            challenge but also a major climate and environmental issue.
            Uncontrolled dumping and burning of e-waste release greenhouse gases
            such as carbon dioxide and methane, alongside toxic substances that
            degrade air, soil, and water quality.
          </p>

          <p>
            Our mission is to convert this challenge into climate resilience by
            deploying smart recycling systems that reduce emissions, conserve
            energy, and promote resource efficiency across Africa.
          </p>
        </div>

        {/* CONTENT */}
        <div className="max-w-6xl mx-auto space-y-24">
          {[
            {
              title: "Reducing Carbon Emissions Through Responsible Recycling",
              body: (
                <>
                  <p className="mb-4">
                    LTC Africa actively prevents carbon emissions annually by:
                  </p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>
                      Diverting e-waste from open dumps and landfills where
                      informal burning releases harmful greenhouse gases.
                    </li>
                    <li>
                      Implementing controlled recycling processes with
                      energy-efficient technologies.
                    </li>
                    <li>
                      Promoting reuse and refurbishment to extend equipment
                      lifecycles and reduce new manufacturing demand.
                    </li>
                    <li>
                      Encouraging safe material recovery to reduce energy-
                      intensive mining activities.
                    </li>
                  </ul>
                  <p className="mt-4">
                    Each ton of electronics responsibly recycled translates into
                    measurable reductions in emissions, energy consumption, and
                    environmental degradation.
                  </p>
                </>
              ),
            },
            {
              title: "Circular Economy for Climate Resilience",
              body: (
                <>
                  <p className="mb-4">
                    LTC Africa promotes a circular economy where waste is
                    eliminated and materials are continuously reused.
                  </p>
                  <p>
                    Through our{" "}
                    <span className="font-medium text-slate-900">
                      Repair → Refurbish → Reuse → Recycle
                    </span>{" "}
                    model, we reduce dependence on virgin materials, avoid
                    carbon-intensive production, create green jobs, and
                    strengthen economic resilience across Africa.
                  </p>
                </>
              ),
            },
            {
              title: "Low-Emission Operations & Sustainable Logistics",
              body: (
                <ul className="space-y-2 list-disc pl-5">
                  <li>
                    Optimized logistics routes using digital tracking to reduce
                    fuel consumption.
                  </li>
                  <li>
                    Energy-efficient recycling facilities and renewable energy
                    adoption where possible.
                  </li>
                  <li>
                    Reduced packaging waste and shared transport models for bulk
                    collections.
                  </li>
                  <li>
                    Waste segregation at source to minimize transport and
                    processing emissions.
                  </li>
                </ul>
              ),
            },
            {
              title: "Carbon Measurement, Reporting & Offset Programs",
              body: (
                <>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>
                      Measuring carbon footprints related to e-waste disposal
                      and IT asset decommissioning.
                    </li>
                    <li>
                      Developing strategies aligned with global frameworks such
                      as the Paris Agreement and SDG 13.
                    </li>
                    <li>
                      Supporting offset programs including reforestation and
                      clean energy adoption.
                    </li>
                  </ul>
                  <p className="mt-4">
                    We provide carbon impact reports and recycling certificates
                    quantifying emission savings.
                  </p>
                </>
              ),
            },
            {
              title: "Partnerships, Education & Policy Support",
              body: (
                <ul className="space-y-2 list-disc pl-5">
                  <li>
                    Climate awareness campaigns on the impact of informal
                    e-waste handling.
                  </li>
                  <li>
                    Capacity building for corporates, recyclers, and
                    policymakers.
                  </li>
                  <li>
                    Policy advisory for integrating e-waste into national
                    climate strategies and EPR frameworks.
                  </li>
                </ul>
              ),
            },
            {
              title: "Research, Innovation & Green Technology",
              body: (
                <ul className="space-y-2 list-disc pl-5">
                  <li>Low-energy e-waste processing innovations.</li>
                  <li>Renewable energy integration in recycling operations.</li>
                  <li>
                    Promotion of green materials and eco-design in electronics.
                  </li>
                </ul>
              ),
            },
            {
              title: "Alignment with Global & Regional Climate Goals",
              body: (
                <ul className="space-y-2 list-disc pl-5">
                  <li>UN SDGs, especially SDG 12 and SDG 13.</li>
                  <li>Basel Convention compliance.</li>
                  <li>African Union Agenda 2063.</li>
                  <li>ISO 14001 Environmental Management standards.</li>
                </ul>
              ),
            },
            {
              title: "Measurable Impact",
              body: (
                <ul className="space-y-2 list-disc pl-5">
                  <li>Thousands of tons of e-waste diverted annually.</li>
                  <li>
                    Significant energy savings equivalent to powering homes.
                  </li>
                  <li>
                    Avoided emissions from informal burning and material
                    extraction.
                  </li>
                  <li>
                    Support for sustainable IT lifecycle management for clients.
                  </li>
                </ul>
              ),
            },
          ].map((section, index) => (
            <div
              key={index}
              className="border-l-2 border-customGreen pl-6 space-y-4"
            >
              <h3 className="text-xl md:text-2xl font-medium text-slate-900">
                {section.title}
              </h3>
              <div className="text-sm md:text-base text-slate-600 leading-relaxed">
                {section.body}
              </div>
            </div>
          ))}
        </div>

        {/* PLEDGE */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">
              Our Pledge for a Low-Carbon Future
            </h3>
            <p className="text-slate-600 leading-relaxed">
              LTC Africa Recycling is committed to achieving carbon-neutral
              operations by 2030 through renewable energy adoption, operational
              efficiency, and partnerships with climate-focused organizations.
              Climate action is embedded into our mission, values, and daily
              operations.
            </p>
          </div>

          <div className="relative">
            <img
              src={carbon}
              alt="Climate action and carbon neutrality"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 rounded-xl ring-1 ring-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClimateChange;
