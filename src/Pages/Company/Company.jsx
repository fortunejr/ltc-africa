import React from "react";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import { Link } from "react-router-dom";

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const Company = () => {
  return (
    <section className="bg-white text-[#111]">
      {/* HERO */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1772326049701-bcdda505ef51?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="corporate"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white">
          <h1 className="text-5xl mb-6 header-txt font-bold bg-customBlue w-fit p-2">The Company</h1>

          <div className="space-y-2 text-lg">
            <p><a href="#about" className="text-white hover:text-customGreen transition-colors">About The Group Company</a></p>
            <p><Link to="/e-waste" className="text-white hover:text-customGreen transition-colors">IT/TELECEOM ASSET & WEEE Management</Link></p>
            <p><Link to="/agriculture" className="text-white hover:text-customGreen transition-colors">Agricultural & Farm Waste Solutions</Link></p>
            <p><Link to="/real-estate" className="text-white hover:text-customGreen transition-colors">Smart Real Estate Management</Link></p>
            <p><Link to="/energy" className="text-white hover:text-customGreen transition-colors">Renewable & Green Energy Solution</Link></p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div id="about" className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h1 className="text-4xl font-semibold mb-4 header-txt text-customBlue">
            About the Group Company
          </h1>
          <h2 className="text-xl text-gray-600">
            LTC Africa Group Corporate Introduction
          </h2>
        </div>

        <div className="space-y-10 text-lg text-gray-700 leading-relaxed">
          <p>
            LTC Africa Group is a leading African company committed to
            delivering comprehensive, innovative, and sustainable solutions
            across multiple sectors to empower businesses, service providers,
            and institutions throughout Africa. As a Group, LTC Africa leverages
            decades of expertise, industry best practices, and cutting-edge
            technology to provide end-to-end services that drive efficiency,
            maximize value, and support Africa’s economic growth while
            maintaining the highest environmental and social standards.
          </p>

          <p>
            In the IT and Telecom sector, LTC Africa Group provides complete
            asset and WEEE (Waste Electrical and Electronic Equipment)
            management solutions. From secure decommissioning, data destruction,
            and refurbishment of IT and telecom equipment to certified recycling
            and remarketing, the Group ensures compliance with global
            environmental standards, protects sensitive data, and helps
            organizations recover maximum value from retired assets. These
            solutions not only reduce electronic waste but also promote a
            circular economy, contributing to sustainable industrial practices
            across the continent.
          </p>

          <p>
            In Agriculture and Farm Waste Management, LTC Africa Group champions
            sustainable farming practices and also transforming organic and farm
            waste into valuable resources such as compost, biofertilizers, and
            renewable energy. By helping farmers improve soil fertility,
            increase crop yields, and reduce environmental impact, the Group
            fosters climate-smart agriculture and circular farming systems.
            These initiatives address critical challenges in food security,
            resource management, and environmental sustainability, while
            creating long-term economic opportunities for local communities.
          </p>

          <p>
            Also the Group’s Smart Real Estate Management solutions integrate
            advanced technology, data analytics, and intelligent systems to
            optimize property performance and enhance tenant experiences.
            Through digital monitoring, predictive maintenance, energy-efficient
            solutions, and lifecycle asset planning, LTC Africa ensures
            properties operate at peak efficiency while maximizing long-term
            value. These smart infrastructure strategies support urban
            development, reduce operational costs, and promote sustainable real
            estate practices across commercial, institutional, and residential
            projects.
          </p>

          <p>
            In the Renewable and Green Energy sector, LTC Africa Group drives
            Africa’s clean energy transition by delivering scalable solutions in
            solar, wind, hydro, and bioenergy. The Group designs and implements
            energy strategies that reduce carbon emissions, increase access to
            reliable and sustainable power, and promote cost-effective energy
            generation for industries, businesses, and communities. By focusing
            on renewable energy solutions, LTC Africa contributes to climate
            action, energy resilience, and sustainable development across the
            continent.
          </p>

          <p>
            With a holistic approach that combines technology, sustainability,
            and operational excellence, LTC Africa Group stands as a trusted
            partner for African businesses, service providers, and institutions
            seeking to transform challenges into opportunities. From managing
            electronic and agricultural waste to developing smart properties and
            clean energy solutions, LTC Africa Group exemplifies innovation,
            responsibility, and a commitment to driving lasting impact, economic
            growth, and environmental stewardship throughout Africa.
          </p>
        </div>
      </div>

      {/* VISION MISSION */}
      <div className="bg-[#111] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid lg:grid-cols-2 gap-8 lg:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Vision */}
            <motion.div className="group relative bg-white backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="relative overflow-hidden rounded-t-3xl">
                <video
                  src="/videos/greencity.mp4"
                  className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="p-6 lg:p-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-customBlue/10 rounded-2xl">
                    <Eye className="w-8 h-8 text-customBlue" />
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-customBlue">
                    Our Vision
                  </h3>
                </div>

                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  To be Africa’s leading integrated solutions group, driving
                  sustainable transformation through innovation, circular
                  economy practices, smart infrastructure, and renewable energy
                  while empowering businesses, institutions, and communities to
                  thrive in a resilient and environmentally responsible future.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div className="group relative bg-white backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="relative overflow-hidden rounded-t-3xl">
                <video
                  src="/videos/windmill.mp4"
                  className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="p-6 lg:p-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-customBlue/10 rounded-2xl">
                    <Target className="w-8 h-8 text-customBlue" />
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-customBlue">
                    Our Mission
                  </h3>
                </div>

                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  To deliver comprehensive, technology-driven, and sustainable
                  solutions across IT/Telecom Asset &amp; WEEE Management,
                  Agricultural &amp; Farm Waste Management, Smart Real Estate
                  Management, and Renewable &amp; Green Energy by maximizing
                  value, ensuring compliance and data security, improving
                  productivity, reducing environmental impact, and accelerating
                  inclusive economic growth across Africa.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Company;
