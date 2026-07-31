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
import dockLights from '../../../assets/about/dock_lights.webp';
import espressoPour from '../../../assets/about/espresso_pour.webp';
import exhaustTip from '../../../assets/about/exhaust_tip.webp';
import fineDining from '../../../assets/about/fine_dining.webp';
import flowersInsects from '../../../assets/about/flowers_insects.webp';
import freshPizza from '../../../assets/about/fresh_pizza.webp';
import fruitMarket from '../../../assets/about/fruit_market.webp';
import fruitSalad from '../../../assets/about/fruit_salad.webp';
import garage from '../../../assets/about/garage.webp';
import gasStation from '../../../assets/about/gas_station.webp';
import gymLegs from '../../../assets/about/gym_legs.webp';
import harborDessert from '../../../assets/about/harbor_dessert.webp';
import interiorVolvo from '../../../assets/about/interior_volvo.webp';
import leafLight from '../../../assets/about/leaf_light.webp';
import manifoldGlow from '../../../assets/about/manifold_glow.webp';
import meBackLake from '../../../assets/about/me_back_lake.webp';
import meBackWalk from '../../../assets/about/me_back_walk.webp';
import mountainCow from '../../../assets/about/mountain_cow.webp';
import mountainSilhouette from '../../../assets/about/mountain_silhouette.webp';
import mountainVillageDusk from '../../../assets/about/mountain_village_dusk.webp';
import myMate from '../../../assets/about/my_mate.webp';
import narrowAlley from '../../../assets/about/narrow_alley.webp';
import newCoilovers from '../../../assets/about/new_coilovers.webp';
import nightDrive from '../../../assets/about/night_drive.webp';
import nightPortrait from '../../../assets/about/night_portrait.webp';
import oilChange from '../../../assets/about/oil_change.webp';
import openSandwich from '../../../assets/about/open_sandwich.webp';
import parkedVan from '../../../assets/about/parked_van.webp';
import redWheel from '../../../assets/about/red_wheel.webp';
import scallopDish from '../../../assets/about/scallop_dish.webp';
import scooterRefuel from '../../../assets/about/scooter_refuel.webp';
import shiftKnob from '../../../assets/about/shift_knob.webp';
import snowyPeaks from '../../../assets/about/snowy_peaks.webp';
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
// sections.ts. Podpisy przepisane dwa razy 2026-07-31: pierwsza wersja czytała się jak generator
// cytatów motywacyjnych (dwuzdaniowy szablon opis+refleksja); druga, obecna wersja idzie za
// realnym przykładem właściciela — krótko, z markowym żargonem, czasem z "=", bez sztywnego
// szablonu (patrz PORTFOLIO_PLAN.md). 6 nowych zdjęć dołączonych tego samego dnia z
// shell-photos/ (GPS w EXIF jednego z nich, oil_change/IMG_4462.heic, usunięty przy konwersji do
// WebP — sharp domyślnie nie kopiuje metadanych).
export const PASSIONS: Passion[] = [
  {
    id: 'aktywnosc',
    label: 'Aktywność',
    photos: [
      {
        src: cycling,
        alt: 'Kierownica roweru z GPS-em podczas nocnej jazdy, rozmyte światła w tle',
        caption: 'Wahoo na sterach, korba w głowie ;)',
      },
      {
        src: gymLegs,
        alt: 'Obciążenie na łańcuchu przy nogach podczas ćwiczenia w domu, na ozdobnym dywanie',
        caption: 'Jak dipy to tylko na dywanie z 80s ;)',
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
        caption: 'Las się kończy, morze zaczyna.',
      },
      {
        src: mountainCow,
        alt: 'Mglista górska droga z krową stojącą przy płocie',
        caption: 'Krowa przy płocie = najbardziej zdziwiona istota w całych Tatrach.',
      },
      {
        src: meBackWalk,
        alt: 'Sylwetka od tyłu na ścieżce przez śródziemnomorskie zarośla',
        caption: 'Więcej słońca niż planu na ten dzień.',
      },
      {
        src: meBackLake,
        alt: 'Sylwetka w kapturze stojąca na pomoście nad jeziorem',
        caption: 'Lake chill...',
      },
      {
        src: narrowAlley,
        alt: 'Mały zaparkowany samochód w wąskiej śródziemnomorskiej uliczce',
        caption: 'Typowe intermarium.',
      },
      {
        src: sunsetBoat,
        alt: 'Łódź na tle zachodzącego słońca, sylwetka osoby na pierwszym planie',
        caption: 'Niebo zrobiło całą robotę, łódź się tylko podpisała.',
      },
      {
        src: fruitMarket,
        alt: 'Stragan targowy z warkoczami czosnku i bananami',
        caption: 'Czosnek w warkoczach — lepszy przewodnik niż niejeden Lonely Planet.',
      },
      {
        src: dockLights,
        alt: 'Girlanda lampek nad pomostem i jeziorem nocą',
        caption: 'Lampki nad pomostem, reszta wieczoru może poczekać.',
      },
      {
        src: mountainVillageDusk,
        alt: 'Górska wioska o zmierzchu, szczyty we mgle',
        caption: 'Podhalańska proza.',
      },
      {
        src: snowyPeaks,
        alt: 'Ośnieżone szczyty tatrzańskie nad lasem w pełnym słońcu',
        caption: 'Tatry w pełnym słońcu — pocztówka, która się nie starzeje.',
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
        caption: '10 lat bez wyroku.',
      },
      {
        src: catEye,
        alt: 'Demonstracja efektu cat-eye bokeh z rozmytym pierwszym planem',
        caption: 'Cat-eye bokeh — bo zwykłe rozmycie to za mało.',
      },
      {
        src: flowersInsects,
        alt: 'Bzygowate na dzikiej róży',
        caption: 'Kolejka ;)',
      },
      {
        src: myMate,
        alt: 'Ręka głaszcząca ulicznego kotka',
        caption: 'Nie ma takiego biegania! Poka jak pachnie noga!',
      },
      {
        src: busStop,
        alt: 'Czarno-biała scena uliczna na przystanku autobusowym nocą',
        caption: 'Dwoje ludzi, jeden przystanek, zero wspólnej historii.',
      },
      {
        src: leafLight,
        alt: 'Autoportret spod korony drzewa w okularach przeciwsłonecznych, z ziarnem filmowym',
        caption: 'Ziarno i przebarwienia = efekt, nie usterka.',
      },
      {
        src: nightDrive,
        alt: 'Twarz oświetlona światłem z deski rozdzielczej, czarno-biały kadr nocą',
        caption: 'Światła miasta w 940.',
      },
      {
        src: mountainSilhouette,
        alt: 'Minimalistyczna sylwetka gór o wschodzie słońca, warstwy mgły',
        caption: 'Gradient, ale prawdziwy.',
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
        caption: 'Butelka oleju pod ręką = sobota spisana na straty.',
      },
      {
        src: interiorVolvo,
        alt: 'Deska rozdzielcza z breloczkiem w kształcie samochodu',
        caption: '100% 90s i czerwona rekurencja ;)',
      },
      {
        src: vespa,
        alt: 'Pomarańczowa Vespa zaparkowana w wąskiej uliczce',
        caption: 'Pomarańczowa Vespa = piękna patyna na którą nie zasługiwaliśmy.',
      },
      {
        src: parkedVan,
        alt: 'Ciemne Volvo kombi zaparkowane na trawie przy domku letniskowym',
        caption: 'XC90 I ładnie się zestarzały, nie spodziewałem się :)',
      },
      {
        src: shiftKnob,
        alt: 'Manualna dźwignia zmiany biegów we wnętrzu starego Volvo',
        caption: '100% swedish vibe :)',
      },
      {
        src: alloyWheel,
        alt: 'Felga Volvo z bliska, w ostrym bocznym świetle',
        caption: 'Połowa opony w świetle, druga w cieniu — i dobrze.',
      },
      {
        src: redWheel,
        alt: 'Koło czerwonego Volvo nocą w świetle latarni',
        caption: 'To samo koło, zupełnie inny nastrój po zmroku.',
      },
      {
        src: beetleDetail,
        alt: 'Tylne światło i błotnik miętowego Garbusa widziane przez szczelinę muru',
        caption: 'Cały charakter Garbusa mieści się w jednym tylnym świetle.',
      },
      {
        src: beetleDusk,
        alt: 'Garbus zaparkowany w wysokiej trawie o zmierzchu',
        caption: 'South California :)',
      },
      {
        src: carReflection,
        alt: 'Odbicie klasycznego samochodu w szybie innego auta',
        caption: 'Volvo przez Volvo;',
      },
      {
        src: exhaustTip,
        alt: 'Końcówka wydechu na tle czerwonego zderzaka',
        caption: '3" => 2,5"',
      },
      {
        src: gasStation,
        alt: 'Czarne coupe na stacji benzynowej nocą',
        caption: 'Ot, prosię..',
      },
      {
        src: scooterRefuel,
        alt: 'Tankowanie samochodu, wlew paliwa z bliska',
        caption: 'Nikt przy zdrowych zmysłach tego nie fotografuje.',
      },
      {
        src: manifoldGlow,
        alt: 'Rozgrzana komora silnika czerwonego auta',
        caption: 'Komora silnika rozgrzana do czerwoności, dosłownie.',
      },
      {
        src: turboWork,
        alt: 'Ręka w rękawiczce trzymająca wirnik turbosprężarki wyjęty z silnika',
        caption: 'Wirnik turbiny wyjęty własnoręcznie — warsztat poczeka.',
      },
      {
        src: newCoilovers,
        alt: 'Nowy zestaw zawieszenia sportowego obok pudełka producenta',
        caption: 'Das Fahrwerk <3',
      },
      {
        src: oilChange,
        alt: 'Butelka oleju silnikowego trzymana nad otwartym silnikiem Volvo',
        caption: 'ExtraSpec Classic prosto w Volvo — klasyka do klasyka.',
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
        caption: 'Overhead shot, zanim ostygło.',
      },
      {
        src: harborDessert,
        alt: 'Deser na tle portu z żaglówkami i spacerującymi ludźmi',
        caption: 'Marina mode :)',
      },
      {
        src: wineGlass,
        alt: 'Kieliszek czerwonego wina z góry w ostrym świetle',
        caption: 'Golden hour, ale w kieliszku.',
      },
      {
        src: espressoPour,
        alt: 'Espresso lejące się do szklanki w niebieskawej tonacji',
        caption: 'Espresso.exe uruchomione ;)',
      },
      {
        src: fineDining,
        alt: 'Dwa dania z eleganckiej restauracji, zdjęte z góry',
        caption: 'Instagram tax pobrany.',
      },
      {
        src: scallopDish,
        alt: 'Przegrzebek zapiekany w muszli obok cząstki cytryny',
        caption: 'Przegrzebek, bez filozofii.',
      },
      {
        src: steakBreakfast,
        alt: 'Stek z jajkiem sadzonym i kostką masła na desce',
        caption: 'Białko na start dnia, bez przeprosin.',
      },
      {
        src: freshPizza,
        alt: 'Pizza prosto z pieca z przypalonymi brzegami',
        caption: 'Neapolitańska szkoła przypalania.',
      },
      {
        src: openSandwich,
        alt: 'Kanapka z burgerem rozłożona na pół, widoczne warstwy',
        caption: 'Bo oczywiście liczy się wnętrze ;)',
      },
      {
        src: burgerPrep,
        alt: 'Surowy kotlet, orzechy włoskie i pomidorki na desce do krojenia',
        caption: 'Mise en place, po naszemu.',
      },
      {
        src: burgerShake,
        alt: 'Burger z jajkiem sadzonym obok szklanki koktajlu mlecznego',
        caption: 'Cheat day, ale z klasą.',
      },
      {
        src: fruitSalad,
        alt: 'Zbliżenie na sałatkę owocową z orzechami włoskimi',
        caption: 'Zoom na witaminy.',
      },
      {
        src: coffeeDesk,
        alt: 'Kawa i drożdżówka na biurku obok laptopa z wykresami na ekranie',
        caption: 'Deadline i cukier.',
      },
    ],
  },
];
