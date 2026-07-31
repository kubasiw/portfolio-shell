// Deklaracja typu dla <insider-app> — custom element zdefiniowany przez zewnętrzny skrypt
// (main-element.ts w repo insider, ładowany dynamicznie przez InsiderWidget.tsx dopiero po
// otwarciu modala), nie komponent Reactowy. Bez tego TypeScript/JSX nie zna tego tagu — ten sam
// wzorzec co tour-guide-mini-map.d.ts.
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'insider-app': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
