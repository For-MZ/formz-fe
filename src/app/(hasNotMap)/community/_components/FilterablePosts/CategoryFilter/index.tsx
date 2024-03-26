import styles from './CategoryFilter.module.scss';
import DropDown from '@/components/UI/DropDown';

type Props = {
  categories: string[];
  onSelect: (selected: string) => void;
};

export default function CategoryFilter({ categories, onSelect }: Props) {
  return (
    <div className={styles.container}>
      <DropDown options={categories} onSelectProp={onSelect} />
    </div>
  );
}
