import { createPortal } from 'react-dom';
import styles from './modal.module.scss';

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: Props) {
  const portalElement = document.getElementById('portal') as Element;

  const handleClose: React.MouseEventHandler<HTMLElement> = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.backdrop} onClick={handleClose}>
      <div className={styles.content}>{children}</div>
    </div>,
    portalElement,
  );
}
