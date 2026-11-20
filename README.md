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

## Hosting: Cloudflare Workers (static assets), od 2026-11-20

Statyczny build `dist/`, bez serwera i bez Dockera, koszt €0 (poza domeną). Wcześniejszy VPS
(Hetzner + Traefik + Docker Compose) został wyłączony — historia i powody w `PORTFOLIO_PLAN.md`
(sekcja "Hosting / infrastruktura") i `INFRA_SETUP.md` (oznaczony jako historyczny).

Strona to Worker bez kodu, który tylko serwuje pliki z `dist/` (konfiguracja w `wrangler.jsonc`:
nazwa `portfolio-shell`, katalog `dist`, SPA fallback, custom domain `kubsiw.com`). Nowy dashboard
Cloudflare tworzy takie projekty jako Workers, nie klasyczne Pages.

Ustawienia w dashboardzie (Compute → Workers & Pages → `portfolio-shell` → Settings → Build):

| Pole | Wartość |
|---|---|
| Repozytorium / branch produkcyjny | `kubasiw/portfolio-shell` / `main` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Zmienna buildu | `NODE_VERSION` = `22` |

Każdy push do `main` buduje i wdraża stronę automatycznie. Domena `kubsiw.com` jest podpięta przez
`routes` w `wrangler.jsonc` (Cloudflare sam tworzy rekord DNS i certyfikat; adres `workers.dev` jest
przez to wyłączony). Nagłówki bezpieczeństwa i CSP siedzą w `public/_headers`.
`.github/workflows/ci.yml` tylko pilnuje jakości (lint + build). Ręczny deploy awaryjny:
`npm run build` i `npx wrangler deploy`.

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
