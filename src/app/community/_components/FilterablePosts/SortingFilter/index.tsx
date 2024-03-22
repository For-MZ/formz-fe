import styles from './SortingFilter.module.scss';
import DropDown from '@/components/UI/DropDown';

type Props = {
  onSelect: (selectedOption: string) => void;
};

const SORTING_OPTIONS = ['최신순', '추천순', '조회순', '댓글순'];

export default function SortingFilter({ onSelect }: Props) {
  return (
    <div className={styles.sorting}>
      <DropDown options={SORTING_OPTIONS} onSelectProp={onSelect} />
    </div>
  );
}
