import mountainSilhouette from '../../assets/about/mountain_silhouette.webp';
import insiderPreview from '../../assets/insider/insider_preview.webp';
import garage from '../../assets/about/garage.webp';
import interiorVolvo from '../../assets/about/interior_volvo.webp';

// Dane wierszy — z handoffu (design_handoff_landing_atrament/README.md, sekcja "4. Indeks
// projektów"), NIE z `../toc/sections.ts`. `note`/`stack` tutaj celowo różnią się treścią od
// `Section.description` tamtego pliku (inne, krótsze ujęcie dobrane pod ten układ) — potwierdzone
// bezpośrednim porównaniem z handoffem, nie przypadkowa duplikacja do scalenia. `id` musi się
// zgadzać z `Section.id` w sections.ts — to on napędza SectionDetail (jaki widok się otwiera) i
// musi mieć odpowiadający wpis w SECTIONS, żeby App/Toc mogły go tam znaleźć po otwarciu.
// `stack` bez wariantu EN — nazwy technologii (Angular 22, NestJS 11, ...) same w sobie się nie
// tłumaczą, tylko `·` jako separator, wspólny w obu językach.
export interface ProjectIndexRow {
  id: string;
  titlePl: string;
  titleEn: string;
  stack: string;
  notePl: string;
  noteEn: string;
  image: { src: string; altPl: string; altEn: string };
  statusPl: string;
  statusEn: string;
  // Odpowiednik `Section.hasDetailView`, ale nazwane inaczej tutaj — kontroluje czy wiersz jest
  // klikalny (handoff: "Sekcje bez widoku szczegółowego (Serwisant) nie są klikalne — wtedy bez
  // cursor: pointer"), nie samą obecność custom-komponentu w SectionDetail.
  clickable: boolean;
}

export const PROJECT_INDEX_ROWS: ProjectIndexRow[] = [
  {
    id: 'tour-guide',
    titlePl: 'Tour Guide',
    titleEn: 'Tour Guide',
    stack: 'Angular 22 · NestJS 11 · Postgres',
    notePl:
      'Planowanie tras: mapy Overpass, pogoda z Open-Meteo, AI-owe opisy miejsc. Fragment osadzony niżej jako żywy Web Component.',
    noteEn:
      'Trip planning: Overpass maps, Open-Meteo weather, AI-written place descriptions. A live fragment is embedded further down as a real Web Component.',
    image: {
      src: mountainSilhouette,
      altPl: 'Sylwetki gór o zmierzchu',
      altEn: 'Mountain silhouettes at dusk',
    },
    statusPl: 'Widget na żywo',
    statusEn: 'Live widget',
    clickable: true,
  },
  {
    id: 'insider',
    titlePl: 'Insider',
    titleEn: 'Insider',
    stack: 'Vue 3 · Express · Finnhub',
    notePl:
      'Newsy rynkowe jako karty-stories, sugestie AI zawsze z plakietką „sugestia AI · nie porada”.',
    noteEn:
      'Market news as story-style cards, AI suggestions always tagged "AI suggestion · not advice".',
    image: {
      src: insiderPreview,
      altPl: 'Zrzut ekranu aplikacji Insider — pasek tickera i karta sugestii AI',
      altEn: 'Screenshot of the Insider app — ticker bar and an AI suggestion card',
    },
    statusPl: 'Widget na żywo',
    statusEn: 'Live widget',
    clickable: true,
  },
  {
    id: 'serwisant',
    titlePl: 'Serwisant',
    titleEn: 'Serwisant',
    stack: 'React Native · Expo · OCR',
    notePl:
      'Książka serwisowa i faktury ze zdjęć, timeline czynności z priorytetami. Fakt oddzielony wizualnie od szacunku AI.',
    noteEn:
      'A service log and invoices straight from photos, a prioritized timeline of work done. Facts kept visually separate from AI estimates.',
    image: {
      src: garage,
      altPl: 'Silnik pod otwartą maską, obok butelka oleju',
      altEn: 'An engine under an open hood, a bottle of oil next to it',
    },
    statusPl: 'W budowie',
    statusEn: 'In progress',
    clickable: false,
  },
  {
    id: 'portfolio-shell',
    titlePl: 'Ten shell',
    titleEn: 'This shell',
    stack: 'React · Vite · Cloudflare Workers',
    notePl:
      'Mikrofrontendy przez Web Components, statyczny hosting za €0, deploy z pusha.',
    noteEn: 'Microfrontends via Web Components, static hosting for €0, deploy on push.',
    image: {
      src: interiorVolvo,
      altPl: 'Wnętrze samochodu, kokpit i deska rozdzielcza',
      altEn: 'A car interior, cockpit and dashboard',
    },
    statusPl: 'Wdrożone',
    statusEn: 'Live',
    // Wiersz istnieje i jest klikalny (status "Wdrożone" jak reszta), ale nie ma jeszcze własnej
    // treści szczegółowej — SectionDetail pokaże swój istniejący placeholder "Treść w
    // przygotowaniu" (patrz sections.ts, wpis "portfolio-shell"). Świadomie NIE wymyślać tej
    // treści teraz — poza zakresem etapu 2 (pasek statystyk + indeks), do zrobienia osobno.
    clickable: true,
  },
];
