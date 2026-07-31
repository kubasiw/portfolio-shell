import { useEffect, useState } from 'react';
import '../insider-app.d.ts';
import './InsiderDetail.css';

const WIDGET_SCRIPT_SRC = 'https://insider.kubsiw.com/elements/main.js';
const WIDGET_TAG = 'insider-app';

type ScriptState = 'loading' | 'ready' | 'error';

// Bug caught live: neither a failed script load (e.g. a 404 while the widget build isn't deployed
// yet) nor a script that loads but never calls customElements.define() for some other reason was
// ever surfaced — customElements.whenDefined() only resolves on success, it never rejects, so
// either failure mode left the UI stuck on "Ładowanie…" forever with no way out. Fixed with the
// script's own `error` event plus a timeout backstop, raced against whenDefined(); the promise
// itself is cached (not just a "was it requested" flag) so a second mount reuses the same
// outcome instead of re-appending the script or re-racing the timeout.
const SCRIPT_LOAD_TIMEOUT_MS = 15_000;
let widgetScriptPromise: Promise<void> | null = null;

function loadWidgetScript(): Promise<void> {
  if (customElements.get(WIDGET_TAG)) return Promise.resolve();
  if (!widgetScriptPromise) {
    widgetScriptPromise = new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = WIDGET_SCRIPT_SRC;
      script.addEventListener('error', () => reject(new Error('Nie udało się załadować skryptu widgetu.')));
      document.body.appendChild(script);

      const timeoutId = setTimeout(
        () => reject(new Error('Przekroczono czas oczekiwania na widget.')),
        SCRIPT_LOAD_TIMEOUT_MS,
      );
      customElements.whenDefined(WIDGET_TAG).then(() => {
        clearTimeout(timeoutId);
        resolve();
      });
    });
  }
  return widgetScriptPromise;
}

const TECH_TAGS = [
  'Vue 3 + TypeScript',
  'Node/Express',
  'Finnhub',
  'Claude AI',
  'Docker + Traefik',
  'Web Components',
];

// Split view, same shape as SkillsDetail's own two-column layout: write-up (tech + business
// story) on one side, the real, working app on the other — not a screenshot standing in for it.
export function InsiderDetail() {
  const [scriptState, setScriptState] = useState<ScriptState>('loading');

  useEffect(() => {
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
  }, []);

  return (
    <div className="insider-detail">
      <div className="insider-detail__columns">
        <div className="insider-detail__story">
          <section className="insider-detail__block">
            <h3 className="insider-detail__heading">Problem</h3>
            <p>
              Mali inwestorzy toną w szumie informacyjnym — nie ma czasu, żeby ręcznie przesiać
              dziesiątki nagłówków dziennie i wyłowić z nich to, co faktycznie ma znaczenie.
              Insider skraca to do kilku "insiderskich" newsów w formacie kart-stories (jak
              Instagram/TikTok), a potem — jeśli użytkownik chce iść dalej — AI proponuje
              konkretne pomysły inwestycyjne na ich bazie.
            </p>
          </section>
          <section className="insider-detail__block">
            <h3 className="insider-detail__heading">Odpowiedzialny produkt, nie tylko kod</h3>
            <p>
              Sugestie inwestycyjne generowane przez AI ocierają się o definicję "doradztwa
              inwestycyjnego" (w Polsce nadzór KNF) — zaadresowane świadomie, nie po fakcie: stała
              plakietka "SUGESTIA AI · NIE PORADA" przy każdej sugestii, opisowy język zamiast
              imperatywów ("warto obserwować", nigdy "kup"), i bramka wymuszająca przejście przez
              realne newsy zanim odblokują się sugestie (z jawnym, świadomym obejściem).
            </p>
          </section>
          <section className="insider-detail__block">
            <h3 className="insider-detail__heading">Pod maską</h3>
            <p>
              Trzeci, celowo odrębny stack we frontendowym trio tego portfolio (Angular w
              tour-guide, React w tym shellu, Vue tutaj). Dane rynkowe — newsy i kursy — na żywo z
              Finnhuba (wybranego po realnym teście CORS, nie z dokumentacji). Sugestie AI:
              Claude, ta sama zasada "retrieve then generate" co w tour-guide — model widzi
              wyłącznie realnie pobrane newsy, nigdy nie wymyśla spółek ani tickerów. Własny,
              minimalny backend istnieje wyłącznie po to, żeby klucz do Anthropica nigdy nie
              opuścił serwera. Design system "Night Desk" — ciemny terminal inwestora, bursztynowy
              akcent, monospace dla liczb — zaprojektowany od zera, odrębny od reszty portfolio.
            </p>
            <div className="insider-detail__tags">
              {TECH_TAGS.map((tag) => (
                <span key={tag} className="insider-detail__tag">
                  {tag}
                </span>
              ))}
            </div>
          </section>
          <section className="insider-detail__block">
            <h3 className="insider-detail__heading">To, co widzisz obok, to realny mikrofrontend</h3>
            <p>
              Insider jest osobną apką Vue, zbudowaną i wdrożoną niezależnie od tego shellu (React)
              — na własnej domenie, z własnym backendem. To, co renderuje się po prawej, nie jest
              zrzutem ekranu ani ramką <code>iframe</code>: cała apka jest skompilowana do jednego
              realnego Web Componentu (<code>&lt;insider-app&gt;</code>, Vue's{' '}
              <code>defineCustomElement</code>), ładowanego z <code>insider.kubsiw.com</code> i
              renderowanego w natywnym Shadow DOM — działa dokładnie tak samo, jak pod własnym
              adresem, ze wszystkimi żywymi danymi. Ten sam wzorzec (Web Components, nie
              iframe/single-spa) stoi już za mapą tour-guide osadzoną w karcie tego projektu wyżej
              — tam jako mały fragment, tutaj jako cała apka, bo Insider — w przeciwieństwie do
              tour-guide — nie ma routera ani logowania do orkiestrowania.
            </p>
          </section>
          <a
            className="insider-detail__external-link"
            href="https://insider.kubsiw.com"
            target="_blank"
            rel="noreferrer"
          >
            Otwórz insider.kubsiw.com w nowej karcie →
          </a>
        </div>

        <div className="insider-detail__app">
          {scriptState === 'error' && (
            <p className="insider-detail__status">
              Nie udało się załadować aplikacji. Spróbuj ponownie później albo skorzystaj z
              powyższego linku.
            </p>
          )}
          {scriptState === 'loading' && <p className="insider-detail__status">Ładowanie…</p>}
          {scriptState === 'ready' && <insider-app />}
        </div>
      </div>
    </div>
  );
}
