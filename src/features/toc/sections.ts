// Grupy linków nagłówka (.masthead__nav) — "Projekty" podświetla naraz wszystkie sekcje z tą
// grupą, "O mnie"/"Kontakt" tylko swoją jedną. `null` = sekcja nigdy nie jest celem nawigacji
// (dotyczy dziś tylko "skills" — nagłówek nie ma linku "Umiejętności").
export type NavTarget = 'projects' | 'about' | 'contact';

export interface Section {
  id: string;
  title: string;
  description: string;
  navGroup: NavTarget | null;
  // Faza 3.5, punkt e — tylko sekcje "treściowe" (nie projekty, które mają własną, dopasowaną
  // zawartość wprost w karcie: widget/link dla tour-guide, sam opis+pieczątka na razie dla
  // insider/serwisant) dostają wejście do pełnoekranowego widoku.
  hasDetailView: boolean;
}

export const SECTIONS: Section[] = [
  {
    id: 'tour-guide',
    title: 'Projekt 01 — Tour Guide',
    description:
      'Planowanie tras podróży: Angular 22 + NestJS 11, mapy, pogoda, AI-owe opisy miejsc.',
    navGroup: 'projects',
    hasDetailView: false,
  },
  {
    id: 'insider',
    title: 'Projekt 02 — Insider',
    description: 'Insiderskie newsy dla małych inwestorów: Vue, AI-owe podsumowania rynku.',
    navGroup: 'projects',
    hasDetailView: false,
  },
  {
    id: 'serwisant',
    title: 'Projekt 03 — Serwisant',
    description: 'Asystent serwisowy samochodu: Angular, OCR książki serwisowej i faktur.',
    navGroup: 'projects',
    hasDetailView: false,
  },
  {
    id: 'about',
    title: 'O mnie',
    description:
      'Aktywność, wycieczki i podróże, fotografia, motoryzacja, jedzonko. Podpisy pod zdjęciami napisało AI — podobno bardzo kreatywnie (ono tak twierdzi).',
    navGroup: 'about',
    hasDetailView: true,
  },
  {
    id: 'skills',
    title: 'Umiejętności',
    description: 'Stack, dobre praktyki i sposób pracy nad projektami w tym zestawie.',
    navGroup: null,
    hasDetailView: true,
  },
  {
    id: 'contact',
    title: 'Kontakt',
    description: 'E-mail, LinkedIn, GitHub — napisz, jeśli chcesz porozmawiać.',
    navGroup: 'contact',
    hasDetailView: true,
  },
];
