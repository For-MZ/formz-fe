import styles from './Banner.module.scss';
import Image from 'next/image';
import YouthPlaceBanner from '/public/image/youthPlace-banner.png';

export default function Banner() {
  return (
    <section className={styles.container}>
      <div className={styles.leftArea}>
        <h2 className={styles.title}>
          한 눈에 보이는
          <br /> 내 주변 청년 공간
        </h2>
        <p>모든 청년 공간을 지도에 한 번에 확인하세요.</p>
      </div>
      <Image src={YouthPlaceBanner} alt="청년공간 배너 이미지" priority width={400} />
    </section>
  );
}
