'use client';

import { useState } from 'react';
import styles from './DropDown.module.scss';

type Props = {
  options: string[];
  selected: string;
  onSelect: (selected: string) => void;
};

export default function DropDown({ options, selected, onSelect }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <button className={styles.toggle} onClick={handleClick}>
        {selected}
      </button>
      {isOpen && (
        <ul className={styles.optionList}>
          {options.map((option) => (
            <li
              className={`${styles.optionItem} ${selected === option && styles.selected}`}
              key={option}
              onClick={(event) => {
                onSelect(event.target.textContent);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
