export interface SkillTag {
  labelPl: string;
  labelEn: string;
  planned?: boolean;
}

export interface SkillGroup {
  labelPl: string;
  labelEn: string;
  notePl?: string;
  noteEn?: string;
  tags: SkillTag[];
}

export interface SkillPlateData {
  titlePl: string;
  titleEn: string;
  core?: boolean;
  pullQuotePl: string;
  pullQuoteEn: string;
  pullQuotePrimary?: boolean;
  subtitlePl?: string;
  subtitleEn?: string;
  groups: SkillGroup[];
}

export const SKILL_PLATES: SkillPlateData[] = [
  {
    titlePl: 'Fundament — 9+ lat w praktyce',
    titleEn: 'Foundation — 9+ years in practice',
    core: true,
    pullQuotePl:
      'Od lat, zanim pojawiły się AI i LLM-y, projektowałem i wdrażałem architekturę frontendu ' +
      'samodzielnie — z Domain-Driven Design jako głównym schematem: sposobem na okiełznanie ' +
      'ogromnej wiedzy biznesowej.',
    pullQuoteEn:
      'For years, before AI and LLMs, I designed and shipped frontend architecture on my own — ' +
      'with Domain-Driven Design as the main framework: a way to tame a huge amount of business ' +
      'knowledge.',
    subtitlePl:
      'Platformy obsługujące dziesiątki tysięcy usług i setki klientów — bezpieczeństwo, ' +
      'energetyka, sustainability, retail.',
    subtitleEn:
      'Platforms serving tens of thousands of services and hundreds of clients — security, ' +
      'energy, sustainability, retail.',
    groups: [
      {
        labelPl: 'Frontend',
        labelEn: 'Frontend',
        tags: [
          { labelPl: 'Angular', labelEn: 'Angular' },
          { labelPl: 'TypeScript', labelEn: 'TypeScript' },
          { labelPl: 'RxJS', labelEn: 'RxJS' },
          { labelPl: 'NgRx', labelEn: 'NgRx' },
          { labelPl: 'Angular Material', labelEn: 'Angular Material' },
          { labelPl: 'SCSS', labelEn: 'SCSS' },
        ],
      },
      {
        labelPl: 'Architektura i jakość',
        labelEn: 'Architecture & quality',
        tags: [
          { labelPl: 'Domain-Driven Design', labelEn: 'Domain-Driven Design' },
          { labelPl: 'Modularna architektura', labelEn: 'Modular architecture' },
          { labelPl: 'Skalowalność i wydajność', labelEn: 'Scalability & performance' },
          { labelPl: 'Refaktoryzacja legacy', labelEn: 'Legacy refactoring' },
        ],
      },
      {
        labelPl: 'Backend i testy',
        labelEn: 'Backend & testing',
        tags: [
          { labelPl: '.NET / C# (współpraca)', labelEn: '.NET / C# (collaboration)' },
          { labelPl: 'REST API', labelEn: 'REST API' },
          { labelPl: 'Jasmine', labelEn: 'Jasmine' },
          { labelPl: 'Karma', labelEn: 'Karma' },
        ],
      },
      {
        labelPl: 'DevOps',
        labelEn: 'DevOps',
        tags: [
          { labelPl: 'Azure DevOps', labelEn: 'Azure DevOps' },
          { labelPl: 'Git', labelEn: 'Git' },
          { labelPl: 'CI/CD', labelEn: 'CI/CD' },
          { labelPl: 'Code review', labelEn: 'Code review' },
        ],
      },
    ],
  },
  {
    titlePl: 'Zbudowane dla tego portfolio',
    titleEn: 'Built for this portfolio',
    pullQuotePrimary: true,
    pullQuotePl:
      'Świadomy eksperyment, nie przypadkowy zbiór technologii: inny framework w każdym ' +
      'projekcie, wypróbowanie automatycznych wdrożeń od zera, most między frameworkami ' +
      '(mikrofrontend) zamiast jednej wspólnej apki. Poligon, na którym sprawdzam, jak to ' +
      'wszystko realnie się ze sobą składa — nie tylko w teorii.',
    pullQuoteEn:
      "A deliberate experiment, not a random pile of technologies: a different framework in " +
      'each project, trying out automated deploys from scratch, a bridge between frameworks ' +
      '(a microfrontend) instead of one shared app. A testing ground for how all of this ' +
      'actually fits together — not just in theory.',
    groups: [
      {
        labelPl: 'Frontend poza Angularem',
        labelEn: 'Frontend beyond Angular',
        notePl:
          'Nie tylko na potrzeby tego portfolio — pierwszy raz w realnym, małym projekcie w ' +
          "pracy (od podstaw, React + Cursor). To portfolio to już drugi, większy krok w React'cie.",
        noteEn:
          "Not just for this portfolio — first used on a real, small project at work (from " +
          'scratch, React + Cursor). This portfolio is already a second, bigger step in React.',
        tags: [
          { labelPl: 'React + Vite', labelEn: 'React + Vite' },
          { labelPl: 'Angular (tour-guide)', labelEn: 'Angular (tour-guide)' },
          { labelPl: 'Vue — w planach (Insider)', labelEn: 'Vue — planned (Insider)', planned: true },
        ],
      },
      {
        labelPl: 'Backend od zera',
        labelEn: 'Backend from scratch',
        tags: [
          { labelPl: 'NestJS', labelEn: 'NestJS' },
          { labelPl: 'Prisma', labelEn: 'Prisma' },
          { labelPl: 'PostgreSQL', labelEn: 'PostgreSQL' },
        ],
      },
      {
        labelPl: 'Automatyzacja wdrożeń',
        labelEn: 'Deployment automation',
        notePl:
          'Przećwiczone w tym portfolio od początku do końca: build → test → obraz Dockera → deploy ' +
          'na własny VPS z Traefikiem, uruchamiany samym pushem. A potem świadome zejście na ' +
          'statyczny hosting, kiedy koszt serwera przestał się opłacać — to też umiejętność.',
        noteEn:
          'Practiced in this portfolio end to end: build → test → Docker image → deploy to my own ' +
          'VPS with Traefik, triggered by a plain push. And then a deliberate step down to static ' +
          'hosting once the server stopped paying for itself — that is a skill too.',
        tags: [
          { labelPl: 'Docker', labelEn: 'Docker' },
          { labelPl: 'Traefik', labelEn: 'Traefik' },
          { labelPl: 'VPS (Hetzner)', labelEn: 'VPS (Hetzner)' },
          { labelPl: 'GitHub Actions (CI/CD)', labelEn: 'GitHub Actions (CI/CD)' },
          { labelPl: 'Cloudflare Pages', labelEn: 'Cloudflare Pages' },
        ],
      },
      {
        labelPl: 'Mikrofrontend',
        labelEn: 'Microfrontend',
        notePl:
          'Zamiast jednej wspólnej apki — realny widget z tour-guide (Angular) osadzony ' +
          'bezpośrednio na tej stronie (React), jako zwykły znacznik HTML.',
        noteEn:
          'Instead of one shared app — a real widget from tour-guide (Angular) embedded directly ' +
          'on this page (React), as a plain HTML tag.',
        tags: [
          { labelPl: 'Web Components', labelEn: 'Web Components' },
          { labelPl: 'Custom Elements', labelEn: 'Custom Elements' },
          { labelPl: 'Shadow DOM', labelEn: 'Shadow DOM' },
        ],
      },
    ],
  },
];
