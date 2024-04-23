import ActionToolbars from './_components/ActionToolbars';
import BottomButtons from './_components/BottomButtons';
import DetailInfo from './_components/DetailInfo';
import styles from './page.module.scss';
import EyeIcon from '/public/icons/eye.svg';
import ThumbsUpIcon from '/public/icons/thumbs-up.svg';

type Props = {
  params: { policyId: string };
};

const policy = {
  policyId: '1',
  title: '청년 주택드림 청약통장',
  description: '중소기업에 취업한 청년들에게 저리의 중소기업 취업청년 전월세보증금을 대출',
  policyField: '주거분야',
  organization: '국토교통부',
  progress: '진행중',
  viewCount: 20,
  recommendCount: 14,
};

export default function PolicyDetailPage({ params }: Props) {
  const { title, description, policyField, progress, viewCount, recommendCount } = policy;
  return (
    <section className={styles.pageWrapper}>
      <ActionToolbars />
      <div className={styles.keyInfo}>
        <div className={styles.categories}>
          <p className={styles.field}>{policyField}</p>
          <p className={styles.progress}>{progress}</p>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.iconWrapper}>
          <div className={styles.icon}>
            <EyeIcon />
            <span>{viewCount}</span>
          </div>
          <div className={styles.icon}>
            <ThumbsUpIcon />
            <span>{recommendCount}</span>
          </div>
        </div>
      </div>
      <DetailInfo title="한 눈에 보는 정책 요약" />
      <DetailInfo title="신청 자격" />
      <DetailInfo title="신청 방법" />
      <DetailInfo title="기타" />
      <BottomButtons />
    </section>
  );
}
