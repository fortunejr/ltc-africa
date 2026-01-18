import React from 'react';
import { sust, compliance, global, permit } from '../../../imports';

const certificationsData = [
  {
    title: 'National & Regional Environmental Permits',
    image: permit,
    items: [
      'Waste Management License / Permit – Issued by environmental protection agencies in each country of operation (e.g., Ghana EPA, Nigeria NESREA, Tanzania NEMC, Madagascar MEED).',
      'Hazardous Waste Handling Permit – Authorizes collection, transport, storage, and disposal of hazardous electronic components.',
      
    ]
  },
  {
    title: 'International Conventions & Compliance',
    image: compliance,
    items: [
      'Basel Convention Compliance – Ensures all transboundary movements of hazardous waste and e-waste are conducted legally and safely.',
      'EU WEEE Directive Guidelines (as best practice) – Adoption of extended producer responsibility (EPR) standards and safe electronic waste management principles.'
    ]
  },
  {
    title: 'Global Certifications & Standards',
    image: global,
    items: [
      'ISO 14001: Environmental Management System (EMS) – Demonstrates commitment to sustainable operations and continual environmental performance improvement.',
      'ISO 9001: Quality Management System – Ensures quality and consistency in recycling, processing, and ITAD services.',
      
    ]
  },
  {
    title: 'Corporate Sustainability & Compliance Recognition',
    image: sust,
    items: [
      'EPR Program Certification – For clients and partners under Extended Producer Responsibility initiatives.',
      'CSR & ESG Reporting Compliance – Supporting corporate clients in sustainability reporting and environmental stewardship.'
    ]
  }
];

const Certifications = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-stretch">
        {certificationsData.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full overflow-hidden"
          >
            {/* Image */}
            <div className="h-40 w-full overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col grow">
              <h3 className="text-lg font-semibold text-green-700 mb-4">
                {cert.title}
              </h3>

              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside grow">
                {cert.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
