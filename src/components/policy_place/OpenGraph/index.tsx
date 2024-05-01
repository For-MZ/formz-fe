'use client';

import { useState } from 'react';
import styles from './OpenGraph.module.scss';
import Button from '@/components/UI/Button';
import CloseIcon from '/public/icons/x.svg';
import LogoKakao from '/public/icons/kakao_logo.svg';
import LogoInstagram from '/public/icons/instagram_logo.svg';
import LogoTwitter from '/public/icons/twitter_logo.svg';

export default function OpenGraph() {
  const [url, setUrl] = useState('');

  const handleInput = () => {};
  const handleCopyBtn = () => {};
  const handleCloseBtn = () => {};

  return (
    <article className={styles.container}>
      <h6>공유하기</h6>
      <button className={styles.closeBtn} onClick={handleCloseBtn}>
        <CloseIcon />
      </button>
      <div className={styles.snsWrapper}>
        <div className={styles.snsContent}>
          <LogoKakao width="36" height="36" />
          <span>카카오</span>
        </div>
        <div className={styles.snsContent}>
          <div className={styles.twitter}>
            <LogoTwitter />
          </div>
          <span>트위터</span>
        </div>
        <div className={styles.snsContent}>
          <LogoInstagram />
          <span>인스타그램</span>
        </div>
      </div>
      <div className={styles.copyForm}>
        <input type="text" value={url} onChange={handleInput} />
        <Button design="filled" text="복사" className={styles.button} onClick={handleCopyBtn} />
      </div>
    </article>
  );
}
