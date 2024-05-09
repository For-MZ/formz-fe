'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './DropDown.module.scss';
import UpIcon from '/public/icons/chevron-up.svg';
import DownIcon from '/public/icons/chevron-down.svg';

type Props = {
  options: string[];
  value: string | null;
  onSelect: (value: string) => void;
  placeholder?: string;
  hasError?: boolean;
  className?: string;
  multiple?: boolean;
  onBlur?: () => void;
};

export default function DropDown({
  options,
  value,
  onSelect,
  placeholder,
  hasError,
  className,
  onBlur,
}: Props) {
  const [isOpenOptionList, setIsOpenOptionList] = useState(false);

  const handleClickOption = (value: string) => {
    onSelect?.(value);
    setIsOpenOptionList(false);
  };

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

  return (
    <div className={`${styles.container} ${className}`}>
      <button
        type="button"
        className={`${styles.toggle} ${hasError && styles.error}`}
        onClick={handleToggleDropDown}
        onBlur={onBlur}
      >
        {value || <span className={styles.placeholder}>{placeholder}</span>}
        <div className={styles.icons}>
          <UpIcon width="12" height="12" viewBox="0 0 20 20" className={styles.icon} />
          <DownIcon width="12" height="12" viewBox="0 0 20 20" className={styles.icon} />
        </div>
      </button>
      {isOpenOptionList && (
        <menu className={styles.optionList} ref={optionListRef}>
          {options.map((option) => (
            <li
              className={`${styles.optionItem} ${value === option && styles.selected}`}
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
