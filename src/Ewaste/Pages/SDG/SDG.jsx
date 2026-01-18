import React from "react";

const sdgGoals = [
  { id: 3, title: "Good Health & Well-Being", text: "Safe recycling practices reduce environmental and health risks from hazardous e-waste." },
  { id: 4, title: "Quality Education", text: "Training, internships, and awareness programs on sustainability and circular economy." },
  { id: 7, title: "Affordable & Clean Energy", text: "Supporting energy-efficient technologies through responsible material recovery." },
  { id: 8, title: "Decent Work & Economic Growth", text: "Creation of green jobs and empowerment of local technicians and SMEs." },
  { id: 9, title: "Industry, Innovation & Infrastructure", text: "Digital tracking, R&D, and mobile recycling infrastructure across Africa." },
  { id: 11, title: "Sustainable Cities & Communities", text: "Cleaner and healthier cities through efficient e-waste collection." },
  { id: 12, title: "Responsible Consumption & Production", text: "Circular economy approach: Repair → Refurbish → Reuse → Recycle." },
  { id: 13, title: "Climate Action", text: "Reducing carbon emissions through sustainable recycling operations." },
  { id: 17, title: "Partnerships for the Goals", text: "Collaboration with governments, UN agencies, and global partners." },
];

const SDGEwaste = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950">
            LTC SDG Initiative
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Building Africa’s sustainable future by aligning environmental
            responsibility, economic growth, and social impact through the
            United Nations Sustainable Development Goals.
          </p>
        </div>

        {/* SDG Focus Areas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sdgGoals.map((sdg) => (
            <div
              key={sdg.id }
              className="rounded-2xl border border-gray-200 p-6 hover:shadow-md transition text-blue-950"
            >
              <span className="text-sm font-semibold text-gray-500">
                SDG {sdg.id}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-blue-950">
                {sdg.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {sdg.text}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Counters */}
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          <div className="rounded-2xl border border-gray-200 p-8 text-blue-950">
            <h4 className="text-4xl font-bold">10,000+</h4>
            <p className="mt-2 text-gray-600">Tons of E-Waste Recycled</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8 text-blue-950">
            <h4 className="text-4xl font-bold">5,000+</h4>
            <p className="mt-2 text-gray-600">Green Jobs Created</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8 text-blue-950">
            <h4 className="text-4xl font-bold">25,000+</h4>
            <p className="mt-2 text-gray-600">CO₂ Emissions Prevented</p>
          </div>
        </div>

        {/* Implementation Framework */}
        <div className="rounded-3xl border border-gray-200 p-10">
          <h3 className="text-2xl font-semibold mb-6 text-blue-950">
            Our SDG Implementation Framework
          </h3>
          <ul className="grid md:grid-cols-2 gap-6 text-blue-950">
            <li><strong className="text-black">Integration:</strong> SDGs embedded into business strategy and operations.</li>
            <li><strong className="text-black">Innovation:</strong> Digital tools for transparency and traceability.</li>
            <li><strong className="text-black">Impact Measurement:</strong> Clear metrics on carbon and social impact.</li>
            <li><strong className="text-black">Collaboration:</strong> Partnerships to scale sustainability outcomes.</li>
          </ul>
        </div>

        {/* Africa Impact */}
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-blue-950">
            Impact Across Africa
          </h3>
          <p className="text-gray-600 leading-relaxed">
            LTC Africa Recycling reduces e-waste accumulation, recovers valuable
            resources for local industries, empowers communities through education
            and job creation, and supports governments and corporations in meeting
            sustainability and regulatory goals.
          </p>
          <p className="mt-6 font-semibold">
            “Transforming e-waste into opportunity while building a sustainable Africa.”
          </p>
        </div>

      </div>
    </section>
  );
};

export default SDGEwaste;
