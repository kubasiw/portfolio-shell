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
              'To nie zrzut ekranu — realny Web Component z Tour Guide (Angular), skompilowany osobno i ładowany tutaj w Shadow DOM. Mapa Leaflet jest w pełni interaktywna, a dane to snapshot 40 prawdziwych miejsc z OpenStreetMap dołączony do widgetu — bez żadnego backendu.',
              "This isn't a screenshot — it's a real Web Component from Tour Guide (Angular), compiled separately and loaded here in a Shadow DOM. The Leaflet map is fully interactive, and the data is a snapshot of 40 real places from OpenStreetMap bundled with the widget — no backend at all.",
            )}
          </p>
          <a
            className="btn-outline"
            href="https://github.com/kubasiw/tour-guide"
            target="_blank"
            rel="noreferrer"
          >
            {t('Zobacz kod ↗', 'See the code ↗')}
          </a>
        </div>
        <div className="microfrontend-band__widget">
          <TourGuideWidget />
        </div>
      </div>
    </section>
  );
}
