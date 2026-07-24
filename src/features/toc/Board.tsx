import { Fragment, useMemo, useState } from 'react';
import { ARTILLERY_RADIUS, BOARD_COLS, BOARD_ROWS, getSquareArea } from './use-battleship';
import type { CellStatus, Coordinate } from './use-battleship';
import './Board.css';

interface BoardProps {
  cellStatus: (coordinate: Coordinate) => CellStatus;
  onFire: (coordinate: Coordinate) => void;
  artilleryArmed: boolean;
}

function cellLabel(coordinate: Coordinate, status: CellStatus): string {
  if (status === 'hit') {
    return `Pole ${coordinate}, trafienie`;
  }
  if (status === 'miss') {
    return `Pole ${coordinate}, pudło`;
  }
  return `Pole ${coordinate}, nieodkryte`;
}

function cellMark(status: CellStatus): string {
  return status === 'hit' ? '✕' : '';
}

export function Board({ cellStatus, onFire, artilleryArmed }: BoardProps) {
  const [hovered, setHovered] = useState<Coordinate | null>(null);

  const previewArea = useMemo((): ReadonlySet<Coordinate> => {
    if (!artilleryArmed || !hovered) {
      return new Set();
    }
    return new Set(getSquareArea(hovered, ARTILLERY_RADIUS));
  }, [artilleryArmed, hovered]);

  const hoveredCol = hovered ? hovered[0] : null;
  const hoveredRow = hovered ? hovered.slice(1) : null;

  return (
    <div
      className={`board ${artilleryArmed ? 'board--armed' : ''}`}
      role="group"
      aria-label="Plansza w statki — kliknij pole, aby odkryć sekcję portfolio"
    >
      <div className="board__grid">
        <div className="board__corner" aria-hidden="true" />
        {BOARD_COLS.map((col) => (
          <div
            key={col}
            className={`board__col-header ${col === hoveredCol ? 'board__col-header--active' : ''}`}
            aria-hidden="true"
          >
            {col}
          </div>
        ))}
        {BOARD_ROWS.map((row) => (
          <Fragment key={row}>
            <div
              className={`board__row-header ${row === hoveredRow ? 'board__row-header--active' : ''}`}
              aria-hidden="true"
            >
              {row}
            </div>
            {BOARD_COLS.map((col) => {
              const coordinate = `${col}${row}`;
              const status = cellStatus(coordinate);
              const classNames = [
                'board__cell',
                `board__cell--${status}`,
                previewArea.has(coordinate) ? 'board__cell--preview' : '',
              ]
                .filter(Boolean)
                .join(' ');
              return (
                <button
                  key={coordinate}
                  type="button"
                  className={classNames}
                  onClick={() => onFire(coordinate)}
                  onMouseEnter={() => setHovered(coordinate)}
                  onMouseLeave={() =>
                    setHovered((current) => (current === coordinate ? null : current))
                  }
                  disabled={status !== 'unknown' && !artilleryArmed}
                  aria-label={cellLabel(coordinate, status)}
                >
                  {cellMark(status)}
                </button>
              );
            })}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
