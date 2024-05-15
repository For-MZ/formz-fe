'use client';
import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState(null); // 초기 상태를 null로 설정

  useEffect(() => {
    fetch(
      `https://apis.data.go.kr/B552555/lhLeaseInfo1/lhLeaseInfo1?serviceKey=${process.env.NEXT_PUBLIC_SERVICE_KEY}&PG_SZ=5000&PAGE=1`,
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // 응답을 JSON 형태로 파싱
      })
      .then((json) => {
        setData(json[1].dsList); // dsList 배열에 있는 데이터 저장
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  if (!data) return <div>No data available</div>;

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <h3>건물이름: {item.SBD_LGO_NM}</h3>
            <p>임대타입: {item.AIS_TP_CD_NM}</p>
            <p>건물종류: {item.HSH_CNT}</p>
            <p>공급처: {item.ARA_NM}</p>
            <p>공급면적: {item.DDO_AR}</p>
            <p>전용면적: {item.LS_GMY}</p>
            <p>
              주소: {item.ARA_NM} {item.SBD_LGO_NM}
            </p>
            <p>
              보증금: {item.RFE.toLocaleString()} 원, 월세:
              {item.SUM_HSH_CNT.toLocaleString()} 원
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
