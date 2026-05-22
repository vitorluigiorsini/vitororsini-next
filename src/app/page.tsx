"use client";

import "@/lib/three-setup";
import { Navbar } from "@/components/Navbar";
import { MobileNavbar } from "@/components/MobileNavbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Tech } from "@/components/Tech";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StarsCanvas } from "@/components/StarsCanvas";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="relative bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <MobileNavbar />
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Projects />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
        <Footer />
      </div>
      <BackToTop />
    </div>
  );
}
