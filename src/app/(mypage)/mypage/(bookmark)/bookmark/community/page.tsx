import React from 'react';
import styles from './community.module.scss';
import CommunityContent from '@/app/(mypage)/_components/CommunityCcontent';

export default function community() {
  return (
    <div className={styles.container}>
      커뮤니티
      <div>
        <CommunityContent />
      </div>
    </div>
  );
}
