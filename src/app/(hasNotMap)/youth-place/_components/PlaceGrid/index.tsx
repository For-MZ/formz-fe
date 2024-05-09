import styles from './PlaceGrid.module.scss';
import { SimplePlace } from '@/types/place';
import PlaceCard from '../PlaceCard';
import { faker } from '@faker-js/faker';

const places: SimplePlace[] = [
  {
    placeId: '1',
    title: "ㄱ안성시 청년문화공간'청년톡톡'",
    image: faker.image.urlLoremFlickr(),
    simpleLocation: '경기 안성시',
    fullLocation: '경기도 안성시 인지2길 16-8',
    cost: '유료',
    operation: '금일 운영 종료',
    viewCount: 1,
    recommendCount: 1,
  },
  {
    placeId: '2',
    title: "12안성시 청년문화공간'청년톡톡'",
    image: faker.image.urlLoremFlickr(),
    simpleLocation: '경기 안성시',
    fullLocation: '경기도 안성시 인지2길 16-8',
    cost: '유료',
    operation: '운영중',
    viewCount: 2,
    recommendCount: 10,
  },
  {
    placeId: '3',
    title: "안성시 청년문화공간'청년톡톡'",
    image: faker.image.urlLoremFlickr(),
    simpleLocation: '경기 안성시',
    fullLocation: '경기도 안성시 인지2길 16-8',
    cost: '유료',
    operation: '운영중',
    viewCount: 3,
    recommendCount: 5,
  },
  {
    placeId: '4',
    title: "ㅇ안성시 청년문화공간'청년톡톡'",
    image: faker.image.urlLoremFlickr(),
    simpleLocation: '경기 안성시',
    fullLocation: '경기도 안성시 인지2길 16-8',
    cost: '유료',
    operation: '운영중',
    viewCount: 9,
    recommendCount: 100,
  },
  {
    placeId: '5',
    title: "ㄴ안성시 청년문화공간'청년톡톡'",
    image: faker.image.urlLoremFlickr(),
    simpleLocation: '경기 안성시',
    fullLocation: '경기도 안성시 인지2길 16-8',
    cost: '유료',
    operation: '운영중',
    viewCount: 4,
    recommendCount: 12,
  },
  {
    placeId: '6',
    title: "ㅎ안성시 청년문화공간'청년톡톡'",
    image: faker.image.urlLoremFlickr(),
    simpleLocation: '경기 안성시',
    fullLocation: '경기도 안성시 인지2길 16-8',
    cost: '유료',
    operation: '운영중',
    viewCount: 6,
    recommendCount: 3,
  },
  {
    placeId: '7',
    title: "ㅎㅎ안성시 청년문화공간'청년톡톡'",
    image: faker.image.urlLoremFlickr(),
    simpleLocation: '경기 안성시',
    fullLocation: '경기도 안성시 인지2길 16-8',
    cost: '유료',
    operation: '운영중',
    viewCount: 8,
    recommendCount: 9,
  },
  {
    placeId: '8',
    title: "기안성시 청년문화공간'청년톡톡'",
    image: faker.image.urlLoremFlickr(),
    simpleLocation: '경기 안성시',
    fullLocation: '경기도 안성시 인지2길 16-8',
    cost: '유료',
    operation: '운영중',
    viewCount: 7,
    recommendCount: 12,
  },
  {
    placeId: '9',
    title: "내안성시 청년문화공간'청년톡톡'",
    image: faker.image.urlLoremFlickr(),
    simpleLocation: '경기 안성시',
    fullLocation: '경기도 안성시 인지2길 16-8',
    cost: '유료',
    operation: '운영중',
    viewCount: 4,
    recommendCount: 14,
  },
];

type Props = {
  selectedOption: string;
};

export default function PlaceGrid({ selectedOption }: Props) {
  const sortedPlaces = [...places].sort((a, b) => {
    if (selectedOption === 'moreView') {
      return b.viewCount - a.viewCount;
    } else if (selectedOption === 'recommended') {
      return b.recommendCount - a.recommendCount;
    } else if (selectedOption === 'alphabetical') {
      return a.title.localeCompare(b.title);
    } else {
      // 기본 조회순 정렬
      return b.viewCount - a.viewCount;
    }
  });

  return (
    <ul className={styles.gridContainer}>
      {places &&
        sortedPlaces.map((place) => (
          <li key={place.placeId}>
            <PlaceCard place={place} />
          </li>
        ))}
    </ul>
  );
}
