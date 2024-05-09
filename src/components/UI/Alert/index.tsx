'use client';

import { createPortal } from 'react-dom';
import styles from './Alert.module.scss';
import Button from '../Button';

type Props = {
  children: React.ReactNode;
  onClose: () => void;
  heading?: string;
};

export default function Alert({ children, onClose, heading }: Props) {
  const portalElement = document.getElementById('portal') as Element;

  const handleClose = (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    // 이벤트 버블링 막기
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.backdrop} onClick={handleClose}>
      <div className={styles.modal}>
        <p className={styles.title}>{heading}</p>
        <p className={styles.content}>{children}</p>
        <Button className={styles.button} design="filled" text="확인" onClick={handleClose} />
      </div>
    </div>,
    portalElement,
  );
}
