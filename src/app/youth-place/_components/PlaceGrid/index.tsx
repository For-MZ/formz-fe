import PlaceCard from '../PlaceCard';
import styles from './PlaceGrid.module.scss';

export default function PlaceGrid() {
  return (
    <ul className={styles.gridContainer}>
      <PlaceCard />
      <PlaceCard />
      <PlaceCard />
      <PlaceCard />
      <PlaceCard />
      <PlaceCard />
      <PlaceCard />
      <PlaceCard />
      <PlaceCard />
      <PlaceCard />
      <PlaceCard />
    </ul>
  );
}
