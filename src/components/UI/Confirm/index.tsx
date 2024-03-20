import { createPortal } from 'react-dom';
import styles from './confirm.module.scss';
import Button from '../Button';

type Props = {
  children: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  heading?: string;
  rightButtonText: string;
};

export default function Confirm({ children, onConfirm, onCancel, heading, rightButtonText }: Props) {
  const portalElement = document.getElementById('portal') as Element;

  const handleClose = (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    // 이벤트 버블링 막기
    if (event.target === event.currentTarget) {
      onCancel();
    }
  };

  const handleConfirm = () => {
    onConfirm();
  };

  return createPortal(
    <div className={styles.backdrop} onClick={handleClose}>
      <div className={styles.modal}>
        <p className={styles.title}>{heading}</p>
        <p className={styles.content}>{children}</p>
        <div className={styles.buttons}>
          <Button design="outline" text="취소" className={styles.button} onClick={handleClose} />
          <Button design="filled" text={rightButtonText} className={styles.button} onClick={handleConfirm} />
        </div>
      </div>
    </div>,
    portalElement,
  );
}
