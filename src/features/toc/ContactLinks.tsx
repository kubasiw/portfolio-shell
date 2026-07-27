import './ContactLinks.css';

const CONTACT_EMAIL = 'kubsiw@gmail.com';
const CONTACT_LINKEDIN = 'https://www.linkedin.com/in/jakubsiwinski/';
const CONTACT_GITHUB = 'https://github.com/kubasiw';

export function ContactLinks() {
  return (
    <div className="contact-links">
      <a className="contact-links__row" href={`mailto:${CONTACT_EMAIL}`}>
        <span className="contact-links__label">E-mail</span>
        <span className="contact-links__value">{CONTACT_EMAIL}</span>
      </a>
      <a
        className="contact-links__row"
        href={CONTACT_LINKEDIN}
        target="_blank"
        rel="noreferrer"
      >
        <span className="contact-links__label">LinkedIn</span>
        <span className="contact-links__value">jakubsiwinski →</span>
      </a>
      <a className="contact-links__row" href={CONTACT_GITHUB} target="_blank" rel="noreferrer">
        <span className="contact-links__label">GitHub</span>
        <span className="contact-links__value">kubasiw →</span>
      </a>
    </div>
  );
}
