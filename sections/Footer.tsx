"use client";

import Button from "@/components/Buttom"; // ✅ FIXED
import { Phone, Globe, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa"; // ✅ Facebook from react-icons

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-400 text-white pt-12 pb-6">

      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-4 gap-10">

        {/* LEFT - BRAND */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            Kidzee Virgonagar
          </h2>

          <p className="text-white/90 text-sm leading-relaxed">
            Where little minds learn, play and grow into bright futures in a safe and joyful environment.
          </p>

          <p className="text-sm text-white/80">
            📍 Virgonagar, Aavalahalli, Bengaluru
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Explore</h3>

          <ul className="space-y-2 text-white/90">
            <li><a href="#about" className="hover:text-yellow-200 transition">About Us</a></li>
            <li><a href="#programs" className="hover:text-yellow-200 transition">Our Programs</a></li>
            <li><a href="#gallery" className="hover:text-yellow-200 transition">Gallery</a></li>
            <li><a href="#contact" className="hover:text-yellow-200 transition">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT + SOCIAL */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Connect With Us</h3>

          <div className="space-y-3 text-white/90 text-sm">

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <a href="tel:8088042991" className="hover:text-yellow-200 transition">
                8088042991
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaFacebook size={18} /> {/* ✅ FIXED */}
              <a
                href="https://www.facebook.com/KidzeeIndia"
                target="_blank"
                className="hover:text-yellow-200 transition"
              >
                KidzeeIndia
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaInstagram size={18} />
              <a
                href="https://www.instagram.com/kidzeeindia"
                target="_blank"
                className="hover:text-yellow-200 transition"
              >
                kidzeeindia
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Globe size={18} />
              <a
                href="https://www.kidzee.com"
                target="_blank"
                className="hover:text-yellow-200 transition"
              >
                kidzee.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>
                Cheemasandra, Virgonagar, Bengaluru - 560049
              </span>
              
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">
            Admissions Open 2026 🎓
          </h3>

          <p className="text-white/90 text-sm">
            Limited seats available. Connect with us today.
          </p>

          <div className="flex flex-col gap-3">
            <Button
              text="Enroll Now 🚀"
              href="#contact"
              variant="secondary"
            />

            <Button
              text="Chat on WhatsApp 💬"
              href="https://wa.me/918088042991"
              variant="whatsapp"
            />
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/30 mt-10 pt-4 text-center text-sm text-white/80">
        © 2026 Kidzee Virgonagar • All Rights Reserved
      </div>

    </footer>
  );
}