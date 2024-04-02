'use client';

import Button from '@/components/UI/Button';
import BookmarkIcon from '/public/icons/bookmark.svg';

type Props = {
  isBookmark?: boolean;
};

export default function BookmarkPost({ isBookmark }: Props) {
  const bookmarkPost = () => {};

  return (
    <Button design="transparent" onClick={bookmarkPost}>
      {isBookmark ? (
        <BookmarkIcon fill="black" width="20" height="20" />
      ) : (
        <BookmarkIcon width="20" height="20" />
      )}
    </Button>
  );
}
