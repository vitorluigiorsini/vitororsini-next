"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { STYLES, technologies, skillsText } from "@/lib/constants";
import { useAppLanguageContext } from "@/contexts/LanguageContext";
import { Section } from "./Section";

const textVariant: Variants = {
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay: 0 },
  },
};

export function Tech() {
  const { t } = useAppLanguageContext();

  return (
    <Section id="tech">
      <motion.div variants={textVariant}>
        <p className={STYLES.sectionSubText}>{t(skillsText.title)}</p>
        <h2 className={STYLES.sectionHeadText}>{t(skillsText.subtitle)}</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap mt-20 justify-center gap-20">
        {technologies.map((tech) => (
          <div
            className="w-20 h-20 flex-col gap-2 justify-center items-center text-center"
            key={tech.name}
          >
            <img src={tech.icon} alt={tech.name} />
            <p className={STYLES.sectionSubText}>{tech.name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
