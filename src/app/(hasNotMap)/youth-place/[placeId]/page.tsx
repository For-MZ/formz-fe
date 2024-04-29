'use client';

import PlaceMainInfo from '@/app/(hasNotMap)/youth-place/_components/PlaceMainInfo';
import styles from './page.module.scss';
import Gallery from '@/app/(hasNotMap)/youth-place/_components/Gallery';
import PlaceDetailInfo from '@/app/(hasNotMap)/youth-place/_components/PlaceDetailInfo';
import WayToGo from '@/app/(hasNotMap)/youth-place/_components/WayToGo';
import ButtonWrapper from '@/app/(hasNotMap)/youth-place/_components/ButtonWrapper';
import ActionToolbars from '../../_components/ActionToolbars';
import { useRef } from 'react';

export default function PlaceDetailPage() {
  const componentRef = useRef<HTMLDivElement>(null);
  // const mainInfoRef = useRef<HTMLDivElement>(null);
  // const detailInfoRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.pageContainer}>
      <ActionToolbars printContentRef={componentRef} />
      <PlaceMainInfo ref={componentRef} />
      <Gallery />
      <PlaceDetailInfo />
      <WayToGo />
      <ButtonWrapper />
    </section>
  );
}
