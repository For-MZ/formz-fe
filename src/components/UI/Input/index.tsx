'use client';

import React, { useState, ChangeEvent } from 'react';
import styles from './Input.module.scss';

type Props = {
  type: string;
  placeholder?: string;
  value: string;
  invalidValue?: string;
  disabled?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ type, placeholder, value, onChange, invalidValue, disabled = false }: Props) {
  const [showWarning, setShowWarning] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);
    if (invalidValue && event.target.value === invalidValue) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        className={`${styles.input} ${showWarning ? styles.invalid : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        disabled={disabled}
      />
      {showWarning && <span className={styles.warningText}>text</span>}
    </div>
  );
}
