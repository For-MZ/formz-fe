'use client';

import { MouseEventHandler, useState } from 'react';
import styles from './SnsShare.module.scss';
import ShareSvg from '/public/icons/share-2.svg';
import OpenGraph from '@/components/policy_place/OpenGraph';

export default function SnsShare() {
  const [isShowOG, setIsShowOG] = useState(false);
  const onOpenGraph: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setIsShowOG((isShow) => !isShow);
  };

  return (
    <>
      <button className={styles.shareIcon} onClick={onOpenGraph}>
        <ShareSvg className={styles.icon} width="16" height="16" />
      </button>
      {isShowOG && <OpenGraph />}
    </>
  );
}
