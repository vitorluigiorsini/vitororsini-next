"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { TranslationPair } from "@/lib/constants";
import { t as translateUtil, tv as translateValueUtil } from "@/lib/utils";

interface LanguageContextValue {
  languageOption: string;
  toggleLanguage: () => void;
  t: (obj: TranslationPair) => string;
  tv: (value: unknown) => string | string[];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useAppLanguageContext() {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error(
      "useAppLanguageContext must be used within AppLanguageProvider"
    );
  return ctx;
}

function getInitialLanguage(): string {
  if (typeof window !== "undefined") {
    return window.sessionStorage.getItem("language") ?? "pt-br";
  }
  return "pt-br";
}

export function AppLanguageProvider({ children }: { children: ReactNode }) {
  const [languageOption, setLanguageOption] = useState(getInitialLanguage);

  const toggleLanguage = useCallback(() => {
    setLanguageOption((prev) => {
      const next = prev === "pt-br" ? "en" : "pt-br";
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem("language", next);
      }
      return next;
    });
  }, []);

  const translateText = useCallback(
    (obj: TranslationPair) => translateUtil(obj, languageOption),
    [languageOption]
  );

  const translateValue = useCallback(
    (value: unknown) => translateValueUtil(value, languageOption),
    [languageOption]
  );

  const contextValue = useMemo(
    () => ({
      languageOption,
      toggleLanguage,
      t: translateText,
      tv: translateValue,
    }),
    [languageOption, toggleLanguage, translateText, translateValue]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}
