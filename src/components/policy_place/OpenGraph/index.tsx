'use client';

import styles from './OpenGraph.module.scss';
import { ChangeEventHandler, Dispatch, MouseEventHandler, SetStateAction, useState } from 'react';
import Button from '@/components/UI/Button';
import CloseIcon from '/public/icons/x.svg';
import LogoKakao from '/public/icons/kakao_logo.svg';
import LogoInstagram from '/public/icons/instagram_logo.svg';
import LogoTwitter from '/public/icons/twitter_logo.svg';
import Toast from '@/components/UI/Toast';

type Props = {
  url: string;
  setIsShowOG: Dispatch<SetStateAction<boolean>>;
};

export default function OpenGraph({ url: initialUrl, setIsShowOG }: Props) {
  const [status, setStatus] = useState<'success' | 'error' | ''>('');
  const [inputUrl, setInputUrl] = useState(initialUrl);
  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => setInputUrl(e.target.value);
  const handleContainerClick: MouseEventHandler<HTMLDivElement> = (e) => e.stopPropagation();
  const handleCopyBtn: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(initialUrl);
      setStatus('success');
    } catch (e) {
      setStatus('error');
    }
  };

  const handleCloseBtn: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setIsShowOG((isShow) => !isShow);
  };

  return (
    <>
      {status === 'success' && <Toast text="클립보드에 url이 복사되었습니다!" type="default" />}
      {status === 'error' && <Toast text="url 복사에 실패했습니다" type="error" />}
      <article className={styles.container}>
        <h6>공유하기</h6>
        <button className={styles.closeBtn} onClick={handleCloseBtn}>
          <CloseIcon />
        </button>
        <div className={styles.snsWrapper}>
          <button className={styles.snsContent}>
            <LogoKakao width="36" height="36" />
            <span>카카오</span>
          </button>
          {/* <div className={styles.snsContent}>
          <div className={styles.twitter}>
            <LogoTwitter />
          </div>
          <span>트위터</span>
        </div>
        <div className={styles.snsContent}>
          <LogoInstagram />
          <span>인스타그램</span>
        </div> */}
        </div>
        <div className={styles.copyForm} onClick={handleContainerClick}>
          <input type="text" value={inputUrl} onChange={handleInput} />
          <Button design="filled" text="복사" className={styles.button} onClick={handleCopyBtn} />
        </div>
      </article>
    </>
  );
}
