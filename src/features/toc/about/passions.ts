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
// sections.ts. Podpisy przepisane 2026-07-31 (pierwsza wersja, choć technicznie poprawna, czytała
// się jak generator cytatów motywacyjnych — ten sam dwuzdaniowy szablon "opis + refleksja" i te
// same słowa-wypełniacze w kółko; patrz PORTFOLIO_PLAN.md).
export const PASSIONS: Passion[] = [
  {
    id: 'aktywnosc',
    label: 'Aktywność',
    photos: [
      {
        src: cycling,
        alt: 'Kierownica roweru z GPS-em podczas nocnej jazdy, rozmyte światła w tle',
        caption: 'GPS na kierownicy, reszta miasta w rozmyciu.',
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
        caption: 'Ścieżka kończy się dokładnie tam, gdzie zaczyna morze.',
      },
      {
        src: mountainCow,
        alt: 'Mglista górska droga z krową stojącą przy płocie',
        caption: 'Krowa przy płocie patrzyła na mnie chyba bardziej zdziwiona niż ja na nią.',
      },
      {
        src: meBackWalk,
        alt: 'Sylwetka od tyłu na ścieżce przez śródziemnomorskie zarośla',
        caption: 'Więcej słońca niż cienia, więcej ciszy niż planu na ten dzień.',
      },
      {
        src: meBackLake,
        alt: 'Sylwetka w kapturze stojąca na pomoście nad jeziorem',
        caption: 'Pomost, zimny wieczór, kaptur jako jedyna obrona przed nastrojem.',
      },
      {
        src: narrowAlley,
        alt: 'Mały zaparkowany samochód w wąskiej śródziemnomorskiej uliczce',
        caption: 'Uliczka tak wąska, że zaparkowanie tu graniczy z odwagą.',
      },
      {
        src: sunsetBoat,
        alt: 'Łódź na tle zachodzącego słońca, sylwetka osoby na pierwszym planie',
        caption: 'Niebo odwaliło całą robotę scenografa, łódź tylko dopełniła kadr.',
      },
      {
        src: fruitMarket,
        alt: 'Stragan targowy z warkoczami czosnku i bananami',
        caption: 'Warkocze czosnku mówią o mieście więcej niż niejeden przewodnik.',
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
        caption: 'Bokeh zaplanowany starannie, reszta twarzy — trochę mniej.',
      },
      {
        src: catEye,
        alt: 'Demonstracja efektu cat-eye bokeh z rozmytym pierwszym planem',
        caption: 'Testowanie "cat-eye" bokeh — technika ważniejsza niż to, kto akurat pozował.',
      },
      {
        src: flowersInsects,
        alt: 'Bzygowate na dzikiej róży',
        caption: 'Bzygowaty gość złapany w locie, zanim zmienił zdanie.',
      },
      {
        src: myMate,
        alt: 'Ręka głaszcząca ulicznego kotka',
        caption: 'Kot zgodził się na sesję — ja tylko trzymałem aparat równo.',
      },
      {
        src: busStop,
        alt: 'Czarno-biała scena uliczna na przystanku autobusowym nocą',
        caption: 'Dwoje ludzi, jeden przystanek, zero wspólnej historii.',
      },
      {
        src: leafLight,
        alt: 'Autoportret spod korony drzewa w okularach przeciwsłonecznych, z ziarnem filmowym',
        caption: 'Ziarno i przebarwienia dodane celowo — nie telefon zawinił, tylko ja.',
      },
      {
        src: nightDrive,
        alt: 'Twarz oświetlona światłem z deski rozdzielczej, czarno-biały kadr nocą',
        caption: 'Deska rozdzielcza jako jedyny reflektor w tym kadrze.',
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
        caption: 'Butelka oleju pod ręką, sobota spisana na straty.',
      },
      {
        src: interiorVolvo,
        alt: 'Deska rozdzielcza z breloczkiem w kształcie samochodu',
        caption: 'Mały breloczek-samochodzik przy kluczykach, wciąż mnie rozśmiesza po latach.',
      },
      {
        src: vespa,
        alt: 'Pomarańczowa Vespa zaparkowana w wąskiej uliczce',
        caption: 'Pomarańczowa Vespa — wolniejsza niż wszystko inne w garażu, i szczerze olewa to.',
      },
      {
        src: parkedVan,
        alt: 'Ciemne Volvo kombi zaparkowane na trawie przy domku letniskowym',
        caption: 'To samo Volvo, tym razem bez zaglądania pod maskę.',
      },
      {
        src: shiftKnob,
        alt: 'Manualna dźwignia zmiany biegów we wnętrzu starego Volvo',
        caption: 'Manualna skrzynia, bo automat odbiera zbyt wiele frajdy.',
      },
      {
        src: alloyWheel,
        alt: 'Felga Volvo z bliska, w ostrym bocznym świetle',
        caption: 'Boczne światło pada tylko na połowę opony — druga połowa niech zostanie w cieniu.',
      },
      {
        src: redWheel,
        alt: 'Koło czerwonego Volvo nocą w świetle latarni',
        caption: 'Ten sam motyw co za dnia, zupełnie inny charakter po zmroku.',
      },
      {
        src: beetleDetail,
        alt: 'Tylne światło i błotnik miętowego Garbusa widziane przez szczelinę muru',
        caption: 'Cały samochód niepotrzebny, kiedy charakter mieści się w jednym tylnym świetle.',
      },
      {
        src: beetleDusk,
        alt: 'Garbus zaparkowany w wysokiej trawie o zmierzchu',
        caption: 'Garbus chowa się w trawie o zmierzchu, prawie skutecznie.',
      },
      {
        src: carReflection,
        alt: 'Odbicie klasycznego samochodu w szybie innego auta',
        caption: 'Jedno auto odbite w drugim — warstwa, której nie dało się zaplanować.',
      },
      {
        src: exhaustTip,
        alt: 'Końcówka wydechu na tle czerwonego zderzaka',
        caption: 'Wydech i terakota garażu w tle — więcej tu nie trzeba.',
      },
      {
        src: gasStation,
        alt: 'Czarne coupe na stacji benzynowej nocą',
        caption: 'Zwykłe tankowanie potraktowane jak sesja dla magazynu motoryzacyjnego.',
      },
      {
        src: scooterRefuel,
        alt: 'Tankowanie samochodu, wlew paliwa z bliska',
        caption: 'Wlew paliwa z bliska — nikt przy zdrowych zmysłach tego nie fotografuje.',
      },
      {
        src: manifoldGlow,
        alt: 'Rozgrzana komora silnika czerwonego auta',
        caption: 'Rozgrzana komora silnika, praca, którą zwykle widzi tylko mechanik.',
      },
      {
        src: turboWork,
        alt: 'Ręka w rękawiczce trzymająca wirnik turbosprężarki wyjęty z silnika',
        caption: 'Wirnik turbiny wyjęty własnoręcznie — warsztat mógł tym razem poczekać.',
      },
      {
        src: newCoilovers,
        alt: 'Nowy zestaw zawieszenia sportowego obok pudełka producenta',
        caption: 'Skrzynka z zawieszeniem na dywanie w salonie — lepszy prezent niż niejeden prawdziwy.',
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
        caption: 'Śniadanie sfotografowane, zanim zdążyło ostygnąć — priorytety jasne.',
      },
      {
        src: harborDessert,
        alt: 'Deser na tle portu z żaglówkami i spacerującymi ludźmi',
        caption: 'Deser w porcie, aparat w drugiej ręce, zawsze w zasięgu.',
      },
      {
        src: wineGlass,
        alt: 'Kieliszek czerwonego wina z góry w ostrym świetle',
        caption: 'Kieliszek wina, ostre boczne światło, reszta stołu nieważna.',
      },
      {
        src: espressoPour,
        alt: 'Espresso lejące się do szklanki w niebieskawej tonacji',
        caption: 'Espresso w chłodnym, niebieskawym świetle — smak drugorzędny wobec kadru.',
      },
      {
        src: fineDining,
        alt: 'Dwa dania z eleganckiej restauracji, zdjęte z góry',
        caption: 'Dwa dania z eleganckiej restauracji — widelec czekał, aparat był pierwszy.',
      },
      {
        src: scallopDish,
        alt: 'Przegrzebek zapiekany w muszli obok cząstki cytryny',
        caption: 'Przegrzebek w muszli, cytryna obok — talerz zamiast widoku za oknem.',
      },
      {
        src: steakBreakfast,
        alt: 'Stek z jajkiem sadzonym i kostką masła na desce',
        caption: 'Stek z jajkiem — śniadanie, które samo zgłosiło się do zdjęcia.',
      },
      {
        src: freshPizza,
        alt: 'Pizza prosto z pieca z przypalonymi brzegami',
        caption: 'Pizza prosto z pieca, brzegi jeszcze się dopiekają na zdjęciu.',
      },
      {
        src: openSandwich,
        alt: 'Kanapka z burgerem rozłożona na pół, widoczne warstwy',
        caption: 'Kanapka rozłożona na pół — przekrój ciekawszy niż całość.',
      },
      {
        src: burgerPrep,
        alt: 'Surowy kotlet, orzechy włoskie i pomidorki na desce do krojenia',
        caption: 'Składniki na desce, patelnia jeszcze zimna.',
      },
      {
        src: burgerShake,
        alt: 'Burger z jajkiem sadzonym obok szklanki koktajlu mlecznego',
        caption: 'Burger i koktajl mleczny — nie każde zdjęcie musi być z wakacji.',
      },
      {
        src: fruitSalad,
        alt: 'Zbliżenie na sałatkę owocową z orzechami włoskimi',
        caption: 'Sałatka owocowa z bliska — tak blisko, że liczy się już tylko tekstura.',
      },
      {
        src: coffeeDesk,
        alt: 'Kawa i drożdżówka na biurku obok laptopa z wykresami na ekranie',
        caption: 'Kawa i drożdżówka obok wykresów na ekranie — przerwa, która wygląda jak codzienność, bo nią jest.',
      },
    ],
  },
];
