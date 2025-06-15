
import React from "react";

const STRINGS = [
  "AI-powered Hiring",
  "Lightning Fast Matches",
  "Find Hidden Tech Talent",
  "Perfect Fit. Every Time."
];

const colors = [
  "from-pink-400 to-purple-500",
  "from-purple-400 to-pink-500",
  "from-slate-600 to-purple-600",
  "from-purple-500 to-slate-600"
];

export default function ParallaxHeroText() {
  // Simple floating animation for each line
  return (
    <div className="relative w-full flex flex-col items-center min-h-[320px] select-none py-8 overflow-hidden">
      {STRINGS.map((str, idx) => (
        <span
          key={str}
          className={`
            text-4xl sm:text-5xl md:text-7xl font-bold mb-2
            bg-gradient-to-r ${colors[idx % colors.length]} bg-clip-text text-transparent
            animate-float
            px-3
          `}
          style={{
            animationDuration: `${5 + idx * 0.8}s`,
            animationDelay: `${idx * 0.5}s`
          }}
        >
          {str}
        </span>
      ))}
      <style>
        {`
        @keyframes float {
          0% { transform: translateY(0px);}
          50% { transform: translateY(-18px);}
          100% { transform: translateY(0px);}
        }
        .animate-float {
          animation-name: float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        `}
      </style>
    </div>
  );
}
