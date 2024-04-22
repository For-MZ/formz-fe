'use client';

import styles from './SortRadio.module.scss';

type Props = {
  options: { value: string; labelText: string }[];
  selectedOption: string; // 정렬 기준 상태값
  name: string; // 같은 분류의 라디오버튼은 같은 이름으로 지정
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // (e)=>setSelectedOption(e.target.value)
};

export default function SortRadio({ options, selectedOption, name, onChange }: Props) {
  return (
    <form className={styles.radioWrapper}>
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            name={name}
            value={option.value}
            onChange={onChange}
            checked={option.value === selectedOption}
          />
          {option.labelText}
        </label>
      ))}
    </form>
  );
}
