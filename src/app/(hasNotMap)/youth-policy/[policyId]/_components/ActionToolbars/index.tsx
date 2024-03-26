'use client';

import { useState } from 'react';
import styles from './ActionToolbars.module.scss';
import Image from 'next/image';

export default function ActionToolbars() {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.container}>
      <p className={styles.button} onClick={() => setVisible((prev) => !prev)}>
        <Image src="/icons/share-2.svg" alt="공유 아이콘" width={30} height={30} />
      </p>
      <p className={styles.button}>
        <Image src="/icons/printer.svg" alt="인쇄 아이콘" width={30} height={30} />
      </p>
    </div>
  );
}
