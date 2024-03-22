'use client';

import styles from './Filter.module.scss';
import TextField from '@/components/UI/TextField';
import SearchIcon from '/public/icons/search.svg';
import useInput from '@/hooks/useInput';
import Button from '@/components/UI/Button';
import FilterCategory from '../FilterCategory';

const DISTRICT = [
  '지역(시/도)',
  '서울',
  '부산',
  '대구',
  '인천',
  '광주',
  '대전',
  '울산',
  '경기',
  '강원',
  '충북',
  '충남',
  '전북',
  '전남',
  '경북',
  '경남',
  '제주',
  '세종',
];
const SUBDISTRICT = ['지역(시/군/구)']; // TODO 지역(시/도)에 따라서 유동적으로 변화해야 함
const COSTOFUSE = ['전체', '무료', '유료', '부분 유료'];
const STATUS_OPERATION = ['전체', '운영중', '금일 운영 마감'];
const RESERVATION = ['전체', '전화예약', '온라인 예약'];
const CONSULTATON_OF_EMPLOYMENT = ['전체', '가능', '불가능'];

export default function Filter() {
  const [keyword, handleChange] = useInput('');
  return (
    <>
      <section className={styles.filterContainer}>
        <div className={styles.searchWrapper}>
          <SearchIcon width="40" className={styles.icon} />
          <TextField value={keyword} onChange={handleChange} placeholder="청년공간 이름을 입력하세요." />
        </div>
        <div className={styles.DropDownWrapper}>
          <FilterCategory dropDownOptions={DISTRICT} category={'지역(시/도)'} />
          <FilterCategory dropDownOptions={SUBDISTRICT} category={'지역(시/군/구)'} />
          <FilterCategory dropDownOptions={COSTOFUSE} category={'센터 운영 비용'} />
          <FilterCategory dropDownOptions={STATUS_OPERATION} category={'운영 상태'} />
          <FilterCategory dropDownOptions={RESERVATION} category={'예약 방법'} />
          <FilterCategory dropDownOptions={CONSULTATON_OF_EMPLOYMENT} category={'취업상담여부'} />
        </div>
      </section>
      <div className={styles.buttonWrapper}>
        <Button text={'선택 초기화'} design="outline" onClick={() => console.log('클릭')} />
        <Button text={'검색'} design="outline" onClick={() => console.log('클릭')} />
      </div>
    </>
  );
}
