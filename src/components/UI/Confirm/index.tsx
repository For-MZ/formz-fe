import { createPortal } from 'react-dom';
import styles from './confirm.module.scss';

type Props = {
  children: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function Confirm({ children, onConfirm, onCancel }: Props) {
  const portalElement = document.getElementById('portal') as Element;

  return createPortal(
    <div
      className={styles.backdrop}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onCancel();
        }
      }}
    >
      <div className={styles.modal}>
        <div className={styles.message}>{children}</div>
        <div className={styles.buttons}>
          <button onClick={onConfirm}>확인</button>
          <button onClick={onCancel}>취소</button>
        </div>
      </div>
    </div>,
    portalElement,
  );
}
