import { useState } from 'react';
import CommentsForm from './CommentsForm';
import styles from './Comments.module.scss';
import Image from 'next/image';
import thumbsUpIcon from '/public/icons/thumbs-up.svg';

export default function Comments() {
  const [isVisibleReplyList, setIsVisibleReplyList] = useState<boolean>(false);
  const [isVisibleReplyForm, setIsVisibleReplyForm] = useState<boolean>(false);
  const comments = [
    {
      content: '댓글 1 내용',
      createdAt: '1시간전',
      email: 'test@test.com',
      uid: '1',
    },
    {
      content: '댓글 2 내용',
      createdAt: '1시간전',
      email: 'test@test.com',
      uid: '2',
    },
    {
      content: '댓글 3 내용',
      createdAt: '1시간전',
      email: 'test@test.com',
      uid: '3',
    },
    {
      content: '댓글 4 내용',
      createdAt: '1시간전',
      email: 'test@test.com',
      uid: '4',
    },
    {
      content: '댓글 5 내용',
      createdAt: '1시간전',
      email: 'test@test.com',
      uid: '5',
    },
  ];

  return (
    <section className={styles.comments}>
      댓글 개수 표시
      <CommentsForm />
      <ul className={styles.commentsList}>
        {comments.map((comment, i) => (
          <li className={styles.commentsListItem} key={i}>
            <div>
              <img src="" alt="" />
              <div>{comment.email}</div>
              <div>{comment.createdAt}</div>
            </div>
            <p>{comment.content}</p>
            <div className={styles.buttons}>
              <div>
                <Image src={thumbsUpIcon} width={16} height={16} alt="추천 아이콘"></Image>
                10
              </div>
              <div onClick={() => setIsVisibleReplyForm((prev) => !prev)}>답글 작성</div>
            </div>
            {isVisibleReplyForm && <CommentsForm />}
            <div onClick={() => setIsVisibleReplyList((prev) => !prev)}>
              답글 리스트 토글링 버튼 (답글 달린 개수 표시)
            </div>
            {isVisibleReplyList && (
              <div>
                <ul>
                  <li>답글 1</li>
                </ul>
                <ul>
                  <li>답글 2</li>
                </ul>
                <ul>
                  <li>답글 3</li>
                </ul>
                <ul>
                  <li>답글 4</li>
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
