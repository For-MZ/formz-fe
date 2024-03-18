'use client';

import styles from './Filter.module.scss';
import Button from '@/components/UI/Button';
import DropDown from '@/components/UI/DropDown';
import TextField from '@/components/UI/TextField';
import useInput from '@/hooks/useInput';
import { useState } from 'react';

const POLICY_FIELDS = ['전체', '일자리 분야', '주거 분야', '교육 분야', '복지﹒문화 분야', '참여﹒권리 분야'];
const AREAS = [
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
  '전체 선택',
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
  '전체 선택',
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
  '전체 선택',
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
  const [keyword, handleChange] = useInput('');
  const [selectedPolicy, setSelectedPolicy] = useState<string[]>([]);
  const [selectedArea, setSelectedArea] = useState<string[]>([]);
  const [selectedSpecialized, setSelectedSpecialized] = useState('전체 선택');
  const [selectedEmployment, setSelectedEmployment] = useState('전체 선택');
  const [selectedAcademy, setSelectedAcademy] = useState('전체 선택');
  const handleSelectPolicy = (selected: string) => {
    if (selectedPolicy.includes(selected)) {
      setSelectedPolicy(selectedPolicy.filter((item) => item !== selected));
    } else {
      setSelectedPolicy([...selectedPolicy, selected]);
    }
  };
  const handleSelectArea = (selected: string) => {
    if (selectedArea.includes(selected)) {
      setSelectedArea(selectedArea.filter((item) => item !== selected));
    } else {
      setSelectedArea([...selectedArea, selected]);
    }
  };
  const handleSelectField = (selected: string) => setSelectedSpecialized(selected);
  const handleSelectEmployment = (selected: string) => setSelectedEmployment(selected);
  const handleSelectAcademy = (selected: string) => setSelectedAcademy(selected);

  return (
    <>
      <h2>청년 정책</h2>
      <section className={styles.filterContainer}>
        <div className={styles.categoryWrapper}>
          <p className={styles.categoryTitle}>정책 이름 및 내용</p>
          <TextField value={keyword} onChange={handleChange} placeholder="키워드를 입력하세요." />
        </div>
        <div className={styles.categoryWrapper}>
          <p className={styles.categoryTitle}>정책 분야</p>
          <ul className={styles.listWrapper}>
            {POLICY_FIELDS.map((policy, index) => (
              <li key={index}>
                <Button
                  text={policy}
                  type={selectedPolicy.includes(policy) ? 'filled' : 'outline'}
                  onClick={() => handleSelectPolicy(policy)}
                  disabled={false}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.categoryWrapper}>
          <p className={styles.categoryTitle}>지역</p>
          <ul className={styles.listWrapper}>
            {AREAS.map((area, index) => (
              <li key={index}>
                <Button
                  text={area}
                  type={selectedArea.includes(area) ? 'filled' : 'outline'}
                  onClick={() => handleSelectArea(area)}
                  disabled={false}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.DropDownWrapper}>
          <div className={styles.categoryWrapper}>
            <p className={styles.categoryTitle}>특화분야</p>
            <DropDown options={SPECIALIZED_FIELDS} selected={selectedSpecialized} onSelect={handleSelectField} />
          </div>
          <div className={styles.categoryWrapper}>
            <p className={styles.categoryTitle}>취업상태</p>
            <DropDown options={EMPLOYMENT_STATUS} selected={selectedEmployment} onSelect={handleSelectEmployment} />
          </div>
          <div className={styles.categoryWrapper}>
            <p className={styles.categoryTitle}>학력</p>
            <DropDown options={ACADEMIC_ABILITY} selected={selectedAcademy} onSelect={handleSelectAcademy} />
          </div>
          <div className={styles.categoryWrapper}>
            <p className={styles.categoryTitle}>출생연도</p>
            <TextField value={keyword} onChange={handleChange} />
            <span>년생</span>
          </div>
        </div>
      </section>
      <div className={styles.buttonWrapper}>
        <Button text={'선택 초기화'} type="outline" onClick={() => console.log('클릭')} disabled={false} />
        <Button text={'검색'} type="outline" onClick={() => console.log('클릭')} disabled={false} />
      </div>
    </>
  );
}
