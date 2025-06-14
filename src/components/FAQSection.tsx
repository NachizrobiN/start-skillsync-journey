
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "When will SkillSync launch?",
      answer: "We're currently in private beta with select companies. Full launch is planned for Q2 2024. Waitlist members get early access and special pricing."
    },
    {
      question: "Is this a replacement for recruiters?",
      answer: "Not at all! SkillSync enhances your existing hiring process. It's perfect for internal teams, small companies, or as a tool to help recruiters be more efficient."
    },
    {
      question: "What types of tech roles does it work for?",
      answer: "We support all tech positions - from junior developers to senior architects, DevOps engineers, designers, product managers, and more. The AI adapts to different role requirements."
    },
    {
      question: "How accurate is the AI matching?",
      answer: "Our beta users report 85%+ accuracy in initial screening, with continuous learning improving results. The AI gets smarter with each hire you make."
    },
    {
      question: "What if I'm not tech-savvy?",
      answer: "That's exactly who we built this for! SkillSync translates technical requirements into plain English and guides you through the entire process."
    },
    {
      question: "How much will it cost?",
      answer: "We'll have flexible pricing starting at $99/month for small teams. Waitlist members get 50% off their first year and locked-in early access pricing."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl border border-purple-300/20 overflow-hidden">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
          >
            <span className="text-lg font-semibold text-white">{faq.question}</span>
            {openFAQ === index ? (
              <ChevronUp className="h-5 w-5 text-purple-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-purple-400" />
            )}
          </button>
          {openFAQ === index && (
            <div className="px-6 pb-4">
              <p className="text-purple-200 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
      
      <div className="text-center mt-8">
        <p className="text-purple-300 mb-4">Have more questions? We'd love to hear from you</p>
        <button className="text-purple-400 hover:text-purple-300 underline">
          Contact us directly
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
