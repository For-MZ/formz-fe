'use client';

import styles from './HousingList.module.scss';
import { useQuery } from '@tanstack/react-query';
import HousingItem from './HousingItem';
import { Fragment } from 'react';

export default function HousingList() {
  const { data } = useQuery({
    queryKey: ['youth-housing', 'announcement'],
    queryFn: getHousingAnnouncement,
  });

  // 상세정보 API

  return (
    <ul className={styles.container}>
      {data?.map((item) => (
        <Fragment key={item.PAN_ID}>
          <HousingItem item={item} />
        </Fragment>
      ))}
    </ul>
  );
}

async function getHousingAnnouncement() {
  const response = await fetch(
    `http://apis.data.go.kr/B552555/lhLeaseNoticeInfo1/lhLeaseNoticeInfo1?serviceKey=${process.env.NEXT_PUBLIC_SERVICE_KEY}&PG_SZ=10&PAGE=1&UPP_AIS_TP_CD=06&PAN_ST_DT=20240215&PAN_ED_DT=20240415`,
  );
  const jsonData = await response.json();

  return jsonData[1].dsList;
}
