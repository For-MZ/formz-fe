import React, { useState, useEffect } from 'react';
import styles from './carousel.module.scss';
import Image from 'next/image';

type Props = {
  images: string[];
  paths: string[];
};

export default function Carousel({ images, paths }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 4000);
    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 인터벌 해제
  }, [currentImageIndex]); // currentImageIndex가 변경될 때마다 useEffect가 실행되도록 설정

  const goToPreviousSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const handleImageClick = (index: number) => {
    window.location.href = paths[index];
  };

  const slideStyle = {
    transform: `translateX(-${currentImageIndex * 100}%)`, // 이미지를 슬라이드하기 위해 translateX 사용
  };

  return (
    <div className={styles.container}>
      <div className={styles['image-container']} style={slideStyle}>
        {images.map((image, index) => (
          <img
            key={index}
            className={styles.image}
            src={image}
            alt={`Slide ${index + 1}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      <button className={`${styles.control} ${styles.left}`} onClick={goToPreviousSlide}>
        <Image src={'/image/LeftButton.png'} width={50} height={50} />
      </button>
      <button className={`${styles.control} ${styles.right}`} onClick={goToNextSlide}>
        <Image src={'/image/RightButton.png'} width={50} height={50} />
      </button>
    </div>
  );
}
