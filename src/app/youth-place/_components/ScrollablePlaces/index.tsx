import { SimplePlace } from '@/types/place';
import PlaceCard from '../PlaceCard';
import styles from './ScollablePlaces.module.scss';
import { faker } from '@faker-js/faker';

const places: SimplePlace[] = [
  {
    placeId: '1',
    title: "안성시 청년문화공간'청년톡톡'",
    image: faker.image.urlLoremFlickr(),
    simpleLocation: '경기 안성시',
    fullLocation: '경기도 안성시 인지2길 16-8',
    cost: '유료',
    operation: '금일 운영 종료',
    viewCount: 20,
    recommendCount: 14,
  },
  {
    placeId: '2',
    title: "안성시 청년문화공간'청년톡톡'",
    image: faker.image.urlLoremFlickr(),
    simpleLocation: '경기 안성시',
    fullLocation: '경기도 안성시 인지2길 16-8',
    cost: '유료',
    operation: '운영중',
    viewCount: 20,
    recommendCount: 14,
  },
  {
    placeId: '3',
    title: "안성시 청년문화공간'청년톡톡'",
    image: faker.image.urlLoremFlickr(),
    simpleLocation: '경기 안성시',
    fullLocation: '경기도 안성시 인지2길 16-8',
    cost: '유료',
    operation: '운영중',
    viewCount: 20,
    recommendCount: 14,
  },
  {
    placeId: '4',
    title: "안성시 청년문화공간'청년톡톡'",
    image: faker.image.urlLoremFlickr(),
    simpleLocation: '경기 안성시',
    fullLocation: '경기도 안성시 인지2길 16-8',
    cost: '유료',
    operation: '운영중',
    viewCount: 20,
    recommendCount: 14,
  },
  {
    placeId: '5',
    title: "안성시 청년문화공간'청년톡톡'",
    image: faker.image.urlLoremFlickr(),
    simpleLocation: '경기 안성시',
    fullLocation: '경기도 안성시 인지2길 16-8',
    cost: '유료',
    operation: '운영중',
    viewCount: 20,
    recommendCount: 14,
  },
  {
    placeId: '6',
    title: "안성시 청년문화공간'청년톡톡'",
    image: faker.image.urlLoremFlickr(),
    simpleLocation: '경기 안성시',
    fullLocation: '경기도 안성시 인지2길 16-8',
    cost: '유료',
    operation: '운영중',
    viewCount: 20,
    recommendCount: 14,
  },
  {
    placeId: '7',
    title: "안성시 청년문화공간'청년톡톡'",
    image: faker.image.urlLoremFlickr(),
    simpleLocation: '경기 안성시',
    fullLocation: '경기도 안성시 인지2길 16-8',
    cost: '유료',
    operation: '운영중',
    viewCount: 20,
    recommendCount: 14,
  },
  {
    placeId: '8',
    title: "안성시 청년문화공간'청년톡톡'",
    image: faker.image.urlLoremFlickr(),
    simpleLocation: '경기 안성시',
    fullLocation: '경기도 안성시 인지2길 16-8',
    cost: '유료',
    operation: '운영중',
    viewCount: 20,
    recommendCount: 14,
  },
  {
    placeId: '9',
    title: "안성시 청년문화공간'청년톡톡'",
    image: faker.image.urlLoremFlickr(),
    simpleLocation: '경기 안성시',
    fullLocation: '경기도 안성시 인지2길 16-8',
    cost: '유료',
    operation: '운영중',
    viewCount: 20,
    recommendCount: 14,
  },
];

export default function ScrollablePlaces() {
  return (
    <ul className={styles.wrapper}>
      {places &&
        places.map((place) => (
          <li key={place.placeId}>
            <PlaceCard place={place} />
          </li>
        ))}
    </ul>
  );
}
