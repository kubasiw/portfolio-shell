import './SkillsDetail.css';

// Serwowany bezpośrednio z public/ (Vite kopiuje 1:1 do build outputu) — nie import ze
// src/assets/, PDF nie potrzebuje żadnego przetwarzania przez bundler, tylko realnego URL-a.
const CV_URL = '/cv/Jakub_Siwinski_CV.pdf';

export function SkillsDetail() {
  return (
    <div className="skills-detail">
      <div className="skills-detail__columns">
        <section className="skill-plate skill-plate--core">
          <p className="skill-plate__title">Fundament — 9+ lat w praktyce</p>
          <p className="skill-plate__pull-quote">
            Od lat, zanim pojawiły się AI i LLM-y, projektowałem i wdrażałem architekturę
            frontendu samodzielnie — z Domain-Driven Design jako głównym schematem: sposobem na
            okiełznanie ogromnej wiedzy biznesowej.
          </p>
          <p className="skill-plate__subtitle">
            Platformy obsługujące dziesiątki tysięcy usług i setki klientów — bezpieczeństwo,
            energetyka, sustainability, retail.
          </p>

          <div className="skill-group">
            <span className="skill-group__label">Frontend</span>
            <div className="tag-row">
              <span className="tag">Angular</span>
              <span className="tag">TypeScript</span>
              <span className="tag">RxJS</span>
              <span className="tag">NgRx</span>
              <span className="tag">Angular Material</span>
              <span className="tag">SCSS</span>
            </div>
          </div>
          <div className="skill-group">
            <span className="skill-group__label">Architektura i jakość</span>
            <div className="tag-row">
              <span className="tag">Domain-Driven Design</span>
              <span className="tag">Modularna architektura</span>
              <span className="tag">Refaktoryzacja legacy</span>
            </div>
          </div>
          <div className="skill-group">
            <span className="skill-group__label">Backend i testy</span>
            <div className="tag-row">
              <span className="tag">.NET / C# (współpraca)</span>
              <span className="tag">REST API</span>
              <span className="tag">Jasmine</span>
              <span className="tag">Karma</span>
            </div>
          </div>
          <div className="skill-group">
            <span className="skill-group__label">DevOps</span>
            <div className="tag-row">
              <span className="tag">Azure DevOps</span>
              <span className="tag">Git</span>
              <span className="tag">CI/CD</span>
              <span className="tag">Code review</span>
            </div>
          </div>
        </section>

        <section className="skill-plate">
          <p className="skill-plate__title">Zbudowane dla tego portfolio</p>
          <p className="skill-plate__pull-quote skill-plate__pull-quote--primary">
            Świadomy eksperyment, nie przypadkowy zbiór technologii: inny framework w każdym
            projekcie, wypróbowanie automatycznych wdrożeń od zera, most między frameworkami
            (mikrofrontend) zamiast jednej wspólnej apki. Poligon, na którym sprawdzam, jak to
            wszystko realnie się ze sobą składa — nie tylko w teorii.
          </p>

          <div className="skill-group">
            <span className="skill-group__label">Frontend poza Angularem</span>
            <p className="skill-group__note skill-group__note--lead">
              Nie tylko na potrzeby tego portfolio — pierwszy raz w realnym, małym projekcie w
              pracy (od podstaw, React + Cursor). Ten portfolio to już drugi, większy krok w
              React&apos;cie.
            </p>
            <div className="tag-row">
              <span className="tag">React + Vite</span>
              <span className="tag">Angular (tour-guide)</span>
              <span className="tag tag--planned">Vue — w planach (Insider)</span>
            </div>
          </div>
          <div className="skill-group">
            <span className="skill-group__label">Backend od zera</span>
            <div className="tag-row">
              <span className="tag">NestJS</span>
              <span className="tag">Prisma</span>
              <span className="tag">PostgreSQL</span>
            </div>
          </div>
          <div className="skill-group">
            <span className="skill-group__label">Automatyzacja wdrożeń</span>
            <p className="skill-group__note skill-group__note--lead">
              Nie tylko "działa u mnie" — pełny łańcuch build → test → obraz Dockera → deploy na
              VPS, uruchamiany samym pushem, bez ręcznego wchodzenia na serwer.
            </p>
            <div className="tag-row">
              <span className="tag">Docker</span>
              <span className="tag">Traefik</span>
              <span className="tag">VPS (Hetzner)</span>
              <span className="tag">GitHub Actions (CI/CD)</span>
            </div>
          </div>
          <div className="skill-group">
            <span className="skill-group__label">Mikrofrontend</span>
            <p className="skill-group__note skill-group__note--lead">
              Zamiast jednej wspólnej apki — realny widget z tour-guide (Angular) osadzony
              bezpośrednio na tej stronie (React), jako zwykły znacznik HTML.
            </p>
            <div className="tag-row">
              <span className="tag">Web Components</span>
              <span className="tag">Custom Elements</span>
              <span className="tag">Shadow DOM</span>
            </div>
          </div>
        </section>
      </div>

      <div className="ai-callout">
        <span className="ai-callout__label">Jak naprawdę pracuję z AI</span>
        <p>
          Na co dzień, w pracy nad dużym projektem, korzystam z GitHub Copilota —
          doprecyzowuję prompty, wskazuję wzorce, ustalam dobre praktyki i role, w jakich model ma
          rozumować. To nie jest nowa umiejętność odkryta przy tym portfolio.
        </p>
        <p className="ai-callout__secondary">
          Ten portfolio pokazuje bardziej autonomiczny wariant tej samej pracy: Claude Code
          prowadzi całe zadania — od infrastruktury po design system — a ja nadal kieruję
          kierunkiem i sprawdzam każdą decyzję, tylko na poziomie zadania, nie pojedynczej
          linijki.
        </p>
      </div>

      <div className="cv-row">
        <p className="cv-row__text">
          Pełne CV — doświadczenie zawodowe, projekty klienckie, certyfikaty — do pobrania jako
          PDF.
        </p>
        <a className="cv-cta" href={CV_URL} download>
          Pobierz CV (PDF) ↓
        </a>
      </div>
    </div>
  );
}
