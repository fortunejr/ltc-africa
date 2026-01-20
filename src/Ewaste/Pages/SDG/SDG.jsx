import React from "react";
import { sdgs } from "../../../imports";

const sdgGoals = [
  {
    id: 3,
    title: "Good Health & Well-Being",
    text: "Safe recycling practices reduce environmental and health risks from hazardous e-waste.",
  },
  {
    id: 4,
    title: "Quality Education",
    text: "Training, internships, and awareness programs on sustainability and circular economy.",
  },
  {
    id: 7,
    title: "Affordable & Clean Energy",
    text: "Supporting energy-efficient technologies through responsible material recovery.",
  },
  {
    id: 8,
    title: "Decent Work & Economic Growth",
    text: "Creation of green jobs and empowerment of local technicians and SMEs.",
  },
  {
    id: 9,
    title: "Industry, Innovation & Infrastructure",
    text: "Digital tracking, R&D, and mobile recycling infrastructure across Africa.",
  },
  {
    id: 11,
    title: "Sustainable Cities & Communities",
    text: "Cleaner and healthier cities through efficient e-waste collection.",
  },
  {
    id: 12,
    title: "Responsible Consumption & Production",
    text: "Circular economy approach: Repair → Refurbish → Reuse → Recycle.",
  },
  {
    id: 13,
    title: "Climate Action",
    text: "Reducing carbon emissions through sustainable recycling operations.",
  },
  {
    id: 17,
    title: "Partnerships for the Goals",
    text: "Collaboration with governments, UN agencies, and global partners.",
  },
];

const SDGEwaste = () => {
  return (
    <section className="bg-white py-16 md:py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-950">
            LTC SDG Initiative
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Building Africa’s sustainable future by aligning environmental
            responsibility, economic growth, and social impact with the UN SDGs.
          </p>
        </div>

        {/* SDG Visual */}
<div className="flex justify-center">
  <div className="relative w-[40%] h-70 md:h-full overflow-hidden rounded-2xl">
    <img
      src={sdgs}
      alt="UN Sustainable Development Goals"
      className="w-full h-full object-contain"
    />
    <div className="absolute inset-0" />
  </div>
</div>


        {/* SDG Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sdgGoals.map((sdg) => (
            <div
              key={sdg.id}
              className="rounded-xl border border-gray-100 bg-white p-5 hover:shadow-sm transition"
            >
              <span className="text-xs font-medium text-gray-400">
                SDG {sdg.id}
              </span>
              <h3 className="mt-1 text-base font-semibold text-blue-950">
                {sdg.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {sdg.text}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          <div className="rounded-xl bg-gray-50 p-6">
            <h4 className="text-3xl font-semibold text-blue-950">10,000+</h4>
            <p className="mt-1 text-sm text-gray-600">
              Tons of E-Waste Recycled
            </p>
          </div>
          <div className="rounded-xl bg-gray-50 p-6">
            <h4 className="text-3xl font-semibold text-blue-950">5,000+</h4>
            <p className="mt-1 text-sm text-gray-600">Green Jobs Created</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-6">
            <h4 className="text-3xl font-semibold text-blue-950">25,000+</h4>
            <p className="mt-1 text-sm text-gray-600">
              CO₂ Emissions Prevented
            </p>
          </div>
        </div>

        {/* Framework */}
        <div className="rounded-2xl bg-gray-50 p-8">
          <h3 className="text-xl font-semibold text-blue-950 mb-6">
            Our SDG Implementation Framework
          </h3>
          <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <li>
              <span className="font-medium text-blue-950">Integration:</span>{" "}
              SDGs embedded into business strategy.
            </li>
            <li>
              <span className="font-medium text-blue-950">Innovation:</span>{" "}
              Digital tools for transparency and traceability.
            </li>
            <li>
              <span className="font-medium text-blue-950">
                Impact Measurement:
              </span>{" "}
              Clear carbon and social metrics.
            </li>
            <li>
              <span className="font-medium text-blue-950">Collaboration:</span>{" "}
              Partnerships to scale sustainability.
            </li>
          </ul>
        </div>

        {/* Africa Impact */}
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-blue-950 mb-3">
            Impact Across Africa
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            LTC Africa Recycling reduces e-waste accumulation, recovers valuable
            resources, empowers communities, and supports governments and
            corporations in meeting sustainability and regulatory goals.
          </p>
          <p className="mt-4 text-sm font-medium text-gray-700">
            “Transforming e-waste into opportunity while building a sustainable
            Africa.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default SDGEwaste;
