import React from "react";
import { logo } from "../../../imports";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-customGreen/95">
      <div className="flex flex-col items-center gap-8 animate-fade-in">

        {/* Rings + Logo */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-spin-slow" />

          {/* Inner Ring */}
          <div className="absolute inset-6 rounded-full border-2 border-white/40 animate-spin-fast" />

          {/* Glow */}
          <div className="absolute inset-10 rounded-full bg-white/10 blur-xl" />

          {/* Logo */}
          <div className="relative w-36 h-36 rounded-full bg-white flex items-center justify-center shadow-2xl animate-pulse-soft">
            <img
              src={logo}
              alt="ZEWA Africa Logo"
              className="w-28 h-28 object-contain"
            />
          </div>
        </div>

      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-fast {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-delay {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }

        .animate-spin-fast {
          animation: spin-fast 2.5s linear infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 0.9s ease-out forwards;
        }

        .animate-pulse-soft {
          animation: pulse-soft 2.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;
