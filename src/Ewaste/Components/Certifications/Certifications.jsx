import React from 'react';
import { sust, compliance, global, permit } from '../../../imports';

const certificationsData = [
  {
    title: 'National & Regional Environmental Permits',
    image: permit,
    items: [
      'Waste Management License / Permit – Issued by environmental protection agencies in each country of operation (e.g., Ghana EPA, Nigeria NESREA, Tanzania NEMC, Madagascar MEED).',
      'Hazardous Waste Handling Permit – Authorizes collection, transport, storage, and disposal of hazardous electronic components.',
    ],
  },
  {
    title: 'International Conventions & Compliance',
    image: compliance,
    items: [
      'Basel Convention Compliance – Ensures all transboundary movements of hazardous waste and e-waste are conducted legally and safely.',
      'EU WEEE Directive Guidelines – Adoption of extended producer responsibility (EPR) standards and safe electronic waste management principles.',
    ],
  },
  {
    title: 'Global Certifications & Standards',
    image: global,
    items: [
      'ISO 14001: Environmental Management System (EMS) – Commitment to sustainable operations and continual environmental performance improvement.',
      'ISO 9001: Quality Management System – Ensures quality and consistency in recycling, processing, and ITAD services.',
    ],
  },
  {
    title: 'Corporate Sustainability & Recognition',
    image: sust,
    items: [
      'EPR Program Certification – For clients and partners under Extended Producer Responsibility initiatives.',
      'CSR & ESG Reporting Compliance – Supporting corporate clients in sustainability reporting and environmental stewardship.',
    ],
  },
];

const Certifications = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-20 overflow-x-hidden overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-[-120px] left-[-120px] w-96 h-96 bg-green-100/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-green-100/30 rounded-full blur-3xl pointer-events-none"></div>

      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-800 mb-12">
        Our Certifications & Compliance
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-stretch">
        {certificationsData.map((cert, index) => (
          <div
            key={index}
            className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500 flex flex-col overflow-hidden"
          >
            {/* Image with gradient overlay */}
            <div className="relative h-44 w-full overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover max-w-full transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-800/40 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col grow">
              <h3 className="text-lg md:text-xl font-semibold text-green-800 mb-4">
                {cert.title}
              </h3>

              <ul className="text-sm md:text-base text-gray-700 space-y-2 list-disc list-inside grow">
                {cert.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              {/* Badge */}
              <div className="mt-4 text-right">
                <span className="inline-block px-3 py-1 text-green-700 font-semibold text-xs rounded-full bg-green-100">
                  Certified
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
