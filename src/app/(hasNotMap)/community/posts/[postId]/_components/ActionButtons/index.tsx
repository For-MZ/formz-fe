import Button from '@/components/UI/Button';
import styles from './ActionButtons.module.scss';
import CopyLinkIcon from '/public/icons/link.svg';
import BookmarkIcon from '/public/icons/bookmark.svg';
import ToggleIcon from '@/components/UI/ToggleIcon';
import LikeIcon from '/public/icons/thumbs-up.svg';
import { useParams } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { bookmarkPost } from '../../_services/bookmarkPost';
import { likePost } from '../../_services/likePost';

type Props = {
  likeCount: number;
};

export default function ActionButtons({ likeCount }: Props) {
  const { postId } = useParams();

  const { mutate } = useMutation({
    mutationFn: () => bookmarkPost(postId as string),
    onSuccess: () => {
      alert('북마크 성공');
      // TODO 낙관적 업데이트 or getPostDetail invalidate
    },
    onError: () => {
      alert('북마크 실패');
    },
  });
  const { mutate: likePostMutate } = useMutation({
    mutationFn: () => likePost(postId as string),
    onSuccess: () => {
      alert('추천 성공');
      // TODO 낙관적 업데이트 or getPostDetail invalidate
    },
    onError: () => {
      alert('추천 실패');
    },
  });

  return (
    <div className={styles.container}>
      <Button design="transparent" onClick={() => {}}>
        <CopyLinkIcon width="20" height="20" />
      </Button>
      <ToggleIcon icon={<BookmarkIcon />} onClick={mutate} />
      <ToggleIcon icon={<LikeIcon />} onClick={likePostMutate} count={likeCount} />
    </div>
  );
}
