export type SimplePlace = {
  placeId: string;
  title: string;
  image: string;
  simpleLocation: string;
  fullLocation: string;
  cost: '유료' | '부분 유료' | '무료';
  operation: '운영중' | '금일 운영 종료';
  viewCount: number;
  recommendCount: number;
};
