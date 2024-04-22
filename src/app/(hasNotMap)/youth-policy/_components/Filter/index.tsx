'use client';

import styles from './Filter.module.scss';
import Button from '@/components/UI/Button';
import DropDown from '@/components/UI/DropDown';
import TextField from '@/components/UI/TextField';
import useInput from '@/hooks/useInput';
import SearchIcon from '/public/icons/search.svg';
import { useEffect, useState } from 'react';
import Menu from '/public/icons/menu.svg';

const POLICY_FIELDS = [
  '전체',
  '일자리 분야',
  '주거 분야',
  '교육 분야',
  '복지﹒문화 분야',
  '참여﹒권리 분야',
];
const DISTRICTS = [
  '전체',
  '중앙부처',
  '서울',
  '부산',
  '대구',
  '인천',
  '공주',
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
const SPECIALIZED_FIELDS = [
  '전체',
  '중소기업',
  '여성',
  '저소득층',
  '장애인',
  '농업인',
  '군인',
  '지역인재',
  '제한없음',
];
const EMPLOYMENT_STATUS = [
  '전체',
  '재직자',
  '자영업자',
  '미취업자',
  '프리랜서',
  '일용근로자',
  '(예비)창업자',
  '단기근로자',
  '영농종사자',
  '제한없음',
];
const ACADEMIC_ABILITY = [
  '전체',
  '고졸 미만',
  '고교 재학',
  '고졸 예정',
  '고교 졸업',
  '대학 재학',
  '대졸 예정',
  '대학 졸업',
  '석﹒박사',
  '제한없음',
];
export default function Filter() {
  const [nameValue, handleChangePolicyName, initNameValue] = useInput('');
  const [ageValue, handleChangeAge, initAgeValue] = useInput('');
  const [field, setField] = useState('');
  const [district, setDistrict] = useState('');
  const [specializedField, setSpecializedField] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [academicAbility, setAcademicAbility] = useState('');
  const [key, setKey] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const onShowDropDowns = () => setIsShow((prev) => !prev);

  useEffect(() => {
    initNameValue();
    initAgeValue();
    setField('');
    setDistrict('');
    setSpecializedField('');
    setEmploymentStatus('');
    setAcademicAbility('');
  }, [key]);

  return (
    <>
      <section className={styles.filterContainer}>
        <div className={styles.searchWrapper}>
          <TextField
            name="search"
            value={nameValue}
            onChange={handleChangePolicyName}
            LeftIcon={SearchIcon}
            type="search"
            placeholder="청년정책 이름을 입력하세요."
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
            <DropDown
              value={field}
              options={POLICY_FIELDS}
              onSelect={(selected: string) => setField(selected)}
              placeholder="정책 분야"
              className={styles.dropdown}
            />
            <DropDown
              value={district}
              options={DISTRICTS}
              onSelect={(selected: string) => setDistrict(selected)}
              placeholder="지역"
              className={styles.dropdown}
            />
            <DropDown
              value={specializedField}
              options={SPECIALIZED_FIELDS}
              onSelect={(selected: string) => setSpecializedField(selected)}
              placeholder="특화 분야"
              className={styles.dropdown}
            />
            <DropDown
              value={academicAbility}
              options={ACADEMIC_ABILITY}
              onSelect={(selected: string) => setAcademicAbility(selected)}
              placeholder="학력"
              className={styles.dropdown}
            />
            <DropDown
              value={employmentStatus}
              options={EMPLOYMENT_STATUS}
              onSelect={(selected: string) => setEmploymentStatus(selected)}
              placeholder="취업 상태"
              className={styles.dropdown}
            />
            <div className={styles.ageWrapper}>
              <TextField
                value={ageValue}
                onChange={handleChangeAge}
                placeholder="ex. 1997"
                type="number"
              />
              <p>년생</p>
            </div>
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
