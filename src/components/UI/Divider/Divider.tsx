import React from 'react';
import styles from './Divider.module.scss';

type DividerProps = {
  style?: 'none' | 'text';
};

export default function Divider({ style = 'none', ...props }: DividerProps) {
  return <hr {...props} className={`${styles.divider} ${styles[style]}`} />;
}
