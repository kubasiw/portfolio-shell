import { useMemo, useState } from 'react';
import { Board } from './Board';
import { ProjectCard } from './ProjectCard';
import { SectionDetail } from './SectionDetail';
import type { NavTarget } from './sections';
import { SECTIONS } from './sections';
import { useBattleship } from './use-battleship';
import './Toc.css';

interface TocProps {
  activeNavTarget: NavTarget | null;
}

function buildStatusMessage(
  lastResult: ReturnType<typeof useBattleship>['lastResult'],
): string {
  if (!lastResult) {
    return '';
  }
  if (lastResult.burst) {
    const { size, hits, misses, sunkTitles } = lastResult.burst;
    const base = `(Art)yleria: sprawdzono ${size} pól — ${hits} trafień, ${misses} pudeł.`;
    return sunkTitles.length > 0 ? `${base} Zatopiono: ${sunkTitles.join(', ')}.` : base;
  }
  if (!lastResult.hit) {
    return `Pudło (${lastResult.coordinate}).`;
  }
  if (lastResult.sunk) {
    return `Zatopiony! Odblokowano: ${lastResult.sectionTitle}.`;
  }
  return `Trafienie (${lastResult.coordinate})! Statek jeszcze nie zatopiony.`;
}

export function Toc({ activeNavTarget }: TocProps) {
  const {
    cellStatus,
    unlockedSectionIds,
    fireAt,
    lastResult,
    artilleryCharges,
    artilleryArmed,
    toggleArtillery,
  } = useBattleship();
  const [skipped, setSkipped] = useState(false);
  // Niezależny od `skipped` — jedyny sposób wejścia w ten stan to skip (skip ustawia oba naraz),
  // ale odtąd przełącza się osobno w obie strony (patrz przycisk w .toc__intro niżej).
  const [boardCollapsed, setBoardCollapsed] = useState(false);
  // Faza 3.5, punkt e — stan komponentu (nie router), zgodnie z ustaleniem: id aktualnie otwartej
  // sekcji "pełnoekranowej" (about/skills/contact) albo null, gdy jesteśmy w normalnym spisie
  // treści. Nic pod spodem (plansza, jej stan) się nie odmontowuje przy otwarciu — tylko wizualnie
  // znika, patrz .toc__view-panel w Toc.css — więc powrót zastaje planszę dokładnie tam, gdzie się
  // ją zostawiło.
  const [openSectionId, setOpenSectionId] = useState<string | null>(null);

  const effectiveUnlocked = useMemo((): ReadonlySet<string> => {
    if (skipped) {
      return new Set(SECTIONS.map((section) => section.id));
    }
    return unlockedSectionIds;
  }, [skipped, unlockedSectionIds]);

  const openSection = useMemo(
    () => SECTIONS.find((section) => section.id === openSectionId) ?? null,
    [openSectionId],
  );

  const statusMessage = buildStatusMessage(lastResult);

  const handleActionClick = (): void => {
    if (!skipped) {
      setSkipped(true);
      setBoardCollapsed(true);
      return;
    }
    setBoardCollapsed((prev) => !prev);
  };

  const actionLabel = !skipped
    ? 'Przejdź od razu do treści →'
    : boardCollapsed
      ? 'Otwórz grę w statki →'
      : 'Schowaj planszę ↑';

  const detailOpen = openSectionId !== null;

  return (
    <section className="toc" aria-labelledby="toc-heading">
      <div
        className={`toc__view-panel ${detailOpen ? '' : 'toc__view-panel--open'}`}
        aria-hidden={detailOpen}
      >
        <div className="toc__view-panel-inner">
          <div className="toc__intro">
            <div>
              <h2 id="toc-heading" className="toc__heading">
                {skipped ? 'Spis treści' : 'Spis treści — zatop statek, żeby odkryć'}
              </h2>
              <p
                className={`toc__subheading ${!skipped || boardCollapsed ? 'toc__subheading--hidden' : ''}`}
              >
                Wszystko już odblokowane — i tak możesz zagrać w statki, jeśli chcesz.
              </p>
            </div>
            <button type="button" className="toc__skip" onClick={handleActionClick}>
              {actionLabel}
            </button>
          </div>

          <div className={`toc__layout ${boardCollapsed ? 'toc__layout--collapsed' : ''}`}>
            <div className="toc__board-col">
              <Board cellStatus={cellStatus} onFire={fireAt} artilleryArmed={artilleryArmed} />

              <div className="toc__artillery">
                <button
                  type="button"
                  className={`toc__artillery-btn ${artilleryArmed ? 'toc__artillery-btn--armed' : ''}`}
                  onClick={toggleArtillery}
                  disabled={artilleryCharges <= 0}
                >
                  🎯 (Art)yleria ({artilleryCharges})
                </button>
                <p className="toc__artillery-hint">
                  {artilleryArmed
                    ? 'Uzbrojona — kliknij dowolne pole, żeby sprawdzić naraz kwadrat 3×3 wokół niego.'
                    : 'Specjalny strzał: sprawdza naraz kwadrat 3×3 zamiast jednego pola. Ograniczona liczba użyć na tę grę.'}
                </p>
              </div>

              <p className="toc__status" role="status" aria-live="polite">
                {statusMessage}
              </p>
            </div>
            <div className="toc__cards">
              {SECTIONS.map((section) => (
                <ProjectCard
                  key={section.id}
                  section={section}
                  locked={!effectiveUnlocked.has(section.id)}
                  highlighted={activeNavTarget !== null && section.navGroup === activeNavTarget}
                  onOpenDetail={setOpenSectionId}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`toc__view-panel ${detailOpen ? 'toc__view-panel--open' : ''}`}
        aria-hidden={!detailOpen}
      >
        <div className="toc__view-panel-inner">
          {openSection && (
            <SectionDetail section={openSection} onClose={() => setOpenSectionId(null)} />
          )}
        </div>
      </div>
    </section>
  );
}
