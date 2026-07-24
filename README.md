# portfolio-shell

Portfolio jako appka — shell w React + Vite, design system "Editorial Garage". Kontekst pełnego
projektu (pozostałe apki, decyzje, roadmap) żyje w `PORTFOLIO_PLAN.md` obok tour-guide, nie w tym
repo — to tutaj jest tylko kod.

To jest **Faza 1** z roadmapy: dowód, że cały łańcuch build → deploy → TLS → DNS faktycznie
działa, na najmniejszym możliwym projekcie (masthead + hero, jeszcze bez gry w statki).

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Uwaga (Windows PowerShell): uruchamiaj komendy osobno jak wyżej, nie łącz ich przez `&&` —
starsze wersje Windows PowerShell (5.1, domyślna w Windows) nie obsługują `&&` jako separatora
poleceń. Działa to w PowerShell 7+ albo w cmd.exe, ale najbezpieczniej po prostu jedna komenda na
linię, albo `;` zamiast `&&` (`npm install; npm run dev`).

## Build produkcyjny

```bash
npm run build
npm run preview   # podgląd builda lokalnie
```

**Ważne:** ten szkielet został napisany ręcznie (nie przez `npm create vite`) — środowisko, w
którym go tworzyłem, miało zablokowany dostęp do rejestru npm, więc `npm install`/`npm run build`
nie zostały uruchomione ani zweryfikowane automatycznie. To musi być pierwszy krok weryfikacji po
Twojej stronie, zanim pójdziesz dalej. Pliki JSON (`package.json`, `tsconfig*.json`) są
zwalidowane składniowo, reszta — do potwierdzenia realnym buildem.

## Docker

```bash
docker build -t portfolio-shell .
docker run -p 8080:80 portfolio-shell
```

## Co musisz zrobić sam (poza tym repo)

To są rzeczy, których nie da się zrobić za Ciebie z tego środowiska — wymagają Twoich kont/
uprawnień:

1. **Domena** — zarejestrować, jeśli jeszcze nie masz.
2. **Cloudflare** — dodać domenę, ustawić rekord DNS (A) na IP przyszłego VPS. Zdecydować
   proxy (pomarańczowa chmurka) vs. DNS-only (szara) — patrz `PORTFOLIO_PLAN.md`.
3. **Hetzner Cloud** — założyć konto, postawić VPS (rekomendacja: CX33, Norymberga/Falkenstein —
   dokładne parametry i uzasadnienie w `PORTFOLIO_PLAN.md`).
4. **Traefik na VPS** — osobny stos docker-compose (nie w tym repo) tworzący sieć zewnętrzną
   `web`, do której podłącza się `docker-compose.yml` z tego repo.
5. **GitHub repo** — utworzyć, wypchnąć ten kod, dodać sekrety repo używane przez
   `.github/workflows/deploy.yml`:
   - `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY` (klucz prywatny do SSH na VPS)
   - `GITHUB_TOKEN` jest dostarczany automatycznie przez GitHub Actions, nic nie trzeba dodawać
6. Podmienić placeholdery w `docker-compose.yml` (`TWOJ-USERNAME`, `TWOJA-DOMENA.pl`).
7. Na VPS: `mkdir ~/portfolio-shell`, wgrać tam `docker-compose.yml` (sam plik wystarczy — obraz
   przychodzi z ghcr.io przez pipeline).

Po tych krokach push do `main` powinien: zbudować, zlintować, otestować, zbudować obraz, wypchnąć
do `ghcr.io`, wejść po SSH na VPS i podnieść nowy kontener — pełna Faza 1 z roadmapy.
