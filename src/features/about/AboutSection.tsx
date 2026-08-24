import { PASSIONS, getTotalPhotoCount } from '../toc/about/passions';
import './AboutSection.css';

interface AboutSectionProps {
  onOpenPassion: (passionId: string) => void;
}

// Łączna liczba zdjęć policzona z realnych danych (nie z handoffu — jego "44" było ilustracyjne,
// nieaktualne wobec obecnej zawartości `passions.ts`; jedno źródło prawdy z StatsBar.tsx).
const TOTAL_PHOTOS = getTotalPhotoCount();

export function AboutSection({ onOpenPassion }: AboutSectionProps) {
  return (
    <section className="about-section" id="o-mnie" aria-labelledby="about-section-heading">
      <div className="about-section__header">
        <h2 id="about-section-heading" className="about-section__heading">
          <span className="about-section__heading-line">To samo oko,</span>
          <span className="about-section__heading-line">bez edytora kodu</span>
        </h2>
        <p className="about-section__body">
          Rower, szlaki, warsztat, aparat i jedzenie — {TOTAL_PHOTOS} zdjęć w pięciu działach.
          Ziarno i przebarwienia są celowe, nie do wyczyszczenia.
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
                <img src={cover.src} alt={cover.alt} className="about-section__tile-img" />
              )}
              <span className="about-section__tile-label">{passion.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
