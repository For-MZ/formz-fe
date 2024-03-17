import styles from './TextField.module.scss';
import Image, { StaticImageData } from 'next/image';

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
  leftIcon?: StaticImageData;
  rightIcon?: StaticImageData;
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
  leftIcon,
  rightIcon,
  width,
  height,
}: Props) {
  return (
    <div className={styles.container}>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <div
        style={{ width, height }}
        className={`${styles.inputWrapper} ${error && styles.error} ${disabled && styles.disabled}`}
      >
        {leftIcon && <Image src={leftIcon} alt="아이콘" className={styles.icon} />}
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
        {rightIcon && <Image src={rightIcon} alt="아이콘" className={styles.icon} />}
      </div>
    </div>
  );
}
