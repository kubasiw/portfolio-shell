import type { SkillGroup, SkillPlateData, SkillTag } from './skills-data';
import { SKILL_PLATES } from './skills-data';
import './SkillsDetail.css';

// Serwowany bezpośrednio z public/ (Vite kopiuje 1:1 do build outputu) — nie import ze
// src/assets/, PDF nie potrzebuje żadnego przetwarzania przez bundler, tylko realnego URL-a.
const CV_URL = '/cv/Jakub_Siwinski_CV.pdf';

function Tag({ label, planned }: SkillTag) {
  return <span className={`tag ${planned ? 'tag--planned' : ''}`}>{label}</span>;
}

function SkillGroupBlock({ label, note, tags }: SkillGroup) {
  return (
    <div className="skill-group">
      <span className="skill-group__label">{label}</span>
      {note && <p className="skill-group__note skill-group__note--lead">{note}</p>}
      <div className="tag-row">
        {tags.map((tag) => (
          <Tag key={tag.label} {...tag} />
        ))}
      </div>
    </div>
  );
}

function SkillPlate({ title, core, pullQuote, pullQuotePrimary, subtitle, groups }: SkillPlateData) {
  return (
    <section className={`skill-plate ${core ? 'skill-plate--core' : ''}`}>
      <p className="skill-plate__title">{title}</p>
      <p
        className={`skill-plate__pull-quote ${pullQuotePrimary ? 'skill-plate__pull-quote--primary' : ''}`}
      >
        {pullQuote}
      </p>
      {subtitle && <p className="skill-plate__subtitle">{subtitle}</p>}
      {groups.map((group) => (
        <SkillGroupBlock key={group.label} {...group} />
      ))}
    </section>
  );
}

export function SkillsDetail() {
  return (
    <div className="skills-detail">
      <div className="skills-detail__columns">
        {SKILL_PLATES.map((plate) => (
          <SkillPlate key={plate.title} {...plate} />
        ))}
      </div>

      <div className="ai-callout">
        <span className="ai-callout__label">Jak naprawdę pracuję z AI</span>
        <p>
          Na co dzień, w pracy nad dużym projektem, korzystam z GitHub Copilota —
          doprecyzowuję prompty, wskazuję wzorce, ustalam dobre praktyki i role, w jakich model ma
          rozumować. To nie jest nowa umiejętność odkryta przy tym portfolio.
        </p>
        <p className="ai-callout__secondary">
          Ten portfolio pokazuje bardziej autonomiczny wariant tej samej pracy: Claude Code
          prowadzi całe zadania — od infrastruktury po design system — a ja nadal kieruję
          kierunkiem i sprawdzam każdą decyzję, tylko na poziomie zadania, nie pojedynczej
          linijki.
        </p>
      </div>

      <div className="cv-row">
        <p className="cv-row__text">
          Pełne CV — doświadczenie zawodowe, projekty klienckie, certyfikaty — do pobrania jako
          PDF.
        </p>
        <a className="cv-cta" href={CV_URL} download>
          Pobierz CV (PDF) ↓
        </a>
      </div>
    </div>
  );
}
