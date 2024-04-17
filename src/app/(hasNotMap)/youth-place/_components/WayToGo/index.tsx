'use client';

import { faker } from '@faker-js/faker';
import styles from './WayToGo.module.scss';
import { FullPlace } from '@/types/place';
import Button from '@/components/UI/Button';
import MapPin from '/public/icons/map-pin.svg';
import Copy from '/public/icons/copy.svg';
import Map from '@/components/Map';
import { useRouter } from 'next/navigation';

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

export default function WayToGo() {
  const { address } = place;
  const router = useRouter();
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('클립보드에 링크가 복사되었습니다.');
    } catch (e) {
      console.log('복사에 실패하였습니다');
    }
  };

  const handleFindAWay = () => {
    router.push(`https://map.naver.com/p/directions/${address}`);
  };

  return (
    <section className={styles.container}>
      <h5>찾아가는 길</h5>
      <div className={styles.wrapper}>
        <div className={styles.addressCopy}>
          <p>주소: {address}</p>
          <button onClick={() => handleCopyClipBoard(address)}>
            <Copy />
          </button>
        </div>
        <Button design="outline" text="길찾기" LeftIcon={MapPin} onClick={handleFindAWay} />
      </div>
      <div className={styles.mapApi}>
        <Map />
      </div>
    </section>
  );
}
