import { Suspense, lazy, useEffect, useRef } from 'react';
import type { Section } from './sections';
import './SectionDetail.css';

// Leniwie ładowane — ~44 zdjęcia w about/passions.ts i cała treść CV/umiejętności nie są
// potrzebne w głównym bundlu dla każdego odwiedzającego spis treści, tylko dla kogoś, kto
// faktycznie kliknie "Zobacz →" na tej konkretnej karcie.
const AboutGallery = lazy(() => import('./about/AboutGallery').then((m) => ({ default: m.AboutGallery })));
const SkillsDetail = lazy(() => import('./skills/SkillsDetail').then((m) => ({ default: m.SkillsDetail })));
const InsiderDetail = lazy(() => import('./insider/InsiderDetail').then((m) => ({ default: m.InsiderDetail })));
const TourGuideDetail = lazy(() =>
  import('./tour-guide/TourGuideDetail').then((m) => ({ default: m.TourGuideDetail })),
);

interface SectionDetailProps {
  section: Section;
  onClose: () => void;
}

export function SectionDetail({ section, onClose }: SectionDetailProps) {
  const backButtonRef = useRef<HTMLButtonElement>(null);
  const hasCustomDetail =
    section.id === 'about' ||
    section.id === 'skills' ||
    section.id === 'insider' ||
    section.id === 'tour-guide';

  // Fokus na przycisk powrotu przy otwarciu — ten sam duch co "dostępność jako standard" z
  // dobrych praktyk w PORTFOLIO_PLAN.md; to nowy sposób nawigacji, więc użytkownik klawiatury/
  // czytnika ekranu powinien od razu wylądować w sensownym miejscu, nie zgadywać.
  useEffect(() => {
    backButtonRef.current?.focus();
  }, [section.id]);

  return (
    <div className="section-detail">
      <button
        ref={backButtonRef}
        type="button"
        className="section-detail__back link-dashed"
        onClick={onClose}
      >
        ← Wróć do spisu treści
      </button>
      <h2 className="section-detail__title">{section.title}</h2>
      <p className="section-detail__description">{section.description}</p>
      {hasCustomDetail ? (
        <Suspense fallback={null}>
          {section.id === 'about' && <AboutGallery />}
          {section.id === 'skills' && <SkillsDetail />}
          {section.id === 'insider' && <InsiderDetail />}
          {section.id === 'tour-guide' && <TourGuideDetail />}
        </Suspense>
      ) : (
        <p className="section-detail__placeholder">Treść w przygotowaniu.</p>
      )}
    </div>
  );
}
