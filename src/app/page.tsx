"use client";

import { Navbar } from "@/components/Navbar";
import { MobileNavbar } from "@/components/MobileNavbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Tech } from "@/components/Tech";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CanvasBackground } from "@/components/CanvasBackground";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <CanvasBackground />
      <div className="relative z-10">
        <MobileNavbar />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Projects />
        <Contact />
        <BackToTop />
        <Footer />
      </div>
    </>
  );
}
