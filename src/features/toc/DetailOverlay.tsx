import { SectionDetail } from './SectionDetail';
import type { Section } from './sections';
import './DetailOverlay.css';

interface DetailOverlayProps {
  openSection: Section | null;
  onClose: () => void;
  // Tylko dla widoku szczegółowego "O mnie" (patrz App.tsx/SectionDetail.tsx).
  aboutPassionId: string | null;
}

// Do 2026-08-24 ("Toc", spis treści) ten komponent też renderował siatkę kart-fiszek dla
// sekcji, które jeszcze nie miały własnego miejsca na stronie — od etapu 6 redesignu
// "Atrament" wszystkie sekcje (Projekty, O mnie, Umiejętności, Kontakt) są już zawsze widoczne
// jako osobne sekcje w App.tsx, więc ten komponent robi już tylko jedno: chowa/pokazuje
// SectionDetail (widok szczegółowy projektu albo działu "O mnie") jako rozwijaną nakładkę.
// Nazwa zmieniona razem z rolą — patrz PORTFOLIO_PLAN.md, etap 6.
export function DetailOverlay({ openSection, onClose, aboutPassionId }: DetailOverlayProps) {
  const detailOpen = openSection !== null;

  return (
    <section className="detail-overlay" aria-hidden={!detailOpen}>
      <div className={`detail-overlay__panel ${detailOpen ? 'detail-overlay__panel--open' : ''}`}>
        <div className="detail-overlay__panel-inner">
          {openSection && (
            <SectionDetail
              section={openSection}
              onClose={onClose}
              aboutPassionId={aboutPassionId}
            />
          )}
        </div>
      </div>
    </section>
  );
}
