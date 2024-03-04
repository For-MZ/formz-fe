import React from 'react';
import styles from './Divider.module.scss';

type DividerProps = {
  style?: 'none' | 'text';
  text?: string;
};

export default function Divider({ text, style = 'none', ...props }: DividerProps) {
  if (style === 'text') {
    return (
      <>
        <div className={styles.test}>
          <hr className={styles.dividertest}></hr>
          <div>{text}</div>

          <hr className={styles.dividertest}></hr>
        </div>
      </>
    );
  } else return <hr {...props} className={`${styles.divider} ${styles[style]}`} />;
}
