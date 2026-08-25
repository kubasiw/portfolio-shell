import { useState } from 'react';
import { useTranslate } from '../../i18n/LanguageContext';
import { Board } from './Board';
import { NOTES } from './notes';
import { TOTAL_SHIP_CELLS, useBattleship } from './use-battleship';
import type { FireResult } from './use-battleship';
import './BattleshipDrawer.css';

function noteTitle(id: string, t: (pl: string, en: string) => string): string {
  const note = NOTES.find((n) => n.id === id);
  return note ? t(note.titlePl, note.titleEn) : id;
}

function buildStatusMessage(
  lastResult: FireResult | null,
  t: (pl: string, en: string) => string,
): string {
  if (!lastResult) {
    return '';
  }
  if (lastResult.burst) {
    const { size, hits, misses, sunkNoteIds } = lastResult.burst;
    const base = t(
      `(Art)yleria: sprawdzono ${size} pól — ${hits} trafień, ${misses} pudeł.`,
      `(Art)illery: checked ${size} cells — ${hits} hits, ${misses} misses.`,
    );
    if (sunkNoteIds.length === 0) {
      return base;
    }
    const titles = sunkNoteIds.map((id) => noteTitle(id, t)).join(', ');
    return `${base} ${t('Odkryto', 'Revealed')}: ${titles}.`;
  }
  if (!lastResult.hit) {
    return t(`Pudło (${lastResult.coordinate}).`, `Miss (${lastResult.coordinate}).`);
  }
  if (lastResult.sunk && lastResult.noteId) {
    return t(
      `Zatopiony! Odkryto notkę: ${noteTitle(lastResult.noteId, t)}.`,
      `Sunk! Revealed a note: ${noteTitle(lastResult.noteId, t)}.`,
    );
  }
  return t(
    `Trafienie (${lastResult.coordinate})! Statek jeszcze nie zatopiony.`,
    `Hit (${lastResult.coordinate})! Ship not sunk yet.`,
  );
}

export function BattleshipDrawer() {
  const t = useTranslate();
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
  const statusMessage = buildStatusMessage(lastResult, t);

  return (
    <section className="battleship-drawer" aria-labelledby="battleship-drawer-heading">
      <div className="battleship-drawer__header">
        <div className="battleship-drawer__intro">
          <span className="battleship-drawer__kicker">{t('Opcjonalnie', 'Optional')}</span>
          <h3 id="battleship-drawer-heading" className="battleship-drawer__title">
            {t('Zagraj w statki', 'Play battleship')}
          </h3>
          <p className="battleship-drawer__body">
            {t(
              'Indeks powyżej jest pełny od pierwszej sekundy — gra nic nie blokuje. Trafienia dorzucają notki „za kulisami” z każdego projektu: realne bugi, decyzje, koszty.',
              "The index above is complete from the first second — the game blocks nothing. Hits reveal \"behind the scenes\" notes from each project: real bugs, decisions, costs.",
            )}
          </p>
          <button
            type="button"
            className="btn-outline"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
          >
            {open ? t('Schowaj planszę ↑', 'Hide the board ↑') : t('Otwórz planszę →', 'Open the board →')}
          </button>
        </div>
        <div className="battleship-drawer__stats" aria-live="polite">
          <p className="battleship-drawer__stat">
            {t('Trafienia', 'Hits')}: <strong className="battleship-drawer__stat-value">{hitsCount}</strong> /{' '}
            {TOTAL_SHIP_CELLS}
          </p>
          <p className="battleship-drawer__stat">
            {t('Notki odkryte', 'Notes revealed')}:{' '}
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
                    ? t(
                        'Uzbrojona — kliknij dowolne pole, żeby sprawdzić naraz kwadrat 3×3 wokół niego.',
                        'Armed — click any cell to check a whole 3×3 square around it at once.',
                      )
                    : t(
                        'Specjalny strzał: sprawdza naraz kwadrat 3×3 zamiast jednego pola. Ograniczona liczba użyć na tę grę.',
                        'A special shot: checks a 3×3 square at once instead of one cell. Limited uses per game.',
                      )}
                </p>
              </div>

              <p className="battleship-drawer__status" role="status" aria-live="polite">
                {statusMessage}
              </p>
            </div>

            <div className="battleship-drawer__notes">
              {revealedNotes.length === 0 ? (
                <div className="battleship-drawer__note battleship-drawer__note--empty">
                  <p className="battleship-drawer__notes-empty">
                    {t(
                      'Jeszcze nic nie odkryto — zatop statek na planszy obok.',
                      "Nothing revealed yet — sink a ship on the board.",
                    )}
                  </p>
                </div>
              ) : (
                revealedNotes.map((note) => (
                  <div key={note.id} className="battleship-drawer__note">
                    <h4 className="battleship-drawer__note-title">{t(note.titlePl, note.titleEn)}</h4>
                    <p className="battleship-drawer__note-body">{t(note.bodyPl, note.bodyEn)}</p>
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
