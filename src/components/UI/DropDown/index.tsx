'use client';

import { ButtonHTMLAttributes, useEffect, useRef, useState } from 'react';
import styles from './DropDown.module.scss';
import UpIcon from '/public/icons/chevron-up.svg';
import DownIcon from '/public/icons/chevron-down.svg';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  id?: string;
  options: string[];
  selectedValue?: string | null;
  onSelectProp: (selectedOption: string) => void;
  placeholder?: string;
  hasError?: boolean;
  className?: string;
};

/**
 *
 * @param id button태그 id props
 * @param className container className props
 * @returns
 */
export default function DropDown({
  options,
  placeholder,
  selectedValue,
  onSelectProp,
  hasError,
  className,
  ...buttonProps
}: Props) {
  const [selectedOption, setSelectedOption] = useState<string | null>(
    selectedValue || (placeholder ? null : options[0]),
  );
  const [isOpenOptionList, setIsOpenOptionList] = useState<boolean>(false);
  const optionListRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // 드롭다운 메뉴 컨테이너 요소
      const optionListElement = optionListRef.current as HTMLElement;

      // 클릭된 요소가 드롭다운 메뉴 컨테이너 내부에 있는지 확인
      if (!optionListElement.contains(event.target as Element)) {
        // 외부 영역 클릭 시 메뉴 닫기
        setIsOpenOptionList(false);
      }
    };

    // 메뉴 열려 있을 때만 리스너 추가
    if (isOpenOptionList) {
      document.addEventListener('click', handleClickOutside);
    }

    // 컴포넌트 언마운트 시 리스너 제거
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpenOptionList]);

  const handleToggleDropDown = () => {
    setIsOpenOptionList((prev) => !prev);
  };

  const handleClickOption = (option: string) => {
    setSelectedOption(option);
    onSelectProp(option);
    setIsOpenOptionList(false);
  };

  return (
    <div className={`${styles.container} ${className}`}>
      {/* 드롭다운 토글링 버튼 */}
      <button
        type="button"
        className={`${styles.toggle} ${hasError && styles.error}`}
        onClick={handleToggleDropDown}
        {...buttonProps}
      >
        {selectedOption || <span className={styles.placeholder}>{placeholder}</span>}
        <div className={styles.icons}>
          <UpIcon width="12" height="12" viewBox="0 0 20 20" className={styles.icon} />
          <DownIcon width="12" height="12" viewBox="0 0 20 20" className={styles.icon} />
        </div>
      </button>

      {/* 드롭다운 토글링 버튼 클릭 시 보이는 옵션 리스트 */}
      {isOpenOptionList && (
        <menu className={styles.optionList} ref={optionListRef}>
          {options.map((option) => (
            <li
              className={`${styles.optionItem} ${selectedOption === option && styles.selected}`}
              key={option}
              onClick={() => handleClickOption(option)}
            >
              {option}
            </li>
          ))}
        </menu>
      )}
    </div>
  );
}
