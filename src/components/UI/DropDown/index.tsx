'use client';

import styles from './DropDown.module.scss';

type Props = {
  id?: string;
  label?: string;
  options: string[];
  onSelect: (selected: string) => void;
};

export default function DropDown({ id, label, options, onSelect }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = options.find((option) => option === event.target.value) as string;
    onSelect(selectedOption);
  };

  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>
      <select id={id} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
