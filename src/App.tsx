import { useEffect, useMemo, useState } from 'react';
import heroPhoto from './assets/about/night_drive.webp';
import './App.css';
import { AboutSection } from './features/about/AboutSection';
import { BattleshipDrawer } from './features/battleship-drawer/BattleshipDrawer';
import { MicrofrontendBand } from './features/microfrontend-band/MicrofrontendBand';
import { ProjectIndex } from './features/project-index/ProjectIndex';
import { StatsBar } from './features/project-index/StatsBar';
import { SkillsSection } from './features/skills/SkillsSection';
import { Toc } from './features/toc/Toc';
import type { NavTarget } from './features/toc/sections';
import { SECTIONS } from './features/toc/sections';

function App() {
  const [activeNavTarget, setActiveNavTarget] = useState<NavTarget | null>(null);
  // Faza 3.5, punkt e — stan komponentu (nie router), zgodnie z ustaleniem: id aktualnie otwartej
  // sekcji "pełnoekranowej" (dziś: tylko "about"/"contact", "skills" ma teraz własną, zawsze
  // widoczną sekcję — patrz SkillsSection) albo null, gdy jesteśmy w normalnym spisie treści.
  // Podniesione tu (nie w Toc) z App, żeby klik w nagłówku mógł zamknąć widok szczegółowy i
  // wrócić do spisu treści — patrz handleNavClick niżej.
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

  // Widok szczegółowy nadpisuje, co pokazuje się jako aktywne w nagłówku — jesteśmy "w" tej
  // grupie, niezależnie od tego, co było ostatnio klikane (np. wejście na kartę "O mnie" przez
  // "Zobacz →", bez przechodzenia przez nagłówek, i tak podświetla "O mnie"). Liczone raz tutaj
  // (memoizowane) i przekazane niżej do Toc, zamiast żeby oba komponenty osobno skanowały
  // SECTIONS po tym samym openSectionId.
  const openSection = useMemo(
    () => SECTIONS.find((section) => section.id === openSectionId) ?? null,
    [openSectionId],
  );
  const displayNavTarget = openSection ? openSection.navGroup : activeNavTarget;

  // Dwa kierunki, jeden mechanizm: (1) widok szczegółowy właśnie się otworzył -> przewiń do jego
  // góry, zamiast zostawiać stronę tam, gdzie akurat była karta w spisie treści (realny bug
  // zgłoszony przez właściciela — klik na kartę zostawiał widok "wpół zescrollowany"); (2) wracamy
  // do spisu treści z aktywnym celem nawigacji -> przewiń/wyśrodkuj pierwszą pasującą kartę.
  useEffect(() => {
    if (openSectionId === null && !activeNavTarget) {
      return;
    }
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // `.toc__view-panel`'s grid-template-rows transition (Toc.css, 320ms) nie generuje zdarzenia
    // `transitionend` dla wartości fr (potwierdzone bezpośrednim testem) — stąd zwykły czas, nie
    // nasłuch zdarzenia. Odczyt geometrii tuż po przełączeniu klasy bywa też niewiarygodny (ta sama
    // klasa problemu co gdzie indziej w tym zestawie projektów — patrz CLAUDE.md tour-guide,
    // "transition + just-toggled class" — realnie potwierdzone tu na żywo osobnym testem), dlatego
    // poniżej defensywnie wymuszamy `transition: none` na panelach tuż przed pomiarem i
    // przywracamy go zaraz po, zamiast ufać pierwszemu odczytowi.
    const PANEL_REVEAL_MS = prefersReducedMotion ? 0 : 400;

    const timer = window.setTimeout(() => {
      const panels = document.querySelectorAll<HTMLElement>('.toc__view-panel');
      const previousTransitions = Array.from(panels).map((panel) => panel.style.transition);
      panels.forEach((panel) => {
        panel.style.transition = 'none';
      });
      void document.body.offsetHeight;

      if (openSectionId !== null) {
        const detailEl = document.querySelector('.section-detail');
        if (detailEl) {
          const rect = detailEl.getBoundingClientRect();
          const targetY = window.scrollY + rect.top - 24;
          window.scrollTo({ top: Math.max(0, targetY), behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        }
      } else if (activeNavTarget) {
        const firstMatch = SECTIONS.find((section) => section.navGroup === activeNavTarget);
        const el = firstMatch ? document.getElementById(`section-${firstMatch.id}`) : null;
        if (el) {
          // Ręczne window.scrollTo, nie element.scrollIntoView — .toc__view-panel-inner ma
          // overflow:hidden (potrzebne dla tej samej animacji) i scrollIntoView próbuje przewinąć
          // TEN kontener zamiast realnego okna, mimo że nie ma w nim czego przewijać; efekt: karta
          // zostaje poza widokiem, zero ruchu strony (realny bug złapany na żywo — window.scrollY
          // bez zmian po wywołaniu).
          const rect = el.getBoundingClientRect();
          const targetY = window.scrollY + rect.top - (window.innerHeight - rect.height) / 2;
          window.scrollTo({ top: Math.max(0, targetY), behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        }
      }

      panels.forEach((panel, i) => {
        panel.style.transition = previousTransitions[i];
      });
    }, PANEL_REVEAL_MS);

    return () => window.clearTimeout(timer);
  }, [activeNavTarget, openSectionId]);

  // Jedyne miejsce, które zamyka widok szczegółowy — używane zarówno przez przycisk "Wróć do
  // spisu treści" (id=null) jak i przez klik w nagłówku (id=null + od razu nowy target). Realny
  // bug złapany na żywo: przycisk "Wróć" i klik w nagłówku miały osobną logikę, więc wyjście przez
  // "Wróć" zostawiało nagłówek bez podświetlenia, a wyjście przez nagłówek podświetlało poprawnie —
  // dwie różne ścieżki wyjścia dawały dwa różne stany. Teraz zamknięcie zawsze podświetla grupę
  // sekcji, którą się właśnie opuszcza (chyba że wywołujący od razu poda inny target).
  const handleSectionChange = (id: string | null): void => {
    if (id === null) {
      if (openSection) {
        setActiveNavTarget(openSection.navGroup);
      }
      setOpenSectionId(null);
      return;
    }
    setOpenSectionId(id);
  };

  // Kafel w AboutSection (etap 5) — zapamiętuje, który dział ma się otworzyć, i reużywa dokładnie
  // ten sam mechanizm widoku szczegółowego co reszta (SectionDetail -> AboutGallery), zamiast
  // budować drugi, równoległy sposób pokazywania galerii.
  const handleOpenAboutPassion = (passionId: string): void => {
    setAboutPassionId(passionId);
    handleSectionChange('about');
  };

  const handleNavClick = (target: NavTarget): void => {
    // Widok szczegółowy otwarty -> nagłówek wcześniej nic nie robił (realny bug zgłoszony przez
    // właściciela); teraz zamyka widok i przenosi/podświetla właściwą grupę w spisie treści,
    // zawsze (bez toggle-off — tu klik to zawsze "zabierz mnie z powrotem", nie przełącznik).
    if (openSectionId !== null) {
      setOpenSectionId(null);
      setActiveNavTarget(target);
      return;
    }
    // Już na spisie treści -> ten sam link drugi raz czyści zaznaczenie, inny link po prostu je
    // przenosi.
    setActiveNavTarget((prev) => (prev === target ? null : target));
  };

  return (
    <div className="landing">
      <header className="masthead">
        <div className="masthead__inner">
          <span className="masthead__name">Jakub Siwiński</span>
          {/*
           * "Projekty"/"Kontakt": wciąż przyciski + stan (nie realne kotwice) — Projekty ma już
           * realny cel (#projekty istnieje od etapu 2), ale zostaje state-driven świadomie, żeby
           * nie konwertować nawigację częściowo w dwóch osobnych etapach (patrz PORTFOLIO_PLAN.md,
           * plan wdrożenia, etap 7 "sprzątanie" — pełna, jednorazowa konwersja wszystkich 4
           * linków, dopiero gdy #kontakt też będzie realną sekcją, etap 6). "O mnie"/
           * "Umiejętności": już realne <a href="#..."> (etap 5) — ich sekcje istnieją teraz jako
           * prawdziwe elementy DOM z tymi id (AboutSection/SkillsSection), więc stary
           * scroll-do-karty mechanizm (szukający nieistniejącego już #section-about/#section-
           * skills) by się tu po prostu zepsuł.
           */}
          <nav className="masthead__nav">
            <button
              type="button"
              className={displayNavTarget === 'projects' ? 'masthead__nav-item--active' : ''}
              onClick={() => handleNavClick('projects')}
            >
              Projekty
            </button>
            <a href="#o-mnie">O mnie</a>
            <a href="#umiejetnosci">Umiejętności</a>
            <button
              type="button"
              className={displayNavTarget === 'contact' ? 'masthead__nav-item--active' : ''}
              onClick={() => handleNavClick('contact')}
            >
              Kontakt
            </button>
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

      {/*
       * Pełnoszerokościowa sekcja (tło --md-ink sięga brzegów viewportu), ten sam wzorzec co
       * .masthead/.site-footer — poza .landing__content (dzielonym dziś z <Toc>, wciąż
       * kraftowo-jasnym Workbenchem), z własnym wewnętrznym .hero__inner ograniczonym do
       * max-width:1440px. Świadomy, przejściowy szew: ciemny hero bezpośrednio nad jasnym Tokiem,
       * dopóki ten drugi nie zostanie zmigrowany (patrz PORTFOLIO_PLAN.md, plan wdrożenia).
       */}
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

      <div className="landing__content">
        <Toc
          activeNavTarget={activeNavTarget}
          openSection={openSection}
          onOpenSectionChange={handleSectionChange}
          aboutPassionId={aboutPassionId}
        />
      </div>

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
