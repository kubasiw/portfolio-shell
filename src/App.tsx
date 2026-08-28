import { useEffect, useMemo, useState } from 'react';
import type { MouseEvent } from 'react';
import heroPhoto from './assets/about/night_drive.webp';
import './App.css';
import { AboutSection } from './features/about/AboutSection';
import { BattleshipDrawer } from './features/battleship-drawer/BattleshipDrawer';
import { ContactBanner } from './features/contact/ContactBanner';
import { useLanguage, useTranslate } from './i18n/LanguageContext';
import { MicrofrontendBand } from './features/microfrontend-band/MicrofrontendBand';
import { ProjectIndex } from './features/project-index/ProjectIndex';
import { StatsBar } from './features/project-index/StatsBar';
import { SkillsSection } from './features/skills/SkillsSection';
import { DetailOverlay } from './features/toc/DetailOverlay';
import { SECTIONS } from './features/toc/sections';

function App() {
  const { language, toggleLanguage } = useLanguage();
  const t = useTranslate();
  // Id aktualnie otwartej sekcji "pełnoekranowej" (widok szczegółowy projektu, albo dział "O
  // mnie") albo null, gdy nic nie jest otwarte — patrz DetailOverlay.tsx. Etap 6 usunął ostatnią
  // sekcję, która była gdziekolwiek "ukryta za kliknięciem" bez własnego miejsca na stronie
  // (Kontakt, teraz ContactBanner) — cała nawigacja masthead jest odtąd zwykłymi kotwicami, bez
  // osobnego stanu do śledzenia.
  const [openSectionId, setOpenSectionId] = useState<string | null>(null);
  // Który dział "O mnie" ma się otworzyć od razu w AboutGallery (etap 5) — patrz
  // handleOpenAboutPassion niżej i AboutGallery.tsx. Tylko dla section.id==='about'.
  const [aboutPassionId, setAboutPassionId] = useState<string | null>(null);

  // Statki znowu bramkują resztę strony (real feedback właściciela, cofnięcie wcześniejszej
  // decyzji "treść dostępna od pierwszej sekundy" z pierwszej wersji tego redesignu) — patrz
  // BattleshipDrawer.tsx dla samej gry. `allShipsSunk` ustawiane przez jej `onAllShipsSunk`,
  // `skipped` przez jej przycisk "Pomiń" ORAZ przez kliknięcie dowolnej kotwicy (nawigacja/hero
  // CTA) prowadzącej do jeszcze zablokowanej treści — patrz handleGatedAnchorClick niżej.
  const [skipped, setSkipped] = useState(false);
  const [allShipsSunk, setAllShipsSunk] = useState(false);
  const unlocked = skipped || allShipsSunk;
  // Kotwica, do której trzeba doscrollować DOPIERO gdy zablokowana dziś treść realnie się
  // zamontuje (patrz efekt niżej) — klik na "Projekty"/"Kontakt"/hero CTA, zanim treść jest
  // odblokowana, nie może po prostu pozwolić przeglądarce na natywny skok do #id, bo ten element
  // jeszcze nie istnieje w DOM-ie.
  const [pendingAnchorId, setPendingAnchorId] = useState<string | null>(null);

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

  // <html lang> powinien zawsze odpowiadać realnie wyświetlanemu językowi — czytniki ekranu i
  // tłumacze przeglądarki go czytają, nie samą treść. Tytuł karty też — index.html ma go tylko
  // jako statyczny fallback (SEO/pierwsze wyrenderowanie przed hydracją), realny toggle powinien
  // go nadpisać, żeby karta przeglądarki nie została po polsku po przełączeniu na EN.
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t(
      'Jakub Siwiński — Różne technologie, ten sam uparty człowiek',
      'Jakub Siwiński — Different technologies, same stubborn guy',
    );
  }, [language, t]);

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

  // Realny bug zgłoszony przez właściciela: po zamknięciu widoku szczegółowego strona zostawała
  // przy tym samym window.scrollY, ale panel zwijał się do ~0 wysokości nad tym punktem — więc
  // to, co było wcześniej niżej (About/Umiejętności/...), po zwinięciu ląduje pod tym samym
  // scrollY, zamiast wysokości "Indeksu projektów"/"O mnie", skąd faktycznie się przyszło.
  // `#o-mnie` dla działu "O mnie" (jedyna sekcja bez własnego wiersza-kotwicy), `#projekty` dla
  // każdego projektu (wszystkie 4 żyją w jednym `<ProjectIndex>`, bez osobnych id per wiersz).
  const handleSectionChange = (id: string | null): void => {
    if (id === null && openSection) {
      const anchorId = openSection.id === 'about' ? 'o-mnie' : 'projekty';
      document.getElementById(anchorId)?.scrollIntoView({ block: 'start' });
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

  // Dopiero po odblokowaniu (setSkipped w handleGatedAnchorClick niżej) zablokowana treść
  // faktycznie się montuje — podwójny requestAnimationFrame czeka na realny paint po tym
  // montowaniu, zanim zmierzy pozycję celu (ten sam powód co PANEL_REVEAL_MS wyżej: odczyt
  // geometrii od razu po zmianie DOM bywa niewiarygodny).
  useEffect(() => {
    if (!unlocked || pendingAnchorId === null) {
      return;
    }
    const id = pendingAnchorId;
    setPendingAnchorId(null);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: 'start' });
      });
    });
  }, [unlocked, pendingAnchorId]);

  // Nagłówek i hero CTA prowadzą do kotwic, które przed odblokowaniem jeszcze nie istnieją w
  // DOM-ie (statki blokują wszystko poniżej hero) — klik na nie odblokowuje treść zamiast
  // pozwolić przeglądarce skoczyć donikąd, a docelowa sekcja i tak dostaje scroll po
  // zamontowaniu (efekt wyżej). Po odblokowaniu te same linki działają jak zwykłe kotwice.
  const handleGatedAnchorClick = (anchorId: string, event: MouseEvent): void => {
    if (unlocked) {
      return;
    }
    event.preventDefault();
    setSkipped(true);
    setPendingAnchorId(anchorId);
  };

  return (
    <div className="landing">
      <header className="masthead">
        <div className="masthead__inner">
          <span className="masthead__name">Jakub Siwiński</span>
          <nav className="masthead__nav">
            <a href="#projekty" onClick={(e) => handleGatedAnchorClick('projekty', e)}>
              {t('Projekty', 'Projects')}
            </a>
            <a href="#o-mnie" onClick={(e) => handleGatedAnchorClick('o-mnie', e)}>
              {t('O mnie', 'About')}
            </a>
            <a href="#umiejetnosci" onClick={(e) => handleGatedAnchorClick('umiejetnosci', e)}>
              {t('Umiejętności', 'Skills')}
            </a>
            <a href="#kontakt" onClick={(e) => handleGatedAnchorClick('kontakt', e)}>
              {t('Kontakt', 'Contact')}
            </a>
          </nav>
          {/* Realny, działający przełącznik (właściciel: "przetłumacz sobie teksty i włącz
              przełącznik") — nie tylko wizualny stan "PL / EN" obok siebie jak wcześniej.
              Świadomie pokazuje TYLKO język docelowy (na co przełączy klik), nie oba naraz —
              o połowę węższy, potrzebne, żeby w ogóle zmieścić się w nagłówku na 375px razem z 4
              linkami nawigacji (te same "nie mieści się w jednym wierszu" ograniczenia co
              wcześniej, ale teraz nie można już po prostu schować PL/EN na mobile — to realna
              funkcja, nie dekoracja). */}
          <button
            type="button"
            className="masthead__lang"
            onClick={toggleLanguage}
            aria-label={t('Przełącz na angielski', 'Switch to Polish')}
          >
            {language === 'pl' ? 'EN' : 'PL'}
          </button>
        </div>
      </header>

      <main className="hero">
        <div className="hero__inner">
          <div className="hero__text">
            <span className="hero__kicker">
              {t('Frontend developer/architect · 9 lat · Łódź', 'Frontend developer/architect · 9 years · Łódź')}
            </span>
            <h1 className="hero__title">
              {language === 'pl' ? (
                <>
                  <span className="hero__title-line">Różne technologie,</span>
                  <span className="hero__title-line hero__title-line--accent">ten sam</span>
                  <span className="hero__title-line hero__title-line--outline">uparty człowiek</span>
                </>
              ) : (
                <>
                  <span className="hero__title-line">Different technologies,</span>
                  <span className="hero__title-line hero__title-line--accent">same</span>
                  <span className="hero__title-line hero__title-line--outline">stubborn guy</span>
                </>
              )}
            </h1>
            <p className="hero__text-body">
              {t(
                "Angular, React, Vue i React Native spięte Web Components, Traefikiem i jednym pipeline'em. Cztery aplikacje na własnym VPS — każda działa samodzielnie, każda jest tu klikalna na żywo.",
                'Angular, React, Vue, and React Native tied together with Web Components, Traefik, and one pipeline. Four apps on my own VPS — each runs independently, each is clickable right here.',
              )}
            </p>
            <div className="hero__cta">
              <a
                className="hero__cta-primary"
                href="#projekty"
                onClick={(e) => handleGatedAnchorClick('projekty', e)}
              >
                {t('Zobacz projekty →', 'See the projects →')}
              </a>
              <a
                className="btn-outline"
                href="#kontakt"
                onClick={(e) => handleGatedAnchorClick('kontakt', e)}
              >
                {t('Napisz do mnie', 'Get in touch')}
              </a>
            </div>
          </div>
          <img
            className="hero__photo"
            src={heroPhoto}
            alt={t(
              'Mężczyzna oświetlony ekranem laptopa w ciemności, nocna jazda',
              'A man lit by his laptop screen in the dark, a night drive',
            )}
          />
        </div>
      </main>

      <BattleshipDrawer
        unlocked={unlocked}
        onAllShipsSunk={() => setAllShipsSunk(true)}
        onSkip={() => setSkipped(true)}
      />

      {/* Reszta strony montuje się dopiero po odblokowaniu (zatopienie wszystkich statków albo
          "Pomiń" w BattleshipDrawer) — nie warunkowa animacja zwijania jak gdzie indziej w tym
          repo (DetailOverlay, panele AboutGallery), tylko zwykłe warunkowe renderowanie: ta
          zablokowana treść to kilka pełnych sekcji ze zdjęciami i osadzonymi Web Componentami
          (mapa tour-guide, cała apka Insider), więc nie ma sensu ich w ogóle montować/ładować,
          dopóki naprawdę nie są widoczne. */}
      {unlocked && (
        <>
          <StatsBar />
          <ProjectIndex onOpenDetail={handleSectionChange} />
          <MicrofrontendBand />
          <AboutSection onOpenPassion={handleOpenAboutPassion} />
          <SkillsSection />

          {/* Nakładka na widok szczegółowy (projekt/dział "O mnie") — kolapsuje do ~0 wysokości,
              kiedy nic nie jest otwarte (patrz DetailOverlay.tsx/.css). */}
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
              <span className="site-footer__tagline">
                {t('Portfolio jako aplikacja · vol. 01', 'Portfolio as an app · vol. 01')}
              </span>
              <span className="site-footer__year">© 2026 Jakub Siwiński</span>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
