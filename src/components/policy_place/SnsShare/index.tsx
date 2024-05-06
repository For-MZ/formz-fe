'use client';

import styles from './SnsShare.module.scss';
import { MouseEventHandler, useState } from 'react';
import ShareSvg from '/public/icons/share-2.svg';
import OpenGraph from '@/components/policy_place/OpenGraph';

type Props = {
  homePageUrl: string;
};

export default function SnsShare({ homePageUrl }: Props) {
  const [isShowOG, setIsShowOG] = useState(false);
  const toggleOpenGraph: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setIsShowOG((isShow) => !isShow);
  };

  return (
    <>
      <button className={styles.shareIcon} onClick={toggleOpenGraph}>
        <ShareSvg className={styles.icon} width="16" height="16" />
      </button>
      {isShowOG && <OpenGraph url={homePageUrl} setIsShowOG={setIsShowOG} />}
    </>
  );
}
