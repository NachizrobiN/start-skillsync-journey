
import React from "react";
import WaitlistForm from "./WaitlistForm";

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
  return (
    <div className="relative w-full flex flex-col items-center min-h-[320px] select-none py-8 overflow-hidden">
      {STRINGS.map((str, idx) => (
        <span
          key={str}
          className={`
            text-4xl sm:text-5xl md:text-7xl font-bold mb-2
            bg-gradient-to-r ${colors[idx % colors.length]} bg-clip-text text-transparent
            px-3
            break-words whitespace-normal text-center block w-full 
            overflow-visible
          `}
        >
          {str}
        </span>
      ))}
      
      {/* Email waitlist input area */}
      <div className="mt-8 w-full max-w-md">
        <h3 className="text-xl md:text-2xl font-semibold text-slate-700 mb-4 text-center">
          Join the Waitlist
        </h3>
        <WaitlistForm />
      </div>
    </div>
  );
}
