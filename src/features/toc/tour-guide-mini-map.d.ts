// Deklaracja typu dla <tour-guide-mini-map> — custom element zdefiniowany przez zewnętrzny
// skrypt (main-element.ts w repo tour-guide, ładowany dynamicznie przez TourGuideWidget.tsx),
// nie komponent Reactowy. Bez tego TypeScript/JSX nie zna tego tagu.
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'tour-guide-mini-map': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        'area-id'?: string;
      };
    }
  }
}
