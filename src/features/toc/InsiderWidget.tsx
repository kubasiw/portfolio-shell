import { useEffect, useState } from 'react';
import { Modal } from '../../components/Modal';
import './insider-app.d.ts';
import './InsiderWidget.css';

const WIDGET_SCRIPT_SRC = 'https://insider.kubsiw.com/elements/main.js';
const WIDGET_TAG = 'insider-app';

type ScriptState = 'idle' | 'loading' | 'ready' | 'error';

// Loaded lazily, only once the modal actually opens — unlike TourGuideWidget's small map
// fragment (rendered inline on every visit to the ToC), the whole Insider app is a heavier
// payload not worth fetching for every visitor who never opens it.
let widgetScriptRequested = false;

function loadWidgetScript(): Promise<void> {
  if (customElements.get(WIDGET_TAG)) return Promise.resolve();
  if (!widgetScriptRequested) {
    widgetScriptRequested = true;
    const script = document.createElement('script');
    script.type = 'module';
    script.src = WIDGET_SCRIPT_SRC;
    document.body.appendChild(script);
  }
  return customElements.whenDefined(WIDGET_TAG).then(() => undefined);
}

export function InsiderWidget() {
  const [open, setOpen] = useState(false);
  const [scriptState, setScriptState] = useState<ScriptState>('idle');

  useEffect(() => {
    if (!open || scriptState === 'ready') return;
    setScriptState('loading');
    let cancelled = false;
    loadWidgetScript().then(
      () => {
        if (!cancelled) setScriptState('ready');
      },
      () => {
        if (!cancelled) setScriptState('error');
      },
    );
    return () => {
      cancelled = true;
    };
  }, [open, scriptState]);

  return (
    <>
      <button type="button" className="spec-plate__cta" onClick={() => setOpen(true)}>
        Otwórz pełną apkę →
      </button>
      {open && (
        <Modal title="Insider" onClose={() => setOpen(false)}>
          {scriptState === 'error' && (
            <p className="insider-widget__status">
              Nie udało się załadować aplikacji. Spróbuj ponownie później albo odwiedź{' '}
              <a href="https://insider.kubsiw.com" target="_blank" rel="noreferrer">
                insider.kubsiw.com
              </a>{' '}
              bezpośrednio.
            </p>
          )}
          {scriptState !== 'error' && scriptState !== 'ready' && (
            <p className="insider-widget__status">Ładowanie…</p>
          )}
          {scriptState === 'ready' && <insider-app />}
        </Modal>
      )}
    </>
  );
}
