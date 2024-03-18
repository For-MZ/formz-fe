// index.tsx
import React from 'react';
import styles from './Checkbox.module.scss';
import { ChangeEventHandler } from 'react';

type Props = {
  label?: string;
  checked?: boolean;
  isNotValid?: boolean;
  isDisable?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function Checkbox({ label, checked, isNotValid, isDisable = false, onChange }: Props) {
  return (
    <div className={`${styles.checkboxContainer}`}>
      <input
        className={`${isNotValid && styles.error} ${isDisable && styles.disable}`}
        id="checkbox"
        type="checkbox"
        checked={checked}
        disabled={isDisable}
        onChange={onChange}
      />

      <label htmlFor="checkbox"></label>
      <span>{label}</span>
    </div>
  );
}
