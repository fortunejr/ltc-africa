import React from "react";
import { motion } from "framer-motion";
import { about } from "../../../imports";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const AboutEwaste = () => {
  return (
    <section className="w-full bg-customBlue py-24 overflow-x-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            className="relative"
            variants={imageVariants}
          >
            <img
              src={about}
              alt="LTC Africa Recycling About Us"
              className="w-full h-[420px] object-cover rounded-xl"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            className="text-white"
            variants={containerVariants}
          >
            <motion.p
              className="text-sm uppercase tracking-widest mb-4 text-white/70"
              variants={textVariants}
            >
              LTC Africa Recycling Limited
            </motion.p>

            <motion.h2
              className="text-4xl md:text-5xl font-semibold leading-tight mb-8"
              variants={textVariants}
            >
              About Us
            </motion.h2>

            <motion.p
              className="text-lg leading-relaxed text-white/90 mb-6"
              variants={textVariants}
            >
              LTC Africa Recycling, a proud member of the{" "}
              <span className="font-medium">(LTC Africa Group)</span>, is a fully
              registered Waste Electrical and Electronic Equipment (WEEE)
              management company redefining how Africa handles electronic waste.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed text-white/90 mb-10"
              variants={textVariants}
            >
              Through secure ITAD solutions, we help organizations recover value
              from decommissioned electronic equipment while protecting data,
              promoting reuse, and reducing environmental impact.
            </motion.p>

            <motion.a
              href="/e-waste/about"
              className="inline-block text-sm font-medium text-white border-b border-white/60 hover:border-white transition"
              variants={textVariants}
            >
              Learn More
            </motion.a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default AboutEwaste;
