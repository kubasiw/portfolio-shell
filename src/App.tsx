import './App.css';
import { Stamp } from './components/Stamp';
import { Toc } from './features/toc/Toc';

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
        <Stamp main="W budowie" sub="2026" className="masthead__stamp" />
      </header>

      <main className="hero">
        <h1 className="hero__title">
          TRASY, KOD
          <br />
          <em>i jeden obiektyw.</em>
        </h1>
        <p className="hero__tagline">Trzy aplikacje, jedna trasa.</p>
      </main>

      <Toc />

      <footer className="site-footer">
        <a className="site-footer__link" href="#section-contact">
          Kontakt ↑
        </a>
        <span className="site-footer__year">© 2026 Kuba S.</span>
      </footer>
    </div>
  );
}

export default App;
