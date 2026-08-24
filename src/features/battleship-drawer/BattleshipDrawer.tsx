import { useState } from 'react';
import { Board } from './Board';
import { NOTES } from './notes';
import { TOTAL_SHIP_CELLS, useBattleship } from './use-battleship';
import type { FireResult } from './use-battleship';
import './BattleshipDrawer.css';

function buildStatusMessage(lastResult: FireResult | null): string {
  if (!lastResult) {
    return '';
  }
  if (lastResult.burst) {
    const { size, hits, misses, sunkTitles } = lastResult.burst;
    const base = `(Art)yleria: sprawdzono ${size} pól — ${hits} trafień, ${misses} pudeł.`;
    return sunkTitles.length > 0 ? `${base} Odkryto: ${sunkTitles.join(', ')}.` : base;
  }
  if (!lastResult.hit) {
    return `Pudło (${lastResult.coordinate}).`;
  }
  if (lastResult.sunk) {
    return `Zatopiony! Odkryto notkę: ${lastResult.noteTitle}.`;
  }
  return `Trafienie (${lastResult.coordinate})! Statek jeszcze nie zatopiony.`;
}

export function BattleshipDrawer() {
  const [open, setOpen] = useState(false);
  const {
    cellStatus,
    revealedNoteIds,
    hitsCount,
    fireAt,
    lastResult,
    artilleryCharges,
    artilleryArmed,
    toggleArtillery,
  } = useBattleship();

  const revealedNotes = NOTES.filter((note) => revealedNoteIds.has(note.id));
  const statusMessage = buildStatusMessage(lastResult);

  return (
    <section className="battleship-drawer" aria-labelledby="battleship-drawer-heading">
      <div className="battleship-drawer__header">
        <div className="battleship-drawer__intro">
          <span className="battleship-drawer__kicker">Opcjonalnie</span>
          <h3 id="battleship-drawer-heading" className="battleship-drawer__title">
            Statki — szuflada z boku
          </h3>
          <p className="battleship-drawer__body">
            Indeks powyżej jest pełny od pierwszej sekundy — gra nic nie blokuje. Trafienia
            dorzucają notki „za kulisami” z każdego projektu: realne bugi, decyzje, koszty.
          </p>
          <button
            type="button"
            className="btn-outline"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
          >
            {open ? 'Schowaj planszę ↑' : 'Otwórz planszę →'}
          </button>
        </div>
        <div className="battleship-drawer__stats" aria-live="polite">
          <p className="battleship-drawer__stat">
            Trafienia: <strong className="battleship-drawer__stat-value">{hitsCount}</strong> /{' '}
            {TOTAL_SHIP_CELLS}
          </p>
          <p className="battleship-drawer__stat">
            Notki odkryte:{' '}
            <strong className="battleship-drawer__stat-value">{revealedNotes.length}</strong> /{' '}
            {NOTES.length}
          </p>
          <p className="battleship-drawer__stat">
            (Art)yleria: <strong className="battleship-drawer__stat-value">{artilleryCharges}</strong>
          </p>
        </div>
      </div>

      {/* grid-template-rows: 0fr↔1fr — ta sama technika co Toc.css (.toc__view-panel), z handoffu
          wprost jako "do reużycia, nie do wymyślania od nowa". */}
      <div className={`battleship-drawer__panel ${open ? 'battleship-drawer__panel--open' : ''}`}>
        <div className="battleship-drawer__panel-inner">
          <div className="battleship-drawer__content">
            <div className="battleship-drawer__board-col">
              <Board cellStatus={cellStatus} onFire={fireAt} artilleryArmed={artilleryArmed} />

              <div className="battleship-drawer__artillery">
                <button
                  type="button"
                  className={`battleship-drawer__artillery-btn ${
                    artilleryArmed ? 'battleship-drawer__artillery-btn--armed' : ''
                  }`}
                  onClick={toggleArtillery}
                  disabled={artilleryCharges <= 0}
                >
                  🎯 (Art)yleria ({artilleryCharges})
                </button>
                <p className="battleship-drawer__artillery-hint">
                  {artilleryArmed
                    ? 'Uzbrojona — kliknij dowolne pole, żeby sprawdzić naraz kwadrat 3×3 wokół niego.'
                    : 'Specjalny strzał: sprawdza naraz kwadrat 3×3 zamiast jednego pola. Ograniczona liczba użyć na tę grę.'}
                </p>
              </div>

              <p className="battleship-drawer__status" role="status" aria-live="polite">
                {statusMessage}
              </p>
            </div>

            <div className="battleship-drawer__notes">
              {revealedNotes.length === 0 ? (
                <p className="battleship-drawer__notes-empty">
                  Jeszcze nic nie odkryto — zatop statek na planszy obok.
                </p>
              ) : (
                revealedNotes.map((note) => (
                  <div key={note.id} className="battleship-drawer__note">
                    <h4 className="battleship-drawer__note-title">{note.title}</h4>
                    <p className="battleship-drawer__note-body">{note.body}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
