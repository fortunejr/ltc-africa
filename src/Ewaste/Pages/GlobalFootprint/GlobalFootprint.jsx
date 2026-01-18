import React from "react";

const GlobalFootprint = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our Global Footprint
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            At LTC Africa Recycling, our impact extends far beyond the borders of
            Africa. With partnerships across over <strong>120 countries</strong>,
            we operate through a global network of recycling experts, technology
            partners, and sustainability organizations delivering world-class,
            compliant e-waste management solutions.
          </p>
        </div>

        {/* Global Reach */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-gray-600 leading-relaxed">
            <p>
              Since our inception, LTC Africa Recycling has built a strong
              international ecosystem that unites recyclers, manufacturers,
              producers, regulators, and environmental agencies to address
              electronic waste on a global scale.
            </p>
            <p>
              Our operations are supported by strategic alliances in Europe,
              Asia, the Americas, and the Middle East, enabling us to meet
              international standards in collection, refurbishment, and
              resource recovery for IT and telecom assets.
            </p>
            <p>
              Through our membership in the LTC Africa Group and collaborations
              with certified recyclers and global sustainability organizations,
              all recovered materials are processed safely, transparently, and
              responsibly.
            </p>
          </div>

          {/* Compliance Standards */}
          <div className="rounded-3xl border border-gray-200 p-8">
            <h3 className="text-xl font-semibold mb-4">
              International Compliance Standards
            </h3>
            <ul className="space-y-3 text-gray-600 list-disc list-inside">
              <li>
                Basel Convention on the Transboundary Movement of Hazardous Waste
              </li>
              <li>
                EU WEEE &amp; RoHS Directives
              </li>
              <li>
                ISO 14001 – Environmental Management Systems
              </li>
              <li>
                OECD Environmental Guidelines for sustainable trade
              </li>
            </ul>
          </div>
        </div>

        {/* Partnerships */}
        <div className="rounded-3xl border border-gray-200 p-10 space-y-6">
          <h3 className="text-2xl font-semibold">
            Strategic Global Partnerships
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-5xl">
            Our global partnerships span international recyclers, EPR platforms,
            environmental consultants, and logistics networks, enabling seamless
            borderless operations — from on-site IT asset decommissioning to
            cross-border material transfer and certified final processing.
          </p>
          <p className="text-gray-600 leading-relaxed max-w-5xl">
            In collaboration with organizations such as <strong>Ecoreco India</strong>,
            <strong> Majestic Corporation USA</strong>, <strong>UNEP</strong>,
            <strong> UNDP</strong>, and OEM recycling alliances, LTC Africa bridges
            Africa’s e-waste challenges with global circular economy opportunities.
          </p>
        </div>

        {/* Global Impact */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="rounded-2xl border border-gray-200 p-8">
            <h4 className="text-3xl font-bold">120+</h4>
            <p className="mt-2 text-gray-600">Countries Reached</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8">
            <h4 className="text-3xl font-bold">4</h4>
            <p className="mt-2 text-gray-600">Continents Covered</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8">
            <h4 className="text-3xl font-bold">100%</h4>
            <p className="mt-2 text-gray-600">Certified Processing</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8">
            <h4 className="text-3xl font-bold">Global</h4>
            <p className="mt-2 text-gray-600">Circular Economy Network</p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            Our borderless approach reflects our belief that sustainability knows
            no limits. By combining local expertise with global best practices,
            LTC Africa Recycling stands as a trusted partner for governments,
            enterprises, and global brands building a cleaner, circular, and
            climate-resilient world.
          </p>
        </div>

      </div>
    </section>
  );
};

export default GlobalFootprint;
