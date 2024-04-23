import styles from './PlaceMainInfo.module.scss';
import { FullPlace } from '@/types/place';
import Image from 'next/image';
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

export default function PlaceMainInfo() {
  return (
    <div className={styles.container}>
      <Image src={place.image} alt="청년공간 대표 이미지" width={360} height={360} />
      <section className={styles.infoWrapper}>
        <h5>{place.spcName}</h5>
        <div>
          <p>센터 번호</p>
          <p>{place.spcId}</p>
        </div>
        <div>
          <p>운영 기관</p>
          <p>{place.operOrgan}</p>
        </div>
        <div>
          <p>센터 이용 시간</p>
          <p>{place.spcTime}</p>
        </div>
        <div>
          <p>주소</p>
          <p>{place.address}</p>
        </div>
        <div>
          <p>문의처</p>
          <p>{place.telNo}</p>
        </div>
        <div>
          <p>이용 비용</p>
          <p>{place.spcCost}</p>
        </div>
        <div>
          <p>식음료</p>
          <p>{place.foodYn}</p>
        </div>
        <div>
          <p>센터 이용 방법</p>
          <p>{place.reservationMethod}</p>
        </div>
        <div>
          <p>홈페이지</p>
          <p>{place.homepage}</p>
        </div>
        <div>
          <p>취업상담</p>
          <p>{place.counseling}</p>
        </div>
      </section>
    </div>
  );
}
