import { useEffect, useMemo, useState } from 'react';
import heroPhoto from './assets/about/night_drive.webp';
import './App.css';
import { AboutSection } from './features/about/AboutSection';
import { BattleshipDrawer } from './features/battleship-drawer/BattleshipDrawer';
import { ContactBanner } from './features/contact/ContactBanner';
import { MicrofrontendBand } from './features/microfrontend-band/MicrofrontendBand';
import { ProjectIndex } from './features/project-index/ProjectIndex';
import { StatsBar } from './features/project-index/StatsBar';
import { SkillsSection } from './features/skills/SkillsSection';
import { DetailOverlay } from './features/toc/DetailOverlay';
import { SECTIONS } from './features/toc/sections';

function App() {
  // Id aktualnie otwartej sekcji "pełnoekranowej" (widok szczegółowy projektu, albo dział "O
  // mnie") albo null, gdy nic nie jest otwarte — patrz DetailOverlay.tsx. Etap 6 usunął ostatnią
  // sekcję, która była gdziekolwiek "ukryta za kliknięciem" bez własnego miejsca na stronie
  // (Kontakt, teraz ContactBanner) — cała nawigacja masthead jest odtąd zwykłymi kotwicami, bez
  // osobnego stanu do śledzenia.
  const [openSectionId, setOpenSectionId] = useState<string | null>(null);
  // Który dział "O mnie" ma się otworzyć od razu w AboutGallery (etap 5) — patrz
  // handleOpenAboutPassion niżej i AboutGallery.tsx. Tylko dla section.id==='about'.
  const [aboutPassionId, setAboutPassionId] = useState<string | null>(null);

  // Real bug reported on a real iPhone (both Safari and Chrome for iOS — same WebKit engine
  // underneath): `.site-footer`'s `position: sticky; bottom: 0` doesn't recompute against the
  // *dynamic* viewport when Safari's/Chrome's bottom toolbar auto-hides during a scroll — it
  // stays stuck to the smaller, stale viewport height from initial layout, leaving a gap below
  // the footer once the toolbar disappears. CSS `dvh` alone didn't fix it (confirmed live) —
  // WebKit's sticky-position recalculation doesn't reliably re-trigger off a `dvh` value change
  // on its own. This is the older, more battle-tested workaround: track the real
  // `window.innerHeight` in a CSS custom property, updated on resize, so `.landing`'s min-height
  // actually changes (forcing a real layout recalculation, not just a value WebKit may ignore).
  useEffect(() => {
    function syncViewportHeight(): void {
      document.documentElement.style.setProperty('--app-vh', `${window.innerHeight * 0.01}px`);
    }
    syncViewportHeight();
    window.addEventListener('resize', syncViewportHeight);
    window.visualViewport?.addEventListener('resize', syncViewportHeight);
    return () => {
      window.removeEventListener('resize', syncViewportHeight);
      window.visualViewport?.removeEventListener('resize', syncViewportHeight);
    };
  }, []);

  const openSection = useMemo(
    () => SECTIONS.find((section) => section.id === openSectionId) ?? null,
    [openSectionId],
  );

  // Widok szczegółowy właśnie się otworzył -> przewiń do jego góry, zamiast zostawiać stronę
  // tam, gdzie akurat był wiersz/kafel, który go otworzył (realny bug zgłoszony przez
  // właściciela — klik zostawiał widok "wpół zescrollowany"). Druga połowa tego mechanizmu
  // (powrót do "spisu treści" z podświetleniem) zniknęła razem z pinboardem w etapie 6 — nie ma
  // już do czego wracać, każda sekcja jest zawsze widoczna na stronie.
  useEffect(() => {
    if (openSectionId === null) {
      return;
    }
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // `.detail-overlay__panel`'s grid-template-rows transition (DetailOverlay.css, 320ms) nie
    // generuje zdarzenia `transitionend` dla wartości fr (potwierdzone bezpośrednim testem) —
    // stąd zwykły czas, nie nasłuch zdarzenia. Odczyt geometrii tuż po przełączeniu klasy bywa
    // też niewiarygodny (ta sama klasa problemu co gdzie indziej w tym zestawie projektów —
    // patrz CLAUDE.md tour-guide, "transition + just-toggled class"), dlatego poniżej
    // defensywnie wymuszamy `transition: none` na panelu tuż przed pomiarem i przywracamy go
    // zaraz po, zamiast ufać pierwszemu odczytowi.
    const PANEL_REVEAL_MS = prefersReducedMotion ? 0 : 400;

    const timer = window.setTimeout(() => {
      const panel = document.querySelector<HTMLElement>('.detail-overlay__panel');
      const previousTransition = panel?.style.transition;
      if (panel) {
        panel.style.transition = 'none';
      }
      void document.body.offsetHeight;

      const detailEl = document.querySelector('.section-detail');
      if (detailEl) {
        const rect = detailEl.getBoundingClientRect();
        const targetY = window.scrollY + rect.top - 24;
        window.scrollTo({ top: Math.max(0, targetY), behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }

      if (panel) {
        panel.style.transition = previousTransition ?? '';
      }
    }, PANEL_REVEAL_MS);

    return () => window.clearTimeout(timer);
  }, [openSectionId]);

  const handleSectionChange = (id: string | null): void => {
    setOpenSectionId(id);
  };

  // Kafel w AboutSection (etap 5) — zapamiętuje, który dział ma się otworzyć, i reużywa dokładnie
  // ten sam mechanizm widoku szczegółowego co reszta (SectionDetail -> AboutGallery), zamiast
  // budować drugi, równoległy sposób pokazywania galerii.
  const handleOpenAboutPassion = (passionId: string): void => {
    setAboutPassionId(passionId);
    handleSectionChange('about');
  };

  return (
    <div className="landing">
      <header className="masthead">
        <div className="masthead__inner">
          <span className="masthead__name">Jakub Siwiński</span>
          {/* Wszystkie 4 realne kotwice (etap 6) — każda sekcja, do której prowadzą, jest teraz
              zawsze widoczna na stronie jako osobny, prawdziwy element DOM z tym id (żaden już
              nie jest "ukryty za kliknięciem" w starym pinboardzie/spisie treści, usuniętym tym
              etapem). */}
          <nav className="masthead__nav">
            <a href="#projekty">Projekty</a>
            <a href="#o-mnie">O mnie</a>
            <a href="#umiejetnosci">Umiejętności</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          {/* PL/EN — wyłącznie wizualne (handoff, sekcja "Fidelity"): treść EN jeszcze nie
              istnieje, żaden realny przełącznik języka nie jest tu jeszcze podłączony. */}
          <span className="masthead__lang" aria-hidden="true">
            <span className="masthead__lang-active">PL</span>
            <span className="masthead__lang-sep">/</span>
            <span className="masthead__lang-inactive">EN</span>
          </span>
        </div>
      </header>

      <main className="hero">
        <div className="hero__inner">
          <div className="hero__text">
            <span className="hero__kicker">Frontend architect · 9 lat · Kraków</span>
            <h1 className="hero__title">
              <span className="hero__title-line">Cztery</span>
              <span className="hero__title-line hero__title-line--accent">frameworki</span>
              <span className="hero__title-line hero__title-line--outline">jeden stack</span>
            </h1>
            <p className="hero__text-body">
              Angular, React, Vue i React Native spięte Web Components, Traefikiem i jednym
              pipeline&apos;em. Cztery aplikacje na własnym VPS — każda działa samodzielnie, każda
              jest tu klikalna na żywo.
            </p>
            <div className="hero__cta">
              <a className="hero__cta-primary" href="#projekty">
                Zobacz projekty →
              </a>
              <a className="btn-outline" href="#kontakt">
                Napisz do mnie
              </a>
            </div>
          </div>
          <img
            className="hero__photo"
            src={heroPhoto}
            alt="Mężczyzna oświetlony ekranem laptopa w ciemności, nocna jazda"
          />
        </div>
      </main>

      <StatsBar />
      <ProjectIndex onOpenDetail={handleSectionChange} />
      <MicrofrontendBand />
      <BattleshipDrawer />
      <AboutSection onOpenPassion={handleOpenAboutPassion} />
      <SkillsSection />

      {/* Nakładka na widok szczegółowy (projekt/dział "O mnie") — kolapsuje do ~0 wysokości,
          kiedy nic nie jest otwarte (patrz DetailOverlay.tsx/.css). Treść w środku
          (SectionDetail/AboutGallery/InsiderDetail/TourGuideDetail) jest wciąż stylowana starymi
          tokenami --wb-* — świadomy, przejściowy szew, do restylowania w etapie 7 (patrz
          PORTFOLIO_PLAN.md, plan wdrożenia). */}
      <div className="landing__content">
        <DetailOverlay
          openSection={openSection}
          onClose={() => handleSectionChange(null)}
          aboutPassionId={aboutPassionId}
        />
      </div>

      <ContactBanner />

      <footer className="site-footer">
        <div className="site-footer__inner">
          <span className="site-footer__tagline">Portfolio jako aplikacja · vol. 01</span>
          <span className="site-footer__year">© 2026 Jakub Siwiński</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
