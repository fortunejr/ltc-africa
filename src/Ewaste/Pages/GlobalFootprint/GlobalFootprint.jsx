import React from "react";
import { motion } from "framer-motion";
import { Globe, CheckCircle, Users, Award } from "lucide-react";
// import footprintImg from "../../../imports/footprint.jpg"; 

const stats = [
  { icon: Globe, value: "120+", label: "Countries Reached" },
  { icon: Users, value: "4", label: "Continents Covered" },
  { icon: CheckCircle, value: "100%", label: "Certified Processing" },
  { icon: Award, value: "Global", label: "Circular Economy Network" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const GlobalFootprint = () => {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Header */}
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl header-txt md:text-4xl font-bold text-[#003333]">
            Our Global Footprint
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            At LTC Africa Recycling, our impact extends far beyond Africa. With partnerships across over <strong>120 countries</strong>, we operate through a trusted global network delivering compliant, world-class e-waste management solutions.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full lg:w-3/4 rounded-2xl overflow-hidden shadow-lg">
            <img
              src= "/images/world-map.jpg"
              alt="Global Footprint"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </motion.div>

        {/* Global Reach Text */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
            <p>
              Since inception, LTC Africa Recycling has built a strong international ecosystem connecting recyclers, manufacturers, producers, regulators, and environmental agencies to address electronic waste at scale.
            </p>
            <p>
              Our operations are reinforced by strategic alliances in Europe, Asia, the Americas, and the Middle East, enabling adherence to global standards for collection, refurbishment, and resource recovery of IT and telecom assets.
            </p>
            <p>
              Through collaborations with certified recyclers and sustainability organizations, all recovered materials are processed safely, transparently, and responsibly.
            </p>
          </div>

          {/* Compliance */}
          <div className="rounded-2xl bg-gray-50 p-6 shadow-md">
            <h3 className="text-lg font-semibold text-blue-950 mb-4">International Compliance Standards</h3>
            <ul className="space-y-2 text-gray-600 list-disc list-inside text-sm md:text-base">
              <li>Basel Convention on Transboundary Movement of Hazardous Waste</li>
              <li>EU WEEE and RoHS Directives</li>
              <li>ISO 14001 Environmental Management Systems</li>
              <li>OECD Environmental Guidelines for sustainable trade</li>
            </ul>
          </div>
        </motion.div>

        {/* Partnerships */}
        <motion.div
          className="rounded-2xl bg-gray-50 p-8 space-y-4 shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-xl font-semibold text-blue-950">Strategic Global Partnerships</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-5xl mx-auto">
            Our global partnerships span international recyclers, EPR platforms, environmental consultants, and logistics networks, enabling seamless borderless operations from on-site IT asset decommissioning to cross-border material transfer and certified final processing.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-5xl mx-auto">
            In collaboration with organizations such as <strong>Ecoreco India</strong>, <strong>Majestic Corporation USA</strong>, <strong>UNEP</strong>, <strong>UNDP</strong>, and OEM recycling alliances, LTC Africa bridges Africa’s e-waste challenges with global circular economy opportunities.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={i}
              className="rounded-xl bg-gray-50 p-6 flex flex-col items-center shadow hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <Icon className="text-blue-950 mb-3" size={36} />
              <h4 className="text-3xl font-semibold text-blue-950">{value}</h4>
              <p className="mt-1 text-sm text-gray-600 text-center">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Our borderless approach reflects our belief that sustainability has no limits. By combining local expertise with global best practices, LTC Africa Recycling stands as a trusted partner for governments, enterprises, and global brands building a cleaner and circular world.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default GlobalFootprint;