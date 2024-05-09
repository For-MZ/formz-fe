'use client';
import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState(null); // 초기 상태를 null로 설정

  useEffect(() => {
    const fetchData = async (brtcCode, signguCode) => {
      try {
        const response = await fetch(
          `https://apis.data.go.kr/1613000/HWSPR04/rentalHouseGwList?serviceKey=${process.env.NEXT_PUBLIC_SERVICE_KEY}&brtcCode=${brtcCode}&signguCode=${signguCode}&numOfRows=10&pageNo=1`,
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const json = await response.json(); // 응답을 JSON 형태로 파싱
        return json.response.body; // body 부분만 반환
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    };

    const brtcCodes = [11, 26];
    const signguCodesMap = {
      11: [440, 470, 500, 530, 545, 560, 590, 620, 650, 680, 710, 740],
      26: [110, 140, 170, 200, 230, 260, 290, 320, 350, 380, 410, 440, 470, 500, 530, 710],
    };

    const fetchDataSequentially = async () => {
      const allData = [];
      for (const brtcCode of brtcCodes) {
        const signguCodes = signguCodesMap[brtcCode];
        for (const signguCode of signguCodes) {
          const data = await fetchData(brtcCode, signguCode);
          allData.push(data);
        }
      }
      setData(allData.flat());
      console.log(allData.flat()); // 데이터 로깅은 setData 이후에 실행
    };

    fetchDataSequentially();
  }, []);

  if (!data) return <div>Loading...</div>; // 데이터가 없는 경우 로딩 중을 표시

  return (
    <div>
      <ul>
        {data.map((group, groupIndex) => (
          <li key={groupIndex}>
            <h4>Group {groupIndex + 1}</h4>
            <ul>
              {group.item.map((item, index) => (
                <li key={index}>
                  <h3>건물이름: {item.hsmpNm}</h3>
                  <p>임대타입: {item.suplyTyNm}</p>
                  <p>건물종류: {item.houseTyNm}</p>
                  <p>공급처: {item.insttNm}</p>
                  <p>공급면적: {item.suplyPrvuseAr}</p>
                  <p>전용면적: {item.suplyCmnuseAr}</p>
                  <p>주소: {item.rnAdres}</p>
                  <p>
                    보증금: {item.bassRentGtn ? item.bassRentGtn.toLocaleString() : 'N/A'} 원, 월세:
                    {item.bassMtRntchrg ? item.bassMtRntchrg.toLocaleString() : 'N/A'} 원
                  </p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
