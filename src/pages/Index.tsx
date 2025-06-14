
import React from 'react';
import { Button } from '@/components/ui/button';
import WaitlistForm from '@/components/WaitlistForm';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import SignupCounter from '@/components/SignupCounter';
import FAQSection from '@/components/FAQSection';
import { 
  Rocket, 
  Brain, 
  Zap, 
  Users, 
  Target, 
  Clock,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Search,
  MessageSquare,
  Shield,
  TrendingUp,
  Award,
  Heart
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

  const detailedFeatures = [
    {
      icon: Search,
      title: "Smart Candidate Discovery",
      description: "AI scans thousands of profiles to surface hidden gems you'd never find manually. No more needle-in-haystack searching."
    },
    {
      icon: MessageSquare,
      title: "Automated Initial Screening",
      description: "Pre-qualify candidates with intelligent questionnaires and skill assessments before they reach your inbox."
    },
    {
      icon: Shield,
      title: "Bias-Free Hiring",
      description: "Make data-driven decisions with anonymized candidate scoring that focuses purely on skills and fit."
    },
    {
      icon: TrendingUp,
      title: "Hiring Analytics",
      description: "Track your hiring funnel, optimize your process, and make smarter recruiting decisions with detailed insights."
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

  const painPoints = [
    {
      title: "Drowning in resumes",
      description: "You post a job and get 500+ applications. Most aren't even close to what you need."
    },
    {
      title: "Technical skills guessing game",
      description: "Someone says they know React, but can they actually build what you need?"
    },
    {
      title: "Culture fit mystery",
      description: "They look great on paper, but will they mesh with your team's vibe?"
    },
    {
      title: "Time black hole",
      description: "Weeks of interviews later, you're back to square one with an empty chair."
    }
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

      {/* Pain Points Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">When Hiring Feels Like a Nightmare</h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Sound familiar? You're definitely not alone in this struggle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {painPoints.map((point, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-300/20">
                <h3 className="text-xl font-semibold text-white mb-3">{point.title}</h3>
                <p className="text-purple-200 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-2xl text-purple-200 italic">
              "What if there was a better way to find the right people, without all the chaos?"
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">From Hiring Chaos to Perfect Matches</h2>
          <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
            SkillSync doesn't promise magic — it gives you the right tools to make smart, confident hiring decisions.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Find the hidden gems</h3>
              <p className="text-purple-200">AI discovers talent you'd never find manually</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Screen with confidence</h3>
              <p className="text-purple-200">Data-driven insights, not just gut feelings</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Build great teams</h3>
              <p className="text-purple-200">Focus on culture fit, not just technical skills</p>
            </div>
          </div>
          
          <blockquote className="text-2xl text-purple-200 italic border-l-4 border-purple-400 pl-6 mb-8">
            "Because great teams aren't built by accident — they're discovered with intention."
          </blockquote>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How SkillSync Transforms Your Hiring</h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Four powerful ways to find and hire the right talent faster
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {detailedFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">You're Not Hiring Wrong.<br />The Tools Were Just... Missing.</h2>
          <div className="text-lg text-purple-200 space-y-6 mb-12">
            <p>
              We get it. You've tried job boards, recruiters, referrals. Sometimes it works, sometimes it doesn't. 
              And you're left wondering if there's a better way.
            </p>
            <p>
              What if there was a space for hiring teams who are done with outdated processes? 
              A platform that doesn't ask you to settle for "good enough" candidates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Award className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Settling</h3>
              <p className="text-purple-200">Find candidates who actually fit your needs</p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Guessing</h3>
              <p className="text-purple-200">Data-driven insights for confident decisions</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Waiting</h3>
              <p className="text-purple-200">Fill positions faster with smart automation</p>
            </div>
          </div>
          
          <blockquote className="text-xl text-purple-200 italic">
            "Just a growing community of hiring teams who believe great talent deserves to be found, 
            and great companies deserve better tools to find them."
          </blockquote>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What You'll Actually Get</h2>
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

      {/* FAQ Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Questions? We've Got Answers</h2>
            <p className="text-xl text-purple-200">
              Everything you need to know about SkillSync
            </p>
          </div>
          
          <FAQSection />
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
            
            <div className="grid grid-cols-3 gap-8 mt-12 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-purple-300 text-sm">On the waitlist</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">0</div>
                <div className="text-purple-300 text-sm">Bad hires made</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-purple-300 text-sm">Smart hiring guaranteed</div>
              </div>
            </div>
            
            <p className="text-sm text-purple-300 mt-6">
              Be among the first 1,000 users and get lifetime early access pricing 🚀
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-purple-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Rocket className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  SkillSync
                </span>
              </div>
              <p className="text-sm text-purple-300">
                AI-powered hiring that finds the right talent faster.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-3">Product</h4>
              <div className="space-y-2 text-sm text-purple-300">
                <div>Features</div>
                <div>Pricing</div>
                <div>Demo</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-3">Company</h4>
              <div className="space-y-2 text-sm text-purple-300">
                <div>About</div>
                <div>Blog</div>
                <div>Careers</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-3">Support</h4>
              <div className="space-y-2 text-sm text-purple-300">
                <div>Help Center</div>
                <div>Contact</div>
                <div>Privacy Policy</div>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-purple-800/30">
            <p className="text-purple-300 text-sm mb-2">
              © 2024 SkillSync. Built with ❤️ for the future of hiring.
            </p>
            <p className="text-purple-400 text-xs">
              Not a replacement for good hiring practices — just better tools to execute them.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
