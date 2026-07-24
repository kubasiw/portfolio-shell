# Stawianie infrastruktury — VPS + domena + Cloudflare, krok po kroku

Ten plik jest tymczasowo w `portfolio-shell` (dopóki nie założymy osobnego `portfolio-meta`) —
merytorycznie dotyczy całej infrastruktury (hostuje docelowo wszystkie 4 apki), nie tylko tego
repo. Kolejność poniżej ma znaczenie — każdy krok zakłada, że poprzedni jest zrobiony.

Cel końcowy: `https://kubsiw.com` (portfolio shell) faktycznie odpowiada, z prawdziwym
certyfikatem HTTPS, serwowane z Twojego własnego VPS.

## 0. Kolejność (dlaczego tak)

Domena i Cloudflare → VPS → Docker na VPS → Traefik → dopiero wtedy pierwsza apka. Nie da się
sensownie przetestować Traefika/TLS bez działającej domeny wskazującej na serwer — stąd domena
najpierw, mimo że rejestracja/propagacja DNS to jedyny krok, na który trzeba realnie poczekać (od
minut do kilku godzin).

## 1–2. Domena + Cloudflare — razem, jedną ścieżką (nie masz jeszcze domeny)

Skoro nie masz jeszcze żadnej domeny, najprostsza ścieżka to kupić ją bezpośrednio przez
Cloudflare Registrar — od razu jest podłączona do Cloudflare DNS, bez osobnego kroku
przełączania nameserverów.

1. Załóż darmowe konto na [cloudflare.com](https://cloudflare.com), zaloguj się.
2. W panelu: **Domains → Registrations** (jesteś tu) → w polu wyszukiwania wpisz nazwę, której
   chcesz — sprawdza dostępność i cenę na żywo.
3. Kilka wskazówek przy wyborze: `.dev` wymusza HTTPS na poziomie przeglądarki (i tak już to
   budujemy przez Traefik/Let's Encrypt, więc żadna dodatkowa komplikacja), dobrze kojarzy się
   technicznie; `.com` jest najbardziej uniwersalny/rozpoznawalny; `.pl` sygnalizuje polską
   obecność, jeśli to dla Ciebie istotne. Krótka nazwa > długa.
4. Kup wybraną domenę (dane do faktury/płatność).
5. Gotowe — bez dalszych kroków z nameserverami. Domena jest od razu aktywna w Cloudflare DNS,
   możesz przejść od razu do kroku 7 (rekordy A) niżej, jak tylko będziesz mieć IP z Hetznera
   (krok 3).

*(Alternatywna ścieżka, dla kogoś kto ma już domenę kupioną gdzie indziej: zakładka
**Domains → Overview** → **Onboard a domain**, potem ręczne przełączenie nameserverów u
poprzedniego rejestratora — opisane w oficjalnej dokumentacji
[tutaj](https://developers.cloudflare.com/fundamentals/manage-domains/add-site/), gdybyś kiedyś
tego potrzebował dla innej domeny.)*

Nie idź dalej do kroku 8 (rekordy DNS), dopóki status nie jest "Active" — ale kroki 3–7
(Hetzner, SSH, Docker, Traefik) możesz robić równolegle, czekając na propagację.

## 3. Hetzner Cloud — konto + serwer

1. Załóż konto na [hetzner.com/cloud](https://www.hetzner.com/cloud), podaj dane i metodę
   płatności.
2. **New Project** (np. nazwij "portfolio").
3. W projekcie: **Add Server**:
   - **Location:** Nuremberg albo Falkenstein (Niemcy — najbliżej Polski, najniższe opóźnienie).
   - **Image:** jeśli widzisz zakładkę **Apps/Marketplace**, wybierz gotowy obraz **Docker CE**
     (oszczędza krok 5 — Docker jest już zainstalowany). Jeśli nie widzisz takiej opcji, wybierz
     zwykły **Ubuntu 24.04 LTS** i zainstaluj Dockera ręcznie w kroku 5.
   - **Type:** jeśli widzisz **Cost-optimized (CX)** w wyborze — bierz najmniejszy sensowny CX,
     powinien być wyraźnie tańszy niż CPX poniżej (podwyżka Hetznera z czerwca 2026 uderzyła w CPX
     dużo mocniej). **Jeśli CX nie jest dostępny** (stan na 2026-07-24 — tylko Regular Performance/
     CPX do wyboru): weź **CPX22** (2 vCPU, 4GB RAM, 80GB SSD) — €23,97/mies. — nie najmniejszy
     CPX12 (2GB), bo w ciągu tygodnia dochodzi kolejna apka z własnym backendem+bazą, a 2GB byłoby
     zbyt ciasne. Nadal świadomie tymczasowy wybór; **plan: migracja za ok. miesiąc (2026-08-24) na
     coś tańszego**, patrz `PORTFOLIO_PLAN.md` sekcja "Hosting / infrastruktura" i wpis w "Historia
     decyzji" pod tą samą datą. Zawsze zweryfikuj aktualną cenę bezpośrednio w formularzu Hetznera —
     ceny z tego pliku/artykułów mogą już być nieaktualne.
   - **SSH key:** patrz krok 4 — jeśli jeszcze nie masz klucza, zrób go najpierw, potem wróć tutaj.
   - **Name:** np. `portfolio-vps`.
4. **Create & Buy now**. Po chwili dostajesz publiczne IP serwera (np. `91.99.123.45`) —
   zanotuj je, będzie potrzebne wielokrotnie.

## 4. Klucz SSH (jeśli jeszcze nie masz)

SSH-key to bezpieczniejszy odpowiednik hasła — para plików: prywatny (zostaje u Ciebie, nigdy
nikomu nie wysyłasz) i publiczny (wklejasz tam, gdzie chcesz się móc zalogować).

W PowerShellu:
```
ssh-keygen -t ed25519 -C "kubsiw@gmail.com"
```
Naciśnij Enter na wszystkich pytaniach (domyślna lokalizacja, opcjonalnie hasło do klucza).
Plik publiczny wyląduje w `C:\Users\kubsi\.ssh\id_ed25519.pub` — otwórz go (np.
`notepad C:\Users\kubsi\.ssh\id_ed25519.pub`), skopiuj całą zawartość, wklej w Hetznerze przy
tworzeniu serwera (krok 3) w polu **SSH key**.

## 5. Połączenie z serwerem + Docker

```
ssh root@TWOJE_IP
```

Jeśli wybrałeś obraz **Docker CE** w kroku 3 — Docker już jest, sprawdź: `docker --version`.

Jeśli wybrałeś zwykłe Ubuntu, zainstaluj Dockera ręcznie:
```
curl -fsSL https://get.docker.com | sh
```

## 6. Traefik — reverse proxy + automatyczny HTTPS

Na serwerze (dalej połączony przez SSH):
```
mkdir -p ~/traefik && cd ~/traefik
```

Stwórz `docker-compose.yml` (np. `nano docker-compose.yml`, wklej, zapisz `Ctrl+O`, `Enter`,
`Ctrl+X`):

```yaml
services:
  traefik:
    # Nie v3.1 — Docker 29+ podniósł minimalną wersję API do 1.44, a Traefik < v3.6.1 ma na
    # sztywno wersję 1.24 (błąd "client version 1.24 is too old" w logach, Traefik nie widzi
    # żadnych kontenerów). Zweryfikowane na żywo 2026-07-24. Użyj v3.6.1+ (auto-negocjacja wersji).
    image: traefik:v3.7
    container_name: traefik
    restart: unless-stopped
    command:
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.letsencrypt.acme.httpchallenge=true"
      - "--certificatesresolvers.letsencrypt.acme.httpchallenge.entrypoint=web"
      - "--certificatesresolvers.letsencrypt.acme.email=TWOJ-EMAIL@example.com"
      - "--certificatesresolvers.letsencrypt.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
      - "letsencrypt:/letsencrypt"
    networks:
      - web

networks:
  web:
    name: web

volumes:
  letsencrypt:
```

Podmień `TWOJ-EMAIL@example.com` na realny e-mail (Let's Encrypt wysyła tam powiadomienia o
wygasających certyfikatach — z automatycznym odnawianiem to formalność, ale musi być prawdziwy).

Odpal:
```
docker compose up -d
```

To tworzy sieć Dockera o nazwie `web` — dokładnie tę, do której `docker-compose.yml` w
`portfolio-shell` (i docelowo każdej kolejnej apce) już się podłącza jako `external: true`.

## 7. Cloudflare — rekordy DNS

Wróć do panelu Cloudflare (upewnij się, że domena ma status "Active" — patrz koniec kroku 2).
**DNS** → **Add record**, dla każdej subdomeny osobno:

| Type | Name | Content | Proxy status |
|---|---|---|---|
| A | `@` (root, czyli `kubsiw.com`) | TWOJE_IP z Hetznera | DNS only (szara chmurka) |
| A | `tourguide` | TWOJE_IP | DNS only |
| A | `insider` | TWOJE_IP | DNS only |
| A | `serwisant` | TWOJE_IP | DNS only |

**DNS only, nie proxy (pomarańczowa chmurka), na start** — prościej, bo TLS w całości ogarnia
Traefik przez Let's Encrypt; proxy Cloudflare wymaga dodatkowej zmiany trybu SSL na "Full
(strict)" plus certyfikatu origin, można to dołożyć później, nie teraz.

## 8. Pierwszy realny deploy

Gdy: (a) DNS wskazuje na VPS, (b) Traefik działa (krok 6), (c) masz gotowe repo na GitHubie
(patrz nasza wcześniejsza rozmowa — Opcja A, Ty pushujesz) — na serwerze:

```
mkdir -p ~/portfolio-shell && cd ~/portfolio-shell
```

Wgraj tam `docker-compose.yml` z repo (np. `scp docker-compose.yml root@TWOJE_IP:~/portfolio-shell/`
z Twojego komputera, albo przez `nano` i wklejenie) — domena (`kubsiw.com`) jest już w pliku,
zostaje tylko podmienić `TWOJ-USERNAME` na Twój login GitHub.

Pierwsze uruchomienie ręczne (zanim GitHub Actions zacznie robić to automatycznie):
```
docker compose pull
docker compose up -d
```

Jeśli obrazu jeszcze nie ma w `ghcr.io` (bo GitHub Actions jeszcze nie pushował) — najpierw musi
przejść pipeline (`git push` do `main` w repo, patrz sekrety `VPS_HOST`/`VPS_USER`/`VPS_SSH_KEY`
opisane w README).

## 9. Weryfikacja

Otwórz `https://kubsiw.com` w przeglądarce — powinieneś zobaczyć landing portfolio-shellu,
z prawdziwą kłódką HTTPS (certyfikat od Let's Encrypt, wystawiony automatycznie przez Traefik).

## 10. Podstawowe bezpieczeństwo (warto, ale nie blokuje niczego powyżej)

Nie krytyczne na start, ale warto zrobić w ciągu pierwszych dni:
- Firewall na Hetznerze (zakładka **Firewalls** w panelu) — otwórz tylko porty 22 (SSH), 80, 443.
- Wyłączenie logowania hasłem po SSH (tylko klucz) — w `/etc/ssh/sshd_config` ustaw
  `PasswordAuthentication no`, potem `systemctl restart sshd`.
- Zwykły użytkownik zamiast pracy na `root` na co dzień — możemy to rozpisać osobno, jeśli
  dojdziemy do tego etapu.
