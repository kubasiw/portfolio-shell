# portfolio-shell

Portfolio jako appka — React 19 + Vite, design system "Atrament". Kontekst pełnego projektu
(pozostałe apki, decyzje, roadmap) żyje w `PORTFOLIO_PLAN.md`.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Uwaga (Windows PowerShell 5.1): uruchamiaj komendy osobno, nie łącz ich przez `&&` (ta wersja go
nie obsługuje) — jedna komenda na linię albo `;`.

## Build

```bash
npm run build
npm run preview   # podgląd builda lokalnie (UWAGA: nie stosuje public/_headers, więc bez CSP)
```

## Hosting: Cloudflare Pages (od 2026-11-20)

Statyczny build `dist/`, bez serwera, bez Dockera, koszt €0 (poza domeną). Wcześniejszy VPS
(Hetzner + Traefik + Docker Compose) został wyłączony — historia i powody w `PORTFOLIO_PLAN.md`
(sekcja "Hosting / infrastruktura") i `INFRA_SETUP.md` (oznaczony jako historyczny).

Ustawienia projektu w Cloudflare Pages (Workers & Pages → Create → Pages → Connect to Git):

| Pole | Wartość |
|---|---|
| Repozytorium / branch produkcyjny | `kubasiw/portfolio-shell` / `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Zmienna środowiskowa | `NODE_VERSION` = `22` |
| Custom domain | `kubsiw.com` (Cloudflare sam dopisze rekord DNS) |

Każdy push do `main` buduje i publikuje stronę automatycznie. Nagłówki bezpieczeństwa i CSP
siedzą w `public/_headers`. `.github/workflows/ci.yml` tylko pilnuje jakości (lint + build).

## Widgety osadzone na stronie (`public/elements/`)

Oba widgety to skompilowane Web Components, serwowane z tego samego hostingu co strona (ten sam
origin — bez CORS i bez wyjątków w CSP). To **ręcznie kopiowane artefakty** z repozytoriów
źródłowych — po zmianie widgetu trzeba go przebudować, podmienić plik tutaj i wypchnąć:

| Widget | Zbuduj w repo źródłowym | Skopiuj do |
|---|---|---|
| `<tour-guide-mini-map>` (Angular) | `cd frontend && npx ng run frontend:build-element:production` | `dist/frontend-element/browser/main.js` → `public/elements/tour-guide/main.js` |
| dane mapy (statyczny snapshot 40 POI) | patrz `tour-guide/CLAUDE.md`, "Hosting status" | `public/elements/tour-guide/krakow-demo-pois.json` |
| `<insider-app>` (Vue) | `npm run build:element` | `dist-element/main.js` → `public/elements/insider/main.js` |

Backendy tour-guide i insidera nie są nigdzie wdrożone: mapa czyta statyczny JSON leżący obok
skryptu, a sugestie AI w Insiderze są wyłączone (widget pokazuje to wprost).
