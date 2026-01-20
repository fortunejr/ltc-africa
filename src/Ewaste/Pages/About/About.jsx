import React from "react";

const AboutEwaste = () => {
  return (
    <section className="w-full bg-white text-slate-800 py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-32">
        {/* INTRO */}
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <span className="inline-block text-sm uppercase tracking-widest text-customGreen">
            About Us
          </span>

          <h1 className="text-3xl md:text-5xl font-semibold text-slate-900">
            LTC Africa Recycling
          </h1>

          <p className="text-lg md:text-xl text-customBlue">
            Pioneering Sustainable WEEE & IT/Telecom Waste Solutions Across
            Africa
          </p>

          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            LTC Africa Recycling, a member of the LTC Africa Group, is a fully
            registered Waste Electrical and Electronic Equipment management
            company redefining how Africa handles electronic waste. With
            borderless operations, we provide sustainable recycling, IT asset
            disposition, and resource recovery across Africa.
          </p>
        </div>

        {/* OUR STORY */}
        <div className="mx-auto max-w-4xl space-y-6">
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-900">
            Our Story
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Founded in 2013 in Accra, Ghana, LTC Africa Recycling started with a
            bold vision: to transform electronic waste into valuable resources.
            Over the years, we have grown into a pan-African leader in
            responsible IT and electronic waste management.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Through early partnerships with Millicom Tigo, Vodafone Ghana, and
            MultiChoice DStv, we built a reputation for structured, compliant,
            and traceable e-waste solutions. Today, we operate across Nigeria,
            Tanzania, South Africa, and Madagascar.
          </p>
        </div>

        {/* VALUES */}
        <div className="space-y-12">
          <h2 className="text-center text-2xl md:text-4xl font-semibold text-slate-900">
            Our Values
          </h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Integrity",
                "We act with honesty, transparency, and ethical responsibility in every aspect of our operations.",
              ],
              [
                "Innovation",
                "We embrace new technologies and ideas to improve waste management and resource recovery.",
              ],
              [
                "Accountability",
                "We take full responsibility for our actions, ensuring reliable results and compliance.",
              ],
              [
                "Safety",
                "We prioritize health and safety in all operations for employees, clients, and communities.",
              ],
              [
                "Partnership",
                "We build strong relationships with governments, organizations, and communities for sustainable solutions.",
              ],
              [
                "Circular Economy",
                "We promote sustainable practices that reduce waste and create a continuous loop of resource efficiency.",
              ],
            ].map(([title, desc], index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-medium text-customGreen">
                  {title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* MISSION & VISION */}
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-4 border-l-2 border-customGreen pl-6">
            <h3 className="text-2xl font-semibold text-slate-900">
              Our Mission
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To revolutionize electronic waste management by unlocking the true
              value of waste and advancing circular economy innovation,
              empowering organizations to reduce environmental impact and create
              sustainable value.
            </p>
          </div>

          <div className="space-y-4 border-l-2 border-customBlue pl-6">
            <h3 className="text-2xl font-semibold text-slate-900">
              Our Vision
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To be Africa’s most trusted e-waste management and resource
              recovery company, setting standards in compliance, innovation, and
              circular economy excellence.
            </p>
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className="space-y-12">
          <h2 className="text-center text-2xl md:text-4xl font-semibold text-slate-900">
            Certification & Compliance
          </h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "National & Regional Environmental Permits",
                [
                  "Waste Management License / Permit",
                  "Hazardous Waste Handling Permit",
                  "Import/Export Permit for E-Waste",
                ],
              ],
              [
                "International Conventions",
                ["Basel Convention compliance", "EU WEEE Directive and EPR"],
              ],
              [
                "Global Certifications",
                [
                  "ISO 14001",
                  "ISO 9001",
                  "R2 Responsible Recycling",
                  "ISO 45001",
                  "ISO 27001",
                ],
              ],
            ].map(([title, items], index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-medium text-customGreen">
                  {title}
                </h3>
                <ul className="space-y-1 text-sm text-slate-600">
                  {items.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* LEADERSHIP */}
        <div className="space-y-12">
          <h2 className="text-center text-2xl md:text-4xl font-semibold text-slate-900">
            Leadership
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Engr. Adeleye A. Tani", role: "Founder/Group CEO" },
              {
                name: "Mr. Sam Ladipo",
                role: "Group Chief Operation Director",
              },
              { name: "Mrs. Folake Ademola", role: "Chief Financial Director" },
              { name: "Mr. Colpas Kari", role: "Head of Sale & Marketing" },
              {
                name: "Mrs. Florentine Razaiarivony",
                role: "Head of Sustainability, Partnerships & Compliance",
              },
              {
                name: "Mr. Dominic Anomah",
                role: "Regional Director – MENA Africa",
              },
              { name: "Ms. Margaret Dolapo Awe", role: "Head of PR & CSR" },
            ].map((leader, index) => (
              <div
                key={index}
                className="flex flex-col items-start justify-center p-6 rounded-2xl bg-white shadow hover:shadow-lg transition hover:-translate-y-1 cursor-pointer"
              >
                <h4 className="text-lg font-semibold text-slate-800">
                  {leader.name}
                </h4>
                <p className="mt-1 text-sm text-slate-500">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEwaste;
