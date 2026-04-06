"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "About 🧸", href: "#about" },
    { name: "Programs 🎨", href: "#programs" },
    { name: "Gallery 📸", href: "#gallery" },
    { name: "Contact 📞", href: "#contact" },
  ];

  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm border-b border-white/20">
      <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">

        {/* 🔥 LOGO FINAL */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative flex items-center"
        >
          {/* OVAL BACKGROUND */}
          <div className="absolute -left-5 -top-3 w-44 h-16 bg-purple-350/60 rounded-full blur-lg"></div>
          <div className="absolute -left-1 -top-1 w-40 h-20 bg-white/80 rounded-full backdrop-blur-md shadow-inner"></div>

          {/* MAIN CONTENT */}
          <div className="relative z-10 flex items-center gap-4 px-5 py-3">

            {/* 🎈 ICON (ANIMATED) */}
            <motion.div
              animate={{
                y: [2, -6, 0],
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
           >
              
            </motion.div>

            {/* TEXT */}
            <div className="leading-tight select-none">

              <motion.h1
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="text-3xl md:text-4xl font-extrabold tracking-wide 
                text-yellow-300 
                drop-shadow-[0px_2px_12px_#4c1d95] 
                brightness-120"
              >
                KIDZEE
              </motion.h1>

              <p className="text-sm text-purple-700 font-semibold tracking-wide">
                Virgonagar ✨
              </p>

            </div>
          </div>

          {/* FLOATING DOT */}
          <motion.div
            animate={{ y: [0, -6, 0], opacity: [1, 0.6, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute right-1 top-2 w-2 h-2 bg-yellow-300 rounded-full"
          />
        </motion.div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleScroll(link.href)}
              className="relative group transition hover:text-indigo-600"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
            </button>
          ))}

          <motion.button
            onClick={() => handleScroll("#contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-6 py-2 rounded-full bg-yellow-400 text-black font-semibold shadow-lg overflow-hidden"
          >
            🎓 Admissions Open 2026
            <span className="absolute inset-0 bg-white/20 blur-lg opacity-0 hover:opacity-100 transition"></span>
          </motion.button>

        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          onMouseEnter ={() => setOpen(true)  }
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
            className="md:hidden bg-white shadow-lg px-5 py-6 space-y-5"
          >
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => handleScroll(link.href)}
                className="block text-gray-700 text-lg"
              >
                {link.name}
              </button>
            ))}

            <motion.button
              onClick={() => handleScroll("#contact")}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-yellow-400 py-3 rounded-full font-semibold shadow-md"
            >
              🎓 Start Admission 🚀
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}