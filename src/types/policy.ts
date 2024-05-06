export type SimplePolicy = {
  policyId: string;
  title: string;
  description: string;
  policyField: string;
  organization: string;
  progress: ProgressType;
  url: string;
  viewCount: number;
  recommendCount: number;
};

export type ProgressType = '상시' | '진행 예정' | '진행중' | '홈페이지 확인';
