import { useEffect, useState } from 'react';
import './App.css';
import { Stamp } from './components/Stamp';
import { Toc } from './features/toc/Toc';
import type { NavTarget } from './features/toc/sections';
import { SECTIONS } from './features/toc/sections';

function App() {
  const [activeNavTarget, setActiveNavTarget] = useState<NavTarget | null>(null);

  // Scrolluje do PIERWSZEJ sekcji pasującej do wybranej grupy — nie do wszystkich naraz, tylko
  // tyle, żeby użytkownik zorientował się, gdzie jest ta grupa; podświetlenie (patrz Toc/ProjectCard)
  // i tak obejmuje wszystkie pasujące karty jednocześnie.
  useEffect(() => {
    if (!activeNavTarget) {
      return;
    }
    const firstMatch = SECTIONS.find((section) => section.navGroup === activeNavTarget);
    if (firstMatch) {
      document
        .getElementById(`section-${firstMatch.id}`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeNavTarget]);

  const handleNavClick = (target: NavTarget): void => {
    // Ten sam link drugi raz -> czyści zaznaczenie; inny link -> po prostu przenosi je, bez
    // potrzeby najpierw odklikiwać poprzedni.
    setActiveNavTarget((prev) => (prev === target ? null : target));
  };

  return (
    <div className="landing">
      <header className="masthead">
        <span className="masthead__name">Kuba S.</span>
        <nav className="masthead__nav">
          <button
            type="button"
            className={activeNavTarget === 'projects' ? 'masthead__nav-item--active' : ''}
            onClick={() => handleNavClick('projects')}
          >
            Projekty
          </button>
          <button
            type="button"
            className={activeNavTarget === 'about' ? 'masthead__nav-item--active' : ''}
            onClick={() => handleNavClick('about')}
          >
            O mnie
          </button>
          <button
            type="button"
            className={activeNavTarget === 'contact' ? 'masthead__nav-item--active' : ''}
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

      <Toc activeNavTarget={activeNavTarget} />

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
