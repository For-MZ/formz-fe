import { ProgressType, SimplePolicy } from '@/types/policy';
import xml2js from 'xml2js';

type policyItem = { [key: string]: string[] };

export const getSimplePolicy = async (): Promise<SimplePolicy[]> => {
  const API_KEY = process.env.NEXT_PUBLIC_OPEN_API_KEY;
  try {
    const response = await fetch(
      `/youthPlcyList.do?openApiVlak=${API_KEY}&pageIndex=1&display=100`,
      {
        method: 'GET',
      },
    );
    const xmlData = await response.text();

    return new Promise((resolve, reject) => {
      xml2js.parseString(xmlData, (err, result) => {
        if (err) {
          console.log('Error parsing XML:', err);
          reject(err);
        } else {
          const youthPolicyList = result.youthPolicyList.youthPolicy;
          const simplePolicy: SimplePolicy[] = youthPolicyList.map(
            (youthPolicyItem: policyItem) => {
              return {
                policyId: youthPolicyItem.bizId[0],
                title: youthPolicyItem.polyBizSjnm[0],
                description: youthPolicyItem.polyItcnCn[0],
                policyField: fieldToType(youthPolicyItem.polyRlmCd[0]),
                organization: youthPolicyItem.cnsgNmor[0],
                progress: progressToType(youthPolicyItem.rqutPrdCn[0]),
                url: youthPolicyItem.rfcSiteUrla1,
                viewCount: 0,
                recommendCount: 0,
              };
            },
          );
          resolve(simplePolicy);
        }
      });
    });
  } catch (error) {
    console.log('Internal server error', error);
    throw error;
  }
};

const fieldToType = (code: string) => {
  switch (code) {
    case '023010':
      return '일자리 분야';
    case '023020':
      return '주거 분야';
    case '023030':
      return '교육 분야';
    case '023040':
      return '복지.문화 분야';
    case '023050':
      return '참여.권리 분야';
  }
};

const progressToType = (period: string): ProgressType => {
  const today = new Date();
  const startDate = new Date(period.split('~')[0]);

  if (period.includes('상시') || period.includes('계속')) {
    return '상시';
  }

  if (startDate < today) {
    return '진행중';
  } else if (startDate > today) {
    return '진행 예정';
  } else {
    return '홈페이지 확인';
  }
};
