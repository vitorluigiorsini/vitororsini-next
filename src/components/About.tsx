"use client";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { STYLES, services, aboutText } from "@/lib/constants";
import { useAppLanguageContext } from "@/contexts/LanguageContext";
import { Section } from "./Section";

function fadeIn(
  direction: string,
  type: string,
  delay: number,
  duration: number
): Variants {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { type, delay, duration, ease: "easeOut" } as Record<string, unknown>,
    },
  };
}

const textVariant: Variants = {
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay: 0 },
  },
};

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}

function ServiceCard({ index, title, icon }: ServiceCardProps) {
  return (
    <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-gray-900/60 backdrop-blur rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border border-white/5">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-text-primary text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

export function About() {
  const { t, tv } = useAppLanguageContext();

  return (
    <Section id="about">
      <motion.div variants={textVariant}>
        <p className={STYLES.sectionSubText}>{t(aboutText.title)}</p>
        <h2 className={STYLES.sectionHeadText}>{t(aboutText.subtitle)}</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-text-secondary max-w-3xl whitespace-pre-line"
      >
        {t(aboutText.about)}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={`service-${index}`}
            index={index}
            title={tv(service.title) as string}
            icon={service.icon}
          />
        ))}
      </div>
    </Section>
  );
}
