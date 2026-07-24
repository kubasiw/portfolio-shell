import type { Section } from './sections';
import './ProjectCard.css';

interface ProjectCardProps {
  section: Section;
  locked: boolean;
}

function maskText(text: string): string {
  return text.replace(/[^\s—-]/g, '•');
}

export function ProjectCard({ section, locked }: ProjectCardProps) {
  return (
    <div className={`spec-plate ${locked ? 'spec-plate--locked' : 'spec-plate--unlocked'}`}>
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
      {!locked && <p className="spec-plate__description">{section.description}</p>}
    </div>
  );
}
