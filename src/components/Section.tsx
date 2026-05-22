"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { type ReactNode } from "react";
import { STYLES } from "@/lib/constants";

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0,
    },
  },
};

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
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

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${STYLES.padding} max-w-7xl mx-auto relative z-0 ${className}`}
    >
      {id && (
        <span
          className={`block ${isMobile ? "pt-16" : "-mt-[100px] pb-[100px]"}`}
          id={id}
        >
          &nbsp;
        </span>
      )}
      {children}
    </motion.section>
  );
}
