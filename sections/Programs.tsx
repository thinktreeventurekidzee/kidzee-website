"use client";

import Card from "@/components/Card";
import { Baby, BookOpen, School, Clock, LucideIcon } from "lucide-react";

// ✅ Type define
type ProgramType = {
  title: string;
  age: string;
  desc: string;
  highlights: string[];
  icon: LucideIcon;
  gradient: string;
};

// ✅ Data
const programs: ProgramType[] = [
  {
    title: "Playgroup",
    age: "2–3 Years",
    desc: "A joyful first step into learning where children explore through play, music, and storytelling.",
    highlights: [
      "Play-based learning",
      "Social interaction",
      "Motor skill growth",
    ],
    icon: Baby,
    gradient: "from-yellow-300 to-yellow-500",
  },
  {
    title: "Nursery",
    age: "3–4 Years",
    desc: "A creative environment where curiosity grows through stories, art, and fun activities.",
    highlights: [
      "Creative expression",
      "Language development",
      "Confidence building",
    ],
    icon: BookOpen,
    gradient: "from-pink-300 to-pink-500",
  },
  {
    title: "Kindergarten",
    age: "4–5 Years",
    desc: "Preparing children for school with structured learning, communication, and problem-solving skills.",
    highlights: [
      "School readiness",
      "Communication skills",
      "Logical thinking",
    ],
    icon: School,
    gradient: "from-blue-300 to-indigo-500",
  },
  {
    title: "Day Care",
    age: "All Ages",
    desc: "A safe and nurturing space where children feel at home while learning and growing every day.",
    highlights: [
      "Safe environment",
      "Routine & discipline",
      "Caring staff",
    ],
    icon: Clock,
    gradient: "from-green-300 to-green-500",
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="py-24 md:py-32 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-5 text-center">

        {/* 🔥 HEADING */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 animate-slideUp">
          Our Learning Programs 🎨
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12 animate-slideUp">
          Designed to nurture curiosity, creativity, and confidence in every child.
        </p>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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