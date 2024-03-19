'use client';

import styles from './PostDetailPage.module.scss';
import { useParams } from 'next/navigation';
import Comments from './_components/Comments';
import Button from '@/components/UI/Button';
import Category from '../../_components/Category';

export default function PostDetailPage() {
  const { slug } = useParams();

  // TODO getPost(slug)

  return (
    <div className={styles.post}>
      <div className={styles.metaData}>
        <div>
          <img style={{ width: '64px', height: '64px' }} src="/default-profile-image.png" alt="유저 프로필 이미지" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>강동욱</div>
          <div>2024.03.18</div>
        </div>
        <div>조회수</div>
        <div className={styles.postMutation}>
          <Button type="filled" text="수정" disabled={false} onClick={() => {}} />
          <Button type="filled" text="삭제" disabled={false} onClick={() => {}} />
        </div>
      </div>
      <div className={styles.titleBox}>
        <Category category="꿀팁" />
        <h1 className={styles.title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
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
        from repetition, injected humour, or non-characteristic words etc
      </p>
      <div className={styles.utilButtons}>
        <Button type="filled" text="링크 복사" disabled={false} onClick={() => {}} />
        <Button type="filled" text="북마크" disabled={false} onClick={() => {}} />
        <Button type="filled" text="추천" disabled={false} onClick={() => {}} />
      </div>
      <Comments />
    </div>
  );
}
