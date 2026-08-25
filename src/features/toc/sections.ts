// Etap 6 redesignu "Atrament" (2026-08-24) usunął ostatnią sekcję renderowaną przez stary
// pinboard (ProjectCard, teraz usunięty) — "contact" dostał własny, zawsze widoczny
// `ContactBanner` (`src/features/contact/`), tak jak wcześniej "about"/"skills" (etap 5) i
// "projects" (etap 2). SECTIONS teraz służy wyłącznie jednemu celowi: SectionDetail (widok
// szczegółowy otwierany po kliknięciu wiersza Indeksu projektów albo kafla działu w
// AboutSection) musi wiedzieć, jaki tytuł/opis pokazać i czy w ogóle jest co pokazać
// (`hasDetailView`). Stąd `Section` stracił `navGroup`/`coverPhoto`/`hideDescription`/
// `inProgress` — wszystkie służyły wyłącznie już nieistniejącemu ProjectCard/pinboardowi.
export interface Section {
  id: string;
  title: string;
  description: string;
  hasDetailView: boolean;
}

export const SECTIONS: Section[] = [
  {
    id: 'tour-guide',
    title: 'Projekt 01 — Tour Guide',
    description:
      'Planowanie tras podróży: Angular 22 + NestJS 11, mapy, pogoda, AI-owe opisy miejsc.',
    hasDetailView: true,
  },
  {
    id: 'insider',
    title: 'Projekt 02 — Insider',
    description: 'Insiderskie newsy dla małych inwestorów: Vue, AI-owe podsumowania rynku.',
    hasDetailView: true,
  },
  {
    id: 'serwisant',
    title: 'Projekt 03 — Serwisant',
    description: 'Asystent serwisowy samochodu: React Native, OCR książki serwisowej i faktur.',
    // Bez własnego widoku szczegółowego jeszcze — patrz project-index/project-rows.ts
    // (clickable: false), wiersz w Indeksie projektów nie jest klikalny.
    hasDetailView: false,
  },
  {
    id: 'portfolio-shell',
    title: 'Ten shell',
    description:
      'Mikrofrontendy przez Web Components, deploy z pusha na własny VPS, status per serwis.',
    // Wiersz w Indeksie projektów jest klikalny (project-index/project-rows.ts,
    // clickable: true), ale nie ma jeszcze własnej treści w SectionDetail (żaden branch
    // hasCustomDetail) — otwiera się z istniejącym placeholderem "Treść w przygotowaniu", tak
    // jak każda inna sekcja bez custom-widoku. Świadomie nie budować tej treści teraz.
    hasDetailView: true,
  },
  {
    // Sekcja "O mnie" ma teraz własną, zawsze widoczną `AboutSection` z paskiem 5 kafli
    // (`src/features/about/`, etap 5). Ten wpis zostaje w SECTIONS wyłącznie po to, żeby
    // SectionDetail dalej wiedziało, co pokazać po kliknięciu kafla działu (`AboutGallery`,
    // tytuł/opis w nagłówku widoku szczegółowego).
    id: 'about',
    title: 'O mnie',
    description: 'Aktywność, wycieczki i podróże, fotografia, motoryzacja, jedzonko.',
    hasDetailView: true,
  },
];
