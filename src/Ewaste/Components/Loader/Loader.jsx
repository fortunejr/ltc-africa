import React, { useEffect, useState } from "react";

const Loader = ({ onFinished }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsExiting(true), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isExiting) return;

    const doneTimer = setTimeout(() => onFinished?.(), 1000);
    return () => clearTimeout(doneTimer);
  }, [isExiting, onFinished]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-customBlue transition-opacity duration-1000 ease-in-out ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Logo & Circular Stroke */}
        <div className={`relative w-40 h-40 flex items-center justify-center transition-transform duration-1000 ${isExiting ? "scale-90 opacity-0" : "scale-100"}`}>
          <svg className="absolute w-full h-full -rotate-90">
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="white"
              strokeWidth="1.5"
              fill="transparent"
              strokeOpacity="0.1"
            />
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="white"
              strokeWidth="2"
              fill="transparent"
              strokeDasharray="440"
              strokeLinecap="round"
              className="animate-draw-stroke"
            />
          </svg>

          <div className="relative z-10">
            <img
              src="/images/ltc-logo.png"
              alt="LTC Africa Logo"
              className={`rounded-full w-24 h-24 object-contain transition-all duration-1000 ${
                isExiting ? "blur-sm brightness-125" : "brightness-100"
              }`}
            />
          </div>
        </div>

        {/* Loading Text */}
        <p
          className={`mt-6 text-sm text-white font-medium transition-opacity duration-1000 ${
            isExiting ? "opacity-0" : "opacity-100"
          }`}
        >
          LTC AFRICA
        </p>
      </div>

      <style jsx global>{`
        @keyframes draw-stroke {
          0% {
            stroke-dashoffset: 440;
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        .animate-draw-stroke {
          animation: draw-stroke 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;