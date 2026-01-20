import React from "react";

const GlobalFootprint = () => {
  return (
    <section className="bg-white py-16 md:py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-950">
            Our Global Footprint
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            At LTC Africa Recycling, our impact extends far beyond Africa. With
            partnerships across over <strong>120 countries</strong>, we operate
            through a trusted global network delivering compliant, world-class
            e-waste management solutions.
          </p>
        </div>

        {/* Global Reach */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              Since inception, LTC Africa Recycling has built a strong
              international ecosystem connecting recyclers, manufacturers,
              producers, regulators, and environmental agencies to address
              electronic waste at scale.
            </p>
            <p>
              Our operations are reinforced by strategic alliances in Europe,
              Asia, the Americas, and the Middle East, enabling adherence to
              global standards for collection, refurbishment, and resource
              recovery of IT and telecom assets.
            </p>
            <p>
              Through collaborations with certified recyclers and sustainability
              organizations, all recovered materials are processed safely,
              transparently, and responsibly.
            </p>
          </div>

          {/* Compliance */}
          <div className="rounded-2xl bg-gray-50 p-6">
            <h3 className="text-lg font-semibold text-blue-950 mb-4">
              International Compliance Standards
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
              <li>Basel Convention on Transboundary Movement of Hazardous Waste</li>
              <li>EU WEEE and RoHS Directives</li>
              <li>ISO 14001 Environmental Management Systems</li>
              <li>OECD Environmental Guidelines for sustainable trade</li>
            </ul>
          </div>
        </div>

        {/* Partnerships */}
        <div className="rounded-2xl bg-gray-50 p-8 space-y-4">
          <h3 className="text-xl font-semibold text-blue-950">
            Strategic Global Partnerships
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed max-w-5xl">
            Our global partnerships span international recyclers, EPR platforms,
            environmental consultants, and logistics networks, enabling seamless
            borderless operations from on-site IT asset decommissioning to
            cross-border material transfer and certified final processing.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed max-w-5xl">
            In collaboration with organizations such as <strong>Ecoreco India</strong>,
            <strong> Majestic Corporation USA</strong>, <strong> UNEP</strong>,
            <strong> UNDP</strong>, and OEM recycling alliances, LTC Africa bridges
            Africa’s e-waste challenges with global circular economy
            opportunities.
          </p>
        </div>

        {/* Global Impact */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="rounded-xl bg-gray-50 p-6">
            <h4 className="text-3xl font-semibold text-blue-950">120+</h4>
            <p className="mt-1 text-sm text-gray-600">Countries Reached</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-6">
            <h4 className="text-3xl font-semibold text-blue-950">4</h4>
            <p className="mt-1 text-sm text-gray-600">Continents Covered</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-6">
            <h4 className="text-3xl font-semibold text-blue-950">100%</h4>
            <p className="mt-1 text-sm text-gray-600">Certified Processing</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-6">
            <h4 className="text-3xl font-semibold text-blue-950">Global</h4>
            <p className="mt-1 text-sm text-gray-600">Circular Economy Network</p>
          </div>
        </div>

        {/* Closing */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-600 leading-relaxed">
            Our borderless approach reflects our belief that sustainability has
            no limits. By combining local expertise with global best practices,
            LTC Africa Recycling stands as a trusted partner for governments,
            enterprises, and global brands building a cleaner and circular world.
          </p>
        </div>

      </div>
    </section>
  );
};

export default GlobalFootprint;
