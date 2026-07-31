import type { Section } from './sections';
import { ContactLinks } from './ContactLinks';
import { Stamp } from '../../components/Stamp';
import { TourGuideWidget } from './TourGuideWidget';
import { InsiderWidget } from './InsiderWidget';
import './ProjectCard.css';

interface ProjectCardProps {
  section: Section;
  locked: boolean;
  highlighted: boolean;
  onOpenDetail: (id: string) => void;
}

// Jedyna sekcja z realnym, wdrożonym projektem pod spodem na razie (Faza 3, krok 9 z
// PORTFOLIO_PLAN.md) — Serwisant dostanie tę samą obsługę, gdy sam zostanie wdrożony (Faza 5),
// nie wcześniej.
const TOUR_GUIDE_SECTION_ID = 'tour-guide';
const TOUR_GUIDE_URL = 'https://tourguide.kubsiw.com';
// Insider (2026-07-30) — inaczej niż tour-guide (mały fragment/mapa osadzona wprost w karcie),
// tu pokazujemy CAŁĄ apkę z działającym flow, w modalu (InsiderWidget) — możliwe, bo Insider (w
// przeciwieństwie do tour-guide) nie ma routera/auth, patrz PORTFOLIO_PLAN.md. Skrypt widgetu
// ładuje się dopiero po otwarciu modala, nie przy każdym renderze karty.
const INSIDER_SECTION_ID = 'insider';
const CONTACT_SECTION_ID = 'contact';

function maskText(text: string): string {
  return text.replace(/[^\s—-]/g, '•');
}

export function ProjectCard({ section, locked, highlighted, onOpenDetail }: ProjectCardProps) {
  const coverPhoto = section.coverPhoto;
  const showInProgressStamp = !locked && section.inProgress;

  const cardClassName = [
    'spec-plate',
    locked ? 'spec-plate--locked' : 'spec-plate--unlocked plate-emphasized',
    highlighted && 'spec-plate--nav-highlighted',
    showInProgressStamp && 'spec-plate--in-progress',
    !locked && coverPhoto && 'spec-plate--has-cover',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div id={`section-${section.id}`} className={cardClassName}>
      {showInProgressStamp && (
        <Stamp main="W budowie" sub="wkrótce" className="spec-plate__stamp" />
      )}
      <div className="spec-plate__rows">
        <div className="spec-plate__row">
          <span className="spec-plate__label">Sekcja</span>
          <span className="spec-plate__value">{locked ? maskText(section.title) : section.title}</span>
        </div>
        <div className="spec-plate__row">
          <span className="spec-plate__label">Status</span>
          <span
            className={`spec-plate__badge ${
              locked ? 'spec-plate__badge--locked' : 'spec-plate__badge--unlocked'
            }`}
          >
            {locked ? 'Zablokowane' : 'Odblokowane'}
          </span>
        </div>
      </div>
      {!locked && (
        <>
          {coverPhoto && (
            <div className="spec-plate__cover-photo-frame">
              <img
                src={coverPhoto.src}
                alt={coverPhoto.alt}
                className={`spec-plate__cover-photo ${
                  coverPhoto.fit === 'contain' ? 'spec-plate__cover-photo--contain' : ''
                } ${coverPhoto.zoom ? 'spec-plate__cover-photo--zoomed' : ''}`}
                style={
                  coverPhoto.zoom
                    ? {
                        // width:130% na samym <img> NIE tworzy luzu w poziomie — object-fit:cover
                        // przelicza dopasowanie do nowego (dalej proporcjonalnie węższego niż
                        // ramka) boxa i znów trafia dokładnie w szerokość. transform na już
                        // dopasowanym obrazku faktycznie powiększa poza ramkę — przycina to
                        // overflow:hidden na .spec-plate__cover-photo-frame. Kierunek sprawdzony
                        // na żywo (poprzednia, "logiczna" wersja ze znakiem odwrotnym poszła w
                        // złą stronę) — panX dodatnie = translateX dodatnie = w prawo.
                        objectPosition: coverPhoto.position,
                        transform: `scale(${coverPhoto.zoom}) translateX(${coverPhoto.panX ?? 0}px) rotate(${coverPhoto.rotate ?? 0}deg)`,
                      }
                    : { objectPosition: coverPhoto.position }
                }
              />
            </div>
          )}
          {!section.hideDescription && (
            <p className="spec-plate__description">{section.description}</p>
          )}
          {section.id === TOUR_GUIDE_SECTION_ID && (
            <>
              <TourGuideWidget />
              <a
                className="spec-plate__cta"
                href={TOUR_GUIDE_URL}
                target="_blank"
                rel="noreferrer"
              >
                Zobacz cały projekt →
              </a>
            </>
          )}
          {section.id === INSIDER_SECTION_ID && <InsiderWidget />}
          {section.id === CONTACT_SECTION_ID && <ContactLinks />}
          {section.hasDetailView && (
            <button
              type="button"
              className="spec-plate__cta"
              onClick={() => onOpenDetail(section.id)}
            >
              Zobacz →
            </button>
          )}
        </>
      )}
    </div>
  );
}
