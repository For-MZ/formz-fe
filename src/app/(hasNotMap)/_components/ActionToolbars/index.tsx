'use client';

import styles from './ActionToolbars.module.scss';
import Button from '@/components/UI/Button';
import BookmarkIcon from '/public/icons/bookmark.svg';
import ThumbsUpIcon from '/public/icons/thumbs-up.svg';
import ShareIcon from '/public/icons/share-2.svg';
import PrinterIcon from '/public/icons/printer.svg';
import ReactToPrint from 'react-to-print';
import { RefObject } from 'react';
import { usePathname } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { bookmark } from '../../_services/bookmark';
import { recommend } from '../../_services/recommend';

type Props = {
  printContentRef: RefObject<HTMLDivElement>;
};

export default function ActionToolbars({ printContentRef }: Props) {
  const pathname = usePathname();
  const [url, id] = pathname.split('/').slice(1);

  const createMutation = (
    mutateFn: () => Promise<void>,
    successMessage: string,
    errorMessage: string,
  ) =>
    useMutation({
      mutationFn: mutateFn,
      onSuccess: () => console.log(successMessage),
      onError: () => console.log(errorMessage),
    });

  const { mutate: bookmarkMutate } = createMutation(
    () => bookmark(url, id),
    '북마크 성공',
    '북마크 실패',
  );
  const { mutate: recommendMutate } = createMutation(
    () => recommend(url, id),
    '추천 성공',
    '추천 실패',
  );

  return (
    <div className={styles.container}>
      <Button
        design="outline"
        text="북마크"
        LeftIcon={BookmarkIcon}
        onClick={() => bookmarkMutate()}
      />
      <Button
        design="outline"
        text="추천"
        LeftIcon={ThumbsUpIcon}
        onClick={() => recommendMutate()}
      />
      <button className={styles.apiButton}>
        <ShareIcon width="20" height="20" />
      </button>
      <ReactToPrint
        trigger={() => (
          <button className={styles.apiButton}>
            <PrinterIcon width="20" height="20" />
          </button>
        )}
        content={() => printContentRef.current}
      />
    </div>
  );
}
