import React from "react";

const CircularEconomy = () => {
  return (
    <section className="bg-white py-36 px-6">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#003333] header-txt">
            Circular Economy
          </h1>

          <p className="text-lg text-gray-700 font-medium">
            LTC Africa Group Circular Economy Policy
          </p>
        </div>

        {/* INTRO */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <img
            src="/images/infinity.jpeg"
            alt="Circular economy concept"
            className="rounded-2xl object-cover w-full h-[450px]"
          />

          <div className="space-y-6 text-base text-gray-600 leading-relaxed">
            <p>
              At LTC Africa Group, we recognize that sustainable growth depends
              on how responsibly we use resources. Our Circular Economy approach
              is designed to minimize waste, maximize value, and promote
              environmental stewardship across all our operations and value
              chains.
            </p>

            <h3 className="text-xl font-semibold text-blue-950">
              Our Commitment
            </h3>

            <p>
              We are committed to transitioning from a traditional
              “take-make-dispose” model to a circular system that prioritizes
              resource efficiency, reuse, recycling, and regeneration. Through
              this approach, we aim to reduce our environmental footprint while
              creating long-term economic and social value.
            </p>
          </div>
        </div>

        {/* PRINCIPLES HEADER */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl header-txt font-semibold text-blue-950">
            Our Circular Economy Principles
          </h2>
        </div>

        {/* PRINCIPLES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* 1 */}
          <div className="bg-gray-50 rounded-2xl overflow-hidden">
            <img src="/images/pile.jpg" className="h-48 w-full object-cover" />
            <div className="p-7 space-y-4">
              <h3 className="font-semibold text-blue-950 text-lg">
                1. Design for Sustainability
              </h3>

              <p className="text-base text-gray-600">
                We integrate sustainability into the design of our products,
                services, and operations by:
              </p>

              <ul className="text-base text-gray-600 space-y-1 list-disc pl-5">
                <li>
                  Prioritizing durable, repairable, and recyclable materials
                </li>
                <li>Reducing resource intensity and environmental impact</li>
                <li>Encouraging innovation in sustainable solutions</li>
              </ul>
            </div>
          </div>

          {/* 2 */}
          <div className="bg-gray-50 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e"
              className="h-48 w-full object-cover"
            />
            <div className="p-7 space-y-4">
              <h3 className="font-semibold text-blue-950 text-lg">
                2. Resource Efficiency
              </h3>

              <p className="text-base text-gray-600">
                We optimize the use of natural resources by:
              </p>

              <ul className="text-base text-gray-600 space-y-1 list-disc pl-5">
                <li>Minimizing energy and water consumption</li>
                <li>Reducing material waste across all operations</li>
                <li>
                  Promoting efficient production and service delivery processes
                </li>
              </ul>
            </div>
          </div>

          {/* 3 */}
          <div className="bg-gray-50 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807"
              className="h-48 w-full object-cover"
            />
            <div className="p-7 space-y-4">
              <h3 className="font-semibold text-blue-950 text-lg">
                3. Waste Reduction and Valorization
              </h3>

              <p className="text-base text-gray-600">
                We aim to eliminate waste by:
              </p>

              <ul className="text-base text-gray-600 space-y-1 list-disc pl-5">
                <li>
                  Reducing, reusing, and recycling materials wherever possible
                </li>
                <li>
                  Converting waste into valuable inputs for other processes
                </li>
                <li>
                  Supporting circular supply chains and industrial symbiosis
                </li>
              </ul>
            </div>
          </div>

          {/* 4 */}
          <div className="bg-gray-50 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
              className="h-48 w-full object-cover"
            />
            <div className="p-7 space-y-4">
              <h3 className="font-semibold text-blue-950 text-lg">
                4. Responsible Sourcing and Innovation 
              </h3>

              <p className="text-base text-gray-600">
                We work with suppliers who share our sustainability values by:
              </p>

              <ul className="text-base text-gray-600 space-y-1 list-disc pl-5">
                <li>
                  Encouraging ethical and environmentally responsible practices
                </li>
                <li>
                  Prioritizing renewable, recycled, and locally sourced
                  materials
                </li>
                <li>Promoting transparency across the supply chain</li>
              </ul>
            </div>
          </div>

          {/* 5 */}
          <div className="bg-gray-50 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475"
              className="h-48 w-full object-cover"
            />
            <div className="p-7 space-y-4">
              <h3 className="font-semibold text-blue-950 text-lg">
                5. Product and Asset Lifecycle Management
              </h3>

              <p className="text-base text-gray-600">
                We extend the lifecycle of products and assets by:
              </p>

              <ul className="text-base text-gray-600 space-y-1 list-disc pl-5">
                <li>
                  Promoting maintenance, repair, refurbishment, and
                  remanufacturing
                </li>
                <li>
                  Implementing take-back and recovery programs where feasible
                </li>
                <li>Reducing end-of-life environmental impact</li>
              </ul>
            </div>
          </div>

          {/* 6 */}
          <div className="bg-gray-50 rounded-2xl overflow-hidden">
            <img
              src="/images/factory.jpeg"
              className="h-48 w-full object-cover"
            />
            <div className="p-7 space-y-4">
              <h3 className="font-semibold text-blue-950 text-lg">
                6. Win-Win Partnership
              </h3>

              <p className="text-base text-gray-600">
                We collaborate with stakeholders to accelerate circular
                solutions by:
              </p>

              <ul className="text-base text-gray-600 space-y-1 list-disc pl-5">
                <li>
                  Investing in sustainable technologies and business models
                </li>
                <li>Partnering with industry, communities, and governments</li>
                <li>Supporting research and knowledge-sharing initiatives</li>
              </ul>
            </div>
          </div>
        </div>

        {/* KEY FOCUS AREAS */}
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <img
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7"
            className="rounded-2xl object-cover w-full h-[420px]"
          />

          <div className="space-y-6 text-base text-gray-600 leading-relaxed">
            <h3 className="text-2xl font-semibold text-blue-950">
              Our Key Focus Areas
            </h3>

            <p>
              Operational Excellence: We continuously improve operational
              processes to reduce waste, emissions, and resource use.
            </p>

            <p>
              Sustainable Infrastructure We invest in infrastructure and systems
              that support circular practices, including recycling and recovery
              initiatives.
            </p>

            <p>
              Digital Transformation We leverage technology to improve
              efficiency, track resource flows, and enable data-driven
              sustainability decisions.
            </p>

            <p>
              Employee and Stakeholder Engagement We empower our employees and
              stakeholders to support our circular economy goals by:
            </p>

            <ul className="space-y-1 list-disc pl-5">
              <li>Providing training and awareness programs</li>
              <li>Encouraging responsible consumption and waste practices</li>
              <li>Engaging communities in sustainability initiatives</li>
            </ul>
          </div>
        </div>

        {/* IMPACT + GOVERNANCE */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Impact */}
          <div className="bg-gray-50 rounded-2xl p-8 space-y-5">
            <h3 className="text-xl font-semibold text-blue-950">
              Measuring Our Impact
            </h3>

            <p className="text-gray-600">
              We are committed to transparency and accountability by:
            </p>

            <ul className="space-y-2 list-disc pl-5 text-gray-600">
              <li>
                Setting measurable sustainability and circular economy targets
              </li>
              <li>Monitoring key performance indicators (KPIs)</li>
              <li>Reporting progress regularly to stakeholders</li>
            </ul>
          </div>

          {/* Governance */}
          <div className="bg-gray-50 rounded-2xl p-8 space-y-5">
            <h3 className="text-xl font-semibold text-blue-950">
              Compliance and Governance
            </h3>

            <p className="text-gray-600">
              We ensure that our circular economy practices:
            </p>

            <ul className="space-y-2 list-disc pl-5 text-gray-600">
              <li>Comply with applicable environmental laws and regulations</li>
              <li>Align with international sustainability standards</li>
              <li>Are integrated into our broader governance framework</li>
            </ul>
          </div>

          {/* Continuous Improvement */}
          <div className="bg-gray-50 rounded-2xl p-8 space-y-5">
            <h3 className="text-xl font-semibold text-blue-950">
              Continuous Improvement
            </h3>

            <p className="text-gray-600">
              We regularly review and enhance our circular economy strategy to
              adapt to emerging challenges, technologies, and opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircularEconomy;
