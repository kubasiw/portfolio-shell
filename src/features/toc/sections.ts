export interface Section {
  id: string;
  title: string;
  description: string;
}

export const SECTIONS: Section[] = [
  {
    id: 'tour-guide',
    title: 'Projekt 01 — Tour Guide',
    description:
      'Planowanie tras podróży: Angular 22 + NestJS 11, mapy, pogoda, AI-owe opisy miejsc.',
  },
  {
    id: 'insider',
    title: 'Projekt 02 — Insider',
    description: 'Insiderskie newsy dla małych inwestorów: Vue, AI-owe podsumowania rynku.',
  },
  {
    id: 'serwisant',
    title: 'Projekt 03 — Serwisant',
    description: 'Asystent serwisowy samochodu: Angular, OCR książki serwisowej i faktur.',
  },
  {
    id: 'about',
    title: 'O mnie',
    description: 'Siłownia, bieganie, rower, hiking, fotografia, motoryzacja.',
  },
  {
    id: 'skills',
    title: 'Umiejętności',
    description: 'Stack, dobre praktyki i sposób pracy nad projektami w tym zestawie.',
  },
  {
    id: 'contact',
    title: 'Kontakt',
    description: 'E-mail, LinkedIn, GitHub — napisz, jeśli chcesz porozmawiać.',
  },
];
