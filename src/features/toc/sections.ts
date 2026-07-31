import aboutCoverPhoto from '../../assets/about/leaf_light.webp';
import contactCoverPhoto from '../../assets/about/old_phones.webp';
import skillsCoverPhoto from '../../assets/about/coffee_desk.webp';

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
    hasDetailView: false,
  },
  {
    id: 'insider',
    title: 'Projekt 02 — Insider',
    description: 'Insiderskie newsy dla małych inwestorów: Vue, AI-owe podsumowania rynku.',
    navGroup: 'projects',
    hasDetailView: true,
    inProgress: true,
  },
  {
    id: 'serwisant',
    title: 'Projekt 03 — Serwisant',
    description: 'Asystent serwisowy samochodu: Angular, OCR książki serwisowej i faktur.',
    navGroup: 'projects',
    hasDetailView: false,
    inProgress: true,
  },
  {
    id: 'about',
    title: 'O mnie',
    description:
      'Aktywność, wycieczki i podróże, fotografia, motoryzacja, jedzonko. Podpisy pod zdjęciami napisało AI — podobno bardzo kreatywnie (ono tak twierdzi).',
    navGroup: 'about',
    hasDetailView: true,
    coverPhoto: {
      src: aboutCoverPhoto,
      alt: 'Autoportret spod korony drzewa, w okularach przeciwsłonecznych',
      // Zdjęcie ma własną, wbudowaną w kadr ramkę w stylu polaroidu — cover by ją przycinał.
      fit: 'contain',
      // Kosmetyczne 2% — contain zostawiało ~1-2px pustej przestrzeni po bokach (kwadratowe
      // zdjęcie w ramce odrobinę szerszej niż wyższej).
      zoom: 1.02,
    },
  },
  {
    id: 'skills',
    title: 'Umiejętności',
    description: 'Dziewięć lat w Angularze i architekturze frontendu korporacyjnego.',
    navGroup: null,
    hasDetailView: true,
    coverPhoto: {
      src: skillsCoverPhoto,
      alt: 'Kawa i deser na biurku, w tle monitory z kodem',
      // 65% -> 50% poszło w złą stronę (na localhost widoczne niżej, nie wyżej) — teoria o
      // kierunku object-position okazała się myląca, korekta w przeciwną stronę względem 65%.
      position: 'center 85%',
    },
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
