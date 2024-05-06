import styles from './IconCounter.module.scss';
import EyeIcon from '/public/icons/eye.svg';
import ThumbsUpIcon from '/public/icons/thumbs-up.svg';

type Props = {
  viewCount: number;
  recommendCount: number;
  className?: string;
};

export default function IconCounter({ viewCount, recommendCount, className }: Props) {
  return (
    <div className={`${styles.iconWrapper} ${className}`}>
      <div className={styles.icon}>
        <EyeIcon />
        <span>{viewCount}</span>
      </div>
      <div className={styles.icon}>
        <ThumbsUpIcon />
        <span>{recommendCount}</span>
      </div>
    </div>
  );
}
