'use client';

import styles from './Gallery.module.scss';
import { useState } from 'react';
import MultiCarousel from '../MultiCarousel';
import Image from 'next/image';
import { faker } from '@faker-js/faker';
import Loading from '@/components/UI/Loading';

const spcImages = [
  { spcIdx: 1, spcImage: faker.image.urlLoremFlickr(), spcName: '라운지' },
  { spcIdx: 2, spcImage: faker.image.urlLoremFlickr(), spcName: '회의실A' },
  { spcIdx: 3, spcImage: faker.image.urlLoremFlickr(), spcName: '회의실B' },
  { spcIdx: 4, spcImage: faker.image.urlLoremFlickr(), spcName: '휴식공간' },
  { spcIdx: 5, spcImage: faker.image.urlLoremFlickr(), spcName: '체험실' },
];

export default function Gallery() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <section className={styles.container}>
      <h5>갤러리</h5>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        (!spcImages || spcImages.length === 0) && <p>{`청년공간 이미지가 없습니다.`}</p>
      )}
      {spcImages && spcImages.length > 0 && (
        <MultiCarousel>
          {spcImages.map((image) => (
            <div key={image.spcIdx} className={styles.imgWrapper}>
              <Image src={image.spcImage} alt={`청년공간 ${image.spcName} 공간 상세 이미지`} width={320} height={320} />
              <p>{image.spcName}</p>
            </div>
          ))}
        </MultiCarousel>
      )}
    </section>
  );
}
