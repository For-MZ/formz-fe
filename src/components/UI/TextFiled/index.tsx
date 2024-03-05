import styles from './TextFiled.module.scss';
import Image, { StaticImageData } from 'next/image';
import { ChangeEventHandler } from 'react';

type Props = {
  placeholder?: string;
  helpMessage?: string;
  label?: string;
  isNotValid?: boolean;
  isDisable?: boolean;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  leftIcon?: StaticImageData;
  rightIcon?: StaticImageData;
  htmlFor?: string;
  inputId?: string;
  inputName?: string;
};

/**
 * @param placeholder - 텍스트 필드 안에 있는 힌트 텍스트
 * @param helpMessage - 텍스트 필드 밑에 있는 텍스트
 * @param label - 텍스트 필드 위에 있는 텍스트
 * @param isNotValid - 유효성 검사 상태 값
 * @param isDisable - 비활성화 상태 값
 * @param value - 텍스트 필드 상태 값
 * @param onChange - 텍스트 필드 체인지 이벤트 핸들러
 * @param leftIcon - 텍스트 필드 내부 왼쪽에 있는 아이콘
 * @param rightIcon - 텍스트 필드 내부 오른쪽에 있는 아이콘
 * @param htmlFor - label 태그 htmlFor 프로퍼티
 * @param inputId - input 태그 id 프로퍼티
 * @param inputName - input 태그 name 프로퍼티
 * @returns
 */
export default function TextFiled({
  placeholder,
  helpMessage,
  label,
  isNotValid,
  isDisable,
  value,
  onChange,
  leftIcon,
  rightIcon,
  htmlFor,
  inputId,
  inputName,
}: Props) {
  return (
    <div className={styles.container}>
      {label && <label htmlFor={htmlFor}>{label}</label>}
      <div className={`${styles.inputContainer} ${isNotValid && styles.error} ${isDisable && styles.disabled}`}>
        {leftIcon && <Image src={leftIcon} alt="아이콘" className={styles.icon} />}
        <input
          id={inputId}
          name={inputName}
          type="text"
          className={`${styles.input}`}
          placeholder={placeholder}
          disabled={isDisable}
          value={value}
          onChange={onChange}
        />
        {rightIcon && <Image src={rightIcon} alt="아이콘" className={`${styles.icon} ${styles.error}`} />}
      </div>
      {helpMessage && <p className={`${isNotValid && styles.error}`}>{helpMessage}</p>}
    </div>
  );
}
