import styles from './TextField.module.scss';
import Image, { StaticImageData } from 'next/image';

type Props = {
  id?: string;
  label?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  helpMessage?: string;
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  leftIcon?: StaticImageData;
  rightIcon?: StaticImageData;
  inputName?: string;
  width?: string; // 너비 조절을 위한 props 추가
};

/**
 * @param id - label과 input 연결하는 id
 * @param label - 인풋 위에 있는 텍스트
 * @param value - 인풋 상태 값
 * @param onChange - 인풋 체인지 이벤트 핸들러
 * @param placeholder - 인풋 안에 있는 힌트 텍스트
 * @param helpMessage - 인풋 밑에 있는 텍스트
 * @param error - 유효성 불통과
 * @param success - 유효성 통과
 * @param disabled - 비활성화 상태 값
 * @param leftIcon - 인풋 내부 왼쪽에 있는 아이콘
 * @param rightIcon - 인풋 내부 오른쪽에 있는 아이콘
 * @param inputName - input name 프로퍼티, useForm 사용 시 필요
 * @returns
 */
export default function TextField({
  id,
  label,
  value,
  onChange,
  placeholder,
  helpMessage,
  error,
  success,
  disabled,
  leftIcon,
  rightIcon,
  inputName,
  width,
}: Props) {
  return (
    <div className={styles.container}>
      {label && <label htmlFor={id}>{label}</label>}
      <div
        style={{ width }}
        className={`${styles.inputWrapper} ${error && styles.error} ${disabled && styles.disabled}`}
      >
        {leftIcon && <Image src={leftIcon} alt="아이콘" className={styles.icon} />}
        <input
          type="text"
          id={id}
          name={inputName}
          className={styles.input}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
        {rightIcon && <Image src={rightIcon} alt="아이콘" className={styles.icon} />}
      </div>
      {helpMessage && (
        <p className={`${styles.helpMessage} ${error && styles.error} ${success && styles.success}`}>{helpMessage}</p>
      )}
    </div>
  );
}
