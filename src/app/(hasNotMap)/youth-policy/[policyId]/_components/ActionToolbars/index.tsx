'use client';

import { useState } from 'react';
import styles from './ActionToolbars.module.scss';
import Button from '@/components/UI/Button';
import BookmarkIcon from '/public/icons/bookmark.svg';
import ThumbsUpIcon from '/public/icons/thumbs-up.svg';
import ShareIcon from '/public/icons/share-2.svg';
import PrinterIcon from '/public/icons/printer.svg';

export default function ActionToolbars() {
  return (
    <div className={styles.container}>
      <Button
        design="outline"
        text="북마크"
        LeftIcon={BookmarkIcon}
        onClick={() => console.log('북마크')}
      />
      <Button
        design="outline"
        text="추천"
        LeftIcon={ThumbsUpIcon}
        onClick={() => console.log('추천')}
      />
      <button className={styles.apiButton}>
        <ShareIcon width="20" height="20" />
      </button>
      <button className={styles.apiButton}>
        <PrinterIcon width="20" height="20" />
      </button>
    </div>
  );
}
