'use client';

import { useRef } from 'react';
import styles from './page.module.scss';
import PlaceMainInfo from '@/app/(hasNotMap)/youth-place/_components/PlaceMainInfo';
import Gallery from '@/app/(hasNotMap)/youth-place/_components/Gallery';
import PlaceDetailInfo from '@/app/(hasNotMap)/youth-place/_components/PlaceDetailInfo';
import WayToGo from '@/app/(hasNotMap)/youth-place/_components/WayToGo';
import ButtonWrapper from '@/app/(hasNotMap)/youth-place/_components/ButtonWrapper';
import ActionToolbars from '../../../../components/policy_place/ActionToolbars';
import DetailContents from '../../../../components/policy_place/DetailContents';

export default function PlaceDetailPage() {
  const componentRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.pageContainer}>
      <ActionToolbars printContentRef={componentRef} />
      <DetailContents ref={componentRef}>
        <PlaceMainInfo />
        <PlaceDetailInfo />
      </DetailContents>
      <Gallery />
      <WayToGo />
      <ButtonWrapper />
    </section>
  );
}
