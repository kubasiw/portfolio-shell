import { useTranslate } from '../../../i18n/LanguageContext';
import './ShellDetail.css';

const REPO_URL = 'https://github.com/kubasiw/portfolio-shell';

const TECH_TAGS = [
  'React 19 + Vite',
  'TypeScript',
  'Web Components',
  'Docker + Traefik',
  'GHCR',
  'GitHub Actions',
];

// Jedyny z 3 widoków szczegółowych bez drugiej kolumny z żywym widgetem (InsiderDetail/
// TourGuideDetail obie mają — patrz oba pliki) — bo ten projekt to strona, na której ten sam
// widok już się renderuje: osadzanie samego siebie w sobie nie miałoby sensu. Jedna, pełnej
// szerokości kolumna "story" zamiast tego, ten sam shape bloków/nagłówków/tagów co pozostałe dwa
// widoki, dla spójności.
export function ShellDetail() {
  const t = useTranslate();

  return (
    <div className="shell-detail">
      <section className="shell-detail__block">
        <h3 className="shell-detail__heading">{t('Problem', 'The problem')}</h3>
        <p>
          {t(
            'Portfolio zwykle jest statyczną wizytówką — kilka zrzutów ekranu i linki. Tutaj postawiłem inne pytanie: czy portfolio może samo być czwartym, realnym projektem — z własną infrastrukturą, własnym pipeline\'em wdrożeniowym i żywymi fragmentami pozostałych trzech aplikacji osadzonymi bezpośrednio na stronie, nie jako zrzuty ekranu.',
            "A portfolio is usually a static showcase — a few screenshots and some links. Here I asked a different question: can the portfolio itself be a fourth, real project — with its own infrastructure, its own deploy pipeline, and live fragments of the other three apps embedded directly on the page instead of screenshots.",
          )}
        </p>
      </section>

      <section className="shell-detail__block">
        <h3 className="shell-detail__heading">{t('Architektura', 'Architecture')}</h3>
        <p>
          {t(
            'React 19 + Vite dla tej strony, ale każdy z pozostałych trzech projektów zostaje w swoim własnym frameworku (Angular w tour-guide, Vue w Insiderze) — most między nimi to Web Components, nie wspólny framework ani iframe. Fragment mapy tour-guide i cała apka Insider renderują się tutaj jako realne, natywne custom elementy w Shadow DOM, z żywymi danymi z ich własnych domen.',
            "React 19 + Vite for this site, but each of the other three projects stays in its own framework (Angular in tour-guide, Vue in Insider) — the bridge between them is Web Components, not a shared framework or an iframe. The tour-guide map fragment and the whole Insider app render here as real, native custom elements in Shadow DOM, with live data from their own domains.",
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
            'Żadnego Kubernetesa, żadnej platformy chmurowej — Traefik jako reverse proxy i Docker Compose na jednym VPS, każda z czterech aplikacji jako osobny kontener pod własną subdomeną, obrazy budowane i publikowane do GHCR przez GitHub Actions. Deploy z pusha do gałęzi głównej, nie z ręcznego klikania w panelu — tańsze i prostsze niż orkiestracja, w sam raz na ruch, jaki realnie tu jest.',
            "No Kubernetes, no cloud platform — Traefik as a reverse proxy and Docker Compose on one VPS, each of the four apps as its own container under its own subdomain, images built and pushed to GHCR by GitHub Actions. Deploy on push to the main branch, not by clicking around a dashboard — cheaper and simpler than orchestration, plenty for the traffic this actually gets.",
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
  );
}
