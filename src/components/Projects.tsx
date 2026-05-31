"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { STYLES, projects, projectsText } from "@/lib/constants";
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

interface ProjectCardProps {
  index: number;
  name: string;
  description: Record<string, string>;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
}

function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: ProjectCardProps) {
  const { tv } = useAppLanguageContext();

  return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <div className="bg-gray-900/60 backdrop-blur p-4 rounded-xl sm:w-[360px] w-full border border-white/5 flex flex-col h-[420px]">
          <div className="relative w-full h-[200px] rounded-xl overflow-hidden flex-shrink-0">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>

          <div className="mt-4 flex flex-col flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-text-primary font-bold text-xl">{name}</h3>
              <div className="flex justify-end m-2">
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="bg-black/50 hover:bg-black/70 p-1 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer transition-all duration-150"
                >
                  <img src="/images/github.png" alt="github" className="w-5 h-5" />
                </div>
              </div>
            </div>
            <p className="mt-2 text-text-sm text-text-sm line-clamp-3 flex-1">
              {tv(description) as string}
            </p>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={tag.name}
                className="text-xs text-text-secondary bg-gray-800/50 px-2 py-0.5 rounded"
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
  );
}

export function Projects() {
  const { t } = useAppLanguageContext();

  return (
    <Section id="projects">
      <motion.div variants={textVariant}>
        <p className={STYLES.sectionSubText}>{t(projectsText.title)}</p>
        <h2 className={STYLES.sectionHeadText}>{t(projectsText.subtitle)}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-text-secondary max-w-3xl"
        >
          {t(projectsText.projectsIntro)}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </Section>
  );
}
