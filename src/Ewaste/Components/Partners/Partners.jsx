import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Partners = () => {
  const partnerList = [
    "/images/mcl.png",
    "/images/unep.svg",
    "/images/huawei.png",
    "/images/startimes.png",
    "/images/wfp.png",
    "/images/epa.png",
    "/images/yas.png",
    "/images/undp.jpg",
    "/images/orange.png",
    "/images/mtn.png",
    "/images/airtel.png",
    "/images/vodafone.png",
    "/images/dstv.png",
    "/images/canal.png",
    "/images/ecoreco.jpg",
    "/images/camusat.png",
    "/images/strong.png",
    "/images/blueline.png",
    "/images/parabole.jpg",
    "/images/zte.png",
  ];

  const categories = ["Banks", "Healthcare", "Schools"];

  return (
    <section className="relative w-full py-20 md:py-32 bg-customBlue/10">
      <div className="absolute inset-0 bg-[url('/images/painttxt.jpg')] opacity-25"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 text-center relative z-10">

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

        {/* Sliding Logos */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={6}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="opacity-70"
        >
          {partnerList.map((partner, index) => (
<SwiperSlide key={index}>
  <div className="flex items-center justify-center h-20 w-full transition duration-300">
    <img
      src={partner}
      alt="partner logo"
      className="h-full w-auto object-contain"
    />
  </div>
</SwiperSlide>
          ))}
        </Swiper>

        {/* Categories */}
        <motion.div
          className="mt-20 pt-10 border-t border-gray-200"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-900 uppercase tracking-widest mb-6">
            Collaborating across sectors
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-5 py-2 bg-white text-gray-900 rounded-full text-sm font-medium"
              >
                {cat}
              </span>
            ))}

            <span className="px-5 py-2 text-gray-900 text-sm italic">
              ...and many more
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Partners;