'use client';

import styles from './SearchResultHead.module.scss';
import SortRadio from '@/components/UI/SortRadio';

type Props = {
  options: { value: string; labelText: string }[];
  selectedOption: string;
  onChangeSortOption: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchResultHead({ options, selectedOption, onChangeSortOption }: Props) {
  return (
    <div className={styles.container}>
      <h5>
        검색 결과 <span>nnn</span>건
      </h5>
      <SortRadio
        options={options}
        selectedOption={selectedOption}
        name="placeSortOrder"
        onChange={onChangeSortOption}
      />
    </div>
  );
}
