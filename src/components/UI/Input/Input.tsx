import React from 'react';
import styles from './Input.module.scss';

type InputProps = {
  placeholder?: string;
};

export default function Input({ placeholder }: InputProps) {
  return (
    <>
      <input className={styles.input} placeholder={placeholder}></input>
    </>
  );
}
