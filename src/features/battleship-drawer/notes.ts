// "Za kulisami" — notki odkrywane po zatopieniu statku (handoff: "trafienia dorzucają notki 'za
// kulisami' z każdego projektu: realne bugi, decyzje, koszty"). Treść nieustalona w samym
// handoffie (tylko liczba — 6 — i format są tam podane), napisana tutaj wprost z realnych,
// udokumentowanych incydentów z tego i pozostałych projektów (PORTFOLIO_PLAN.md, CLAUDE.md
// poszczególnych repo) — nie wymyślona, każda faktycznie się wydarzyła.
export interface BattleshipNote {
  id: string;
  title: string;
  body: string;
}

export const NOTES: BattleshipNote[] = [
  {
    id: 'csp-styling',
    title: 'CSP złamało cały styling na produkcji',
    body: 'Dodanie nagłówka Content-Security-Policy do tour-guide wyglądało niegroźnie na ng serve — a na produkcji zniknęły wszystkie style. Kod winny: <link media="print" onload="...">, standardowa sztuczka Angular CLI na nieblokujący CSS, zablokowana przez script-src. Naprawione wąskim hashem dla tego jednego handlera, nie blankietowym unsafe-inline.',
  },
  {
    id: 'sticky-that-could-not-stick',
    title: 'Sticky, które nie chciało być sticky',
    body: 'Ta plansza miała podążać za scrollem jak kolumna obok kart — position:sticky nic nie robiło. Winny: overflow:hidden na load-bearing kontenerze gdzie indziej w drzewie, potrzebny do zupełnie innej animacji. Rozwiązanie: własny hook na scroll + requestAnimationFrame, licząc trzy stany ręcznie.',
  },
  {
    id: 'portrait-photo-row',
    title: 'Portretowe zdjęcie rozciągnęło cały wiersz',
    body: 'Indeks projektów wyżej na tej stronie miał wiersze różnej wysokości mimo identycznego layoutu. height:100% na zdjęciu wewnątrz grid itema, którego wysokość dopiero się liczy, rozwiązuje się jako auto — pionowy zrzut ekranu Insidera ciągnął swój wiersz do 294px. Naprawa: position:absolute zamiast height:100%.',
  },
  {
    id: 'ai-never-fakes-fact',
    title: 'AI nigdy nie udaje faktu',
    body: 'Insider i Serwisant obie generują tekst z AI — obie mają twardą zasadę: sugestia zawsze osobno od faktu, nigdy zmieszane w jednym zdaniu. Plakietka "sugestia AI · nie porada" nie jest kosmetyką, tylko strukturalnym rozdzieleniem w samej odpowiedzi modelu, nie tylko wizualnym.',
  },
  {
    id: 'shadow-dom-css',
    title: 'Web Component, który nie widział własnego CSS',
    body: 'Mapa Tour Guide osadzona jako <tour-guide-mini-map> renderowała się pusta mimo poprawnych danych. Shadow DOM izoluje style — globalny CSS Leafleta z reszty aplikacji po prostu nie wchodzi do środka. Naprawa: style Leafleta dołączone wprost do komponentu, wstrzykiwane do shadow roota razem z nim.',
  },
  {
    id: 'one-vps-four-apps',
    title: 'Jeden VPS, cztery aplikacje',
    body: 'Żadnego Kubernetesa, żadnej platformy chmurowej — Traefik jako reverse proxy + Docker Compose na jednym VPS, każda apka jako osobny kontener pod własną subdomeną. Deploy z pusha, nie z klikania w panelu. Tańsze i prostsze niż orkiestracja, wystarczające dla ruchu, jaki realnie tu jest.',
  },
];
