import './App.css';

function App() {
  return (
    <div className="landing">
      <header className="masthead">
        <span className="masthead__name">Kuba S.</span>
        <nav className="masthead__nav">
          <span>Projekty</span>
          <span>O mnie</span>
          <span>Kontakt</span>
        </nav>
        <span className="masthead__vol">VOL. 01 — 2026</span>
      </header>

      <main className="hero">
        <h1 className="hero__title">
          TRASY, KOD
          <br />
          <em>i jeden obiektyw.</em>
        </h1>
        <p className="hero__tagline">Trzy aplikacje, jedna trasa.</p>
      </main>
    </div>
  );
}

export default App;
