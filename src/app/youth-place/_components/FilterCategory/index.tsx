'use client';

import DropDown from '@/components/UI/DropDown';
import styles from './FilterCategory.module.scss';
import { useState } from 'react';

type Props = {
  dropDownOptions: string[];
  category: string;
};

export default function FilterCategory({ dropDownOptions, category }: Props) {
  const [selectedOption, setSelectedOption] = useState(category);
  const handleSelectOption = (selected: string) => setSelectedOption(selected);
  return (
    <div className={styles.categoryWrapper}>
      <p>{category}</p>
      <DropDown options={dropDownOptions} selectedOption={selectedOption} onSelect={handleSelectOption} />
    </div>
  );
}
