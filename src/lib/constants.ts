import { translations } from "./translations";
import type { TranslationPair, Translations } from "./translations";

export type { TranslationPair, Translations };

export const {
  navLinks,
  services,
  experiences,
  technologies,
  projects,
  heroText,
  CTAText,
  aboutText,
  experienceText,
  skillsText,
  projectsText,
  contactText,
} = translations;

export type NavLink = (typeof navLinks)[number];
export type Service = (typeof services)[number];
export type Experience = (typeof experiences)[number];
export type Technology = (typeof technologies)[number];
export type Project = (typeof projects)[number];

export const SOCIAL_LINKS = {
  github: "https://github.com/vitorluigiorsini/",
  linkedin: "https://www.linkedin.com/in/vitorluigiorsini/",
  whatsapp: "https://wa.me/5531993474431",
} as const;

export const CONTACT_INFO = {
  email: "vitorluigiorsini@gmail.com",
  authorName: "Vitor Orsini",
} as const;

export const SEO = {
  title: "Vitor Orsini | Portfolio",
  description:
    "Software Engineer specializing in TypeScript, React, and Node.js. Full-stack developer with expertise in serverless architecture and AWS cloud.",
} as const;

export const STYLES = {
  paddingX: "sm:px-8 px-4",
  paddingY: "sm:py-12 py-8",
  padding: "sm:px-8 px-4 sm:py-12 py-8",
  heroHeadText:
    "font-bold text-text-primary lg:text-[2.5rem] sm:text-[2rem] xs:text-[1.75rem] text-[1.5rem] lg:leading-[3.5rem] mt-4",
  heroSubText:
    "text-text-secondary font-medium lg:text-[1.75rem] sm:text-[1.5rem] xs:text-[1.25rem] text-[1rem] lg:leading-[2.5rem]",
  sectionHeadText:
    "text-text-primary font-bold md:text-[2rem] sm:text-[1.75rem] xs:text-[1.5rem] text-[1.25rem]",
  sectionSubText:
    "sm:text-[1rem] text-[0.875rem] text-text-secondary uppercase tracking-wider",
} as const;
