import { useTranslate } from '../../i18n/LanguageContext';
import { PASSIONS, getTotalPhotoCount } from '../toc/about/passions';
import './AboutSection.css';

interface AboutSectionProps {
  onOpenPassion: (passionId: string) => void;
}

// Łączna liczba zdjęć policzona z realnych danych (nie z handoffu — jego "44" było ilustracyjne,
// nieaktualne wobec obecnej zawartości `passions.ts`; jedno źródło prawdy z StatsBar.tsx).
const TOTAL_PHOTOS = getTotalPhotoCount();

export function AboutSection({ onOpenPassion }: AboutSectionProps) {
  const t = useTranslate();
  return (
    <section className="about-section" id="o-mnie" aria-labelledby="about-section-heading">
      <div className="about-section__header">
        <h2 id="about-section-heading" className="about-section__heading">
          <span className="about-section__heading-line">{t('Poza kodem,', 'Outside the code,')}</span>
          <span className="about-section__heading-line">{t('to samo spojrzenie', 'the same eye')}</span>
        </h2>
        <p className="about-section__body">
          {t(
            `Rower, szlaki, warsztat, aparat i jedzenie — ${TOTAL_PHOTOS} zdjęć w pięciu działach. Ziarno i przebarwienia są celowe — to nie ziemia obiecana, tylko prawdziwe życie.`,
            `Bike, trails, garage, camera, and food — ${TOTAL_PHOTOS} photos across five categories. Grain and discoloration are intentional — this isn't the promised land, just real life.`,
          )}
        </p>
      </div>

      <div className="about-section__strip">
        {PASSIONS.map((passion) => {
          const cover = passion.photos[0];
          return (
            <button
              key={passion.id}
              type="button"
              className="about-section__tile"
              onClick={() => onOpenPassion(passion.id)}
              disabled={!cover}
            >
              {cover && (
                <img
                  src={cover.src}
                  alt={t(cover.altPl, cover.altEn)}
                  className="about-section__tile-img"
                />
              )}
              <span className="about-section__tile-label">{t(passion.labelPl, passion.labelEn)}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
