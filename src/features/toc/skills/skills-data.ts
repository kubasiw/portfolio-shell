export interface SkillTag {
  label: string;
  planned?: boolean;
}

export interface SkillGroup {
  label: string;
  note?: string;
  tags: SkillTag[];
}

export interface SkillPlateData {
  title: string;
  core?: boolean;
  pullQuote: string;
  pullQuotePrimary?: boolean;
  subtitle?: string;
  groups: SkillGroup[];
}

export const SKILL_PLATES: SkillPlateData[] = [
  {
    title: 'Fundament — 9+ lat w praktyce',
    core: true,
    pullQuote:
      'Od lat, zanim pojawiły się AI i LLM-y, projektowałem i wdrażałem architekturę frontendu ' +
      'samodzielnie — z Domain-Driven Design jako głównym schematem: sposobem na okiełznanie ' +
      'ogromnej wiedzy biznesowej.',
    subtitle:
      'Platformy obsługujące dziesiątki tysięcy usług i setki klientów — bezpieczeństwo, ' +
      'energetyka, sustainability, retail.',
    groups: [
      {
        label: 'Frontend',
        tags: [
          { label: 'Angular' },
          { label: 'TypeScript' },
          { label: 'RxJS' },
          { label: 'NgRx' },
          { label: 'Angular Material' },
          { label: 'SCSS' },
        ],
      },
      {
        label: 'Architektura i jakość',
        tags: [
          { label: 'Domain-Driven Design' },
          { label: 'Modularna architektura' },
          { label: 'Refaktoryzacja legacy' },
        ],
      },
      {
        label: 'Backend i testy',
        tags: [
          { label: '.NET / C# (współpraca)' },
          { label: 'REST API' },
          { label: 'Jasmine' },
          { label: 'Karma' },
        ],
      },
      {
        label: 'DevOps',
        tags: [
          { label: 'Azure DevOps' },
          { label: 'Git' },
          { label: 'CI/CD' },
          { label: 'Code review' },
        ],
      },
    ],
  },
  {
    title: 'Zbudowane dla tego portfolio',
    pullQuotePrimary: true,
    pullQuote:
      'Świadomy eksperyment, nie przypadkowy zbiór technologii: inny framework w każdym ' +
      'projekcie, wypróbowanie automatycznych wdrożeń od zera, most między frameworkami ' +
      '(mikrofrontend) zamiast jednej wspólnej apki. Poligon, na którym sprawdzam, jak to ' +
      'wszystko realnie się ze sobą składa — nie tylko w teorii.',
    groups: [
      {
        label: 'Frontend poza Angularem',
        note:
          'Nie tylko na potrzeby tego portfolio — pierwszy raz w realnym, małym projekcie w ' +
          "pracy (od podstaw, React + Cursor). Ten portfolio to już drugi, większy krok w React'cie.",
        tags: [
          { label: 'React + Vite' },
          { label: 'Angular (tour-guide)' },
          { label: 'Vue — w planach (Insider)', planned: true },
        ],
      },
      {
        label: 'Backend od zera',
        tags: [{ label: 'NestJS' }, { label: 'Prisma' }, { label: 'PostgreSQL' }],
      },
      {
        label: 'Automatyzacja wdrożeń',
        note:
          'Nie tylko "działa u mnie" — pełny łańcuch build → test → obraz Dockera → deploy na ' +
          'VPS, uruchamiany samym pushem, bez ręcznego wchodzenia na serwer.',
        tags: [
          { label: 'Docker' },
          { label: 'Traefik' },
          { label: 'VPS (Hetzner)' },
          { label: 'GitHub Actions (CI/CD)' },
        ],
      },
      {
        label: 'Mikrofrontend',
        note:
          'Zamiast jednej wspólnej apki — realny widget z tour-guide (Angular) osadzony ' +
          'bezpośrednio na tej stronie (React), jako zwykły znacznik HTML.',
        tags: [{ label: 'Web Components' }, { label: 'Custom Elements' }, { label: 'Shadow DOM' }],
      },
    ],
  },
];
