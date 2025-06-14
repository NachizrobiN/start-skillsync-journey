
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Book, MessageCircle, Video, Users, Settings, BarChart3 } from "lucide-react";

const HelpCenter = () => {
  const categories = [
    {
      icon: Users,
      title: "Getting Started",
      description: "Learn the basics of SkillSync and set up your account",
      articles: 12
    },
    {
      icon: Settings,
      title: "Account Management",
      description: "Manage your profile, team settings, and preferences",
      articles: 8
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Understanding your hiring metrics and reports",
      articles: 15
    },
    {
      icon: MessageCircle,
      title: "Assessments",
      description: "Creating and managing skill assessments",
      articles: 10
    },
    {
      icon: Book,
      title: "API Documentation",
      description: "Technical documentation for developers",
      articles: 20
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      articles: 25
    }
  ];

  const popularArticles = [
    "How to create your first job posting",
    "Setting up automated screening workflows",
    "Understanding candidate scoring algorithms",
    "Integrating with your existing ATS",
    "Managing team permissions and roles",
    "Customizing assessment templates",
    "Interpreting analytics dashboard",
    "Troubleshooting common issues"
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
            Help Center
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Find answers, get support, and learn how to make the most of SkillSync
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              placeholder="Search for articles, guides, or topics..." 
              className="pl-12 py-4 text-lg border-2 border-gray-200 focus:border-purple-500"
            />
          </div>
        </AnimatedSection>

        {/* Quick Access */}
        <AnimatedSection className="container mx-auto px-4 py-8" animationType="fadeIn">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Support
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/demo">
                <Video className="mr-2 h-5 w-5" />
                Watch Tutorials
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Book className="mr-2 h-5 w-5" />
              API Docs
            </Button>
          </div>
        </AnimatedSection>

        {/* Categories */}
        <AnimatedSection className="container mx-auto px-4 py-16" animationType="slideUp">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <category.icon className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="group-hover:text-purple-600 transition-colors">
                    {category.title}
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-500">
                    {category.articles} articles
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Popular Articles */}
        <AnimatedSection className="container mx-auto px-4 py-16" animationType="fadeIn">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Articles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {popularArticles.map((article, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="group-hover:text-purple-600 transition-colors">{article}</span>
                      <ArrowLeft className="h-4 w-4 text-gray-400 transform rotate-180 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Support Options */}
        <AnimatedSection className="container mx-auto px-4 py-16" animationType="slideLeft">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Need More Help?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MessageCircle className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Live Chat</CardTitle>
                  <CardDescription>Get instant help from our support team</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Start Chat</Button>
                  <p className="text-sm text-gray-500 mt-2">Available 9AM - 6PM EST</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Book className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Email Support</CardTitle>
                  <CardDescription>Send us a detailed message and we'll respond soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full" variant="outline">
                    <Link to="/contact">Send Email</Link>
                  </Button>
                  <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Community Forum</CardTitle>
                  <CardDescription>Connect with other SkillSync users</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">Join Community</Button>
                  <p className="text-sm text-gray-500 mt-2">1000+ active members</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* Status Page */}
        <AnimatedSection className="container mx-auto px-4 py-16" animationType="fadeIn">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">System Status</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-green-700 font-medium">All Systems Operational</span>
              </div>
              <p className="text-green-600 text-sm">Last updated: 2 minutes ago</p>
            </div>
            <Button variant="outline">View Status Page</Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default HelpCenter;
