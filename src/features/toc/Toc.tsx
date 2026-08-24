import { ProjectCard } from './ProjectCard';
import { SectionDetail } from './SectionDetail';
import type { NavTarget, Section } from './sections';
import { SECTIONS } from './sections';
import './Toc.css';

interface TocProps {
  activeNavTarget: NavTarget | null;
  openSection: Section | null;
  onOpenSectionChange: (id: string | null) => void;
}

export function Toc({ activeNavTarget, openSection, onOpenSectionChange }: TocProps) {
  const detailOpen = openSection !== null;

  return (
    <section className="toc" aria-labelledby="toc-heading">
      <div
        className={`toc__view-panel ${detailOpen ? '' : 'toc__view-panel--open'}`}
        aria-hidden={detailOpen}
      >
        <div className="toc__view-panel-inner">
          <h2 id="toc-heading" className="toc__heading">
            Więcej
          </h2>

          <div className="toc__cards">
            {/* navGroup === 'projects' (tour-guide/insider/serwisant/portfolio-shell) renderowane
                przez <ProjectIndex> (App.tsx, etap 2 redesignu "Atrament") — zostaje tu tylko
                reszta (about/skills/contact), dopóki nie dostanie własnego etapu (patrz
                PORTFOLIO_PLAN.md, plan wdrożenia). Statki przestały bramkować treść (etap 4) —
                wszystko poniżej jest zawsze odblokowane, patrz BattleshipDrawer dla samej gry. */}
            {SECTIONS.filter((section) => section.navGroup !== 'projects').map((section) => (
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
            <SectionDetail section={openSection} onClose={() => onOpenSectionChange(null)} />
          )}
        </div>
      </div>
    </section>
  );
}
