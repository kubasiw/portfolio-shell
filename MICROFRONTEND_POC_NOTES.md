# Mikrofrontend — notatki z POC (2026-07-23)

Uzupełnienie do `PORTFOLIO_PLAN.md`. Widget w rozmowie pokazał obie mechaniki na żywo
(Shadow DOM izolację stylów + symulowany cykl życia single-spa). Tu realny kod, jaki faktycznie
napisałoby się w tour-guide (Angular) i w przyszłym root-configu, plus ważna korekta założenia
sprzed kilku wiadomości.

## Ważna korekta: to nie są rozwiązania tego samego problemu

Trzy różne warstwy, łatwo je pomylić:

- **Web Components** — mechanizm *kompozycji*: jak obce komponenty żyją razem w jednym DOM bez
  gryzienia się stylami. Zero centralnego orkiestratora.
- **single-spa** — mechanizm *orkiestracji*: routing i cykl życia (`bootstrap`/`mount`/`unmount`)
  między apkami w obrębie jednej strony. Wymaga root-configu.
- **Module Federation** — mechanizm *współdzielenia kodu*: unika wysyłania zdublowanego runtime'u
  frameworka, ładuje remote'y dynamicznie w czasie działania.

To osobne warstwy, nie alternatywy — **żadne z Web Components ani single-spa samodzielnie nie
rozwiązuje problemu zdublowanych bundli** (każda apka nadal wysyła swój pełny runtime Angular/
React/Vue, chyba że dołoży się Module Federation albo współdzielone importmapy). Przy skali tego
portfolio (3 apki, nie kilkadziesiąt) to prawdopodobnie akceptowalny koszt — kilkaset KB
dodatkowego JS na apkę nie jest problemem dla portfolio-scale ruchu.

## Web Components — realny kod (Angular Elements)

```ts
// tour-guide/frontend/src/main-element.ts (nowy entry point, osobny od zwykłego main.ts)
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { MiniMapWidget } from './app/mini-map-widget/mini-map-widget';

async function bootstrap() {
  const app = await createApplication({
    providers: [/* te same providery co w app.config.ts, tylko potrzebne temu widgetowi */],
  });

  const element = createCustomElement(MiniMapWidget, { injector: app.injector });
  customElements.define('tour-guide-mini-map', element);
}

bootstrap();
```

```html
<!-- host: portfolio shell (React), gdziekolwiek w JSX -->
<script src="https://tourguide.kubasomething.dev/elements/main-element.js" type="module"></script>
<tour-guide-mini-map area-id="krakow-demo"></tour-guide-mini-map>
```

Angular renderuje się do Shadow DOM automatycznie (`ViewEncapsulation.ShadowDom` na komponencie),
więc style tour-guide i portfolio shellu nigdy się nie zderzą — dokładnie to, co pokazał test
"wstrzyknij globalny styl" w widgecie.

## single-spa — realny kod (root-config)

```js
// portfolio-shell/root-config.js
import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@kuba/tour-guide',
  app: () => System.import('@kuba/tour-guide'),
  activeWhen: ['/projekty/tour-guide'],
});

registerApplication({
  name: '@kuba/insider',
  app: () => System.import('@kuba/insider'),
  activeWhen: ['/projekty/insider'],
});

start();
```

Każda apka eksportuje `bootstrap`/`mount`/`unmount` (single-spa ma gotowe adaptery
`single-spa-angular`/`single-spa-react`/`single-spa-vue`, generujące te funkcje automatycznie z
istniejącego kodu apki) — orkiestrator sam decyduje, co zamontować, na podstawie
`activeWhen`/routingu. To dokładnie ten log, który widget pokazywał na żywo.

## Rekomendacja

Dla tego zestawu (3 apki, każda też ma żyć jako samodzielny, niezależnie odwiedzalny projekt —
patrz zasada "każda apka działa poza shellem" w dobrych praktykach) **Web Components wystarczą**:
- Brak centralnego orkiestratora do utrzymania.
- Każda apka faktycznie pozostaje w pełni samodzielna — spójne z tym, że mają być osobnymi case
  studies, nie jednym zintegrowanym produktem.
- single-spa ma sens dopiero, gdyby portfolio potrzebowało płynnej nawigacji *w obrębie jednej
  strony* między fragmentami różnych apek (np. wspólny routing bez przeładowania) — czego na razie
  nie planujemy.

Zostawiam to jako rekomendację, nie ostateczną decyzję — do potwierdzenia.
