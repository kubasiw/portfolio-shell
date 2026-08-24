import { TourGuideWidget } from '../toc/TourGuideWidget';
import './MicrofrontendBand.css';

export function MicrofrontendBand() {
  return (
    <section className="microfrontend-band" aria-labelledby="microfrontend-band-heading">
      <div className="microfrontend-band__inner">
        <div className="microfrontend-band__text">
          <span className="microfrontend-band__kicker">Mikrofrontend na żywo</span>
          <h3 id="microfrontend-band-heading" className="microfrontend-band__heading">
            <span className="microfrontend-band__heading-line">Fragment Tour Guide</span>
            <span className="microfrontend-band__heading-line">działa w tej stronie</span>
          </h3>
          <p className="microfrontend-band__body">
            To nie zrzut ekranu — realny, osadzony Web Component z tour-guide.kubsiw.com, pobiera
            prawdziwe dane POI i renderuje żywą mapę Leaflet tuż tutaj, na tej stronie.
          </p>
          <a
            className="microfrontend-band__cta"
            href="https://tourguide.kubsiw.com"
            target="_blank"
            rel="noreferrer"
          >
            Otwórz całą aplikację ↗
          </a>
        </div>
        <div className="microfrontend-band__widget">
          <TourGuideWidget />
        </div>
      </div>
    </section>
  );
}
