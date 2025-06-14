import React from 'react';
import { Button } from '@/components/ui/button';
import WaitlistForm from '@/components/WaitlistForm';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import SignupCounter from '@/components/SignupCounter';
import { 
  Rocket, 
  Brain, 
  Zap, 
  Users, 
  Target, 
  Clock,
  ArrowRight,
  Sparkles,
  CheckCircle
} from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Our smart algorithms understand skills beyond keywords, finding candidates who truly fit your needs."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Reduce your hiring time from weeks to days with automated screening and smart recommendations."
    },
    {
      icon: Target,
      title: "Perfect Fit Every Time",
      description: "Advanced matching ensures you connect with candidates who align with your culture and requirements."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Head of Talent",
      company: "TechFlow",
      testimonial: "SkillSync transformed our hiring process. We found our best developers 3x faster than before.",
      avatar: "SC"
    },
    {
      name: "Mike Rodriguez",
      role: "Founder",
      company: "StartupX",
      testimonial: "As a non-technical founder, SkillSync helped me understand and hire the right tech talent effortlessly.",
      avatar: "MR"
    },
    {
      name: "Lisa Park",
      role: "Engineering Manager",
      company: "InnovateCorp",
      testimonial: "The AI recommendations are spot-on. It's like having a hiring expert who never sleeps.",
      avatar: "LP"
    }
  ];

  const benefits = [
    "Save 80% of time on candidate screening",
    "Reduce hiring costs by up to 60%",
    "Improve candidate quality with AI matching",
    "Eliminate hiring bias with data-driven decisions",
    "Onboard faster with automated workflows"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SkillSync
            </span>
          </div>
          <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
            Request Demo
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-yellow-400 mr-2" />
            <span className="text-purple-300 font-medium">The Future of Hiring is Here</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hire Amazing 
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Tech Talent{" "}
            </span>
            in Days, Not Weeks
          </h1>
          
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            SkillSync is your AI-powered hiring copilot that finds, screens, and connects you with the perfect tech talent. 
            Say goodbye to endless resume reviews and hello to efficient, smart hiring.
          </p>
          
          <div className="mb-12">
            <WaitlistForm />
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-purple-300">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
              Early access pricing
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why SkillSync Changes Everything</h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Built for modern teams who need to move fast without compromising on quality
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What You'll Get</h2>
            <p className="text-xl text-purple-200">
              Measurable results that transform your hiring process
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-lg text-purple-100">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Loved by Hiring Teams</h2>
            <p className="text-xl text-purple-200">
              See what our early users are saying about SkillSync
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-purple-300/20">
            <Clock className="h-16 w-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Hiring?</h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies who are already using AI to hire better, faster, and smarter.
            </p>
            
            <div className="mb-8">
              <WaitlistForm />
            </div>
            
            <SignupCounter />
            
            <p className="text-sm text-purple-300 mt-6">
              Be among the first 1,000 users and get lifetime early access pricing 🚀
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-purple-800/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Rocket className="h-6 w-6 text-purple-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SkillSync
            </span>
          </div>
          <p className="text-purple-300 text-sm">
            © 2024 SkillSync. Built with ❤️ for the future of hiring.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
