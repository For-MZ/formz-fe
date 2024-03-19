import styles from './CategoryFilter.module.scss';

type Props = {
  categories: string[];
  selectedCategory: string;
  onSelect: (selected: string) => void;
};

export default function CategoryFilter({ categories, selectedCategory, onSelect }: Props) {
  return (
    <>
      <div className={styles.categoriesBox}>
        {['전체', ...categories].map((category) => (
          <div
            key={category}
            className={`${styles.categoryTag} ${selectedCategory === category && styles.selected}`}
            onClick={(event) => {
              onSelect(event.currentTarget.textContent!);
            }}
          >
            {category}
          </div>
        ))}
      </div>
      {/* TODO 모바일 카테고리 */}
    </>
  );
}
