"use client";

import { useEffect, useState } from "react";
import { navLinks, SOCIAL_LINKS } from "@/lib/constants";
import { useAppLanguageContext } from "@/contexts/LanguageContext";
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

export function Navbar() {
  const { toggleLanguage, languageOption, t } = useAppLanguageContext();
  const isMobile = useIsMobile();
  const activeSection = useScrollSpy(["about", "experience", "projects", "contact"]);

  return (
    <nav className="w-full flex h-[3.5rem] items-center px-4 sm:px-6 fixed top-0 z-20 bg-primary/90 backdrop-blur">
      <div className="w-full flex sm:justify-between justify-center items-center max-w-7xl mx-auto">
        <div className="w-full flex items-center justify-between sm:justify-start sm:gap-8">
          <div className="xs:w-auto w-full flex justify-start items-center gap-8">
            <button
              onClick={() => window.scrollTo(0, 0)}
              className="flex items-center gap-2 cursor-pointer"
              aria-label="Home"
            >
              <img src="/images/logo.png" alt="logo" className="w-9 h-9 object-contain" />
            </button>
            <div className="flex items-center xs:gap-3 gap-2">
              <button
                onClick={() =>
                  window.open(SOCIAL_LINKS.github, "_blank", "noopener")
                }
                className="opacity-60 hover:opacity-100 xs:h-7 xs:w-7 h-6 w-6 rounded-full flex justify-center items-center cursor-pointer"
                aria-label="GitHub"
              >
                <img src="/images/icon-github.png" alt="github" />
              </button>
              <button
                onClick={() =>
                  window.open(SOCIAL_LINKS.linkedin, "_blank", "noopener")
                }
                className="opacity-60 hover:opacity-100 xs:h-7 xs:w-7 h-6 w-6 rounded-full flex justify-center items-center cursor-pointer"
                aria-label="LinkedIn"
              >
                <img src="/images/icon-linkedin.png" alt="linkedin" />
              </button>
              <button
                onClick={() =>
                  window.open(SOCIAL_LINKS.whatsapp, "_blank", "noopener")
                }
                className="opacity-60 hover:opacity-100 xs:h-7 xs:w-7 h-6 w-6 rounded-full flex justify-center items-center cursor-pointer"
                aria-label="WhatsApp"
              >
                <img src="/images/icon-whatsapp.png" alt="whatsapp" />
              </button>
            </div>
          </div>
          <div className="flex gap-3 text-2xl sm:text-xl">
            <button
              onClick={languageOption === "en" ? toggleLanguage : undefined}
              className={
                languageOption === "pt-br"
                  ? "border-b-2 cursor-default"
                  : "cursor-pointer opacity-60 hover:opacity-100"
              }
            >
              🇧🇷
            </button>
            <button
              onClick={languageOption === "pt-br" ? toggleLanguage : undefined}
              className={
                languageOption === "en"
                  ? "border-b-2 cursor-default"
                  : "cursor-pointer opacity-60 hover:opacity-100"
              }
            >
              🇺🇸
            </button>
          </div>
        </div>
        {!isMobile && (
          <ul className="list-none flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={
                  activeSection === link.id
                    ? "text-white hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-200"
                    : "text-secondary hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-200"
                }
              >
                <a href={`#${link.id}`}>{t(link.title)}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
