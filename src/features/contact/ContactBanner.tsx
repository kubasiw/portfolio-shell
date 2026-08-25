import './ContactBanner.css';

// Adresy identyczne jak w dawnym ContactLinks.tsx (usunięty tym etapem, ta sekcja jest teraz
// jedynym miejscem, gdzie się pojawiają) — patrz PORTFOLIO_PLAN.md, etap 6.
const CONTACT_EMAIL = 'kubsiw@gmail.com';
const CONTACT_LINKEDIN = 'https://www.linkedin.com/in/jakubsiwinski/';
const CONTACT_GITHUB = 'https://github.com/kubasiw';

export function ContactBanner() {
  return (
    <section className="contact-banner" id="kontakt" aria-labelledby="contact-banner-heading">
      <div className="contact-banner__inner">
        <h2 id="contact-banner-heading" className="contact-banner__heading">
          <span className="contact-banner__heading-line">Zbudujmy</span>
          <span className="contact-banner__heading-line">coś razem</span>
        </h2>
        <div className="contact-banner__links">
          <a className="contact-banner__link" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          <a
            className="contact-banner__link"
            href={CONTACT_LINKEDIN}
            target="_blank"
            rel="noreferrer"
          >
            linkedin / jakubsiwinski ↗
          </a>
          <a
            className="contact-banner__link"
            href={CONTACT_GITHUB}
            target="_blank"
            rel="noreferrer"
          >
            github / kubasiw ↗
          </a>
        </div>
      </div>
    </section>
  );
}
