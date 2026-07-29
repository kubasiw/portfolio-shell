import { useState } from 'react';
import { Stamp } from '../../../components/Stamp';
import { PASSIONS } from './passions';
import './AboutGallery.css';

// Wariant B z PORTFOLIO_PLAN.md (punkt f, Faza 3.5) — "siatka się rozsuwa": klik na kafelek
// pasji chowa siatkę i pokazuje jedno duże zdjęcie + filmstrip + podpis. Ten sam mechanizm
// grid-template-rows 0fr/1fr co przełącznik spis-treści/widok szczegółowy w Toc.css — oba panele
// zostają zamontowane, nic się nie odmontowuje przy przełączeniu.
export function AboutGallery() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const selected = PASSIONS.find((passion) => passion.id === selectedId) ?? null;
  const gridOpen = selected === null;
  const activePhoto = selected?.photos[activePhotoIndex] ?? null;

  function openPassion(id: string): void {
    setSelectedId(id);
    setActivePhotoIndex(0);
  }

  return (
    <div className="about-gallery">
      <div
        className={`about-gallery__panel ${gridOpen ? 'about-gallery__panel--open' : ''}`}
        aria-hidden={!gridOpen}
      >
        <div className="about-gallery__panel-inner">
          <div className="about-gallery__grid">
            {PASSIONS.map((passion) => {
              const cover = passion.photos[0];
              return (
                <button
                  key={passion.id}
                  type="button"
                  className="about-gallery__tile"
                  onClick={() => openPassion(passion.id)}
                  disabled={!cover}
                >
                  {cover ? (
                    <img src={cover.src} alt={cover.alt} className="about-gallery__tile-img" />
                  ) : (
                    <div className="about-gallery__tile-empty">
                      <Stamp main="W budowie" sub="wkrótce" />
                    </div>
                  )}
                  <span className="about-gallery__tile-label">{passion.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className={`about-gallery__panel ${!gridOpen ? 'about-gallery__panel--open' : ''}`}
        aria-hidden={gridOpen}
      >
        <div className="about-gallery__panel-inner">
          {selected && activePhoto && (
            <div className="about-gallery__viewer">
              <button
                type="button"
                className="about-gallery__viewer-back link-dashed"
                onClick={() => setSelectedId(null)}
              >
                ← Wróć do galerii
              </button>
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="about-gallery__viewer-photo"
              />
              <p className="about-gallery__viewer-caption">{activePhoto.caption}</p>
              <div className="about-gallery__filmstrip">
                {selected.photos.map((photo, index) => (
                  <button
                    key={photo.src}
                    type="button"
                    className={`about-gallery__filmstrip-item ${
                      index === activePhotoIndex ? 'about-gallery__filmstrip-item--active' : ''
                    }`}
                    onClick={() => setActivePhotoIndex(index)}
                    aria-label={photo.alt}
                    aria-current={index === activePhotoIndex}
                  >
                    <img src={photo.src} alt="" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
