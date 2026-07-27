import type { Section } from './sections';
import { ContactLinks } from './ContactLinks';
import { TourGuideWidget } from './TourGuideWidget';
import './ProjectCard.css';

interface ProjectCardProps {
  section: Section;
  locked: boolean;
}

// Jedyna sekcja z realnym, wdrożonym projektem pod spodem na razie (Faza 3, krok 9 z
// PORTFOLIO_PLAN.md) — Insider/Serwisant dostaną tę samą obsługę, gdy same zostaną wdrożone
// (Fazy 4-5), nie wcześniej.
const TOUR_GUIDE_SECTION_ID = 'tour-guide';
const TOUR_GUIDE_URL = 'https://tourguide.kubsiw.com';
const CONTACT_SECTION_ID = 'contact';

function maskText(text: string): string {
  return text.replace(/[^\s—-]/g, '•');
}

export function ProjectCard({ section, locked }: ProjectCardProps) {
  return (
    <div
      id={`section-${section.id}`}
      className={`spec-plate ${locked ? 'spec-plate--locked' : 'spec-plate--unlocked'}`}
    >
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
            {locked ? 'Zablokowane' : 'Odblokowane →'}
          </span>
        </div>
      </div>
      {!locked && (
        <>
          <p className="spec-plate__description">{section.description}</p>
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
        </>
      )}
    </div>
  );
}
