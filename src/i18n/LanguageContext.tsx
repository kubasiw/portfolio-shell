import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

export type Language = 'pl' | 'en';

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

// Kontekst, nie prop-drilling — realny wniosek właściciela ("przetłumacz sobie teksty i włącz
// przełącznik"): PL/EN dotyczy praktycznie każdego komponentu na stronie (hero, pasek statystyk,
// indeks projektów, band mikrofrontendu, szuflada statków, "O mnie", umiejętności, banner
// kontaktu, stopka, cały widok szczegółowy) — przeciąganie jednego propa przez tyle warstw byłoby
// wyraźnie gorsze niż jeden wspólny kontekst czytany bezpośrednio tam, gdzie jest potrzebny.
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pl');

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      toggleLanguage: () => setLanguage((prev) => (prev === 'pl' ? 'en' : 'pl')),
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}

// Skrót na najczęstszy przypadek: "tekst PL vs tekst EN" jednym wywołaniem, zamiast
// `language === 'pl' ? x : y` w każdym miejscu użycia. Dla danych z osobnych plików (passions.ts,
// skills-data.ts, notes.ts, project-rows.ts) pola same są kształtu `{ pl: string; en: string }` —
// ten hook czyta wtedy `t(field.pl, field.en)`, ten sam mechanizm, jedno źródło prawdy dla
// "którego języka teraz używamy".
export function useTranslate(): (pl: string, en: string) => string {
  const { language } = useLanguage();
  // useCallback, nie zwykła funkcja strzałkowa — kilka miejsc (App.tsx) trzyma `t` w tablicy
  // zależności useEffect; bez tego `t` byłby nową referencją przy każdym renderze, więc taki
  // efekt odpalałby się co render, nie tylko przy realnej zmianie języka.
  return useCallback((pl: string, en: string) => (language === 'pl' ? pl : en), [language]);
}
