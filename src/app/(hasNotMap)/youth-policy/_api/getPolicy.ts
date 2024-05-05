import { SimplePolicy } from '@/types/policy';
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
                policyField: youthPolicyItem.polyRlmCd[0],
                organization: youthPolicyItem.cnsgNmor[0],
                progress: youthPolicyItem.rqutPrdCn[0],
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
