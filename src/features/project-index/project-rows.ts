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
export interface ProjectIndexRow {
  id: string;
  title: string;
  stack: string;
  note: string;
  image: { src: string; alt: string };
  status: string;
  // Odpowiednik `Section.hasDetailView`, ale nazwane inaczej tutaj — kontroluje czy wiersz jest
  // klikalny (handoff: "Sekcje bez widoku szczegółowego (Serwisant) nie są klikalne — wtedy bez
  // cursor: pointer"), nie samą obecność custom-komponentu w SectionDetail.
  clickable: boolean;
}

export const PROJECT_INDEX_ROWS: ProjectIndexRow[] = [
  {
    id: 'tour-guide',
    title: 'Tour Guide',
    stack: 'Angular 22 · NestJS 11 · Postgres',
    note: 'Planowanie tras: mapy Overpass, pogoda z Open-Meteo, AI-owe opisy miejsc. Fragment osadzony niżej jako żywy Web Component.',
    image: { src: mountainSilhouette, alt: 'Sylwetki gór o zmierzchu' },
    status: 'Wdrożone',
    clickable: true,
  },
  {
    id: 'insider',
    title: 'Insider',
    stack: 'Vue 3 · Express · Finnhub',
    note: 'Newsy rynkowe jako karty-stories, sugestie AI zawsze z plakietką „sugestia AI · nie porada”.',
    image: { src: insiderPreview, alt: 'Zrzut ekranu aplikacji Insider — pasek tickera i karta sugestii AI' },
    status: 'Wdrożone',
    clickable: true,
  },
  {
    id: 'serwisant',
    title: 'Serwisant',
    stack: 'React Native · Expo · OCR',
    note: 'Książka serwisowa i faktury ze zdjęć, timeline czynności z priorytetami. Fakt oddzielony wizualnie od szacunku AI.',
    image: { src: garage, alt: 'Silnik pod otwartą maską, obok butelka oleju' },
    status: 'W budowie',
    clickable: false,
  },
  {
    id: 'portfolio-shell',
    title: 'Ten shell',
    stack: 'React · Vite · Traefik · GHCR',
    note: 'Mikrofrontendy przez Web Components, deploy z pusha na własny VPS, status per serwis.',
    image: { src: interiorVolvo, alt: 'Wnętrze samochodu, kokpit i deska rozdzielcza' },
    status: 'Wdrożone',
    // Wiersz istnieje i jest klikalny (status "Wdrożone" jak reszta), ale nie ma jeszcze własnej
    // treści szczegółowej — SectionDetail pokaże swój istniejący placeholder "Treść w
    // przygotowaniu" (patrz sections.ts, wpis "portfolio-shell"). Świadomie NIE wymyślać tej
    // treści teraz — poza zakresem etapu 2 (pasek statystyk + indeks), do zrobienia osobno.
    clickable: true,
  },
];
