
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Users, Zap, Shield, Globe } from "lucide-react";

const Product = () => {
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
            SkillSync Product
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your hiring process with AI-powered skill assessment and seamless candidate matching
          </p>
        </AnimatedSection>

        {/* Product Overview */}
        <AnimatedSection className="container mx-auto px-4 py-16" animationType="fadeIn">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">All-in-One Hiring Platform</h2>
              <p className="text-gray-600 mb-6">
                SkillSync combines advanced AI algorithms with intuitive design to revolutionize how companies discover, assess, and hire talent.
              </p>
              <ul className="space-y-3">
                {[
                  "AI-powered skill matching",
                  "Real-time assessment tools",
                  "Seamless integration",
                  "Advanced analytics"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Product Demo Preview</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Key Benefits */}
        <AnimatedSection className="container mx-auto px-4 py-16" animationType="slideLeft">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose SkillSync</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Smart Matching", description: "AI-driven candidate matching based on skills and culture fit" },
              { icon: Zap, title: "Fast Hiring", description: "Reduce time-to-hire by up to 70% with automated processes" },
              { icon: Shield, title: "Secure Platform", description: "Enterprise-grade security with SOC 2 compliance" },
              { icon: Globe, title: "Global Reach", description: "Access talent from around the world with localized support" }
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="container mx-auto px-4 py-16 text-center" animationType="fadeUp">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Hiring?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of companies already using SkillSync</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/demo">Try Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Product;
