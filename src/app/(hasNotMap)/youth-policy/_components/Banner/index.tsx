import styles from './Banner.module.scss';
import Image from 'next/image';
import YouthPolicyBanner from '/public/image/youthPolicy-banner.png';

export default function Banner() {
  return (
    <section className={styles.container}>
      <div className={styles.leftArea}>
        <h2 className={styles.title}>청년정책 맞춤별 조회</h2>
        <p>
          다양한 옵션을 적용하여 <br />
          나에게 딱 맞는 청년정책을 알아가세요.
        </p>
      </div>
      <Image src={YouthPolicyBanner} alt="청년정책 배너 이미지" priority width={340} />
    </section>
  );
}
