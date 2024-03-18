import { createPortal } from 'react-dom';
import styles from './Alert.module.scss';

type Props = {
  children: React.ReactNode;
  onClose: () => void;
  heading?: string;
};

export default function Alert({ children, onClose, heading }: Props) {
  const portalElement = document.getElementById('portal') as Element;

  const handleClose: React.MouseEventHandler = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.backdrop} onClick={handleClose}>
      <div className={styles.modalContainer}>
        <h6>{heading}</h6>
        <div className={styles.contentContainer}>
          <p>{children}</p>
          <button onClick={handleClose}>확인</button>
        </div>
      </div>
    </div>,
    portalElement,
  );
}
