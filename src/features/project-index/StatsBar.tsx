import { useTranslate } from '../../i18n/LanguageContext';
import { getTotalPhotoCount } from '../toc/about/passions';
import './StatsBar.css';

interface Stat {
  number: string;
  labelPl: string;
  labelEn: string;
}

// Trzy pierwsze z handoffu (README, "3. Pasek statystyk") — statyczne, nie wyliczone z żadnego
// realnego źródła (liczba aplikacji/lat/VPS), tak samo jak w prototypie. Czwarta ("zdjęcia w
// galerii") NAPRAWIONA na realną liczbę (etap 5) — handoff podawał "44" ilustracyjnie, realne
// passions.ts ma więcej; patrz getTotalPhotoCount (jedno źródło prawdy, użyte tu i w
// AboutSection.tsx).
const STATS: Stat[] = [
  { number: '04', labelPl: 'Aplikacje / frameworki', labelEn: 'Apps / frameworks' },
  { number: '09', labelPl: 'Lat we frontendzie', labelEn: 'Years in frontend' },
  { number: '01', labelPl: 'VPS, Traefik, CI/CD', labelEn: 'VPS, Traefik, CI/CD' },
  { number: String(getTotalPhotoCount()), labelPl: 'Zdjęcia w galerii', labelEn: 'Photos in the gallery' },
];

export function StatsBar() {
  const t = useTranslate();
  return (
    <section className="stats-bar" aria-label={t('Statystyki', 'Stats')}>
      <div className="stats-bar__inner">
        {STATS.map((stat) => (
          <div className="stats-bar__cell" key={stat.labelPl}>
            <span className="stats-bar__number">{stat.number}</span>
            <span className="stats-bar__label">{t(stat.labelPl, stat.labelEn)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
