"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Programs from "@/sections/Programs";
import Gallery from "@/sections/Gallery";
import WhatsAppButton from "@/components/WhatsAppButton";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import AnnouncementModal from "@/components/AnnouncementModal";
  



export default function Home() {

  // ✅ STATE
  const [open, setOpen] = useState(false);

  // ✅ AUTO OPEN AFTER 3 SEC (safe)
  useEffect(() => {
    // SSR safe check
    if (typeof window === "undefined") return;

    const closed = localStorage.getItem("announcementClosed");

    if (!closed) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* 🔥 Navbar with trigger */}
      <Navbar setOpen={setOpen} />

      {/* 🔥 Main Sections */}
      <Hero />
      <About />
      <Programs />
      <Gallery />
     
      <Contact />
      <Footer />

      {/* 🔥 Floating Button */}
      <WhatsAppButton />

      {/* 🔥 Announcement Modal */}
      <AnnouncementModal open={open} setOpen={setOpen} />
      
    </>
  );
}