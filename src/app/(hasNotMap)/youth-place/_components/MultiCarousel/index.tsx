import styles from './MultiCarousel.module.scss';
import { ReactNode } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

type Props = {
  children: ReactNode;
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
};

export default function MultiCarousel({ children }: Props) {
  return (
    <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000} itemClass={styles.carouselItem}>
      {children}
    </Carousel>
  );
}
