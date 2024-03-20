'use client';

import { ButtonHTMLAttributes, useState } from 'react';
import styles from './DropDown.module.scss';
import Image from 'next/image';
import upIcon from '/public/icons/chevron-up.svg';
import downIcon from '/public/icons/chevron-down.svg';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  options: string[];
  onSelectProp: (selectedOption: string) => void;
  placeholder?: string;
  hasError?: boolean;
};

export default function DropDown({ options, onSelectProp, placeholder, hasError, ...buttonProps }: Props) {
  const [isOpenOptionList, setIsOpenOptionList] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(placeholder ? null : options[0]);

  const handleToggleDropDown = () => {
    setIsOpenOptionList((prev) => !prev);
  };

  const handleClickOption = (selectedOption: string) => {
    setSelectedOption(selectedOption);
    onSelectProp?.(selectedOption);
    setIsOpenOptionList(false);
  };

  return (
    <div className={styles.selectContainer}>
      {/* 드롭다운 토글링 버튼 */}
      <button
        {...buttonProps}
        type="button"
        className={`${styles.toggle} ${hasError && styles.error}`}
        onClick={handleToggleDropDown}
      >
        {selectedOption || <span className={styles.placeholder}>{placeholder}</span>}
        <div className={styles.icons}>
          <Image src={upIcon} alt="up 아이콘" width={12} height={12} />
          <Image src={downIcon} alt="down 아이콘" width={12} height={12} />
        </div>
      </button>

      {/* 드롭다운 토글링 버튼 클릭 시 보이는 옵션 리스트 */}
      {isOpenOptionList && (
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
