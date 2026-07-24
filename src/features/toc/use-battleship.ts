import { useMemo, useState } from 'react';
import { SECTIONS } from './sections';

export const BOARD_COLS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'] as const;
export const BOARD_ROWS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] as const;

// Klasyczny zestaw wielkości statków (1,2,3,4,5) + dodatkowy 1x1, żeby dopasować liczbę
// statków do liczby sekcji spisu treści (6) — każda sekcja dostaje dokładnie jeden statek.
const SHIP_SIZES = [1, 1, 2, 3, 4, 5] as const;

// "(Art)yleria" — specjalny strzał sprawdzający naraz kwadrat 3×3 (promień 1 wokół celu),
// ograniczony liczbą użyć na sesję (jedną planszę), żeby zostać ciekawym przyspieszeniem,
// nie sposobem na trywialne rozwiązanie całej gry.
export const ARTILLERY_CHARGES = 2;
export const ARTILLERY_RADIUS = 1;

export type Coordinate = string;
export type CellStatus = 'unknown' | 'hit' | 'miss';

export interface BurstResult {
  size: number;
  hits: number;
  misses: number;
  sunkTitles: string[];
}

export interface FireResult {
  coordinate: Coordinate;
  hit: boolean;
  sunk: boolean;
  sectionTitle?: string;
  burst?: BurstResult;
}

export interface BattleshipState {
  cellStatus: (coordinate: Coordinate) => CellStatus;
  unlockedSectionIds: ReadonlySet<string>;
  fireAt: (coordinate: Coordinate) => void;
  lastResult: FireResult | null;
  artilleryCharges: number;
  artilleryArmed: boolean;
  toggleArtillery: () => void;
}

interface ShipPlacement {
  sectionId: string;
  cells: Coordinate[];
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function coordinateAt(colIndex: number, rowIndex: number): Coordinate | null {
  if (colIndex < 0 || colIndex >= BOARD_COLS.length || rowIndex < 0 || rowIndex >= BOARD_ROWS.length) {
    return null;
  }
  return `${BOARD_COLS[colIndex]}${BOARD_ROWS[rowIndex]}`;
}

function parseCoordinate(coordinate: Coordinate): { colIndex: number; rowIndex: number } {
  const col = coordinate[0];
  const row = coordinate.slice(1);
  return {
    colIndex: (BOARD_COLS as readonly string[]).indexOf(col),
    rowIndex: (BOARD_ROWS as readonly string[]).indexOf(row),
  };
}

// Współdzielona z Board.tsx (podgląd obszaru na hover, gdy "(Art)yleria" jest uzbrojona) —
// jedno źródło prawdy dla geometrii kwadratu wokół celu.
export function getSquareArea(center: Coordinate, radius: number): Coordinate[] {
  const { colIndex, rowIndex } = parseCoordinate(center);
  const cells: Coordinate[] = [];
  for (let dc = -radius; dc <= radius; dc += 1) {
    for (let dr = -radius; dr <= radius; dr += 1) {
      const coordinate = coordinateAt(colIndex + dc, rowIndex + dr);
      if (coordinate) {
        cells.push(coordinate);
      }
    }
  }
  return cells;
}

// Sąsiedzi we wszystkich 8 kierunkach (łącznie z przekątnymi) — używane do wymuszenia klasycznej
// zasady "statki się nie stykają" (nawet rogami), nie tylko "nie nachodzą na siebie".
function neighbors8(coordinate: Coordinate): Coordinate[] {
  const { colIndex, rowIndex } = parseCoordinate(coordinate);
  const result: Coordinate[] = [];
  for (let dc = -1; dc <= 1; dc += 1) {
    for (let dr = -1; dr <= 1; dr += 1) {
      if (dc === 0 && dr === 0) {
        continue;
      }
      const neighbor = coordinateAt(colIndex + dc, rowIndex + dr);
      if (neighbor) {
        result.push(neighbor);
      }
    }
  }
  return result;
}

function placeOneShip(size: number, blocked: ReadonlySet<Coordinate>): Coordinate[] {
  const maxAttempts = 500;
  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    const horizontal = Math.random() < 0.5;
    const startCol = Math.floor(Math.random() * BOARD_COLS.length);
    const startRow = Math.floor(Math.random() * BOARD_ROWS.length);
    const cells: Coordinate[] = [];
    let valid = true;

    for (let i = 0; i < size; i += 1) {
      const colIndex = horizontal ? startCol + i : startCol;
      const rowIndex = horizontal ? startRow : startRow + i;
      if (colIndex >= BOARD_COLS.length || rowIndex >= BOARD_ROWS.length) {
        valid = false;
        break;
      }
      const coordinate = `${BOARD_COLS[colIndex]}${BOARD_ROWS[rowIndex]}`;
      if (blocked.has(coordinate)) {
        valid = false;
        break;
      }
      cells.push(coordinate);
    }

    if (valid) {
      return cells;
    }
  }
  throw new Error('Nie udało się rozstawić statku — brak miejsca na planszy.');
}

function placeShipsOnce(): ShipPlacement[] {
  const shuffledSections = shuffle(SECTIONS);
  // "blocked" zawiera pola już zajętych statków ORAZ ich pełną otoczkę (8 sąsiadów) — nowy statek
  // nie może wylądować na żadnym z tych pól, więc żadne dwa statki nigdy się nie stykają, nawet
  // rogami.
  const blocked = new Set<Coordinate>();
  const placements: ShipPlacement[] = [];

  shuffledSections.forEach((section, index) => {
    const size = SHIP_SIZES[index];
    const cells = placeOneShip(size, blocked);
    cells.forEach((coordinate) => {
      blocked.add(coordinate);
      neighbors8(coordinate).forEach((neighbor) => blocked.add(neighbor));
    });
    placements.push({ sectionId: section.id, cells });
  });

  return placements;
}

// Bufor "bez stykania" realnie zmniejsza dostępną przestrzeń, więc pojedyncze losowanie czasem
// nie znajdzie miejsca na większy statek pod koniec — zamiast wywalać całą appkę, próbujemy całe
// rozstawienie od nowa (świeża losowa kolejność/pozycje), zamiast pojedynczego statku.
function placeShips(): ShipPlacement[] {
  const maxGlobalAttempts = 100;
  for (let attempt = 0; attempt < maxGlobalAttempts; attempt += 1) {
    try {
      return placeShipsOnce();
    } catch {
      // spróbuj ponownie z zupełnie nowym losowym rozstawieniem
    }
  }
  throw new Error('Nie udało się rozstawić statków — brak miejsca na planszy.');
}

function buildLookups(placements: ShipPlacement[]): {
  shipsByCoordinate: Map<Coordinate, string>;
  cellsBySection: Map<string, Coordinate[]>;
} {
  const shipsByCoordinate = new Map<Coordinate, string>();
  const cellsBySection = new Map<string, Coordinate[]>();
  placements.forEach(({ sectionId, cells }) => {
    cellsBySection.set(sectionId, cells);
    cells.forEach((coordinate) => shipsByCoordinate.set(coordinate, sectionId));
  });
  return { shipsByCoordinate, cellsBySection };
}

interface GameState {
  revealed: Map<Coordinate, CellStatus>;
  lastResult: FireResult | null;
  artilleryCharges: number;
  artilleryArmed: boolean;
}

function isSunk(
  sectionId: string,
  cellsBySection: Map<string, Coordinate[]>,
  revealedMap: Map<Coordinate, CellStatus>,
): boolean {
  const cells = cellsBySection.get(sectionId) ?? [];
  return cells.length > 0 && cells.every((coordinate) => revealedMap.get(coordinate) === 'hit');
}

function fireSingleCell(
  coordinate: Coordinate,
  prev: GameState,
  shipsByCoordinate: Map<Coordinate, string>,
  cellsBySection: Map<string, Coordinate[]>,
): GameState {
  if (prev.revealed.has(coordinate)) {
    return prev;
  }
  const sectionId = shipsByCoordinate.get(coordinate);
  const status: CellStatus = sectionId ? 'hit' : 'miss';
  const nextRevealed = new Map(prev.revealed).set(coordinate, status);
  const sunk = sectionId ? isSunk(sectionId, cellsBySection, nextRevealed) : false;
  const section = sectionId ? SECTIONS.find((s) => s.id === sectionId) : undefined;
  return {
    ...prev,
    revealed: nextRevealed,
    lastResult: { coordinate, hit: status === 'hit', sunk, sectionTitle: section?.title },
  };
}

function fireArtilleryBurst(
  center: Coordinate,
  prev: GameState,
  shipsByCoordinate: Map<Coordinate, string>,
  cellsBySection: Map<string, Coordinate[]>,
): GameState {
  const area = getSquareArea(center, ARTILLERY_RADIUS);
  const nextRevealed = new Map(prev.revealed);
  let hits = 0;
  let misses = 0;

  area.forEach((coordinate) => {
    if (nextRevealed.has(coordinate)) {
      return;
    }
    const sectionId = shipsByCoordinate.get(coordinate);
    const status: CellStatus = sectionId ? 'hit' : 'miss';
    nextRevealed.set(coordinate, status);
    if (status === 'hit') {
      hits += 1;
    } else {
      misses += 1;
    }
  });

  const sunkTitles: string[] = [];
  cellsBySection.forEach((_cells, sectionId) => {
    const wasSunk = isSunk(sectionId, cellsBySection, prev.revealed);
    const nowSunk = isSunk(sectionId, cellsBySection, nextRevealed);
    if (!wasSunk && nowSunk) {
      const section = SECTIONS.find((s) => s.id === sectionId);
      if (section) {
        sunkTitles.push(section.title);
      }
    }
  });

  return {
    revealed: nextRevealed,
    artilleryCharges: prev.artilleryCharges - 1,
    artilleryArmed: false,
    lastResult: {
      coordinate: center,
      hit: hits > 0,
      sunk: sunkTitles.length > 0,
      burst: { size: hits + misses, hits, misses, sunkTitles },
    },
  };
}

export function useBattleship(): BattleshipState {
  const [{ shipsByCoordinate, cellsBySection }] = useState(() => buildLookups(placeShips()));
  const [game, setGame] = useState<GameState>(() => ({
    revealed: new Map(),
    lastResult: null,
    artilleryCharges: ARTILLERY_CHARGES,
    artilleryArmed: false,
  }));

  const unlockedSectionIds = useMemo((): ReadonlySet<string> => {
    const ids = new Set<string>();
    cellsBySection.forEach((_cells, sectionId) => {
      if (isSunk(sectionId, cellsBySection, game.revealed)) {
        ids.add(sectionId);
      }
    });
    return ids;
  }, [game.revealed, cellsBySection]);

  const cellStatus = (coordinate: Coordinate): CellStatus =>
    game.revealed.get(coordinate) ?? 'unknown';

  const fireAt = (coordinate: Coordinate): void => {
    // Funkcyjny setState oparty wyłącznie na `prev` — React 19 batchuje wiele wywołań w tym
    // samym ticku, więc czytanie stanu z domknięcia (zamiast z `prev`) nadpisywałoby
    // wcześniejsze trafienia/uzbrojenie zamiast je poprawnie kumulować.
    setGame((prev) => {
      if (prev.artilleryArmed) {
        return fireArtilleryBurst(coordinate, prev, shipsByCoordinate, cellsBySection);
      }
      return fireSingleCell(coordinate, prev, shipsByCoordinate, cellsBySection);
    });
  };

  const toggleArtillery = (): void => {
    setGame((prev) => {
      if (prev.artilleryCharges <= 0) {
        return prev;
      }
      return { ...prev, artilleryArmed: !prev.artilleryArmed };
    });
  };

  return {
    cellStatus,
    unlockedSectionIds,
    fireAt,
    lastResult: game.lastResult,
    artilleryCharges: game.artilleryCharges,
    artilleryArmed: game.artilleryArmed,
    toggleArtillery,
  };
}
