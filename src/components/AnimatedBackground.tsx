
import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none select-none" aria-hidden>
      {/* Seamless gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#171729] via-[#1a1742] to-[#25213d] transition-colors duration-700" />

      {/* Subtle animated blurred orbs ("loops") */}
      <div className="absolute w-full h-full">
        {/* Orb 1 */}
        <div
          className="absolute top-1/4 left-[10%] w-64 h-64 bg-purple-700 opacity-30 blur-3xl rounded-full animate-orb1"
        />
        {/* Orb 2 */}
        <div
          className="absolute bottom-1/3 right-[12%] w-48 h-48 bg-pink-700 opacity-25 blur-2xl rounded-full animate-orb2"
        />
        {/* Orb 3 */}
        <div
          className="absolute top-10 right-1/5 w-40 h-40 bg-indigo-700 opacity-25 blur-2xl rounded-full animate-orb3"
        />
        {/* Orb 4 */}
        <div
          className="absolute bottom-[10%] left-1/3 w-52 h-52 bg-purple-900 opacity-20 blur-3xl rounded-full animate-orb4"
        />
      </div>
      <style>{`
        @keyframes orb1 {
          0%, 100% { transform: translateY(0) translateX(0);}
          50% { transform: translateY(18px) translateX(-18px);}
        }
        .animate-orb1 { animation: orb1 12s ease-in-out infinite; }

        @keyframes orb2 {
          0%, 100% { transform: translateY(0) translateX(0);}
          50% { transform: translateY(-30px) translateX(32px);}
        }
        .animate-orb2 { animation: orb2 15s ease-in-out infinite; }

        @keyframes orb3 {
          0%, 100% { transform: translateX(0) translateY(0);}
          50% { transform: translateX(-22px) translateY(13px);}
        }
        .animate-orb3 { animation: orb3 11s ease-in-out infinite; }

        @keyframes orb4 {
          0%, 100% { transform: translateY(0) translateX(0);}
          50% { transform: translateY(-20px) translateX(-20px);}
        }
        .animate-orb4 { animation: orb4 16s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
