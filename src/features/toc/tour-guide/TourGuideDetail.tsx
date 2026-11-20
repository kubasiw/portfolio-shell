import { Stamp } from '../../../components/Stamp';
import { useLanguage, useTranslate } from '../../../i18n/LanguageContext';
import { TourGuideWidget } from '../TourGuideWidget';
import './TourGuideDetail.css';

const TOUR_GUIDE_REPO_URL = 'https://github.com/kubasiw/tour-guide';

const TECH_TAGS = [
  'Angular 22 + signals',
  'NestJS 11',
  'PostgreSQL + Prisma',
  'Leaflet',
  'Claude AI',
  'Web Components',
];

// Sits right under the widget, not in the "Pod maską" text — the point is a claim you can verify
// on the spot against the live thing sitting right above it, not another generic stack fact.
// Each one maps to something actually true of *this exact* embed (see CLAUDE.md's tour-guide
// step 15): a snapshot of real Overpass/OSM data for the demo area (static JSON next to the
// script — the backend is no longer deployed, so "live" would be a lie), ViewEncapsulation.ShadowDom
// with Leaflet CSS injected into the shadow root, and an Angular Elements custom element (not an
// iframe).
const WIDGET_CALLOUTS_PL = ['PRAWDZIWE DANE OSM · SNAPSHOT', 'SHADOW DOM · IZOLACJA STYLÓW', 'WEB COMPONENT · NIE IFRAME'];
const WIDGET_CALLOUTS_EN = ['REAL OSM DATA · SNAPSHOT', 'SHADOW DOM · STYLE ISOLATION', 'WEB COMPONENT · NOT AN IFRAME'];

// Split view, same shape as InsiderDetail: write-up on one side, the real embedded app on the
// other. The "app" here is the same <tour-guide-mini-map> fragment already used on the tile
// before this view existed — tour-guide has its own router/auth/many screens, so exporting the
// *whole* app as a Web Component the way Insider's App.vue was isn't a small step here (see
// PORTFOLIO_PLAN.md's open question on this) — the map fragment is what's reused for now.
export function TourGuideDetail() {
  const t = useTranslate();
  const { language } = useLanguage();
  const widgetCallouts = language === 'pl' ? WIDGET_CALLOUTS_PL : WIDGET_CALLOUTS_EN;
  return (
    <div className="tour-guide-detail">
      <Stamp main={t('W budowie', 'In progress')} sub={t('ten widok', 'this view')} className="tour-guide-detail__stamp" />
      <div className="tour-guide-detail__columns">
        <div className="tour-guide-detail__story">
          <section className="tour-guide-detail__block">
            <h3 className="tour-guide-detail__heading">{t('Problem', 'The problem')}</h3>
            <p>
              {t(
                'Docierasz w nieznaną okolicę i musisz sam poskładać plan: gdzie nocować, co zwiedzić, gdzie zjeść, jak pogoda wpłynie na te wybory — zwykle z dziesiątek kart w przeglądarce. Tour-guide zamienia to w jeden, edytowalny plan: zaznaczasz obszar na mapie, wybierasz zainteresowania i termin, a aplikacja łączy realne dane o miejscach i pogodzie w gotową, wciąż w pełni edytowalną propozycję.',
                "You arrive somewhere unfamiliar and have to piece together a plan yourself: where to stay, what to see, where to eat, how the weather affects those choices — usually from dozens of browser tabs. Tour-guide turns that into one editable plan: mark an area on the map, pick your interests and dates, and the app combines real place and weather data into a ready, still fully editable proposal.",
              )}
            </p>
          </section>
          <section className="tour-guide-detail__block">
            <h3 className="tour-guide-detail__heading">{t('Pod maską', 'Under the hood')}</h3>
            <p>
              {t(
                'Pierwszy projekt tego portfolio — Angular 22, ze stanem opartym o sygnały (signals/resource()), i NestJS 11 po stronie backendu. Dane miejsc z Overpass/OpenStreetMap, pogoda z Open-Meteo, geokodowanie z Nominatim, realna geometria szlaków turystycznych z Waymarked Trails — wszystkie darmowe, bez klucza. AI (Claude) pisze krótkie opisy obszaru i miejsc oraz narrację planu, opierając się wyłącznie na realnie pobranych danych, nigdy niczego nie zmyślając, a osobny asystent czatu potrafi samodzielnie dodawać, usuwać i przestawiać punkty w planie.',
                "This portfolio's first project — Angular 22, with state built on signals (signals/resource()), and NestJS 11 on the backend. Place data from Overpass/OpenStreetMap, weather from Open-Meteo, geocoding from Nominatim, real hiking-trail geometry from Waymarked Trails — all free, no API key. AI (Claude) writes short descriptions of the area and its places plus a narration of the plan, relying only on data it actually fetched, never inventing anything, and a separate chat assistant can add, remove, and reorder plan items on its own.",
              )}
            </p>
            <div className="tour-guide-detail__tags">
              {TECH_TAGS.map((tag) => (
                <span key={tag} className="tour-guide-detail__tag">
                  {tag}
                </span>
              ))}
            </div>
          </section>
          <section className="tour-guide-detail__block">
            <h3 className="tour-guide-detail__heading">{t('Odpowiedzialny produkt', 'A responsible product')}</h3>
            <p>
              {t(
                'Z aplikacji da się korzystać bez zakładania konta — trasę zaplanujesz i zapiszesz jako gość. Logowanie nic więc nie blokuje, tylko dokłada bogatsze, kosztowniejsze możliwości (AI-owe opisy, narrację, czat) — ten sam wzorzec co w Figmie czy Notion. Te droższe funkcje mają też swoje zabezpieczenie: limit żądań i dzienny budżet na wywołania AI, ten sam mechanizm, który później powtórzono w Insiderze.',
                "The app works without creating an account — you can plan and save a route as a guest. Logging in doesn't gate anything, it just unlocks richer, costlier features (AI descriptions, narration, chat) — the same pattern as Figma or Notion. Those pricier features have their own safeguard too: a request limit and a daily AI-call budget, the same mechanism later reused in Insider.",
              )}
            </p>
          </section>
          <section className="tour-guide-detail__block">
            <h3 className="tour-guide-detail__heading">
              {t('Pierwszy mikrofrontend w tym portfolio', "This portfolio's first microfrontend")}
            </h3>
            <p>
              {t(
                'Fragment mapy obok — <tour-guide-mini-map> — był pierwszym testem podejścia Web Components w tym zestawie projektów, zanim ten sam mechanizm powtórzono w Insiderze dla całej apki (Insider nie ma routera/auth do orkiestrowania, więc mógł pójść dalej i wyeksportować się w całości).',
                'The map fragment next to this — <tour-guide-mini-map> — was the first test of the Web Components approach across this set of projects, before the same mechanism was reused in Insider for a whole app (Insider has no router/auth to orchestrate around, so it could go further and export itself entirely).',
              )}
            </p>
          </section>
          <section className="tour-guide-detail__block">
            <h3 className="tour-guide-detail__heading">
              {t('Gdzie jest reszta aplikacji', 'Where the rest of the app lives')}
            </h3>
            <p>
              {t(
                'Pełna aplikacja (backend, baza, logowanie, AI) nie jest już nigdzie wdrożona — świadoma decyzja: serwer pod portfolio kosztował więcej, niż było to warte, więc wróciłem do hostingu za zero złotych. Mapa obok to statyczny snapshot 40 prawdziwych miejsc z OpenStreetMap, dołączony do samego widgetu, bez żadnego backendu. Cała aplikacja uruchamia się lokalnie z repozytorium w kilka minut.',
                "The full app (backend, database, login, AI) is no longer deployed anywhere — a deliberate call: a server for a portfolio cost more than it was worth, so I went back to zero-cost hosting. The map next to this is a static snapshot of 40 real places from OpenStreetMap, bundled with the widget itself, no backend at all. The whole app runs locally from the repository in a few minutes.",
              )}
            </p>
          </section>
          <a
            className="tour-guide-detail__external-link"
            href={TOUR_GUIDE_REPO_URL}
            target="_blank"
            rel="noreferrer"
          >
            {t('Zobacz kod na GitHubie →', 'See the code on GitHub →')}
          </a>
        </div>

        <div className="tour-guide-detail__app">
          <TourGuideWidget />
          <div className="tour-guide-detail__callouts">
            {widgetCallouts.map((callout) => (
              <span key={callout} className="tour-guide-detail__callout">
                {callout}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
