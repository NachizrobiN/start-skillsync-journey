
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatar: string;
}

const TestimonialCard = ({ name, role, company, testimonial, avatar }: TestimonialCardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-300/20">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-purple-100 mb-6 italic">"{testimonial}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
          <span className="text-white font-semibold">{avatar}</span>
        </div>
        <div>
          <p className="text-white font-semibold">{name}</p>
          <p className="text-purple-300 text-sm">{role} at {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
