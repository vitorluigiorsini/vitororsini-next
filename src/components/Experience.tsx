"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { STYLES, experiences, experienceText } from "@/lib/constants";
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

interface ExperienceCardProps {
  experience: (typeof experiences)[number];
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  const { tv } = useAppLanguageContext();
  const translatedPoints = tv(experience.points) as string[];

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(10,15,28,0.6)",
        color: "#fff",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(255,255,255,0.1)" }}
      date={tv(experience.date) as string}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full p-1">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="object-cover"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-text-primary text-[1.5rem] font-bold">
          {tv(experience.title) as string}
        </h3>
        <p
          className="text-text-secondary text-[1rem] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {translatedPoints.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-text-secondary text-[0.875rem] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

export function Experience() {
  const { t } = useAppLanguageContext();

  return (
    <Section id="experience">
      <motion.div variants={textVariant}>
        <p className={STYLES.sectionSubText}>{t(experienceText.title)}</p>
        <h2 className={STYLES.sectionHeadText}>{t(experienceText.subtitle)}</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </Section>
  );
}
