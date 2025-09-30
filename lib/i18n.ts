import { createContext, useContext } from 'react';

export type Language = 'en' | 'zh' | 'ko' | 'ja';

export const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
}>({
  language: 'en',
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);