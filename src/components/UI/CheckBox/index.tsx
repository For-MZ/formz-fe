'use client';

import React from 'react';
import styles from './Checkbox.module.scss';

interface Props {
  label: string;
  checked: boolean;
  error?: boolean;
  disabled?: boolean;
  onChange: (isChecked: boolean) => void;
}

export default function Checkbox({ label, checked, error = false, disabled = false, onChange }: Props) {
  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <label className={`${styles.checkboxContainer} ${error ? styles.error : ''}`}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <span className={styles.label}>{label}</span>
    </label>
  );
}
