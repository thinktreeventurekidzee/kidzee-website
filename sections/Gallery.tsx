"use client";

import { motion } from "framer-motion";

const images = [
  "/images/Gallery.png",
  "/images/Gallery1.png",
  "/images/Gallery2.png",
  "/images/Gallery3.png",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 text-center">

        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Our Gallery
        </h2>

        <div className="grid md:grid-cols-4 gap-4">

          {images.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-2xl shadow-md"
            >
              <img
                src={src}
                alt="gallery"
                className="w-full h-60 object-cover"
              />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}