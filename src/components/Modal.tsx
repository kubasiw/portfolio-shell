import { useEffect, useRef } from 'react';
import './Modal.css';

interface ModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

// Generic overlay — first use is the Insider widget (InsiderWidget.tsx), but nothing here is
// specific to it. Same accessibility baseline as SectionDetail's own back-button focus (see
// PORTFOLIO_PLAN.md's "Dostępność jako standard" convention): focus moves into the dialog on
// open, Escape closes it, and focus returns to whatever triggered it on close.
export function Modal({ title, onClose, children }: ModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerElementRef = useRef<Element | null>(null);

  useEffect(() => {
    triggerElementRef.current = document.activeElement;
    closeButtonRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function onKeyDown(event: KeyboardEvent): void {
      if (event.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      if (triggerElementRef.current instanceof HTMLElement) {
        triggerElementRef.current.focus();
      }
    };
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-label={title}>
        <div className="modal__header">
          <span className="modal__title">{title}</span>
          <button
            ref={closeButtonRef}
            type="button"
            className="modal__close"
            aria-label="Zamknij"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
}
