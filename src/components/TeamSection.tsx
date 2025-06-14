
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail } from "lucide-react";

// Example team list (update as you wish)
const team = [
  {
    name: "Jane Lee",
    title: "Co-founder & CEO",
    bio: "Tech hiring visionary. Built scalable products at global SaaS unicorns.",
    email: "jane@skillsync.com",
    avatar: "/avatars/jane.png"
  },
  {
    name: "Marcus Kim",
    title: "Co-founder & CTO",
    bio: "AI architect. Led engineering at multiple Y Combinator startups.",
    email: "marcus@skillsync.com",
    avatar: "/avatars/marcus.png"
  },
  {
    name: "Tina Roy",
    title: "Lead Product Designer",
    bio: "Data-driven UX with a heart for hiring and inclusivity.",
    email: "tina@skillsync.com",
    avatar: "/avatars/tina.png"
  }
];

export default function TeamSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet the Team</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {team.map((member) => (
          <Card
            key={member.email}
            className="px-6 pt-8 pb-6 group bg-white/90 hover:shadow-2xl hover:scale-105 transition-transform duration-300 perspective-card"
            style={{ perspective: "600px" }}
          >
            <CardHeader className="flex items-center flex-col">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-24 h-24 rounded-full border-4 border-purple-200 mb-4 group-hover:shadow-lg group-hover:scale-110 transition duration-300"
              />
              <CardTitle className="text-lg">{member.name}</CardTitle>
              <CardDescription className="mb-1">{member.title}</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700 text-center">
              <p className="mb-3">{member.bio}</p>
              <div className="flex justify-center items-center gap-1 text-purple-600">
                <Mail className="w-4 h-4" />
                <span className="text-xs">{member.email}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <style>
        {`
        .perspective-card {
          transition: transform 0.45s cubic-bezier(.2,1,.2,1);
          will-change: transform;
        }
        .perspective-card:hover {
          transform: rotateY(5deg) scale(1.045);
        }
        `}
      </style>
    </section>
  );
}
