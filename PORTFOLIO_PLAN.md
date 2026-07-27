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
  uruchomienia, dobrze pasuje do prostych, szybkich kart-stories) — patrz sekcja osobna poniżej.
- **Projekt 3 — "Serwisant"** (robocza nazwa, framework: do ustalenia) — asystent serwisowy
  samochodu. Patrz sekcja osobna poniżej.

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

## Projekt 3 — "Serwisant" (robocza nazwa, framework: do ustalenia)

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

**Framework: Angular** (potwierdzone 2026-07-24) — powtórka stacku z tour-guide, świadomie: ten
sam wzorzec engineering discipline (signals/resource, strict typing, wywołania AI w kształcie już
sprawdzonym w `AiModule`/`PlanChatModule`) zastosowany w drugiej, nowej domenie. Pokazuje głębię
kompetencji, nie tylko szerokość frameworków — tę akurat pokrywają już React (shell) i Vue
(Insider).

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

**Design system — "Workshop Docket" (zablokowany 2026-07-24):** estetyka kwitu warsztatowego —
uczciwa wobec tego, czym apka faktycznie operuje (realne dokumenty), i wyraźnie odrębna od Night
Desku (Insider), mimo że oba są "techniczne".
- Tło (papier kwitu): `#f1efe9`; tekst główny: `#2b2620`; tekst drugorzędny: `#6b6357`.
- Hairline pełny: `#d6d2c4`; hairline przerywany (nagłówek dokumentu): `#b8b3a1`; separator wiersza:
  `#e2dfd4`.
- Kolory statusu (pieczątki, tylko funkcyjnie): czerwony `#b3261e` (przeterminowane), bursztyn
  `#a9772f` (wkrótce), zielony `#3f6b3f` (ok).
- Typografia: wyłącznie monospace (`ui-monospace`) — maszynopisowy charakter kwitu, brak serifów/
  groteskowych nagłówków (odróżnia to świadomie od Editorial Garage, gdzie serif jest głównym
  motywem).
- Komponent: pieczątka statusu — bordered badge, lekko obrócony (`transform: rotate(-4deg)` do
  `rotate(4deg)`, losowo/na wiersz, imituje realną pieczątkę), uppercase, bold.
- **Fakt vs. szacunek (nowa, generalna zasada — patrz też sekcja dobrych praktyk):** pieczątka
  pełna/wypełniona = potwierdzony fakt (SKP z OCR dowodu, ukończona usługa z dowodem); pieczątka
  tylko-obrys/przerywana + prefiks "SZAC." = szacowany interwał AI. Nigdy nie prezentować jednym
  wizualnym językiem.
- Odrzucony wariant: "Instrument Cluster" (ciemna deska rozdzielcza, paski postępu jak wskaźniki) —
  bardziej "żywy panel" niż "archiwum dokumentów", mniej spójny z tym, czym apka faktycznie jest.

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

## Design system — "Editorial Garage" (zablokowany kierunek wizualny portfolio shell)

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

e. ⬜ **`about`/`skills`/`contact` jako pełnoekranowy widok "w ramach" istniejącej appki.**
   Prawdopodobnie stan komponentu (np. `selectedSection` w `Toc`/`App`), nie osobna trasa/router —
   portfolio nie ma dziś routingu, i reszta appki (gra w statki, skip, zwijanie planszy) już działa
   jako czysty stan, nie URL; do potwierdzenia przy kodowaniu, czy to świadomie zostaje tak, czy
   jednak warto dodać `react-router` tylko dla tych trzech widoków (np. pod kątem głębokiego
   linkowania/SEO). Guzik "Wróć do spisu treści" + animacja przejścia — kandydat na mechanikę:
   ten sam wzorzec co zwijanie planszy po skipie (Faza 2, krok 6) — czysty CSS transition na
   wymiarach/opacity, zapięty pod `prefers-reduced-motion`, bez FLIP/JS-owego przeliczania pozycji,
   żeby nie dokładać złożoności bez realnej potrzeby.

f. ⬜ **Sekcja "O mnie" — galeria zdjęć pasji.** Kilkanaście zdjęć, przewijane/wybierane z gridu;
   po wybraniu — mniejszy kwadrat z kilkoma zdaniami o danej pasji, w pasującej czcionce (pomysł
   właściciela, otwarty na lepszy, jeśli się znajdzie). Otwarte do ustalenia przy realizacji:
   dokładny układ (lightbox nad gridem vs. karta rozwijana w miejscu obok zdjęcia), źródło zdjęć
   (właściciel dostarczy realne pliki, nie placeholdery/stocki — spójne z zasadą "realne dane ponad
   zamockowane założenia"), i czy opisowy kwadrat żyje jako nakładka (overlay) czy sąsiaduje ze
   zdjęciem. Warto rozważyć 2-3 warianty i skonsultować przed kodowaniem — ten sam tryb decyzyjny
   co przy innych większych wyborach wizualnych w tym dokumencie (np. 4 warianty przed wyborem
   Editorial Garage).

g. ⬜ **Sekcja "Umiejętności" — zwykły tekst + lista.** User's własne słowa: "sam nie wiem" —
   najprostszy, niezaangażowany slot na start (zredagowany tekst + lista technologii/praktyk,
   czerpiąca prawdopodobnie wprost z sekcji "Dobre praktyki programistyczne i architektoniczne"
   tego dokumentu jako źródła treści, nie tylko z pamięci). Rewizja layoutu, jeśli po zobaczeniu
   realnej treści na żywo okaże się zbyt sucha.

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

**Faza 4 — Projekt 02: Insider (Vue)**
10. Szkielet Vue, design "Night Desk", jedna karta-story z realnymi danymi (Finnhub/Alpha Vantage/
    Marketaux), plakietka "SUGESTIA AI · NIE PORADA" obecna od pierwszej wersji, nie dobudowana
    później.
11. Deploy, subdomena, karta w portfolio odblokowana naprawdę.

**Faza 5 — Projekt 03: Serwisant (Angular)**
12. Profil pojazdu (formularz + OCR dowodu rejestracyjnego), podstawowy timeline na bazie ręcznie
    wpisanej historii — najpierw prostszy przypadek, bez OCR książki serwisowej.
13. OCR książki serwisowej/faktur + pętla odhaczenie → zdjęcie dowodu wykonania → aktualizacja.
14. Deploy, subdomena, karta w portfolio odblokowana naprawdę.

**Faza 6 — Polish**
15. Publiczna strona statusu (Uptime Kuma), spięta z health-checkami wszystkich apek.
16. Realne fonty self-hosted (serif/mono dla portfolio shellu).
17. Backupy (Hetzner albo cron `pg_dump`).
18. Wersje mobilne pozostałych makiet (Insider, Serwisant).
19. Krótkie case-study/README per projekt tłumaczące decyzje architektoniczne — ten dokument jako
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
