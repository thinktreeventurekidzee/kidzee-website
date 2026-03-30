"use client";

import { motion } from "framer-motion";
import Buttom from "@/components/Buttom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-500 via-pink-400 to-yellow-300 py-24 md:py-32 text-white">

      {/* Floating Shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-200 rounded-full blur-2xl opacity-40 animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-300 rounded-full blur-2xl opacity-40 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >

          {/* HEADLINE */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Where Little Minds <br />
            <span className="text-yellow-200">Grow Into Bright Futures 🌟</span>
          </h1>

          {/* SUBTEXT */}
          <p className="text-lg md:text-xl text-white/90">
            A joyful, safe and inspiring preschool where learning feels like play.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <a
              href="#contact"
              className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              Enrol Now 🚀
            </a>

            <a
              href="https://wa.me/918088042991"
              target="_blank"
              className="bg-green-500 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              Chat on WhatsApp 💬
            </a>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/images/kids.png"
            alt="Kids Learning"
            className="w-full max-w-md rounded-3xl shadow-2xl border-4 border-white"
          />
        </motion.div>

      </div>
    </section>
  );
}