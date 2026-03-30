"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Buttom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-xl font-bold text-indigo-600">
          Kidzee Virgonagar
        </h1>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative group transition"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-500 transition-all group-hover:w-full"></span>
            </a>
          ))}

          <Button text="Admissions Open 2026" href="#contact" />
        </nav>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center gap-1"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-black block"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-black block"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-black block"
          />
        </button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg px-5 py-6 space-y-4"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-gray-700 text-lg"
              >
                {link.name}
              </a>
            ))}

            <Button text="Admissions Open 2026" href="#contact" />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}