import React from "react";
import { motion } from "framer-motion";
import { sdgs } from "../../../imports";
import { CloudSnow, Trash2, Users } from "lucide-react";

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

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

const SDGEwaste = () => {
  return (
    <section className="bg-white py-20">
      {/* Main Wrapper with increased vertical gap */}
      <div className="flex flex-col gap-40">
        
        {/* Header Section with Video */}
        <div className="relative flex items-center justify-center py-48 overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
            <source src="/videos/trees.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          <div className="relative z-20 flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 gap-20">
            <div className="max-w-3xl text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold header-txt text-white">
                LTC SDG Initiative
              </h2>
              <p className="mt-6 text-lg text-gray-100 leading-relaxed">
                Building Africa’s sustainable future by aligning environmental
                responsibility, economic growth, and social impact with the UN SDGs.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 overflow-hidden rounded-2xl">
                <img src="/images/sustainable.png" alt="UN Sustainable Development Goals" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Container with consistent spacing between sections */}
        <div className="px-6 max-w-7xl mx-auto flex flex-col gap-40">
          
          {/* SDG Cards - Increased gap to gap-10 */}
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={container}>
            {sdgGoals.map((sdg) => (
              <motion.div key={sdg.id} className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm" variants={fadeUp}>
                <span className="text-xs font-medium text-gray-400">SDG {sdg.id}</span>
                <h3 className="mt-2 text-lg font-semibold text-blue-950">{sdg.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{sdg.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Impact Stats - Increased gap-12 */}
          <motion.div className="grid sm:grid-cols-3 gap-12 text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={container}>
            <motion.div className="rounded-xl bg-gray-50 p-10 flex flex-col items-center" variants={fadeUp}>
              <Trash2 className="text-blue-950 mb-4" size={40} />
              <h4 className="text-4xl font-semibold text-blue-950">10,000+</h4>
              <p className="mt-2 text-sm text-gray-600">Tons of E-Waste Recycled</p>
            </motion.div>
            <motion.div className="rounded-xl bg-gray-50 p-10 flex flex-col items-center" variants={fadeUp}>
              <Users className="text-blue-950 mb-4" size={40} />
              <h4 className="text-4xl font-semibold text-blue-950">5,000+</h4>
              <p className="mt-2 text-sm text-gray-600">Green Jobs Created</p>
            </motion.div>
            <motion.div className="rounded-xl bg-gray-50 p-10 flex flex-col items-center" variants={fadeUp}>
              <CloudSnow className="text-blue-950 mb-4" size={40} />
              <h4 className="text-4xl font-semibold text-blue-950">25,000+</h4>
              <p className="mt-2 text-sm text-gray-600">CO₂ Emissions Prevented</p>
            </motion.div>
          </motion.div>

          {/* Framework Section */}
          <motion.div className="rounded-2xl bg-gray-50 p-12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <h3 className="text-2xl font-semibold text-[#003333] mb-8">Our SDG Implementation Framework</h3>
            <ul className="grid md:grid-cols-2 gap-8 text-base text-gray-700">
              <li><span className="font-medium text-blue-950">Integration:</span> Embedding SDG targets into every level of our operations and business strategy.</li>
              <li><span className="font-medium text-blue-950">Innovation:</span> Leveraging technology and digital tools for traceability, data-driven reporting, and efficient waste recovery.</li>
              <li><span className="font-medium text-blue-950">Impact Measurement:</span> Providing transparent metrics on carbon reduction, resource recovery, and social impact.</li>
              <li><span className="font-medium text-blue-950">Collaboration:</span> Partnering with industry leaders and development organizations to achieve shared sustainability goals.</li>
            </ul>
          </motion.div>

          {/* Commitment Section */}
          <motion.div className="max-w-4xl mx-auto text-center space-y-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <h3 className="text-3xl md:text-4xl font-bold text-[#003333] header-txt">Our SDG Commitment</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              “Through the <span className="font-semibold text-customGreen">LTC SDG Initiative</span>, we are creating a roadmap for a greener, smarter, and more inclusive Africa where waste becomes a resource, people thrive, and the planet prospers.”
            </p>
          </motion.div>

          {/* Africa Impact Section */}
          <motion.div className="max-w-4xl mx-auto text-left md:text-center space-y-10 pb-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <h3 className="text-3xl md:text-4xl font-bold text-[#003333] header-txt">Impact Across Africa</h3>
            <ul className="list-disc list-inside space-y-5 text-gray-700 text-lg leading-relaxed">
              <li>Reduces electronic waste accumulation and environmental contamination.</li>
              <li>Recovers valuable resources for local industry, reducing dependence on imported raw materials.</li>
              <li>Empowers communities through awareness, education, and job creation.</li>
              <li>Supports governments and corporations in meeting regulatory compliance and sustainability goals.</li>
              <li>Reduces Africa’s carbon footprint through sustainable e-waste recycling and resource recovery.</li>
            </ul>
            <p className="mt-10 text-lg font-medium text-gray-800 italic">“Transforming e-waste into opportunity while building a sustainable Africa.”</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SDGEwaste;