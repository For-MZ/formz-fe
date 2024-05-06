import styles from './DetailContents.module.scss';
import { ReactNode, forwardRef } from 'react';

type DetailContentsProps = {
  children: ReactNode;
};

const DetailContents = forwardRef<HTMLDivElement, DetailContentsProps>((props, ref) => {
  const { children } = props;

  return (
    <div ref={ref} className={styles.wrapper}>
      {children}
    </div>
  );
});

DetailContents.displayName = 'DetailContents';

export default DetailContents;
