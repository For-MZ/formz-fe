import React from 'react';
import styles from './LandingPage.module.scss';
import Image from 'next/image';
import Button from '../UI/Button';
import Carousel from './_components/Carousel/page';
import Link from 'next/link';

const images = [
  '/image/banner1.png',
  '/image/banner2.png',
  '/image/banner3.png',
  '/image/banner4.png',
];
const paths = ['/youth-policy', '/youth-place', '/youth-housing', '/community'];
export default function LandingPage() {
  return (
    <div className={styles.container}>
      <Carousel images={images} paths={paths} />
      <div className={styles.write}>
        <div className={styles.writecontent}>
          <h2>청년 커뮤니티를 통해</h2>
          <h2>다양한 정보를 얻고 소통해보세요!</h2>
          <div className={styles.button}>
            <Link href={'/community/posts/new'}>
              <Button design="filled" text="글 쓰러가기" />
            </Link>
          </div>
        </div>
      </div>
      <h2 className={styles.h2}>청년을 위한 다양한 정보를 나누는 플랫폼</h2>

      <div>전국의 청년들이 모여 정보를 얻고 나누며 소통하고 있어요!</div>
      <Image className={styles.image} src={'/image/statistics.png'} width={1200} height={200} />
    </div>
  );
}
