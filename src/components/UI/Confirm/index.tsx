import { createPortal } from 'react-dom';
import styles from './confirm.module.scss';

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
      <div className={styles.modalContainer}>
        <h6>{heading}</h6>
        <div className={styles.contentContainer}>
          <p>{children}</p>
          <div className={styles.buttons}>
            <button onClick={handleClose}>취소</button>
            <button onClick={handleConfirm}>{rightButtonText}</button>
          </div>
        </div>
      </div>
    </div>,
    portalElement,
  );
}
