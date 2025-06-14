
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Recruitment: 5 Trends to Watch",
      excerpt: "Explore how artificial intelligence is reshaping the recruitment landscape and what it means for HR professionals.",
      author: "Sarah Chen",
      date: "Dec 10, 2024",
      readTime: "5 min read",
      category: "AI & Technology"
    },
    {
      title: "Building Diverse Teams: Best Practices for Inclusive Hiring",
      excerpt: "Learn proven strategies to eliminate bias and create more inclusive hiring processes that attract diverse talent.",
      author: "Emily Watson",
      date: "Dec 8, 2024",
      readTime: "7 min read",
      category: "Diversity & Inclusion"
    },
    {
      title: "Remote Hiring: How to Assess Skills Without In-Person Interviews",
      excerpt: "Master the art of remote hiring with practical tips for evaluating candidates effectively in a virtual environment.",
      author: "Marcus Rodriguez",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      category: "Remote Work"
    },
    {
      title: "The ROI of Modern Hiring Tools: Measuring Success",
      excerpt: "Discover key metrics and methodologies to measure the return on investment of your hiring technology stack.",
      author: "David Kim",
      date: "Dec 3, 2024",
      readTime: "8 min read",
      category: "Analytics"
    },
    {
      title: "Candidate Experience: Why It Matters More Than Ever",
      excerpt: "Understanding how candidate experience impacts your employer brand and strategies to improve it.",
      author: "Sarah Chen",
      date: "Nov 28, 2024",
      readTime: "5 min read",
      category: "Candidate Experience"
    },
    {
      title: "Skill-Based Hiring: Moving Beyond Traditional Resumes",
      excerpt: "Learn how to implement skill-based hiring practices that focus on what candidates can do, not just where they've been.",
      author: "Emily Watson",
      date: "Nov 25, 2024",
      readTime: "6 min read",
      category: "Hiring Strategy"
    }
  ];

  const categories = ["All", "AI & Technology", "Diversity & Inclusion", "Remote Work", "Analytics", "Candidate Experience", "Hiring Strategy"];

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
            SkillSync Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Insights, trends, and best practices from the world of modern hiring and talent acquisition
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection className="container mx-auto px-4 py-8" animationType="fadeIn">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-gradient-to-r from-purple-600 to-pink-600" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </AnimatedSection>

        {/* Featured Post */}
        <AnimatedSection className="container mx-auto px-4 py-8" animationType="slideUp">
          <Card className="mb-16 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 aspect-video md:aspect-auto flex items-center justify-center">
                <span className="text-gray-500 text-lg">Featured Article Image</span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4 text-sm text-gray-500">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full mr-4">Featured</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{blogPosts[0].date}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <CardTitle className="text-2xl mb-4">{blogPosts[0].title}</CardTitle>
                <CardDescription className="text-lg mb-6">{blogPosts[0].excerpt}</CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">{blogPosts[0].author}</span>
                  </div>
                  <Button>Read More</Button>
                </div>
              </div>
            </div>
          </Card>
        </AnimatedSection>

        {/* Blog Grid */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <AnimatedSection 
                key={index} 
                animationType="fadeUp"
                delay={index * 100}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group cursor-pointer">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 aspect-video flex items-center justify-center">
                    <span className="text-gray-500">Article Image</span>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span className="bg-gray-100 px-2 py-1 rounded-full">{post.category}</span>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        <span className="mr-3">{post.author}</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <AnimatedSection className="container mx-auto px-4 py-16" animationType="fadeIn">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for the latest insights on hiring, AI, and workplace trends
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Subscribe
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="container mx-auto px-4 py-16 text-center" animationType="fadeUp">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Hiring?</h2>
            <p className="text-xl mb-8 opacity-90">Put these insights into practice with SkillSync</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/demo">Try Demo</Link>
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

export default Blog;
