import { useTranslate } from '../../i18n/LanguageContext';
import type { SkillGroup, SkillPlateData, SkillTag } from './skills-data';
import { SKILL_PLATES } from './skills-data';
import './SkillsSection.css';

// Serwowany bezpośrednio z public/ (Vite kopiuje 1:1 do build outputu) — nie import ze
// src/assets/, PDF nie potrzebuje żadnego przetwarzania przez bundler, tylko realnego URL-a.
const CV_URL = '/cv/Jakub_Siwinski_CV.pdf';

function Tag({ labelPl, labelEn, planned }: SkillTag) {
  const t = useTranslate();
  return (
    <span className={`skills-section__tag ${planned ? 'skills-section__tag--planned' : ''}`}>
      {t(labelPl, labelEn)}
    </span>
  );
}

function SkillGroupBlock({ labelPl, labelEn, notePl, noteEn, tags }: SkillGroup) {
  const t = useTranslate();
  return (
    <div className="skills-section__group">
      <span className="skills-section__group-label">{t(labelPl, labelEn)}</span>
      {notePl && noteEn && (
        <p className="skills-section__group-note skills-section__group-note--lead">
          {t(notePl, noteEn)}
        </p>
      )}
      <div className="skills-section__tag-row">
        {tags.map((tag) => (
          <Tag key={tag.labelPl} {...tag} />
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
  const t = useTranslate();
  const { titlePl, titleEn, pullQuotePl, pullQuoteEn, pullQuotePrimary, subtitlePl, subtitleEn, groups } = plate;
  return (
    <div className={`skills-section__column ${right ? 'skills-section__column--right' : ''}`}>
      <span className="skills-section__kicker">{t(titlePl, titleEn)}</span>
      <p
        className={`skills-section__pull-quote ${
          pullQuotePrimary ? 'skills-section__pull-quote--primary' : ''
        }`}
      >
        {t(pullQuotePl, pullQuoteEn)}
      </p>
      {subtitlePl && subtitleEn && <p className="skills-section__subtitle">{t(subtitlePl, subtitleEn)}</p>}
      {groups.map((group) => (
        <SkillGroupBlock key={group.labelPl} {...group} />
      ))}
      {right && (
        <div className="skills-section__cv-row">
          <p className="skills-section__cv-text">
            {t(
              'Pełne CV — doświadczenie zawodowe, projekty klienckie, certyfikaty — do pobrania jako PDF.',
              'Full CV — work experience, client projects, certifications — downloadable as a PDF.',
            )}
          </p>
          <a className="btn-outline" href={CV_URL} download>
            {t('Pobierz CV (PDF) ↓', 'Download CV (PDF) ↓')}
          </a>
        </div>
      )}
    </div>
  );
}

export function SkillsSection() {
  const t = useTranslate();
  const [core, built] = SKILL_PLATES;

  return (
    <section className="skills-section" id="umiejetnosci" aria-label={t('Umiejętności', 'Skills')}>
      <div className="skills-section__columns">
        <SkillColumn plate={core} />
        <SkillColumn plate={built} right />
      </div>

      <div className="skills-section__ai-callout-wrap">
        <div className="skills-section__ai-callout">
          <span className="skills-section__ai-callout-label">
            {t('Jak naprawdę pracuję z AI', 'How I actually work with AI')}
          </span>
          <p>
            {t(
              'Na co dzień, w pracy nad dużym projektem, korzystam z GitHub Copilota — doprecyzowuję prompty, wskazuję wzorce, ustalam dobre praktyki i role, w jakich model ma rozumować. To nie jest nowa umiejętność odkryta przy tym portfolio.',
              "Day to day, on a large work project, I use GitHub Copilot — refining prompts, pointing out patterns, setting good practices and the roles the model should reason in. This isn't a new skill discovered while building this portfolio.",
            )}
          </p>
          <p className="skills-section__ai-callout-secondary">
            {t(
              'To portfolio pokazuje bardziej autonomiczny wariant tej samej pracy: Claude Code prowadzi całe zadania — od infrastruktury po design system — a ja nadal kieruję pracami i sprawdzam każdą decyzję, tylko na poziomie zadania, nie pojedynczej linijki.',
              'This portfolio shows a more autonomous version of the same work: Claude Code drives whole tasks — from infrastructure to the design system — while I still steer the work and check every decision, just at the level of a task, not a single line.',
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
