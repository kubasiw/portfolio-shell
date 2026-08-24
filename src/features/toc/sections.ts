import contactCoverPhoto from '../../assets/about/old_phones.webp';
import insiderCoverPhoto from '../../assets/insider/insider_preview.webp';
import serwisantCoverPhoto from '../../assets/about/garage.webp';

// Grupy linków nagłówka (.masthead__nav) — "Projekty" podświetla naraz wszystkie sekcje z tą
// grupą, "O mnie"/"Kontakt" tylko swoją jedną. `Section.navGroup` dopuszcza też `null` (sekcja
// nigdy nie jest celem nawigacji) — bez aktualnego użycia (Umiejętności ma teraz własną, zawsze
// widoczną sekcję, patrz `src/features/skills/`, nie jest już wpisem w SECTIONS), zostaje w typie
// jako legalna opcja na przyszłość, nie do usunięcia tylko dlatego, że akurat nic z niej nie
// korzysta.
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
  // Renderowane w ProjectCard zaraz po .spec-plate__rows, przed opisem — tuż po stałej
  // wysokości wierszy zawsze wyrówna się co do piksela między kartami, niezależnie od długości
  // opisu/treści pod spodem (patrz .spec-plate--has-cover w Toc.css/ProjectCard.css). Dane tutaj,
  // nie w osobnej mapie w ProjectCard.tsx — karta nie musi znać żadnych konkretnych id sekcji.
  // `fit`/`position` domyślnie 'cover'/'center' (wypełnia całą ramkę) — `contain` tylko dla zdjęć
  // z własną, wbudowaną w kadr ramką (np. "O mnie" ma polaroidowy border wewnątrz samego pliku;
  // cover by go przycinał).
  // `zoom`/`panX` — dla przypadków, gdzie samo `position` nie wystarcza: przy proporcjach tej
  // ramki (przybliżony kwadrat) `cover` czasem skaluje zdjęcie dokładnie do szerokości ramki, więc
  // w poziomie nie ma żadnego luzu do przesunięcia. `zoom` (np. 1.15 = 115% szerokości) sztucznie
  // dokłada luz, `panX` (px, dodatnie = w prawo) przesuwa w jego obrębie.
  coverPhoto?: {
    src: string;
    alt: string;
    fit?: 'cover' | 'contain';
    position?: string;
    zoom?: number;
    panX?: number;
    // Stopnie, czysto dekoracyjne przekrzywienie kadru (np. jak pieczątka/wrzucone zdjęcie).
    rotate?: number;
  };
  // Kontakt: ContactLinks na karcie to już cała treść, zwykły opis nad nimi byłby powtórzeniem.
  hideDescription?: boolean;
  // Odblokowane, ale bez realnej treści pod spodem jeszcze (tylko opis) — dostają pieczątkę
  // "w budowie" w rogu. Usunąć, gdy dana sekcja dostanie realną zawartość.
  inProgress?: boolean;
}

export const SECTIONS: Section[] = [
  {
    id: 'tour-guide',
    title: 'Projekt 01 — Tour Guide',
    description:
      'Planowanie tras podróży: Angular 22 + NestJS 11, mapy, pogoda, AI-owe opisy miejsc.',
    navGroup: 'projects',
    hasDetailView: true,
    // Świadomie bez coverPhoto (2026-07-31, decyzja właściciela) — w przeciwieństwie do Insidera
    // kafelek zatrzymuje żywy <tour-guide-mini-map>, nie zamienia się na statyczny zrzut ekranu.
    // Zmieniło się tylko to, że "Zobacz cały projekt" otwiera teraz nowy widok szczegółów
    // (TourGuideDetail) zamiast nawigować bezpośrednio na tourguide.kubsiw.com — ten link żyje
    // teraz wewnątrz samego widoku.
  },
  {
    id: 'insider',
    title: 'Projekt 02 — Insider',
    description: 'Insiderskie newsy dla małych inwestorów: Vue, AI-owe podsumowania rynku.',
    navGroup: 'projects',
    hasDetailView: true,
    inProgress: true,
    // Realny zrzut ekranu (308×632, portretowy — pionowa karta-story), nie kadr specjalnie pod tę
    // ramkę. `position: 'center 15%'` faworyzuje górę kadru (wordmark "INSIDER" + pasek tickera —
    // najbardziej rozpoznawalny fragment), nie środek.
    coverPhoto: {
      src: insiderCoverPhoto,
      alt: 'Zrzut ekranu aplikacji Insider — pasek tickera i karta sugestii AI',
      position: 'center 15%',
    },
  },
  {
    id: 'serwisant',
    title: 'Projekt 03 — Serwisant',
    description: 'Asystent serwisowy samochodu: React Native, OCR książki serwisowej i faktur.',
    navGroup: 'projects',
    hasDetailView: false,
    inProgress: true,
    // Butelka oleju nad otwartą maską — jedno z "O mnie" zdjęć motoryzacyjnych, ponownie użyte
    // tu, bo trafia w temat wprost (żaden zrzut ekranu jeszcze nie istnieje, projekt bez
    // frontendowego widoku szczegółów na razie).
    coverPhoto: {
      src: serwisantCoverPhoto,
      alt: 'Silnik pod otwartą maską, obok butelka oleju',
      position: 'center 40%',
    },
  },
  {
    id: 'portfolio-shell',
    title: 'Ten shell',
    description: 'Mikrofrontendy przez Web Components, deploy z pusha na własny VPS, status per serwis.',
    navGroup: 'projects',
    // Wiersz w Indeksie projektów jest klikalny (project-index/project-rows.ts,
    // clickable: true), ale nie ma jeszcze własnej treści w SectionDetail (żaden branch
    // hasCustomDetail) — otwiera się z istniejącym placeholderem "Treść w przygotowaniu", tak
    // jak każda inna sekcja bez custom-widoku. Świadomie nie budować tej treści teraz.
    hasDetailView: true,
  },
  {
    // Bez coverPhoto (etap 5 redesignu "Atrament") — sekcja "O mnie" nie renderuje się już jako
    // kafelek pinboardu (Toc filtruje `id !== 'about'`, patrz Toc.tsx); ma teraz własną, zawsze
    // widoczną `AboutSection` z paskiem 5 kafli (`src/features/about/`). Ten wpis zostaje w
    // SECTIONS wyłącznie po to, żeby SectionDetail dalej wiedziało, co pokazać po kliknięciu
    // kafla działu (`AboutGallery`, tytuł/opis w nagłówku widoku szczegółowego).
    id: 'about',
    title: 'O mnie',
    description: 'Aktywność, wycieczki i podróże, fotografia, motoryzacja, jedzonko.',
    navGroup: 'about',
    hasDetailView: true,
  },
  {
    id: 'contact',
    title: 'Kontakt',
    description: 'E-mail, LinkedIn, GitHub — napisz, jeśli chcesz porozmawiać.',
    navGroup: 'contact',
    // Bez własnego pełnoekranowego widoku — ContactLinks bezpośrednio na kafelku to już cała
    // treść, "Zobacz →" prowadzące donikąd ponad to byłoby zbędne.
    hasDetailView: false,
    coverPhoto: {
      src: contactCoverPhoto,
      alt: 'Kilka starych telefonów komórkowych na tacy, obok kawa',
      position: 'center 40%',
      // Przy proporcjach tej ramki cover skaluje to zdjęcie dokładnie do jej szerokości — zero
      // luzu w poziomie do przesunięcia. zoom dokłada luz, panX przesuwa w prawo w jego obrębie.
      zoom: 1.3,
      panX: 0,
      rotate: 9,
    },
    hideDescription: true,
  },
];
