import React from 'react';
import { Button } from '@/components/ui/button';
import WaitlistForm from '@/components/WaitlistForm';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import FAQSection from '@/components/FAQSection';
import AnimatedSection from '@/components/AnimatedSection';
import ParallaxBackground from '@/components/ParallaxBackground';
import ParallaxHeroText from '@/components/ParallaxHeroText';
import LeadForm from '@/components/LeadForm';
import TeamSection from '@/components/TeamSection';
import Header from '@/components/Header';
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

  const [formOpen, setFormOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-slate-100 overflow-hidden">
      {/* Header */}
      <Header />

      {/* ParallaxHeroText with adjusted top padding */}
      <section className="relative z-20 pt-24 pb-12 w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <SignupCounter />
        </div>
        <ParallaxHeroText />
        <Button
          variant="default"
          size="lg"
          className="mt-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 shadow-lg rounded-xl hover:scale-105 hover:shadow-xl transition-transform"
          onClick={() => setFormOpen(true)}
        >
          Request Early Access
        </Button>
      </section>
      <LeadForm open={formOpen} onOpenChange={setFormOpen} />

      {/* Features - Use blob/soft-card layout as per your image reference */}
      <section className="relative z-10 px-4 md:px-6 py-16 md:py-24 bg-transparent" id="features">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
              Why SkillSync?
            </h2>
            <ul className="space-y-4">
              {features.map((feature, i) => (
                <li key={feature.title} className="group relative flex items-center gap-4 p-5 rounded-2xl bg-white/80 hover:bg-gradient-to-br hover:from-pink-50 hover:to-purple-50 shadow-md hover:shadow-lg perspective-card transition-all duration-300">
                  <span className="flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-400 p-2 mr-2 shadow group-hover:scale-110 transition-transform">
                    <feature.icon className="h-7 w-7 text-white" />
                  </span>
                  <div>
                    <div className="font-semibold text-lg text-slate-800">{feature.title}</div>
                    <div className="text-slate-600">{feature.description}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-xs md:max-w-md aspect-square flex items-center justify-center">
              {/* Animated blob (soft, gradient, floating visual) */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-200 via-purple-200 to-slate-200 blur-3xl opacity-40 animate-float"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-pink-300 via-purple-300 to-slate-300 blur-lg opacity-70 animate-float" style={{ animationDuration: '7s', animationDelay: '2s' }}></div>
              <span className="relative text-2xl md:text-3xl font-bold text-slate-700 drop-shadow-lg text-center px-4">AI Matches + Smart Discovery = <br />Effortless Hiring</span>
            </div>
          </div>
        </div>
        <style>
          {`
            .perspective-card {
              transition: transform 0.45s cubic-bezier(.2,1,.2,1);
              will-change: transform;
            }
            .perspective-card:hover {
              transform: rotateY(4deg) scale(1.035);
            }
            @keyframes float {
              0% { transform: translateY(0);}
              50% { transform: translateY(-20px);}
              100% { transform: translateY(0);}
            }
            .animate-float { animation: float 6s ease-in-out infinite;}
          `}
        </style>
      </section>

      {/* Pain Points Section */}
      <section className="relative z-10 px-4 md:px-6 py-12 md:py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">When Hiring Feels Like a Nightmare</h2>
            <p className="text-lg md:text-xl text-pink-200 max-w-2xl mx-auto">
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
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-pink-300/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:border-pink-300/40">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3">{point.title}</h3>
                  <p className="text-pink-200 leading-relaxed text-sm md:text-base">{point.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection className="text-center mt-12" animationType="fadeIn" delay={800}>
            <p className="text-xl md:text-2xl text-pink-200 italic">
              "What if there was a better way to find the right people, without all the chaos?"
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative z-10 px-4 md:px-6 py-12 md:py-20 bg-gradient-to-br from-purple-700 via-slate-700 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">From Hiring Chaos to Perfect Matches</h2>
            <p className="text-lg md:text-xl text-pink-200 mb-12 max-w-2xl mx-auto">
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
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-sm md:text-base text-pink-200">{item.description}</p>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection animationType="slideLeft" delay={600}>
            <blockquote className="text-lg md:text-2xl text-pink-200 italic border-l-4 border-pink-400 pl-4 md:pl-6 mb-8">
              "Because great teams aren't built by accident — they're discovered with intention."
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-4 md:px-6 py-12 md:py-20 bg-gradient-to-br from-slate-800 via-purple-800 to-purple-900">
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
      <section className="relative z-10 px-4 md:px-6 py-12 md:py-20 bg-gradient-to-br from-purple-900 to-slate-900">
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
      <section className="relative z-10 px-4 md:px-6 py-12 md:py-20 bg-gradient-to-br from-slate-900 to-purple-900">
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
      <section className="relative z-10 px-4 md:px-6 py-12 md:py-20 bg-gradient-to-br from-purple-900 via-slate-800 to-purple-800" id="testimonials">
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
      <section className="relative z-10 px-4 md:px-6 py-12 md:py-20 bg-gradient-to-br from-purple-800 to-slate-800" id="faq">
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
      <section className="relative z-10 px-4 md:px-6 py-12 md:py-20 bg-gradient-to-br from-slate-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animationType="scale">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-pink-300/20 hover:bg-white/15 transition-all duration-500">
              <Clock className="h-12 w-12 md:h-16 md:w-16 text-pink-400 mx-auto mb-6 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Transform Your Hiring?</h2>
              <p className="text-lg md:text-xl text-pink-200 mb-8 max-w-2xl mx-auto">
                Join thousands of forward-thinking companies who are already using AI to hire better, faster, and smarter.
              </p>
              
              <div className="mb-8">
                <WaitlistForm />
              </div>
              
              <SignupCounter />
              
              <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 text-center">
                <AnimatedSection animationType="fadeUp" delay={200}>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-pink-300 text-xs md:text-sm">On the waitlist</div>
                </AnimatedSection>
                <AnimatedSection animationType="fadeUp" delay={400}>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">0</div>
                  <div className="text-pink-300 text-xs md:text-sm">Bad hires made</div>
                </AnimatedSection>
                <AnimatedSection animationType="fadeUp" delay={600}>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-pink-300 text-xs md:text-sm">Smart hiring guaranteed</div>
                </AnimatedSection>
              </div>
              
              <p className="text-xs md:text-sm text-pink-300 mt-6">
                Be among the first 1,000 users and get lifetime early access pricing 🚀
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Footer */}
      <footer className="relative z-10 px-4 md:px-6 py-8 md:py-12 border-t border-purple-800/30 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
            <AnimatedSection animationType="fadeUp">
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center space-x-2 mb-4">
                  <Rocket className="h-5 w-5 md:h-6 md:w-6 text-pink-400" />
                  <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    SkillSync
                  </span>
                </div>
                <p className="text-xs md:text-sm text-pink-300">
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
                  <div className="space-y-2 text-xs md:text-sm text-pink-300">
                    {section.items.map((item) => (
                      <div key={item} className="hover:text-pink-200 transition-colors cursor-pointer">{item}</div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection className="text-center pt-6 md:pt-8 border-t border-purple-800/30">
            <p className="text-pink-300 text-xs md:text-sm mb-2">
              © 2024 SkillSync. Built with ❤️ for the future of hiring.
            </p>
            <p className="text-pink-400 text-xs">
              Not a replacement for good hiring practices — just better tools to execute them.
            </p>
          </AnimatedSection>
        </div>
      </footer>
    </div>
  );
};

export default Index;
