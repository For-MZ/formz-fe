'use client';

import { useEffect, useState } from 'react';
import styles from './Filter.module.scss';
import TextField from '@/components/UI/TextField';
import SearchIcon from '/public/icons/search.svg';
import useInput from '@/hooks/useInput';
import Button from '@/components/UI/Button';
import DropDown from '@/components/UI/DropDown';
import DistrictDropDowns from '@/app/(hasNotMap)/youth-place/_components/DistrictDropDowns';

const COSTOFUSE = ['전체', '무료', '유료', '부분 유료'];
const STATUS_OPERATION = ['전체', '운영중', '금일 운영 마감'];
const RESERVATION = ['전체', '전화예약', '온라인 예약'];
const CONSULTATON_OF_EMPLOYMENT = ['전체', '가능', '불가능'];

export default function Filter() {
  const [keyword, handleChange] = useInput('');
  const [district, setDistrict] = useState('');
  const [subDistrict, setSubDistrict] = useState('');
  const [, setCost] = useState('');
  const [, setOperation] = useState('');
  const [, setReservation] = useState('');
  const [, setConsultation] = useState('');
  const [key, setKey] = useState(0);

  useEffect(() => {
    setDistrict('');
    setCost('');
    setOperation('');
    setReservation('');
    setConsultation('');
  }, [key]);
  return (
    <>
      <section className={styles.filterContainer}>
        <div className={styles.searchWrapper}>
          <SearchIcon width="40" className={styles.icon} />
          <TextField
            value={keyword}
            onChange={handleChange}
            placeholder="청년공간 이름을 입력하세요."
          />
        </div>
        <div className={styles.DropDownWrapper} key={key}>
          <DistrictDropDowns
            district={district}
            setDistrict={setDistrict}
            subDistrict={subDistrict}
            setSubDistrict={setSubDistrict}
          />
          <DropDown
            options={COSTOFUSE}
            onSelectProp={(selected: string) => setCost(selected)}
            placeholder="센터 운영 비용"
          />
          <DropDown
            options={STATUS_OPERATION}
            onSelectProp={(selected: string) => setOperation(selected)}
            placeholder="운영 상태"
          />
          <DropDown
            options={RESERVATION}
            onSelectProp={(selected: string) => setReservation(selected)}
            placeholder="예약 방법"
          />
          <DropDown
            options={CONSULTATON_OF_EMPLOYMENT}
            onSelectProp={(selected: string) => setConsultation(selected)}
            placeholder="취업상담여부"
          />
        </div>
      </section>
      <div className={styles.buttonWrapper}>
        <Button
          text={'선택 초기화'}
          design="outline"
          onClick={() => setKey((prevKey) => prevKey + 1)}
        />
        <Button text={'검색'} design="filled" onClick={() => console.log('클릭')} />
      </div>
    </>
  );
}
