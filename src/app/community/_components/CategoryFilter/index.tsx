import DropDown from '@/components/UI/DropDown';

type Props = {
  onSelect: (selected: string) => void;
};

export default function CategoryFilter({ onSelect }: Props) {
  return (
    <DropDown
      id="category"
      label="카테고리"
      options={['전체', '정책', '주택', '취업', '창업', '자유', '꿀팁']}
      onSelect={onSelect}
    />
  );
}
