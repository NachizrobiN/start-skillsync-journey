
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Link } from "react-router-dom";
import { ArrowLeft, Brain, Target, BarChart3, Users, Clock, Shield, Zap, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Advanced algorithms analyze skills, experience, and cultural fit to find the perfect candidates",
      benefits: ["99% accuracy in skill matching", "Reduces screening time by 80%", "Learns from hiring patterns"]
    },
    {
      icon: Target,
      title: "Smart Assessments",
      description: "Customizable skill assessments that adapt to your specific role requirements",
      benefits: ["Real-time coding challenges", "Behavioral assessments", "Technical skill validation"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Deep insights into your hiring pipeline with actionable data and trends",
      benefits: ["Hiring funnel optimization", "Candidate quality metrics", "Team performance insights"]
    },
    {
      icon: Users,
      title: "Collaborative Hiring",
      description: "Streamlined workflow for teams to evaluate and decide on candidates together",
      benefits: ["Team feedback integration", "Interview scheduling", "Decision tracking"]
    },
    {
      icon: Clock,
      title: "Automated Workflows",
      description: "Reduce manual work with intelligent automation throughout the hiring process",
      benefits: ["Auto-screening", "Email notifications", "Status updates"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with compliance standards to protect sensitive data",
      benefits: ["SOC 2 compliant", "GDPR ready", "End-to-end encryption"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden">
      <ParallaxBackground />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <AnimatedSection className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Everything you need to revolutionize your hiring process and find the perfect talent
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-8">
            {features.map((feature, index) => (
              <AnimatedSection 
                key={index} 
                animationType={index % 2 === 0 ? "slideLeft" : "slideRight"}
                delay={index * 100}
              >
                <Card className="p-8 hover:shadow-xl transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <feature.icon className="h-12 w-12 text-purple-600 mr-4" />
                        <div>
                          <CardTitle className="text-2xl">{feature.title}</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-lg mb-6">
                        {feature.description}
                      </CardDescription>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center">
                            <Zap className="h-4 w-4 text-green-500 mr-2" />
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-8 aspect-square flex items-center justify-center">
                      <feature.icon className="h-24 w-24 text-purple-400" />
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Integration Section */}
        <AnimatedSection className="container mx-auto px-4 py-16" animationType="fadeIn">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Seamless Integrations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect SkillSync with your existing tools and workflows for a unified hiring experience
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {["Slack", "Teams", "Jira", "GitHub", "LinkedIn", "Workday"].map((integration, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                <Globe className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-600">{integration}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="container mx-auto px-4 py-16 text-center" animationType="fadeUp">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Experience These Features Today</h2>
            <p className="text-xl mb-8 opacity-90">Start your free trial and see the difference SkillSync makes</p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/demo">Try Free Demo</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Features;
