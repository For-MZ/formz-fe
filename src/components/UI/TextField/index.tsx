import styles from './TextField.module.scss';

type Props = {
  labelText?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  required?: boolean;
  id?: string;
  name?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  LeftIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  RightIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  width?: string;
  height?: string;
};

export default function TextField({
  value,
  onChange,
  labelText,
  id,
  name,
  type,
  required,
  placeholder,
  error,
  disabled,
  LeftIcon,
  RightIcon,
  width,
  height,
}: Props) {
  return (
    <div className={styles.container}>
      {/* input과 연결되는 label */}
      {labelText && <label htmlFor={id}>{labelText}</label>}
      {/* input처럼 보이는 div */}
      <div
        style={{ width, height }}
        className={`${styles.inputWrapper} ${error && styles.error} ${disabled && styles.disabled}`}
      >
        {/* input처럼 보이는 div 내부 좌측 아이콘 */}
        {LeftIcon && <LeftIcon className={styles.icon} />}
        {/* 실제 input */}
        <input
          className={styles.input}
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          value={value}
          onChange={onChange}
        />
        {/* input처럼 보이는 div 내부 우측 아이콘 */}
        {RightIcon && <RightIcon className={styles.icon} />}
      </div>
    </div>
  );
}
