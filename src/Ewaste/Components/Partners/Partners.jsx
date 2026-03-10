import React from "react";
import { motion } from "framer-motion";

const Partners = () => {
  const partnerList = [
    "/images/mcl.png",
    "/images/unep.svg",
    "/images/huawei.png",
    "/images/startimes.png",
    "/images/wfp.png",
    "/images/epa.jpg",
    "/images/yas.png",
    "/images/undp.webp",
    "/images/orange.png",
    "/images/mtn.png",
    "/images/airtel.png",
    "/images/vodafone.png",
    "/images/dstv.png",
    "/images/canal.png",
    "/images/ecoreco.jpg",
    "/images/strong.jpg",
    "/images/blueline.png",
    "/images/parabole.jpg",
    "/images/zte.png",
    "/images/camusat.png",
  ];

  const categories = ["Banks", "Healthcare", "Schools"];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="w-full py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-20 text-center">
        
        {/* Header */}
        <motion.div
          className="mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-customGreen font-bold tracking-widest text-xs uppercase block mb-3">
            They Trust Us
          </span>

          <h2 className="header-txt text-3xl md:text-5xl font-bold text-[#003333] mb-6">
            Our Partners
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed">
            Over the years, LTC Africa Recycling has earned the trust of leading
            organizations across Africa and beyond, relying on us for secure,
            compliant, and sustainable e-waste management solutions.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          className="grid [grid-template-columns:repeat(auto-fit,minmax(140px,1fr))] gap-10 items-center justify-items-center opacity-70"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {partnerList.map((partner, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex items-center justify-center h-16 w-full grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={partner}
                alt="partner logo"
                className="max-h-14 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Categories */}
        <motion.div
          className="mt-20 pt-10 border-t border-gray-200"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-6">
            Collaborating across sectors
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-5 py-2 bg-white/40 text-gray-700 rounded-full text-sm font-medium"
              >
                {cat}
              </span>
            ))}

            <span className="px-5 py-2 text-gray-400 text-sm italic">
              ...and many more
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Partners;