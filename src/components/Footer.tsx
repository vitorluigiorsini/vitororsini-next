"use client";

import { heroText } from "@/lib/constants";
import { useAppLanguageContext } from "@/contexts/LanguageContext";
import { Section } from "./Section";

export function Footer() {
  const { t } = useAppLanguageContext();

  return (
    <Section>
      <p className="flex justify-center pb-20 sm:pb-0">
        &copy; {t(heroText.name)}
      </p>
    </Section>
  );
}
