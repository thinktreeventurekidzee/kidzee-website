import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Programs from "@/sections/Programs";
import Gallery from "@/sections/Gallery";
import WhatsAppButton from "@/components/WhatsAppButton";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import PosterShowcase from "@/sections/PosterShowcase";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <PosterShowcase />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}