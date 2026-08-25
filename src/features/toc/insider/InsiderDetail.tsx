import { useEffect, useState } from 'react';
import { useTranslate } from '../../../i18n/LanguageContext';
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
      script.addEventListener('error', () => reject(new Error('Failed to load the widget script.')));
      document.body.appendChild(script);

      const timeoutId = setTimeout(
        () => reject(new Error('Timed out waiting for the widget.')),
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
  const t = useTranslate();
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
            <h3 className="insider-detail__heading">{t('Problem', 'The problem')}</h3>
            <p>
              {t(
                'Mali inwestorzy toną w szumie informacyjnym — nie ma czasu, żeby ręcznie przesiać dziesiątki nagłówków dziennie i wyłowić z nich to, co faktycznie ma znaczenie. Insider skraca to do kilku "insiderskich" newsów w formacie kart-stories (jak Instagram/TikTok), a potem — jeśli użytkownik chce iść dalej — AI proponuje konkretne pomysły inwestycyjne na ich bazie.',
                "Small investors drown in information noise — there's no time to manually sift through dozens of headlines a day and pull out what actually matters. Insider cuts that down to a handful of \"insider\" news items in a story-card format (like Instagram/TikTok), and then — if the user wants to go further — AI proposes concrete investment ideas based on them.",
              )}
            </p>
          </section>
          <section className="insider-detail__block">
            <h3 className="insider-detail__heading">
              {t('Odpowiedzialny produkt, nie tylko kod', 'A responsible product, not just code')}
            </h3>
            <p>
              {t(
                'Sugestie inwestycyjne generowane przez AI ocierają się o definicję "doradztwa inwestycyjnego" (w Polsce nadzór KNF) — zaadresowane świadomie, nie po fakcie: stała plakietka "SUGESTIA AI · NIE PORADA" przy każdej sugestii, opisowy język zamiast imperatywów ("warto obserwować", nigdy "kup"), i bramka wymuszająca przejście przez realne newsy zanim odblokują się sugestie (z jawnym, świadomym obejściem).',
                'AI-generated investment suggestions brush up against the definition of "investment advice" (regulated in Poland by the KNF) — addressed deliberately, not after the fact: a permanent "AI SUGGESTION · NOT ADVICE" tag on every suggestion, descriptive language instead of imperatives ("worth watching", never "buy"), and a gate that requires reading the real news before suggestions unlock (with an explicit, deliberate way to skip it).',
              )}
            </p>
          </section>
          <section className="insider-detail__block">
            <h3 className="insider-detail__heading">{t('Pod maską', 'Under the hood')}</h3>
            <p>
              {t(
                'Trzeci, celowo odrębny stack we frontendowym trio tego portfolio (Angular w tour-guide, React w tym shellu, Vue tutaj). Dane rynkowe — newsy i kursy — na żywo z Finnhuba (wybranego po realnym teście CORS, nie z dokumentacji). Sugestie AI: Claude, ta sama zasada "retrieve then generate" co w tour-guide — model widzi wyłącznie realnie pobrane newsy, nigdy nie wymyśla spółek ani tickerów. Własny, minimalny backend istnieje wyłącznie po to, żeby klucz do Anthropica nigdy nie opuścił serwera. Design system "Night Desk" — ciemny terminal inwestora, bursztynowy akcent, monospace dla liczb — zaprojektowany od zera, odrębny od reszty portfolio.',
                'The third, deliberately distinct stack in this portfolio\'s frontend trio (Angular in tour-guide, React in this shell, Vue here). Market data — news and prices — live from Finnhub (chosen after a real CORS test, not from the docs). AI suggestions: Claude, the same "retrieve then generate" principle as tour-guide — the model only ever sees real, fetched news, never invents companies or tickers. A small, dedicated backend exists solely so the Anthropic key never leaves the server. The "Night Desk" design system — a dark investor terminal, an amber accent, monospace for numbers — designed from scratch, separate from the rest of the portfolio.',
              )}
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
            <h3 className="insider-detail__heading">
              {t('To, co widzisz obok, to realny mikrofrontend', "What you see next to this is a real microfrontend")}
            </h3>
            <p>
              {t(
                'Insider jest osobną apką Vue, zbudowaną i wdrożoną niezależnie od tego shellu (React) — na własnej domenie, z własnym backendem. To, co renderuje się po prawej, nie jest zrzutem ekranu ani ramką iframe: cała apka jest skompilowana do jednego realnego Web Componentu (<insider-app>, Vue\'s defineCustomElement), ładowanego z insider.kubsiw.com i renderowanego w natywnym Shadow DOM — działa dokładnie tak samo, jak pod własnym adresem, ze wszystkimi żywymi danymi. Ten sam wzorzec (Web Components, nie iframe/single-spa) stoi już za mapą tour-guide osadzoną w karcie tego projektu wyżej — tam jako mały fragment, tutaj jako cała apka, bo Insider — w przeciwieństwie do tour-guide — nie ma routera ani logowania do orkiestrowania.',
                "Insider is a separate Vue app, built and deployed independently of this shell (React) — on its own domain, with its own backend. What renders on the right isn't a screenshot or an iframe: the whole app compiles into one real Web Component (<insider-app>, Vue's defineCustomElement), loaded from insider.kubsiw.com and rendered in a native Shadow DOM — it works exactly as it does at its own address, with all the live data. The same pattern (Web Components, not iframe/single-spa) already backs the tour-guide map embedded in that project's card above — there as a small fragment, here as a whole app, since Insider — unlike tour-guide — has no router or login to orchestrate around.",
              )}
            </p>
          </section>
          <a
            className="insider-detail__external-link"
            href="https://insider.kubsiw.com"
            target="_blank"
            rel="noreferrer"
          >
            {t('Otwórz insider.kubsiw.com w nowej karcie →', 'Open insider.kubsiw.com in a new tab →')}
          </a>
        </div>

        <div className="insider-detail__app">
          {scriptState === 'error' && (
            <p className="insider-detail__status">
              {t(
                'Nie udało się załadować aplikacji. Spróbuj ponownie później albo skorzystaj z powyższego linku.',
                'The app failed to load. Try again later, or use the link above.',
              )}
            </p>
          )}
          {scriptState === 'loading' && <p className="insider-detail__status">{t('Ładowanie…', 'Loading…')}</p>}
          {scriptState === 'ready' && <insider-app />}
        </div>
      </div>
    </div>
  );
}
