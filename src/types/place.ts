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

export type FullPlace = {
  spcId: string;
  spcName: string;
  operOrgan: string;
  spcTime: string;
  address: string;
  telNo: string;
  spcCost: string;
  foodYn: string;
  reservationMethod: string;
  homepage: string;
  counseling: string;
  image: string;
};

export type DetailPlace = { spcType: string; description: string; capacity: string }[];
