import React from "react";

const AboutEwaste = () => {
  return (
    <section className="w-full bg-slate-50 text-slate-800">
      <div className="container mx-auto px-6 md:px-12 py-24 space-y-24">
        {/* INTRO */}
        <div className="max-w-6xl space-y-8">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-950">
            LTC Africa Recycling!
          </h1>

          <p className="text-lg md:text-xl font-medium text-blue-900">
            Pioneering Sustainable WEEE & IT/Telecom Waste Solutions Across
            Africa
          </p>

          <div className="grid gap-6 text-base md:text-lg leading-relaxed">
            <p>
              LTC Africa Recycling, a proud member of the (LTC Africa Group), is
              a modern and fully registered Waste Electrical and Electronic
              Equipment (WEEE) management company dedicated to redefining how
              Africa handles electronic waste. Since our inception in 2013, we
              have grown into a pan-African leader in sustainable, compliant,
              and technology-driven e-waste management, while also advancing the
              circular economy through responsible recycling, IT asset
              disposition (ITAD), and resource recovery.
            </p>

            <p>
              With borderless operations and facilities strategically located in
              Nigeria, Ghana, Morocco, South Africa, Botswana, Tanzania, and
              Madagascar, LTC Africa Recycling provides end-to- end e-waste
              management and on-site collection services without the limits of
              geographical area or location. Our mobile collection and recycling
              model allows us to reach clients wherever they are while ensuring
              safe, traceable, and environmentally sound processing of
              decommissioned IT and telecom assets.
            </p>

            <p>
              Through innovative ITAD solutions, we help organizations securely
              recover value from outdated or decommissioned electronic equipment
              while protecting sensitive data, promoting reuse, and minimizing
              carbon emissions. Our approach merges digital efficiency,
              environmental compliance, and economic value creation, turning
              what was once considered waste into strategic resources.
            </p>

            <p className="font-medium">
              Backed by a diverse team of over 80 professionals, we combine
              technical expertise, sustainability-driven innovation, and
              integrity to deliver customized recycling solutions for corporate
              organizations, telecom operators, government agencies, and
              communities across Africa. At LTC Africa Recycling, we stand for
              innovation, integrity, accountability, and impact in every
              operation. Together with our partners, we are powering Africa’s
              transition to a cleaner, circular, and sustainable future.
            </p>
          </div>
        </div>

        {/* OUR STORY */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 max-w-6xl space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-950">
            Our Story
          </h2>

          <p className="leading-relaxed">
            Founded in 2013 in Accra, Ghana, LTC Africa Recycling began with a
            bold vision: to keep clean while transforming electronic waste into
            valuable resources. What started as a small initiative has grown
            into a pan-African leader in responsible IT and electronic waste
            management.
          </p>

          <p className="leading-relaxed">
            Our journey began with Millicom Tigo (Now AirtelTigo), our first
            client, entrusting us with over 5 tonnes of IT and telecom waste.
            Soon after, we partnered with then Vodafone Ghana and MultiChoice
            DStv, expanding our capacity and expertise in handling corporate
            e-waste responsibly. These early projects established LTC Africa’s
            reputation for structured, compliant, and traceable e-waste
            solutions.
          </p>

          <p className="font-medium">
            From those first collections, we recognized the urgent need for
            efficient, environmentally responsible waste management across
            Africa. Over the years, we expanded to warehouses and offices in
            Nigeria, Tanzania, South Africa, and Madagascar, serving
            governments, corporates, and communities continent-wide. Today, LTC
            Africa Recycling is a trusted partner in IT asset disposition,
            secure recycling, and resource recovery, helping organizations
            unlock value, reduce carbon emissions, and contribute to a greener,
            cleaner Africa.
          </p>
        </div>

        {/* VALUES */}
        <div className="max-w-6xl space-y-10">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-950">
            Our Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              [
                "Integrity",
                "We act with honesty, transparency, and ethical responsibility in every aspect of our operations, ensuring trust with our clients, partners, and communities.",
              ],
              [
                "Innovation",
                "We continuously embrace new technologies, ideas, and approaches to improve waste management, maximize resource recovery, and advance the circular economy.",
              ],
              [
                "Accountability",
                "We take full responsibility for our actions, delivering reliable and measurable results while upholding environmental and regulatory compliance.",
              ],
              [
                "Safety",
                "We prioritize the health and safety of our employees, clients, and the communities we serve, ensuring all operations adhere to the highest safety standards.",
              ],
              [
                "Partnership",
                "We build strong, collaborative relationships with governments, organizations, and communities to achieve sustainable environmental solutions together.",
              ],
              [
                "Circular Economy",
                "We are committed to promoting sustainable practices that reduce waste, recover value, and create a continuous loop of resource efficiency across Africa.",
              ],
            ].map(([title, desc], index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
              >
                <h3 className="font-semibold text-lg text-blue-950 mb-2">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* MISSION & VISION */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
          <div className="bg-blue-950 text-white rounded-2xl p-8 space-y-4">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="leading-relaxed">
              Our mission is to revolutionize electronic waste by unlocking the
              true value of waste and establishing new benchmarks in circular
              economy innovation. While we strive to empower societies,
              industries, and organizations to perceive waste not as a burden,
              but as a catalyst for environmental renewal and economic growth to
              drive continuous innovation that minimizes waste, maximizes
              resource value, and supports a truly sustainable future across
              Africa.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 space-y-4 border border-slate-200">
            <h3 className="text-2xl font-bold text-blue-950">Our Vision</h3>
            <p className="leading-relaxed">
              To be Africa’s most trusted and sustainable e-waste management and
              resource recovery company, while setting industry standards
              innovation, compliance, and circular economy excellence.
            </p>
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className="max-w-6xl space-y-12">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-950">
            Certification & Compliance
          </h2>

          <p className="text-lg leading-relaxed">
            Our comprehensive list of environmental permits and global
            certifications demonstrates LTC Africa Recycling’s commitment to
            regulatory compliance, environmental stewardship, and international
            best practices.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* COLUMN 1 */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 space-y-4">
              <h3 className="font-semibold text-xl text-blue-950">
                National & Regional Environmental Permits
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  Waste Management License / Permit – Issued by environmental
                  protection agencies in each country of operation (e.g., Ghana
                  EPA, Nigeria NESREA, Tanzania NEMC, Madagascar MEED).
                </li>
                <li>
                  Hazardous Waste Handling Permit – Authorizes collection,
                  transport, storage, and disposal of hazardous electronic
                  components.
                </li>
                <li>
                  Import/Export Permit for E-Waste – Compliance with
                  transboundary e-waste movements under national laws.
                </li>
                <li>
                  Local Operational Compliance Certificates – For warehouses,
                  processing centers, and collection depots.
                </li>
              </ul>
            </div>

            {/* COLUMN 2 */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 space-y-4">
              <h3 className="font-semibold text-xl text-blue-950">
                International Conventions & Compliance
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  Basel Convention Compliance – Ensures all transboundary
                  movements of hazardous waste and e-waste are conducted legally
                  and safely.
                </li>
                <li>
                  EU WEEE Directive Guidelines (as best practice) – Adoption of
                  extended producer responsibility (EPR) standards and safe
                  electronic waste management principles.
                </li>
              </ul>
            </div>

            {/* COLUMN 3 */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 space-y-4">
              <h3 className="font-semibold text-xl text-blue-950">
                Global Certifications & Standards
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  ISO 14001: Environmental Management System (EMS) –
                  Demonstrates commitment to sustainable operations and
                  continual environmental performance improvement.
                </li>
                <li>
                  ISO 9001: Quality Management System – Ensures quality and
                  consistency in recycling, processing, and ITAD services.
                </li>
                <li>
                  R2 (Responsible Recycling) Certification – Industry standard
                  for safe, responsible, and secure electronics recycling and IT
                  asset disposition.
                </li>
                <li>
                  OHSAS 18001 / ISO 45001: Occupational Health &amp; Safety
                  Management – Commitment to worker safety and operational risk
                  management.
                </li>
                <li>
                  ISO 27001 (Information Security Management) – For secure
                  handling and data destruction in IT asset disposition (ITAD)
                  operations.
                </li>
              </ul>
            </div>

            {/* COLUMN 4 */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 space-y-4">
              <h3 className="font-semibold text-xl text-blue-950">
                Corporate Sustainability & Compliance Recognition:
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  EPR Program Certification – For clients and partners under
                  Extended Producer Responsibility initiatives.
                </li>
                <li>
                  CSR &amp; ESG Reporting Compliance – Supporting corporate
                  clients in sustainability reporting and environmental
                  stewardship.
                </li>
                <li>
                  Authorized partner of UNEP, UNDP, WFP, and international
                  environmental programs
                </li>
              </ul>
            </div>

            {/* COLUMN 5 */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 space-y-4">
              <h3 className="font-semibold text-xl text-blue-950">
                Partnership-Based Approvals:
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  Authorized partner of UNEP, UNDP, WFP, and other international environmental programs for responsible e-waste
management and circular economy initiatives.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* LEADERSHIP */}
        <div className="max-w-6xl space-y-8">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-950">
            Leadership
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Engr. Adeleye A. Tani – Founder/Group CEO",
              "Mr. Sam Ladipo – Group Chief Operation Director",
              "Mrs. Folake Ademola – Chief Financial Director",
              "Mr. Colpas Kari – Head of Sale & Marketing",
              "Mrs. Florentine Razaiarivony – Head of Sustainability, Partnerships & Compliance",
              "Mr. Dominic Anomah – Regional Director – MENA Africa",
              "Ms. Margaret Dolapo Awe – Head of PR & CSR",
            ].map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-sm border border-slate-100"
              >
                <p className="font-medium">{leader}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEwaste;
