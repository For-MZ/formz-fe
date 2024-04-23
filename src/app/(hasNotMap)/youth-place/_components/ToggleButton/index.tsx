'use client';

import styles from './ToggleButton.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  defaultView: 'card' | 'map';
};

export default function ToggleButton({ defaultView }: Props) {
  const router = useRouter();
  const [viewFormat, setViewFormat] = useState<'card' | 'map'>(defaultView);
  const handleToggleButton = (viewFormat: 'card' | 'map') => {
    setViewFormat(viewFormat);
    switch (viewFormat) {
      case 'card':
        router.push('/youth-place');
        return;
      case 'map':
        router.push('/youth-place/placeMapList');
        return;
    }
  };
  return (
    <div className={styles.wrapper}>
      <button
        className={viewFormat === 'card' ? styles.selected : styles.unseleceted}
        onClick={() => handleToggleButton('card')}
      >
        카드
      </button>
      <button
        className={viewFormat === 'map' ? styles.selected : styles.unseleceted}
        onClick={() => handleToggleButton('map')}
      >
        지도
      </button>
    </div>
  );
}
