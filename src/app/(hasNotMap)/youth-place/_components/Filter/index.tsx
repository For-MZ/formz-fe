'use client';

import { useEffect, useState } from 'react';
import styles from './Filter.module.scss';
import Button from '@/components/UI/Button';
import DropDown from '@/components/UI/DropDown';
import DistrictDropDowns from '@/app/(hasNotMap)/youth-place/_components/DistrictDropDowns';
import Menu from '/public/icons/menu.svg';
import SearchIcon from '/public/icons/search.svg';
import TextField from '@/components/UI/TextField';
import useInput from '@/hooks/useInput';

const COSTOFUSE = ['전체', '무료', '유료', '부분 유료'];
const STATUS_OPERATION = ['전체', '운영중', '금일 운영 마감'];
const RESERVATION = ['전체', '전화예약', '온라인 예약'];
const CONSULTATON_OF_EMPLOYMENT = ['전체', '가능', '불가능'];

export default function Filter() {
  const [value, handleChange, initValue] = useInput('');
  const [district, setDistrict] = useState('');
  const [subDistrict, setSubDistrict] = useState('');
  const [cost, setCost] = useState('');
  const [operation, setOperation] = useState('');
  const [reservation, setReservation] = useState('');
  const [consultation, setConsultation] = useState('');
  const [key, setKey] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const onShowDropDowns = () => setIsShow((prev) => !prev);

  useEffect(() => {
    initValue();
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
          <TextField
            name="search"
            value={value}
            onChange={handleChange}
            LeftIcon={SearchIcon}
            type="search"
            placeholder="청년공간 이름을 입력하세요."
            className={styles.textfield}
          />
          <Button
            design="outline"
            className={styles.moreButton}
            LeftIcon={Menu}
            onClick={onShowDropDowns}
          />
        </div>
        {isShow && (
          <div className={styles.DropDownWrapper} key={key}>
            <DistrictDropDowns
              district={district}
              setDistrict={setDistrict}
              subDistrict={subDistrict}
              setSubDistrict={setSubDistrict}
            />
            <DropDown
              value={cost}
              options={COSTOFUSE}
              onSelect={(selected: string) => setCost(selected)}
              placeholder="센터 운영 비용"
            />
            <DropDown
              value={operation}
              options={STATUS_OPERATION}
              onSelect={(selected: string) => setOperation(selected)}
              placeholder="운영 상태"
            />
            <DropDown
              value={reservation}
              options={RESERVATION}
              onSelect={(selected: string) => setReservation(selected)}
              placeholder="예약 방법"
            />
            <DropDown
              value={consultation}
              options={CONSULTATON_OF_EMPLOYMENT}
              onSelect={(selected: string) => setConsultation(selected)}
              placeholder="취업상담여부"
            />
          </div>
        )}
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
