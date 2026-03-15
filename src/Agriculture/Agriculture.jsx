import React from "react";

const Agriculture = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/farm.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 header-txt">
          Agriculture & Farm Waste Management
        </h1>

        <p className="text-gray-300 text-lg mb-8">
          This page is currently under development.
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-customGreen">
          ag.farm@ltcafrica.com
        </h2>
      </div>

    </section>
  );
};

export default Agriculture;
