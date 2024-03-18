export type SimplePolicy = {
  policyId: string;
  title: string;
  description: string;
  policyField: string;
  organization: string;
  progress: '상시' | '진행 예정' | '진행중' | '신청 마감';
  viewCount: number;
  recommendCount: number;
};
