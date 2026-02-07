import React, { useEffect, useState } from "react";
import { logo } from "../../../imports";

const Loader = ({ onFinished }) => {
  const [isExiting, setIsExiting] = useState(false);

  // Example trigger for the exit animation
  useEffect(() => {
    const timer = setTimeout(() => setIsExiting(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
  if (!isExiting) return;

  const doneTimer = setTimeout(() => {
    onFinished?.();
  }, 1000); // MUST match duration-1000

  return () => clearTimeout(doneTimer);
}, [isExiting, onFinished]);

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-customBlue transition-all duration-1000 ease-in-out ${isExiting ? "opacity-0 scale-110 pointer-events-none" : "opacity-100"}`}>
      
      <div className="relative flex flex-col items-center">
        
        {/* The Orbiting Container */}
        <div className={`relative w-48 h-48 flex items-center justify-center transition-transform duration-1000 ${isExiting ? "scale-50 opacity-0" : "scale-100"}`}>
          
          {/* Minimalist SVG Progress Circle */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="90"
              stroke="white"
              strokeWidth="1"
              fill="transparent"
              strokeOpacity="0.1"
            />
            <circle
              cx="96"
              cy="96"
              r="90"
              stroke="white"
              strokeWidth="1.5"
              fill="transparent"
              strokeDasharray="565"
              className="animate-draw-stroke"
              strokeLinecap="round"
            />
          </svg>

          {/* Ambient Background Glow */}
          <div className="absolute w-32 h-32 bg-white/5 rounded-full blur-[60px] animate-pulse-slow" />

          {/* Logo Container */}
          <div className="relative z-10 p-4 transition-all duration-700 ">
            <img
              src={logo}
              alt="ZEWA Africa Logo"
              className={`bg-white rounded-full w-24 h-24 object-contain transition-all duration-1000 ${isExiting ? "blur-md brightness-200" : "brightness-100"}`}
            />
          </div>
        </div>

        {/* Minimalist Loading Text */}
        <div className="mt-8 overflow-hidden">
          <p className={`text-[10px] uppercase tracking-[0.6em] text-white font-light transition-all duration-1000 ${isExiting ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}>
            LTC AFRICA
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes draw-stroke {
          0% { stroke-dashoffset: 565; opacity: 0; }
          20% { opacity: 1; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }

        .animate-draw-stroke {
          animation: draw-stroke 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;