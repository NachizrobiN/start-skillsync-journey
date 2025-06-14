
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Users, Heart, Zap, Globe } from "lucide-react";

const Careers = () => {
  const openings = [
    {
      title: "Senior Full Stack Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Join our engineering team to build the next generation of AI-powered hiring tools."
    },
    {
      title: "Product Manager - AI/ML",
      department: "Product",
      location: "New York, NY / Remote",
      type: "Full-time",
      description: "Lead product strategy for our AI and machine learning capabilities."
    },
    {
      title: "Senior Data Scientist",
      department: "Data Science",
      location: "Seattle, WA / Remote",
      type: "Full-time",
      description: "Design and implement machine learning models for candidate matching and assessment."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Austin, TX / Remote",
      type: "Full-time",
      description: "Create intuitive and delightful experiences for our hiring platform users."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Chicago, IL / Remote",
      type: "Full-time",
      description: "Help our enterprise customers achieve success with SkillSync platform."
    },
    {
      title: "Sales Development Representative",
      department: "Sales",
      location: "Boston, MA / Remote",
      type: "Full-time",
      description: "Generate new business opportunities and build relationships with prospects."
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance plus wellness stipend"
    },
    {
      icon: Zap,
      title: "Growth & Learning",
      description: "$2,000 annual learning budget and conference attendance support"
    },
    {
      icon: Globe,
      title: "Remote-First",
      description: "Work from anywhere with flexible hours and home office setup allowance"
    },
    {
      icon: Users,
      title: "Equity & Impact",
      description: "Meaningful equity package and the chance to shape the future of hiring"
    }
  ];

  const values = [
    "Diversity and inclusion are core to everything we do",
    "We believe in transparent communication and open feedback",
    "Innovation and experimentation drive our product development",
    "We prioritize work-life balance and employee wellbeing",
    "Continuous learning and growth are encouraged and supported"
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
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Help us revolutionize hiring and build the future of work. We're looking for passionate individuals who want to make a real impact.
          </p>
        </AnimatedSection>

        {/* Culture Section */}
        <AnimatedSection className="container mx-auto px-4 py-16" animationType="fadeIn">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Work at SkillSync?</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <ul className="space-y-4">
                  {values.map((value, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-600">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Team Culture Image</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Benefits Section */}
        <AnimatedSection className="container mx-auto px-4 py-16" animationType="slideUp">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits & Perks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
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

        {/* Open Positions */}
        <AnimatedSection className="container mx-auto px-4 py-16" animationType="fadeIn">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {openings.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="mt-4 md:mt-0">Apply Now</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Application Process */}
        <AnimatedSection className="container mx-auto px-4 py-16" animationType="slideLeft">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Hiring Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Application", description: "Submit your application and tell us about yourself" },
                { step: "2", title: "Screening", description: "Initial conversation with our talent team" },
                { step: "3", title: "Interviews", description: "Technical and cultural fit interviews with the team" },
                { step: "4", title: "Decision", description: "Final decision and offer within 5 business days" }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="font-semibold mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="container mx-auto px-4 py-16 text-center" animationType="fadeUp">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Don't See Your Perfect Role?</h2>
            <p className="text-xl mb-8 opacity-90">We're always looking for exceptional talent. Send us your resume!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Send Your Resume</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Careers;
