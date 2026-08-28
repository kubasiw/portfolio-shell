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
  titlePl: string;
  titleEn: string;
  descriptionPl: string;
  descriptionEn: string;
  hasDetailView: boolean;
}

// "serwisant" świadomie usunięty stąd (znaleziony martwy przy tej edycji, nie tylko pominięty) —
// jego wiersz w Indeksie projektów renderuje się jako zwykły `<div>`, nie `<button>`
// (project-rows.ts, `clickable: false`), więc `openSectionId` nigdy nie przyjmuje wartości
// 'serwisant'; ten wpis nie miał już żadnego konsumenta.
export const SECTIONS: Section[] = [
  {
    id: 'tour-guide',
    titlePl: 'Projekt 01 — Tour Guide',
    titleEn: 'Project 01 — Tour Guide',
    descriptionPl:
      'Planowanie tras podróży: Angular 22 + NestJS 11, mapy, pogoda, AI-owe opisy miejsc.',
    descriptionEn:
      'Trip planning: Angular 22 + NestJS 11, maps, weather, AI-written place descriptions.',
    hasDetailView: true,
  },
  {
    id: 'insider',
    titlePl: 'Projekt 02 — Insider',
    titleEn: 'Project 02 — Insider',
    descriptionPl: 'Insiderskie newsy dla małych inwestorów: Vue, AI-owe podsumowania rynku.',
    descriptionEn: 'Insider market news for small investors: Vue, AI-written market summaries.',
    hasDetailView: true,
  },
  {
    id: 'portfolio-shell',
    titlePl: 'Ten shell',
    titleEn: 'This shell',
    descriptionPl:
      'Mikrofrontendy przez Web Components, deploy z pusha na własny VPS, status per serwis.',
    descriptionEn:
      'Microfrontends via Web Components, deploy on push to my own VPS, status per service.',
    hasDetailView: true,
  },
  {
    // Sekcja "O mnie" ma teraz własną, zawsze widoczną `AboutSection` z paskiem 5 kafli
    // (`src/features/about/`, etap 5). Ten wpis zostaje w SECTIONS wyłącznie po to, żeby
    // SectionDetail dalej wiedziało, co pokazać po kliknięciu kafla działu (`AboutGallery`,
    // tytuł/opis w nagłówku widoku szczegółowego).
    id: 'about',
    titlePl: 'O mnie',
    titleEn: 'About',
    descriptionPl: 'Aktywność, wycieczki i podróże, fotografia, motoryzacja, jedzonko.',
    descriptionEn: 'Activity, trips and travel, photography, cars, food.',
    hasDetailView: true,
  },
];
