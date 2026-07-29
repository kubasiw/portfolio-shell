import type { Section } from './sections';
import { ContactLinks } from './ContactLinks';
import { Stamp } from '../../components/Stamp';
import { TourGuideWidget } from './TourGuideWidget';
import './ProjectCard.css';

interface ProjectCardProps {
  section: Section;
  locked: boolean;
  highlighted: boolean;
  onOpenDetail: (id: string) => void;
}

// Jedyna sekcja z realnym, wdrożonym projektem pod spodem na razie (Faza 3, krok 9 z
// PORTFOLIO_PLAN.md) — Insider/Serwisant dostaną tę samą obsługę, gdy same zostaną wdrożone
// (Fazy 4-5), nie wcześniej.
const TOUR_GUIDE_SECTION_ID = 'tour-guide';
const TOUR_GUIDE_URL = 'https://tourguide.kubsiw.com';
const CONTACT_SECTION_ID = 'contact';

// Odblokowane, ale bez realnej treści pod spodem jeszcze (tylko opis) — dostają pieczątkę
// "w budowie" w rogu. Usunąć z tego zestawu, gdy dana sekcja dostanie realną zawartość
// (Faza 3.5, punkty d/e/f/g z PORTFOLIO_PLAN.md).
const IN_PROGRESS_SECTION_IDS = new Set(['insider', 'serwisant']);

function maskText(text: string): string {
  return text.replace(/[^\s—-]/g, '•');
}

export function ProjectCard({ section, locked, highlighted, onOpenDetail }: ProjectCardProps) {
  const coverPhoto = section.coverPhoto;

  return (
    <div
      id={`section-${section.id}`}
      className={`spec-plate ${locked ? 'spec-plate--locked' : 'spec-plate--unlocked'} ${
        highlighted ? 'spec-plate--nav-highlighted' : ''
      } ${!locked && IN_PROGRESS_SECTION_IDS.has(section.id) ? 'spec-plate--in-progress' : ''} ${
        !locked && coverPhoto ? 'spec-plate--has-cover' : ''
      }`}
    >
      {!locked && IN_PROGRESS_SECTION_IDS.has(section.id) && (
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
            <img src={coverPhoto.src} alt={coverPhoto.alt} className="spec-plate__cover-photo" />
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
