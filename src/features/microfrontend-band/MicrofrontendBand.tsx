import { useLanguage, useTranslate } from '../../i18n/LanguageContext';
import { TourGuideWidget } from '../toc/TourGuideWidget';
import './MicrofrontendBand.css';

export function MicrofrontendBand() {
  const { language } = useLanguage();
  const t = useTranslate();
  return (
    <section className="microfrontend-band" aria-labelledby="microfrontend-band-heading">
      <div className="microfrontend-band__inner">
        <div className="microfrontend-band__text">
          <span className="microfrontend-band__kicker">{t('Mikrofrontend na żywo', 'Live microfrontend')}</span>
          <h3 id="microfrontend-band-heading" className="microfrontend-band__heading">
            {language === 'pl' ? (
              <>
                <span className="microfrontend-band__heading-line">Fragment Tour Guide</span>
                <span className="microfrontend-band__heading-line">działa w tej stronie</span>
              </>
            ) : (
              <>
                <span className="microfrontend-band__heading-line">A piece of Tour Guide</span>
                <span className="microfrontend-band__heading-line">runs on this page</span>
              </>
            )}
          </h3>
          <p className="microfrontend-band__body">
            {t(
              'To nie zrzut ekranu — realny, osadzony Web Component z tour-guide.kubsiw.com, pobiera prawdziwe dane POI i renderuje żywą mapę Leaflet tuż tutaj, na tej stronie.',
              "This isn't a screenshot — it's a real, embedded Web Component from tour-guide.kubsiw.com, fetching real POI data and rendering a live Leaflet map right here on this page.",
            )}
          </p>
          <a
            className="btn-outline"
            href="https://tourguide.kubsiw.com"
            target="_blank"
            rel="noreferrer"
          >
            {t('Otwórz całą aplikację ↗', 'Open the full app ↗')}
          </a>
        </div>
        <div className="microfrontend-band__widget">
          <TourGuideWidget />
        </div>
      </div>
    </section>
  );
}
