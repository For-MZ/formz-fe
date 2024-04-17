import styles from './Avatar.module.scss';

type Props = {
  size?: 'lg' | 'md';
  imageUrl: string;
  nickname: string;
};

export default function Avatar({ size = 'md', imageUrl, nickname }: Props) {
  return (
    <div className={styles.container}>
      <img
        className={`${styles.avatar} ${size === 'lg' && styles.lg}`}
        src={imageUrl}
        alt={`${nickname}님의 프로필 이미지`}
      />
    </div>
  );
}
