'use client';

import { InputHTMLAttributes, useState } from 'react';
import styles from './TextField.module.scss';
import Image, { StaticImageData } from 'next/image';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  labelText?: string;
  valueProp?: string;
  onChangeProp?: (value: string) => void;
  hasError?: boolean;
  leftIcon?: StaticImageData;
  rightIcon?: StaticImageData;
  helpMessage?: string;
};

export default function TextField({
  labelText,
  valueProp,
  onChangeProp,
  hasError,
  leftIcon,
  rightIcon,
  helpMessage,
  ...inputProps
}: Props) {
  const [inputValue, setInputValue] = useState(valueProp || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChangeProp?.(event.target.value);
  };

  return (
    <div className={styles.textField}>
      {/* input과 연결되는 label */}
      {labelText && (
        <label className={styles.label} htmlFor={inputProps.id}>
          {labelText}
        </label>
      )}

      {/* input처럼 보이는 div */}
      <div className={`${styles.inputWrapper} ${hasError && styles.error} ${inputProps.disabled && styles.disabled}`}>
        {/* input처럼 보이는 div 내부 좌측 아이콘 */}
        {leftIcon && <Image src={leftIcon} alt="아이콘" className={styles.icon} />}
        {/* 실제 input */}
        <input {...inputProps} className={styles.input} value={inputValue} onChange={handleChange} />
        {/* input처럼 보이는 div 내부 우측 아이콘 */}
        {rightIcon && <Image src={rightIcon} alt="아이콘" className={styles.icon} />}
      </div>

      {/* input처럼 보이는 div 밑 헬프 메시지 */}
      {helpMessage && <p className={`${styles.helpMessage} ${hasError && styles.errorHelpMessage}`}>{helpMessage}</p>}
    </div>
  );
}
