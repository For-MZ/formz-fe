'use client';

import styles from './PostDetailPage.module.scss';
import { useParams } from 'next/navigation';
import Comments from './_components/Comments';

export default function PostDetailPage() {
  const { slug } = useParams();
  console.log(slug);

  return (
    <div className={styles.post}>
      <div className={styles.author}>
        <img src="/default-profile-image.png" alt="" />
        <div>강동욱</div>
        <div>2024.03.18</div>
        <div>조회수</div>
        <button>게시글 수정</button>
        <button>게시글 삭제</button>
      </div>
      <div className={styles.title}>
        <div>카테고리</div>
        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
      </div>
      <div className={styles.content}>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
        some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
        to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
        text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this
        the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
        of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
        therefore always free from repetition, injected humour, or non-characteristic words etc
      </div>
      <div className={styles.utilButtons}>
        <div>링크 복사</div>
        <div>북마크</div>
        <div>추천 아이콘</div>
      </div>
      <Comments />
    </div>
  );
}
