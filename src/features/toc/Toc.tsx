import { useMemo, useState } from 'react';
import { Board } from './Board';
import { ProjectCard } from './ProjectCard';
import { SECTIONS } from './sections';
import { useBattleship } from './use-battleship';
import './Toc.css';

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

export function Toc() {
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

  const effectiveUnlocked = useMemo((): ReadonlySet<string> => {
    if (skipped) {
      return new Set(SECTIONS.map((section) => section.id));
    }
    return unlockedSectionIds;
  }, [skipped, unlockedSectionIds]);

  const statusMessage = buildStatusMessage(lastResult);

  return (
    <section className="toc" aria-labelledby="toc-heading">
      <div className="toc__intro">
        <h2 id="toc-heading" className="toc__heading">
          Spis treści — zatop statek, żeby odkryć
        </h2>
        <button type="button" className="toc__skip" onClick={() => setSkipped(true)}>
          Przejdź od razu do treści →
        </button>
      </div>

      <div className="toc__layout">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
