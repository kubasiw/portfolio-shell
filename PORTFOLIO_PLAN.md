# Portfolio / Multi-app showcase — plan roboczy

Ten dokument jest **niezależny od repo `tour-guide`** — tour-guide jest tu traktowany jako jeden
z kilku projektów wchodzących w skład większej całości: portfolio-appki spinającej wszystko razem.
Status: brainstorming w toku, decyzje poniżej są robocze i mogą się zmieniać w miarę pracy.

## Wizja

Portfolio nie jako statyczna strona z linkami do projektów, tylko jako osobna, w pełni działająca
aplikacja — "meta-projekt", który sam w sobie demonstruje umiejętności (mikrofrontendy, gamifikacja,
UX, DevOps), a jednocześnie prezentuje pozostałe projekty jako żywe, klikalne demo (nie
screenshoty/wideo).

Nawiązanie do zainteresowań właściciela (siłownia, bieganie, rower, hiking, fotografia,
motoryzacja) — wspólny mianownik to **ruch / eksploracja / dokumentowanie trasy**. Ten motyw
przewiduje się w tour-guide (kierunek "trail journal", zielenie szlaku, przerywana linia łącząca
punkty) — ale **portfolio jako całość ma mieć własny, nowy design**, niekoniecznie nawiązujący
wizualnie do tour-guide. Każda apka w zestawie może mieć inny charakter graficzny; to jest
świadoma decyzja, nie przeoczenie.

## Struktura całości

- **Portfolio shell** — właściwa strona/appka portfolio, punkt wejścia. Framework: **React** —
  domyka trio Angular/React/Vue w obrębie całego zestawu, dobre wsparcie pod bogatsze
  interakcje (canvas gry w statki, animacje odsłaniania sekcji).
- **Projekt 1 — tour-guide** (`Angular 22` + `NestJS 11`, w budowie równolegle, osobne repo/
  `CLAUDE.md`) — appka do planowania wycieczek. Status: zaawansowany, patrz jego własny
  `CLAUDE.md`/`PROJECT_BRIEF.md` po pełny szczegół.
- **Projekt 2 — insider news dla małych inwestorów** (framework: **Vue** — lekki, szybki do
  uruchomienia, dobrze pasuje do prostych, szybkich kart-stories; osobne repo `C:\insider`,
  własny `CLAUDE.md`) — patrz sekcja osobna poniżej. Status: **pierwszy szkielet zbudowany
  (2026-07-30)** — Vue + Vite, tokeny "Night Desk" jako realny CSS, jedna karta-story z plakietką
  "SUGESTIA AI · NIE PORADA" od pierwszej wersji (Faza 4, krok 10); brak jeszcze realnego źródła
  danych i deployu. Ten dokument (nie repo insider) pozostaje jedynym miejscem pełnej specyfikacji
  — `CLAUDE.md` w `insider` tylko do niego odsyła, nie duplikuje treści.
- **Projekt 3 — "Serwisant"** (robocza nazwa, framework: **React Native**, patrz korekta
  2026-07-31 niżej; osobne repo `C:\serwisant`, na razie pusty szkielet z `CLAUDE.md` odsyłającym
  do tego dokumentu, kod jeszcze niezaczęty) — asystent serwisowy samochodu. Patrz sekcja osobna
  poniżej.

## Projekt 2 — apka finansowa (robocza nazwa: "Insider" roboczo, framework: Vue)

**Ważne rozróżnienie (2026-07-23):** design "Editorial Garage" dotyczy wyłącznie portfolio
shellu — karta/link do Insidera *w portfolio* może w niej żyć jako element chrome'u shellu, ale
to nie jest design samej apki Insider. Insider jako samodzielna apka jeszcze **nie ma własnego
kierunku wizualnego** i powinien go dostać osobno — z założenia bardziej "finansowy" charakter
(np. estetyka bliższa terminalom giełdowym/fintech: dane liczbowe, szybkie skanowanie, inny rytm
niż edytorski/spokojny charakter portfolio i tour-guide), nie przedłużenie stylu shellu. Każda
apka w zestawie ma świadomie inny charakter graficzny — patrz sekcja "Wizja" na górze dokumentu.

**Design system Insidera — "Night Desk" (zablokowany 2026-07-23):** ciemny terminal inwestora,
kontrast do ciepłych/jasnych tour-guide i portfolio shellu.
- Tło: prawie czarny granat `#0a0e14`; tekst główny: `#eef1f4`; tekst drugorzędny: `#7c8794`;
  hairline: `#1c222b`/`#2a3138`.
- Akcent primary: bursztyn `#ffb020` (kategorie, wyróżnienia — "poczucie insidera").
- Kolory funkcyjne (tylko przy realnych liczbach, nie dekoracyjnie): zielony `#2fbf71` (wzrost),
  czerwony `#e5484d` (spadek) — standardowa, oczekiwana konwencja w finansach.
- Typografia: monospace (`ui-monospace`) dla tickerów/liczb/etykiet, pogrubiony sans dla
  nagłówków newsów, zwykły sans dla opisu.
- Komponent stały: plakietka "SUGESTIA AI · NIE PORADA" — zawsze widoczna przy sugestiach
  inwestycyjnych, patrz zastrzeżenie regulacyjne niżej.
- Format: pionowe karty-story (swipe), pasek tickera na górze, jedna informacja na kartę.
- Odrzucony wariant: "Clear Desk" (jasny, fioletowy akcent, sparkline) — bezpieczniejszy, ale
  czytał się bardziej jako "kolejny neobank" niż "insiderski news", mniej odróżnialny w zestawie.

**Backend (dodany 2026-07-30):** Node + Express + TypeScript (`C:\insider\backend`), minimalny —
wyłącznie proxy `POST /api/suggestions` do Claude API dla realnych sugestii long/short (patrz
niżej), nie NestJS jak w tour-guide (celowo lżej, bo to jeden endpoint, nie rosnący zestaw
modułów domenowych). `ANTHROPIC_API_KEY` współdzielony z `tour-guide/backend` (świadomy wybór
właściciela, wspólny billing/limit) zamiast osobnego klucza per projekt. Pełny opis w
`insider/CLAUDE.md`.

Cel: mega szybkie podsumowanie kluczowych wydarzeń ze świata istotnych dla małych inwestorów,
w formie krótkich, "insiderskich" newsów (np. plany inwestycyjne zarządów spółek, nowe technologie
od dużych graczy typu Nvidia, zapowiedzi deweloperów gier, zagrożenia w dostawach surowców), a w
kolejnym kroku — sugestie inwestycyjne generowane przez AI na bazie zebranych newsów.

**Format UI (propozycja):** karty w stylu "stories" (jak Instagram/TikTok) — jedna informacja na
kartę, przesuwane swipe'em, ostatnia karta = sugestie AI. Pasuje do założenia "mega proste i
szybkie".

**Źródła danych (kandydaci, wszystkie mają darmowy tier, wzorem podejścia z tour-guide —
Overpass/Open-Meteo/Nominatim):**
- Finnhub — news + company news + sentiment
- Alpha Vantage — news & sentiment endpoint
- Marketaux — dedykowane API do newsów finansowych

**AI:** ta sama zasada "retrieve then generate" co w tour-guide's `AiModule` — AI nie zmyśla
faktów, tylko streszcza/interpretuje realnie pobrane newsy i na ich bazie generuje sugestie.

**Ważne — aspekt regulacyjny/odpowiedzialność:** sugestie inwestycyjne generowane przez AI mogą w
niektórych jurysdykcjach (w PL: nadzór KNF) mieścić się w definicji "doradztwa inwestycyjnego".
Jako projekt portfolio ryzyko jest niskie, ale warto to zaprojektować porządnie od początku:
- wyraźny ekran/checkbox z disclaimerem przy starcie ("wyłącznie informacyjne/edukacyjne, nie
  jest to porada inwestycyjna")
- język w UI unikający imperatywów ("kup", "sprzedaj") na rzecz opisowych sformułowań ("AI wskazuje
  potencjalny kierunek", "warto obserwować")
- to też dobry fragment do opisania w portfolio jako dowód świadomego, odpowiedzialnego myślenia
  produktowego, nie tylko technicznego

## Projekt 3 — "Serwisant" (robocza nazwa, framework: React Native)

Cel: asystent obsługi serwisowej samochodu. Użytkownik zakłada profil pojazdu (marka, model,
generacja, rocznik, silnik — wypełnione ręcznie albo ze zdjęcia dowodu rejestracyjnego, które AI
sam odczytuje) i podaje aktualny przebieg. Następnie robi zdjęcia wszystkich stron książki
serwisowej oraz faktur za usługi — AI analizuje to razem z typowymi dla danego modelu interwałami
serwisowymi i pokazuje w przystępnej formie co i kiedy wypada zrobić (olej silnikowy/skrzyni/
napędu, klimatyzacja, rozrząd), a przy okazji może podać specyfikacje płynów/olejów zalecanych
przez producenta. Całość układa się w logiczny timeline z priorytetyzacją: przeoczone / bliskie /
odległe w czasie.

**Silny fit tematyczny z motoryzacją** (jedno z zainteresowań z sekcji "Wizja") — i ładny,
niezaplanowany rezonans z designem portfolio shellu: motyw "karty technicznej" (spec-plate) w
Editorial Garage dosłownie zapowiadał tę apkę, która operuje na prawdziwych danych technicznych
pojazdu. Mimo to Serwisant dostaje **własny, odrębny kierunek wizualny** — nie przedłużenie
Editorial Garage (patrz zasada "każda apka ma inny charakter" w sekcji "Wizja").

**Kluczowe wykorzystanie AI (multimodalne, spójne z podejściem "retrieve then generate" z
tour-guide):**
- OCR/odczyt dowodu rejestracyjnego → automatyczne wypełnienie profilu pojazdu
- OCR/analiza zdjęć książki serwisowej i faktur → wyciągnięcie historii realnie wykonanych usług
  (data, przebieg, zakres)
- Zestawienie historii z typowymi interwałami serwisowymi → timeline z priorytetyzacją

**Ważne ograniczenie do zaprojektowania świadomie (analogiczne do disclaimeru w Insiderze):** w
przeciwieństwie do tour-guide (Overpass/Open-Meteo/Nominatim — realne, darmowe, ustandaryzowane
API) **nie ma dobrego darmowego źródła prawdy dla oficjalnych interwałów serwisowych producenta**
per marka/model/silnik. Poleganie wyłącznie na ogólnej wiedzy AI ryzykuje nieścisności przy czymś
potencjalnie istotnym dla bezpieczeństwa (np. rozrząd). Robocze podejście: **historia serwisowa
użytkownika (wyciągnięta z realnych zdjęć) jest twardym gruntem prawdy**, a sugerowane interwały
są jawnie oznaczone jako orientacyjne ("orientacyjne wg wiedzy ogólnej, nie oficjalna dokumentacja
producenta — zawsze zweryfikuj z ASO/instrukcją obsługi"), szczególnie przy pozycjach
bezpieczeństwa krytycznych. Ten sam duch odpowiedzialnego projektowania co przy Insiderze.

~~**Framework: Angular** (potwierdzone 2026-07-24) — powtórka stacku z tour-guide, świadomie: ten
sam wzorzec engineering discipline (signals/resource, strict typing, wywołania AI w kształcie już
sprawdzonym w `AiModule`/`PlanChatModule`) zastosowany w drugiej, nowej domenie. Pokazuje głębię
kompetencji, nie tylko szerokość frameworków — tę akurat pokrywają już React (shell) i Vue
(Insider).~~

**Zmienione na React Native (2026-07-31), właściciel.** Powód: Serwisant to z założenia apka
używana praktycznie w terenie — robienie zdjęć dowodu rejestracyjnego/książki serwisowej/faktur
stojąc przy warsztacie czy na parkingu — więc realnie mobile-first charakter tej konkretnej apki
przeważa nad argumentem "pokaż głębię, nie tylko szerokość" z pierwotnej decyzji. React Native
robi to zresztą i tak jeszcze lepiej niż powtórka Angulara: portfolio pokazuje wtedy **cztery**
odrębne podejścia frontendowe (React web, Vue, Angular, React Native), nie trzy — sam React
Native, mimo współdzielonego języka z shellem, to realnie inny model renderowania/nawigacji/
dostępu do sprzętu (kamera, storage) niż web-React, więc to wciąż nowa, nie powtórzona
kompetencja, tylko innego rodzaju niż Vue/Angular.

**Odpowiedź na pytanie właściciela — czy taką apkę da się "wrzucić jako odpalaną z pulpitu w
telefonie":** tak, ale z realną różnicą między platformami, warto mieć to jasne od razu:
- **Android:** tak, prosto — prawdziwy standalone build (Expo **EAS Build**, nie tylko podgląd w
  appce Expo Go) daje realny plik `.apk`, instalowalny wprost na telefon (sideload, bez sklepu),
  z własną ikoną w szufladzie aplikacji, uruchamiany jak każda inna zainstalowana apka.
- **iOS:** więcej tarcia — Apple nie ma odpowiednika "zainstaluj apk" za darmo. Sideload wymaga
  albo płatnego Apple Developer Program (99 USD/rok, przez Xcode/TestFlight), albo darmowego
  podpisania osobistym Apple ID przez Xcode — ale to działa tylko 7 dni, potem trzeba
  przepodpisać. Realna, bezterminowa dystrybucja na iOS bez płatnego konta nie istnieje.
- **Ważne rozróżnienie:** samo **Expo Go** (najszybszy sposób podglądu w trakcie budowy) nie daje
  własnej ikony na pulpicie — apka otwiera się jako projekt *wewnątrz* appki Expo Go, nie jako
  osobna ikona. Żeby dostać prawdziwą, samodzielną ikonę na pulpicie telefonu (czego właściciel
  pytał), potrzebny jest właśnie **EAS Build** (albo "bare" build), nie sam Expo Go.
- Wniosek praktyczny: dla celów portfolio/demo realistyczny, bezproblemowy scenariusz to **Android
  APK, sideload, ikona na pulpicie** — bez żadnych kosztów ani kont deweloperskich. iOS jest
  możliwy, ale wymaga świadomej decyzji o koncie Apple Developer (albo akceptacji 7-dniowego
  odświeżania), do rozważenia bliżej realnego budowania, nie teraz.

**Sprzęt właściciela potwierdzony (2026-07-31): Windows + iPhone 16 Pro Max, zero dostępu do
Maca.** To realnie zmienia powyższy wniosek — scenariusz "Android APK za darmo" nie jest czymś,
co właściciel może sam przetestować na swoim sprzęcie (nie ma telefonu z Androidem), a darmowa
ścieżka na iOS (podpis osobistym Apple ID przez Xcode, 7-dniowy limit) też odpada, bo wymaga
Maca, którego nie ma. Praktyczne wnioski:
- **Development/podgląd na żywo w trakcie budowy nie jest problemem mimo braku Maca** — Expo Go
  działa identycznie na iOS jak na Androidzie (appka z App Store, ten sam skan kodu QR, ten sam
  Fast Refresh) i nie wymaga Xcode ani Maca w ogóle.
  **Korekta, realny problem napotkany 2026-07-31:** to założenie ma jedną istotną, nieoczywistą
  dziurę — App Store'owa wersja Expo Go wspiera tylko **jedną, konkretną wersję Expo SDK na raz**,
  i nie zawsze jest to najnowsza opublikowana na npm (nowa wersja Expo Go czeka wtedy na recenzję
  Apple, realnie widziane opóźnienie: `create-expo-app` zainstalował świeże SDK 57, podczas gdy
  App Store w tym momencie wciąż serwował Expo Go dla SDK 54 — 3 wersje różnicy). Skutek: świeżo
  pobrana z App Store appka Expo Go odrzuca projekt komunikatem że "potrzebuje najnowszej wersji"
  (bez podania konkretnego numeru SDK w treści błędu — mylące, bo appka faktycznie *jest*
  najnowsza dostępna w App Store, tylko projekt jest nowszy niż ona). **Dla właściciela bez Maca i
  bez telefonu z Androidem (patrz sprzęt wyżej) to jedyny realnie darmowy sposób podglądu na
  fizycznym urządzeniu** — `eas go` (alternatywa dla SDK zbyt nowych dla App Store) wymaga płatnego
  Apple Developer Program, więc nie jest tu opcją. **Praktyczny fix: przypiąć projekt do wersji SDK,
  jaką faktycznie wspiera aktualnie opublikowana w App Store Expo Go** (sprawdzone na App Store
  Connect, nie zgadywane — `npm install expo@^54.0.0 && npx expo install --fix`, potwierdzone
  `npx expo-doctor` 18/18), zamiast trzymać się najnowszego SDK za wszelką cenę. **Do pamiętania na
  przyszłość, także dla planu karty portfolio niżej (`instrukcja "zainstaluj Expo Go, zeskanuj
  kod"`):** przed każdym przyszłym bumpem Expo SDK w tym repo, sprawdzić na żywo jaką wersję SDK
  wspiera aktualna App Store'owa Expo Go — inaczej ten sam błąd uderzy też w odwiedzających
  portfolio, nie tylko we właściciela w trakcie developmentu.
- **Jedyna realna droga do prawdziwej, samodzielnej ikony na pulpicie (nie tylko podgląd w Expo
  Go) to EAS Build** (kompiluje w chmurze Expo — działa z Windowsa, nie potrzeba lokalnego Xcode)
  **plus płatne Apple Developer Program (99 USD/rok)** do podpisania builda pod iPhone'a
  właściciela. Nie ma tu darmowej alternatywy przy tym zestawie sprzętowym — do zaakceptowania
  świadomie przy realnym budowaniu, nie teraz.

**Dystrybucja dla odwiedzających portfolio z zewnątrz (2026-07-31) — nie tylko dla właściciela.**
Ten sam problem co wyżej, tylko dla obcych: Android — bez problemu, prawdziwy `.apk` do pobrania i
zainstalowania wprost (odwiedzający sam akceptuje "instalację z nieznanych źródeł", zero konta,
zero kosztu). iPhone — droga "za darmo" w ogóle się nie skaluje na obcych urządzeń (podpis przez
Xcode wymaga z góry znać urządzenie), więc realne opcje to **TestFlight** (płatne konto Apple
Developer po stronie właściciela, ale potem realny "tap i instalujesz" dla dowolnego iPhone'a,
build wygasa co 90 dni) albo pełny **App Store** (dużo większe zobowiązanie — recenzja Apple,
polityka prywatności, utrzymanie — przesada dla demo portfolio).

**Darmowa, wspólna dla obu platform alternatywa: live link do Expo Go** — odwiedzający instaluje
darmową, generyczną appkę Expo Go (App Store/Google Play), potem otwiera projekt Serwisanta przez
link/kod QR, bez budowania żadnego natywnego pliku, bez konta Apple Developer. Kompromis: appka
otwiera się *wewnątrz* Expo Go, nie jako własna ikona — ale działa od razu, na każdym telefonie,
za darmo. **Potwierdzone jako plan na kartę Serwisanta w portfolio** (do zbudowania razem z resztą
widoku szczegółów, wzorem `InsiderDetail`/`TourGuideDetail`): opis + zrzut ekranu appki + krótka
instrukcja "zainstaluj Expo Go, zeskanuj kod" + sam kod QR prowadzący do live projektu.

**Dodatkowe funkcje ustalone 2026-07-24:**
- **Przegląd techniczny (SKP)** jako osobna pozycja w timeline, obok olej/rozrząd/klimatyzacja.
  Termin ważności badania technicznego jest realnie wydrukowany na dowodzie rejestracyjnym (PL) —
  więc w przeciwieństwie do interwałów serwisowych (szacunek AI) **to jest twardy, pewny fakt**,
  wyciągany wprost z OCR dowodu (albo wpisywany ręcznie, jeśli użytkownik nie ma zdjęcia pod ręką).
  Wizualnie oznaczony inaczej niż szacowane interwały — patrz "Fakt vs. szacunek" w design systemie
  niżej.
- **Domykanie pętli — odhaczanie z dowodem wykonania.** Użytkownik może ręcznie oznaczyć pozycję
  jako zrobioną; apka od razu prosi o zdjęcie faktury/dokumentu z serwisu jako potwierdzenie. To
  zdjęcie przechodzi przez ten sam OCR co książka serwisowa (data, przebieg, zakres usługi),
  dopisuje się do historii pojazdu i przelicza kolejny termin dla tej pozycji na nowo. Każde
  odhaczenie robi timeline odrobinę dokładniejszym — historia użytkownika, nie AI, pozostaje
  twardym gruntem prawdy (zgodnie z zasadą ustaloną wyżej).

~~**Design system — "Workshop Docket" (zablokowany 2026-07-24):** estetyka kwitu warsztatowego —
uczciwa wobec tego, czym apka faktycznie operuje (realne dokumenty), i wyraźnie odrębna od Night
Desku (Insider), mimo że oba są "techniczne".~~
~~- Tło (papier kwitu): `#f1efe9`; tekst główny: `#2b2620`; tekst drugorzędny: `#6b6357`.~~
~~- Hairline pełny: `#d6d2c4`; hairline przerywany (nagłówek dokumentu): `#b8b3a1`; separator wiersza:
  `#e2dfd4`.~~
~~- Kolory statusu (pieczątki, tylko funkcyjnie): czerwony `#b3261e` (przeterminowane), bursztyn
  `#a9772f` (wkrótce), zielony `#3f6b3f` (ok).~~
~~- Typografia: wyłącznie monospace (`ui-monospace`) — maszynopisowy charakter kwitu, brak serifów/
  groteskowych nagłówków (odróżnia to świadomie od Editorial Garage, gdzie serif jest głównym
  motywem).~~
~~- Komponent: pieczątka statusu — bordered badge, lekko obrócony (`transform: rotate(-4deg)` do
  `rotate(4deg)`, losowo/na wiersz, imituje realną pieczątkę), uppercase, bold.~~
- **Fakt vs. szacunek (generalna zasada, przetrwała zmianę design systemu poniżej — patrz też
  sekcja dobrych praktyk):** pieczątka pełna/wypełniona = potwierdzony fakt (SKP z OCR dowodu,
  ukończona usługa z dowodem); pieczątka tylko-obrys/przerywana + prefiks "SZAC." = szacowany
  interwał AI. Nigdy nie prezentować jednym wizualnym językiem.
~~- Odrzucony wariant: "Instrument Cluster" (ciemna deska rozdzielcza, paski postępu jak wskaźniki) —
  bardziej "żywy panel" niż "archiwum dokumentów", mniej spójny z tym, czym apka faktycznie jest.~~

**Design system — "Service Bay" (zablokowany 2026-07-31, zastępuje Workshop Docket powyżej).**
Powód zmiany: pierwszy realny build (Expo skeleton + kaskadowy formularz pojazdu, patrz
`C:\serwisant`) wyglądał — realny feedback właściciela — "mało efektowny i podobny do portfolio".
Workshop Docket (beżowy papier kwitu, wyłącznie monospace, stonowane barwy) czytał się jako zbyt
cichy/nieodróżniający się, nie jako świadomie skromny. Research bieżących (2026) trendów mobile
UI/UX zrobiony przed propozycją (nie zgadywany z pamięci) — dark-mode-first jako domyślny (nie
dodatek), bento grid dla gęstych danych, "bold minimalism" (płaski, wysoki kontrast zamiast
stonowanych barw), neumorfizm konkretnie dla narzędzi diagnostycznych/tactile. Cztery konkretne
kierunki zbudowane jako żywa, interaktywna makieta porównawcza (ten sam pojazd/te same 5 pozycji
serwisowych w każdym, nie tylko próbki kolorów) i pokazane właścicielowi do wyboru: "Pit Wall"
(ciemny bento-grid, cyjanowy akcent), "Soft Diagnostic" (neumorfizm, jasne chłodne tło, akcent
jadeitowy), "Field Ledger" (ewolucja Workshop Docket — też pieczątki/monospace, ale ciemne tło i
nasycony bursztyn zamiast stonowanego), i "Service Bay" — fuzja Pit Wall + Field Ledger, dodana po
realnym feedbacku że siatka 2×2 Pit Walla ściskała treść ("kafelki jedno pod drugim, bo treść się
nie mieści"). **Wybrany: Service Bay.**
- Tło ekranu: `#14171c` (ciemny blue-charcoal, nie czysta czerń, nie ciepły brąz Field Ledgera);
  tło karty: `#1c2027`; obrys karty: `#262b33`; wariant "przeterminowane": tło `#241512`, obrys
  `#4a2a1c`.
- Tekst główny: `#e9edf2`; tekst drugorzędny/dane: `#6d7684` (etykiety, meta) i `#8993a3` (podtytuł).
- Jeden akcent — telemetryczny cyjan `#2ab7e0` (tekst na nim: `#04202c`) — zarezerwowany wyłącznie
  dla hero-liczby (przebieg) i głównego CTA ("Sprawdź konieczne czynności"); nigdy nie używany do
  statusów, żeby nie konkurował z ich znaczeniem.
- Kolory statusu (pieczątki, przeniesione z Field Ledgera, teraz nasycone nie stonowane): czerwony
  `#ff5a4d` (przeterminowane), bursztyn `#f2b705` (wkrótce), zielony `#6fbf7a` (ok), szary
  przerywany `#8a7d63` (szacunek/SZAC.).
- Typografia: mieszana, nie wyłącznie monospace jak w Workshop Docket/Field Ledgerze —
  `ui-monospace` zarezerwowany dla liczb (hero-przebieg, dane liczbowe w wierszach,
  `font-variant-numeric: tabular-nums`), zwykły sans (systemowy) dla nazw pozycji i etykiet —
  czytelniej przy dłuższych nazwach czynności serwisowych niż mono wszędzie.
- Układ: pełnej szerokości, ułożone jeden pod drugim wiersze (nie siatka 2×2, nie wymaga
  poziomego przewijania ani ściskania treści) — każdy wiersz: nazwa + linia szczegółu po lewej,
  pieczątka statusu po prawej.
- Komponent pieczątki statusu — bez zmian względem Workshop Docket/Field Ledgera: bordered badge,
  lekko obrócony (`rotate(-3deg)` fakt, `rotate(2deg)` przerywany szacunek), uppercase, bold —
  ten element okazał się na tyle udany, że przetrwał każdą iterację design systemu.
- Pełny kod referencyjny czterech porównywanych kierunków (HTML/CSS, nie tylko opis) w
  artefakcie zbudowanym podczas tej sesji — patrz historia rozmowy w `C:\serwisant` dla źródła,
  jeśli potrzebny ponowny wgląd; nieprzechowywany jako plik w żadnym repo.

**Przepływ appki — ustalony szczegółowo 2026-07-31, zastępuje wcześniejsze uproszczone ujęcie w
Faza 5 niżej:**

1. **Brak logowania/rejestracji na start.** Użytkownik wchodzi wprost do apki, zero ekranu
   logowania. Profil pojazdu i historia serwisowa zapisywane **wyłącznie lokalnie na urządzeniu**
   (kandydat: `expo-sqlite`) — brak persystencji po stronie backendu na tym etapie; backend (gdy/jeśli
   powstanie) będzie wywoływany wyłącznie bezstanowo, do zadań AI/OCR, nigdy do przechowywania
   danych użytkownika. Konta i synchronizacja między urządzeniami to świadomie odłożona, czysta
   rozbudowa na później — nie coś wymagające przebudowy istniejącego modelu danych, skoro dane i tak
   będą miały jasny kształt lokalny od początku.
2. **Wybór pojazdu — kaskadowy formularz**: marka → model (wraz z generacją) → rocznik → wersja
   silnikowa/wyposażenia, a na końcu przebieg. **Podpowiedzi na każdym kroku generuje/normalizuje AI**,
   nie realna baza danych motoryzacyjnych — użytkownik wpisuje swobodnie, Claude rozpoznaje i pokazuje
   do potwierdzenia (np. "Rozpoznaliśmy: Volkswagen Golf VII (2013–2020), 2.0 TDI — zgadza się?"),
   użytkownik potwierdza albo poprawia zanim to trafi do profilu. **Świadomie zaakceptowany brak
   walidacji względem faktycznej bazy pojazdów** — ten sam rodzaj "szacunku AI, potwierdzonego przez
   człowieka" co interwały serwisowe niżej, tylko zastosowany też do samej identyfikacji pojazdu; opcja
   odrzucona: research/integracja realnego API danych motoryzacyjnych — żadna wolna opcja o pewnym
   pokryciu europejskich generacji/silników nie jest znana z góry (to samo ryzyko "brak darmowego
   źródła prawdy" co przy interwałach), a jej sprawdzanie nie jest wartę tego kosztu na obecnym etapie.
   **OCR dowodu rejestracyjnego (z pierwotnego planu) zostaje na roadmapie, ale odłożony** — kaskadowy
   picker to teraz pierwsza/podstawowa ścieżka; OCR dowodu dochodzi później jako szybszy skrót, nie
   zamiennik.
3. **Wstępna historia serwisowa — dwa niewykluczające się wejścia**, oba prowadzące do tego samego
   modelu danych (lista rozpoznanych czynności serwisowych z datą/przebiegiem/zakresem):
   - opis tekstowy: co i kiedy było serwisowane (wg wiedzy użytkownika), co go niepokoi;
   - zdjęcia faktur/książki serwisowej (z widoczną datą, przebiegiem, zakresem usługi).
   AI analizuje oba źródła razem, rozpoznaje pojedyncze czynności serwisowe i układa je na czytelnej,
   chronologicznej osi czasu.
4. **Akcja "Sprawdź konieczne czynności serwisowe"** — jawnie klikana przez użytkownika, nie
   auto-odpalana (ten sam wzorzec kosztowej-akcji-AI-za-jawnym-triggerem co narracja/chat w
   tour-guide). AI: sprawdza typowe interwały serwisowe dla konkretnego modelu/silnika (rozrząd, oleje
   silnikowy/skrzyni/napędu, inne płyny, pozostałe czynności serwisowe) → porównuje z historią z osi
   czasu → klasyfikuje każdą pozycję (zrobione i aktualne / przeterminowane / zbliża się termin / brak
   danych) → układa wynik od najpilniejszych do najodleglejszych. Ten sam rozdział "fakt vs. szacunek"
   co w design systemie wyżej: historia użytkownika = twardy fakt, interwały/sugestie AI = jawnie
   oznaczone jako orientacyjne.
5. **Czytelna, priorytetyzowana prezentacja wyniku + eksport do PDF.** Kandydat technologiczny:
   `expo-print` (generowanie PDF z HTML, natywnie wspierane w Expo managed workflow, bez potrzeby
   ejectowania) — do potwierdzenia przy realnym budowaniu tego kroku, nie teraz.

## Mikrofrontendy

Cel: zademonstrować realną wiedzę o mikrofrontendach, nie tylko linkowanie osobnych apek.
Frameworki w zestawie będą różne (Angular w tour-guide, prawdopodobnie React i/lub Vue w
pozostałych) — stąd potrzebne jest podejście działające cross-framework.

Dwa warianty rozważane, **do zbudowania jako mały POC obu, żeby zobaczyć różnicę na żywo** zanim
padnie ostateczna decyzja:

1. **Web Components (Custom Elements)** — każda apka opakowuje swój root w customowy element
   (Angular Elements / `react-to-webcomponent` lub Lit / Vue `defineCustomElement`). Host używa ich
   jak zwykłych tagów HTML, Shadow DOM izoluje style. Lżejsze operacyjnie, mniej wspólnej
   infrastruktury do utrzymania.
2. **single-spa** — framework zbudowany dokładnie pod ten scenariusz (gotowe adaptery dla
   Angulara/Reacta/Vue, wspólny router, lifecycle'e `bootstrap`/`mount`/`unmount`). Bardziej
   "podręcznikowe" rozwiązanie dla poliglotycznych mikrofrontendów, ale dokłada realną złożoność
   (routing między apkami, wersjonowanie, wspólny root config).

Roboczy kandydat na demo: fragment mapy z tour-guide osadzony jako widget w portfolio shell, w obu
wariantach, do porównania.

**Decyzja (2026-07-23): Web Components.** POC zbudowany i zweryfikowany na żywo (test izolacji
stylów przez Shadow DOM — globalna reguła CSS celująca w tę samą klasę realnie nie przebija się do
środka custom elementu; symulacja cyklu życia single-spa jako punkt odniesienia). Pełne notatki i
realny kod referencyjny (Angular Elements bootstrap, single-spa root-config) w osobnym pliku
`MICROFRONTEND_POC_NOTES.md`.

Uzasadnienie: Web Components nie wymagają centralnego orkiestratora, każda apka pozostaje w pełni
samodzielna (spójne z zasadą "każda apka musi działać niezależnie od shellu" z sekcji dobrych
praktyk) — single-spa miałby sens dopiero przy potrzebie płynnego routingu między fragmentami
różnych apek na jednej stronie, czego na razie nie planujemy.

**Ważna korekta ustalona przy okazji POC:** Web Components, single-spa i Module Federation
rozwiązują trzy różne problemy — kompozycja / orkiestracja / współdzielenie kodu — nie są
wzajemnymi alternatywami. Żadne z nich samo z siebie nie eliminuje zdublowanych bundli
frameworków (każda apka nadal wysyła własny runtime Angular/React/Vue, chyba że dojdzie Module
Federation). Przy skali 3 apek to akceptowalny koszt, nieplanowany do rozwiązywania osobno na
razie.

**Idea captured, nie zbudowane (2026-07-30): czy kolejna apka mogłaby otwierać się w całości jako
mikrofrontend w modalu na portfolio, nie tylko jako mały widget-fragment jak dziś tour-guide?**
Realne napięcie z powyższą decyzją: cała apka (nie fragment) potrzebuje własnego routingu/stanu
wewnątrz tego modala, a to dokładnie ten scenariusz ("płynny routing między fragmentami różnych
apek na jednej stronie"), który ta sekcja świadomie odłożyła jako powód do rozważenia single-spa,
nie Web Components. Do przemyślenia dopiero przy budowie kolejnej apki (Insider) — czy zostać przy
"fragment jako widget" (bezpieczne, już sprawdzone), czy faktycznie zbudować drugi POC (modal +
cała apka) i porównać na żywo, zanim padnie decyzja.

## Gamifikacja — landing portfolio

Pomysł: gra w **statki** jako mechanika odkrywania zawartości portfolio — trafienia odsłaniają
kolejne elementy: projekt 1, projekt 2, sekcja "o mnie" (sport, fotografia, samochody, itd.).
Wybrano statki (nie breakout) świadomie — metafora "odkrywania" lepiej pasuje narracyjnie do
motywu eksploracji, który już przewija się przez cały zestaw projektów.

**UX zastrzeżenie do uwzględnienia w makietach:** gra musi być *opcjonalna* — rekruter/klient z
ograniczonym czasem powinien mieć możliwość pominięcia jej i przejścia od razu do treści (np. link
"Przejdź od razu"). Progres w grze powinien być stosunkowo szybki do zdobycia (pierwsza sekcja
odblokowuje się po kilku trafieniach, nie po ukończeniu całej planszy).

## Hosting / infrastruktura

> **⚠️ ZASTĄPIONE 2026-11-20 — wszystko poniżej (własny VPS Hetzner + Traefik + Docker Compose +
> wspólny Postgres + Uptime Kuma + GHCR) jest HISTORYCZNE i już nie działa.** Aktualny stan opisuje
> ta podsekcja; reszta zostaje jako zapis decyzji i tego, czego się przy tym nauczyłem.

### Aktualny stan (od 2026-11-20): Cloudflare Pages, koszt €0

**Dlaczego.** Jedynym realnym, stałym kosztem był Hetzner CPX22: €23,97/mies. (~€288/rok) po
czerwcowej podwyżce, za ruch, jakiego portfolio nie ma. Próba przeniesienia *tego samego* stosu na
darmowego VPS-a (Oracle Cloud Always Free, ARM Ampere A1) rozbiła się o brak pojemności ("out of
capacity" w Paryżu — jedna Availability Domain, wszystkie Fault Domains, także dla 1 OCPU) —
zamiast czekać na skrypt ponawiający albo płacić za upgrade konta, uproszczono architekturę.
Zakres uzgodniony wprost z właścicielem: "najprościej — widget i kod".

**Jak działa teraz.**

- **portfolio-shell** → Cloudflare Pages (statyczny `dist/`, repo podpięte, deploy z pusha do
  `main`). Nagłówki/CSP w `public/_headers` (zastąpiły `nginx.conf`); `ci.yml` tylko lint + build.
- **Oba widgety to statyczne pliki obok strony** (`public/elements/tour-guide/main.js` +
  `krakow-demo-pois.json`, `public/elements/insider/main.js`) — ten sam origin co strona, więc
  `script-src 'self'` i zero CORS. Ręcznie kopiowane artefakty z repo źródłowych (instrukcja w
  `README.md`).
- **tour-guide**: backend, Postgres i pełna aplikacja **nie są nigdzie wdrożone** (tylko lokalnie z
  repo). Widget czyta statyczny snapshot 40 prawdziwych POI z OSM (po 10 z 4 typów, wygenerowany
  raz z żywego backendu tuż przed wyłączeniem), a URL pliku liczy względem własnego skryptu
  (`import.meta.url`), więc działa z dowolnego hosta (kubsiw.com, podgląd `*.pages.dev`, lokalnie).
- **insider**: backend (sugestie AI przez Anthropic) nie działa. Widget ma sugestie AI **wyłączone
  wprost** (komunikat zamiast przycisku; build elementu przypina `VITE_API_BASE_URL` do `""`, żeby
  przeglądarka odwiedzającego nigdy nie próbowała łączyć się z `localhost:3100`); newsy i kursy
  działają dalej, bo Finnhub jest wołany prosto z przeglądarki.
- **serwisant**: nigdy nie był wdrożony (backend lokalny); dystrybucja mobilna i tak nie szła tym
  hostingiem.
- **Skasowane**: Traefik, kontener Postgres, Uptime Kuma, obrazy w GHCR, deployy SSH, subdomeny
  `tourguide.`/`insider.`/`serwisant.` (rekordy DNS do usunięcia po przełączeniu domeny), sam
  serwer Hetzner. Zostaje domena (~$10/rok, Cloudflare Registrar).
- **Narracja**: "własny VPS jako dowód DevOps" (powód wyboru oryginalnego planu, patrz niżej)
  świadomie porzucona na rzecz "zejście na najprostszy hosting, gdy koszt przestał mieć sens" —
  opisane wprost w `ShellDetail`, w notce "za kulisami" `hosting-cost` i w sekcji umiejętności.

### Plan historyczny (do 2026-11-20)

Zdecydowano na wariant bardziej "inżynierski" (świadomy wybór — więcej do pokazania w portfolio
jako umiejętność DevOps, kosztem większego nakładu pracy utrzymaniowej). Poniżej konkretny plan,
sprawdzony pod kątem realnych, aktualnych cen (2026-07-24, po podwyżce Hetznera z kwietnia 2026 —
patrz źródła na dole dokumentu).

**VPS: Hetzner Cloud, plan CPX22 (tymczasowo, patrz niżej)** (2 vCPU, 4GB RAM, 80GB SSD,
20TB transferu) — **€23.97/mies.** (Regular Performance/CPX, AMD). Lokalizacja: Norymberga albo
Falkenstein (Niemcy) — najbliżej Polski, najniższe opóźnienie.

**Korekta 2026-07-24 (ważne, zmienia poniższą "Decyzję ostateczną"):** pierwotny wybór CX33
(4 vCPU/8GB za €6.99/mies.) okazał się nieaktualny — 15 czerwca 2026 Hetzner podniósł ceny linii
CPX/CCX o nawet 176% (Niemcy/Finlandia: ~2,4–2,75×), a przy realnym zakładaniu serwera linia
Cost-Optimized (CX) w ogóle nie była dostępna do wyboru (tylko Regular Performance/CPX) — mimo że
CX podrożał znacznie łagodniej (~1,3–1,4×) niż CPX. Zamiast czekać/szukać dalej, świadoma decyzja:
**kupić teraz CPX22 (€23,97/mies.), nie najmniejszy CPX12 (€14,13/mies.)** — w ciągu tygodnia
dochodzi kolejna apka (własny backend NestJS + Postgres), a 2GB RAM z CPX12 (Traefik +
portfolio-shell + backend + baza jednocześnie) to realne ryzyko OOM przy starcie; różnica
€9,84/mies. za dodatkowe 2GB to tania polisa. Nadal jasny plan migracji za ok. miesiąc na coś
tańszego (CX, jeśli wróci do wyboru, albo inny dostawca) — dzięki temu, że cała infrastruktura jest
jako kod (Docker Compose + Traefik + GitHub Actions), migracja to tylko: nowy VPS, ten sam
`docker compose up` na Traefiku, zmiana rekordu A w Cloudflare. Hetzner rozlicza się godzinowo, bez
umowy/okresu wypowiedzenia — serwer można skasować w dowolnym momencie bez kary.
**⚠️ Przypomnienie: sprawdzić ok. 2026-08-24 (miesiąc od zakupu), czy nie przenieść się na
tańszą opcję** (patrz też "Otwarte pytania" niżej). Oryginalna analiza CX23 vs. CX33 poniżej
zostaje jako historyczny kontekst decyzji, nieaktualna cenowo.

**Decyzja ostateczna 2026-07-24 (historyczna, ceny nieaktualne — patrz korekta wyżej):** po
dyskusji o CX23 vs. CX33 (CX23 realnie wystarczyłby na sam portfolio-shell, CX33 to wymiarowanie
pod docelowy stan z roadmapy — Traefik + wszystkie 4 apki + wspólny Postgres + monitoring naraz)
właściciel zdecydował zostać przy CX33 od początku — prostota (brak późniejszego kroku resize)
uznana za wartą ~€2.50/mies. różnicy. Odrzucone alternatywy: DigitalOcean/Linode/Vultr/AWS
Lightsail — przy porównywalnej specyfikacji 2.5–5.5× drożej niż Hetzner (ceny sprzed czerwcowej
podwyżki, do ponownego porównania przy migracji za miesiąc).

**Reverse proxy + TLS: Traefik** z automatycznym Let's Encrypt (routing na podstawie labeli
Dockera, zero ręcznej konfiguracji per apka przy dodawaniu kolejnego kontenera) — rekomendacja.
Prostszy fallback, gdyby Traefik okazał się zbyt "magiczny": nginx + certbot, bardziej klasyczne,
więcej ręcznej konfiguracji per subdomena.

**DNS: Cloudflare** (darmowy plan) — subdomeny per apka (`tourguide.<domena>`,
`insider.<domena>`, `serwisant.<domena>`), root `<domena>` = portfolio shell. Uwaga do ustalenia
przy wdrożeniu: tryb proxy Cloudflare (pomarańczowa chmurka, dodaje DDoS-protection/cache, wymaga
"Full (strict)" SSL z certyfikatem origin) vs. DNS-only (szara chmurka, prostsze, TLS w całości po
stronie Traefika/Let's Encrypt).

**Baza danych:** jeden kontener Postgres na VPS, osobne logiczne bazy per apka (`tour_guide`,
`insider`, `serwisant`) — oszczędniejsze na 8GB RAM niż osobny kontener Postgres na apkę;
rewizja, gdyby obciążenie realnie tego wymagało.

**CI/CD:** GitHub Actions per repo, ten sam kształt pipeline'u dla każdego projektu (lint → build
→ test → build obrazu Dockera → push do GitHub Container Registry `ghcr.io` → SSH na VPS →
`docker compose pull && docker compose up -d`) — spójne z zasadą "pipeline CI w jasnych, kolejnych
etapach" z sekcji dobrych praktyk.

**Monitoring/status:** self-hosted **Uptime Kuma** (lekki, open-source), publiczna strona
`status.<domena>` pingująca health-check każdego serwisu — bezpośrednie wykorzystanie zasady
"health check per serwis" już zapisanej w dobrych praktykach, i sam w sobie dobry, namacalny
dowód dojrzałości DevOps do pokazania w portfolio.

**Backupy:** do rozstrzygnięcia później, niekrytyczne na start — kandydaci: wbudowane backupy
Hetznera (+20% kosztu serwera) albo cron `pg_dump` → Hetzner Object Storage (S3-compatible).

**Do ustalenia:** sama nazwa domeny (osobista decyzja właściciela, niezależna od struktury
powyższej) oraz ostateczny wybór Traefik vs. nginx (do potwierdzenia przy realnym wdrożeniu).

*Ceny CPX12 sprawdzone na żywo 2026-07-24 bezpośrednio w formularzu zakupu na hetzner.com (nie
z artykułu — patrz korekta wyżej, artykuł był już nieaktualny). Kontekst podwyżek: [wz-it.com —
Hetzner price increase June 2026: CPX and CCX up to +176%](https://wz-it.com/en/blog/hetzner-price-increase-june-2026-cpx-ccx-alternatives/),
[northflank.com — Hetzner cloud server price increases in 2026](https://northflank.com/blog/hetzner-cloud-server-price-increases),
[bitdoze.com — Hetzner Cloud Pricing After the April 2026 Increase](https://www.bitdoze.com/hetzner-cloud-cost-optimized-plans/)
(ten ostatni już nieaktualny co do CX33/CPX22 — patrz korekta wyżej). Do zweryfikowania ponownie
bezpośrednio na hetzner.com przy migracji za miesiąc — ceny się zmieniają.*

## Dobre praktyki programistyczne i architektoniczne (wspólne dla wszystkich projektów)

Poniższe zasady mają obowiązywać we wszystkich projektach tego zestawu (Angular, React, Vue,
NestJS, infra), niezależnie od frameworka. Część jest już sprawdzona w praktyce w tour-guide
(wymieniona z uzasadnieniem), część to nowe propozycje pod kątem tego, że tym razem mamy do
czynienia z **kilkoma niezależnymi apkami spiętymi w jedną całość**, nie jednym monolitem.

### Zasady ogólne (cross-technology)

- **Weryfikuj, nie zakładaj.** Zanim zakoduje się integrację z zewnętrznym API/biblioteką,
  potwierdzić realny kształt odpowiedzi/typów (żywy request, przeczytanie zainstalowanych typów
  źródłowych) zamiast polegać na pamięci/dokumentacji. W tour-guide to się wielokrotnie opłaciło
  (Waymarked Trails, Anthropic SDK tool types, ng-bootstrap `DayTemplateContext`) i tyle samo razy
  zignorowanie tej zasady kosztowało realny czas na debugowanie.
- **Małe, weryfikowalne kroki (vertical slices).** Każda funkcjonalność domykana od backendu przez
  frontend do realnej weryfikacji (curl/test/browser), zanim zacznie się kolejną — nie budować
  wielu warstw naraz "na wiarę".
- **Jedno źródło prawdy dla współdzielonej logiki/stałych.** Klucze walidacji, mapowania,
  konfiguracja progów — trzymane w jednym miejscu i importowane, nie kopiowane między
  frontendem/backendem/apkami. Jeśli coś naprawdę musi istnieć w dwóch miejscach (np. inny język,
  inny runtime), jawnie to nazwać jako świadomy wyjątek, nie przypadkową duplikację.
- **Nie buduj abstrakcji/zabezpieczeń na zapas.** Wydzielaj współdzieloną logikę dopiero przy
  3.–4. realnym powtórzeniu, nie przy drugim "na wszelki wypadek". Nie dodawaj inwariantów, o które
  nikt nie prosił (np. kaskadowe resety stanu) — prostota i przewidywalność ponad "co jeśli".
- **Jawność ponad domyślność.** Explicit types, explicit return types, explicit access modifiers,
  explicit error states w UI — kod ma być czytelny bez czytania implementacji.
- **Fakt zawsze wizualnie odróżniony od szacunku AI.** Gdziekolwiek UI pokazuje obok siebie dane
  pewne (zmierzone, potwierdzone dokumentem, wprost wyciągnięte OCR-em z oficjalnego źródła) i dane
  szacowane/generowane przez AI — muszą mieć różny język wizualny, nie tylko różny tekst. Nie nowa
  zasada wymyślona na potrzeby portfolio — już sprawdzona w tour-guide
  (`Forecast.source: 'forecast' | 'historical-estimate'` z osobnym banerem dla szacunków
  pogodowych) i teraz świadomie powtórzona w Serwisancie (pieczątka pełna = fakt z OCR dowodu/
  dowodu wykonania usługi, pieczątka tylko-obrys = szacowany interwał AI).
- **Żyjący log decyzji.** Każdy projekt (i ten dokument) prowadzi sekcję "Historia decyzji" /
  changelog uzasadnień — nie tylko *co* zostało zrobione, ale *dlaczego*, żeby nie odkrywać tego
  samego dylematu po raz drugi.

### Frontend (Angular / React / Vue — wspólne zasady, różna implementacja)

- **Rozdział dumb/smart (presentational/container).** Komponenty prezentacyjne przyjmują dane przez
  props/inputs i emitują zdarzenia — bez własnego stanu biznesowego, bez wołania API. Komponenty
  kontenerowe trzymają stan i logikę pobierania danych. (Angular: `input()`/`output()` + `inject()`
  w kontenerach; React: hooks + props-only components; Vue: `defineProps`/`defineEmits` +
  composables).
- **Struktura folderów wg przepływu użytkownika, nie warstwy technicznej** — folder na funkcję
  (np. `plan-setup/`, `poi-picker/`), nie `components/`/`services/`/`utils/` na cały projekt.
  Serwisy/logika cross-cutting mieszkają w jednym wspólnym miejscu (`core/` albo odpowiednik).
- **Reaktywne pobieranie danych vs. jednorazowe akcje — różne narzędzia do różnych kształtów
  problemu.** Dane ładowane/odświeżane reaktywnie (GET-y zależne od stanu) idą przez dedykowany
  prymityw danego frameworka (Angular: `resource()`/`rxResource()`/`httpResource()`; React:
  TanStack Query lub odpowiednik; Vue: composable + `ref`/Pinia). Jednorazowe mutacje wyzwalane
  submitem/klikiem zostają zwykłym wywołaniem, bez sztucznego wciskania w reaktywny wrapper.
- **Design tokens, nie hardkodowane wartości.** Kolory, spacing, breakpointy — z jednego pliku
  tokenów/zmiennych per apka, referencjonowane, nie wpisywane na sztywno w komponentach. Zanim
  doda się nową wartość, sprawdzić czy nie ma już pasującej w istniejącej skali.
- **Stany loading/error komponentyzowane raz, używane wszędzie** — jeden wspólny loader/skeleton
  per apka, a nie osobny hand-rolled spinner w każdym miejscu. Placeholder loading powinien być
  zbliżony kształtem do docelowej treści (unikanie layout shift), a stan `loading` na przycisku nie
  może zmieniać jego rozmiaru (np. label ukryty przez `visibility`, nie usunięty z DOM).
- **Brak inline styles.** Layout/spacing przez istniejący system (utility classes/tokens), reszta
  w plikach stylów komponentu.
- **Dostępność jako standard, nie afterthought** — realne elementy semantyczne, `aria-label` tam
  gdzie trzeba, touch targety ~44px, nawigacja klawiaturą tam, gdzie to sensowne.

### Backend / API

- **Jeden moduł na jedną domenę biznesową**, rejestrowany centralnie — nie mieszać niepowiązanych
  odpowiedzialności w jednym serwisie.
- **Walidacja na granicy systemu** (DTO/schema validation na wejściu każdego endpointu), nie ufać
  danym z klienta głębiej niż to konieczne.
- **Bramkowanie kosztownych operacji (AI, zewnętrzne płatne API) za autoryzacją i/lub cache'em** —
  generuj raz, cache'uj, oddawaj za darmo przy kolejnych odczytach; nie generuj ponownie bez
  realnego powodu.
- **Idempotencja tam, gdzie to możliwe** (np. operacja "finalizuj" wywołana drugi raz nie powinna
  się wywalić ani zduplikować efektu).
- **Sekrety tylko w zmiennych środowiskowych, nigdy w repo** — i pilnować formatu `.env` (jedna
  wartość na linię; wielokrotne cudzysłowy w jednej linii to sygnał ostrzegawczy, patrz realny
  incydent w tour-guide, gdzie sklejony klucz zepsuł parsowanie `DATABASE_URL`).

### Weryfikacja / jakość

- **Lint + build + test uruchamiane zawsze** po zmianie w danym projekcie — tanie, łapią realne
  regresje, nigdy nie pomijane.
- **Ręczna/manualna weryfikacja skalowana do realnego ryzyka zmiany** — nowy ekran/flow: pełny
  przegląd end-to-end; drobna zmiana w już działającym ekranie: weryfikacja tylko zmienionego
  fragmentu.
- **Realne dane/requesty ponad zamockowane założenia** przy weryfikacji integracji z zewnętrznymi
  API.

### Nowe zasady proponowane pod kątem architektury wieloapkowej/mikrofrontendowej

- **Każda apka musi działać samodzielnie, niezależnie od shellu.** Mikrofrontend nie może być
  zbudowany tak, że działa wyłącznie osadzony w portfolio — to osłabiłoby zarówno wartość
  demonstracyjną (każdy projekt to osobne case study), jak i odporność całości na awarię shellu.
- **Współdzielony kontrakt, nie współdzielony kod.** Rzeczy naprawdę wspólne (np. wspólne tokeny
  designu dla spójności marki portfolio, prosty "manifest" do rejestrowania widgetów w shellu)
  żyją jako osobny, zwersjonowany, jawnie dokumentowany kontrakt — nie przez kopiowanie plików
  między repozytoriami.
- **Wersjonowanie i kompatybilność między shellem a remote'ami jawnie dokumentowane** — przy 3
  różnych frameworkach cicha niekompatybilność (np. zmiana kształtu propsów Web Componentu) jest
  łatwa do przeoczenia; każda apka eksponowana jako mikrofrontend dostaje krótką notkę "co shell
  może od niej oczekiwać".
- **Health check per serwis** (już sprawdzony wzorzec z tour-guide) — każdy backend wystawia prosty
  endpoint statusu, przydatny zarówno lokalnie, jak i w orkiestracji kontenerów.
- **Infrastruktura jako kod od samego początku** (co najmniej `docker-compose` do lokalnego
  odzwierciedlenia produkcji) — skoro wybrano wariant "inżynierski" hostingu, environment
  lokalny i produkcyjny nie powinny się rozjeżdżać.
- **Pipeline CI w jasnych, kolejnych etapach** (lint → build → test → deploy, fail-fast) — każdy
  projekt tego samego kształtu, żeby dało się to łatwo porównać/pokazać w portfolio jako spójny
  standard, nie przypadkowy zestaw skryptów per projekt.

## Design system — "Editorial Garage" (zastąpiony 2026-08-14, patrz "Workbench" niżej)

**Zastąpiony 2026-08-14.** Realny feedback po zobaczeniu w pełni zbudowanego Editorial Garage:
zbyt ubogi/generyczny na portfolio, właściciel poprosił o "mocno fancy, ale nie trzęsące myszką".
Porównano 4 klikalne makiety inspirowane realnymi referencjami (mode.com, b-egg.farm,
overrrides.com, crew.tubikstudio.com) — wygrał kierunek "Workbench" (patrz osobna sekcja niżej,
zaraz po tej). Ta sekcja zostaje jako historyczny zapis pierwszego kierunku, nie jako aktualny
opis strony — nic tu nie jest już wdrożone.

Kierunek ustalony 2026-07-23 po przejrzeniu 4 wariantów (moodboard: Dark Editorial, Bold Mono
Grid, Swiss Grid, Warm Paper Editorial) i zmiksowaniu ich pod kątem "designer UX + layout
magazynu o klasycznej motoryzacji". Dotyczy **portfolio shell**, nie tour-guide ani apki
finansowej — każdy projekt ma świadomie inny charakter (patrz sekcja "Wizja" wyżej).

**Idea przewodnia:** masthead magazynu (Octane/Petrolicious) + karta techniczna z broszury
klasycznego auta + rysunek techniczny (hairline, siatka). Motyw siatki/koordynatów (litery+cyfry)
jest wspólny dla planszy gry w statki i dla "kart technicznych" projektów — to jeden system, nie
dwa sklejone motywy.

### Paleta

| Rola | Kolor | Hex |
|---|---|---|
| Tło (papier) | kremowy | `#f2ece0` |
| Tekst główny (atrament) | prawie czarny, ciepły | `#201d19` |
| Tekst drugorzędny | ciemny szarobrąz | `#5a5347` |
| Hairline / obramowania kontenerów | brązowy beż | `#97815f` |
| Hairline wewnętrzny (cieńszy podział) | ciemniejszy brązowy beż | `#7d6a4c` |
| Akcent primary | zieleń wyścigowa | `#0b3d2e` |
| Akcent secondary | mosiądz | `#a9772f` |
| Stan zablokowany/nieaktywny | wyciszony beż-szary | `#c7bfae` |

**Poprawka kontrastu (2026-07-24):** oryginalne wartości tekstu drugorzędnego i obu hairline'ów
dawały kontrast wobec tła poniżej progu WCAG dla obramowań/tekstu (realnie wyliczone: tekst
drugorzędny ~5.0:1 — technicznie przechodziło AA, ale blisko granicy; hairline ~1.28:1,
hairline wewnętrzny ~1.54:1 — oba dużo poniżej wymaganych 3:1 dla granic komponentów UI, stąd
realny problem "nie widać obramowań" zgłoszony przez właściciela). Powyższe wartości dają: tekst
drugorzędny ~6.46:1, hairline ~3.18:1, hairline wewnętrzny ~4.42:1 — ten sam ciepły charakter,
po prostu ciemniejszy o tyle, żeby faktycznie było widać. Przy okazji poprawiono błędny opis w tej
tabeli — hairline wewnętrzny był numerycznie ciemniejszy niż hairline zewnętrzny mimo opisu
"jaśniejszy beż" (literówka/przeoczenie sprzed tej korekty, nie celowa decyzja).

**Audyt jednego źródła prawdy (2026-07-30):** sprawdzone realnie (grep, nie na wiarę) — zero
zahardkodowanych hexów/`rgb()`/`rgba()`/`hsl()` w jakimkolwiek `.css`/`.tsx`/`.ts` poza samym
`tokens.css`; wszędzie indziej kolory idą przez `var(--eg-*)`. Jeden świadomy wyjątek:
`public/favicon.svg` ma `#f2ece0`/`#0b3d2e` zahardkodowane wprost w atrybutach SVG — statyczny
plik ładowany przez przeglądarkę niezależnie od arkusza stylów, nie da się mu podać CSS custom
property z zewnątrz. Nieunikniona duplikacja na granicy systemów, nie przeoczenie — do ręcznej
aktualizacji, jeśli paleta się kiedyś zmieni.

### Typografia

- **Nagłówki / masthead** — serif (`Georgia, ui-serif, serif` — świadomie bez zależności od
  zewnętrznego fontu przez CDN, patrz ograniczenie widgetów Imagine, do rewizji przy realnej
  implementacji, gdzie można doładować font przez `@font-face`/self-hosted). Waga 700 dla
  głównego tytułu, italic dla linii akcentującej (np. drugi wers hero, cytaty).
- **Dane techniczne / etykiety / CTA** — monospace (`ui-monospace, monospace`), zawsze uppercase,
  `letter-spacing: 0.08–0.1em` — symuluje płytkę/kartę techniczną.
- **Body/opis** — systemowy sans-serif, zwykła waga, kolor drugorzędny.

### Zasady kompozycji

- Hairline (1px linie) zamiast cieni/grubych obwódek — brak gradientów/tekstur/dekoracji, spójne
  z ogólną zasadą "flat" przyjętą już w tour-guide.
- Motyw siatki/koordynatów powtarza się konsekwentnie jako spójny język wizualny (plansza gry,
  karty techniczne, docelowo być może też nagłówki sekcji).
- Stan zablokowany: zamaskowany tekst (kropki) + etykieta "ZABLOKOWANE" w kolorze neutralnym.
  Stan odblokowany: pełny kolor atramentu + strzałka w kolorze akcentu primary.

### Komponenty zidentyfikowane w makiecie (kandydaci do wydzielenia jako reużywalne)

- **Masthead bar** — nazwa + nawigacja + numer "wydania" (np. `VOL. 01 — 2026`)
- **Spec-plate box** — karta techniczna z wierszami etykieta/wartość, hairline między wierszami
- **Coordinate grid** — plansza z literami/cyframi jako nagłówki, komórki hit/miss/pusta
- **CTA badge** — bordered rectangle, monospace uppercase, bez wypełnienia (outline)
- **Skip-link** — subtelny, dashed underline, mono, zawsze dostępny obok mechaniki gry (patrz
  zasada UX w sekcji "Gamifikacja" wyżej — gra nigdy nie blokuje dostępu do treści)

### Do ustalenia później

- Wersja mobilna (plansza prawdopodobnie musi się skalować/zwężać; spec-plate box może
  przechodzić pod planszę zamiast obok)
- Zachowanie mastheadu na wąskich ekranach (chowana nawigacja?)
- Docelowa liczba/rozmieszczenie "celów" na planszy (roboczo: 6, jeden na sekcję portfolio)
- Realny font serif/mono do samodzielnego hostowania (na razie system fallback w makietach)

## Design system — "Workbench" (zastąpiony 2026-08-24, patrz "Atrament" niżej)

**Zastąpiony 2026-08-24.** Pełny redesign zamówiony u Cloud Design — pakiet handoff w
`design_handoff_landing_atrament/` (katalog w repo, zignorowany w git, patrz `.gitignore`).
Zmiana strukturalna, nie tylko kolorystyczna: gra w statki przestaje blokować treść, kafelki
zamieniają się w pionowy indeks projektów. Wygrany wariant: **2a ATRAMENT** (spośród tury
porównawczej trzech kolorystyk: Atrament / Papier / Czerwony blok, na kierunku "INDEKS" spośród
trzech układów: Siatka / Indeks / Warstwy — pełny kontekst decyzji w
`design_handoff_landing_atrament/Kierunki 2026.dc.html`). Ta sekcja zostaje jako historyczny
zapis, wdrażanie w toku (patrz "Design system — Atrament" niżej, sekcja "Plan wdrożenia").

## Design system — "Workbench" (pełny opis, historyczny — zastąpiony "Atramentem" 2026-08-24)

Zastąpił Editorial Garage (patrz sekcja wyżej) po realnym feedbacku, że ten pierwszy kierunek
wyszedł zbyt ubogo/generycznie jak na portfolio. Ustalony przez porównanie 4 klikalnych makiet
inspirowanych realnymi referencjami (mode.com, b-egg.farm, overrrides.com,
crew.tubikstudio.com) — wygrał kierunek D: taktylna korkowa tablica (pinboard) z
"przypiętymi" kartami projektów, font Big Shoulders Display. Kryteria wyboru: "mocno fancy, ale
nie trzęsące myszką" (żadnych gimmicków typu parallax-na-scrollu czy cursor-follow).

### Paleta (`src/styles/tokens.css`, prefiks `--wb-`)

| Token | Wartość | Rola |
|---|---|---|
| `--wb-paper` | `#bdb097` | tło strony (kraft/karton) |
| `--wb-card` | `#faf6ee` | tło kart (kremowy papier) |
| `--wb-divider` | `#e2dbc9` | delikatne linie podziału |
| `--wb-ink` | `#241f1a` | główny tekst |
| `--wb-ink-secondary` | `#463d33` | tekst drugorzędny |
| `--wb-hairline` | `#635745` | obwódki, cienkie linie |
| `--wb-hairline-inner` | `#584d38` | obwódki wewnętrzne (np. pudło na planszy) |
| `--wb-accent-primary` | `#6e2818` | główny akcent (trafienie, przyciski) |
| `--wb-accent-secondary` | `#4f3d10` | drugorzędny akcent (hover, podgląd) |
| `--wb-muted` | `#756a54` | tekst wyciszony |
| `--wb-crimson` | `#7a2a24` | status "w budowie" |
| `--wb-navy` | `#1e3a5f` | rzadki akcent (linki w treści) |
| `--wb-pin` | `#e8b923` | żółta pinezka — **wyłącznie dekoracyjny**, ~1.5:1 kontrastu, nigdy jako kolor tekstu/obwódki |
| `--wb-miss-bg` / `--wb-preview-bg` / `--wb-unlocked-bg` | — | tła stanów planszy |

Każda para tekst/tło zweryfikowana realnym przeliczeniem kontrastu WCAG (skrypt Node liczący
względną luminancję), nie na oko — ta sama rygorystyczność co przy Editorial Garage.

### Typografia

- **`--wb-font-display`**: `'Big Shoulders Display', 'Arial Narrow', sans-serif` — nagłówki,
  masthead, duże liczby. Wagi 600/800, wersaliki. Ładowany przez Google Fonts `<link>` w
  `index.html` (brak ograniczeń CSP na produkcji, w przeciwieństwie do Claude Artifacts, gdzie
  makiety musiały osadzać fonty jako base64).
- **`--wb-font-sans`**: `'IBM Plex Sans', ...` — treść, UI.
- **`--wb-font-mono`**: `'IBM Plex Mono', ...` — etykiety, współrzędne planszy, metadane.

### Kluczowe decyzje strukturalne

- **Karty projektów jako przypięte kartki** (`ProjectCard.css`) — lekka rotacja na
  odblokowanych kartach (naprzemiennie -1.4°/1°/-0.6° co 3. kartę), żółta pinezka
  (`--wb-pin`) w rogu, prostowanie + uniesienie na hover. Zablokowane karty są płaskie, bez
  pinezki, bez rotacji, tło `--wb-paper` zamiast `--wb-card` — czytelna semantyka "jeszcze nie
  podniesione z biurka".
- **Battleship jako płyta perforowana** (`Board.css`) — okrągłe otwory (`border-radius: 50%`)
  zamiast kwadracików, sama logika gry (`use-battleship.ts`, `Board.tsx`) niezmieniona, tylko
  warstwa wizualna.
- **Pełny bleed header/footer** — `.masthead`/`.site-footer` rozciągnięte na całą szerokość
  viewportu (tło + obwódka), treść wewnątrz (`__inner`) nadal ograniczona `max-width: 1440px`.
  Odpowiedź na feedback, że strona wyglądała za wąsko na tle referencji.
- **Floating/sticky plansza obok kart** (`use-sticky-board.ts`) — na szerokich ekranach (≥900px)
  plansza "podąża" za scrollem wzdłuż listy kart, zamiast znikać z widoku. **CSS
  `position: sticky` okazał się strukturalnie niemożliwy** — blokowany przez
  `.toc__view-panel-inner { overflow: hidden }`, potrzebny gdzie indziej (animacja przełączania
  spis-treści↔widok-szczegółów przez `grid-template-rows: 0fr↔1fr`) i niemożliwy do usunięcia.
  Potwierdzone izolowaną redukcją A/B poza realnym DOM-em, nie tylko teoretycznie. Rozwiązanie:
  własny hook liczący 3 stany scrolla (`static`/`fixed`/`bottom`) na `requestAnimationFrame`,
  aplikujący `position: fixed` przez inline style (świadomy, udokumentowany wyjątek od "brak
  inline styles" — wartości są przeliczane w locie z realnej pozycji scrolla, nie stałą decyzją
  projektową) oraz klasę CSS dla stanu "przypięty do dołu kontenera".
  Proporcja szerokości plansza:karty ≈ 4:6 (537px stała kolumna planszy na szerokich ekranach).
  Na wąskich ekranach (plansza NAD kartami) plansza rozciąga się na pełną szerokość, siatka
  komórek płynna (`1fr` + `aspect-ratio: 1`) zamiast stałych px.
- **Kolory tylko przez `color-mix()`, nigdy `rgba()` na sztywno** — każdy cień/przezroczysty
  wariant tokenu liczony jako `color-mix(in srgb, var(--wb-token) N%, transparent)`, żeby nie
  dryfował po ewentualnej zmianie wartości tokenu (znalezione i naprawione 2026-08-14 podczas
  audytu dobrych praktyk: 5 miejsc miało wpisany na sztywno `rgba()` odpowiadający wartościom
  tokenów — `App.css` tło kropkowane, `ProjectCard.css` ×3 cienie, `Board.css` cień planszy).
- **Znana, zaakceptowana duplikacja**: próg `900px` (przełącznik wąski/szeroki reżim) występuje
  osobno w `Board.css`, `Toc.css` i jako stała `WIDE_REGIME_QUERY` w `use-sticky-board.ts` — nie
  ma jednego źródła prawdy między arkuszami CSS bez preprocesora (którego ten projekt nie ma).
  JS-owa strona centralizuje przynajmniej swoją własną kopię jako nazwaną stałą.

### Etapy wdrożenia (status na 2026-08-14)

1. ✅ Fundament (tokeny, fonty, masthead/hero/footer full-bleed)
2. ✅ Karty projektów + plansza battleship (pinboard reskin, sticky board, poprawki po
   realnym review: kolizja plansza+karta, czytelność tła, status "w budowie" dla Serwisant)
3. ⏳ Nie rozpoczęte: strony About/Skills/Kontakt
4. ⏳ Nie rozpoczęte: widoki szczegółów tour-guide/Insider (ostrożnie, bez naruszania
   osadzonych widgetów/mikrofrontendów)

## Design system — "Atrament" (aktualny kierunek wizualny portfolio shell, od 2026-08-24)

Zastąpił Workbench (patrz sekcja wyżej) — pełny redesign zamówiony u Cloud Design, oparty na
design systemie **Modernist**: ciemny atrament, Archivo, jedna czerwień, zero zaokrągleń, mocne
linie 2px, zdjęcia czarno-białe. Handoff (README + prototypy `.dc.html` + zrzuty + zasoby) leży w
`design_handoff_landing_atrament/`, świadomie zignorowanym w git (materiały referencyjne, nie kod
produkcyjny — patrz `.gitignore`).

Zmiana strukturalna, nie tylko kolorystyczna:

1. Treść dostępna od pierwszej sekundy — gra w statki nie blokuje już niczego, schodzi do
   opcjonalnej szuflady.
2. Kafelki-fiszki (`spec-plate`) zamieniają się w jeden pionowy indeks — cztery wiersze pełnej
   szerokości.
3. Nowe sekcje: pasek statystyk, band z żywym mikrofrontendem (`TourGuideWidget`), pozioma
   galeria "O mnie", banner kontaktu jako zamknięcie strony.

### Paleta (`src/styles/tokens.css`, prefiks `--md-*`)

| Token | Wartość | Rola |
|---|---|---|
| `--md-ink` | `#201e1d` | tło całej strony |
| `--md-ink-raised` | `#2d2b2b` | tło podniesionych paneli (głębia przez warstwy, nie cień) |
| `--md-paper` | `#f3f2f2` | tekst główny na atramencie; tło wariantu jasnego |
| `--md-accent` | `#ec3013` | primary CTA, hover wiersza indeksu, banner kontaktu |
| `--md-accent-hover` | `#ff563c` | akcent na ciemnym tle |
| `--md-accent-700` | `#ae1800` | akcent jako tekst na jasnym tle |
| `--md-neutral-300` / `--md-neutral-700` | `#d7d3d3` / `#605d5d` | linie/tekst na wariancie jasnym |
| `--md-rule` / `--md-rule-soft` | `color-mix(...)` od `--md-paper` | linie 2px główne/wewnętrzne |
| `--md-text-80` / `--md-text-62` | `color-mix(...)` od `--md-paper` | akapity / mono etykiety |
| `--md-radius` | `0` | nigdy nie zaokrąglać niczego |

Typografia: **Archivo** 800 (nagłówki, uppercase) i 400 (tekst), **IBM Plex Mono** 400–500
(etykiety/dane) — Big Shoulders Display i IBM Plex Sans wychodzą z użycia. Linie zawsze 2px
(świadome zerwanie z Workbenchowym hairline 1px). Cienie: brak, głębia przez warstwy tła.

### Plan wdrożenia

Sekcja po sekcji, nie jeden duży skok — inaczej niż Editorial Garage → Workbench (prosty reskin,
ta sama struktura), Atrament zmienia strukturę niektórych sekcji całkowicie (indeks projektów,
szuflada statków), więc przez etapy 1-6 tokeny **przejściowo współistniały**: `--md-*` (nowe)
obok `--wb-*` (stare, niezmienione), dopóki dana sekcja nie została faktycznie przepisana. To
samo dotyczyło fontów w `index.html` (Archivo + Big Shoulders Display + IBM Plex Sans ładowane
naraz). **Etap 7 (2026-08-24) zakończył migrację całościowo** — ostatnie 4 pliki przepisane,
`--wb-*` i stare fonty usunięte w całości; poniższa paleta/typografia jest teraz jedynym systemem
na całej stronie, bez żadnego pozostałego Workbenchowego wyjątku.

1. ✅ **Fundament + Masthead + Hero + Stopka** (2026-08-24) — tokeny/fonty współistnieją ze
   starymi (patrz wyżej); masthead: usunięty "W budowie"/VOL, dodany PL/EN (na razie wyłącznie
   wizualny — treść EN nie istnieje), link "Umiejętności" na razie `disabled` (sekcja jeszcze nie
   istnieje jako cel nawigacji); linki nawigacji **wciąż stary mechanizm state-driven**
   (`activeNavTarget`/`openSectionId`), nie realne `<a href="#projekty">` — realne kotwice dopiero
   gdy odpowiednie sekcje istnieją jako prawdziwe elementy DOM z tymi id (patrz komentarz w
   `App.tsx`). Hero: `display:grid` dwie kolumny, `container-type:inline-size` na kolumnie
   tekstu + `font-size:min(132px,14cqw)` (**nie `vw`** — handoff wprost ostrzega, że `vw` realnie
   ucina "FRAMEWORKI" przy ~900px, bo kolumna tekstu jest węższa niż viewport), trzecia linia
   H1 jako outline (`-webkit-text-stroke`), zdjęcie `night_drive.webp` przez
   `filter: grayscale(1) contrast(1.08)`. Hero pełnoszerokościowy (`.hero` tło do brzegów
   viewportu + `.hero__inner` max-width:1440px) — ten sam wzorzec co `.masthead`/`.site-footer`,
   wyciągnięty z `.landing__content` (dzielonego dziś z jeszcze-niezmigrowanym `<Toc>`) żeby móc
   nieść własne ciemne tło niezależnie od kraftowego tła Workbencha pod spodem. **Świadomy,
   przejściowy szew**: ciemny hero bezpośrednio nad jasnym (wciąż Workbench) Tokiem, zniknie gdy
   Toc zostanie zmigrowany w etapie 3. Zweryfikowano żywo (tsc/lint/build + przeglądarka, 375px i
   1280px, zero przewijania w poziomie) — sticky-bottom stopki nachodzącej na treść przy
   przewijaniu w dół to potwierdzone, **pre-existing** zachowanie (identyczne już na produkcyjnym
   Workbenchu przed tą zmianą, sprawdzone bezpośrednio na kubsiw.com) — nie regresja tej sesji,
   poza zakresem tego etapu.
2. ✅ **Pasek statystyk + Indeks projektów** (2026-08-24, `id="projekty"`) — nowy
   `src/features/project-index/` (`StatsBar`, `ProjectIndex`, `ProjectIndexRow`, dane w
   `project-rows.ts` — celowo OSOBNE od `toc/sections.ts`: `note`/`stack` różnią się treścią od
   `Section.description`, potwierdzone bezpośrednim porównaniem z handoffem, nie przypadkowa
   duplikacja). Renderowany między Hero a starym `.landing__content` (Toc) — Toc filtruje teraz
   `navGroup !== 'projects'`, więc tour-guide/insider/serwisant znikają ze starego pinboardu (nie
   dublują się) i są zawsze widoczne w nowym indeksie, niezależnie od stanu statków. Dodany nowy
   4. wiersz "Ten shell" (`Section.id: 'portfolio-shell'`, sam projekt jako meta-pozycja) — klikalny,
   ale bez własnej treści w `SectionDetail` jeszcze (istniejący placeholder "Treść w
   przygotowaniu"), świadomie nie budowane teraz. Nieklikalne wiersze (Serwisant, brak
   `hasDetailView`) renderują się jako zwykły `<div>`, nie `disabled <button>` — bez sugerowania
   czytnikom ekranu interaktywności, której nie ma.
   **Dwa realne bugi złapane żywym pomiarem `getBoundingClientRect`, nie na oko**: (1) statyczny
   wiersz miał `className="index-row index-row--static"` (obie klasy naraz) zamiast samego
   `index-row--static` — `.index-row`'s own `cursor:pointer` z pierwszej klasy wygrywało mimo
   drugiej, `cursor` faktycznie pokazywał "pointer" na nieklikalnym wierszu aż do naprawy. (2)
   wysokości wierszy różniły się drastycznie (141–296px) mimo identycznego układu — `height:100%`
   na `<img>` wewnątrz grid itema, którego wysokość dopiero się liczy, rozwiązuje się jako `auto`
   (naturalne proporcje obrazka), nie jako wypełnienie wiersza; portretowy `insider_preview.webp`
   (430×752) ciągnął cały swój wiersz do ~294px. Naprawione przez `position:absolute; inset:0` na
   `<img>` zamiast `width/height:100%` — odrywa obrazek od cyklicznej zależności od wysokości
   własnego rodzica, `object-fit:cover` faktycznie kadruje do wysokości ustalonej przez pozostałe
   kolumny. Zweryfikowane po naprawie: wszystkie 4 wiersze dokładnie 141.6px na desktopie.
   Zweryfikowano też klik-przez do `SectionDetail` (Tour Guide → realny widget w treści, Ten
   shell → placeholder), zero przewijania w poziomie na 375px i 1280px, `tsc`/`lint`/`build`
   czyste.
3. ✅ **Band mikrofrontendu** (2026-08-24) — nowy `src/features/microfrontend-band/
   MicrofrontendBand.tsx`, dwukolumnowy (tekst + `TourGuideWidget`, ten sam istniejący komponent
   już używany w `toc/ProjectCard.tsx` — reużyty wprost, nie skopiowany). Skoro tour-guide nie
   renderuje się już przez stary pinboard (etap 2, filtr `navGroup !== 'projects'`), to jedyne
   miejsce, gdzie ten widget teraz w ogóle się montuje — brak podwójnej żywej mapy na stronie.
   **`isolation:isolate` przeniesione wprost z już sprawdzonej naprawy w `toc/ProjectCard.css`**
   (`.tour-guide-widget`) — ten sam realny bug (Leaflet wewnątrz widgetu ustawia własne wysokie
   z-indexy, konkurujące ze sticky mastheadem/stopką bez własnego kontekstu stackowania), nie
   odkrywany drugi raz. **Świadomie bez `height:100%`** na `.tour-guide-widget` wewnątrz nowej
   ramki — ta sama pułapka co przy zdjęciach w indeksie projektów (etap 2): `min-height` na
   rodzicu nie ustanawia definitywnej wysokości, więc `height:100%` na dziecku by się nie
   rozwiązało; zamiast tego zostawiona naturalna, wewnętrzna wysokość mapy Tour Guide (400px,
   `--poi-map-height`, sterowane wewnątrz repo tour-guide) — z zapasem spełnia `min-height:320px`
   z handoffu bez potrzeby wymuszania dokładnej wartości. Paragraf w lewej kolumnie napisany od
   nowa (handoff podaje tylko parametry stylu, nie treść — "Fragment Tour Guide / działa w tej
   stronie" H3 i "Otwórz całą aplikację ↗" CTA są jedynym dosłownym tekstem w tej sekcji handoffu).
   Zweryfikowano żywo: prawdziwy shadow DOM z 6 kaflami mapy i 43 realnymi markerami POI (nie
   placeholder), zero przewijania w poziomie na 375px i 1280px, `tsc`/`lint`/`build` czyste.
4. ✅ **Statki jako szuflada** (2026-08-24) — nowy `src/features/battleship-drawer/`
   (`BattleshipDrawer.tsx`), przeniesione tu bez zmiany logiki gry z `toc/`: `Board.tsx`/
   `Board.css`/`use-battleship.ts` (`git mv` odpowiednika — fizyczne przeniesienie plików, ta
   sama zawartość mechaniki). **Zmiana modelu stanu, dokładnie jak zaplanowano**: `skipped`/
   `boardCollapsed`/`useStickyBoard` usunięte całkowicie (plik `use-sticky-board.ts` skasowany —
   był potrzebny tylko, gdy plansza sąsiadowała ze scrollowalną kolumną kart; szuflada nie ma tego
   problemu), nowy `open` (lokalny stan w `BattleshipDrawer`, domyślnie `false`) + statki celują
   teraz w 6 **notek** (`notes.ts`), nie w `SECTIONS` — `unlockedSectionIds` → `revealedNoteIds`,
   `sectionId`/`sectionTitle` → `noteId`/`noteTitle` w całym `use-battleship.ts`.
   **Realny, cichy bug znaleziony i naprawiony przy okazji tego przepisania**: statki od zawsze
   celowały 1:1 w `SECTIONS.length` (6, `SHIP_SIZES` ma dokładnie 6 rozmiarów) — etap 2 tego
   samego redesignu dodał 7. sekcję (`portfolio-shell`, "Ten shell") do `SECTIONS`, więc jeden
   losowy statek na grę dostawał `SHIP_SIZES[6] === undefined` → 0-komórkowy, nigdy niezatapialny
   "statek", co realnie mogło trwale blokować losowo wybraną kartę (about/skills/kontakt) w starym
   mechanizmie bramkowania. Nieujawnione wcześniej, bo te sekcje w danym momencie mogły akurat nie
   trafić na wylosowany pechowy indeks — naprawione tym samym przepisaniem (statki celują w stałe
   6 notek, niezależne od `SECTIONS.length`), nie osobną łatką.
   **Treść notek "za kulisami" — nieustalona w handoffie (tylko liczba: 6), napisana wprost z
   realnych, udokumentowanych incydentów** z tego i pozostałych projektów (CSP na tour-guide,
   JS-owy sticky z tej samej sesji redesignu, bug z wysokością wiersza z etapu 2 wyżej, konwencja
   "AI nigdy nie udaje faktu" z Insidera/Serwisanta, Shadow DOM + Leaflet CSS z osadzenia
   tour-guide, Traefik+Compose na jednym VPS) — nie wymyślona treść generyczna, każda faktycznie
   się wydarzyła i jest gdzieś już udokumentowana (`CLAUDE.md` odpowiednich repo).
   **Board.css re-skinowany WYŁĄCZNIE przez selektory potomkowe** w nowym `BattleshipDrawer.css`
   (`.battleship-drawer .board__cell`, 2 klasy — wyższa specyficzność niż 1-klasowe reguły
   `Board.css`), sam plik `Board.css` nietknięty — ten sam, już ustalony w tym repo sposób
   nadpisywania współdzielonego komponentu bez jego kopiowania. Kwadratowe komórki
   (`border-radius:0`, zerwanie z okrągłymi "otworami" Workbencha) bezwarunkowo, na każdej
   szerokości.
   **Realny bug złapany żywą weryfikacją w przeglądarce (nie na oko)**: pierwsza wersja
   zastosowała stały rozmiar komórki 34×34 z handoffu **bezwarunkowo** (bez media query) — na
   375px `document.documentElement.scrollWidth` realnie wynosiło 409px zamiast 375px (dokładnie
   ~34px nadwyżki, ten sam rząd wielkości co jedna komórka). `Board.css` ma już gotowe,
   sprawdzone rozwiązanie tego dokładnego problemu (płynne komórki `1fr`+`aspect-ratio` poniżej
   900px, stałe px od 900px wzwyż) — naprawione przez ograniczenie stałego rozmiaru 34×34 do tego
   samego progu 900px zamiast bezwarunkowo, więc poniżej 900px dziedziczy płynną siatkę bez zmian.
   **Drugi, niepowiązany realny bug znaleziony przy tej samej weryfikacji, też naprawiony**: sam
   `.masthead` (z etapu 1, nie tego etapu) miał identyczny objaw na 375px — nazwa + 4 linki nawigacji
   + PL/EN nie mieściły się w jednym wierszu bez zawijania. PL/EN jest już udokumentowane jako
   "wyłącznie wizualne" (bez realnej funkcji) — pierwsze do ukrycia na wąskim ekranie
   (`@media (max-width:480px) { .masthead__lang { display:none; } }`), zamiast skracać realną
   nawigację.
   **Wydzielony wspólny `.btn-outline`** (`index.css`) przy 3. wystąpieniu identycznego stylu
   "przycisk-obwódka na ciemnym tle" (hero secondary CTA, band mikrofrontendu, teraz szuflada
   statków) — ten sam "wydziel przy 3. wystąpieniu" precedens, co `.link-dashed`/`.plate-emphasized`
   już w tym pliku.
   Zweryfikowano żywo: pełny przebieg gry (100 kliknięć programowo, `TRAFIENIA: 16/16`,
   `NOTKI ODKRYTE: 6/6`, wszystkie 6 notek renderuje się z realną treścią), kwadratowe komórki
   34×34/`border-radius:0` na desktopie (`getComputedStyle`, nie tylko wizualnie), płynna siatka
   poniżej 900px, zero przewijania w poziomie na 375px zarówno przy zwiniętej jak i otwartej
   szufladzie, `tsc`/`lint`/`build` czyste.
   **✅ Cofnięcie decyzji "treść dostępna od pierwszej sekundy" (2026-08-25), realny feedback
   właściciela.** Handoff i etap 4 powyżej explicite zakładały, że statki nigdy nic nie
   blokują — właściciel poprosił wprost o odwrócenie tego: plansza ma znowu bramkować resztę
   strony, tak jak w starym Workbenchu, ale z dwiema świadomymi poprawkami względem tamtej wersji
   (potwierdzonymi przez `AskUserQuestion`, nie zgadywane): (1) **zakres blokady to wszystko
   poniżej hero** (statystyki, indeks projektów, mikrofrontend, o mnie, umiejętności, kontakt,
   stopka — nie tylko indeks), hero i sama plansza zostają zawsze widoczne; (2) **warunek
   odblokowania to zatopienie wszystkich statków** (nie np. pierwszy strzał), z dużo bardziej
   widocznym przyciskiem "Pomiń" niż w Workbenchu (pełne czerwone tło jak `.hero__cta-primary`,
   nie cichy link).
   **`App.tsx`**: `BattleshipDrawer` przeniesiony w kolejności zaraz po `<main className="hero">`,
   przed `<StatsBar />`. Nowy stan `skipped`/`allShipsSunk` (→ `unlocked = skipped ||
   allShipsSunk`) — reszta sekcji renderuje się warunkowo (`{unlocked && (...)}</>`), **zwykłe
   warunkowe renderowanie, nie animowane zwijanie** jak gdzie indziej w tym repo (DetailOverlay,
   panele AboutGallery) — zablokowana treść to kilka pełnych sekcji ze zdjęciami i osadzonymi Web
   Componentami (mapa tour-guide, cała apka Insider), więc nie ma sensu ich w ogóle
   montować/ładować, dopóki naprawdę nie są widoczne. Klik na dowolną kotwicę prowadzącą do
   jeszcze zablokowanej treści (4 linki nagłówka + oba hero CTA) odblokowuje **i** doscrolluje do
   celu po zamontowaniu (`pendingAnchorId` + podwójny `requestAnimationFrame`, żeby poczekać na
   realny paint po zamontowaniu nowej treści — ten sam powód co `PANEL_REVEAL_MS` gdzie indziej w
   tym pliku) — bez tego klik np. w "Projekty" przed odblokowaniem prowadziłby donikąd (element
   jeszcze nie istnieje w DOM-ie).
   **`BattleshipDrawer.tsx`**: `useBattleship()` zostaje self-contained (nie podniesiony do App)
   — App potrzebuje tylko 2 callbacków (`onAllShipsSunk`, `onSkip`), nie całego stanu gry w
   propsach. Stary przycisk "Otwórz/schowaj planszę" (etap 4, domyślnie zwinięta) zniknął —
   plansza renderuje się od razu otwarta, skoro jest teraz głównym, wymaganym elementem
   interakcji, a nie opcjonalnym dodatkiem schowanym za kolejnym klikiem (podwójna bramka
   byłaby złym UX). Kopia w nagłówku (kicker/tytuł/opis) zmienia się zależnie od `unlocked` —
   przed odblokowaniem tłumaczy zasadę gry, po odblokowaniu zachęca do dokończenia planszy dla
   samych notek.
   **✅ Automatyczne zwijanie planszy po odblokowaniu (2026-08-25), drugi kawałek tego samego
   realnego feedbacku** — `.battleship-drawer__panel`/`--panel--open`/`.panel-inner` (usunięte
   chwilę wcześniej w tym samym etapie jako rzekomo martwe, przywrócone) wraca jako mechanizm
   zwijania: nowy stan `collapsed` w `BattleshipDrawer.tsx`, efekt na `[unlocked]` (nie
   `[allSunk]`/`onSkip`) ustawia `collapsed(true)` **dokładnie raz**, w momencie przejścia
   false→true — `unlocked` nigdy nie wraca do `false`, więc późniejsze ręczne rozwinięcie
   przyciskiem "Pokaż planszę ↓" (widocznym tylko po odblokowaniu, w miejscu, gdzie wcześniej był
   przycisk "Pomiń") nie zostanie przez ten efekt cofnięte. Dotyczy identycznie obu ścieżek
   odblokowania (Pomiń i zatopienie wszystkich statków), zgodnie z wprost wyrażoną prośbą
   właściciela "to samo jak użytkownik sam rozwiąże".
   Zweryfikowano żywo: świeże wejście na stronę renderuje wyłącznie masthead/hero/
   battleship-drawer (`Array.from(landing.children)`, reszta sekcji faktycznie nieobecna w
   DOM-ie, nie tylko ukryta CSS-em); klik "Pomiń" montuje resztę stron i zwija planszę do 0
   wysokości (`getBoundingClientRect().height === 0`), przycisk zamienia się na "Pokaż planszę
   ↓", ponowny klik realnie rozwija z powrotem; klik hero CTA "Zobacz projekty →" na
   zablokowanej stronie odblokowuje i doscrollowuje dokładnie do `#projekty` (zmierzone
   `getBoundingClientRect().top`, nie tylko `scrollY`); zero przewijania w poziomie na 375px
   zarówno zablokowanej, jak i odblokowanej stronie; `tsc`/`lint`/`build` czyste.
5. ✅ **"O mnie" (pasek pozioki) + Umiejętności (dwie kolumny)** (2026-08-24) — nowy
   `src/features/about/AboutSection.tsx` (nagłówek + pasek 5 kafli, zawsze widoczny, `id="o-mnie"`)
   i nowy top-level `src/features/skills/` (przeniesione z `toc/skills/`: `SkillsSection.tsx`
   zamiast `SkillsDetail.tsx`, `skills-data.ts` bez zmian) — obie sekcje **zawsze widoczne na
   stronie**, nie za klikiem, w przeciwieństwie do starego mechanizmu (kafelek pinboardu →
   `SectionDetail`). `about`/`skills` usunięte z pinboardu `Toc` (`Toc.tsx` filtruje teraz
   `id !== 'about'` obok istniejącego `navGroup !== 'projects'`) — zostaje tam tylko "contact" do
   etapu 6. Wpis `skills` **usunięty całkowicie** z `SECTIONS`/`sections.ts` (nic już go nie
   potrzebuje — `SkillsSection` nie routuje się przez `SectionDetail`); wpis `about` **zostaje**
   (samo `title`/`description`/`hasDetailView`, bez `coverPhoto` — martwe po usunięciu z
   pinboardu), bo `AboutGallery` dalej otwiera się przez istniejący mechanizm `SectionDetail`.
   **Klik kafla w AboutSection otwiera AboutGallery od razu na wybranym dziale**, nie na siatce —
   nowy `AboutGallery`'s `initialPassionId` prop (`useState(initialPassionId)`, świeży mount za
   każdym otwarciem, bez efektu synchronizującego), przekazywany `App.tsx` → `Toc.tsx` →
   `SectionDetail.tsx` → `AboutGallery.tsx` jako nowy stan `aboutPassionId` (`handleOpenAboutPassion`
   ustawia go i wywołuje istniejący `handleSectionChange('about')` — reużyty mechanizm, nie drugi
   równoległy).
   **Realna treść zamiast ilustracyjnych przykładów z handoffu, ponownie**: `SkillsSection`
   zachowuje bogatą, już wcześniej napisaną treść `SKILL_PLATES` (cytaty, grupy z tagami, notka "Jak
   naprawdę pracuję z AI", link do CV) zamiast spłaszczać ją do prostych wierszy "nazwa/meta" z
   makiety handoffu — 2 istniejące `SKILL_PLATES` już 1:1 odpowiadają dwóm kolumnom handoffu
   ("Fundament..."/"Zbudowane dla tego portfolio"), więc handoff dał układ/kolorystykę, nie
   dosłowną treść do skopiowania (ten sam precedens co `project-index`/`battleship-drawer` notes).
   Link CV stylem `.btn-outline` (współdzielona klasa z etapu 4) — pasuje dosłownie pod opis
   handoffu "styl secondary button".
   **Realny, cichy bug w danych znaleziony przy budowie AboutSection, naprawiony w dwóch
   miejscach naraz**: handoffowe "44 zdjęcia w galerii" (już użyte w `StatsBar` z etapu 2) okazało
   się nieaktualne wobec realnych danych `passions.ts` (51 zdjęć) — sprawdzone bezpośrednim
   przeliczeniem, nie na oko. Naprawione wspólnym `getTotalPhotoCount()` (nowy eksport w
   `passions.ts`, obok samych danych — jedno źródło prawdy), użytym w obu miejscach
   (`AboutSection`/`StatsBar`), żeby te dwie liczby nigdy więcej nie mogły się rozjechać.
   **Masthead: "O mnie"/"Umiejętności" zamienione na realne kotwice** (`<a href="#o-mnie">`/
   `<a href="#umiejetnosci">`), bo ich sekcje istnieją teraz jako prawdziwe elementy DOM z tymi
   id — stary mechanizm (scroll do `#section-about`, kliknięcie ustawiające `activeNavTarget`) by
   się tu po prostu zepsuł, skoro `#section-about` już nie istnieje (karta usunięta z pinboardu).
   "Projekty"/"Kontakt" **świadomie zostają** state-driven (`<button>`) — częściowa konwersja tylko
   2 z 4 linków, nie wszystkich na raz, żeby nie robić nawigacji dwoma niespójnymi mechanizmami na
   stałe; pełna, jednorazowa konwersja wszystkich 4 dopiero w etapie 7, gdy `#kontakt` też będzie
   realną sekcją (etap 6). `.masthead__nav button, .masthead__nav a` — wspólny reset/hover/active,
   rozszerzony z samego `button` (ten sam realny bug z 2026-08-14 o specyficzności
   `button.masthead__nav-item--active` vs `.masthead__nav-item--active`, teraz też dla `a`, żeby
   nie wprowadzić go drugi raz).
   Zweryfikowano żywo: klik kafla "Motoryzacja" otwiera `AboutGallery` bezpośrednio na zdjęciu
   `garage.webp` z podpisem "Butelka oleju..." (nie na siatce), 5 kafli / 2 kolumny umiejętności /
   31 tagów / link CV (`/cv/Jakub_Siwinski_CV.pdf`) wszystkie realnie w DOM-ie, oba nowe linki
   nagłówka wskazują poprawne `href`, `SkillsDetail-*.js/css` zniknęły z outputu builda (lazy
   chunk faktycznie usunięty, nie tylko martwy kod), zero przewijania w poziomie na 375px (z
   otwartą galerią i bez), `tsc`/`lint`/`build` czyste.
6. ✅ **Banner kontaktu + pełne sprzątanie starego pinboardu** (2026-08-24) — nowy
   `src/features/contact/ContactBanner.tsx` (jedyna sekcja na stronie z tłem `--md-accent`,
   `id="kontakt"`, H2 "Zbudujmy / coś razem" + 3 linki mono wyrównane do prawej, adresy
   identyczne jak w usuniętym `ContactLinks.tsx`). Stopka bez zmian (już zrobiona w etapie 1).
   **Ten etap okazał się większy niż "dobuduj banner"** — usunięcie ostatniej sekcji z pinboardu
   ("Kontakt") zostawiłoby pustą, złamaną siatkę w starym `Toc`, więc cały pinboard
   (`ProjectCard.tsx`/`.css`, `ContactLinks.tsx`/`.css`) i jego mechanizm nawigacji stały się w
   pełni martwe w tym samym momencie, nie stopniowo — sprzątnięte od razu, nie odłożone (ten sam
   precedens co usunięcie wpisu `skills` z `SECTIONS` w etapie 5, tylko na większą skalę):
   - **`Toc.tsx`/`Toc.css` → `DetailOverlay.tsx`/`.css`** (rename, nie tylko przeniesienie — rola
     skurczyła się z "spis treści + siatka kart + przełącznik widoku szczegółowego" do samego
     przełącznika: rozwijanej nakładki na `SectionDetail`, kolapsującej do ~0 wysokości, kiedy nic
     nie jest otwarte). Ten sam sprawdzony mechanizm `grid-template-rows: 0fr↔1fr` co wcześniej,
     tylko jeden panel zamiast dwóch (nie ma już drugiego, "zamkniętego" stanu z treścią do
     krzyżowego przenikania).
   - **`ProjectCard.tsx`/`.css` i `ContactLinks.tsx`/`.css` usunięte całkowicie** — zweryfikowane
     przed usunięciem, że nic poza `Toc`/`ProjectCard` ich nie importuje. `.plate-emphasized`
     (`index.css`, współdzielona klasa Workbencha) też usunięta — jedyny pozostały konsument
     (`ProjectCard`) właśnie zniknął.
   - **`Section` (sections.ts) drastycznie uproszczony** — `navGroup`/`coverPhoto`/
     `hideDescription`/`inProgress` usunięte (służyły wyłącznie już nieistniejącemu
     `ProjectCard`), zostało tylko `id`/`title`/`description`/`hasDetailView` — dokładnie to,
     czego dziś potrzebuje `SectionDetail`. Wpis `contact` usunięty z `SECTIONS` (jak `skills` w
     etapie 5) — nic już go nie potrzebuje.
   - **Cała nawigacja masthead to teraz zwykłe `<a href="#...">`** (wszystkie 4: Projekty/O mnie/
     Umiejętności/Kontakt) — `activeNavTarget`/`handleNavClick`/`displayNavTarget` i połowa
     dużego `useEffect`a w `App.tsx` (scroll-do-podświetlonej-karty) usunięte z App.tsx w całości,
     zostawiając tylko drugą połowę (scroll do otwartego widoku szczegółowego), wciąż potrzebną
     dla kliknięć wierszy Indeksu projektów/kafli "O mnie". **Realny, wcześniej niezłapany bug
     odkryty przy tym sprzątaniu**: "Projekty" w nagłówku był już cicho zepsuty od etapu 2 — stary
     mechanizm scrollował do `#section-${id}` (konwencja id starego `ProjectCard`), ale nowy
     `ProjectIndexRow` (etap 2) nigdy nie renderował takiego id, więc klik po prostu nic nie
     robił, bez żadnego błędu w konsoli. Nikt tego nie zgłosił, bo `#projekty` (na samym
     `<ProjectIndex>`) i tak jest widoczne od razu przy starcie strony. Naprawione tym samym
     przejściem na realną kotwicę.
   **Realny bug złapany na żywo po tym sprzątaniu, nie od razu**: "Umiejętności"/"Kontakt" jako
   pełne, nie-`disabled` linki (wcześniej: `disabled` placeholder / `<button>` ze stanem) plus
   nazwa nie mieściły się już w jednym wierszu na 375px nawet z ukrytym PL/EN
   (`document.documentElement.scrollWidth` realnie 386px) — naprawione zmniejszeniem `gap` w
   `.masthead__nav` z 26px do 14px poniżej 480px (ten sam "mniejszy odstęp, nie skracanie treści"
   duch co wcześniejszy fix PL/EN). **Nieoficjalny, dodatkowy sprawdzian na 320px pokazał dalsze
   30px przewijania** — nienaprawione świadomie: 375px jest jedynym oficjalnie zweryfikowanym
   progiem w tym projekcie (powtarzane w każdym poprzednim etapie), 320px pojawia się gdzie
   indziej w tym pliku tylko raz, przy planszy statków — warta odnotowania jako znane, drobne
   ograniczenie poniżej oficjalnego baseline'u, nie pilna do naprawy teraz.
   Zweryfikowano żywo: `#kontakt`/wszystkie 4 `href` poprawne, klik wiersza "Tour Guide" otwiera
   `DetailOverlay` (tytuł "Projekt 01 — Tour Guide"), przycisk "Wróć" poprawnie zamyka (sprawdzone
   asynchronicznie, nie od razu po `.click()` — React batchuje), `Stamp.tsx` (nieużywany od etapu
   1 w mastheadzie) dostał własny leniwie ładowany chunk zamiast siedzieć w głównym bundlu (dowód,
   że sprzątanie realnie zmniejszyło eager bundle, nie tylko usunęło pliki), zero przewijania w
   poziomie na 375px i 1280px (po poprawce gap), `tsc`/`lint`/`build` czyste.
7. ✅ **Sprzątanie: ostatni Workbench usunięty, redesign "Atrament" ukończony** (2026-08-24) —
   wszystkie 4 pozostałe pliki restylowane: `SectionDetail.css`, `AboutGallery.css`,
   `InsiderDetail.css`, `TourGuideDetail.css`, plus `Stamp.css`, `Board.css`
   (`battleship-drawer/`), `index.css` (`body`, `.link-dashed`) i `App.css` (`.landing`).
   Mechaniczna zamiana tokenów (`--wb-ink`→`--md-paper`, `--wb-ink-secondary`→`--md-text-80`,
   `--wb-hairline(-inner)`→`--md-rule`, `--wb-accent-primary`/`--wb-accent-secondary`→
   `--md-accent-hover`, `--wb-font-display`→`--md-font-display`, `--wb-font-mono`→
   `--md-font-mono`) + podniesienie każdej `1px solid` obwódki do `2px` (konwencja Atramentu:
   "wszystkie linie 2px, nigdy hairline" — nie tylko zamiana kolorów, żeby faktycznie pasowało do
   reszty strony). Dwa świadome, udokumentowane wyjątki NIE ruszone (potwierdzone jeszcze raz
   przed edycją, że to wciąż aktualne, nie przypadkowo ominięte): `#0a0e14`/`#7c8794` w
   `InsiderDetail.css` — realny kolor tła/tekstu osadzonego widgetu Insidera, musi się zgadzać z
   jego własnym `--insider-bg`, nie z tokenem tej strony.
   **`Board.css` (battleship-drawer/) scalony z powrotem do jednego pliku** — do tego etapu miał
   nadal Workbenchowe (okrągłe, kraftowe) wartości jako "bazowe", nadpisywane wyłącznie przez ~80
   linii selektorów potomkowych w `BattleshipDrawer.css` (z etapu 4, bo Board wtedy jeszcze
   teoretycznie mógł być używany gdzie indziej). Skoro Board jest dziś używany WYŁĄCZNIE wewnątrz
   `.battleship-drawer`, ta duplikacja nie miała już uzasadnienia — bazowe wartości w `Board.css`
   są teraz natywnie "Atrament", nadpisania w `BattleshipDrawer.css` usunięte (jedna z nich,
   `.battleship-drawer .board`, okazała się całkowitym no-opem po scaleniu — usunięta też).
   **`.landing` dostał właściwą teksturę "ziarna" z handoffu**, do tego etapu jeszcze
   niewdrożoną — cała ta migracja zachowywała dotąd starą, kropkowaną teksturę korkowej płyty
   Workbencha, tylko przemianowaną na nowe tokeny (etap 1). Prawdziwe ziarno filmowe z handoffu
   (`radial-gradient(...), background-size:5px 5px, opacity:.5`) zaimplementowane jako `.landing::before`,
   nie bezpośrednio `background-image` na `.landing` — realny namysł podczas budowy: skoro każda
   sekcja ma własne, w pełni kryjące tło, ziarno leżące POD treścią (naturalny wybór dla
   pseudo-elementu z `position:fixed` bez z-index) byłoby zawsze całkowicie zasłonięte i w ogóle
   niewidoczne — poprawione jawnym `z-index:30` (wyżej niż masthead:20), żeby faktycznie leżało
   NAD wszystkim, tak jak `opacity:.5` (subtelny nalot, nie warstwa tła) sugeruje, że powinno.
   `pointer-events:none` (z samego handoffu) — nigdy nie przechwytuje kliknięć/hoverów pod spodem,
   zweryfikowane żywo dalszym klikaniem kafli/wierszy bez problemu.
   `body`/`.link-dashed` (`index.css`) też przepisane — `body`'s tło/kolor/font były ostatnim
   miejscem w całej stronie wciąż niosącym Workbenchowe `--wb-divider`/`--wb-ink`/`--wb-font-sans`
   jako fallback dla wszystkiego, co nie ustawia własnego fontu jawnie.
   **Fonty**: `index.html`'s Google Fonts `<link>` już od etapu 1 ładował Archivo/IBM Plex Mono
   OBOK (nie zamiast) Big Shoulders Display/IBM Plex Sans — jawnie udokumentowane jako
   przejściowe wtedy. Ten etap w końcu przyciął `<link>` do samych Archivo+IBM Plex Mono, skoro
   żaden plik nigdzie w repo nie odwołuje się już do tamtych dwóch.
   **Prawdziwy, złapany na żywo bug narzędzia, nie logiki**: `npm run build` padał z realnym
   błędem składni w `lightningcss`'s minifierze — nie w prawdziwym CSS, tylko w treści KOMENTARZA
   w `tokens.css`, zawierającego dosłowny tekst z podwójnym myślnikiem tuż przed nawiasem
   zamykającym (wzorzec przypominający custom-property mimo bycia wewnątrz `/* */`). Naprawione
   przeformułowaniem tego jednego zdania komentarza, nie ucieczką znaków ani wyłączaniem
   minifikacji — warty zapamiętania na przyszłość: unikać dosłownego `--cokolwiek` tuż przed `)`
   wewnątrz komentarzy CSS w tym projekcie, minifier realnie się na tym wywraca.
   Zweryfikowano żywo: klik wiersza "Insider" otwiera `SectionDetail` w pełni ciemnym motywem z
   nadal poprawnie renderującym się osadzonym widgetem Insidera (i lepiej wygląda niż wcześniej —
   ciemny widget na ciemnej stronie zamiast ciemnej wyspy na jasnym kraftowym tle), kafel
   "Aktywność" w `AboutSection` otwiera `AboutGallery` z czytelnym zdjęciem/podpisem/filmstripem
   na ciemnym tle, ziarno realnie obecne w DOM-ie (`getComputedStyle` na `::before`:
   `position:fixed`, `z-index:30`, `opacity:0.5`, poprawnie rozwiązany `color-mix()` ≈ `--md-paper`
   przy 10% krycia), zero przewijania w poziomie na 375px, `grep -rn "var(--wb-" src/` zwraca
   zero wyników w całym repo, `tsc`/`lint`/`build` czyste (po naprawie buga minifiera).
   **Redesign "Atrament" ukończony w całości** — wszystkie 7 etapów z tego planu zrobione.

## Atrament — poprawki po realnym click-through (2026-08-25)

Właściciel przeszedł się po całej stronie i zgłosił listę konkretnych rzeczy — realny UX,
znaleziony dopiero przez klikanie, nie coś, co dałoby się wyłapać samym czytaniem kodu. Zrobione
"krok po kroku", w kolejności zgłoszenia:

- **Kicker hero**: "Frontend architect · 9 lat · Kraków" → "Frontend developer/architect · 9 lat ·
  Łódź".
- **H1 hero**: "Cztery frameworki jeden stack" — właściciel poprosił o luźniejsze alternatywy;
  zaproponowano 4 warianty przez `AskUserQuestion`, właściciel wybrał własny, spoza opcji: "różne
  technologie, ten sam uparty człowiek" (3 linie: zwykła/akcent/outline, ten sam wzorzec co
  wcześniej).
- **"Napisz do mnie" tekst nie na środku** — realny bug, nie subiektywne odczucie: zmierzone
  `getBoundingClientRect()`, odstęp góra/dół był realnie asymetryczny (`.btn-outline`: 11.8/13,
  `.hero__cta-primary`: 16.2/13 przed poprawką) mimo symetrycznego paddingu. Przyczyna:
  `line-height: normal` rezerwuje wysokość linii wg metryk fontu (ascent/descent Archivo), nie wg
  wizualnych granic glifów. Naprawione `line-height: 1` na obu przyciskach (index.css/App.css) —
  po poprawce odstępy realnie się wyrównały (11.8/13 → ~12/13, 12.2/12.6).
- **PL/EN nie reagował na klik** — był wyłącznie dekoracyjny (handoff: treść EN jeszcze nie
  istniała). Zapytany przez `AskUserQuestion` czy usunąć, czy zrobić realny wizualny toggle bez
  tłumaczenia — właściciel odpowiedział własnym, żartobliwym "przetłumacz sobie teksty i włącz
  przełącznik :D": pełne, prawdziwe i18n, nie tylko toggle. Patrz osobna sekcja niżej.
- **Brak smooth scroll przy kliku w link nawigacji** — natywne kotwice `<a href="#...">` bez
  `scroll-behavior:smooth` po prostu teleportują. Naprawione `scroll-behavior: smooth` na `html`
  (pod `@media (prefers-reduced-motion: no-preference)`, ten sam wzorzec co reszta animacji w tym
  projekcie) + `scroll-padding-top: 84px`, żeby cel nie chował się pod sticky masthead (68px
  wysokości, zmierzone na żywo, identyczne na 375px i 1280px + mały bufor).
- **"Statki — szuflada z boku" + notki**: kilka powiązanych rzeczy naraz:
  - Nagłówek brzmiał sztucznie/technicznie ("szuflada z boku" to nazwa mechanizmu UI, nie coś, co
    czyta się naturalnie) — zmieniony na "Zagraj w statki" (EN: "Play battleship").
  - Notki zmienione z pojedynczej kolumny tekstu (flex, `flex:1 1 260px`) na **grid kart,
    który wrapuje** (`repeat(auto-fill, minmax(220px, 1fr))`) — dokładnie sugestia właściciela.
    Rozwiązuje jednym ruchem oba zgłoszone objawy: pusty stan wyglądał na zagubiony w dużej pustej
    przestrzeni (teraz jest kartą tej samej wielkości co realna notka, tylko przerywaną obwódką) i
    kolejne notki "doklejały się" pod spodem zamiast obok (teraz każda to kolejny kafel w gridzie).
  - **4. artyleria** — `ARTILLERY_CHARGES` z 3 na 4 (`use-battleship.ts`).
- **Powrót z widoku projektu nie ląduje na wysokości "Indeksu projektów"** — realny bug: po
  zamknięciu widoku szczegółowego strona zostawała przy tym samym `window.scrollY`, ale panel
  zwijał się do ~0 wysokości NAD tym punktem, więc to, co wcześniej było niżej (About/Umiejętności/
  Kontakt), po zwinięciu lądowało pod tym samym scrollY. Naprawione: `handleSectionChange(null)`
  w App.tsx teraz przewija do `#projekty` (albo `#o-mnie` dla działu "O mnie" — jedyna sekcja bez
  własnego wiersza-kotwicy) PRZED zamknięciem — bezpieczne bez żadnej z dawnych "zamróź
  transition, zmierz, odmróź" sztuczek, bo oba te cele leżą WYŻEJ w DOM-ie niż zwijany panel, więc
  jego własna animacja nigdy ich nie porusza.
- **"To samo oko, bez edytora kodu" brzmiało nienaturalnie** — zmienione na "Poza kodem, to samo
  spojrzenie" (EN: "Outside the code, the same eye").
- **"Ziarno i przebarwienia" — poproszono o subtelny rym z "obiecana ziemia"** — dopisane: "Ziarno
  i przebarwienia są celowe — to nie ziemia obiecana, tylko prawdziwe życie." Nawiązanie
  nieprzypadkowe: "Ziemia obiecana" (Reymont/Wajda) to klasyczna powieść/film o uprzemysłowionej
  Łodzi — mieście, które w tej samej turze poprawek zastąpiło Kraków w kickerze hero.
- **Podgląd mapy Tour Guide ma zaokrąglone rogi, kontener pod spodem ma kąty proste** — realny
  cross-repo mismatch: `.poi-map__container` (wewnątrz shadow roota tour-guide, `C:\tour-guide`)
  ma domyślnie `border-radius: v.$border-radius` (Bootstrap), a portfolio-shell (Atrament:
  `--md-radius: 0` wszędzie) ma kontener o kątach prostych. Naprawione **po stronie tour-guide**
  (`frontend/src/app/plans/poi-map/poi-map.scss`): `border-radius: var(--poi-map-radius,
  #{v.$border-radius})`, dokładnie ten sam wzorzec co już istniejące `--poi-map-height` (custom
  property — jedyny sposób, żeby cokolwiek z zewnątrz dotarło do środka shadow roota). Po stronie
  portfolio-shell (`MicrofrontendBand.css`) ustawione `--poi-map-radius: 0` na kontenerze widgetu.
  **Wymaga przebudowania i wdrożenia tour-guide na VPS, żeby faktycznie zadziałało na żywo** — sam
  ten commit w portfolio-shell jest nieszkodliwy/nieaktywny, dopóki tamta strona się nie
  zaktualizuje; tour-guide's own dev server ani tak nie jest tym, co portfolio-shell ładuje
  (`TourGuideWidget.tsx` zawsze woła `https://tourguide.kubsiw.com/elements/main.js`, produkcyjny
  URL, nigdy lokalny build).

**Dodatkowy realny bug znaleziony przy weryfikacji, nie zgłoszony wprost**: nowy H1 ("różne
technologie, ten sam uparty człowiek") ma dłuższe słowa niż oryginalne "frameworki"/"jeden stack",
przez co przy oryginalnym `font-size: min(132px, 14cqw)` realnie zawijał się do 2 linii na 375px
(`scrollWidth` 368px vs dostępne 343px, złapane dopiero przez pomiar `Range.getClientRects()` na
tekście — **nie** `element.scrollWidth`, który dla `display:block` elementu nie wykrywa
zawijania tekstu w środku, tylko realne przepełnienie pudełka). Naprawione zmniejszeniem mnożnika
do `12.5cqw` — usuwa realne przewijanie strony w poziomie na 375px (zweryfikowane: 0px). Przy
szerszych, "pośrednich" szerokościach (np. 1280px, kolumna tekstu obok 420px zdjęcia) linijka
"Różne technologie," i "uparty człowiek" nadal czasem zawijają się do 2 wizualnych linii zamiast
jednej — **świadomie zaakceptowane, nie naprawione dalej**: dociągnięcie zera zawijania przy
KAŻDEJ szerokości wymagałoby mnożnika ~8.5cqw, realnie zmniejszając hero o blisko połowę nawet
tam, gdzie już się mieści. Zawijanie samo w sobie nie łamie twardego wymogu tego projektu (zero
poziomego przewijania) — tylko zajmuje więcej wysokości niż oryginalny, ciasno dopasowany
3-liniowy projekt.

### Pełne tłumaczenie PL/EN (etap poza numeracją "Atramentu" — dobudowany po redesignie)

Nowy `src/i18n/LanguageContext.tsx` — React Context (nie prop-drilling: PL/EN dotyczy
praktycznie każdego komponentu na stronie), `LanguageProvider` (stan `'pl' | 'en'`, domyślnie
`'pl'`) + dwa hooki: `useLanguage()` (surowy stan + `toggleLanguage`) i `useTranslate()` (skrót
`t(pl, en)` na najczęstszy przypadek, `useCallback`'d — kilka miejsc trzyma `t` w tablicy
zależności `useEffect`, bez memoizacji byłby nową referencją co render). Owinięty wokół `<App
/>` w `main.tsx`.

**Dane z osobnych plików** (passions.ts, skills-data.ts, notes.ts, project-rows.ts, sections.ts)
dostały pola wprost w kształcie `{ xPl: string; xEn: string }` (np. `titlePl`/`titleEn`,
`captionPl`/`captionEn`) zamiast osobnego zagnieżdżonego obiektu `{ pl: {...}, en: {...} }` —
mniej przepisywania w każdym miejscu użycia (`t(row.titlePl, row.titleEn)`, nie
`t(row.title.pl, row.title.en)`), spójne z resztą już istniejących płaskich interfejsów w tym
repo. Pola bez realnej treści do tłumaczenia (nazwy technologii w `stack`, identyfikatory,
adresy e-mail/URL-e) świadomie zostały jednym, wspólnym stringiem — bez `Pl`/`En` tam, gdzie
tłumaczenie byłoby identyczne albo bez sensu (np. "Angular 22 · NestJS 11 · Postgres").

**Prawdziwe tłumaczenia, nie automatyczne/dosłowne** — zachowany ten sam, krótki/meme'owy ton co
oryginalne polskie podpisy (patrz `feedback_caption_voice` w pamięci: jargon-specyficzny, nie
opisowy), nie tłumaczenie zdanie-po-zdaniu tam, gdzie dosłowność zabiłaby żart (np. "Ot,
prosię.." — polska ironiczna gwara, przełożona na odpowiednik w duchu, nie liczbę słów).

**Realny, znaleziony przy tej okazji bug w istniejącym kodzie**: `serwisant` w `SECTIONS`
(sections.ts) był już martwy przed tym tłumaczeniem — jego wiersz w Indeksie projektów renderuje
się jako zwykły `<div>` (`clickable: false`), więc `openSectionId` nigdy nie przyjmuje wartości
`'serwisant'`, ten wpis nie miał już żadnego konsumenta. Usunięty przy okazji tej samej edycji
(ten sam precedens "znajdź i posprzątaj, nie tylko pomiń" co usunięcie `skills` z `SECTIONS` w
etapie 5).

**Masthead na wąskich ekranach, druga runda**: PL/EN, wcześniej "wyłącznie dekoracyjny, więc
pierwszy do poświęcenia na 375px" (etap 4/6), stał się realną funkcją — nie dało się go już po
prostu schować. Naprawione zmianą samego przycisku z "PL / EN" (oba naraz, active/inactive) na
przycisk pokazujący TYLKO język docelowy (np. "EN" gdy aktywny jest PL) — o połowę węższy,
zmieścił się z powrotem obok wszystkich 4 linków nawigacji przy tym samym `gap: 14px` z etapu 6.

Zweryfikowano żywo, w obu językach: toggle realnie przełącza `<html lang>` i `document.title`
(nie tylko widoczny tekst), wszystkie sekcje (hero, pasek statystyk, indeks projektów, band
mikrofrontendu, szuflada statków + notki, "O mnie" + galeria, umiejętności + tagi + CV, banner
kontaktu, stopka) i wszystkie 3 widoki szczegółowe (Tour Guide, Insider, galeria działu "O mnie")
poprawnie renderują angielską treść po przełączeniu, zero przewijania w poziomie na 375px w obu
językach, `tsc`/`lint` (2 nieszkodliwe ostrzeżenia fast-refresh dla pliku eksportującego
komponent + 2 hooki naraz, akceptowalny, częsty wzorzec dla plików kontekstu)/`build` czyste.

## Otwarte pytania / do ustalenia w kolejnych krokach

Duże decyzje (koncept, framework i design wszystkich 4 projektów; architektura mikrofrontendu;
szkielet hostingu) są już zamknięte — patrz sekcje wyżej i "Historia decyzji" niżej. Zostały
głównie detale wykonawcze:

- ~~Nazwa domeny~~ — **potwierdzone: `kubsiw.com`** (kupiona przez Cloudflare Registrar, $10.46,
  automatycznie na Cloudflare DNS, bez przełączania nameserverów). Reszta struktury domenowej
  (subdomeny per apka) już ustalona w sekcji "Hosting / infrastruktura".
- Traefik vs. nginx jako reverse proxy — Traefik jako robocza rekomendacja, do potwierdzenia przy
  realnym wdrożeniu.
- **⚠️ ok. 2026-08-24: sprawdzić, czy przenieść VPS z tymczasowego CPX22 (€23,97/mies.) na coś
  tańszego** — czy CX (Cost-Optimized) wróciło do wyboru u Hetznera, i/lub porównać ponownie
  DigitalOcean/Linode/Vultr po ich własnych aktualnych cenach (poprzednie porównanie było sprzed
  czerwcowej podwyżki Hetznera). Migracja jest tania dzięki infrastrukturze jako kodowi — patrz
  sekcja "Hosting / infrastruktura" wyżej.
- Backupy (Hetzner automatyczne vs. cron `pg_dump` → Object Storage) — niekrytyczne na start.
- Wersje mobilne makiet (plansza w statki, spec-plate boxy, pieczątki Serwisanta na wąskim
  ekranie).
- Realne fonty serif/mono do samodzielnego hostowania dla portfolio shellu (na razie system
  fallback w makietach).
- **Zabezpieczenie pobierania CV przed automatycznym scrapowaniem (2026-07-30, zgłoszone).** CV ma
  prawdziwy numer telefonu — obecnie to zwykły, publiczny plik PDF pod `/cv/...`, każdy bot może go
  pobrać. Realna trudność: portfolio-shell nie ma własnego backendu, więc każda "prawdziwa"
  ochrona (reCAPTCHA z weryfikacją server-side, podpisany link z krótkim czasem życia) wymagałaby
  dobudowania API tylko dla tego jednego pliku. Tańsza opcja (kliknięcie/potwierdzenie po stronie
  klienta przed pobraniem) zatrzymałaby tylko najbardziej naiwne scrapery statycznego HTML-a, nie
  bota wykonującego JS — czyli nie jest to realne zabezpieczenie, tylko utrudnienie. Do decyzji:
  (a) zostawić jak jest (najniższe ryzyko realnie — CV i tak trafia do rekruterów, nie jest
  tajemnicą), (b) zamienić numer telefonu w PDF-ie na coś mniej wrażliwego (np. tylko e-mail +
  LinkedIn, telefon na wyraźną prośbę), (c) dodać lekki klient-side gate świadomie wiedząc, że to
  nie jest prawdziwe zabezpieczenie. Nie wdrożone, czeka na decyzję właściciela.

## Roadmap — kolejność budowy

Ten sam duch co w tour-guide: mały, weryfikowalny szkielet najpierw, potem kolejne warstwy — nie
wszystko naraz. Kolejność nie jest przypadkowa — każda faza dowodzi, że poprzednia faktycznie
działa, zanim doda się złożoność.

**Faza 1 — Fundament (dowód, że cała infrastruktura działa)**
1. ✅ Repo portfolio shell (React + Vite) — kod w `C:\portfolio-shell`, osobny folder od
   tour-guide. Design tokens "Editorial Garage" wdrożone jako realne CSS custom properties
   (`src/styles/tokens.css`), masthead+hero jako realny komponent (`src/App.tsx`), nie tylko
   makieta z tej rozmowy.
2. ✅ Dockerfile (multi-stage: build w node, serwowanie przez nginx + SPA fallback) i
   `docker-compose.yml` z labelami Traefik — gotowe, czekają na realny VPS.
3. ✅ VPS Hetzner postawiony (CPX22, Helsinki), Traefik uruchomiony, Cloudflare DNS spięty z domeną,
   pierwszy realny deploy portfolio-shellu — `https://kubsiw.com` faktycznie odpowiada. Zrobione
   2026-07-24, przez SSH/scp prowadzone krok po kroku (nie automatycznie — właściciel wykonywał
   polecenia ręcznie). Napotkane i naprawione po drodze: (1) hasło `root` trzeba było wziąć z maila
   od Hetznera (brak wcześniej wygenerowanego klucza SSH), zresetowane przez panel po literówce
   przy pierwszym wklejeniu; (2) wklejanie wieloliniowego YAML-a do `nano` przez SSH psuło wcięcia
   (auto-indent terminala) — ominięte przez wygenerowanie plików lokalnie i wysłanie `scp`
   zamiast edycji na serwerze; (3) realny, świeży bug zgodności: **Traefik `v3.1` nie działał z
   Dockerem 29** (`client version 1.24 is too old`, Docker 29 podniósł minimalne wspierane API do
   1.44, a `v3.1` miało sztywno wpisane 1.24) — Traefik nie widział żadnych kontenerów, serwował
   domyślny samopodpisany certyfikat zamiast Let's Encrypt. Naprawione podbiciem obrazu na
   `traefik:v3.7` (auto-negocjacja wersji API od v3.6.1+) — poprawka wprowadzona też do
   `INFRA_SETUP.md`, żeby kolejne wdrożenia (Insider, Serwisant) nie powtarzały tego samego kroku
   wstecz.
4. ⬜ CI/CD (`.github/workflows/deploy.yml`, gotowy kod) przechodzi end-to-end — wymaga repo
   GitHub + sekretów (`VPS_HOST`/`VPS_USER`/`VPS_SSH_KEY`) i działającego VPS z kroku 3.
   **Pierwszy realny bug złapany na żywym GitHub Actions (2026-07-24):** `build-and-deploy` failował
   na `docker/build-push-action@v6` z `ERROR: denied: installation not allowed to Create
   organization package` — domyślny `GITHUB_TOKEN` nie miał uprawnienia `packages: write` do
   utworzenia nowego pakietu w `ghcr.io` (pierwszy push obrazu pod tę nazwę, więc pakiet jeszcze nie
   istniał). Naprawione dodaniem jawnego bloku `permissions: { contents: read, packages: write }`
   na poziomie joba — bezpieczniejsze niż poleganie na domyślnych uprawnieniach repo/organizacji
   (Settings → Actions → Workflow permissions), bo działa niezależnie od tego ustawienia.
   **Niegroźne, do zignorowania:** log workflow ostrzega też o deprecacji Node 20 na runnerach
   GitHub Actions (dotyczy wewnętrznego runtime'u jednej z użytych akcji, nie naszego własnego
   `actions/setup-node` kroku, który i tak używa Node 22) — to nie błąd, samo się rozwiąże, gdy
   maintainerzy tamtej akcji zaktualizują swój runtime.
   **Potwierdzone po tym fixie:** `build`/`lint`/`docker build`/push do `ghcr.io` przechodzą
   realnie na żywym GitHub Actions, nie tylko lokalnie. Krok "Deploy over SSH" dalej failuje
   (`error: missing server host`) — to oczekiwane i świadomie zostawione czerwone, dopóki VPS i
   sekrety (`VPS_HOST`/`VPS_USER`/`VPS_SSH_KEY`) faktycznie nie istnieją; właściciel wybrał nie
   dodawać teraz "graceful skip" warunkowego, skoro VPS i tak wkrótce powstaje.

**✅ Luka zamknięta (2026-07-24):** `npm run lint`, `npm run build` (`tsc -b && vite build`) oraz
realny `docker build`/`docker run` przetestowane na żywo — wszystko przechodzi czysto (build 138ms,
kontener odpowiada `200` na `/` i poprawnie robi SPA fallback na nieznanej ścieżce dzięki regule w
`nginx.conf`). Przy okazji dodano `*.tsbuildinfo` do `.gitignore` (artefakt builda TS, nie powinien
się plątać w repo) i usunięto osierocony `.git/index.lock`. Szkielet Fazy 1 jest więc realnie
potwierdzony, nie tylko syntaktycznie poprawny — zostają wyłącznie kroki 3-4 (VPS/domena/sekrety),
które wymagają akcji właściciela.

Cel: udowodnić cały łańcuch (build → deploy → TLS → DNS) na najmniejszym możliwym projekcie, zanim
dojdzie realna złożoność — dokładnie ta sama zasada co "health check endpoint jako pierwszy krok"
w tour-guide.

**Faza 2 — Landing kompletny**
5. ✅ Interaktywna plansza w statki + spis treści z odblokowywaniem — na razie odblokowuje
   placeholdery (żaden projekt jeszcze nie istnieje pod spodem). Zbudowane jako
   `src/features/toc/` (folder-na-funkcję, zgodnie z zasadą struktury wg przepływu użytkownika):
   `use-battleship.ts` (czysta logika gry), `Board.tsx` (dumb, plansza w motywie "coordinate
   grid"), `ProjectCard.tsx` (dumb, "spec-plate box" — zablokowany: zamaskowany tekst kropkami +
   plakietka "ZABLOKOWANE"; odblokowany: pełny tytuł/opis + plakietka "ODBLOKOWANE →" w kolorze
   akcentu primary), `Toc.tsx` (smart, spina hook z planszą/kartami).
   **Poprawione 2026-07-24 na prawdziwe statki (realny feedback po pierwszej wersji z jednopolowymi
   "statkami" na siatce 6×6):** siatka **10×10** (A-J / 1-10), 6 realnych statków o rozmiarach
   **1,1,2,3,4,5** (klasyczny zestaw 1-5 + dodatkowy 1x1, żeby dopasować liczbę statków do liczby
   sekcji — potwierdzone z właścicielem, druga opcja była redukcja do 5 sekcji), każdy losowo
   poziomo albo pionowo, rozstawiane przez proste losowanie z odrzucaniem kolizji
   (`placeOneShip` — losowa pozycja+orientacja, max 500 prób, przy 16 zajętych polach na 100
   praktycznie zawsze trafia od razu). Sekcja odblokowuje się dopiero po **zatopieniu całego
   statku** (wszystkie jego pola trafione), nie po pierwszym trafieniu — realna mechanika
   "sunk", nie tylko find-the-cell. Rozmiar komórek zmniejszony (32px desktop / 24px ≤480px)
   żeby 10 kolumn zmieściło się bez przewijania — świadomy kompromis poniżej "touch target ~44px"
   z ogólnych dobrych praktyk, akceptowalny dla gęstej siatki gry (ten sam kompromis, jaki robią
   wszystkie realne appki w statki na mobile).
   **Realny bug złapany i naprawiony podczas tej samej refaktoryzacji:** pierwsza wersja logiki
   zatapiania czytała stan `revealed` bezpośrednio z domknięcia zamiast przez funkcyjny
   `setState(prev => ...)` — pod React 19 automatic batching (i StrictMode, którego ta appka
   używa) wiele zbitych aktualizacji w tym samym ticku nadpisywało się nawzajem zamiast się
   kumulować (złapane żywym testem: strzelanie po całej planszy naraz dawało tylko 1 zarejestrowane
   pole zamiast 16). Naprawione przez scalenie `revealed`+`lastResult` w jeden atomowy stan
   aktualizowany wyłącznie przez `setGame(prev => ...)` — dokładnie zasada "Weryfikuj, nie
   zakładaj" z sekcji dobrych praktyk, tym razem złapana testem w przeglądarce, nie tylko lintem.
   Zweryfikowane żywo: pełne ostrzelanie planszy → 16 trafień/84 pudła/6 odblokowanych sekcji
   (16 = suma rozmiarów statków); sekwencyjne strzelanie pojedynczo → potwierdzony stan pośredni
   "trafienie, statek jeszcze nie zatopiony" (sekcja zostaje zablokowana) aż do ostatniego pola
   statku, dopiero wtedy "Zatopiony! Odblokowano: ...".
   Dostępność: `aria-label` per pole planszy, wynik ognia ogłaszany przez `role="status"
   aria-live="polite"`, odkryte pola dostają `disabled`.
6. ✅ Skip-link zbudowany od razu ze slajsem #5, nie odłożony — zgodnie z własnym zastrzeżeniem UX
   z sekcji "Gamifikacja" ("gra musi być opcjonalna"), więc funkcjonalnie musiał istnieć od
   pierwszej wersji planszy, nie mógł czekać na osobny krok. Kliknięcie odblokowuje od razu
   wszystkie karty (bez ruszania stanu samej planszy), stylizowany zgodnie z design systemem (mono,
   `text-decoration: underline dashed`).
   **Komunikat wyniku strzału przeniesiony pod planszę (2026-07-24, realny feedback):** wcześniej
   `role="status"` renderował się na samym dole całej sekcji `Toc` (pod kartami, wizualnie daleko
   od planszy, w którą się właśnie kliknęło). Przeniesiony do nowego `.toc__board-col` (Plansza +
   status w jednej kolumnie flex), bezpośrednio pod planszą — zweryfikowane `getBoundingClientRect`
   (16px odstępu od dołu planszy, nie setki pikseli niżej przy kartach).
   **Wersja mobilna — baseline fix, nie pełny polish:** żywa weryfikacja w przeglądarce na 320px
   złapała realny bug (plansza szersza niż dostępna przestrzeń przy stałym 44px paddingu
   `.landing` → poziome przewijanie strony) — dokładnie to, co ten dokument już przewidywał w
   sekcji "Do ustalenia później" ("plansza prawdopodobnie musi się skalować"). Naprawione media
   queries (`max-width: 480px`): mniejszy padding `.landing` + mniejsze komórki planszy — ponownie
   dostrojone po przejściu na siatkę 10×10 (24px komórki ≤480px). Zweryfikowane na żywo: 320px i
   375px → `overflowX: 0`; desktop → plansza i karty faktycznie obok siebie (`sideBySide: true`).
   Spec-plate boxy przechodzą pod planszą na wąskich ekranach za darmo (istniejący `flex-wrap` w
   `.toc__layout`). **Nadal otwarte, do ew. osobnego polish-passu:** dokładniejsze dostrojenie
   wizualne mobilnego układu poza samym "nic nie ucieka poza ekran" — patrz nadal aktualna notatka
   w sekcji "Do ustalenia później".
   **Przy okazji, ✅ poprawka kontrastu design tokenów (2026-07-24, realny feedback
   właściciela):** patrz sekcja "Design system — Editorial Garage" → "Paleta" wyżej po pełny
   szczegół (wartości hex, wyliczone współczynniki WCAG przed/po). W skrócie:
   `--eg-hairline`/`--eg-hairline-inner` (obramowania — w tym samych klikalnych pól planszy) i
   `--eg-ink-secondary` (tekst drugorzędny) przyciemnione tak, żeby realnie przejść próg 3:1
   (obramowania)/4.5:1 (tekst) zamiast ledwo go nie osiągać. Zweryfikowane żywo przez
   `getComputedStyle` na realnie wyrenderowanej stronie (nie tylko w plikach źródłowych), że nowe
   wartości faktycznie się aplikują.
   **Trzy dalsze usprawnienia (2026-07-24, realny feedback po drugiej rundzie grania):**
   (a) **kropka pudła realnie widoczna** — poprzednio to był sam glif `·` w kolorze
   `--eg-muted` (kontrast ~1.55:1, praktycznie niewidoczny, zgłoszone wprost). Zastąpione
   prawdziwym kształtem: pseudo-element `::after` (koło 7px/5px na ≤480px) w kolorze
   `--eg-ink-secondary` na nowym, lekko przyciemnionym tle `--eg-miss-bg` (`#e4dccd`, nowy token)
   zamiast czystego `--eg-paper` — pudło teraz czytelnie różni się od nieodkrytego pola, nie tylko
   od trafienia. (b) **hover** — cała komórka dostaje `transform: scale(1.15)` + zmianę koloru
   obramowania (czysty CSS `:hover`, flat, bez cieni/gradientów, zgodnie z zasadami kompozycji
   wyżej), a dodatkowo (stan w Reakcie, nie samym CSS, bo trzeba podświetlić *inne* elementy)
   najechanie na pole podświetla jego literę kolumny i numer wiersza w nagłówkach na
   `--eg-accent-secondary` pogrubioną czcionką — mały "celownik współrzędnych" spójny z motywem
   coordinate-grid, nie generyczny efekt hover. (c) **"(Art)yleria"** — nowy specjalny strzał:
   przycisk uzbraja tryb (2 użycia na grę, stała `ARTILLERY_CHARGES`), kolejne kliknięcie dowolnego
   pola sprawdza od razu kwadrat 3×3 wokół niego (`getSquareArea(center, ARTILLERY_RADIUS=1)`,
   współdzielona geometria między logiką strzału a podglądem obszaru na hover w `Board.tsx`, jedno
   źródło prawdy), zużywa jedno ładowanie i rozbraja się automatycznie. Odblokowuje sekcję tak samo
   jak zwykły strzał — dopiero po zatopieniu całego trafionego statku, burst tylko przyspiesza
   odkrywanie wielu pól naraz. Status ogłasza zbiorczy wynik ("sprawdzono 9 pól — 2 trafienia, 7
   pudeł. Zatopiono: X.").
   **Realny bug złapany podczas weryfikacji tej rundy (nie kosmetyczny, dotyczyłby prawdziwych
   użytkowników w niektórych warunkach):** `transition: background-color 120ms`/`transition: color
   120ms` na komórkach/nagłówkach potrafiły "zamrozić" odczyt stylu na wartości sprzed zmiany —
   złapane wyłącznie dzięki temu, że weryfikacja szła przez realne `getComputedStyle` na żywo
   wyrenderowanej stronie (nie przez czytanie samego kodu źródłowego, które wyglądało poprawnie).
   Naprawione przez usunięcie tych dwóch przejść (kolor trafienia/pudła i podświetlenie nagłówka
   mają się zmieniać od razu, bez animacji — nie tracą nic użytecznego, `transform`/`border-color`
   na hover zostały, bo dotyczą wyłącznie `:hover`). Potwierdzone: świeże pola pudła/trafienia po
   tej poprawce od razu pokazują docelowy kolor bez żadnych obejść.
   **Czwarte usprawnienie (2026-07-24, realny feedback — "statki się nie stykają"):** klasyczna
   zasada battleship, wcześniej nieobecna — `placeOneShip` sprawdzał tylko nakładanie się
   (`occupied`), nie sąsiedztwo. Dodane: `neighbors8(coordinate)` (8 kierunków, łącznie z
   przekątnymi) i jeden zbiorczy `blocked` (zajęte pola + ich pełna otoczka) — nowy statek nie może
   wylądować na żadnym polu z `blocked`, więc żadne dwa statki nigdy się nie stykają, nawet rogami.
   **Zabezpieczenie odporności:** bufor "bez stykania" zmniejsza dostępną przestrzeń, więc
   pojedyncze losowanie czasem mogłoby nie znaleźć miejsca pod koniec — zamiast wywalać całą appkę
   (`throw`), `placeShips()` teraz próbuje całe rozstawienie od nowa (świeża losowa kolejność/
   pozycje statków) do 100 razy, zanim naprawdę się podda.
   **Zweryfikowane nie przez czytanie kodu, tylko realną symulacją:** jednorazowy skrypt Node
   (kopia dokładnie tego samego algorytmu, usunięty po teście) uruchomiony 5000 razy — zero
   naruszeń stykania, zero nakładania, zero awarii wymagających retry, zawsze dokładnie 16 pól
   (suma rozmiarów statków) na rozstawienie. Potwierdzone też w realnej appce: pełne ostrzelanie
   planszy nadal daje 16 trafień/84 pudła/6 odblokowanych sekcji.
   **Piąte usprawnienie (2026-07-24, realny feedback po deployu — "ciężko rozróżnić zablokowane i
   odblokowane"):** oryginalny design (sam kolor tekstu — muted vs ink, patrz sekcja "Editorial
   Garage" niżej) był za słabym sygnałem w praktyce. Wzmocnione na poziomie całej karty, nie tylko
   jednej linii tekstu: `.spec-plate--locked` dostaje jaśniejszą obwódkę (`--eg-muted`, 1px),
   `.spec-plate--unlocked` dostaje zieloną obwódkę 2px (`--eg-accent-primary`) + nowe, blade
   zielonkawe tło (`--eg-unlocked-bg: #cfd2c5`, nowy token — mix `--eg-paper`/`--eg-accent-primary`
   ~15%, wystarczająco widoczny odcień bez łamania płaskiej, beznagradientowej estetyki). Plakietka
   statusu odblokowanego jest teraz **wypełniona** (`background: accent-primary`, tekst w kolorze
   paper) zamiast samego obrysu — poprzednio obrys+kolor tekstu to były jedyne dwa sygnały, teraz
   obwódka/tło/plakietka razem dają wyraźnie inny "ciężar wizualny" karty. Zweryfikowane przez
   `getComputedStyle` na żywo (locked: obwódka 1px `#c7bfae`, tło przezroczyste; unlocked: obwódka
   2px `#0b3d2e`, tło `#cfd2c5`, plakietka wypełniona), kontrast opisu wobec nowego tła
   przeliczony (~4.9:1, wciąż AA), brak przewijania po zmianie na 320px.

**Faza 3 — Projekt 01: tour-guide jako pierwszy Web Component**
7. ✅ **Wydzielenie fragmentu tour-guide (mapa) jako realny Angular Elements custom element
   (2026-07-24).** Zbudowane w repo tour-guide (`C:\tour-guide`, osobny projekt — pełny szczegół w
   jego własnym `CLAUDE.md`, krok 15 roadmapy), nie tutaj: nowy `src/app/mini-map-widget/`
   (cienki wrapper wokół już istniejącego `PoiMap`, pobiera realne dane POI z Krakowa-Stare Miasto
   przez nowy `PoiService.findInBoundingBox()`), nowy entry point `src/main-element.ts`
   (`createCustomElement` z `@angular/elements`, definiuje tag `<tour-guide-mini-map area-id="...">`),
   nowy cel builda `build-element` w `angular.json` (osobny bundle, ~330KB/~90KB gzip prod).
   **Zweryfikowane end-to-end w realnej przeglądarce** (osobna statyczna strona testowa, poza
   repo): prawdziwy Shadow DOM z Leaflet CSS wstrzykniętym w środku, realne kafle mapy, 40 realnych
   markerów POI (ucięte z ~1000 na szerszym obszarze), klikalny popup z prawdziwą nazwą POI, tryb
   readonly poprawnie ukrywa przycisk dodawania. Po drodze złapane i naprawione dwa realne bugi w
   tour-guide (jeden pre-existing, niezwiązany z tą pracą — `npm run build` produkcyjny już
   wcześniej failował na budżecie stylu Leaflet CSS; drugi nowy — CORS backendu musiał obsłużyć
   wiele originów, nie tylko jeden hardkodowany). Deploy pod realną subdomeną i wpięcie w
   portfolio-shell (kroki 8-9 poniżej) czekają na VPS.
8. ✅ **Kod gotowy i wdrożony na VPS (2026-07-27) — `https://tourguide.kubsiw.com` działa.**
   `backend/Dockerfile`
   (multi-stage, kopiuje pełen `node_modules` do runtime — prościej niż rozdzielać prod/dev deps,
   `prisma migrate deploy` przy każdym starcie kontenera, idempotentne), `frontend/Dockerfile`
   (buduje OBA cele — główną appkę i widget — do jednego nginx: appka pod `/`, widget pod
   `/elements/`), `deploy-docker-compose.yml` w tour-guide (Traefik rozdziela `tourguide.kubsiw.com`
   między backend i frontend przez `PathPrefix('/api')`, zero potrzeby osobnej subdomeny `api.*`),
   `postgres-docker-compose.yml` w portfolio-shell (**wspólny Postgres na VPS, zgodnie z
   oryginalnym planem hostingu** — potwierdzone jeszcze bardziej zasadne niż na starcie, skoro
   realny VPS to CPX22/4GB, nie oryginalnie planowane 8GB), nowy `.github/workflows/deploy.yml` w
   tour-guide (3 joby: `frontend`/`backend` równolegle lintują/budują/testują/pushują własny obraz
   do `ghcr.io`, `deploy` czeka na oba i robi SSH). Wszystko **realnie zbudowane i przetestowane
   lokalnie w Dockerze** (nie tylko `docker build` — kontener backendu odpalony przeciw prawdziwemu
   Postgresowi, `prisma migrate deploy` zastosował 11 istniejących migracji, `/api/health` → 200;
   kontener frontendu sprawdzony na `/`, SPA fallback, i `/elements/main.js`).
   **Trzy realne bugi złapane przy budowie, nie tylko teoretycznie:**
   (1) `dist/frontend-element/browser/main.js` miał `outputHashing: "all"` — nazwa pliku zmieniała
   się przy każdym buildzie (`main-HJDCUCSM.js`), a portfolio-shell musi wskazać ten skrypt na
   sztywno w `<script src>`. Naprawione: `outputHashing: "none"` tylko dla `build-element` (główna
   appka zostaje hashowana, tam to nie problem — jej `index.html` sam zawsze wskazuje właściwy
   hash). (2) `prisma migrate deploy` w kontenerze failował "`datasource.url` property is required"
   mimo ustawionego `DATABASE_URL` — `prisma.config.ts` (skąd realnie pochodzi ten URL) leży w
   korzeniu backendu, nie w folderze `prisma/`, więc nie został skopiowany do runtime stage
   Dockerfile'a; dodanie `COPY prisma.config.ts` naprawiło to od razu. Ten sam bug ujawnił drugi,
   od razu poprawiony przy okazji: `nest build` kompiluje do `dist/src/main.js`, nie `dist/main.js`
   (brak `rootDir` w `tsconfig.json`) — `package.json`'s `start:prod` miał ten sam błąd, nigdy
   wcześniej realnie nieużywany/niezłapany. (3) **Najpoważniejszy, złapany przed wdrożeniem, nie
   po fakcie:** pierwsza wersja `api-base-url.prod.ts` używała **relatywnego** `/api` dla WIDGETU
   też — poprawne dla głównej appki (ten sam origin co backend), ale błędne dla widgetu, który z
   założenia żyje osadzony na **cudzej** domenie (portfolio-shell, `kubsiw.com`): relatywny
   `fetch('/api/...')` rozwiązuje się zawsze względem domeny strony-gospodarza, nie względem tego,
   skąd pochodzi sam `<script>`, niezależnie od tego, jak został załadowany — podstawowa, jednoznaczna
   zasada resolvowania URL-i w przeglądarce. Naprawione osobnym plikiem
   `api-base-url.element.ts` z absolutnym `https://tourguide.kubsiw.com/api`, podpiętym tylko pod
   `fileReplacements` celu `build-element` — główna appka nadal poprawnie używa relatywnego `/api`.
   Zweryfikowane realnie (nie tylko rozumowaniem): grep na zbudowanych bundlach potwierdza zero
   wzmianek `localhost:3000` w obu, `/api` relatywne wyłącznie w głównej appce, absolutny URL
   wyłącznie w widgecie. Backend też dostał `app.setGlobalPrefix('api')` (jeden powód istnienia
   `/api` na wszystkich routach — patrz `CLAUDE.md` tour-guide) i rozszerzony CORS o `kubsiw.com`/
   `tourguide.kubsiw.com`. **Deploy na VPS dokończony tego samego dnia** — Postgres postawiony,
   baza `tour_guide` utworzona, sekrety dodane, pierwszy `docker compose up` udany; cztery kolejne
   realne bugi złapane i naprawione po drodze (kolejność `prisma generate`/lint w CI, prywatne
   pakiety GHCR, brakujący klucz SSH do automatycznego deployu, i etykieta
   `traefik.docker.network` dla kontenera na dwóch sieciach) — pełny opis w "Historia decyzji"
   niżej, wpis pod tą samą datą.
9. ✅ **Karta "Projekt 01" przestaje być placeholderem (2026-07-27).** Nowy `TourGuideWidget.tsx`
   (ładuje `https://tourguide.kubsiw.com/elements/main.js` dokładnie raz, przez moduł-poziomowy
   guard `widgetScriptRequested` + sprawdzenie `customElements.get(...)` — zabezpiecza przed
   podwójną rejestracją tego samego custom elementu, np. przy React StrictMode w dev) renderuje
   `<tour-guide-mini-map area-id="krakow-demo">` w odblokowanej karcie `tour-guide`, plus realny
   link "Zobacz cały projekt →" do `https://tourguide.kubsiw.com`. Nowy typ w
   `tour-guide-mini-map.d.ts` (moduł augmentation `react`'s `JSX.IntrinsicElements`) — bez tego
   TypeScript nie zna tego customowego tagu.
   **Szósty realny bug złapany dopiero przy prawdziwym osadzeniu (nie do wykrycia przez
   `curl`):** `<script type="module">` **zawsze** przechodzi przez CORS przy pobieraniu,
   niezależnie od atrybutu `crossorigin` — inaczej niż klasyczne skrypty. `curl` na
   `/elements/main.js` zwracał 200 OK (nie egzekwuje CORS), ale w realnej przeglądarce, z
   portfolio-shell jako innym originem, ładowanie failowało `TypeError: Failed to fetch` —
   złapane wyłącznie przez faktyczny test w przeglądarce z dwóch różnych originów (dev server
   portfolio-shellu + `curl`/`fetch` bezpośrednio przeciw prod). Naprawione w tour-guide
   (`nginx.conf`, `Access-Control-Allow-Origin: *` dla `/elements/`), opis pełny w jego własnym
   `CLAUDE.md`. Po fixie zweryfikowane: shadow root faktycznie zawiera realny Leaflet + markery
   POI, nie tylko pusty custom element.
   **Zweryfikowane end-to-end lokalnie (2026-07-27):** `.tour-guide-widget`/`tour-guide-mini-map`/
   `.spec-plate__cta` renderują się poprawnie w DOM po zatopieniu statku, CTA wskazuje realny URL.
   **Potwierdzone na żywo na `www.kubsiw.com` przez właściciela (2026-07-27), po zdeployowaniu
   poprawki CORS w tour-guide:** realna mapa (kafle + markery POI) i link "Zobacz cały projekt →"
   widoczne po zatopieniu statku "Projekt 01" — pierwszy prawdziwy mikrofrontend w tym zestawie
   faktycznie działa end-to-end, nie tylko lokalnie/teoretycznie. (Własna automatyczna weryfikacja
   w przeglądarce w tym środowisku pokazywała nieaktualny, zcache'owany bundle mimo twardego
   odświeżenia — potwierdzone jako artefakt narzędzia testowego, nie prawdziwy problem strony,
   skoro bezpośrednia obserwacja właściciela w realnej przeglądarce była jednoznaczna.)
   **Zwijanie planszy po skipie, z animacją (2026-07-27, realny feedback).** Kliknięcie "Przejdź od
   razu do treści" wcześniej tylko odblokowywało karty — sama plansza (i cała jej szerokość)
   zostawała na ekranie bez żadnego funkcjonalnego powodu. Teraz skip dodatkowo zwija planszę
   (`boardCollapsed`, stan niezależny od `skipped` — jedyne wejście do tego stanu to skip, ale
   odtąd przełącza się osobno w obie strony), a przycisk (ten sam element co dotychczasowy
   skip-link, tylko zmieniona etykieta/akcja — nie osobny "floating button" gdzieś indziej w
   layoucie, po realnej uwadze że nawet mały boczny pasek "nadal zajmuje szerokość") pozwala
   pokazać/schować ją ponownie w dowolnym momencie. Po ponownym pokazaniu nagłówek zmienia się na
   neutralny "Spis treści" + podpis "Wszystko już odblokowane — i tak możesz zagrać w statki, jeśli
   chcesz" — plansza przestaje sprawiać wrażenie, że coś jeszcze blokuje.
   **Animacja zaprojektowana bez JS-owego przeliczania pozycji (FLIP):** `.toc__board-col` ma
   sztywną szerokość (372px desktop / 274px mobile — dokładnie licząc z rozmiarów siatki w
   `Board.css`, nie przypadkowa), którą transicjonuje do/z `0` razem z `opacity` i `gap` całego
   `.toc__layout`; `.toc__cards` zamieniony z `flex-column` na `display:grid` (wizualnie identyczne
   przy jednej kolumnie) właśnie po to, żeby `grid-template-columns` też mogło się animować — w
   efekcie liczba kolumn kart rośnie **stopniowo w trakcie** zwijania planszy (żywy reflow za
   darmo, bo szerokość dostępna dla siatki i tak rośnie klatka po klatce), zamiast skoczyć naraz na
   końcu. Świadomie **bez** animowania repozycjonowania samych kart między układami — złożoność
   (i ryzyko niespójności między silnikami przy interpolacji `repeat(auto-fill,...)`) nie
   uzasadniała zysku dla tak małego, pobocznego elementu UI. Wszystkie przejścia zapięte w
   `@media (prefers-reduced-motion: no-preference)` — przy tym ustawieniu stany przełączają się
   bez animacji.
   **Zaprojektowane i zweryfikowane najpierw jako osobny, interaktywny podgląd** (nie od razu w
   kodzie appki) — żywy mockup na realnych tokenach Editorial Garage, z rzeczywistym przełącznikiem
   stanu (nie tylko statyczne zrzuty 3 stanów), pozwolił złapać i poprawić dwie rzeczy przed
   dotknięciem prawdziwego kodu: (1) pierwsza wersja miała osobny "reopen strip" zajmujący kolumnę
   nawet po zwinięciu planszy — słusznie zgłoszone jako wciąż zabierające szerokość, poprawione
   przeniesieniem przycisku w miejsce już istniejącego skip-linka w nagłówku (zero dodatkowej
   kolumny w ogóle); (2) sama animacja przetestowana na żywo w przeglądarce (kliknięcia +
   `getComputedStyle`/`getBoundingClientRect` przed i po), nie tylko obejrzana. Zweryfikowane
   analogicznie w prawdziwym kodzie: `boardColWidth` 372→0→372 (desktop), 274→0 (mobile), siatka
   kart 1→3 kolumny, `unlockedCount` 6/6, zero poziomego przewijania na 375px.

**Faza 3.5 — Landing: header, gra, treść sekcji, footer (przed Insiderem)**

Zebrane 2026-07-27 — uwagi/pomysły właściciela, do przepracowania w kodzie (zakładka "code")
zanim ruszy Faza 4 (Insider). Każdy punkt niżej to osobny, weryfikowalny krok, w duchu "małe
kroki" z sekcji dobrych praktyk — nie wszystko naraz. Numeracja literowa (a–i), świadomie
osobna od głównej sekwencji 1-19 wyżej, żeby wstawienie tej fazy nie wymagało przenumerowania
już opisanych kroków Fazy 4-6.

a. ✅ **Floating/sticky masthead (2026-07-27).** `.masthead` dostał `position: sticky; top: 0`
   + jawne tło `--eg-paper` (bez tego przewijana treść przeświecałaby przez niego) — ten sam
   wzorzec co sticky nav w tour-guide. Istniejący dolny hairline wystarczył jako oddzielenie od
   treści, bez dokładania cienia (ta sama, już sprawdzona decyzja co w tour-guide). Zweryfikowane
   na żywo: `elementFromPoint` przy `scrollY: 800` nadal trafia w `.masthead`, nie w przewiniętą
   treść pod spodem.

b. ⬜ **Plansza w statki: 10×10 → 9×9.** Zmiana `BOARD_ROWS`/`BOARD_COLS` (`use-battleship.ts`) z
   10 na 9. **Realna konsekwencja do rozstrzygnięcia przy kodowaniu, nie tylko kosmetyczna:**
   obecny zestaw 6 statków (1,1,2,3,4,5 = 16 pól) i logika `placeShips`/bufor "bez stykania"
   (Faza 2, krok 5) była dostrajana i zweryfikowana (5000-krotna symulacja) pod 100 pól — na 81
   polach ten sam zestaw powinien się nadal zmieścić (mniej gęsto niż na 10×10 w najgorszym
   wypadku), ale wymaga tej samej metody weryfikacji jak poprzednio (jednorazowy, usuwany po
   teście skrypt Node symulujący rozstawienie N razy — nie "wygląda ok" na oko), zgodnie z zasadą
   "weryfikuj, nie zakładaj". Rozmiar komórki (dziś 32px/24px ≤480px) może dać się nieznacznie
   zwiększyć przy mniejszej liczbie kolumn — sprawdzić na żywo na 320px, czy to daje margines na
   powiększenie bez ponownego poziomego przewijania.

c. ✅ **Zmiana etykiety przycisku (2026-07-27).** `'Pokaż planszę w statki →'` →
   `'Otwórz grę w statki →'` w `Toc.tsx`'s `actionLabel` — tylko wariant "przywróć zwiniętą
   planszę po skipie"; pierwsze CTA (`!skipped`) zostało bez zmian.

d. ✅ **Zamiast dashed-border wariantu — pieczątka "w budowie" (2026-07-27, zbudowane).**
   Oryginalny research-owy pomysł niżej (dashed border + osobna plakietka outline + hairline
   progress-indicator + tło coordinate-grid) został **zastąpiony**, nie dobudowany — właściciel
   poprosił wprost o inny, bardziej wizualny kierunek: prawdziwą pieczątkę/stempel w rogu karty.
   Nowy dumb `src/components/Stamp.tsx` (+ `Stamp.css`, reużywany w dwóch miejscach, patrz punkt
   niżej) — podwójna ramka (`border: 3px double`), **pełne, nieprzezroczyste tło `--eg-paper`**
   (świadomie nie półprzezroczyste — pierwsza wersja mockupu prześwitywała, poprawione po
   feedbacku), lekka rotacja (`rotate(-8deg)`), tekst "W budowie" + "wkrótce", w nowym trzecim
   kolorze **`--eg-crimson` (`#7a2a24`)**, nie zielonym/mosiądzowym (oba już zajęte znaczeniowo).
   **Uzasadnienie koloru** (przedyskutowane z właścicielem przed kodowaniem): karmazyn/oxblood jest
   *bardziej* autentyczny dla estetyki pieczątki niż zieleń (prawdziwe stemple — APPROVED/PAID —
   klasycznie są czerwone/granatowo-czarne), a trzeci, wyraźnie inny kolor dla trzeciego stanu
   ("w budowie" ≠ zablokowane ≠ odblokowane) jest spójny z już ustaloną zasadą "fakt zawsze
   wizualnie odróżniony od szacunku" z tour-guide. Ryzyko "czerwień = błąd" złagodzone stonowanym,
   nie jaskrawym odcieniem (kontrast ~8.2:1 wobec `--eg-paper`, sprawdzone) + zawsze z tekstem, nigdy
   samym kolorem. Renderowana tylko na kartach bez realnej treści pod spodem —
   `IN_PROGRESS_SECTION_IDS = insider/serwisant/about/skills` w `ProjectCard.tsx` (tour-guide i
   contact ją pomijają, mają już realną zawartość). Zweryfikowane na żywo: dokładnie te 4 sekcje
   mają pieczątkę, tour-guide/contact nie mają; zero przewijania w poziomie na 375px.
   **Zaprojektowane najpierw jako podgląd wizualny** (3 warianty stylu, potem doprecyzowane do
   jednego po realnym feedbacku o przezroczystości i kolorze) — ten sam tryb co inne większe
   decyzje wizualne w tym dokumencie.
   *(Oryginalny, zastąpiony pomysł, zachowany dla kontekstu):* dashed border w mosiądzu +
   plakietka outline "W BUDOWIE" + hairline progress-indicator ("FAZA 4 · KROK 1/2") + subtelne tło
   coordinate-grid. Źródła researchu z tamtej propozycji: [UX/UI design trends 2026 — calm interfaces, progressive disclosure](https://elements.envato.com/learn/ux-ui-design-trends),
   [12 UX/UI trends 2026 — motion as functional communication layer](https://www.uxpin.com/studio/blog/ui-ux-design-trends/).

d2. ✅ **Pieczątka też na mastheadzie (2026-07-27) — sygnalizuje, że całe portfolio jest w
   budowie, nie tylko pojedyncze sekcje.** Ten sam `<Stamp>` jako dziecko `.masthead` (już
   `position: sticky`, więc jest poprawnym containing blockiem dla `position: absolute` — pieczątka
   porusza się razem z nagłówkiem przy scrollu bez żadnej dodatkowej logiki sticky). Pozycjonowana
   z ujemnym `bottom`, więc lekko zachodzi na hero pod spodem — celowe, sygnalizuje "cały projekt",
   nie tylko sekcję. Zweryfikowane na żywo (nie tylko wizualnie): `getBoundingClientRect()` po
   przewinięciu potwierdza, że pieczątka faktycznie pozostaje przypięta razem z mastheadem.

e. ✅ **`about`/`skills`/`contact` jako pełnoekranowy widok "w ramach" istniejącej appki
   (2026-07-27).** Zbudowane jako stan komponentu (`openSectionId` w `Toc`), nie router — zgodnie
   z pierwotnym zamysłem, reszta appki (gra w statki, skip, zwijanie planszy) już działała jako
   czysty stan, nie URL, więc to trzyma się tej samej konwencji. `sections.ts` dostał nowe pole
   `hasDetailView: boolean` (tylko `about`/`skills`/`contact` — projekty mają własną, dopasowaną
   zawartość wprost w karcie, nie potrzebują tego wejścia). Nowy dumb komponent `SectionDetail`
   (tytuł sekcji + przycisk "← Wróć do spisu treści" + na razie pusty placeholder "Treść w
   przygotowaniu." — realna zawartość "O mnie"/"Umiejętności"/"Kontakt" to osobne, kolejne kroki).
   **Animacja: `grid-template-rows: 0fr ↔ 1fr`, nowocześniejszy wariant tej samej techniki co
   zwijanie planszy (Faza 2, krok 6)** — ta sama idea (animowana, ograniczona właściwość +
   `overflow: hidden` na dziecku, zero JS/FLIP, zapięte pod `prefers-reduced-motion`), ale bez
   zgadywania stałej `max-height`/`width`: `0fr`/`1fr` poprawnie animuje do/z prawdziwej,
   naturalnej wysokości treści niezależnie od tego, ile jej finalnie będzie (istotne, skoro punkt
   f niżej doda realną galerię zdjęć o nieznanej dziś wysokości). Oba panele (spis treści, widok
   szczegółowy) zostają zamontowane cały czas — nic się nie odmontowuje przy przełączeniu, więc
   stan planszy/gry pod spodem (np. `boardCollapsed`) przetrwa powrót z widoku szczegółowego bez
   żadnej dodatkowej logiki. Fokus przenoszony na przycisk powrotu przy otwarciu (dostępność).
   **Zweryfikowane na żywo, nie tylko wizualnie** — w tej samej automatycznej przeglądarce, która
   już wcześniej dwa razy pokazała identyczny artefakt (`transition` + programowa zmiana klasy =
   niewiarygodny `getComputedStyle`, patrz punkty wcześniej w tym dokumencie), `getComputedStyle`
   na obu panelach od razu po kliknięciu pokazywał wartości **zamienione miejscami** między
   panelami — trzeci raz ten sam, teraz już rozpoznany artefakt, nie realny bug: z wymuszonym
   `transition: none` te same odczyty pokazały poprawne, oczekiwane wartości (`0px`/opacity 0 dla
   zwiniętego panelu, prawdziwa wysokość treści/opacity 1 dla otwartego). Potwierdzone też: powrót
   przywraca poprzedni stan przycisku gry (`boardCollapsed`) bez zmian, `SectionDetail` poprawnie
   odmontowuje się po zamknięciu, zero poziomego przewijania na 375px.

f. ✅ **Sekcja "O mnie" — galeria zdjęć pasji (zbudowane 2026-07-29). Wariant B, "siatka
   się rozsuwa".** Właściciel przesłał realny zestaw ~12 zdjęć (styl: filmowy grain/przebarwienia,
   spójny z aktualnym trendem fotograficznym "Lo-Fi Rebellion" 2026 — świadomie nie do
   "wyczyszczenia", to jest pożądany, rozpoznawalny styl, nie usterka). Rozważono 3 warianty (research:
   pattern "grid + klik → reveal" potwierdzony jako dominujący w portfolio 2026), zdecydowano się na
   **B**, dokładnie zgodny z pierwotnym pomysłem właściciela: siatka kafelków-pasji (jedno
   reprezentatywne zdjęcie na pasję); klik na kafelek → siatka znika, wchodzi pełnoekranowy widok z
   jednym dużym zdjęciem, filmstripem pozostałych zdjęć tej pasji pod spodem, i podpisem (kursywa,
   serif, 2-3 zdania) — plus "← Wróć do spisu treści" u góry, zgodnie z punktem e wyżej. Odrzucone
   warianty: **A — "arkusz kontaktowy"** (duże zdjęcie przypięte na stałe, cienki pasek miniatur
   wjeżdżający z boku, mniej ruchu/bardziej fotograficzny motyw) i **C — filmstrip/karuzela**
   (najprostszy do zbudowania, ale najmniejszy efekt "wow"). Klikalna makieta wariantu B (5 kafelków:
   Hiking, Rower, Motoryzacja, Fotografia, Siłownia/bieganie) zbudowana i pokazana właścicielowi jako
   żywy prototyp przed kodowaniem — potwierdzona jako trafna.
   **✅ Zdjęcia dostarczone, zoptymalizowane i skopiowane do repo (2026-07-29).** Oryginały (12
   plików, 47.6 MB łącznie) wrzucone przez właściciela do `C:\portfolio-shell\about-photos\` —
   diagnoza: 8/12 było zapisanych jako **PNG** (format bezstratny, zły wybór dla zdjęć z ziarnem
   filmowym — szum defeatuje kompresję bezstratną, stąd np. `breakfast.png` 2142×2142 ważył 7.4 MB
   podczas gdy JPEG o *większej* rozdzielczości `cat_eye.jpg` 3024×3024 ważył tylko 1.65 MB), część
   w wymiarach znacznie przekraczających realną potrzebę wyświetlania (do 4096×4096). Skonwertowane
   do WebP (dłuższy bok max 1800px, jakość 82) — **47.6 MB → 3.85 MB (−92%)**. Sprawdzone też EXIF
   czterech .jpg pod kątem GPS — brak danych lokalizacyjnych, bez ryzyka prywatności przy publikacji.
   Zoptymalizowane pliki skopiowane do `src/assets/about/*.webp` (gotowe do importu w komponencie);
   oryginały + kopia robocza zostają w `about-photos/` jako materiał źródłowy, nieużywany
   bezpośrednio przez appkę.
   **Finalne mapowanie zdjęć na pasje (realne nazwy plików w `src/assets/about/`):**
   - hiking (4): `couple_sea.webp` (leśna ścieżka do plaży o zmierzchu, 2 sylwetki), `mountain_cow.webp`
     (mglista droga z krową przy płocie), `me_back_walk.webp` (sylwetka od tyłu na ścieżce przez
     śródziemnomorskie zarośla), `me_back_lake.webp` (sylwetka w kapturze na pomoście nad jeziorem)
   - rower (1): `cycling.webp` (kierownica z GPS-em, nocna jazda, rozmyte światła)
   - motoryzacja (3): `garage.webp` (silnik pod otwartą maską, butelka oleju), `interior_volvo.webp`
     (deska rozdzielcza, breloczek-samochodzik), `vespa.webp` (pomarańczowa Vespa w uliczce)
   - fotografia — "oko na detal" (4): `breakfast.webp` (śniadanie z góry), `flowers_insects.webp`
     (pszczoła/bzygowate na dzikiej róży), `my_mate.webp` (ręka głaszcząca kotka na ulicy),
     `cat_eye.webp` (nazwa pliku ujawnia zamysł — demonstracja "cat-eye" bokeh, blur pierwszego
     planu; rozstrzyga wcześniejszą wątpliwość "do przypisania przy realizacji" z poprzedniej wersji
     tej notatki — jednoznacznie fotograficzna/techniczna klatka, nie hiking/bieganie)
   **Puste pasje (siłownia, bieganie) — zdecydowano 2026-07-27: layout "w przygotowaniu".** Te dwie
   pasje z `sections.ts`/"Wizja" nie mają jeszcze zdjęć w przesłanym zestawie — dostają na start ten
   sam dashed/"W BUDOWIE" wzorzec zaprojektowany w punkcie d wyżej dla pustych kart projektowych (a
   nie: pominięcie kafelka, ani osobne dosyłanie zdjęć teraz) — spójność jednego wizualnego języka
   "w budowie" w całej apce, łatwe do podmiany na realne zdjęcia później bez zmiany struktury.
   Otwarte do ustalenia przy realizacji: dokładny układ (lightbox nad gridem vs. karta rozwijana w
   miejscu), źródło zdjęć finalnych (właściciel dostarczy realne pliki — spójne z zasadą "realne dane
   ponad zamockowane założenia", niekoniecznie identyczne z podglądowym zestawem użytym do konsultacji
   makiety), i format siatki (masonry/mieszany, nie sztywne kwadraty — realne zdjęcia mają bardzo
   różne proporcje: kwadrat, portret, jeden krajobrazowy, sztywna siatka 1:1 obcinałaby kluczowe
   kadry, np. ścieżkę do plaży czy uliczkę z Vespą).
   **Zbudowane (2026-07-29):** nowy `features/toc/about/` (`AboutGallery.tsx` + `passions.ts`),
   podpięty w `SectionDetail.tsx` dla `section.id === 'about'`. Siatka = CSS `columns` (3/2/1 wg
   szerokości), każdy kafelek `break-inside: avoid` — prawdziwy masonry bez biblioteki, zdjęcia
   trzymają swoje realne proporcje. Klik na kafelek → ten sam mechanizm `grid-template-rows`
   0fr/1fr co przełącznik spis-treści/widok szczegółowy (`Toc.css`), teraz reużyty jeszcze raz na
   poziom niżej: siatka pasji ↔ widok jednego zdjęcia + filmstrip + podpis, z osobnym "← Wróć do
   galerii" (nie myli się z zewnętrznym "← Wróć do spisu treści"). Puste pasje (siłownia, bieganie)
   — kafelek `disabled`, ten sam `<Stamp>` co w punkcie d, wycentrowany w boxie 4:3. Podpisy pod
   każdym zdjęciem napisane na podstawie realnych opisów z mapowania wyżej, nie wymyślone od zera.
   Zweryfikowane na żywo: 6 kafli w poprawnej kolejności, 2 zablokowane, klik na Hiking pokazuje
   `couple_sea.webp` + podpis, klik w filmstripie zmienia zdjęcie i podświetlenie, "Wróć do galerii"
   i "Wróć do spisu treści" oba działają niezależnie; 3 kolumny na desktopie, 1 na 375px, zero
   przewijania w poziomie.
   **Taksonomia zmieniona (2026-07-29): 6 wąskich pasji → 4 szersze działy.** Właściciel przesłał
   drugą partię zdjęć (32, łącznie 44) i poprosił o przejście na: **Aktywność** (rower, bieganie,
   siłownia i inny ruch — bez wycieczek), **Wycieczki i podróże** (zastępuje dawny "hiking",
   szerzej: podróże/trasy/momenty w drodze), **Fotografia** (zdjęcia demonstrujące technikę/oko,
   nie konkretną aktywność), **Motoryzacja** (bez zmian). 12 zdjęć z pierwszej partii przemapowane
   1:1 na nowe działy (hiking → Wycieczki, rower/moto/foto bez zmian). Nowe 32 przypisane po
   realnym obejrzeniu każdego zdjęcia (nie tylko nazwy pliku — kilka nazw myliło, np.
   `scooter_refuel.webp` pokazuje tankowanie samochodu, nie skutera; `leaf_light.webp` to
   autoportret pod drzewem, nie makro liścia). **12 zdjęć jedzenia/restauracji** (burger_prep,
   burger_shake, coffee_desk, espresso_pour, fine_dining, fresh_pizza, fruit_salad, open_sandwich,
   scallop_dish, steak_breakfast, wine_glass) było z założenia niejednoznaczne — rozstrzygnięte
   sprawdzoną regułą, nie zgadywaniem: zdjęcia z widocznym kontekstem podróży w kadrze (np.
   `harbor_dessert.webp` — port, żaglówki, turyści w tle) trafiły do **Wycieczki i podróże**;
   zdjęcia bez takiego kontekstu, czysto skupione na stylizacji/kompozycji dania (jak
   `fine_dining.webp` czy `wine_glass.webp`, kadrowane identycznie jak już wcześniej zaakceptowane
   `breakfast.webp`) trafiły do **Fotografia** jako osobny wątek "food photography" — jedna,
   konsekwentnie stosowana zasada zamiast osobnych domysłów per zdjęcie. Efekt uboczny: żaden z 4
   działów nie jest już pusty (Aktywność ma choćby `cycling.webp`), więc placeholder "w budowie" z
   punktu d nie jest obecnie renderowany — kod go zachowuje (generyczna obsługa `photos.length ===
   0`), na wypadek gdyby przyszły dział rzeczywiście wystartował bez zdjęć. Pełne mapowanie 44
   zdjęć → 4 działy w `src/features/toc/about/passions.ts`.
   **Wydzielony 5. dział "Jedzonko" (2026-07-29), na wprost poproszony przez właściciela.**
   Wszystkie 13 zdjęć jedzenia/restauracji — 12 dotąd w Fotografia + `harbor_dessert.webp` dotąd w
   Wycieczki (jedyny food-shot tam, umieszczony z powodu wyraźnego kontekstu podróży w kadrze —
   powód odpadł, gdy powstał dedykowany dział jedzenia) — przeniesione do nowego działu, podpisy
   bez zmian. Fotografia spadła do 7 zdjęć (night_portrait, cat_eye, flowers_insects, my_mate,
   bus_stop, leaf_light, night_drive — wszystkie faktycznie o technice/oku, nie o jedzeniu),
   Wycieczki do 7. `fruit_market.webp` (stragan z owocami) został w Wycieczki — to scena
   targowa/podróżnicza, nie danie do zjedzenia, więc nie pasuje do Jedzonka tak jak reszta.

g. ✅ **Sekcja "Umiejętności" (2026-07-29).** Zaprojektowana jako klikalny mockup przed kodem
   (ten sam tryb co inne większe decyzje wizualne), poprawiona po realnym feedbacku (lata pracy
   9+ nie 8+, bez nazwy pracodawcy, DDD-przed-AI jako osobny cytat, React doprecyzowany jako
   "nie tylko na potrzeby portfolio" — realny mały projekt w pracy). Dwie kolumny: "Fundament"
   (CV: Angular/DDD/.NET/testy/DevOps) i "Zbudowane dla tego portfolio" (React/Vite, NestJS,
   Docker/Traefik/VPS/CI-CD, Web Components, Vue oznaczone jako planowane). Blok o realnej pracy
   z AI (Copilot codziennie w pracy vs. Claude Code na tym portfolio) i link do CV
   (`public/cv/`). Nowy `features/toc/skills/SkillsDetail.tsx`, podpięty w `SectionDetail.tsx`.

h. ✅ **Sekcja "Kontakt" — najprostszy slot (2026-07-27).** Nowy dumb `ContactLinks.tsx` — trzy
   klikalne wiersze (mailto e-mail, LinkedIn, GitHub — realne dane właściciela, nie placeholdery),
   wizualnie mirror `spec-plate__row` (mono etykieta + wartość), renderowany w `ProjectCard` tylko
   dla `section.id === 'contact'` po odblokowaniu. `ProjectCard`'s root dostał `id="section-{id}"`
   na każdej karcie — potrzebne pod link ze stopki (patrz punkt i niżej).

i. ✅ **Sticky footer (2026-07-27).** Zgodnie z własną rekomendacją w tym punkcie — zwykły
   `position: sticky; bottom: 0` na końcu normalnego przepływu strony (nie floating/fixed-overlay),
   więc zero ryzyka zasłaniania treści; przypina się do dołu viewportu tylko na krótszych stronach.
   Minimalny: link "Kontakt ↑" (do `#section-contact`) + rok/copyright w mono, bez multi-kolumnowego
   wzorca korporacyjnego, bez ikon (brak fontu ikon w tym projekcie, świadomie pominięte na razie).
   **Realny bug złapany od razu po zbudowaniu, nie teoretycznie (realny feedback właściciela po
   scrollu):** karta "Projekt 01" poprawnie chowała się pod stopką przy przewijaniu, ale sama mapa
   Leaflet w środku "prześwitywała" nad nią — Leaflet ustawia własne, wysokie `z-index` (200-1000)
   na warstwach kafli/markerów/kontrolek, a bez kontenowanego kontekstu stackowania wokół widgetu te
   wartości konkurowały bezpośrednio ze stopką na poziomie całego dokumentu i wygrywały, mimo że
   karta wizualnie przewinęła się niżej. Naprawione jednym `isolation: isolate` na
   `.tour-guide-widget` — zamyka wewnętrzny z-index Leafletu w tym elemencie, cała karta stackuje
   się odtąd jak zwykły blok w normalnym porządku DOM. Zweryfikowane precyzyjnie (nie na oko):
   `elementFromPoint` dokładnie w miejscu nałożenia się prostokątów widgetu i stopki (kilka
   pozycji scrolla) trafiał w `<footer>`, nie w żaden element Leafletu.
   Źródła researchu: [Website footer designs 2026 — minimal & sticky patterns](https://www.sitebuilderreport.com/inspiration/website-footer-designs),
   [10 modern footer UX patterns for 2026](https://www.eleken.co/blog-posts/footer-ux).
   **Ten sam fix, zastosowany też do pieczątek "w budowie", spowodował realny regres — pieczątka
   na skrajnej karcie wyglądała na ucinaną z lewej.** Root cause znaleziony ostatecznie po kilku
   błędnych próbach (isolation na `.spec-plate`, potem na `.toc__cards` — obie clipują nadwieszkę
   w gridzie): winowajcą było `overflow: hidden` na `.toc__view-panel-inner` (potrzebne do
   animacji zwijania widoku). Gdy skrajna karta stoi tuż przy krawędzi tego panelu, jej nadwieszka
   (stamp, nav-highlight outline) wychodzi poza panel i jest ucinana. Naprawione buforem:
   `padding` + ujemny `margin` (lewo/prawo/dół, góra bez zmian) na `.toc__view-panel-inner` —
   rezerwuje miejsce na nadwieszkę bez przesuwania widocznego layoutu. Mniejszy bufor pod
   `max-width: 480px` (24px na desktopie przekraczałoby padding `.landing`, 16px, i wywołało realny
   scroll poziomy). `isolation`/`z-index` na `.spec-plate` usunięte całkowicie — niepotrzebne.
   Zweryfikowane geometrycznie (`getBoundingClientRect` pieczątki/outline vs panelu) na desktopie
   i mobile, zero horizontal overflow.

j. ✅ **Zaimplementowane (2026-07-27) — linki `.masthead__nav` ("Projekty"/"O mnie"/"Kontakt")
   realnie działają, nie są już samymi `<span>`.** Klik na "Projekty" podświetla naraz wszystkie
   karty projektowe (tour-guide/insider/serwisant) w spisie treści + smooth-scrolluje do pierwszej
   z nich; "O mnie"/"Kontakt" tak samo, ale tylko do jednej, swojej karty. Klikany element
   nagłówka dostaje stan "aktywny"; klik na TEN SAM link drugi raz czyści oba stany naraz
   (nawigację i podświetlenie kart) — przełączenie na INNY link po prostu przenosi podświetlenie.
   Stan (`activeNavTarget`) podniesiony do `App.tsx` (wspólny przodek nagłówka i `<Toc>`), grupowanie
   sekcji przez nowe pole `navGroup` w `sections.ts` (`'projects' | 'about' | 'contact' | null` —
   `skills` celowo `null`, nagłówek nie ma linku "Umiejętności"). Scroll realizowany osobnym
   `useEffect` w `App.tsx` reagującym na `activeNavTarget`, przez zwykłe `document.getElementById`
   (karty już miały stabilne id `section-{id}` od stopki) + `scrollIntoView`.
   **Zmiana koloru względem zaprojektowanego wcześniej mockupu — realny feedback właściciela
   przed kodowaniem:** pierwotny plan (mosiądz) porzucony na rzecz **granatu** (`--eg-navy`,
   nowy token, `#1e3a5f`) — cała dotychczasowa paleta (piasek, miedź, zieleń, karmazyn) jest
   ciepła; granat to świadomie pierwszy chłodny akcent, elegancko przełamujący resztę, a przy
   okazji autentyczny dla motywu "rysunku technicznego" Editorial Garage (prawdziwe kalki/
   blueprinty są klasycznie granatowym tuszem na kremowym tle). Kontrast ~9.78:1 wobec `--eg-paper`
   (sprawdzone realnie, nie na oko, kilka odcieni porównanych). Mechanizm podświetlenia zostaje
   ten sam co w mockupie: `outline` (nie `border`/tło) — stan *tymczasowy*, więc osobny od trwałych
   statusów (zablokowane/odblokowane/w budowie), z `outline-offset`, żeby nie kolidować z istniejącą
   trwałą zieloną obwódką odblokowanych kart.
   **Realny gotcha złapany podczas weryfikacji, ten sam rodzaj co poprzednie w tym dokumencie:**
   `scrollIntoView({behavior:'smooth', ...})` wywoływany przez efekt nie powodował widocznej zmiany
   `window.scrollY` w tym środowisku testowym — potwierdzone jako ograniczenie samego środowiska
   (nie tyka klatek animacji smooth-scroll), nie bug w kodzie: (1) `behavior:'instant'` na tym samym
   elemencie faktycznie przewijał; (2) podmieniony na czas testu `Element.prototype.scrollIntoView`
   potwierdził, że efekt woła go z dokładnie poprawnymi argumentami (`{id:"section-contact",
   opts:{behavior:"smooth", block:"center"}}`) w dokładnie poprawnym momencie. Realny UX w
   prawdziwej przeglądarce użytkownika zadziała poprawnie — `smooth` to standardowa, szeroko
   wspierana funkcja platformy webowej. Poza tym w pełni zweryfikowane: grupowe podświetlenie,
   przełączanie między linkami, wyłączanie drugim kliknięciem, zero przewijania w poziomie na
   375px.
   **Dwa realne bugi złapane po realnym feedbacku właściciela ("Kontakt" wizualnie się nie
   wyróżniał mimo klasy `--active` na elemencie), nie na oko:** (1) `.masthead__nav-item--active`
   (specyficzność 0-1-0) przegrywał z `.masthead__nav button` (klasa+element, 0-1-1) — dokładnie
   ta sama klasa błędu selektorów co już nieraz w tym zestawie projektów (ancestor/compound
   selektor bijący płaski pojedynczy, patrz Leaflet w CLAUDE.md tour-guide). Naprawione zmianą
   selektora na `.masthead__nav button.masthead__nav-item--active` (0-2-1). (2) Po tej poprawce
   `getComputedStyle` dalej pokazywał stary (szary) kolor — dokładnie ten sam artefakt tego
   środowiska testowego co przy planszy w statki (Faza 2, krok 6): `transition: color/border-color`
   na `.masthead__nav button` w połączeniu z programową zmianą klasy zamrażało odczyt na wartości
   sprzed zmiany. Potwierdzone (nie zgadywane) przez `transition:none` wymuszone ręcznie na
   elemencie — kolor natychmiast pokazywał się poprawnie. Naprawione tak samo jak wtedy: usunięcie
   tego konkretnego przejścia zamiast dalszego dochodzenia — ten sam, już ustalony w tym projekcie
   kompromis (kolor zmienia się od razu, bez animacji, nic realnie nie tracąc).

**Faza 4 — Projekt 02: Insider (Vue)**
10. ✅ Szkielet Vue, design "Night Desk", jedna karta-story z realnymi danymi (Finnhub/Alpha
    Vantage/Marketaux), plakietka "SUGESTIA AI · NIE PORADA" obecna od pierwszej wersji, nie
    dobudowana później. **Zbudowane (2026-07-30, repo `C:\insider`):** szkielet + tokeny + karta
    z plakietką (pierwsza część) — gotowe; **realne dane + ticker (druga część, 2026-07-30):**
    wybrany **Finnhub** — potwierdzone live przez `curl`, że tylko Finnhub i Marketaux wysyłają
    `Access-Control-Allow-Origin: *` (Alpha Vantage bez nagłówków CORS, wymagałby od razu
    backendu-proxy), Finnhub ma też szerszy darmowy tier. `useFinnhubNews`/`useTicker`
    (composables) + nowy `TickerBar.vue` (scrollujący pasek kursów, kolor tylko przy realnych
    liczbach), `App.vue` jako przełączalny stos kart (realne newsy + karta AI-sugestii na końcu,
    jeszcze sztywna — realna generacja AI to osobny, późniejszy krok) z nawigacją `‹›` i
    swipe'em dotykowym. Klucz w `.env` (gitignored). Zweryfikowane end-to-end z realnym kluczem:
    żywe kursy/newsy, nawigacja do obu końców stosu, brak przewijania w poziomie na 375px.
    **Pre-deploy "hype" pass (2026-07-30, właściciel):** `WorldClocks.vue` (4 zegary na żywo:
    Warszawa/Londyn/Nowy Jork/Tokio, z realną kropką otwarty/zamknięty per godziny sesji);
    bramka "Zbierz informacje" (apka nie fetchuje już automatycznie — start w stanie `idle`,
    jeden CTA odpala oba fetche + kosmetyczny "boot sequence" tekst); zakładki `NEWSY`/`SUGESTIE`;
    **realne sugestie AI long/short** (nowy backend, patrz wyżej w sekcji Insidera) — karta
    AI-sugestii ze szkieletu usunięta ze stosu newsów (zastąpiona prawdziwą zakładką). Wszystko
    zweryfikowane end-to-end z realnym kluczem Anthropic.
11. ✅ Deploy, subdomena (`insider.kubsiw.com`, DNS już dostępny na tej samej strefie Cloudflare co
    `tourguide.kubsiw.com`), karta w portfolio odblokowana naprawdę. **Zbudowane i wdrożone
    (2026-07-30):** repo `kubasiw/insider` na GitHubie (publiczne, jak reszta), pełny pipeline
    deployu 1:1 wg wzorca tour-guide (Dockerfile ×2, `deploy-docker-compose.yml` z Traefikiem na
    tej samej domenie `/api`-PathPrefix, `.github/workflows/deploy.yml`). Właściciel dodał 4
    sekrety repo (`VPS_HOST`/`VPS_USER`/`VPS_SSH_KEY`/`FINNHUB_API_KEY`); po jego wyraźnej zgodzie
    połączono się z tym samym VPS co tour-guide (`135.181.109.68`, DNS już tam wskazywał, zero
    zmian potrzebnych) i przygotowano `~/insider/` (`backend.env` z `ANTHROPIC_API_KEY`
    skopiowanym bezpośrednio na serwerze z `~/tour-guide/backend.env` — wartość nigdy nie
    opuściła serwera ani nie pojawiła się w żadnym logu; `deploy-docker-compose.yml` przesłany i
    zweryfikowany bajt-po-bajcie). Pipeline przeszedł w pełni na zielono.
    **Realny bug złapany na pierwszym żywym deployu, nie przez czytanie kodu:** `/api/suggestions`
    zwracał `404` na produkcji — domyślny `VITE_API_BASE_URL` w Dockerfile miał na sztywno `/api`
    na końcu, a `useSuggestions.ts` i tak sam dokleja `/api/suggestions`, dając w efekcie realny,
    podwójny `/api/api/suggestions`. Naprawione, zweryfikowane najpierw lokalnie (grep po
    zbudowanym JS-ie, że w buncie jest tylko jeden, poprawny URL), potem end-to-end na żywej
    domenie w prawdziwej przeglądarce: realne newsy/kursy z Finnhuba, realne sugestie AI z
    konkretnymi tickerami (IMAX, Microsoft, Starbucks, Apple, Invesco QQQ Trust), zero błędów w
    konsoli, brak przewijania w poziomie na 375px. Pełny opis w `insider/CLAUDE.md`'s "Status".
- 2026-07-30: **Insider — audyt bezpieczeństwa/dobrych praktyk**, ten sam duch co wcześniejszy
  audyt tour-guide (abuse-prevention + nagłówki bezpieczeństwa). Znaleziono dokładnie tę samą
  klasę luki: płatny endpoint AI (`/api/suggestions`) bez żadnego rate limitingu i bez bramki
  logowania — potwierdzone live (20 requestów do `/api/health` bez throttlingu). Naprawione:
  `helmet`, `express-rate-limit` (globalnie + osobno na `/api/suggestions`), `trust proxy`
  (wymagane za Traefikiem), oraz **dzienny limit wywołań AI** — ten sam mechanizm co
  DB-backed `AiUsageDay` w tour-guide, ale plikowy (JSON w zamontowanym wolumenie Dockera), bo ten
  backend celowo nie ma bazy danych. Dodatkowo: właściwa walidacja wejścia na `/api/suggestions`
  (wcześniej goły cast typu, klient mógł wysłać dowolne sfabrykowane "newsy" wprost do promptu
  LLM) i przestano zwracać surowe komunikaty błędów do klienta. Wszystko zweryfikowane na realnym
  zbudowanym obrazie Dockera (nie tylko napisane) i ponownie na żywej domenie po redeployu — zero
  regresji w realnym przepływie użytkownika. Pełny opis w `insider/CLAUDE.md`'s "Status".

**Faza 5 — Projekt 03: Serwisant (React Native, zmienione 2026-07-31 — patrz korekta w sekcji
Projektu 3; kroki 12-15 rozpisane szczegółowo 2026-07-31, patrz "Przepływ appki" w sekcji Projektu 3
dla pełnego uzasadnienia każdej decyzji — zastępuje wcześniejsze uproszczone ujęcie tych kroków)**
12. ✅ Wybór pojazdu — kaskadowy formularz (marka → model/generacja → rocznik → silnik, podpowiedzi
    generowane/normalizowane przez AI z potwierdzeniem użytkownika, nie realna baza motoryzacyjna) +
    przebieg. Bez logowania — zapis wyłącznie lokalny na urządzeniu (`expo-sqlite`, potwierdzone,
    nie tylko kandydat). **AI rozpoznawanie/potwierdzanie dopięte (2026-08-02)**, po tym jak krok 13
    dał temu backend: `POST /api/vehicle-profile/recognize` normalizuje pisownię i dopisuje
    generację/rocznik tylko gdy to pewna, ogólnie znana wiedza (np. "Golf VII (2013-2020)"), nigdy
    nie zgadując; ekran potwierdzenia ("Rozpoznaliśmy: ... — zgadza się?") zapisuje znormalizowane
    dane, nie surowy wpisany tekst — zweryfikowane na żywo na celowo bałaganiarskim wejściu
    ("bmw"/"seria 3"/"320d" → "BMW Seria 3 (E90/E91/E92/E93), silnik 2.0 D"). Pełne szczegóły w
    `C:\serwisant\CLAUDE.md`.
13. ✅ Wstępna historia serwisowa — opis tekstowy (co/kiedy było serwisowane, co niepokoi) i/lub
    zdjęcia faktur/książki serwisowej, oba wejścia niewykluczające się; AI analizuje i buduje
    chronologiczną oś czasu rozpoznanych czynności. Pierwszy krok wymagający realnego backendu —
    repo przebudowane na `frontend/`+`backend/` (wzorem tour-guide) tuż przed tym krokiem. Nowy
    `backend/` (NestJS, mirror kształtu tour-guide: `HealthModule`, `AiModule` wrapujący
    `@anthropic-ai/sdk` — celowo bez Prismy/dziennego limitu wywołań, bo brak tu jakiejkolwiek bazy
    i brak jeszcze publicznego wdrożenia; to samo hardening AI-nadużyć co w tour-guide czeka jako
    osobny krok przed realnym deployem, nie teraz) — `POST /api/service-history/analyze` (multipart:
    opis + do 5 zdjęć), wyodrębnianie przez tool-calling (`record_service_history`, wymuszony przez
    `tool_choice`, ten sam wzorzec co `PlanChatModule` w tour-guide), zwraca `{opis, data, przebieg}[]`
    z jawnym zakazem zgadywania niejasnych dat/przebiegu w promptcie — zweryfikowane na żywo: niejasna
    wzmianka "w zeszłym roku, nie pamiętam dokładnie" poprawnie wróciła z `date: null`, a prawdziwe
    ale niezwiązane zdjęcie (ikona appki) poprawnie zwróciło pustą listę zamiast zmyślonych wpisów.
    Frontend: ekran przechwytywania (tekst + `expo-image-picker` aparat/galeria, limit 5 zdjęć) →
    ekran przeglądu rozpoznanych pozycji (każda usuwalna) **zanim cokolwiek trafi do zapisu** — ten
    sam duch "AI wyciąga, człowiek potwierdza" co reszta apki, mimo że to jeszcze nie jest właściwe
    rozróżnienie fakt/szacunek (to dopiero krok 14). Nowa tabela `service_events` w SQLite. Pełne
    szczegóły techniczne (w tym dwa realne gotchas — kolizja portu z Insiderem, `TaskStop` nie
    zabijający procesu-drzewa `npx expo start` na Windowsie) w `C:\serwisant\CLAUDE.md`.
14. ✅ Akcja "Sprawdź konieczne czynności serwisowe" (jawny trigger — przycisk na osi czasu, nie
    auto-fire) — AI zestawia oś czasu z typowymi interwałami serwisowymi dla modelu/silnika,
    priorytetyzuje (przeterminowane/wkrótce/potem/brak danych), czytelna prezentacja (pieczątki
    statusu z Workshop Docket/Field Ledger/Service Bay, przeniesione bez zmian) + eksport do PDF
    (`expo-print`, potwierdzone, nie tylko kandydat). Fakt vs. szacunek rozdzielone strukturalnie w
    samej odpowiedzi AI (dwa osobne pola), nie tylko wizualnie. Pełne szczegóły w
    `C:\serwisant\CLAUDE.md`.
15. Domykanie pętli — ręczne odhaczenie pozycji z dowodem wykonania (zdjęcie faktury/dokumentu,
    przez ten sam OCR co krok 13), dopisanie do historii, przeliczenie kolejnego terminu.
16. **Dystrybucja różni się od pozostałych dwóch projektów** — nie "subdomena w przeglądarce", tylko
    realny plik do zainstalowania na telefonie: backend (OCR/AI) nadal wystawiony pod subdomeną jak
    reszta, ale sam frontend to build EAS (Android APK do sideloadu na start, ikona na pulpicie
    telefonu — patrz dokładne rozważenie platform w sekcji Projektu 3). Karta w portfolio wtedy
    linkuje do pobrania tego pliku (lub instrukcji), nie do live-demo pod adresem URL. **Karta w
    portfolio (2026-07-31, potwierdzone):** opis + zrzut ekranu appki + krótka instrukcja "zainstaluj
    Expo Go, zeskanuj kod" + kod QR prowadzący do live projektu w Expo Go — darmowa, wspólna dla
    iOS/Android ścieżka, bez budowania natywnego pliku (patrz pełne uzasadnienie w sekcji
    Projektu 3, w tym dlaczego to jedyna opcja bez płatnego Apple Developer Program).

**Faza 6 — Polish**
17. Publiczna strona statusu (Uptime Kuma), spięta z health-checkami wszystkich apek.
18. Realne fonty self-hosted (serif/mono dla portfolio shellu).
19. Backupy (Hetzner albo cron `pg_dump`).
20. Wersje mobilne pozostałych makiet (Insider, Serwisant).
21. Krótkie case-study/README per projekt tłumaczące decyzje architektoniczne — ten dokument jako
    surowiec źródłowy.

## Historia decyzji (chronologicznie)

- 2026-07-23: ustalono, że portfolio to appka, nie statyczna strona; każdy projekt może mieć inny
  design; potwierdzono kierunek "eksploracja/ruch" jako wspólny mianownik zainteresowań.
- 2026-07-23: wybrano grę w statki (nie breakout) jako mechanikę odblokowywania sekcji portfolio.
- 2026-07-23: wybrano wariant infrastruktury "bardziej inżynierski" (VPS + Docker + CI/CD od zera)
  zamiast prostych platform typu Vercel/Railway.
- 2026-07-23: zdefiniowano Projekt 2 — apka z insiderskimi newsami finansowymi + AI-generowane
  sugestie inwestycyjne, z naciskiem na disclaimery/odpowiedzialny język UI.
- 2026-07-23: użytkownik poprosił o zaproponowanie frameworka dla Projektu 2 — robocza propozycja:
  React (do potwierdzenia).
- 2026-07-23: potwierdzono ostateczny podział — Portfolio shell = React, Projekt 2 (apka
  finansowa) = Vue.
- 2026-07-23: dopisano sekcję dobrych praktyk programistycznych/architektonicznych wspólnych dla
  wszystkich projektów (część wyniesiona z doświadczeń tour-guide, część nowa pod kątem
  architektury wieloapkowej/mikrofrontendowej).
- 2026-07-23: zablokowano kierunek wizualny portfolio shell — "Editorial Garage" (masthead
  magazynu o klasycznej motoryzacji + karta techniczna + rysunek techniczny/siatka), zbudowano
  interaktywną makietę landing page z działającą mechaniką planszy w statki; spisano jako design
  system (paleta, typografia, komponenty).
- 2026-07-23: korekta — właściciel portfolio to **Kuba S.**, nie "Kuba W." (błąd w makietach z tej
  sesji, do poprawienia przy realnej implementacji).
- 2026-07-23: doprecyzowano, że karta Insidera pokazana wcześniej w design systemie portfolio to
  chrome shellu, nie design samej apki Insider — Insider dostaje własny kierunek.
- 2026-07-23: zablokowano design system Insidera — "Night Desk" (ciemny terminal inwestora,
  bursztynowy akcent, funkcyjna zieleń/czerwień), odrzucając jaśniejszy wariant "Clear Desk" jako
  mniej odróżnialny w zestawie trzech projektów.
- 2026-07-23: zbudowano i zweryfikowano na żywo POC mikrofrontendu (Shadow DOM izolacja stylów +
  symulacja cyklu życia single-spa) — zdecydowano o **Web Components** jako podejściu do
  kompozycji mikrofrontendów w portfolio. Szczegóły i realny kod referencyjny w
  `MICROFRONTEND_POC_NOTES.md`.
- 2026-07-24: zdefiniowano Projekt 3 — "Serwisant", asystent obsługi serwisowej samochodu
  (OCR dowodu rejestracyjnego, analiza zdjęć książki serwisowej/faktur, timeline serwisowy z
  priorytetyzacją). Zidentyfikowano kluczowe ograniczenie: brak darmowego źródła prawdy dla
  oficjalnych interwałów serwisowych producenta — historia użytkownika jako twardy grunt prawdy,
  sugestie AI jawnie oznaczone jako orientacyjne. Framework i finalny kierunek wizualny ("Workshop
  Docket" roboczo) jeszcze nieustalone.
- 2026-07-24: potwierdzono framework Serwisanta — Angular (powtórka stacku tour-guide, świadomie,
  na dowód głębi kompetencji). Zablokowano design system "Workshop Docket". Dodano dwie nowe
  funkcje: śledzenie terminu SKP jako twardego faktu z OCR dowodu rejestracyjnego, oraz pętlę
  odhaczenie→zdjęcie dowodu wykonania→aktualizacja historii. Wyniesiono z tego generalną zasadę
  "fakt zawsze wizualnie odróżniony od szacunku AI" do sekcji dobrych praktyk, z odwołaniem do
  istniejącego precedensu w tour-guide (`Forecast.source`).
- 2026-07-24: rozpisano konkretny plan hostingu — Hetzner CX33 (4 vCPU/8GB, €6.49/mies., ceny
  sprawdzone na żywo po podwyżce z kwietnia 2026), Traefik + Let's Encrypt, Cloudflare DNS,
  wspólny Postgres z osobnymi bazami logicznymi per apka, CI/CD przez GitHub Actions → ghcr.io →
  SSH deploy, status/monitoring przez self-hosted Uptime Kuma.
- 2026-07-24: rozważono CX23 zamiast CX33 na start (właściciel słusznie zapytał, czy CX33 jest
  naprawdę potrzebne teraz, skoro istnieje tylko statyczny portfolio-shell) — po dyskusji
  zdecydowano jednak zostać przy CX33 od razu, prostota (bez późniejszego resize) uznana za wartą
  ~€2.50/mies. różnicy.
- 2026-07-24: spisano roadmap budowy — 6 faz, od dowodu działania infrastruktury (Faza 1) przez
  landing, kolejno tour-guide → Insider → Serwisant jako Web Componenty, aż po polish. Kolejność
  projektów (tour-guide → Insider → Serwisant) wynika z tego, że tour-guide już istnieje i jest
  najbardziej zaawansowany — najmniejsze ryzyko na pierwszy realny deploy przez nowy pipeline.
- 2026-07-24: rozpoczęto realnie Fazę 1 — kod portfolio shellu (React + Vite, Editorial Garage
  jako CSS custom properties, Dockerfile, docker-compose z labelami Traefik, workflow GitHub
  Actions) napisany w nowym, osobnym folderze `C:\portfolio-shell`. Napotkane i poprawione po
  drodze: `docker-compose.yml` miał niespójność (`build: .` zamiast `image:` mimo że deploy robi
  `docker compose pull`) — złapane i naprawione w tej samej sesji. Środowisko miało zablokowany
  dostęp do rejestru npm, więc `npm install`/`npm run build` nie zostały automatycznie
  zweryfikowane — jawnie zaznaczone jako pierwszy krok do zrobienia przez właściciela, nie
  przemilczane. Pełna checklista pozostałych kroków (VPS, domena, sekrety GitHub) w
  `C:\portfolio-shell\README.md`.
- 2026-07-24: napisano `INFRA_SETUP.md` — szczegółowy przewodnik krok po kroku (domena →
  Cloudflare → Hetzner VPS → SSH → Docker → Traefik → DNS → pierwszy deploy). Po drodze
  zweryfikowano na żywo w oficjalnej dokumentacji Cloudflare, że "Add a site" to nieaktualna
  nazwa (teraz "Domains → Onboard a domain") — poprawione, nie zostawione z pamięci.
- 2026-07-24: **kupiono domenę `kubsiw.com`** przez Cloudflare Registrar ($10.46, ceny hurtowe
  bez marży) — ta ścieżka (rejestracja bezpośrednio przez Cloudflare zamiast osobnego
  rejestratora) okazała się prostsza niż pierwotnie opisana w `INFRA_SETUP.md`: brak kroku
  przełączania nameserverów, domena od razu aktywna na Cloudflare DNS. Wybór nazwy: prostota nad
  tematycznością — `kubsiw` (już używany jako identyfikator, ten sam co adres e-mail) zamiast
  nazwy nawiązującej do "Editorial Garage", świadomie, żeby domena przetrwała nawet gdyby design
  się kiedyś zmienił. `docker-compose.yml`/`INFRA_SETUP.md` zaktualizowane z realną domeną,
  placeholder `TWOJA-DOMENA.pl` usunięty.
- 2026-07-24: zamknięto znaną lukę z poprzedniego wpisu — `npm run lint`/`npm run build`/
  `docker build`/`docker run` faktycznie odpalone i zweryfikowane (nie tylko poprawność
  składniowa plików). Wynik: wszystko działa bez poprawek w kodzie aplikacji; jedyna poprawka to
  dodanie `*.tsbuildinfo` do `.gitignore`.
- 2026-07-24: zbudowano Fazę 2, krok 5 (plansza w statki + spis treści z odblokowywaniem) i krok 6
  (skip-link + baseline mobilny) — patrz szczegóły przy tych krokach w Roadmapie wyżej. Żywa
  weryfikacja w przeglądarce (nie tylko lint/build) złapała realny bug: plansza nie mieściła się na
  320px-szerokim ekranie (40px poziomego przewijania) — naprawione media query'ami, potwierdzone
  ponowną weryfikacją na 320px/375px/desktop.
- 2026-07-24: realny feedback po pierwszej wersji planszy — cztery poprawki naraz: (1) prawdziwe
  statki wielopolowe (1,1,2,3,4,5) na siatce 10×10 zamiast jednopolowych "statków" na 6×6, z
  odblokowaniem dopiero po zatopieniu całego statku (potwierdzono z właścicielem dopasowanie 6
  statków do 6 sekcji); (2) komunikat wyniku strzału przeniesiony bezpośrednio pod planszę; (3)
  poprawiony kontrast `--eg-hairline`/`--eg-hairline-inner`/`--eg-ink-secondary` (realnie wyliczone
  współczynniki WCAG, nie tylko subiektywna ocena). Przy okazji złapano i naprawiono realny bug w
  logice zatapiania (stan czytany z domknięcia zamiast przez funkcyjny `setState`, gubiący
  trafienia pod React 19 batching) — złapany żywym testem w przeglądarce (masowe ostrzelanie
  planszy), nie przez lint/typecheck.
- 2026-07-24: druga runda realnego feedbacku po zagraniu w plansze — kropka pudła (była prawie
  niewidoczna), hover z podświetleniem współrzędnych, i nowy specjalny strzał "(Art)yleria"
  (kwadrat 3×3, 2 użycia na grę) — patrz szczegóły przy kroku 5 w Roadmapie wyżej. Po drodze
  złapany kolejny realny bug tej samej klasy co poprzedni ("weryfikuj, nie zakładaj"):
  `transition` na tle/kolorze potrafiło zamrozić odczyt stylu na starej wartości — złapane tylko
  dzięki testowaniu przez faktyczne `getComputedStyle` na żywej stronie, nie przez czytanie kodu.
- 2026-07-24: dodano klasyczną zasadę "statki się nie stykają" (nawet rogami) do rozstawiania
  statków — realny feedback, "chcę żeby to wyglądało i działało ładnie od początku do końca".
  Zweryfikowane 5000-krotną symulacją algorytmu w osobnym, jednorazowym skrypcie (nie w samej
  appce) — zero naruszeń, zero awarii; `placeShips()` dodatkowo dostał odporność na nieudane
  losowanie (retry całego rozstawienia, nie tylko jednego statku).
- 2026-07-24: pierwszy realny push+deploy przez CI/CD, złapany prawdziwy bug na GitHub Actions —
  `docker/build-push-action` failował na braku uprawnień do utworzenia nowego pakietu w `ghcr.io`
  (`denied: installation not allowed to Create organization package`). Naprawione jawnym blokiem
  `permissions: packages: write` na poziomie joba. Przy okazji: realny feedback po zobaczeniu
  wdrożonej strony — zablokowane/odblokowane karty spisu treści za mało się różniły (sam kolor
  tekstu); wzmocnione o kolor/grubość obwódki, tło całej karty i wypełnioną plakietkę stanu
  odblokowanego.
- 2026-07-24: **zmiana planu VPS — CX33 nieaktualne, kupiony tymczasowo CPX22.** Przy realnym
  zakładaniu serwera okazało się, że linia Cost-Optimized (CX) w ogóle nie jest dostępna do
  wyboru (tylko Regular Performance/CPX), a ceny CPX są radykalnie wyższe niż w pierwotnej
  analizie — nie €7,99/mies. za CPX22, tylko €23,97/mies. (potwierdzone na żywo w formularzu
  zakupu, dla wszystkich trzech lokalizacji europejskich). Przyczyna: podwyżka Hetznera z 15
  czerwca 2026 podniosła ceny CPX/CCX o do 176%, podczas gdy CX podrożał dużo łagodniej — artykuł,
  z którego wcześniej wzięto €6,99/€7,99, był już nieaktualny w momencie sprawdzania (sprzed
  czerwcowej podwyżki). Pierwsza decyzja była kupić najmniejszy CPX12 (1 vCPU/2GB/40GB,
  €14,13/mies.) tylko po to, żeby uruchomić i sprawdzić cały pipeline (Traefik/TLS/DNS/deploy)
  tanim kosztem — **skorygowane tego samego dnia**: w ciągu tygodnia dochodzi kolejna apka z
  własnym backendem NestJS + Postgres, więc 2GB RAM z CPX12 (Traefik + portfolio-shell + backend +
  baza naraz) to realne ryzyko OOM zaraz po starcie; ostatecznie kupiony **CPX22 (2 vCPU/4GB/80GB,
  €23,97/mies.)** — różnica €9,84/mies. za realny zapas RAM uznana za wartą tego kosztu. Nadal
  jawny plan migracji za ok. miesiąc (**przypomnienie: ok. 2026-08-24**) na coś tańszego — CX,
  jeśli wróci do wyboru, albo innego dostawcę. Migracja niska kosztem dzięki temu, że cała
  infrastruktura jest jako kod (Docker Compose + Traefik + GitHub Actions) — nowy VPS, ten sam
  `docker compose up`, zmiana rekordu A w Cloudflare. Hetzner rozlicza się godzinowo bez umowy,
  więc nie ma "przedłużenia" do anulowania — wystarczy skasować serwer przed końcem miesiąca.
  Szczegóły i źródła w sekcji "Hosting / infrastruktura" wyżej.
- 2026-07-24: zbudowano Fazę 3, krok 7 (fragment tour-guide jako realny Web Component) — patrz
  szczegóły przy tym kroku w Roadmapie wyżej. Praca wykonana w repo tour-guide, nie tutaj; pełny
  szczegół w jego własnym `CLAUDE.md` (krok 15 roadmapy). Zweryfikowane end-to-end w realnej
  przeglądarce (Shadow DOM, realne dane POI, popup). Po drodze naprawiony pre-existing bug w
  tour-guide (budżet stylu komponentu blokujący `npm run build`) oraz rozszerzony CORS backendu o
  wiele originów. Deploy i wpięcie w portfolio-shell (kroki 8-9) czekają na dokończenie
  konfiguracji VPS (Traefik/DNS) z wpisu wyżej.
- 2026-07-24: **realny bug znaleziony przez właściciela** — po trafieniu statku spis treści
  "spadał" pod planszę zamiast zostać obok niej. Zgłoszony na desktopie (nie mobile, gdzie
  stackowanie jest zamierzone). Odtworzenie po dokładnym pytaniu ("wpisałem długi tekst z palca w
  devtools") ujawniło prawdziwą przyczynę: `.toc__status` (komunikat wyniku strzału) nie miał
  żadnego ograniczenia szerokości — długi, **niełamliwy** ciąg znaków (bez spacji, np. przypadkowe
  wciśnięcie klawiszy) zmuszał `.toc__board-col` (flex-item bez `min-width:0`) do rozrośnięcia się
  do szerokości tego tekstu, wypychając `.toc__cards` poza dostępną przestrzeń → zawinięcie do
  nowej linii. Realne dane gry (nazwy sekcji) nigdy tego nie wywołują — to defensywny fix dla
  patologicznej treści, nie codzienny scenariusz. **Pierwsza próba fixu (samo `min-width:0` na
  `.toc__board-col`) nie wystarczyła** — potwierdzone pomiarem: multi-line flex-wrap podejmuje
  decyzję o zawinięciu na bazie hipotetycznego (max-content) rozmiaru elementu, zanim algorytm
  kurczenia w ogóle zadziała, więc kolumna nadal rosła (372px → 812px, mniej niż poprzednio, ale
  wciąż zawijało). Ostateczny fix: sprawdzony trik `width: 0; min-width: 100%;` na `.toc__status`
  (element "nie liczy się" przy ustalaniu naturalnej szerokości rodzica, dopiero potem rozciąga się
  na 100% już ustalonej szerokości) + `overflow-wrap: anywhere` (łamanie nawet niełamliwego tekstu).
  Zweryfikowane dokładnie tym samym testem, który odtworzył bug (150-znakowy ciąg bez spacji,
  wstrzyknięty bezpośrednio przez `element.textContent =`, ten sam mechanizm co devtools) —
  potwierdzone `sameLine: true` i `boardColWidth: 372` niezmienione, przy desktopie i mobile, plus
  pełna realna gra (16 trafień/84 pudła/6 sekcji) wciąż działa poprawnie.
- 2026-07-27: przygotowany (kod + lokalna weryfikacja w Dockerze) deploy tour-guide (Faza 3,
  krok 8) — Dockerfile'e obu serwisów, `deploy-docker-compose.yml`, wspólny
  `postgres-docker-compose.yml` (zgodnie z oryginalnym planem, nie dedykowany Postgres per apka —
  potwierdzone jako właściwy wybór, skoro realny VPS ma 4GB, nie 8GB RAM), CI/CD w tour-guide.
  Trzy realne bugi złapane przy przygotowaniu kodu (szczegóły przy kroku 8 w Roadmapie wyżej) —
  najpoważniejszy: relatywny `/api` w widgecie byłby błędny na cudzej domenie (rozwiązuje się
  względem gospodarza, nie źródła skryptu), naprawiony osobnym absolutnym URL-em tylko dla tego
  celu builda.
  **✅ Deploy na VPS dokończony tego samego dnia** — `https://tourguide.kubsiw.com` i
  `/api/health` oba realnie działają przez Traefika. (Odniesienie do "`INFRA_SETUP.md`, kroki
  10-11" z wcześniejszej wersji tej notatki było nieaktualne/nigdy nierozpisane — ten plik kończy
  się na kroku 10, tour-guide nie ma własnego; sama checklista jednak trafna, wykonana poniżej).
  Po drodze złapane i naprawione **jeszcze cztery** realne problemy, żadnego wcześniej
  nieprzewidzianego w kodzie: (1) kolejność kroków w CI — `npm run lint` uruchamiał się **przed**
  `npx prisma generate`, więc każde wywołanie Prisma było dla eslinta typu `error` (259 błędów
  `no-unsafe-*`) — ten sam gotcha co lokalny (patrz `CLAUDE.md` tour-guide), tylko złapany dopiero
  w CI; naprawione zamianą kolejności tych dwóch kroków. (2) `docker compose pull` na VPS zwracał
  `unauthorized` dla obrazów tour-guide — pakiety na `ghcr.io` domyślnie prywatne nawet przy
  publicznym repo (osobne ustawienie od widoczności repo); naprawione logowaniem VPS-a do
  `ghcr.io` tokenem (`docker login ghcr.io`, PAT ze scope `read:packages`) zamiast przełączania
  widoczności pakietu — rozwiązuje to też przyszłe automatyczne deploye przez CI, nie tylko
  ręczny pull. (3) automatyczny deploy przez GitHub Actions (`appleboy/ssh-action`) wymagał
  klucza SSH — nigdy wcześniej nie utworzonego (logowaliśmy się do tej pory hasłem z maila
  Hetznera); wygenerowany (`ssh-keygen`), dodany do `~/.ssh/authorized_keys` na VPS, i te same 3
  sekrety (`VPS_HOST`/`VPS_USER`/`VPS_SSH_KEY`) dodane do **obu** repo (portfolio-shell i
  tour-guide — GitHub nie współdzieli sekretów między repo automatycznie). (4) **najpoważniejszy,
  ogólny dla każdej przyszłej apki z backendem+bazą**: backend podłączony do dwóch sieci Dockera
  (`web` dla Traefika, `db-internal` dla Postgresa) dawał `504 Gateway Timeout` — Traefik bez
  wyraźnej wskazówki nie wie, której sieci użyć do routingu, i mógł wybrać `db-internal`, do
  której sam nie należy (stąd zawieszone połączenie zamiast szybkiego błędu). Naprawione dodaniem
  etykiety `traefik.docker.network=web` na serwisie backendu w `deploy-docker-compose.yml`.
  **Zapamiętać na Insider/Serwisant:** każdy przyszły serwis podłączony jednocześnie do `web` i
  `db-internal` (czyli każdy backend z własną bazą) potrzebuje tej samej etykiety
  `traefik.docker.network=web` od razu, nie dopiero po złapaniu identycznego 504.
  Zweryfikowane end-to-end: `docker exec ... curl localhost:3000/api/health` (bezpośrednio w
  kontenerze) działało od razu — myląco sugerując "wszystko OK", zanim złapano, że to nie jest
  test przez sieć Dockera, tylko przez współdzieloną przestrzeń nazw kontenera; dopiero
  `docker exec tour-guide-frontend wget http://tour-guide-backend:3000/...` (prawdziwy test
  między-kontenerowy) i finalnie `curl -v https://tourguide.kubsiw.com/api/health` (przez
  Traefika, prawdziwy certyfikat Let's Encrypt) potwierdziły pełną trasę.
- 2026-07-27: właściciel zebrał serię uwag/pomysłów do landing page'a portfolio (przed startem
  Fazy 4 — Insider) — spisane jako nowa **Faza 3.5** w Roadmapie wyżej (sticky masthead, plansza
  9×9, zmiana etykiety przycisku gry, "in progress" layout dla odblokowanych-ale-pustych sekcji,
  pełnoekranowy widok o-mnie/umiejętności/kontakt z animacją powrotu, galeria zdjęć pasji w
  sekcji o-mnie, sticky/floating footer). Dla dwóch pytań, gdzie właściciel wprost poprosił o
  research trendów UX 2026 ("in progress" layout, footer sticky/floating), przeprowadzono
  wyszukiwanie i skonkretyzowano propozycje zgodne z już ustalonym Editorial Garage (nowy wariant
  `spec-plate--in-progress` z przerywaną obwódką akcentu secondary + plakietka "W BUDOWIE" +
  hairline progress-indicator; minimalny sticky footer, świadomie bez kopiowania ciężkiego
  multi-kolumnowego wzorca korporacyjnego) — pełny szczegół i źródła przy Fazie 3.5. Właściciel
  planuje teraz przejść do zakładki code i pracować nad tymi punktami z odwołaniem do tego pliku.
- 2026-07-27: skonsultowano mechanikę galerii "O mnie" (punkt f Fazy 3.5) na żywej, klikalnej
  makiece 3 wariantów — zablokowano **wariant B** ("siatka się rozsuwa": klik na kafelek pasji →
  jedno duże zdjęcie + filmstrip + podpis kursywą), odrzucając "arkusz kontaktowy" (A) i prostą
  karuzelę (C). Zdecydowano też, że puste pasje (siłownia, bieganie — brak zdjęć w zestawie)
  dostają na start ten sam dashed "W BUDOWIE" layout co puste karty projektów (punkt d), nie są
  pomijane ani blokowane na dosłanie zdjęć.
- 2026-07-29: właściciel dostarczył realny zestaw 12 zdjęć do sekcji "O mnie"
  (`about-photos/`, 47.6 MB) — zdiagnozowano i naprawiono: 8/12 plików było PNG (zły, bezstratny
  format dla zdjęć z ziarnem filmowym), część w wymiarach do 4096×4096 znacznie przekraczających
  realną potrzebę. Skonwertowane do WebP (max 1800px dłuższy bok, jakość 82) — 47.6 MB → 3.85 MB
  (−92%). Sprawdzony i wykluczony realny problem prywatności (GPS w EXIF) przed publikacją.
  Zoptymalizowane pliki skopiowane do `src/assets/about/`, finalne mapowanie zdjęć na pasje
  (realne nazwy plików) dopisane do punktu f w Roadmapie — łącznie z rozstrzygnięciem wcześniejszej
  otwartej wątpliwości (plik `cat_eye.webp` ujawnił przez nazwę, że to demonstracja "cat-eye"
  bokeh, jednoznacznie fotograficzna, nie hiking/bieganie).
- 2026-07-30: **dwa realne incydenty produkcyjne, oba wynikłe z CSP dodanego świeżo po obu
  stronach, złapane na żywo przez właściciela, nie testami.** (1) Ten shell's `style-src 'self'`
  (bez `unsafe-inline`) po cichu blokował `<style>` wstrzykiwany w runtime przez shadow DOM
  widgetu `<tour-guide-mini-map>` (Angular wstrzykuje style komponentów jako prawdziwe tagi
  `<style>`, nie tylko zewnętrzne pliki — inaczej niż Vite/ten shell, który normalnie nie ma
  żadnych inline styli). Efekt: `.leaflet-container` traciło `overflow: hidden`, co uruchamiało
  pętlę ResizeObserver → `invalidateSize()` → więcej kafli → większy kontener → crash karty.
  Naprawione dodaniem `'unsafe-inline'` do `style-src` tego shellu (uzasadnione — Vite i tak nie
  generuje inline skryptów, więc `script-src` zostaje wąski). (2) Osobny, poważniejszy incydent w
  samym tour-guide: `script-src 'self'` (bez wyjątków) zablokował inline `onload` handler, który
  Angular CLI samo generuje w zbudowanym `index.html`
  (`<link media="print" onload="this.media='all'">`, standardowy wzorzec nie-blokującego
  ładowania CSS) — arkusz nigdy nie przełączał się z `media=print` na `media=all`, więc **cała
  strona traciła style na produkcji** (lokalnie niewidoczne, bo `ng serve` nie wysyła żadnego
  CSP). Pierwsza łatka (blanket `'unsafe-inline'` w `script-src`) zadziałała, ale właściciel od
  razu zapytał wprost, czy to nie jest obniżka jakości audytu — słusznie: to był realny downgrade
  zrobiony pod presją awarii, bez znalezienia faktycznej przyczyny najpierw. Naprawione właściwie:
  policzony SHA-256 dokładnie tej treści handlera i użyty jako scoped
  `'unsafe-hashes' 'sha256-...'` zamiast ogólnego `unsafe-inline` — zweryfikowane też negatywnie
  (wstrzyknięty, niepowiązany inline handler nadal blokowany), więc łatka nie otwiera CSP szerzej
  niż potrzeba. Pełny opis, dokładny hash i finalny nagłówek — w `CLAUDE.md` tour-guide (sekcja o
  incydencie CSP). **Lekcja do zapamiętania dla obu repo:** przy awarii CSP nie sięgać od razu po
  `unsafe-inline` jako pierwszą łatkę — najpierw znaleźć faktyczny inline script/handler; hash jest
  niemal zawsze dostępny i dużo węższy. Przy okazji zalogowano też (nie naprawiono jeszcze) realny
  bug zgłoszony przez właściciela: na mobilce w tour-guide rysowanie koła (promień) na mapie
  area-pickera nie działa, podczas gdy poligon działa — do zbadania na żywym `tourguide.kubsiw.com`
  na realnym dotyku, nie na zresizowanym viewport na desktopie (patrz `CLAUDE.md` tour-guide).
- 2026-07-30: **zainicjowano Projekt 2 (Insider)** — nowe, osobne repo `C:\insider` (Vue 3 + Vite),
  domena `insider.kubsiw.com` już dostępna na tej samej strefie Cloudflare co tour-guide. Zgodnie z
  zasadą "mały, weryfikowalny szkielet najpierw" zbudowano dokładnie zakres Fazy 4/kroku 10: tokeny
  "Night Desk" jako realny CSS (`src/styles/tokens.css`), jeden dumb komponent `StoryCard.vue` (bez
  fetchowania/logiki biznesowej) renderujący jedną kartę ze sztywnymi danymi i plakietką "SUGESTIA
  AI · NIE PORADA" obecną od pierwszej wersji — zweryfikowane na żywo w przeglądarce (desktop +
  375px mobile, bez przewijania w poziomie). Brak jeszcze realnego źródła danych, tickera i
  deployu. **Właściciel będzie prowadził dalszą pracę nad Insiderem w osobnej zakładce Claude Code
  (rooted w `C:\insider`)**, tę zakładkę (rooted w `C:\portfolio-shell`) zostawiając dla dalszej
  pracy nad shellem. **Ustalono jawnie: jeden wspólny dokument, nie kopie per repo** — ten plik
  (`PORTFOLIO_PLAN.md`) pozostaje jedynym miejscem pełnej specyfikacji/historii współdzielonej
  między projektami; `CLAUDE.md` w `insider` (podobnie jak już wcześniej w tour-guide) tylko do
  niego odsyła pełną ścieżką, nic z jego treści nie jest kopiowane lokalnie — pierwsza wersja
  `insider`'s `CLAUDE.md` przypadkiem duplikowała fragment specyfikacji w osobnym
  `PROJECT_BRIEF.md`, złapane i poprawione (plik usunięty) zanim trafiło to do commita.
- 2026-07-30: **Insider — dokończono krok 10** (real dane + ticker), w tej samej sesji co jego
  inicjalizacja wyżej. Wybór źródła danych rozstrzygnięty realnym testem, nie z dokumentacji:
  `curl` na żywo pokazał, że Finnhub i Marketaux wysyłają `Access-Control-Allow-Origin: *`, a
  Alpha Vantage żadnych nagłówków CORS — Finnhub wygrał (szerszy darmowy tier, ten sam wynik
  CORS co Marketaux). Klucz API użytkownik zakładał sam (rejestracja kont nie jest robiona
  automatycznie), potwierdzony jako działający też przez realny `curl` przed zapisaniem do
  `.env`. Pełny opis zmiany w `insider/CLAUDE.md`'s "Status".
- 2026-07-30: **Insider — pre-deploy "hype" pass**, ta sama sesja. Właściciel poprosił o
  wzbogacenie apki przed wdrożeniem: zegary światowe (Warszawa + 3 inne strefy), bramkę "zbierz
  informacje" zamiast auto-fetchu, i osobną zakładkę sugestii AI long/short. Ostatni punkt
  (prawdziwe AI, nie heurystyka) był świadomą decyzją architektoniczną potwierdzoną przez
  `AskUserQuestion` — wymagał pierwszego backendu dla Insidera (Node/Express, minimalny, tylko
  proxy do Claude API). `ANTHROPIC_API_KEY` współdzielony z tour-guide (potwierdzone pytaniem do
  właściciela) zamiast zakładania osobnego klucza. Zweryfikowane end-to-end z realnym kluczem w
  przeglądarce (nie zamockowane) — pełny opis w `insider/CLAUDE.md`'s "Status".
- 2026-07-30: **Insider — poprawki po realnym zgłoszeniu właściciela**, ta sama sesja co hype
  pass wyżej: karta-story przesunięta w lewo na szerokich ekranach (root cause: niedopasowany
  szerokością wrapper na `@touchstart`/`@touchend`, naprawione przez Vue attribute fallthrough
  wprost na `StoryCard`), pasek paginacji "skaczący" przy zmiennej długości treści (naprawione tym
  samym wzorcem co `PoiTile` w tour-guide — stała wysokość karty + scrollowalne wnętrze), oraz
  nowa blokada zakładki Sugestie do czasu zaznaczenia checkboxem wszystkich newsów jako
  przeczytane. Pełny opis w `insider/CLAUDE.md`'s "Status".
- 2026-07-30: **Insider — korekta koncepcji sugestii AI**, ta sama sesja. Właściciel doprecyzował
  dwie rzeczy pomylone w pierwszej wersji: (1) "long"/"short" to żargon kierunku zakładu (wzrost/
  spadek), nie horyzontu czasowego — właściciel miał na myśli "trzymać dłużej" vs "szybki strzał",
  zmienione na `quickTrade` (1-3 dni)/`holdLonger` (do końca tygodnia), wciąż w ramach
  pierwotnego limitu "maks. tydzień"; (2) pierwsza wersja tylko przeformułowywała nagłówek newsa
  zamiast wskazywać konkretną spółkę/ETF — naprawione, `SuggestionItem` wskazuje teraz realny
  instrument (np. "NVIDIA (NVDA)", "Invesco QQQ Trust (QQQ)") z twardym zastrzeżeniem w prompt
  systemowym przeciw wymyślaniu nazw/tickerów. Zweryfikowane end-to-end z realnym kluczem
  Anthropic. Pełny opis w `insider/CLAUDE.md`'s "Status".
- 2026-07-30: **Insider — cache sugestii na 24h + obejście blokady czytania**, ta sama sesja.
  Sugestie AI trzymane w `localStorage` przez 24h lub do pojawienia się nowszych newsów (co
  pierwsze — świeżość newsa liczona z realnego pola `datetime` Finnhuba, nie z `id`, bo
  potwierdzone live że `id` nie jest monotoniczne z czasem). Wejście w zakładkę Sugestie samo w
  sobie nic nie kosztuje (cichy odczyt cache przy montowaniu), realne wywołanie AI wciąż wymaga
  klika w przycisk. Dodatkowo: blokadę czytania newsów można świadomie ominąć przez przycisk +
  potwierdzenie, z trwałym ostrzeżeniem nad sugestiami że pominięto pełny kontekst. Zweryfikowane
  end-to-end (reload strony w oknie 24h realnie pokazał te same sugestie, zero nowych wywołań
  API). Pełny opis w `insider/CLAUDE.md`'s "Status".
- 2026-07-30: **Insider — runda polish UI** (kafelki sugestii, zegary świata, taby, sticky
  header/footer), ta sama sesja. Najważniejsze dla tego dokumentu: **doszła pieczątka portfolio**
  w Insiderze, ten sam mechanizm co w tour-guide/portfolio-shell (rotowana plakietka zwisająca z
  rogu sticky headera, link do kubsiw.com), ale we własnym kolorze apki — fioletowy `#863bff` z
  jej własnego `favicon.svg` (potwierdzone odczytem pliku, nie zgadywane), świadomy jednorazowy
  wyjątek od zablokowanej palety "Night Desk", nie nowy token współdzielony. Reszta zmian czysto
  lokalna dla Insidera — pełny opis w `insider/CLAUDE.md`'s "Status".
- 2026-07-30: **Insider — utworzone repo GitHub + zbudowany pipeline deployu**, ta sama sesja.
  `kubasiw/insider` (publiczne). Pipeline 1:1 wg wzorca tour-guide (Dockerfile ×2, Traefik na
  jednej domenie z `/api`-PathPrefix, GitHub Actions → GHCR → SSH deploy) — oba obrazy zbudowane i
  zweryfikowane realnie lokalnie w Dockerze (nie tylko napisane), włącznie z realnym testem CSP w
  przeglądarce (request do `finnhub.io` przeszedł, nie zablokowany). Realny deploy na VPS czeka na
  akcję właściciela — dodanie sekretów repo i pliku `backend.env` na serwerze; nie proszono o
  wklejenie klucza SSH do czatu. Pełny opis w `insider/CLAUDE.md`'s "Status".
- 2026-07-31: **Idea captured, not built: ten sam widok "opis + apka po prawej" dla tour-guide.**
  Insider dostał własny, dedykowany widok szczegółów (split: krótki opis — problem/tech/business
  story — po lewej, realna, żywa apka po prawej, wzorem karty "Umiejętności"), reachable przez
  standardowy `hasDetailView`/"Zobacz →" — patrz `InsiderDetail.tsx`. Właściciel poprosił o dokładnie
  tę samą konwencję dla tour-guide: nowy widok szczegółów (nie tylko istniejący mały fragment mapy
  na kafelku), z opisem w podobnym stylu i realną apką po prawej. **Otwarte pytanie do rozstrzygnięcia
  przy budowie:** tour-guide — w przeciwieństwie do Insidera — ma router/auth/wiele ekranów, więc
  "apka po prawej" nie może być tym samym mechanizmem (cały `<insider-app>` jako jeden Web Component)
  co dla Insidera bez dodatkowej pracy — kandydaci: (a) `<iframe src="https://tourguide.kubsiw.com">`
  (najprostszy, zawsze działa niezależnie od routera/auth, ale traci "to nie iframe" czystość
  podejścia Web Components już użytego gdzie indziej), (b) ponowne użycie już istniejącego
  `<tour-guide-mini-map>` (bezpieczne, zero nowej pracy po stronie tour-guide, ale to nadal tylko
  fragment/mapa, nie "cała apka" w sensie, w jakim Insider nią jest), (c) eksport całego tour-guide
  jako Web Component na wzór Insidera — realna praca po stronie tour-guide (nowy build target +
  rozwiązanie problemu routera/auth wewnątrz Shadow DOM), nie mały krok. Do zdecydowania przy
  faktycznym budowaniu, nie zgadywane teraz. **Właściciel poprosił też o dodatkową pieczątkę "W
  budowie" wewnątrz tego nowego widoku** (ten sam komponent `Stamp` już użyty gdzie indziej w tym
  repo) — dotyczy samego nowego WIDOKU jako świeżo dodanej, nie w pełni dopracowanej rzeczy, nie
  statusu tour-guide jako projektu (tour-guide jest najbardziej dojrzałym, w pełni wdrożonym
  projektem w tym zestawie — to rozróżnienie ważne, żeby nie zasugerować odwrotnie).
  **Doprecyzowane tego samego dnia:** skoro cała, żywa apka przenosi się na nowy widok szczegółów,
  **kafelek tour-guide powinien wtedy też przejść z żywego `<tour-guide-mini-map>` na statyczny
  zrzut ekranu jako zajawkę** — dokładnie ta sama zmiana, którą Insider właśnie dostał na swoim
  kafelku (ekran → kafelek, żywa apka → nowy widok szczegółów), dla spójności między obiema
  kartami. Nie robić tego jednak, zanim widok szczegółów tour-guide faktycznie nie istnieje —
  podmiana żywego widgetu na statyczny obrazek na kafelku bez gotowego miejsca docelowego byłaby
  realnym krokiem wstecz (użytkownik straciłby jedyny podgląd apki), nie do zrobienia jako
  osobny, wcześniejszy krok.
- 2026-07-31: **zmieniono framework Serwisanta z Angulara na React Native.** Powód: to apka z
  założenia używana w terenie (zdjęcia dokumentów przy warsztacie/na parkingu), więc realnie
  mobile-first charakter przeważa nad pierwotnym argumentem "powtórz Angulara, pokaż głębię, nie
  tylko szerokość" — a React Native i tak pokrywa breadth lepiej, bo to czwarte, nie trzecie,
  odrębne podejście frontendowe w całym zestawie (React web / Vue / Angular / React Native), mimo
  współdzielonego języka z shellem. Pełne uzasadnienie i odpowiedź na pytanie o instalowalność
  (Android APK/sideload = prosto i za darmo; iOS wymaga płatnego Apple Developer Program albo
  7-dniowego darmowego podpisu — Expo Go samo w sobie nie daje własnej ikony na pulpicie, do tego
  trzeba EAS Build) — w sekcji "Projekt 3 — Serwisant" wyżej.
- 2026-07-31: **rozpisano szczegółowy przepływ appki Serwisant** (właściciel, w sesji roboczej nad
  repo `C:\serwisant` — Expo/TypeScript skeleton scaffoldowany w tej samej sesji, patrz jego własny
  `CLAUDE.md`). Trzy decyzje potwierdzone przez `AskUserQuestion` przed spisaniem: (1) **brak
  logowania/rejestracji na start** — profil pojazdu i historia serwisowa zapisywane wyłącznie
  lokalnie na urządzeniu (`expo-sqlite`), backend (jeśli powstanie) wywoływany tylko bezstanowo do
  AI/OCR, konta/sync odłożone jako czysta rozbudowa na później; (2) **kaskadowy formularz wyboru
  pojazdu (marka→model/generacja→rocznik→silnik) zasilany AI-owymi podpowiedziami z potwierdzeniem
  użytkownika, nie realną bazą motoryzacyjną** — odrzucono opcję szukania/integrowania realnego API
  danych pojazdów (ten sam rodzaj niepewności "brak darmowego źródła prawdy" co przy interwałach
  serwisowych, niewarty sprawdzania na tym etapie); (3) **OCR dowodu rejestracyjnego z pierwotnego
  planu zostaje na roadmapie, ale odłożony** — kaskadowy picker jest teraz pierwszą/podstawową
  ścieżką, OCR dowodu dochodzi później jako szybszy skrót, nie zamiennik. Pełny nowy przepływ (5
  kroków: wybór pojazdu → wstępna historia serwisowa z dwóch niewykluczających się wejść (opis
  tekstowy + zdjęcia faktur/książki serwisowej) → jawna akcja "Sprawdź konieczne czynności
  serwisowe" → priorytetyzowana prezentacja + eksport PDF, kandydat `expo-print`) spisany w sekcji
  "Projekt 3 — Serwisant" wyżej; kroki 12-15 Fazy 5 w Roadmapie rozpisane szczegółowo w miejsce
  wcześniejszego uproszczonego ujęcia (krok 15, domykanie pętli odhaczenie→dowód wykonania, było
  wcześniej częścią kroku 13 — rozdzielone, bo krok 13 jest teraz o pierwszym budowaniu osi czasu,
  nie o późniejszym jej domykaniu).
- 2026-07-31: **zmieniono design system Serwisanta z "Workshop Docket" na "Service Bay".** Powód:
  realny feedback właściciela po zobaczeniu pierwszego builda (kaskadowy formularz pojazdu na
  localhost) — Workshop Docket (beżowy papier, wyłącznie monospace) wyglądał "mało efektownie i
  podobnie do portfolio". Zrobiono realny research bieżących (2026) trendów mobile UI/UX przed
  propozycją (dark-mode-first, bento grid, bold minimalism, neumorfizm dla narzędzi
  diagnostycznych), zbudowano 3 konkretne, w pełni działające kierunki jako interaktywna makieta
  porównawcza (Pit Wall — ciemny bento z cyjanem; Soft Diagnostic — neumorfizm na jasnym chłodnym
  tle; Field Ledger — ewolucja Workshop Docket na ciemnym tle z nasyconym bursztynem), każdy
  renderujący te same dane (VW Golf VII, 145 000 km, 5 pozycji serwisowych), nie próbki kolorów.
  Właściciel zgłosił realny problem z Pit Wallem (siatka 2×2 ściskała treść, "kafelki jedno pod
  drugim, bo treść się nie mieści") — dobudowano 4. kierunek, "Service Bay", fuzję Pit Walla
  (ciemne tło, cyjanowy akcent hero/CTA) z Field Ledgerem (pieczątki statusu, ale jako pełnej
  szerokości wiersze zamiast siatki). **Wybrany: Service Bay** — pełne tokeny kolorów/typografii/
  układu spisane w sekcji "Projekt 3 — Serwisant" → "Design system" wyżej, zastępując Workshop
  Docket tam. Zasada "fakt vs. szacunek" i komponent pieczątki (bordered badge, lekko obrócony)
  przetrwały zmianę bez modyfikacji — to one, nie paleta/typografia, okazały się częścią, która
  faktycznie działała. Kod referencyjny (4 kierunki, HTML/CSS) zbudowany i zweryfikowany w sesji
  roboczej nad `C:\serwisant`, nie zapisany jako plik w żadnym repo — do odtworzenia z historii tej
  rozmowy, jeśli potrzebny ponowny wgląd. **Zaktualizowane (2026-08-01):** rzeczywista implementacja
  w kodzie RN (`theme.ts`, `App.tsx`, formularz pojazdu — `VehicleSummary.tsx` istniał w tym
  momencie, później usunięty przy okazji kroku 13, patrz wpis niżej) zbudowana i zweryfikowana na
  żywo tego samego dnia — tokeny potwierdzone przez `getComputedStyle` (tło ekranu, tło/obrys karty,
  akcent cyjanowy na przycisku, hero w mono).
- 2026-08-01: **Serwisant — przebudowa na `frontend/`+`backend/` i zbudowany krok 13** (wstępna
  historia serwisowa: opis + zdjęcia → AI → oś czasu). Pierwszy raz repo potrzebowało realnego
  backendu (wywołanie AI z kluczem API nie może żyć w telefonie) — przebudowano strukturę repo na
  wzór tour-guide (potwierdzone przez `AskUserQuestion`, nie zgadywane), przenosząc już zbudowany
  szkielet Expo do `frontend/` bez zmian. Nowy `backend/` (NestJS, mirror tour-guide: `HealthModule`,
  `AiModule`) celowo prostszy niż tour-guide'owy odpowiednik — bez Prismy, bez trwałego dziennego
  limitu wywołań AI, bo tu nie ma żadnej bazy i apka nie jest jeszcze publicznie wdrożona; to samo
  hardening co w tour-guide (2026-07-27) zostaje jako świadomie odłożony krok przed realnym
  deployem. Wyciąganie historii serwisowej z opisu/zdjęć zrobione przez tool-calling
  (`record_service_history`, wymuszony `tool_choice`) zamiast parsowania wolnego tekstu — ten sam,
  już sprawdzony wzorzec co `PlanChatModule` w tour-guide. Zweryfikowane na żywo (nie zgadywane):
  niejednoznaczna data ("w zeszłym roku, nie pamiętam dokładnie") poprawnie wróciła jako `null`
  zamiast zgadywanej daty; realne ale niezwiązane ze serwisem zdjęcie (ikona appki) poprawnie
  zwróciło pustą listę zdarzeń zamiast zmyślonych wpisów — model faktycznie trzyma się materiału
  źródłowego, nie tylko w teorii promptu. Frontend dodaje krok przeglądu wyników (każdy usuwalny)
  między analizą a zapisem — człowiek potwierdza, zanim cokolwiek trafi do lokalnej bazy, ten sam
  duch co reszta apki. **`VehicleSummary.tsx` usunięty** — jego rola (fakty pojazdu + reset) okazała
  się w pełni zastąpiona przez nowy ekran osi czasu, więc złożono je w jeden ekran zamiast trzymać
  dwa nakładające się "ekrany startowe". Po drodze złapane i naprawione dwa realne problemy
  infrastrukturalne: wybrany port backendu (3100) kolidował z już działającym backendem Insidera na
  tej samej maszynie (znalezione przez realną inspekcję procesów, nie zgadywane) — przeniesiony na
  3200; i `TaskStop` na tle działający `npx expo start` na Windowsie nie zabija realnego
  procesu-drzewa (tylko wrapper powłoki), zostawiając uchwyty plików blokujące przenoszenie
  `node_modules`/`src` — naprawione przez `taskkill /T /F` na PID-zie drzewa, warte pamiętania przy
  każdym przyszłym tle-działającym procesie Expo w tym repo. Pełne szczegóły techniczne w
  `C:\serwisant\CLAUDE.md`.
- 2026-08-02: **Serwisant — dopięte AI rozpoznawanie/potwierdzanie pojazdu**, świadomie odłożone
  przy budowaniu kroku 12 (brak backendu w tym momencie), teraz odblokowane backendem z kroku 13.
  Nowy `POST /api/vehicle-profile/recognize` (ten sam wzorzec wymuszonego tool-calla co przy
  historii serwisowej) normalizuje pisownię marki/modelu/silnika i dopisuje generację/zakres lat
  **tylko gdy to pewna, ogólnie znana wiedza** — nigdy nie zgaduje przy nietypowych/zmyślonych
  danych (zweryfikowane na żywo fikcyjną marką "Zzyzx Motors" — wróciła bez zmian, żadnej wymyślonej
  normalizacji). Ostatni krok kreatora pojazdu teraz pokazuje ekran potwierdzenia ("Czy się zgadza?"
  + jedno zdanie podsumowania) zamiast zapisywać od razu — "Tak, zapisz" zapisuje znormalizowane
  dane (nie surowy wpisany tekst, potwierdzone przez realny zapis w bazie, nie tylko przez sam ekran
  potwierdzenia), "Popraw" wraca do edycji. Awaria AI/sieci nie blokuje twardo utworzenia profilu —
  dostępny fallback "Zapisz bez rozpoznania". **Przy okazji złapany i naprawiony realny bug**: krok
  dalej w kreatorze zawsze czyścił pole na pusty tekst, nawet gdy to pole miało już wcześniej
  wpisaną wartość (np. po "Popraw" wracającym do kroku 1) — poprawka pre-wypełnia pole poprzednio
  wpisaną wartością zamiast czyścić, zweryfikowana na żywo (powrót przez "Popraw" i ponowne
  zatwierdzanie kroków 2-5 pokazuje ich poprzednie wartości, nie puste pola). Pełne szczegóły w
  `C:\serwisant\CLAUDE.md`.
- 2026-08-02: **Serwisant — naprawiony realny brak nawigacji.** Właściciel utknął na telefonie na
  ekranie przechwytywania historii serwisowej — `App.tsx` wymuszał ten ekran zawsze, gdy pojazd
  istniał a historia była pusta, bez żadnego wyjścia (brak "wstecz"/"pomiń"). Naprawione właściwie,
  nie załatane: wybór ekranu to teraz jawny stan `'intake' | 'timeline'`, wciąż domyślnie
  pokazujący przechwytywanie zaraz po utworzeniu pojazdu (zgodnie z zamierzoną kolejnością z planu),
  ale oba kierunki zawsze dostępne — nowy link "Pomiń na razie" na ekranie przechwytywania, a oś
  czasu radzi sobie teraz z zerową historią (komunikat + przycisk "Dodaj historię serwisową"
  zamiast zakładać, że zawsze jest co najmniej jedna pozycja do wyrenderowania). Zweryfikowane na
  żywo w obie strony. Pełne szczegóły w `C:\serwisant\CLAUDE.md`.
- 2026-08-03: **Serwisant — zbudowany krok 14** (akcja "Sprawdź konieczne czynności serwisowe" +
  eksport PDF), ostatni funkcjonalny krok Fazy 5 przed dystrybucją (krok 16) i domykaniem pętli
  (krok 15, wciąż odłożone). Nowy endpoint AI ocenia 6-10 typowych pozycji serwisowych dla danego
  typu pojazdu względem realnej historii i aktualnego przebiegu — **fakt i szacunek rozdzielone
  strukturalnie w samej odpowiedzi AI** (`lastServiceFact` z realnej historii vs. `estimateNote` z
  orientacyjnej wiedzy ogólnej), nie tylko wizualnie na ekranie, co jest mocniejszą gwarancją niż
  poprzednie podejście samego UI. Komponent pieczątki statusu (bordered badge, lekko obrócony) —
  ten sam co w Workshop Docket/Field Ledger/Service Bay — użyty tu bez zmian, potwierdzając że to
  faktycznie trwały, wielokrotnie sprawdzony element języka wizualnego tej apki. Kolor akcentu
  (cyjan) użyty pierwszy raz gdzie indziej niż hero-liczba — na przycisku uruchamiającym tę
  akcję, świadomie, bo to realnie najważniejsza czynność w całej apce. Eksport PDF przez
  `expo-print` — celowo jasny/drukowalny layout raportu, nie ciemna skóra Service Bay apki (papier
  to papier, ciemny motyw marnowałby tusz i wyglądałby źle wydrukowany), z tą samą notatką
  "orientacyjne, nie oficjalna dokumentacja producenta" co w oryginalnym planie. Zweryfikowane na
  żywo dla pojazdu bez żadnej zapisanej historii (wszystkie pozycje poprawnie `unknown` z
  konkretnym uzasadnieniem, nie ogólnikowym wykrętem); sam eksport PDF zweryfikowany tylko przez
  odczytanie wygenerowanego HTML, nie przez realne wydrukowanie — automatyczna przeglądarka w tym
  środowisku nie ma niezawodnego sposobu zamknięcia natywnego okna drukowania, do przetestowania
  naprawdę na telefonie. Pełne szczegóły w `C:\serwisant\CLAUDE.md`.
- 2026-08-03: **Serwisant — audyt jakościowo-bezpieczeństwowy**, zainicjowany wprost przez
  właściciela pytającego, czy repo dostało ten sam przegląd co tour-guide przed publicznym
  udostępnieniem. Uczciwa odpowiedź w tym momencie: nie, ta sesja to była czysta praca nad
  funkcjami. Realne braki znalezione i naprawione: brak rate limitingu, brak dziennego budżetu
  wywołań AI, brak limitów długości pól tekstowych — ta sama kategoria luk co w tour-guide przed
  jego hardeningiem 2026-07-27, tu naprawiona zanim repo faktycznie trafiło do publicznego
  wdrożenia (nie tylko publicznego repo na GitHubie). Kluczowa różnica względem tour-guide: brak
  tu jakiejkolwiek bazy danych, więc dzienny budżet wywołań to licznik w pamięci procesu (reset przy
  restarcie), nie trwały licznik jak `AiUsageDay` w tour-guide — świadomy, udokumentowany
  kompromis. Zweryfikowane na żywo (nie tylko przeczytane): 6 szybkich requestów na limit 5/min →
  5×201 potem 429; zbyt długi `freeText` → 400 z konkretnym komunikatem walidacji. Świadomie
  nienaprawione: 11 podatności npm we frontendzie, wszystkie w łańcuchu narzędziowym Expo
  (build-time, nie runtime) — naprawa wymagałaby cofnięcia decyzji o SDK 54. Pełne szczegóły w
  `C:\serwisant\CLAUDE.md`.

- 2026-11-20: **Koniec z VPS-em: hosting za €0 (Cloudflare Pages), widgety jako statyczne pliki.**
  Hetzner CPX22 (€23,97/mies.) był jedynym stałym kosztem; próba przeprowadzki tego samego stosu na
  darmowy Oracle Cloud (Ampere A1) utknęła na "out of capacity" (jedna AD w Paryżu, wszystkie
  Fault Domains), więc zamiast dalej walczyć o darmowy serwer — przeprojektowanie: strona na
  Cloudflare Pages, oba widgety (tour-guide: mapa; insider: cała apka) skompilowane do Web
  Components i serwowane jako pliki obok strony (`public/elements/`, ten sam origin). Backendy
  tour-guide/insider nie są wdrożone: mapa czyta statyczny snapshot 40 POI (generowany raz z
  żywego backendu przed wyłączeniem, ścieżka względem `import.meta.url`), sugestie AI insidera są
  wyłączone wprost. Zmienione w kodzie: loadery widgetów (ścieżki lokalne), linki do subdomen →
  repozytoria GitHub, teksty o VPS-ie/Traefiku (hero, notatka "za kulisami", statystyka "€0 koszt
  hostingu", umiejętności, ShellDetail/InsiderDetail/TourGuideDetail — statusy projektów:
  "Widget na żywo"), wywalone pliki Docker/nginx/compose i workflow deploy (zastąpiony ci.yml).
  **Realne ustalenia po drodze:** (1) stary CSP z `nginx.conf` miał `style-src 'self'` i
  `font-src 'self'`, czyli blokował Google Fonts (Archivo/IBM Plex Mono) na produkcji — niewidoczne
  lokalnie, bo Vite dev nie wysyła CSP; nowy `_headers` je dopuszcza. (2) Fallback
  `VITE_API_BASE_URL || 'http://localhost:3100'` w insiderze trafiłby do bundla i próbował
  łączyć się z localhostem odwiedzającego — teraz pusty string = AI wyłączone. Zweryfikowane na
  zbudowanym `dist` serwowanym z prawdziwym CSP z `_headers`: oba widgety ładują się z plików
  lokalnych (mapa: 6 kafli OSM, 40 markerów, `overflow: hidden` na kontenerze Leafleta; insider:
  shadow root, 6 żądań do Finnhuba bez błędów CSP). **Kroki poza repo (robi właściciel):** projekt
  Cloudflare Pages + custom domain `kubsiw.com`, usunięcie rekordów `tourguide`/`insider`/
  `serwisant` z DNS, a na końcu skasowanie serwera w Hetznerze (dopiero po weryfikacji nowej
  strony pod właściwą domeną).
