import type { SkillGroup, SkillPlateData, SkillTag } from './skills-data';
import { SKILL_PLATES } from './skills-data';
import './SkillsSection.css';

// Serwowany bezpośrednio z public/ (Vite kopiuje 1:1 do build outputu) — nie import ze
// src/assets/, PDF nie potrzebuje żadnego przetwarzania przez bundler, tylko realnego URL-a.
const CV_URL = '/cv/Jakub_Siwinski_CV.pdf';

function Tag({ label, planned }: SkillTag) {
  return <span className={`skills-section__tag ${planned ? 'skills-section__tag--planned' : ''}`}>{label}</span>;
}

function SkillGroupBlock({ label, note, tags }: SkillGroup) {
  return (
    <div className="skills-section__group">
      <span className="skills-section__group-label">{label}</span>
      {note && <p className="skills-section__group-note skills-section__group-note--lead">{note}</p>}
      <div className="skills-section__tag-row">
        {tags.map((tag) => (
          <Tag key={tag.label} {...tag} />
        ))}
      </div>
    </div>
  );
}

interface SkillColumnProps {
  plate: SkillPlateData;
  right?: boolean;
}

function SkillColumn({ plate, right }: SkillColumnProps) {
  const { title, pullQuote, pullQuotePrimary, subtitle, groups } = plate;
  return (
    <div className={`skills-section__column ${right ? 'skills-section__column--right' : ''}`}>
      <span className="skills-section__kicker">{title}</span>
      <p
        className={`skills-section__pull-quote ${
          pullQuotePrimary ? 'skills-section__pull-quote--primary' : ''
        }`}
      >
        {pullQuote}
      </p>
      {subtitle && <p className="skills-section__subtitle">{subtitle}</p>}
      {groups.map((group) => (
        <SkillGroupBlock key={group.label} {...group} />
      ))}
      {right && (
        <div className="skills-section__cv-row">
          <p className="skills-section__cv-text">
            Pełne CV — doświadczenie zawodowe, projekty klienckie, certyfikaty — do pobrania jako
            PDF.
          </p>
          <a className="btn-outline" href={CV_URL} download>
            Pobierz CV (PDF) ↓
          </a>
        </div>
      )}
    </div>
  );
}

export function SkillsSection() {
  const [core, built] = SKILL_PLATES;

  return (
    <section className="skills-section" id="umiejetnosci" aria-label="Umiejętności">
      <div className="skills-section__columns">
        <SkillColumn plate={core} />
        <SkillColumn plate={built} right />
      </div>

      <div className="skills-section__ai-callout-wrap">
        <div className="skills-section__ai-callout">
          <span className="skills-section__ai-callout-label">Jak naprawdę pracuję z AI</span>
          <p>
            Na co dzień, w pracy nad dużym projektem, korzystam z GitHub Copilota —
            doprecyzowuję prompty, wskazuję wzorce, ustalam dobre praktyki i role, w jakich model
            ma rozumować. To nie jest nowa umiejętność odkryta przy tym portfolio.
          </p>
          <p className="skills-section__ai-callout-secondary">
            To portfolio pokazuje bardziej autonomiczny wariant tej samej pracy: Claude Code
            prowadzi całe zadania — od infrastruktury po design system — a ja nadal kieruję
            pracami i sprawdzam każdą decyzję, tylko na poziomie zadania, nie pojedynczej
            linijki.
          </p>
        </div>
      </div>
    </section>
  );
}
