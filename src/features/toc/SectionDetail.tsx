import { Suspense, lazy, useEffect, useRef } from 'react';
import { useTranslate } from '../../i18n/LanguageContext';
import type { Section } from './sections';
import './SectionDetail.css';

// Leniwie ładowane — ~50 zdjęć w about/passions.ts nie jest potrzebne w głównym bundlu dla
// każdego odwiedzającego, tylko dla kogoś, kto faktycznie kliknie kafel w AboutSection.
// Umiejętności (dawniej SkillsDetail/lazy tutaj) przeniesione do własnej, zawsze widocznej
// sekcji na stronie (etap 5 redesignu "Atrament") — nie jest już częścią tego przełącznika.
const AboutGallery = lazy(() => import('./about/AboutGallery').then((m) => ({ default: m.AboutGallery })));
const InsiderDetail = lazy(() => import('./insider/InsiderDetail').then((m) => ({ default: m.InsiderDetail })));
const TourGuideDetail = lazy(() =>
  import('./tour-guide/TourGuideDetail').then((m) => ({ default: m.TourGuideDetail })),
);
const ShellDetail = lazy(() => import('./shell/ShellDetail').then((m) => ({ default: m.ShellDetail })));

interface SectionDetailProps {
  section: Section;
  onClose: () => void;
  // Tylko dla section.id==='about' — patrz AboutGallery.tsx. Ignorowane dla innych sekcji.
  aboutPassionId?: string | null;
}

export function SectionDetail({ section, onClose, aboutPassionId = null }: SectionDetailProps) {
  const t = useTranslate();
  const backButtonRef = useRef<HTMLButtonElement>(null);
  const hasCustomDetail =
    section.id === 'about' ||
    section.id === 'insider' ||
    section.id === 'tour-guide' ||
    section.id === 'portfolio-shell';

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
        {/* "Wróć do spisu treści" (etap<6) nie ma już sensu — nie ma spisu treści do powrotu,
            zamknięcie po prostu przewija do sekcji, skąd się przyszło (patrz App.tsx,
            handleSectionChange). Poprawione przy okazji tłumaczenia. */}
        {t('← Wróć', '← Back')}
      </button>
      <h2 className="section-detail__title">{t(section.titlePl, section.titleEn)}</h2>
      <p className="section-detail__description">{t(section.descriptionPl, section.descriptionEn)}</p>
      {hasCustomDetail ? (
        <Suspense fallback={null}>
          {section.id === 'about' && <AboutGallery initialPassionId={aboutPassionId} />}
          {section.id === 'insider' && <InsiderDetail />}
          {section.id === 'tour-guide' && <TourGuideDetail />}
          {section.id === 'portfolio-shell' && <ShellDetail />}
        </Suspense>
      ) : (
        <p className="section-detail__placeholder">{t('Treść w przygotowaniu.', 'Content coming soon.')}</p>
      )}
    </div>
  );
}
