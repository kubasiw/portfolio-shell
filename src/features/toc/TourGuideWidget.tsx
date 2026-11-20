import { useEffect } from 'react';
import './tour-guide-mini-map.d.ts';

// Bundle widgetu leży obok strony (public/elements/tour-guide/), nie na osobnej subdomenie — backend
// tour-guide nie jest już nigdzie wdrożony (2026-11-20), patrz PORTFOLIO_PLAN.md.
const WIDGET_SCRIPT_SRC = '/elements/tour-guide/main.js';
const WIDGET_TAG = 'tour-guide-mini-map';

// Ładuje skrypt widgetu dokładnie raz, niezależnie od tego, ile razy ten komponent się
// zamontuje (np. React StrictMode podwójnie wywołuje efekty w dev) — bez tej ochrony drugie
// <script> wywołałoby customElements.define(...) po raz drugi dla tego samego tagu, co przeglądarka
// traktuje jako błąd (NotSupportedError).
let widgetScriptRequested = false;

function ensureWidgetScriptLoaded(): void {
  if (widgetScriptRequested || customElements.get(WIDGET_TAG)) {
    return;
  }
  widgetScriptRequested = true;
  const script = document.createElement('script');
  script.type = 'module';
  script.src = WIDGET_SCRIPT_SRC;
  document.body.appendChild(script);
}

export function TourGuideWidget() {
  useEffect(() => {
    ensureWidgetScriptLoaded();
  }, []);

  return (
    <div className="tour-guide-widget">
      <tour-guide-mini-map area-id="krakow-demo" />
    </div>
  );
}
