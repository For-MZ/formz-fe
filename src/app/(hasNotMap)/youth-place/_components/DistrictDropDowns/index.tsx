'use client';

import { useEffect, useState } from 'react';
import DropDown from '@/components/UI/DropDown';
import { handleSubDistrictsChange } from '@/utils/subDistrict';

type Props = {
  district: string;
  setDistrict: (selected: string) => void;
  subDistrict: string;
  setSubDistrict: (selected: string) => void;
};

const DISTRICT = [
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
export default function DistrictDropDowns({
  district,
  setDistrict,
  subDistrict,
  setSubDistrict,
}: Props) {
  const SUBDISTRICT = handleSubDistrictsChange(district);
  const [key, setKey] = useState(0);
  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
    setSubDistrict('');
  }, [district]);
  console.log(district, subDistrict);
  return (
    <>
      <DropDown
        value={district}
        options={DISTRICT}
        onSelect={(selected: string) => setDistrict(selected)}
        placeholder="지역(시/도)"
      />
      <DropDown
        value={subDistrict}
        key={key}
        options={SUBDISTRICT}
        onSelect={(selected: string) => setSubDistrict(selected)}
        placeholder="지역(시/군/구)"
      />
    </>
  );
}
