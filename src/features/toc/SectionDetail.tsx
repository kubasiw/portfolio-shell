import { useEffect, useRef } from 'react';
import { AboutGallery } from './about/AboutGallery';
import type { Section } from './sections';
import './SectionDetail.css';

interface SectionDetailProps {
  section: Section;
  onClose: () => void;
}

export function SectionDetail({ section, onClose }: SectionDetailProps) {
  const backButtonRef = useRef<HTMLButtonElement>(null);

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
        className="section-detail__back"
        onClick={onClose}
      >
        ← Wróć do spisu treści
      </button>
      <h2 className="section-detail__title">{section.title}</h2>
      <p className="section-detail__description">{section.description}</p>
      {section.id === 'about' ? (
        <AboutGallery />
      ) : (
        <p className="section-detail__placeholder">Treść w przygotowaniu.</p>
      )}
    </div>
  );
}
