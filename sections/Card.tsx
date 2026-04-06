"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

// ✅ Props type define
type CardProps = {
  title: string;
  description: string;
  highlights?: string[];
  icon: LucideIcon;
  gradient: string;
};

export default function Card({
  title,
  description,
  highlights = [],
  icon: Icon,
  gradient,
}: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className={`p-6 rounded-3xl text-white shadow-xl bg-gradient-to-br ${gradient} relative overflow-hidden`}
    >
      {/* ICON */}
      <div className="mb-4">
        <Icon className="w-10 h-10" />
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-bold">{title}</h3>

      {/* DESC */}
      <p className="mt-2 text-sm text-white/90">
        {description}
      </p>

      {/* HIGHLIGHTS */}
      <ul className="mt-4 text-sm text-white/90 space-y-1">
        {highlights.map((point, i) => (
          <li key={i}>✔ {point}</li>
        ))}
      </ul>

      {/* GLOW */}
      <div className="absolute inset-0 bg-white/10 blur-2xl opacity-20"></div>
    </motion.div>
  );
}