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
    <label className={`${styles.checkboxContainer} ${isNotValid && styles.error} ${isDisable && styles.disabled}`}>
      <input type="checkbox" checked={checked} disabled={isDisable} onChange={onChange} />
      <span className={styles.label}>{label}</span>
    </label>
  );
}
