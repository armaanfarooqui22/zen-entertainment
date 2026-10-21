"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "mr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (en: string, mr?: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (en) => en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("zen_preferred_lang") as Language | null;
    if (saved === "en" || saved === "mr") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("zen_preferred_lang", lang);
  };

  const toggleLanguage = () => {
    const next = language === "en" ? "mr" : "en";
    setLanguage(next);
  };

  const t = (en: string, mr?: string) => {
    if (language === "mr" && mr) return mr;
    return en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
