import { useEffect, useRef, useState } from 'react';

// Musi się zgadzać z Toc.css/Board.css (ten sam próg reżimu "obok kafelków" vs "nad kafelkami")
// i z .toc__board-sticky's `top` w Toc.css (~55px wysokość .masthead + 15px odstępu, sprawdzone
// na żywo) — trzymane tu jako jedna stała, nie duplikowane na sztywno w logice niżej.
const WIDE_REGIME_QUERY = '(min-width: 900px)';
const TOP_OFFSET_PX = 70;

export type StickyBoardMode = 'static' | 'fixed' | 'bottom';

export interface StickyBoardStyle {
  position?: 'fixed';
  top?: number;
  left?: number;
  width?: number;
}

/*
 * CSS `position: sticky` na .toc__board-sticky nie działa — jeden z przodków
 * (.toc__view-panel-inner) ma na stałe `overflow: hidden`, wymagane przez istniejący mechanizm
 * przełącznika spis-treści ↔ widok szczegółowy (grid-template-rows: 0fr↔1fr, patrz Toc.css) i nie
 * do usunięcia bez zepsucia tamtej funkcji. Sprawdzone bezpośrednim testem A/B na izolowanej
 * reprodukcji (ten sam layout, z i bez overflow:hidden na przodku) — potwierdzone, nie
 * teoretyczne. To jest więc ręczna, JS-owa wersja tego samego efektu: `position: fixed` z
 * przeliczanymi na bieżąco top/left/width, przełączana na scroll.
 *
 * .toc__board-col (kontener) jest już rozciągnięty do wysokości .toc__cards-wrap przez
 * `align-items: stretch` w .toc__layout — jego wysokość NIE zależy od własnej zawartości, więc
 * wyjęcie .toc__board-sticky z normalnego przepływu (position:fixed) nie zapada się/nie
 * przesuwa reszty układu; nie jest potrzebny żaden placeholder.
 */
export function useStickyBoard(enabled: boolean): {
  containerRef: React.RefObject<HTMLDivElement | null>;
  stickyRef: React.RefObject<HTMLDivElement | null>;
  mode: StickyBoardMode;
  style: StickyBoardStyle;
} {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<StickyBoardMode>('static');
  const [style, setStyle] = useState<StickyBoardStyle>({});

  useEffect(() => {
    if (!enabled) {
      setMode('static');
      setStyle({});
      return;
    }

    const mediaQuery = window.matchMedia(WIDE_REGIME_QUERY);
    let ticking = false;

    function update(): void {
      ticking = false;
      const container = containerRef.current;
      const sticky = stickyRef.current;
      if (!container || !sticky || !mediaQuery.matches) {
        setMode('static');
        setStyle({});
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const stickyHeight = sticky.offsetHeight;

      if (containerRect.top >= TOP_OFFSET_PX) {
        // Jeszcze nie doscrollowano do progu przypięcia.
        setMode('static');
        setStyle({});
      } else if (containerRect.bottom <= TOP_OFFSET_PX + stickyHeight) {
        // Doscrollowano do końca (wyższej) kolumny kafelków — przypięte do dołu kontenera
        // (position:absolute w CSS), zamiast wystawać poza niego przy sztywnym top.
        setMode('bottom');
        setStyle({});
      } else {
        setMode('fixed');
        setStyle({
          position: 'fixed',
          top: TOP_OFFSET_PX,
          left: containerRect.left,
          width: container.offsetWidth,
        });
      }
    }

    function onScrollOrResize(): void {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    mediaQuery.addEventListener('change', update);
    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      mediaQuery.removeEventListener('change', update);
    };
  }, [enabled]);

  return { containerRef, stickyRef, mode, style };
}
