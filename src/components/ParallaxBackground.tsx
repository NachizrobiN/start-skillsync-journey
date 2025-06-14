
import React from 'react';
import { useParallax } from '@/hooks/useScrollAnimation';

const ParallaxBackground: React.FC = () => {
  const offset = useParallax();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating orbs with parallax */}
      <div 
        className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
        style={{
          transform: `translateY(${offset * 0.1}px) translateX(${offset * 0.05}px)`,
        }}
      />
      <div 
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
        style={{
          transform: `translateY(${offset * -0.1}px) translateX(${offset * -0.05}px)`,
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
        style={{
          transform: `translate(-50%, -50%) translateY(${offset * 0.08}px)`,
        }}
      />
      
      {/* Additional floating elements */}
      <div 
        className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full opacity-60"
        style={{
          transform: `translateY(${offset * 0.15}px)`,
        }}
      />
      <div 
        className="absolute top-1/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full opacity-40"
        style={{
          transform: `translateY(${offset * -0.12}px)`,
        }}
      />
      <div 
        className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-50"
        style={{
          transform: `translateY(${offset * 0.18}px)`,
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
