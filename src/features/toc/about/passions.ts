import alloyWheel from '../../../assets/about/alloy_wheel.webp';
import beetleDetail from '../../../assets/about/beetle_detail.webp';
import beetleDusk from '../../../assets/about/beetle_dusk.webp';
import breakfast from '../../../assets/about/breakfast.webp';
import burgerPrep from '../../../assets/about/burger_prep.webp';
import burgerShake from '../../../assets/about/burger_shake.webp';
import busStop from '../../../assets/about/bus_stop.webp';
import carReflection from '../../../assets/about/car_reflection.webp';
import catEye from '../../../assets/about/cat_eye.webp';
import coffeeDesk from '../../../assets/about/coffee_desk.webp';
import coupleSea from '../../../assets/about/couple_sea.webp';
import cycling from '../../../assets/about/cycling.webp';
import espressoPour from '../../../assets/about/espresso_pour.webp';
import exhaustTip from '../../../assets/about/exhaust_tip.webp';
import fineDining from '../../../assets/about/fine_dining.webp';
import flowersInsects from '../../../assets/about/flowers_insects.webp';
import freshPizza from '../../../assets/about/fresh_pizza.webp';
import fruitMarket from '../../../assets/about/fruit_market.webp';
import fruitSalad from '../../../assets/about/fruit_salad.webp';
import garage from '../../../assets/about/garage.webp';
import gasStation from '../../../assets/about/gas_station.webp';
import harborDessert from '../../../assets/about/harbor_dessert.webp';
import interiorVolvo from '../../../assets/about/interior_volvo.webp';
import leafLight from '../../../assets/about/leaf_light.webp';
import manifoldGlow from '../../../assets/about/manifold_glow.webp';
import meBackLake from '../../../assets/about/me_back_lake.webp';
import meBackWalk from '../../../assets/about/me_back_walk.webp';
import mountainCow from '../../../assets/about/mountain_cow.webp';
import myMate from '../../../assets/about/my_mate.webp';
import narrowAlley from '../../../assets/about/narrow_alley.webp';
import newCoilovers from '../../../assets/about/new_coilovers.webp';
import nightDrive from '../../../assets/about/night_drive.webp';
import nightPortrait from '../../../assets/about/night_portrait.webp';
import openSandwich from '../../../assets/about/open_sandwich.webp';
import parkedVan from '../../../assets/about/parked_van.webp';
import redWheel from '../../../assets/about/red_wheel.webp';
import scallopDish from '../../../assets/about/scallop_dish.webp';
import scooterRefuel from '../../../assets/about/scooter_refuel.webp';
import shiftKnob from '../../../assets/about/shift_knob.webp';
import steakBreakfast from '../../../assets/about/steak_breakfast.webp';
import sunsetBoat from '../../../assets/about/sunset_boat.webp';
import turboWork from '../../../assets/about/turbo_work.webp';
import vespa from '../../../assets/about/vespa.webp';
import wineGlass from '../../../assets/about/wine_glass.webp';

export interface Photo {
  src: string;
  alt: string;
  caption: string;
}

export interface Passion {
  id: string;
  label: string;
  // Pierwsze zdjęcie = kafelek reprezentatywny w siatce (wariant B z PORTFOLIO_PLAN.md, punkt f).
  // Puste (brak zdjęć) = dział bez jeszcze dosłanych zdjęć, dostaje layout "w budowie".
  photos: Photo[];
}

// Taksonomia zmieniona 2026-07-29 z 6 wąskich pasji na 4 szersze działy, potem wydzielony 5. dział
// "Jedzonko" ze wszystkich zdjęć jedzenia/restauracji (patrz PORTFOLIO_PLAN.md, punkt f —
// uzasadnienie i pełne mapowanie zdjęć na działy). Kolejność zgodna z opisem sekcji "O mnie" w
// sections.ts.
export const PASSIONS: Passion[] = [
  {
    id: 'aktywnosc',
    label: 'Aktywność',
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
    id: 'wycieczki',
    label: 'Wycieczki i podróże',
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
      {
        src: narrowAlley,
        alt: 'Mały zaparkowany samochód w wąskiej śródziemnomorskiej uliczce',
        caption:
          'Wąska uliczka gdzieś na południu Europy, mały samochodzik zaparkowany między kamiennymi murami. Czasem najciekawszy kadr czeka tuż za rogiem, nie na liście atrakcji.',
      },
      {
        src: sunsetBoat,
        alt: 'Łódź na tle zachodzącego słońca, sylwetka osoby na pierwszym planie',
        caption:
          'Łódź wracająca o zachodzie słońca, sylwetki na tle rozżarzonego nieba. Te kilka minut dziennie, kiedy każde miejsce wygląda wyjątkowo.',
      },
      {
        src: fruitMarket,
        alt: 'Stragan targowy z warkoczami czosnku i bananami',
        caption:
          'Lokalny targ gdzieś w podróży — warkocze czosnku i banany zwisające nad skrzynkami owoców. Najlepszy sposób, żeby poczuć nowe miejsce, to zobaczyć, co ludzie tam jedzą.',
      },
    ],
  },
  {
    id: 'fotografia',
    label: 'Fotografia',
    photos: [
      {
        src: nightPortrait,
        alt: 'Czarno-biały nocny portret z rozmytymi światłami w tle',
        caption:
          'Autoportret nocą, w tle rozmyte światła miasta. Zabawa kontrastem i bokeh, nie dokumentacja wieczoru.',
      },
      {
        src: catEye,
        alt: 'Demonstracja efektu cat-eye bokeh z rozmytym pierwszym planem',
        caption:
          'Test efektu "cat-eye" bokeh — rozmyty pierwszy plan, ostre tło. Więcej zabawy technicznej niż samego kadru.',
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
        src: busStop,
        alt: 'Czarno-biała scena uliczna na przystanku autobusowym nocą',
        caption:
          'Przystanek nocą, dwóch nieznajomych, żadnej wspólnej historii. Prosta, uliczna scena, uchwycona na czarno-białej kliszy.',
      },
      {
        src: leafLight,
        alt: 'Autoportret spod korony drzewa w okularach przeciwsłonecznych, z ziarnem filmowym',
        caption:
          'Selfie spod korony drzewa, w okularach przeciwsłonecznych, z ziarnem i przebarwieniami dodanymi świadomie. Styl, nie usterka.',
      },
      {
        src: nightDrive,
        alt: 'Twarz oświetlona światłem z deski rozdzielczej, czarno-biały kadr nocą',
        caption:
          'Twarz oświetlona jedynie deską rozdzielczą, czarno-biały kadr z wnętrza samochodu nocą. Autoportret zamiast zdjęcia trasy.',
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
      {
        src: parkedVan,
        alt: 'Ciemne Volvo kombi zaparkowane na trawie przy domku letniskowym',
        caption:
          'Volvo zaparkowane na trawie przy domku letniskowym pod sosnami. To samo auto, tym razem z zewnątrz, nie od środka.',
      },
      {
        src: shiftKnob,
        alt: 'Manualna dźwignia zmiany biegów we wnętrzu starego Volvo',
        caption:
          'Manualna dźwignia zmiany biegów w kabinie starego Volvo, w świetle dnia. Wnętrze, w którym każdy przełącznik ma swoje miejsce od lat.',
      },
      {
        src: alloyWheel,
        alt: 'Felga Volvo z bliska, w ostrym bocznym świetle',
        caption: 'Felga Volvo z bliska, światło pada tylko na jeden bok opony. Detal, obok którego większość przejdzie obojętnie.',
      },
      {
        src: redWheel,
        alt: 'Koło czerwonego Volvo nocą w świetle latarni',
        caption:
          'Koło czerwonego Volvo nocą, opona i felga w ostrym świetle latarni. Ten sam motyw co w dzień, tylko w zupełnie innym nastroju.',
      },
      {
        src: beetleDetail,
        alt: 'Tylne światło i błotnik miętowego Garbusa widziane przez szczelinę muru',
        caption:
          'Tylne światło i błotnik miętowego Garbusa, ujęte przez wąską szczelinę muru. Nie trzeba pokazywać całego auta, żeby było widać charakter.',
      },
      {
        src: beetleDusk,
        alt: 'Garbus zaparkowany w wysokiej trawie o zmierzchu',
        caption:
          'Garbus zaparkowany w wysokiej trawie o zmierzchu, ledwo widoczny w ciemności. Nie każde auto trzeba fotografować w pełnym świetle.',
      },
      {
        src: carReflection,
        alt: 'Odbicie klasycznego samochodu w szybie innego auta',
        caption:
          'Odbicie starego auta w szybie drugiego samochodu, warstwa na warstwie. Czasem ciekawszy kadr powstaje przypadkiem, w odbiciu, nie wprost.',
      },
      {
        src: exhaustTip,
        alt: 'Końcówka wydechu na tle czerwonego zderzaka',
        caption:
          'Końcówka wydechu na tle czerwonego zderzaka i terakotowej posadzki garażu. Sam detal wystarczy, żeby rozpoznać, że to coś więcej niż zwykłe auto.',
      },
      {
        src: gasStation,
        alt: 'Czarne coupe na stacji benzynowej nocą',
        caption:
          'Czarne coupe na stacji benzynowej nocą, między dystrybutorami i gaśnicami. Zwykła chwila tankowania, potraktowana jak sesja zdjęciowa.',
      },
      {
        src: scooterRefuel,
        alt: 'Tankowanie samochodu, wlew paliwa z bliska',
        caption:
          'Tankowanie na stacji, wlew paliwa uchwycony z bliska, zamiast całego auta. Codzienna czynność, której nikt zwykle nie fotografuje.',
      },
      {
        src: manifoldGlow,
        alt: 'Rozgrzana komora silnika czerwonego auta',
        caption:
          'Rozgrzana komora silnika czerwonego auta, uchwycona pod maską. Praca, która rzadko trafia na zdjęcia, tu jest głównym tematem.',
      },
      {
        src: turboWork,
        alt: 'Ręka w rękawiczce trzymająca wirnik turbosprężarki wyjęty z silnika',
        caption:
          'Ręka w rękawiczce trzymająca wirnik turbosprężarki, wyjęty prosto z silnika. Naprawa, którą większość zleciłaby komuś innemu, tu zrobiona samodzielnie.',
      },
      {
        src: newCoilovers,
        alt: 'Nowy zestaw zawieszenia sportowego obok pudełka producenta',
        caption:
          'Nowy zestaw zawieszenia obok pudełka, na dywanie w salonie zamiast w warsztacie. Skrzynka z częściami potrafi cieszyć bardziej niż niejeden prezent.',
      },
    ],
  },
  {
    id: 'jedzonko',
    label: 'Jedzonko',
    photos: [
      {
        src: breakfast,
        alt: 'Śniadanie sfotografowane z góry',
        caption:
          'Śniadanie sfotografowane z góry, zanim zdążyło wystygnąć. Czasem ćwiczenie z kompozycji zaczyna się przy stole.',
      },
      {
        src: harborDessert,
        alt: 'Deser na tle portu z żaglówkami i spacerującymi ludźmi',
        caption:
          'Deser w porcie, w tle żaglówki i spacerujący turyści. Aparat zawsze gdzieś w zasięgu ręki, nawet przy deserze.',
      },
      {
        src: wineGlass,
        alt: 'Kieliszek czerwonego wina z góry w ostrym świetle',
        caption:
          'Kieliszek czerwonego wina z góry, światło wpadające pod ostrym kątem na obrus. Prosty kadr, w którym liczy się tylko światło i kolor.',
      },
      {
        src: espressoPour,
        alt: 'Espresso lejące się do szklanki w niebieskawej tonacji',
        caption:
          'Espresso lejące się do szklanki, całość w chłodnej, niebieskawej tonacji. Zabawa światłem i kolorem ważniejsza niż sama kawa.',
      },
      {
        src: fineDining,
        alt: 'Dwa dania z eleganckiej restauracji, zdjęte z góry',
        caption:
          'Dwa dania z eleganckiej restauracji, zdjęte z góry, zanim ktokolwiek zdążył sięgnąć po widelec. Kompozycja na talerzu potrafi być równie ciekawa jak krajobraz.',
      },
      {
        src: scallopDish,
        alt: 'Przegrzebek zapiekany w muszli obok cząstki cytryny',
        caption:
          'Przegrzebek zapiekany prosto w muszli, obok cząstka cytryny. Zbliżenie na talerz zamiast na widok za oknem.',
      },
      {
        src: steakBreakfast,
        alt: 'Stek z jajkiem sadzonym i kostką masła na desce',
        caption:
          'Stek z jajkiem sadzonym i kostką masła — śniadanie, które samo prosiło się o zdjęcie. Czasem najlepszy temat leży dosłownie na talerzu.',
      },
      {
        src: freshPizza,
        alt: 'Pizza prosto z pieca z przypalonymi brzegami',
        caption:
          'Pizza prosto z pieca, brzegi jeszcze przypalone od żaru. Zdjęcie zrobione szybciej, niż dania starczyło na stole.',
      },
      {
        src: openSandwich,
        alt: 'Kanapka z burgerem rozłożona na pół, widoczne warstwy',
        caption:
          'Kanapka rozłożona na pół, warstwa po warstwie widoczna w przekroju. Prosty temat, potraktowany jak martwa natura.',
      },
      {
        src: burgerPrep,
        alt: 'Surowy kotlet, orzechy włoskie i pomidorki na desce do krojenia',
        caption:
          'Surowy kotlet, orzechy włoskie i garść pomidorków ułożone na desce, zanim cokolwiek trafiło na patelnię. Czasem najciekawszy kadr to ten sprzed gotowania, nie po.',
      },
      {
        src: burgerShake,
        alt: 'Burger z jajkiem sadzonym obok szklanki koktajlu mlecznego',
        caption:
          'Burger z jajkiem sadzonym i szklanka koktajlu mlecznego, zdjęte prosto z talerza. Nie każde zdjęcie musi być z podróży, żeby było warte zrobienia.',
      },
      {
        src: fruitSalad,
        alt: 'Zbliżenie na sałatkę owocową z orzechami włoskimi',
        caption:
          'Sałatka owocowa z orzechami z bliska, tak blisko, że liczy się już tylko tekstura. Czasem obiekt przestaje być ważny, liczy się tylko kadr.',
      },
      {
        src: coffeeDesk,
        alt: 'Kawa i drożdżówka na biurku obok laptopa z wykresami na ekranie',
        caption:
          'Kawa i drożdżówka obok laptopa z rozświetlonymi wykresami w tle. Chwila przerwy uchwycona dokładnie tak, jak wygląda na co dzień.',
      },
    ],
  },
];
