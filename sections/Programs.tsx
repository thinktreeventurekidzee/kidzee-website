"use client";

import Card from "@/components/Card";
import { Baby, BookOpen, School, Clock } from "lucide-react";

const programs = [
  {
    title: "Playgroup",
    age: "2–3 Years",
    desc: "Fun-filled play-based learning to build early social skills.",
    icon: Baby,
    gradient: "from-yellow-300 to-yellow-500",
  },
  {
    title: "Nursery",
    age: "3–4 Years",
    desc: "Stories, music and activities for creative development.",
    icon: BookOpen,
    gradient: "from-pink-300 to-pink-500",
  },
  {
    title: "Kindergarten",
    age: "4–5 Years",
    desc: "Building confidence, communication and school readiness.",
    icon: School,
    gradient: "from-blue-300 to-indigo-500",
  },
  {
    title: "Day Care",
    age: "All Ages",
    desc: "Safe, caring and structured environment for your child.",
    icon: Clock,
    gradient: "from-green-300 to-green-500",
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-5 text-center">

        {/* TITLE */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          Our Fun Learning Programs 🎨
        </h2>

        {/* CARDS */}
        <div className="grid md:grid-cols-4 gap-8">

          {programs.map((item, index) => (
            <Card
              key={index}
              title={`${item.title} (${item.age})`}
              description={item.desc}
              icon={item.icon}
              gradient={item.gradient}
            />
          ))}

        </div>
      </div>
    </section>
  );
}