import { ProjectCard } from './ProjectCard';
import { SectionDetail } from './SectionDetail';
import type { NavTarget, Section } from './sections';
import { SECTIONS } from './sections';
import './Toc.css';

interface TocProps {
  activeNavTarget: NavTarget | null;
  openSection: Section | null;
  onOpenSectionChange: (id: string | null) => void;
  // Tylko dla widoku szczegółowego "O mnie" (patrz App.tsx/SectionDetail.tsx) — przekazywany tu
  // przelotem do SectionDetail, sam Toc go nie czyta.
  aboutPassionId: string | null;
}

export function Toc({
  activeNavTarget,
  openSection,
  onOpenSectionChange,
  aboutPassionId,
}: TocProps) {
  const detailOpen = openSection !== null;

  return (
    <section className="toc" aria-labelledby="toc-heading">
      <div
        className={`toc__view-panel ${detailOpen ? '' : 'toc__view-panel--open'}`}
        aria-hidden={detailOpen}
      >
        <div className="toc__view-panel-inner">
          <h2 id="toc-heading" className="toc__heading">
            Kontakt
          </h2>

          <div className="toc__cards">
            {/* navGroup === 'projects' -> <ProjectIndex> (etap 2), 'about' -> <AboutSection>
                (etap 5, oba w App.tsx) — obie renderowane jako zawsze widoczne sekcje na stronie,
                nie kafelki tutaj. Zostaje tylko "contact", dopóki nie dostanie własnego bannera
                (etap 6, patrz PORTFOLIO_PLAN.md, plan wdrożenia). Statki przestały bramkować
                treść (etap 4) — to, co tu zostało, jest zawsze odblokowane. */}
            {SECTIONS.filter(
              (section) => section.navGroup !== 'projects' && section.id !== 'about',
            ).map((section) => (
              <ProjectCard
                key={section.id}
                section={section}
                highlighted={activeNavTarget !== null && section.navGroup === activeNavTarget}
                onOpenDetail={onOpenSectionChange}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className={`toc__view-panel ${detailOpen ? 'toc__view-panel--open' : ''}`}
        aria-hidden={!detailOpen}
      >
        <div className="toc__view-panel-inner">
          {openSection && (
            <SectionDetail
              section={openSection}
              onClose={() => onOpenSectionChange(null)}
              aboutPassionId={aboutPassionId}
            />
          )}
        </div>
      </div>
    </section>
  );
}
