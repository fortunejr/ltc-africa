import React from "react";
import { carbon } from "../../../imports";

const ClimateChange = () => {
  return (
    <section className="bg-[#f2f7ff] py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f5da4] mb-4">
            Climate Change & Climate Action
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our climate commitment is to drive climate action and carbon
            footprint reduction across Africa by transforming electronic waste
            into a catalyst for environmental protection, economic resilience,
            and sustainable growth.
          </p>
        </div>

        {/* Intro */}
        <div className="max-w-5xl mx-auto mb-24 space-y-6 text-gray-700 leading-relaxed">
          <p>
            At <strong>LTC Africa Recycling</strong>, we recognize that
            electronic waste (e-waste) is not just a waste management challenge,
            it’s also a significant climate and environmental issue.
            Uncontrolled dumping and burning of e-waste release large amounts of
            greenhouse gases (GHGs), such as carbon dioxide (CO₂) and methane
            (CH₄), as well as toxic substances that degrade soil, air, and water
            quality.
          </p>
          <p>
            Our mission is to turn this challenge into an opportunity for
            climate resilience, by implementing smart recycling systems that
            minimize emissions, conserve energy, and promote resource efficiency
            across Africa.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-16">
          {[
            {
              title: "Reducing Carbon Emissions Through Responsible Recycling",
              body: (
                <>
                  <p>
                    LTC Africa actively prevents tons of carbon emissions
                    annually by:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      Diverting electronic waste from open dumps and landfills,
                      where informal burning or decomposition of plastics and
                      metals release harmful GHGs.
                    </li>
                    <li>
                      Implementing controlled recycling processes that use
                      energy-efficient technologies and emission-reduction
                      protocols.
                    </li>
                    <li>
                      Promoting reuse and refurbishment, extending the life of
                      IT and telecom equipment, thereby reducing the need for
                      manufacturing new devices — one of the largest
                      carbon-emitting processes in the electronics value chain.
                    </li>
                    <li>
                      Encouraging safe material recovery, which conserves raw
                      materials and reduces the need for high-energy mining and
                      metal extraction activities.
                    </li>
                  </ul>
                  <p className="mt-4 text-gray-700">
                    Every ton of electronics responsibly recycled by LTC
                    translates to measurable reductions in embedded carbon
                    emissions, energy consumption, and environmental
                    degradation.
                  </p>
                </>
              ),
            },
            {
              title: "Promoting a Circular Economy for Climate Resilience",
              body: (
                <>
                  <p className="text-gray-700 mb-4">
                    LTC Africa is a strong advocate for the circular economy — a
                    system where waste is designed out, and materials are
                    continuously reused or repurposed.
                  </p>
                  <p className="text-gray-700">
                    Through our{" "}
                    <strong>Repair → Refurbish → Reuse → Recycle</strong> model,
                    model, we reduce dependence on virgin raw materials and
                    limit industrial processes that contribute to global
                    warming. By extending product lifecycles and recovering
                    valuable metals (like copper, gold, aluminum, and steel), we
                    help avoid the carbon-intensive production of new materials
                    and equipment. This circular model not only lowers emissions
                    but also builds economic resilience, creates green jobs, and
                    reduces Africa’s reliance on imported raw materials.
                  </p>
                </>
              ),
            },
            {
              title: "Low-Emission Operations & Sustainable Logistics",
              body: (
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <p>
                    We continuously optimize our operations to minimize direct
                    and indirect carbon emissions:
                  </p>
                  <li>
                    Green logistics systems: We streamline waste collection
                    routes using digital tracking and route- optimization tools
                    to minimize fuel consumption and emissions.
                  </li>
                  <li>
                    Energy-efficient recycling facilities: Our facilities
                    incorporate energy-saving equipment and renewable energy
                    sources where possible.
                  </li>
                  <li>
                    Eco-friendly packaging and transportation: We reduce
                    unnecessary materials and prioritize shared transportation
                    models for bulk collections.
                  </li>
                  <li>
                    Waste segregation at source: Minimizing unnecessary
                    transport and processing emissions by sorting materials at
                    client sites.
                  </li>
                </ul>
              ),
            },
            {
              title: "Carbon Measurement, Reporting & Offset Programs",
              body: (
                <>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <p>
                      As part of our environmental consulting and EPR programs,
                      LTC Africa supports organizations in:
                    </p>
                    <li>
                      Measuring their carbon footprint related to electronic
                      waste disposal and IT asset decommissioning.
                    </li>
                    <li>
                      Developing waste and carbon management strategies aligned
                      with global frameworks such as the Paris Agreement,
                      UNFCCC, and SDG 13 (Climate Action).
                    </li>
                    <li>
                      Implementing offset and reduction programs, including
                      reforestation initiatives and clean energy adoption within
                      their supply chains.
                    </li>
                  </ul>
                  <p className="mt-4 text-gray-700">
                    We also provide carbon impact reports and recycling
                    certificates that quantify emission savings achieved through
                    responsible recycling.
                  </p>
                </>
              ),
            },
            {
              title: "Partnerships, Education & Policy Support",
              body: (
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <p>
                    LTC Africa collaborates with governments, private companies,
                    NGOs, and international organizations to strengthen regional
                    climate resilience through:
                  </p>
                  <li>
                    Awareness campaigns on the carbon impact of informal e-waste
                    management.
                  </li>
                  <li>
                    Capacity building and training for corporate teams,
                    recyclers, and policymakers on low-carbon practices and
                    sustainable waste strategies.
                  </li>
                  <li>
                    Policy advisory on integrating e-waste management into
                    national climate action plans and Extended Producer
                    Responsibility (EPR) frameworks.
                  </li>
                  <p className="mt-4 text-gray-700">
                    By doing so, we build collective capacity for a
                    climate-smart Africa that prioritizes sustainability at
                    every stage of production and consumption.
                  </p>
                </ul>
              ),
            },
            {
              title: "Research, Innovation & Green Technology",
              body: (
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <p>
                    Through our Research & Development (R&D) programs, we invest
                    in innovative recycling technologies and sustainable methods
                    that reduce process-related emissions and improve energy
                    efficiency. This includes:
                  </p>
                  <li>Developing low-energy e-waste processing techniques.</li>
                  <li>
                    Exploring renewable energy integration in recycling
                    facilities.
                  </li>
                  <li>
                    Encouraging the development of green materials and
                    eco-design principles in electronics manufacturing.
                  </li>
                </ul>
              ),
            },
            {
              title: "Alignment with Global & Regional Climate Goals",
              body: (
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <p>
                    LTC Africa aligns its operations and strategies with
                    international and regional sustainability frameworks,
                    including:
                  </p>
                  <li>
                    UN Sustainable Development Goals (SDGs) — especially SDG 12
                    (Responsible Consumption and Production) and SDG 13 (Climate
                    Action).
                  </li>
                  <li>
                    Basel Convention on the Control of Transboundary Movements
                    of Hazardous Waste.
                  </li>
                  <li>
                    African Union Agenda 2063 for a green and inclusive economy.
                  </li>
                  <li>
                    ISO 14001 Environmental Management System standards for
                    sustainable operations.
                  </li>
                </ul>
              ),
            },
            {
              title: "Measurable Impact",
              body: (
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <p>Each year, LTC Africa’s recycling and refurbishment activities:</p>
                  <li>
                    Divert thousands of tons of e-waste from landfills.
                  </li>
                  <li>
                    Save significant energy equivalent to powering thousands of homes.
                  </li>
                  <li>
                    Avoid emissions that would have resulted from informal burning or virgin material extraction.
                  </li>
                  <li>Support carbon-conscious procurement and sustainable IT lifecycle management for our clients.</li>
                </ul>
              ),
            },
          ].map((section, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#2f5da4] mb-4">
                {section.title}
              </h3>
              {section.body}
            </div>
          ))}

          {/* Pledge Section with Image */}
          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <div className="grid md:grid-cols-2 gap-10 items-center p-10">
              {/* Text */}
              <div>
                <h3 className="text-2xl font-semibold text-[#2f5da4] mb-4">
                  Our Pledge for a Low-Carbon Future
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  LTC Africa Recycling is committed to achieving carbon-neutral
                  operations by 2030 through increased renewable energy use,
                  continuous efficiency improvements, and collaboration with
                  climate-focused partners. Climate action is embedded in our
                  mission, values, and daily operations — shaping Africa’s
                  transition to a low-carbon, sustainable future.
                </p>
              </div>

              {/* Image */}
              <div className="relative">
                <img
                  src={carbon}
                  alt="Climate action and carbon neutrality"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-[#2f5da4]/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClimateChange;
