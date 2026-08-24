import './StatsBar.css';

interface Stat {
  number: string;
  label: string;
}

// Dane z handoffu (README, "3. Pasek statystyk") — statyczne, nie wyliczone z żadnego realnego
// źródła (liczba projektów/lat/zdjęć), tak samo jak w prototypie.
const STATS: Stat[] = [
  { number: '04', label: 'Aplikacje / frameworki' },
  { number: '09', label: 'Lat we frontendzie' },
  { number: '01', label: 'VPS, Traefik, CI/CD' },
  { number: '44', label: 'Zdjęcia w galerii' },
];

export function StatsBar() {
  return (
    <section className="stats-bar" aria-label="Statystyki">
      <div className="stats-bar__inner">
        {STATS.map((stat) => (
          <div className="stats-bar__cell" key={stat.label}>
            <span className="stats-bar__number">{stat.number}</span>
            <span className="stats-bar__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
