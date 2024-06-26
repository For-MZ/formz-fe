import { InputHTMLAttributes } from 'react';
import styles from './TextField.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  labelText?: string;
  hasError?: boolean;
  LeftIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  RightIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  RightIconOnClick?: () => void; // 추가: RightIcon 클릭 이벤트 핸들러
  helpMessage?: string;
  className?: string;
  labelClassName?: string;
};

export default function TextField({
  labelText,
  hasError,
  LeftIcon,
  RightIcon,
  RightIconOnClick, // 추가: RightIcon 클릭 이벤트 핸들러
  helpMessage,
  className,
  labelClassName,
  ...inputProps
}: Props) {
  return (
    <div className={styles.textField}>
      {labelText && (
        // inputProps.id 연결 시 자동으로 labelTag htmlFor 프로퍼티 같은 값 적용
        <label
          className={`${labelClassName ? labelClassName : styles.label}`}
          htmlFor={inputProps.id}
        >
          {labelText}
        </label>
      )}
      {/* input처럼 보이는 div */}
      <div
        className={`${styles.input} ${className} ${hasError && styles.error} ${inputProps.disabled && styles.disabled}`}
      >
        {/* input처럼 보이는 div 내부 좌측 아이콘 */}
        {LeftIcon && <LeftIcon className={styles.icon} />}
        {/* 실제 input */}
        <input {...inputProps} className={styles.realInput} />
        {/* input처럼 보이는 div 내부 우측 아이콘 */}
        {RightIcon && <RightIcon className={styles.icon} onClick={RightIconOnClick} />}
      </div>
      {/* input처럼 보이는 div 밑 헬프 메시지 */}
      {hasError && (
        <p className={`${styles.helpMessage} ${hasError && styles.errorHelpMessage}`}>
          {helpMessage}
        </p>
      )}
    </div>
  );
}
