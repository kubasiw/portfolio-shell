import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { Stamp } from './components/Stamp';
import { Toc } from './features/toc/Toc';
import type { NavTarget } from './features/toc/sections';
import { SECTIONS } from './features/toc/sections';

function App() {
  const [activeNavTarget, setActiveNavTarget] = useState<NavTarget | null>(null);
  // Faza 3.5, punkt e — stan komponentu (nie router), zgodnie z ustaleniem: id aktualnie otwartej
  // sekcji "pełnoekranowej" (about/skills/contact) albo null, gdy jesteśmy w normalnym spisie
  // treści. Podniesione tu (nie w Toc) z App, żeby klik w nagłówku mógł zamknąć widok
  // szczegółowy i wrócić do spisu treści — patrz handleNavClick niżej.
  const [openSectionId, setOpenSectionId] = useState<string | null>(null);

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
    // measure() poniżej defensywnie wymusza `transition: none` na panelach tuż przed pomiarem i
    // przywraca go zaraz po, zamiast ufać pierwszemu odczytowi.
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
        <span className="masthead__name">Kuba S.</span>
        <nav className="masthead__nav">
          <button
            type="button"
            className={displayNavTarget === 'projects' ? 'masthead__nav-item--active' : ''}
            onClick={() => handleNavClick('projects')}
          >
            Projekty
          </button>
          <button
            type="button"
            className={displayNavTarget === 'about' ? 'masthead__nav-item--active' : ''}
            onClick={() => handleNavClick('about')}
          >
            O mnie
          </button>
          <button
            type="button"
            className={displayNavTarget === 'contact' ? 'masthead__nav-item--active' : ''}
            onClick={() => handleNavClick('contact')}
          >
            Kontakt
          </button>
        </nav>
        <span className="masthead__vol">VOL. 01 — 2026</span>
        <Stamp main="W budowie" sub="2026" className="masthead__stamp" />
      </header>

      <main className="hero">
        <h1 className="hero__title">
          TRASY, KOD
          <br />
          <em>i jeden obiektyw.</em>
        </h1>
        <p className="hero__tagline">Trzy aplikacje, jedna trasa.</p>
      </main>

      <Toc
        activeNavTarget={activeNavTarget}
        openSectionId={openSectionId}
        openSection={openSection}
        onOpenSectionChange={setOpenSectionId}
      />

      <footer className="site-footer">
        <a className="site-footer__link" href="#section-contact">
          Kontakt ↑
        </a>
        <span className="site-footer__year">© 2026 Kuba S.</span>
      </footer>
    </div>
  );
}

export default App;
