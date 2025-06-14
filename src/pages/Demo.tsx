
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Link } from "react-router-dom";
import { ArrowLeft, Play, Calendar, Users, BarChart3, Clock } from "lucide-react";

const Demo = () => {
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
            See SkillSync in Action
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience the power of AI-driven hiring with our interactive demo
          </p>
        </AnimatedSection>

        {/* Demo Options */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Interactive Demo */}
            <AnimatedSection animationType="slideLeft">
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <Play className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-2xl">Interactive Demo</CardTitle>
                  <CardDescription>
                    Try SkillSync yourself with our hands-on demo environment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <Users className="h-5 w-5 text-green-500 mr-3" />
                      <span>Browse sample candidates</span>
                    </li>
                    <li className="flex items-center">
                      <BarChart3 className="h-5 w-5 text-green-500 mr-3" />
                      <span>View analytics dashboard</span>
                    </li>
                    <li className="flex items-center">
                      <Clock className="h-5 w-5 text-green-500 mr-3" />
                      <span>Test assessment tools</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Launch Interactive Demo
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Scheduled Demo */}
            <AnimatedSection animationType="slideRight">
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <Calendar className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-2xl">Scheduled Demo</CardTitle>
                  <CardDescription>
                    Get a personalized demo tailored to your specific needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Work Email</Label>
                      <Input id="email" type="email" placeholder="Enter your work email" />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Enter your company name" />
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Schedule Demo Call
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>

        {/* Demo Features */}
        <AnimatedSection className="container mx-auto px-4 py-16" animationType="fadeIn">
          <h2 className="text-3xl font-bold text-center mb-12">What You'll See in the Demo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AI Matching",
                description: "Watch our AI analyze and match candidates to job requirements in real-time"
              },
              {
                title: "Assessment Tools",
                description: "Explore our comprehensive skill assessment and evaluation features"
              },
              {
                title: "Analytics Dashboard",
                description: "Dive into powerful hiring analytics and performance metrics"
              },
              {
                title: "Team Collaboration",
                description: "See how teams can collaborate seamlessly throughout the hiring process"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Video Demo Section */}
        <AnimatedSection className="container mx-auto px-4 py-16" animationType="fadeUp">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Watch SkillSync in Action</h2>
            <p className="text-gray-600 mb-8">
              Get a quick overview of our platform with this 3-minute product walkthrough
            </p>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <Play className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                  <span className="text-gray-600 text-lg">Product Demo Video</span>
                </div>
              </div>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Play Demo Video
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="container mx-auto px-4 py-16 text-center" animationType="fadeIn">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Hiring?</h2>
            <p className="text-xl mb-8 opacity-90">Start your free trial today and experience the difference</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/pricing">View Pricing</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600">
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Demo;
