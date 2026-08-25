import { useTranslate } from '../../i18n/LanguageContext';
import { ProjectIndexRow } from './ProjectIndexRow';
import { PROJECT_INDEX_ROWS } from './project-rows';
import './ProjectIndex.css';

interface ProjectIndexProps {
  onOpenDetail: (id: string) => void;
}

export function ProjectIndex({ onOpenDetail }: ProjectIndexProps) {
  const t = useTranslate();
  return (
    <section className="project-index" id="projekty" aria-labelledby="project-index-heading">
      <div className="project-index__header">
        <h2 id="project-index-heading" className="project-index__heading">
          {t('Indeks projektów', 'Project index')}
        </h2>
        <span className="project-index__count">
          {t(
            `${String(PROJECT_INDEX_ROWS.length).padStart(2, '0')} pozycje · 2026`,
            `${String(PROJECT_INDEX_ROWS.length).padStart(2, '0')} entries · 2026`,
          )}
        </span>
      </div>
      <div className="project-index__rows">
        {PROJECT_INDEX_ROWS.map((row, i) => (
          <ProjectIndexRow
            key={row.id}
            row={row}
            numberLabel={`${String(i + 1).padStart(2, '0')} / ${String(PROJECT_INDEX_ROWS.length).padStart(2, '0')}`}
            onOpen={onOpenDetail}
          />
        ))}
      </div>
    </section>
  );
}
