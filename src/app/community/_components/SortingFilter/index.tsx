import DropDown from '@/components/UI/DropDown';

type Props = {
  onSelect: (selected: string) => void;
};

export default function SortingFilter({ onSelect }: Props) {
  return <DropDown id="sort" label="정렬" options={['최신 순', '추천 순', '조회 순', '댓글 순']} onSelect={onSelect} />;
}
