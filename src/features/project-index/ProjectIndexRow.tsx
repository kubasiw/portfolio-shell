import { useTranslate } from '../../i18n/LanguageContext';
import type { ProjectIndexRow as ProjectIndexRowData } from './project-rows';

interface ProjectIndexRowProps {
  row: ProjectIndexRowData;
  numberLabel: string;
  onOpen: (id: string) => void;
}

export function ProjectIndexRow({ row, numberLabel, onOpen }: ProjectIndexRowProps) {
  const t = useTranslate();
  const content = (
    <>
      <span className="index-row__number">{numberLabel}</span>
      <span className="index-row__title-block">
        <span className="index-row__title">{t(row.titlePl, row.titleEn)}</span>
        <span className="index-row__stack">{row.stack}</span>
      </span>
      <span className="index-row__note">{t(row.notePl, row.noteEn)}</span>
      <span className="index-row__photo-frame">
        <img
          className="index-row__photo"
          src={row.image.src}
          alt={t(row.image.altPl, row.image.altEn)}
        />
        <span className="index-row__status">{t(row.statusPl, row.statusEn)}</span>
      </span>
    </>
  );

  // Handoff: "Sekcje bez widoku szczegółowego (Serwisant) nie są klikalne — wtedy bez
  // cursor: pointer". <button> tylko dla klikalnych wierszy — nieklikalny wiersz jako zwykły
  // <div> zamiast disabled <button>, żeby nie sugerować czytnikom ekranu interaktywności, której
  // faktycznie nie ma.
  if (!row.clickable) {
    return <div className="index-row--static">{content}</div>;
  }

  return (
    <button type="button" className="index-row" onClick={() => onOpen(row.id)}>
      {content}
    </button>
  );
}
