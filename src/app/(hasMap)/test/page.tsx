'use client';
import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState(null); // 초기 상태를 null로 설정

  useEffect(() => {
    fetch(
      `https://apis.data.go.kr/1613000/HWSPR04/rentalHouseGwList?serviceKey=${process.env.NEXT_PUBLIC_SERVICE_KEY}&brtcCode=11&signguCode=110&numOfRows=10&pageNo=1`,
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // 응답을 JSON 형태로 파싱
      })
      .then((json) => {
        setData(json.response.body); // body 부분만 저장
        console.log(data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  if (!data) return <div>No data available</div>;

  return (
    <div>
      <ul>
        {data.item.map((item, index) => (
          <li key={index}>
            <h3>건물이름: {item.hsmpNm}</h3>
            <p>임대타입: {item.suplyTyNm}</p>
            <p>건물종류: {item.houseTyNm}</p>
            <p>공급처: {item.insttNm}</p>
            <p>공급면적: {item.suplyPrvuseAr}</p>
            <p>전용면적: {item.suplyCmnuseAr}</p>
            <p>주소:{item.rnAdres}</p>
            <p>
              보증금: {item.bassRentGtn.toLocaleString()} 원, 월세:
              {item.bassMtRntchrg.toLocaleString()} 원
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
