import breakfast from '../../../assets/about/breakfast.webp';
import catEye from '../../../assets/about/cat_eye.webp';
import coupleSea from '../../../assets/about/couple_sea.webp';
import cycling from '../../../assets/about/cycling.webp';
import flowersInsects from '../../../assets/about/flowers_insects.webp';
import garage from '../../../assets/about/garage.webp';
import interiorVolvo from '../../../assets/about/interior_volvo.webp';
import meBackLake from '../../../assets/about/me_back_lake.webp';
import meBackWalk from '../../../assets/about/me_back_walk.webp';
import mountainCow from '../../../assets/about/mountain_cow.webp';
import myMate from '../../../assets/about/my_mate.webp';
import vespa from '../../../assets/about/vespa.webp';

export interface Photo {
  src: string;
  alt: string;
  caption: string;
}

export interface Passion {
  id: string;
  label: string;
  // Pierwsze zdjęcie = kafelek reprezentatywny w siatce (wariant B z PORTFOLIO_PLAN.md, punkt f).
  // Puste (brak zdjęć) = pasja bez jeszcze dosłanych zdjęć, dostaje layout "w budowie".
  photos: Photo[];
}

// Kolejność i treść zgodne z opisem sekcji "O mnie" w sections.ts oraz finalnym mapowaniem
// zdjęć na pasje w PORTFOLIO_PLAN.md (punkt f Fazy 3.5).
export const PASSIONS: Passion[] = [
  {
    id: 'silownia',
    label: 'Siłownia',
    photos: [],
  },
  {
    id: 'bieganie',
    label: 'Bieganie',
    photos: [],
  },
  {
    id: 'rower',
    label: 'Rower',
    photos: [
      {
        src: cycling,
        alt: 'Kierownica roweru z GPS-em podczas nocnej jazdy, rozmyte światła w tle',
        caption:
          'Nocna jazda, GPS na kierownicy prowadzi przez ciemność. Rozmyte światła miasta w tle — trasa liczy się bardziej niż cel.',
      },
    ],
  },
  {
    id: 'hiking',
    label: 'Hiking',
    photos: [
      {
        src: coupleSea,
        alt: 'Leśna ścieżka schodząca do morza o zmierzchu, dwie sylwetki',
        caption:
          'Ostatni odcinek ścieżki przez las, tuż przed morzem. Ten moment tuż przed zmierzchem, kiedy trasa już prawie sama się kończy.',
      },
      {
        src: mountainCow,
        alt: 'Mglista górska droga z krową stojącą przy płocie',
        caption:
          'Poranna mgła na szlaku gdzieś w górach. Krowa przy płocie patrzyła na mnie równie zaskoczona, jak ja na nią.',
      },
      {
        src: meBackWalk,
        alt: 'Sylwetka od tyłu na ścieżce przez śródziemnomorskie zarośla',
        caption:
          'Ścieżka przez śródziemnomorskie zarośla, więcej słońca niż cienia. Czasem najlepszy widok jest po prostu przed sobą.',
      },
      {
        src: meBackLake,
        alt: 'Sylwetka w kapturze stojąca na pomoście nad jeziorem',
        caption:
          'Pomost nad jeziorem, chłodny wieczór, kaptur naciągnięty. Cisza, którą trudno znaleźć gdzie indziej.',
      },
    ],
  },
  {
    id: 'fotografia',
    label: 'Fotografia',
    photos: [
      {
        src: breakfast,
        alt: 'Śniadanie sfotografowane z góry',
        caption:
          'Śniadanie sfotografowane z góry, zanim zdążyło wystygnąć. Czasem ćwiczenie z kompozycji zaczyna się przy stole.',
      },
      {
        src: flowersInsects,
        alt: 'Bzygowate na dzikiej róży',
        caption:
          'Bzygowate na dzikiej róży, złapane w locie. Detale, które łatwo przeoczyć bez aparatu w ręce.',
      },
      {
        src: myMate,
        alt: 'Ręka głaszcząca ulicznego kotka',
        caption: 'Uliczny kot, który akurat miał ochotę na towarzystwo. Najlepsze zdjęcia zwykle nie są planowane.',
      },
      {
        src: catEye,
        alt: 'Demonstracja efektu cat-eye bokeh z rozmytym pierwszym planem',
        caption:
          'Test efektu "cat-eye" bokeh — rozmyty pierwszy plan, ostre tło. Więcej zabawy technicznej niż samego kadru.',
      },
    ],
  },
  {
    id: 'motoryzacja',
    label: 'Motoryzacja',
    photos: [
      {
        src: garage,
        alt: 'Silnik pod otwartą maską, obok butelka oleju',
        caption: 'Otwarta maska, butelka oleju pod ręką. Czasem najlepsza sobota to ta spędzona w garażu.',
      },
      {
        src: interiorVolvo,
        alt: 'Deska rozdzielcza z breloczkiem w kształcie samochodu',
        caption:
          'Wnętrze, które znam na pamięć. Mały breloczek-samochodzik przy kluczykach — drobiazg, który zawsze rozśmiesza.',
      },
      {
        src: vespa,
        alt: 'Pomarańczowa Vespa zaparkowana w wąskiej uliczce',
        caption: 'Pomarańczowa Vespa zaparkowana w wąskiej uliczce. Nie każdy pojazd musi być szybki, żeby sprawiać frajdę.',
      },
    ],
  },
];
