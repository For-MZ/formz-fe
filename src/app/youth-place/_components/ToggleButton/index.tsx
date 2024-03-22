'use client';

import Button from '@/components/UI/Button';
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
      <Button
        design={viewFormat === 'card' ? 'filled' : 'transparent'}
        onClick={() => handleToggleButton('card')}
        text="카드"
      />
      <Button
        design={viewFormat === 'map' ? 'filled' : 'transparent'}
        onClick={() => handleToggleButton('map')}
        text="지도"
      />
    </div>
  );
}
