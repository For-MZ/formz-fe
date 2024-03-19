'use client';

import { useState } from 'react';
import upIcon from '/public/icons/chevron-up.svg';
import downIcon from '/public/icons/chevron-down.svg';
import styles from './DropDown.module.scss';
import Image from 'next/image';

type Props = {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
  placeholder?: string;
};

export default function DropDown({ options, selectedOption, onSelect, placeholder }: Props) {
  const [isOpenOptionList, setIsOpenOptionList] = useState(false);

  const handleToggleDropDown = () => {
    setIsOpenOptionList((prev) => !prev);
  };

  const handleClickOption = (option: string) => {
    onSelect(option);
    setIsOpenOptionList(false);
  };

  return (
    <div className={styles.container}>
      {/* 드롭다운 토글링 버튼 */}
      <button type="button" className={styles.toggle} onClick={handleToggleDropDown}>
        <div>{selectedOption || <span className={styles.placeholder}>{placeholder}</span>}</div>
        <div className={styles.icons}>
          <Image src={upIcon} alt="up 아이콘" width={12} height={12} />
          <Image src={downIcon} alt="down 아이콘" width={12} height={12} />
        </div>
      </button>
      {isOpenOptionList && (
        // 드롭다운 토글링 버튼 클릭 시 보이는 옵션 리스트
        <ul className={styles.optionList}>
          {options.map((option) => (
            <li
              className={`${styles.optionItem} ${selectedOption === option && styles.selected}`}
              key={option}
              onClick={() => handleClickOption(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
