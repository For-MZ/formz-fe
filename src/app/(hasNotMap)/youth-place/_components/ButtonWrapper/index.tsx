'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/UI/Button';
import styles from './ButtonWrapper.module.scss';
import ExternalLink from '/public/icons/external-link.svg';
import { FullPlace } from '@/types/place';
import { faker } from '@faker-js/faker';

const place: FullPlace = {
  spcId: '202403260001',
  spcName: '용산 청년지음',
  operOrgan: '서울특별시 용산구',
  spcTime: '월,화,수,금 09:00 ~ 18:00, 목09:00~21:00',
  address: '서울특별시 용산구 서빙고로 17 공공시설동 3층',
  telNo: '02-6261-1934',
  spcCost: '무료',
  foodYn: '제공안함, 공유부엌 구비',
  reservationMethod: '온라인 예약',
  homepage: 'https://blog.naver.com/yongsanyouthspace',
  counseling: '가능(예약)',
  image: faker.image.urlLoremFlickr(),
};

export default function ButtonWrapper() {
  const router = useRouter();
  const handleGoToHomepage = () => {
    window.open(`${place.homepage}`);
  };
  return (
    <div className={styles.wrapper}>
      <Button
        text="예약 사이트로 바로가기"
        design="filled"
        LeftIcon={ExternalLink}
        onClick={handleGoToHomepage}
      />
      <Button text="이전 화면으로" design="outline" onClick={() => router.back()} />
    </div>
  );
}
