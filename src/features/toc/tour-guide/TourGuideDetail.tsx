import { Stamp } from '../../../components/Stamp';
import { TourGuideWidget } from '../TourGuideWidget';
import './TourGuideDetail.css';

const TOUR_GUIDE_URL = 'https://tourguide.kubsiw.com';

const TECH_TAGS = [
  'Angular 22 + signals',
  'NestJS 11',
  'PostgreSQL + Prisma',
  'Leaflet',
  'Claude AI',
  'Web Components',
];

// Split view, same shape as InsiderDetail: write-up on one side, the real embedded app on the
// other. The "app" here is the same <tour-guide-mini-map> fragment already used on the tile
// before this view existed — tour-guide has its own router/auth/many screens, so exporting the
// *whole* app as a Web Component the way Insider's App.vue was isn't a small step here (see
// PORTFOLIO_PLAN.md's open question on this) — the map fragment is what's reused for now.
export function TourGuideDetail() {
  return (
    <div className="tour-guide-detail">
      <Stamp
        main="W budowie"
        sub="ten widok"
        className="tour-guide-detail__stamp"
      />
      <div className="tour-guide-detail__columns">
        <div className="tour-guide-detail__story">
          <section className="tour-guide-detail__block">
            <h3 className="tour-guide-detail__heading">Problem</h3>
            <p>
              Docierasz w nieznaną okolicę i musisz sam poskładać plan: gdzie
              nocować, co zwiedzić, gdzie zjeść, jak pogoda wpłynie na te wybory
              — zwykle z dziesiątek kart w przeglądarce. Tour-guide zamienia to
              w jeden, edytowalny plan: zaznaczasz obszar na mapie, wybierasz
              zainteresowania i termin, a aplikacja łączy realne dane o
              miejscach i pogodzie w gotową, wciąż w pełni edytowalną
              propozycję.
            </p>
          </section>
          <section className="tour-guide-detail__block">
            <h3 className="tour-guide-detail__heading">Pod maską</h3>
            <p>
              Pierwszy projekt tego portfolio — Angular 22 (signals/
              <code>resource()</code> jako podstawowy prymityw stanu) + NestJS
              11. Dane miejsc z Overpass/OpenStreetMap, pogoda z Open-Meteo,
              geokodowanie z Nominatim, realna geometria szlaków turystycznych z
              Waymarked Trails — wszystkie darmowe, bez klucza. AI (Claude)
              pisze krótkie opisy obszaru i miejsc oraz narrację planu na bazie
              wyłącznie realnie pobranych danych (nigdy nie zmyśla faktów), a
              osobny asystent czatu edytuje plan przez wywołania narzędzi
              (dodaj/usuń/przestaw punkt).
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
            <h3 className="tour-guide-detail__heading">
              Odpowiedzialny produkt
            </h3>
            <p>
              Logowanie nie jest twardą bramką — niezalogowani mogą zaplanować i
              zapisać trasę, logowanie odblokowuje droższe funkcje
              (opisy/narrację/czat AI), ten sam wzorzec co Figma czy Notion.
              Kosztowne wywołania AI są bramkowane logowaniem, limitem żądań i
              dziennym budżetem — ten sam mechanizm, który później powtórzono w
              Insiderze.
            </p>
          </section>
          <section className="tour-guide-detail__block">
            <h3 className="tour-guide-detail__heading">
              Pierwszy mikrofrontend w tym portfolio
            </h3>
            <p>
              Fragment mapy obok — <code>&lt;tour-guide-mini-map&gt;</code> —
              był pierwszym testem podejścia Web Components w tym zestawie
              projektów, zanim ten sam mechanizm powtórzono w Insiderze dla
              całej apki (Insider nie ma routera/auth do orkiestrowania, więc
              mógł pójść dalej i wyeksportować się w całości).
            </p>
          </section>
          <a
            className="tour-guide-detail__external-link"
            href={TOUR_GUIDE_URL}
            target="_blank"
            rel="noreferrer"
          >
            Otwórz tourguide.kubsiw.com w nowej karcie →
          </a>
        </div>

        <div className="tour-guide-detail__app">
          <TourGuideWidget />
        </div>
      </div>
    </div>
  );
}
