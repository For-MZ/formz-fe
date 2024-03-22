import Link from 'next/link';
import styles from './Banner.module.scss';
import WriteIcon from '/public/icons/edit-2.svg';

export default function Banner() {
  return (
    <section className={styles.bannerContainer}>
      <h1 className={styles.title}>
        MZ 세대의 현실과 꿈을 나누는
        <br /> 커뮤니티에 오신것을 환영합니다!
      </h1>
      <Link href="/community/posts/new" className={styles.postNewLink}>
        <WriteIcon />글 작성하러 가기
      </Link>
    </section>
  );
}
