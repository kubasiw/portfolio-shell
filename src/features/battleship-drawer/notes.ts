// "Za kulisami" — notki odkrywane po zatopieniu statku (handoff: "trafienia dorzucają notki 'za
// kulisami' z każdego projektu: realne bugi, decyzje, koszty"). Treść nieustalona w samym
// handoffie (tylko liczba — 6 — i format są tam podane), napisana tutaj wprost z realnych,
// udokumentowanych incydentów z tego i pozostałych projektów (PORTFOLIO_PLAN.md, CLAUDE.md
// poszczególnych repo) — nie wymyślona, każda faktycznie się wydarzyła.
export interface BattleshipNote {
  id: string;
  titlePl: string;
  titleEn: string;
  bodyPl: string;
  bodyEn: string;
}

export const NOTES: BattleshipNote[] = [
  {
    id: 'csp-styling',
    titlePl: 'CSP złamało cały styling na produkcji',
    titleEn: 'A CSP header broke all styling in production',
    bodyPl:
      'Dodanie nagłówka Content-Security-Policy do tour-guide wyglądało niegroźnie na ng serve — a na produkcji zniknęły wszystkie style. Kod winny: <link media="print" onload="...">, standardowa sztuczka Angular CLI na nieblokujący CSS, zablokowana przez script-src. Naprawione wąskim hashem dla tego jednego handlera, nie blankietowym unsafe-inline.',
    bodyEn:
      'Adding a Content-Security-Policy header to tour-guide looked harmless on ng serve — in production, every style disappeared. The culprit: <link media="print" onload="...">, Angular CLI\'s standard non-blocking-CSS trick, blocked by script-src. Fixed with a narrow hash for that one handler, not a blanket unsafe-inline.',
  },
  {
    id: 'sticky-that-could-not-stick',
    titlePl: 'Sticky, które nie chciało być sticky',
    titleEn: "Sticky positioning that wouldn't stick",
    bodyPl:
      'Ta plansza miała podążać za scrollem jak kolumna obok kart — position:sticky nic nie robiło. Winny: overflow:hidden na load-bearing kontenerze gdzie indziej w drzewie, potrzebny do zupełnie innej animacji. Rozwiązanie: własny hook na scroll + requestAnimationFrame, licząc trzy stany ręcznie.',
    bodyEn:
      'This board was supposed to follow the scroll like a column next to the cards — position:sticky did nothing at all. The culprit: overflow:hidden on a load-bearing container elsewhere in the tree, needed for a completely different animation. Fix: a custom scroll + requestAnimationFrame hook, computing three states by hand.',
  },
  {
    id: 'portrait-photo-row',
    titlePl: 'Portretowe zdjęcie rozciągnęło cały wiersz',
    titleEn: 'A portrait photo stretched a whole row',
    bodyPl:
      'Indeks projektów wyżej na tej stronie miał wiersze różnej wysokości mimo identycznego layoutu. height:100% na zdjęciu wewnątrz grid itema, którego wysokość dopiero się liczy, rozwiązuje się jako auto — pionowy zrzut ekranu Insidera ciągnął swój wiersz do 294px. Naprawa: position:absolute zamiast height:100%.',
    bodyEn:
      "The project index above had rows of different heights despite identical layouts. height:100% on an image inside a grid item whose own height is still being computed resolves to auto — Insider's portrait screenshot was stretching its row to 294px. Fixed with position:absolute instead of height:100%.",
  },
  {
    id: 'ai-never-fakes-fact',
    titlePl: 'AI nigdy nie udaje faktu',
    titleEn: 'AI never pretends to be fact',
    bodyPl:
      'Insider i Serwisant obie generują tekst z AI — obie mają twardą zasadę: sugestia zawsze osobno od faktu, nigdy zmieszane w jednym zdaniu. Plakietka "sugestia AI · nie porada" nie jest kosmetyką, tylko strukturalnym rozdzieleniem w samej odpowiedzi modelu, nie tylko wizualnym.',
    bodyEn:
      'Both Insider and Serwisant generate text with AI — both follow one hard rule: a suggestion always stays separate from a fact, never blended into one sentence. The "AI suggestion · not advice" tag isn\'t cosmetic — it\'s a structural split in the model\'s own response, not just a visual one.',
  },
  {
    id: 'shadow-dom-css',
    titlePl: 'Web Component, który nie widział własnego CSS',
    titleEn: "A Web Component that couldn't see its own CSS",
    bodyPl:
      'Mapa Tour Guide osadzona jako <tour-guide-mini-map> renderowała się pusta mimo poprawnych danych. Shadow DOM izoluje style — globalny CSS Leafleta z reszty aplikacji po prostu nie wchodzi do środka. Naprawa: style Leafleta dołączone wprost do komponentu, wstrzykiwane do shadow roota razem z nim.',
    bodyEn:
      "Tour Guide's map, embedded as <tour-guide-mini-map>, rendered blank despite correct data. Shadow DOM isolates styles — the app's global Leaflet CSS simply never reaches inside. Fix: Leaflet's styles attached directly to the component, injected into the shadow root along with it.",
  },
  {
    id: 'hosting-cost',
    titlePl: 'Serwer za €24 miesięcznie dla portfolio? Nie',
    titleEn: 'A €24/month server for a portfolio? No',
    bodyPl:
      'Portfolio działało na własnym VPS-ie: Traefik, Docker Compose, osobny kontener i subdomena na każdą apkę, deploy z pusha. Po czerwcowej podwyżce cen Hetznera (nawet +176% na liniach CPX) kosztowało to ok. €24 miesięcznie — za ruch, jakiego tu realnie nie ma. Backendy zniknęły, a oba widgety zostały skompilowane do statycznych Web Components, które leżą obok strony na Cloudflare Pages; mapa czyta snapshot prawdziwych danych z OpenStreetMap. Koszt: €0, została tylko domena.',
    bodyEn:
      "The portfolio ran on its own VPS: Traefik, Docker Compose, a container and a subdomain per app, deploy on push. After Hetzner's June price hike (up to +176% on the CPX line) that came to about €24 a month — for traffic that simply isn't there. The backends are gone, and both widgets were compiled into static Web Components that sit next to the page on Cloudflare Pages; the map reads a snapshot of real OpenStreetMap data. Cost: €0, only the domain remains.",
  },
];
