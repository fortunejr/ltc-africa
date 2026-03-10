import React from "react";

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

  return (
    <section className="w-full bg-white py-20 md:py-32 bg-customGreen">
      <div className="max-w-7xl mx-auto px-6 md:px-20 text-center">
        {/* Header Section */}
        <div className="mb-16 max-w-3xl mx-auto">
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
        </div>

        {/* Logo/Name Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8 items-center justify-items-center opacity-70">
          {partnerList.map((partner, index) => (
            <div
              key={index}
              className="text-gray-400 font-bold text-xl md:text-2xl tracking-tight hover:text-customBlue transition-colors duration-300 cursor-default grayscale hover:grayscale-0"
            >
              <img className="h-14 object-contain" src={partner} alt="" />
            </div>
          ))}
        </div>

        {/* Categories Footer */}
        <div className="mt-20 pt-10 border-t border-gray-100">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-6">
            Collaborating across sectors
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-5 py-2 bg-customGreen/30 text-gray-600 rounded-full text-sm font-medium"
              >
                {cat}
              </span>
            ))}
            <span className="px-5 py-2 text-gray-400 text-sm italic">
              ...and many more
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
