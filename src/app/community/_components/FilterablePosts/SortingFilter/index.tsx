import DropDown from '@/components/UI/DropDown';

type Props = {
  selectedSorting: string;
  onSelect: (selectedOption: string) => void;
};

const SORTING_OPTIONS = ['최신순', '추천순', '조회순', '댓글순'];

export default function SortingFilter({ selectedSorting, onSelect }: Props) {
  return <DropDown options={SORTING_OPTIONS} selectedOption={selectedSorting} onSelect={onSelect} />;
}
