
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, Target, Heart, Award } from "lucide-react";

const About = () => {
  const team = [
    { name: "Sarah Chen", role: "CEO & Co-founder", bio: "Former VP of Engineering at TechCorp with 15+ years in AI and machine learning" },
    { name: "Marcus Rodriguez", role: "CTO & Co-founder", bio: "Ex-Google engineer specializing in large-scale systems and AI algorithms" },
    { name: "Emily Watson", role: "Head of Product", bio: "Product leadership experience at leading HR-tech companies" },
    { name: "David Kim", role: "Head of Engineering", bio: "Full-stack engineering leader with expertise in scalable platforms" }
  ];

  const values = [
    {
      icon: Users,
      title: "People First",
      description: "We believe great companies are built by great people. Our mission is to help organizations find and nurture the right talent."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in hiring technology, leveraging cutting-edge AI and machine learning."
    },
    {
      icon: Heart,
      title: "Empathy",
      description: "We understand the challenges of hiring and job searching. Our solutions are built with empathy for all stakeholders."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our product quality to our customer service."
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
            About SkillSync
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're on a mission to revolutionize hiring by making it more efficient, fair, and effective for everyone involved.
          </p>
        </AnimatedSection>

        {/* Story Section */}
        <AnimatedSection className="container mx-auto px-4 py-16" animationType="fadeIn">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-600 mb-6">
                  SkillSync was born out of frustration with traditional hiring processes. Our founders, Sarah and Marcus, 
                  experienced firsthand how broken and inefficient hiring could be - both as hiring managers and job seekers.
                </p>
                <p className="text-gray-600 mb-6">
                  After witnessing countless talented individuals overlooked due to biased or ineffective screening processes, 
                  and seeing companies struggle to find the right talent despite huge investments in recruiting, they knew there had to be a better way.
                </p>
                <p className="text-gray-600">
                  Founded in 2023, SkillSync combines cutting-edge AI technology with deep understanding of human psychology 
                  and organizational needs to create a hiring platform that truly works for everyone.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Company Timeline Visual</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Values Section */}
        <AnimatedSection className="container mx-auto px-4 py-16" animationType="slideUp">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Team Section */}
        <AnimatedSection className="container mx-auto px-4 py-16" animationType="fadeIn">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-purple-600">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Mission Section */}
        <AnimatedSection className="container mx-auto px-4 py-16" animationType="fadeUp">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                "To create a world where every person finds meaningful work that matches their skills and aspirations, 
                and every organization can build teams that drive innovation and growth. We believe technology should 
                enhance human potential, not replace human judgment."
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection className="container mx-auto px-4 py-16" animationType="slideUp">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10,000+", label: "Companies Trust Us" },
              { number: "500K+", label: "Candidates Matched" },
              { number: "70%", label: "Faster Hiring" },
              { number: "95%", label: "Customer Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="container mx-auto px-4 py-16 text-center" animationType="fadeIn">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl mb-8 opacity-90">Ready to be part of the hiring revolution?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/careers">View Open Positions</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;
