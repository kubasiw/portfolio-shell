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
  altPl: string;
  altEn: string;
  captionPl: string;
  captionEn: string;
}

export interface Passion {
  id: string;
  labelPl: string;
  labelEn: string;
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
// szablonu (patrz PORTFOLIO_PLAN.md). Angielskie podpisy (dodane przy tłumaczeniu całej strony,
// realny feedback właściciela: "przetłumacz sobie teksty i włącz przełącznik") trzymają się tego
// samego, krótkiego/meme'owego tonu — nie dosłowne tłumaczenie zdanie-po-zdaniu, tam gdzie
// dosłowność zabiłaby żart (np. "Ot, prosię.." — polska ironiczna gwara, nie coś do przełożenia
// słowo w słowo).
export const PASSIONS: Passion[] = [
  {
    id: 'aktywnosc',
    labelPl: 'Aktywność',
    labelEn: 'Activity',
    photos: [
      {
        src: cycling,
        altPl: 'Kierownica roweru z GPS-em podczas nocnej jazdy, rozmyte światła w tle',
        altEn: 'A bike handlebar with a GPS unit during a night ride, blurred lights behind',
        captionPl: 'Wahoo na sterach, korba w głowie ;)',
        captionEn: 'Wahoo on the bars, gears in my head ;)',
      },
      {
        src: gymLegs,
        altPl: 'Obciążenie na łańcuchu przy nogach podczas ćwiczenia w domu, na ozdobnym dywanie',
        altEn: 'A chain-loaded leg exercise at home, on a decorative rug',
        captionPl: 'Jak dipy to tylko na dywanie z 80s ;)',
        captionEn: 'If dips, only on an 80s rug ;)',
      },
    ],
  },
  {
    id: 'wycieczki',
    labelPl: 'Wycieczki i podróże',
    labelEn: 'Trips & travel',
    photos: [
      {
        src: coupleSea,
        altPl: 'Leśna ścieżka schodząca do morza o zmierzchu, dwie sylwetki',
        altEn: 'A forest path leading down to the sea at dusk, two silhouettes',
        captionPl: 'Las się kończy, morze zaczyna.',
        captionEn: 'The forest ends, the sea begins.',
      },
      {
        src: mountainCow,
        altPl: 'Mglista górska droga z krową stojącą przy płocie',
        altEn: 'A misty mountain road with a cow standing by a fence',
        captionPl: 'Krowa przy płocie = najbardziej zdziwiona istota w całych Tatrach.',
        captionEn: 'Cow by the fence = the most surprised creature in the whole Tatras.',
      },
      {
        src: meBackWalk,
        altPl: 'Sylwetka od tyłu na ścieżce przez śródziemnomorskie zarośla',
        altEn: 'A silhouette from behind on a path through Mediterranean scrub',
        captionPl: 'Więcej słońca niż planu na ten dzień.',
        captionEn: 'More sun than plan for the day.',
      },
      {
        src: meBackLake,
        altPl: 'Sylwetka w kapturze stojąca na pomoście nad jeziorem',
        altEn: 'A hooded silhouette standing on a dock over a lake',
        captionPl: 'Lake chill...',
        captionEn: 'Lake chill...',
      },
      {
        src: narrowAlley,
        altPl: 'Mały zaparkowany samochód w wąskiej śródziemnomorskiej uliczce',
        altEn: 'A small car parked in a narrow Mediterranean alley',
        captionPl: 'Typowe intermarium.',
        captionEn: 'Classic Intermarium.',
      },
      {
        src: sunsetBoat,
        altPl: 'Łódź na tle zachodzącego słońca, sylwetka osoby na pierwszym planie',
        altEn: 'A boat against the setting sun, a silhouette in the foreground',
        captionPl: 'Niebo zrobiło całą robotę, łódź się tylko podpisała.',
        captionEn: 'The sky did all the work, the boat just signed it.',
      },
      {
        src: fruitMarket,
        altPl: 'Stragan targowy z warkoczami czosnku i bananami',
        altEn: 'A market stall with garlic braids and bananas',
        captionPl: 'Czosnek w warkoczach — lepszy przewodnik niż niejeden Lonely Planet.',
        captionEn: 'Braided garlic — a better guide than half of Lonely Planet.',
      },
      {
        src: dockLights,
        altPl: 'Girlanda lampek nad pomostem i jeziorem nocą',
        altEn: 'A string of lights over a dock and lake at night',
        captionPl: 'Lampki nad pomostem, reszta wieczoru może poczekać.',
        captionEn: 'Lights over the dock, the rest of the evening can wait.',
      },
      {
        src: mountainVillageDusk,
        altPl: 'Górska wioska o zmierzchu, szczyty we mgle',
        altEn: 'A mountain village at dusk, peaks in the mist',
        captionPl: 'Podhalańska proza.',
        captionEn: 'Podhale prose.',
      },
      {
        src: snowyPeaks,
        altPl: 'Ośnieżone szczyty tatrzańskie nad lasem w pełnym słońcu',
        altEn: 'Snow-capped Tatra peaks above the forest in full sun',
        captionPl: 'Tatry w pełnym słońcu — pocztówka, która się nie starzeje.',
        captionEn: 'The Tatras in full sun — a postcard that never gets old.',
      },
    ],
  },
  {
    id: 'fotografia',
    labelPl: 'Fotografia',
    labelEn: 'Photography',
    photos: [
      {
        src: nightPortrait,
        altPl: 'Czarno-biały nocny portret z rozmytymi światłami w tle',
        altEn: 'A black-and-white night portrait with blurred lights behind',
        captionPl: '10 lat bez wyroku.',
        captionEn: '10 years, no verdict.',
      },
      {
        src: catEye,
        altPl: 'Demonstracja efektu cat-eye bokeh z rozmytym pierwszym planem',
        altEn: 'A cat-eye bokeh effect with a blurred foreground',
        captionPl: 'Cat-eye bokeh — bo zwykłe rozmycie to za mało.',
        captionEn: "Cat-eye bokeh — because plain blur wasn't enough.",
      },
      {
        src: flowersInsects,
        altPl: 'Bzygowate na dzikiej róży',
        altEn: 'Hoverflies on a wild rose',
        captionPl: 'Kolejka ;)',
        captionEn: "Line's forming ;)",
      },
      {
        src: myMate,
        altPl: 'Ręka głaszcząca ulicznego kotka',
        altEn: 'A hand petting a street cat',
        captionPl: 'Nie ma takiego biegania! Poka jak pachnie noga!',
        captionEn: "No running away now! Let's see how that paw smells!",
      },
      {
        src: busStop,
        altPl: 'Czarno-biała scena uliczna na przystanku autobusowym nocą',
        altEn: 'A black-and-white street scene at a bus stop at night',
        captionPl: 'Dwoje ludzi, jeden przystanek, zero wspólnej historii.',
        captionEn: 'Two people, one bus stop, zero shared history.',
      },
      {
        src: leafLight,
        altPl: 'Autoportret spod korony drzewa w okularach przeciwsłonecznych, z ziarnem filmowym',
        altEn: 'A self-portrait under a tree canopy in sunglasses, with film grain',
        captionPl: 'Ziarno i przebarwienia = efekt, nie usterka.',
        captionEn: 'Grain and discoloration = a feature, not a bug.',
      },
      {
        src: nightDrive,
        altPl: 'Twarz oświetlona światłem z deski rozdzielczej, czarno-biały kadr nocą',
        altEn: 'A face lit by dashboard light, a black-and-white night frame',
        captionPl: 'Światła miasta w 940.',
        captionEn: 'City lights at ISO 940.',
      },
      {
        src: mountainSilhouette,
        altPl: 'Minimalistyczna sylwetka gór o wschodzie słońca, warstwy mgły',
        altEn: 'A minimal mountain silhouette at sunrise, layers of mist',
        captionPl: 'Gradient, ale prawdziwy.',
        captionEn: 'A gradient, but a real one.',
      },
    ],
  },
  {
    id: 'motoryzacja',
    labelPl: 'Motoryzacja',
    labelEn: 'Cars',
    photos: [
      {
        src: garage,
        altPl: 'Silnik pod otwartą maską, obok butelka oleju',
        altEn: 'An engine under an open hood, a bottle of oil next to it',
        captionPl: 'Butelka oleju pod ręką = sobota spisana na straty.',
        captionEn: 'Oil bottle within reach = Saturday written off.',
      },
      {
        src: interiorVolvo,
        altPl: 'Deska rozdzielcza z breloczkiem w kształcie samochodu',
        altEn: 'A dashboard with a car-shaped keychain',
        captionPl: '100% 90s i czerwona rekurencja ;)',
        captionEn: '100% 90s and red recursion ;)',
      },
      {
        src: vespa,
        altPl: 'Pomarańczowa Vespa zaparkowana w wąskiej uliczce',
        altEn: 'An orange Vespa parked in a narrow alley',
        captionPl: 'Pomarańczowa Vespa = piękna patyna na którą nie zasługiwaliśmy.',
        captionEn: "Orange Vespa = beautiful patina we didn't deserve.",
      },
      {
        src: parkedVan,
        altPl: 'Ciemne Volvo kombi zaparkowane na trawie przy domku letniskowym',
        altEn: 'A dark Volvo wagon parked on the grass by a summer cottage',
        captionPl: 'XC90 I ładnie się zestarzały, nie spodziewałem się :)',
        captionEn: "The XC90 I aged nicely, didn't expect that :)",
      },
      {
        src: shiftKnob,
        altPl: 'Manualna dźwignia zmiany biegów we wnętrzu starego Volvo',
        altEn: 'A manual shift knob inside an old Volvo',
        captionPl: '100% swedish vibe :)',
        captionEn: '100% swedish vibe :)',
      },
      {
        src: alloyWheel,
        altPl: 'Felga Volvo z bliska, w ostrym bocznym świetle',
        altEn: 'A Volvo alloy wheel up close, in harsh side light',
        captionPl: 'Połowa opony w świetle, druga w cieniu — i dobrze.',
        captionEn: 'Half the tire in light, the other in shadow — and that\'s fine.',
      },
      {
        src: redWheel,
        altPl: 'Koło czerwonego Volvo nocą w świetle latarni',
        altEn: 'A red Volvo\'s wheel at night under a streetlight',
        captionPl: 'To samo koło, zupełnie inny nastrój po zmroku.',
        captionEn: 'Same wheel, completely different mood after dark.',
      },
      {
        src: beetleDetail,
        altPl: 'Tylne światło i błotnik miętowego Garbusa widziane przez szczelinę muru',
        altEn: 'A mint-green Beetle\'s taillight and fender, seen through a gap in a wall',
        captionPl: 'Cały charakter Garbusa mieści się w jednym tylnym świetle.',
        captionEn: 'The whole character of a Beetle fits in one taillight.',
      },
      {
        src: beetleDusk,
        altPl: 'Garbus zaparkowany w wysokiej trawie o zmierzchu',
        altEn: 'A Beetle parked in tall grass at dusk',
        captionPl: 'South California :)',
        captionEn: 'South California :)',
      },
      {
        src: carReflection,
        altPl: 'Odbicie klasycznego samochodu w szybie innego auta',
        altEn: "A classic car's reflection in another car's window",
        captionPl: 'Volvo przez Volvo;',
        captionEn: 'Volvo through Volvo;',
      },
      {
        src: exhaustTip,
        altPl: 'Końcówka wydechu na tle czerwonego zderzaka',
        altEn: 'An exhaust tip against a red bumper',
        captionPl: '3" => 2,5"',
        captionEn: '3" => 2.5"',
      },
      {
        src: gasStation,
        altPl: 'Czarne coupe na stacji benzynowej nocą',
        altEn: 'A black coupe at a gas station at night',
        captionPl: 'Ot, prosię..',
        captionEn: 'Just a little piglet..',
      },
      {
        src: scooterRefuel,
        altPl: 'Tankowanie samochodu, wlew paliwa z bliska',
        altEn: 'Refueling a car, the fuel filler up close',
        captionPl: 'Nikt przy zdrowych zmysłach tego nie fotografuje.',
        captionEn: "Nobody in their right mind photographs this.",
      },
      {
        src: manifoldGlow,
        altPl: 'Rozgrzana komora silnika czerwonego auta',
        altEn: 'A red-hot engine bay of a red car',
        captionPl: 'Komora silnika rozgrzana do czerwoności, dosłownie.',
        captionEn: 'Engine bay glowing red-hot, literally.',
      },
      {
        src: turboWork,
        altPl: 'Ręka w rękawiczce trzymająca wirnik turbosprężarki wyjęty z silnika',
        altEn: "A gloved hand holding a turbocharger wheel pulled from an engine",
        captionPl: 'Wirnik turbiny wyjęty własnoręcznie — warsztat poczeka.',
        captionEn: 'Turbo wheel pulled out by hand — the garage can wait.',
      },
      {
        src: newCoilovers,
        altPl: 'Nowy zestaw zawieszenia sportowego obok pudełka producenta',
        altEn: "A new coilover suspension kit next to the manufacturer's box",
        captionPl: 'Das Fahrwerk <3',
        captionEn: 'Das Fahrwerk <3',
      },
      {
        src: oilChange,
        altPl: 'Butelka oleju silnikowego trzymana nad otwartym silnikiem Volvo',
        altEn: "A bottle of engine oil held over an open Volvo engine",
        captionPl: 'ExtraSpec Classic prosto w Volvo — klasyka do klasyka.',
        captionEn: 'ExtraSpec Classic straight into the Volvo — classic meets classic.',
      },
    ],
  },
  {
    id: 'jedzonko',
    labelPl: 'Jedzonko',
    labelEn: 'Food',
    photos: [
      {
        src: breakfast,
        altPl: 'Śniadanie sfotografowane z góry',
        altEn: 'Breakfast photographed from above',
        captionPl: 'Overhead shot, zanim ostygło.',
        captionEn: 'Overhead shot, before it went cold.',
      },
      {
        src: harborDessert,
        altPl: 'Deser na tle portu z żaglówkami i spacerującymi ludźmi',
        altEn: 'A dessert against a harbor with sailboats and people walking',
        captionPl: 'Marina mode :)',
        captionEn: 'Marina mode :)',
      },
      {
        src: wineGlass,
        altPl: 'Kieliszek czerwonego wina z góry w ostrym świetle',
        altEn: 'A glass of red wine from above in harsh light',
        captionPl: 'Golden hour, ale w kieliszku.',
        captionEn: 'Golden hour, but in a glass.',
      },
      {
        src: espressoPour,
        altPl: 'Espresso lejące się do szklanki w niebieskawej tonacji',
        altEn: 'Espresso pouring into a glass, bluish tone',
        captionPl: 'Espresso.exe uruchomione ;)',
        captionEn: 'Espresso.exe launched ;)',
      },
      {
        src: fineDining,
        altPl: 'Dwa dania z eleganckiej restauracji, zdjęte z góry',
        altEn: 'Two dishes from an upscale restaurant, shot from above',
        captionPl: 'Instagram tax pobrany.',
        captionEn: 'Instagram tax collected.',
      },
      {
        src: scallopDish,
        altPl: 'Przegrzebek zapiekany w muszli obok cząstki cytryny',
        altEn: 'A scallop baked in its shell next to a lemon wedge',
        captionPl: 'Przegrzebek, bez filozofii.',
        captionEn: 'Scallop, no philosophy.',
      },
      {
        src: steakBreakfast,
        altPl: 'Stek z jajkiem sadzonym i kostką masła na desce',
        altEn: 'A steak with a fried egg and a pat of butter on a board',
        captionPl: 'Białko na start dnia, bez przeprosin.',
        captionEn: 'Protein to start the day, no apologies.',
      },
      {
        src: freshPizza,
        altPl: 'Pizza prosto z pieca z przypalonymi brzegami',
        altEn: 'Pizza straight from the oven, charred edges',
        captionPl: 'Neapolitańska szkoła przypalania.',
        captionEn: 'Neapolitan school of char.',
      },
      {
        src: openSandwich,
        altPl: 'Kanapka z burgerem rozłożona na pół, widoczne warstwy',
        altEn: 'A burger sandwich split in half, showing its layers',
        captionPl: 'Bo oczywiście liczy się wnętrze ;)',
        captionEn: "Because obviously it's what's inside that counts ;)",
      },
      {
        src: burgerPrep,
        altPl: 'Surowy kotlet, orzechy włoskie i pomidorki na desce do krojenia',
        altEn: 'A raw patty, walnuts, and cherry tomatoes on a cutting board',
        captionPl: 'Mise en place, po naszemu.',
        captionEn: 'Mise en place, our way.',
      },
      {
        src: burgerShake,
        altPl: 'Burger z jajkiem sadzonym obok szklanki koktajlu mlecznego',
        altEn: 'A burger with a fried egg next to a milkshake',
        captionPl: 'Cheat day, ale z klasą.',
        captionEn: 'Cheat day, but with class.',
      },
      {
        src: fruitSalad,
        altPl: 'Zbliżenie na sałatkę owocową z orzechami włoskimi',
        altEn: 'A close-up of a fruit salad with walnuts',
        captionPl: 'Zoom na witaminy.',
        captionEn: 'Zooming in on vitamins.',
      },
      {
        src: coffeeDesk,
        altPl: 'Kawa i drożdżówka na biurku obok laptopa z wykresami na ekranie',
        altEn: 'Coffee and a pastry on a desk next to a laptop showing charts',
        captionPl: 'Deadline i cukier.',
        captionEn: 'Deadline and sugar.',
      },
    ],
  },
];

// Jedno źródło prawdy dla "ile zdjęć łącznie" — użyte w AboutSection.tsx i StatsBar.tsx (etap 5
// redesignu "Atrament"); wyliczone tutaj, przy samych danych, żeby oba miejsca nigdy nie mogły
// się rozjechać, tak jak rozjechał się wcześniej hardkodowany "44" z handoffu.
export function getTotalPhotoCount(): number {
  return PASSIONS.reduce((sum, passion) => sum + passion.photos.length, 0);
}
