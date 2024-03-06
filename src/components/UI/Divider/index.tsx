import React from 'react';
import styles from './Divider.module.scss';

type Props = {
  style?: 'none' | 'text';
  text?: string;
};

export default function Divider({ text, style = 'none', ...props }: Props) {
  if (style === 'text') {
    return (
      <>
        <div className={styles.container}>
          <hr className={styles.textdivider}></hr>
          <div className={styles.text}>{text}</div>

          <hr className={styles.textdivider}></hr>
        </div>
      </>
    );
  } else return <hr {...props} className={`${styles.divider} ${styles[style]}`} />;
}
