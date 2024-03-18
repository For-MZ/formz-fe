import DropDown from '@/components/UI/DropDown';

type Props = {
  categories: string[];
  selectedCategory: string;
  onSelect: (selected: string) => void;
};

export default function CategoryFilter({ categories, selectedCategory, onSelect }: Props) {
  return <DropDown options={['전체', ...categories]} selected={selectedCategory} onSelect={onSelect} />;
}
