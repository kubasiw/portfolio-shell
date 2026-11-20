import deskPhoto from '../../../assets/about/coffee_desk.webp';
import { useTranslate } from '../../../i18n/LanguageContext';
import './ShellDetail.css';

const REPO_URL = 'https://github.com/kubasiw/portfolio-shell';

const TECH_TAGS = [
  'React 19 + Vite',
  'TypeScript',
  'Web Components',
  'Cloudflare Pages',
  'GitHub Actions',
];

// Druga kolumna (zdjęcie) dodana po realnym feedbacku właściciela — pierwsza wersja była jedną
// pełnoszerokościową kolumną "story" (InsiderDetail/TourGuideDetail obie mają swoją drugą
// kolumnę zajętą przez żywy widget, a "Ten shell" nie ma czego tam osadzić, bo strona, na której
// się to renderuje, TO właśnie ten projekt — stąd puste miejsce). Zdjęcie wybrane wprost z galerii
// "O mnie" (dział Jedzonko, `coffee_desk.webp`, nieużywane nigdzie indziej poza samą galerią) —
// realne biurko z wieloma monitorami/edytorem kodu w tle, jedyne zdjęcie w całej galerii, które
// faktycznie pokazuje pracę programistyczną, więc trafia w temat "Ten shell" (infrastruktura/kod)
// bezpośrednio, nie tylko luźno tematycznie jak przy "Serwisant" (silnik/olej).
export function ShellDetail() {
  const t = useTranslate();

  return (
    <div className="shell-detail">
      <div className="shell-detail__columns">
        <div className="shell-detail__story">
          <section className="shell-detail__block">
            <h3 className="shell-detail__heading">{t('Problem', 'The problem')}</h3>
            <p>
              {t(
                'Portfolio zwykle jest statyczną wizytówką — kilka zrzutów ekranu i linki. Tutaj postawiłem inne pytanie: czy portfolio może samo być czwartym, realnym projektem — z własnym pipeline\'em wdrożeniowym i żywymi fragmentami pozostałych aplikacji osadzonymi bezpośrednio na stronie, nie jako zrzuty ekranu.',
                "A portfolio is usually a static showcase — a few screenshots and some links. Here I asked a different question: can the portfolio itself be a fourth, real project — with its own deploy pipeline and live fragments of the other apps embedded directly on the page instead of screenshots.",
              )}
            </p>
          </section>

          <section className="shell-detail__block">
            <h3 className="shell-detail__heading">{t('Architektura', 'Architecture')}</h3>
            <p>
              {t(
                'React 19 + Vite dla tej strony, ale każdy z pozostałych trzech projektów zostaje w swoim własnym frameworku (Angular w tour-guide, Vue w Insiderze) — most między nimi to Web Components, nie wspólny framework ani iframe. Fragment mapy tour-guide i cała apka Insider renderują się tutaj jako realne, natywne custom elementy w Shadow DOM, serwowane razem z tą stroną — bez iframe i bez osobnych backendów.',
                "React 19 + Vite for this site, but each of the other three projects stays in its own framework (Angular in tour-guide, Vue in Insider) — the bridge between them is Web Components, not a shared framework or an iframe. The tour-guide map fragment and the whole Insider app render here as real, native custom elements in Shadow DOM, served together with this page — no iframe, no separate backends.",
              )}
            </p>
            <div className="shell-detail__tags">
              {TECH_TAGS.map((tag) => (
                <span key={tag} className="shell-detail__tag">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <section className="shell-detail__block">
            <h3 className="shell-detail__heading">{t('Infrastruktura', 'Infrastructure')}</h3>
            <p>
              {t(
                'Ta strona przeszła dwie wersje infrastruktury. Pierwsza: własny VPS, Traefik i Docker Compose, osobny kontener i subdomena na każdą aplikację, obrazy w GHCR, deploy z pusha — świetna nauka i dobry materiał do pokazania. Druga, obecna: statyczny hosting na Cloudflare Pages za zero złotych, a oba widgety to skompilowane Web Components leżące obok strony. Powód zmiany jest prozaiczny — po czerwcowej podwyżce cen Hetznera serwer kosztował ok. 24 € miesięcznie, a portfolio nie ma ruchu, który by to uzasadniał. Deploy z pusha został, serwera już nie ma.',
                "This site went through two versions of its infrastructure. The first: its own VPS, Traefik and Docker Compose, a container and a subdomain per app, images in GHCR, deploy on push — great for learning and good material to show off. The second, current one: static hosting on Cloudflare Pages for zero zloty, with both widgets compiled into Web Components that sit next to the page. The reason for the change is mundane — after Hetzner's June price hike the server cost about €24 a month, and a portfolio doesn't get the traffic to justify that. Deploy on push stayed, the server didn't.",
              )}
            </p>
          </section>

          <section className="shell-detail__block">
            <h3 className="shell-detail__heading">
              {t('Pod maską tej właśnie strony', 'Under the hood of this exact page')}
            </h3>
            <p>
              {t(
                'Design system "Atrament" (ciemny atrament, jedna czerwień, zero zaokrągleń) zaprojektowany dla tego redesignu i wdrożony sekcja po sekcji, nie za jednym razem. Po drodze kilka realnych, złapanych na żywo błędów: position:sticky, które nic nie robiło przez overflow:hidden gdzieś indziej w drzewie (naprawione własnym hookiem na scroll); portretowe zdjęcie w indeksie projektów rozciągające cały wiersz przez height:100% na jeszcze nieustalonej wysokości grida; mapa tour-guide renderująca się pusta, bo Shadow DOM izoluje style i globalny CSS Leafleta po prostu nie wchodził do środka. Kilka z tych historii można odkryć wprost na tej stronie, jako notki "za kulisami" w sekcji ze statkami.',
                'The "Atrament" design system (dark ink, one red, zero rounded corners) was designed for this redesign and rolled out section by section, not all at once. Along the way, a handful of real, live-caught bugs: a position:sticky that did nothing because of an overflow:hidden elsewhere in the tree (fixed with a custom scroll hook); a portrait photo in the project index stretching its whole row via height:100% on a still-unresolved grid height; the tour-guide map rendering blank because Shadow DOM isolates styles and the global Leaflet CSS simply never reached inside. A few of these stories can be found right on this page, as "behind the scenes" notes in the battleship section.',
              )}
            </p>
          </section>

          <a className="shell-detail__external-link" href={REPO_URL} target="_blank" rel="noreferrer">
            {t('Otwórz repozytorium na GitHubie →', 'Open the repository on GitHub →')}
          </a>
        </div>

        <div className="shell-detail__photo">
          <img
            src={deskPhoto}
            alt={t(
              'Wiele monitorów z edytorem kodu i pulpitem projektowym, laptop i kawa na biurku',
              'Multiple monitors with a code editor and a project dashboard, a laptop and coffee on the desk',
            )}
          />
          <span className="shell-detail__photo-caption">
            {t('Miejsce, gdzie ten shell faktycznie powstał', 'Where this shell was actually built')}
          </span>
        </div>
      </div>
    </div>
  );
}
