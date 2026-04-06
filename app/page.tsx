import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Programs from "@/sections/Programs";
import Gallery from "@/sections/Gallery";
import WhatsAppButton from "@/components/WhatsAppButton";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}