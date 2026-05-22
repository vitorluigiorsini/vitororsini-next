"use client";

import { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { SiKnowledgebase, SiLitiengine } from "react-icons/si";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useScrollSpy } from "@/hooks/useScrollSpy";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(max-width: 640px)").matches;
    }
    return false;
  });

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    function handleChange(e: MediaQueryListEvent) {
      setIsMobile(e.matches);
    }
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
}

export function MobileNavbar() {
  const isMobile = useIsMobile();
  const activeSection = useScrollSpy(["about", "experience", "projects", "contact"]);

  if (!isMobile) return null;

  return (
    <nav id="mobileNav">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo(0, 0);
        }}
        className={activeSection === "" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a href="#about" className={activeSection === "about" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a href="#experience" className={activeSection === "experience" ? "active" : ""}>
        <SiKnowledgebase />
      </a>
      <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
        <SiLitiengine />
      </a>
      <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}
