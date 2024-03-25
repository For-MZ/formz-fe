'use client';

import styles from './PostDetailPage.module.scss';
// import { useParams } from 'next/navigation';
import Comments from './_components/Comments';
import Button from '@/components/UI/Button';
import Category from '../../_components/FilterablePosts/PostList/PostItem/Category';
import HitsIcon from '/public/icons/eye.svg';
import LinkIcon from '/public/icons/link.svg';
import BookmarkIcon from '/public/icons/bookmark.svg';
import ThumbsUpIcon from '/public/icons/thumbs-up.svg';

// 게시글 상세 페이지 컴포넌트
export default function PostDetailPage() {
  // const { slug } = useParams();

  // TODO getPost(slug)

  return (
    <section className={styles.postDetail}>
      <div className={styles.headerBox}>
        <img className={styles.authorImage} src="/default-profile-image.png" alt="유저 프로필 이미지" />
        <div className={styles.metaDataBox}>
          <div className={styles.author}>강동욱</div>
          <div className={styles.postMetaData}>
            <time className={styles.createdAt}>2024년 3월 25일 오후 10시 30분</time>
            <div className={styles.hitsBox}>
              <HitsIcon width="20" height="20" />
              <span>12</span>
            </div>
          </div>
        </div>
        {/* postMutationBox는 자신의 게시글일때만 보이게 처리 */}
        <div className={styles.postMutationBox}>
          <Button className={styles.edit} design="transparent" text="수정" onClick={() => {}} />
          <Button className={styles.delete} design="transparent" text="삭제" onClick={() => {}} />
        </div>
      </div>
      <div className={styles.titleBox}>
        <Category category="꿀팁" />
        <h1 className={styles.title}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.
        </h1>
      </div>
      <p className={styles.content}>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
        some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
        to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
        text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this
        the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
        of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
        therefore always free from repetition, injected humour, or non-characteristic words etc There are many
        variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
        injected humour, or randomised words which don't look even slightly believable. If you are going to use a
        passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All
        the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first
        true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
        always free from repetition, injected humour, or non-characteristic words etc There are many variations of
        passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
        you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator
        on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
        structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free
        from repetition, injected humour, or non-characteristic words etc There are many variations of passages of Lorem
        Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words
        which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure
        there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
        tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a
        dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem
        Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or randomised words which don't look even
        slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
        embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
        predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of
        over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
        reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
        non-characteristic words etc There are many variations of passages of Lorem Ipsum available, but the majority
        have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
        believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
        embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
        predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of
        over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
        reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
        non-characteristic words etc There are many variations of passages of Lorem Ipsum available, but the majority
        have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
        believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
        embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
        predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of
        over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
        reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
        non-characteristic words etc There are many variations of passages of Lorem Ipsum available, but the majority
        have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
        believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
        embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
        predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of
        over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
        reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
        non-characteristic words etc There are many variations of passages of Lorem Ipsum available, but the majority
        have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
        believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
        embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
        predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of
        over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
        reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
        non-characteristic words etc
      </p>
      <div className={styles.utilButtons}>
        <button onClick={() => {}}>
          <LinkIcon width="20" height="20" />
        </button>
        <button onClick={() => {}}>
          <BookmarkIcon width="20" height="20" />
        </button>
        <div className={styles.thumbsUpBox}>
          <button onClick={() => {}}>
            <ThumbsUpIcon width="20" height="20" />
          </button>
          <span>12</span>
        </div>
      </div>
      <Comments />
    </section>
  );
}
