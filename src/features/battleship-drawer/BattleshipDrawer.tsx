import { useEffect, useState } from 'react';
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

interface BattleshipDrawerProps {
  unlocked: boolean;
  onAllShipsSunk: () => void;
  onSkip: () => void;
}

// Statki znowu bramkują resztę strony (real feedback po "content dostępny od pierwszej sekundy"
// z pierwszej wersji redesignu "Atrament") — patrz App.tsx dla samej bramki (co jest chowane, gdzie
// ten komponent teraz siedzi w kolejności sekcji). Ten komponent zostaje self-contained
// (`useBattleship()` nadal tu, nie podniesiony do App) — App potrzebuje tylko wiedzieć "wszystkie
// zatopione" i "użytkownik kliknął pomiń", stąd 2 callbacki zamiast całego stanu gry w propsach.
export function BattleshipDrawer({ unlocked, onAllShipsSunk, onSkip }: BattleshipDrawerProps) {
  const t = useTranslate();
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
  const allSunk = revealedNotes.length === NOTES.length;

  // Wywołane bezwarunkowo za każdym razem, gdy warunek jest spełniony — setState w App.tsx na tę
  // samą wartość (true->true) i tak nie wywoła dodatkowego renderu, więc nie trzeba pilnować, żeby
  // wywołać to dokładnie raz.
  useEffect(() => {
    if (allSunk) {
      onAllShipsSunk();
    }
  }, [allSunk, onAllShipsSunk]);

  // Zwinięta plansza po odblokowaniu — realny feedback właściciela: skoro plansza przestała
  // blokować cokolwiek (albo zatopiono wszystkie statki, albo kliknięto "Pomiń"), nie musi już
  // zajmować pełnej wysokości nad resztą strony. `[unlocked]` w deps, nie `[allSunk]`/`onSkip` —
  // `unlocked` zmienia wartość dokładnie raz (false→true, nigdy z powrotem), więc ten efekt
  // odpala się dokładnie raz, w momencie odblokowania — późniejsze ręczne rozwinięcie (przycisk
  // niżej) nie zostanie przez niego cofnięte.
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    if (unlocked) {
      setCollapsed(true);
    }
  }, [unlocked]);

  return (
    <section className="battleship-drawer" aria-labelledby="battleship-drawer-heading">
      <div className="battleship-drawer__header">
        <div className="battleship-drawer__intro">
          <span className="battleship-drawer__kicker">
            {unlocked ? t('Odblokowane', 'Unlocked') : t('Zagraj albo pomiń', 'Play or skip')}
          </span>
          <h3 id="battleship-drawer-heading" className="battleship-drawer__title">
            {t('Zagraj w statki', 'Play battleship')}
          </h3>
          <p className="battleship-drawer__body">
            {unlocked
              ? t(
                  'Reszta portfolio jest już odblokowana. Możesz dograć planszę do końca — każde trafienie wciąż odkrywa notkę „za kulisami” z jednego z projektów.',
                  "The rest of the portfolio is already unlocked. Feel free to keep playing — every hit still reveals a \"behind the scenes\" note from one of the projects.",
                )
              : t(
                  'Zatop wszystkie statki, żeby odsłonić resztę portfolio — każde trafienie odkrywa notkę „za kulisami” z jednego z projektów: realne bugi, decyzje, koszty.',
                  'Sink every ship to reveal the rest of the portfolio — each hit uncovers a "behind the scenes" note from one of the projects: real bugs, decisions, costs.',
                )}
          </p>
          {!unlocked && (
            <button type="button" className="battleship-drawer__skip" onClick={onSkip}>
              {t('Pomiń i przejdź do treści →', 'Skip and go to the content →')}
            </button>
          )}
          {unlocked && (
            <button
              type="button"
              className="btn-outline"
              onClick={() => setCollapsed((prev) => !prev)}
              aria-expanded={!collapsed}
            >
              {collapsed ? t('Pokaż planszę ↓', 'Show the board ↓') : t('Schowaj planszę ↑', 'Hide the board ↑')}
            </button>
          )}
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

      {/* grid-template-rows: 0fr↔1fr — ten sam wzorzec co DetailOverlay.css/AboutGallery.css,
          teraz też tutaj: zwija się automatycznie po odblokowaniu (efekt wyżej), rozwijalne z
          powrotem przyciskiem "Pokaż planszę". */}
      <div className={`battleship-drawer__panel ${collapsed ? '' : 'battleship-drawer__panel--open'}`}>
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
                      'Nothing revealed yet — sink a ship on the board.',
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
