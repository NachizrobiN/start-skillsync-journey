
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin, Clock, MessageCircle, Users, Headphones } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "General inquiries and support",
      contact: "support@skillsync.com",
      response: "Response within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      response: "Available 9AM - 6PM EST"
    },
    {
      icon: MessageCircle,
      title: "Sales Inquiries",
      description: "Questions about pricing and plans",
      contact: "sales@skillsync.com",
      response: "Response within 4 hours"
    },
    {
      icon: Users,
      title: "Partnerships",
      description: "Business development and partnerships",
      contact: "partnerships@skillsync.com",
      response: "Response within 48 hours"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Market Street, Suite 400\nSan Francisco, CA 94105",
      phone: "+1 (555) 123-4567"
    },
    {
      city: "New York",
      address: "456 Broadway, Floor 12\nNew York, NY 10013",
      phone: "+1 (555) 234-5678"
    },
    {
      city: "London",
      address: "789 King's Road\nLondon SW3 4NX, UK",
      phone: "+44 20 7123 4567"
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
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </AnimatedSection>

        {/* Contact Form & Info */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <AnimatedSection animationType="slideLeft">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you shortly
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company Name" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your needs..."
                      rows={5}
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Contact Methods */}
            <AnimatedSection animationType="slideRight">
              <div className="space-y-6">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Other Ways to Reach Us</h2>
                  <p className="text-gray-600">
                    Choose the method that works best for you
                  </p>
                </div>
                
                {contactMethods.map((method, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start">
                      <method.icon className="h-8 w-8 text-purple-600 mr-4 mt-1" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{method.title}</h3>
                        <p className="text-gray-600 mb-2">{method.description}</p>
                        <p className="font-medium text-purple-600 mb-1">{method.contact}</p>
                        <p className="text-sm text-gray-500">{method.response}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Office Locations */}
        <AnimatedSection className="container mx-auto px-4 py-16" animationType="fadeIn">
          <h2 className="text-3xl font-bold text-center mb-12">Our Offices</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {offices.map((office, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>{office.city}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 whitespace-pre-line mb-4">{office.address}</p>
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{office.phone}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* FAQ Quick Links */}
        <AnimatedSection className="container mx-auto px-4 py-16" animationType="slideUp">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Looking for Quick Answers?</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Button asChild variant="outline" size="lg">
                <Link to="/help-center">
                  <Headphones className="mr-2 h-5 w-5" />
                  Help Center
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/demo">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Live Chat
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Clock className="mr-2 h-5 w-5" />
                System Status
              </Button>
            </div>
            <p className="text-gray-600">
              Check out our comprehensive help center or start a live chat for immediate assistance
            </p>
          </div>
        </AnimatedSection>

        {/* Response Time */}
        <AnimatedSection className="container mx-auto px-4 py-16" animationType="fadeIn">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Average Response Time</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">&lt; 4 hours</p>
              <p className="text-green-700">
                We typically respond to all inquiries within 4 hours during business hours
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;
