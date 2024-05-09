import { DetailPlace } from '@/types/place';
import styles from './PlaceDetailInfo.module.scss';
import { forwardRef } from 'react';

const placeDetailType: DetailPlace = [
  {
    spcType: '회의실 (4개)',
    description:
      '□ 회의실A - 수용인원수:2~6명 - 공간설명:소규모 세미나. 회의, 모임 등이 가능한 공간으로 최소 2인~최대6인이 이용 가능한 공간입니다. □ 회의실B - 수용인원수:2~6명 - 공간설명:소규모 세미나. 회의, 모임 등이 가능한 공간으로 최소 2인~최대6인이 이용 가능한 공간입니다.',
    capacity: '42명',
  },
  {
    spcType: '라운지 (1개)',
    description:
      '□ 라운지 - 수용인원수:1~30명 - 공간설명:카페형 공용 공간으로 스터디,휴식,세미나. 회의, 모임 등이 가능한 공간으로 최소 1인~최대30인이 이용 가능한 공간입니다.',
    capacity: '30명',
  },
  {
    spcType: '상담실 (1개)',
    description: '2명',
    capacity: '2명',
  },
];

const PlaceDetailInfo = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} className={styles.container}>
      <h5>장소 유형별 상세 정보</h5>
      <div className={styles.detailTable}>
        <div className={styles.titleWrapper}>
          <p>유형</p>
          <p>설명</p>
          <p>수용 인원</p>
        </div>
        <div className={styles.typesWrapper}>
          {placeDetailType &&
            placeDetailType.length > 0 &&
            placeDetailType.map((type, index) => (
              <div className={styles.contents} key={index}>
                <p className={styles.spcType}>{type.spcType}</p>
                <p className={styles.description}>{type.description}</p>
                <p className={styles.capacity}>{type.capacity}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
});

PlaceDetailInfo.displayName = 'PlaceDetailInfo';

export default PlaceDetailInfo;
