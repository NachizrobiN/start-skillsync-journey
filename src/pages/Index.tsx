
import React from 'react';
import { Button } from '@/components/ui/button';
import WaitlistForm from '@/components/WaitlistForm';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import SignupCounter from '@/components/SignupCounter';
import FAQSection from '@/components/FAQSection';
import AnimatedSection from '@/components/AnimatedSection';
import ParallaxBackground from '@/components/ParallaxBackground';
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
      {/* Parallax animated background elements */}
      <ParallaxBackground />

      {/* Navigation */}
      <nav className="relative z-10 p-4 md:p-6">
        <AnimatedSection className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Rocket className="h-6 w-6 md:h-8 md:w-8 text-purple-400 transition-transform hover:scale-110" />
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SkillSync
            </span>
          </div>
          <Button 
            variant="outline" 
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105 text-sm md:text-base px-3 py-2 md:px-4 md:py-2"
          >
            Request Demo
          </Button>
        </AnimatedSection>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animationType="fadeIn" delay={200}>
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-yellow-400 mr-2" />
              <span className="text-sm md:text-base text-purple-300 font-medium">The Future of Hiring is Here</span>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animationType="fadeUp" delay={400}>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Hire Amazing 
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Tech Talent{" "}
              </span>
              in Days, Not Weeks
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animationType="fadeUp" delay={600}>
            <p className="text-lg md:text-xl text-purple-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              SkillSync is your AI-powered hiring copilot that finds, screens, and connects you with the perfect tech talent. 
              Say goodbye to endless resume reviews and hello to efficient, smart hiring.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animationType="scale" delay={800}>
            <div className="mb-8 md:mb-12">
              <WaitlistForm />
            </div>
          </AnimatedSection>
          
          <AnimatedSection animationType="fadeIn" delay={1000}>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-xs md:text-sm text-purple-300">
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
          </AnimatedSection>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="relative z-10 px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">When Hiring Feels Like a Nightmare</h2>
            <p className="text-lg md:text-xl text-purple-200 max-w-2xl mx-auto">
              Sound familiar? You're definitely not alone in this struggle.
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {painPoints.map((point, index) => (
              <AnimatedSection 
                key={index} 
                animationType="fadeUp" 
                delay={index * 200}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-300/20 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-300/40">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3">{point.title}</h3>
                  <p className="text-purple-200 leading-relaxed text-sm md:text-base">{point.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection className="text-center mt-12" animationType="fadeIn" delay={800}>
            <p className="text-xl md:text-2xl text-purple-200 italic">
              "What if there was a better way to find the right people, without all the chaos?"
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative z-10 px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">From Hiring Chaos to Perfect Matches</h2>
            <p className="text-lg md:text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
              SkillSync doesn't promise magic — it gives you the right tools to make smart, confident hiring decisions.
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {[
              { icon: Search, title: "Find the hidden gems", description: "AI discovers talent you'd never find manually" },
              { icon: Shield, title: "Screen with confidence", description: "Data-driven insights, not just gut feelings" },
              { icon: Heart, title: "Build great teams", description: "Focus on culture fit, not just technical skills" }
            ].map((item, index) => (
              <AnimatedSection 
                key={index} 
                animationType="fadeUp" 
                delay={index * 200}
                className="text-center group"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-purple-200">{item.description}</p>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection animationType="slideLeft" delay={600}>
            <blockquote className="text-lg md:text-2xl text-purple-200 italic border-l-4 border-purple-400 pl-4 md:pl-6 mb-8">
              "Because great teams aren't built by accident — they're discovered with intention."
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How SkillSync Transforms Your Hiring</h2>
            <p className="text-lg md:text-xl text-purple-200 max-w-2xl mx-auto">
              Four powerful ways to find and hire the right talent faster
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {detailedFeatures.map((feature, index) => (
              <AnimatedSection 
                key={index} 
                animationType="fadeUp" 
                delay={index * 200}
                className="group"
              >
                <div className="transform transition-all duration-300 hover:scale-105">
                  <FeatureCard {...feature} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              You're Not Hiring Wrong.<br className="hidden md:block" />The Tools Were Just... Missing.
            </h2>
            <div className="text-base md:text-lg text-purple-200 space-y-4 md:space-y-6 mb-12">
              <p>
                We get it. You've tried job boards, recruiters, referrals. Sometimes it works, sometimes it doesn't. 
                And you're left wondering if there's a better way.
              </p>
              <p>
                What if there was a space for hiring teams who are done with outdated processes? 
                A platform that doesn't ask you to settle for "good enough" candidates.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {[
              { icon: Award, title: "No Settling", description: "Find candidates who actually fit your needs" },
              { icon: TrendingUp, title: "No Guessing", description: "Data-driven insights for confident decisions" },
              { icon: Clock, title: "No Waiting", description: "Fill positions faster with smart automation" }
            ].map((item, index) => (
              <AnimatedSection 
                key={index} 
                animationType="fadeUp" 
                delay={index * 200}
                className="text-center group"
              >
                <item.icon className="h-10 w-10 md:h-12 md:w-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-purple-200">{item.description}</p>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection animationType="fadeIn" delay={600}>
            <blockquote className="text-lg md:text-xl text-purple-200 italic">
              "Just a growing community of hiring teams who believe great talent deserves to be found, 
              and great companies deserve better tools to find them."
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Actually Get</h2>
            <p className="text-lg md:text-xl text-purple-200">
              Measurable results that transform your hiring process
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <AnimatedSection 
                key={index} 
                animationType="slideRight" 
                delay={index * 100}
                className="group"
              >
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
                  <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-base md:text-lg text-purple-100">{benefit}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Hiring Teams</h2>
            <p className="text-lg md:text-xl text-purple-200">
              See what our early users are saying about SkillSync
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection 
                key={index} 
                animationType="fadeUp" 
                delay={index * 200}
                className="group"
              >
                <div className="transform transition-all duration-300 hover:scale-105">
                  <TestimonialCard {...testimonial} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions? We've Got Answers</h2>
            <p className="text-lg md:text-xl text-purple-200">
              Everything you need to know about SkillSync
            </p>
          </AnimatedSection>
          
          <AnimatedSection animationType="fadeUp" delay={200}>
            <FAQSection />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animationType="scale">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-300/20 hover:bg-white/15 transition-all duration-500">
              <Clock className="h-12 w-12 md:h-16 md:w-16 text-purple-400 mx-auto mb-6 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Hiring?</h2>
              <p className="text-lg md:text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
                Join thousands of forward-thinking companies who are already using AI to hire better, faster, and smarter.
              </p>
              
              <div className="mb-8">
                <WaitlistForm />
              </div>
              
              <SignupCounter />
              
              <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 text-center">
                <AnimatedSection animationType="fadeUp" delay={200}>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-purple-300 text-xs md:text-sm">On the waitlist</div>
                </AnimatedSection>
                <AnimatedSection animationType="fadeUp" delay={400}>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">0</div>
                  <div className="text-purple-300 text-xs md:text-sm">Bad hires made</div>
                </AnimatedSection>
                <AnimatedSection animationType="fadeUp" delay={600}>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-purple-300 text-xs md:text-sm">Smart hiring guaranteed</div>
                </AnimatedSection>
              </div>
              
              <p className="text-xs md:text-sm text-purple-300 mt-6">
                Be among the first 1,000 users and get lifetime early access pricing 🚀
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-4 md:px-6 py-8 md:py-12 border-t border-purple-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
            <AnimatedSection animationType="fadeUp">
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center space-x-2 mb-4">
                  <Rocket className="h-5 w-5 md:h-6 md:w-6 text-purple-400" />
                  <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    SkillSync
                  </span>
                </div>
                <p className="text-xs md:text-sm text-purple-300">
                  AI-powered hiring that finds the right talent faster.
                </p>
              </div>
            </AnimatedSection>
            
            {[
              { title: "Product", items: ["Features", "Pricing", "Demo"] },
              { title: "Company", items: ["About", "Blog", "Careers"] },
              { title: "Support", items: ["Help Center", "Contact", "Privacy Policy"] }
            ].map((section, index) => (
              <AnimatedSection key={section.title} animationType="fadeUp" delay={index * 100}>
                <div>
                  <h4 className="font-semibold text-white mb-3 text-sm md:text-base">{section.title}</h4>
                  <div className="space-y-2 text-xs md:text-sm text-purple-300">
                    {section.items.map((item) => (
                      <div key={item} className="hover:text-purple-200 transition-colors cursor-pointer">{item}</div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection className="text-center pt-6 md:pt-8 border-t border-purple-800/30">
            <p className="text-purple-300 text-xs md:text-sm mb-2">
              © 2024 SkillSync. Built with ❤️ for the future of hiring.
            </p>
            <p className="text-purple-400 text-xs">
              Not a replacement for good hiring practices — just better tools to execute them.
            </p>
          </AnimatedSection>
        </div>
      </footer>
    </div>
  );
};

export default Index;
