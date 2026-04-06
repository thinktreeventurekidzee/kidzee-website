"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ✅ Use your real images
const images = [
  "/images/gallery4.png",
  "/images/gallery5.png",
  "/images/kids.png",
  "/images/kidzee-gallery-a.png",
  "/images/kidzee-gallery-b.png",
  "/images/kidzee-gallery-c.png",
  "/images/kidzee-gallery-d.png",
  "/images/kidzee-gallery-e.png",
   "/images/kidzee-gallery-f.png",
    "/images/kidzee-gallery-g.png",
     "/images/kidzee-gallery-h.png",
      "/images/kidzee-gallery-i.png",
       "/images/kidzee-gallery-j.png",
        "/images/kidzee-gallery-k.png",
         "/images/kidzee-gallery-l.png"
          

];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 bg-gradient-to-b from-white to-purple-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 text-center">

        {/* TITLE */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
        Inside Our Preschool Experience 🏫
        </h2>

        <p className="text-gray-600 mb-12">
         Explore how children learn, play, and grow in a fun and nurturing environment
        </p>

        {/* 🔥 AUTO SLIDING ROW */}
        <div className="relative overflow-hidden">

          <motion.div
            className="flex gap-6 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...images, ...images].map((src, index) => (
              <div
                key={index}
                className="relative w-64 h-44 md:w-80 md:h-56 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={src}
                  alt={`gallery-${index}`}
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 80vw, 300px"
                  priority={index < 2}
                />

                {/* Soft overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition"></div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}