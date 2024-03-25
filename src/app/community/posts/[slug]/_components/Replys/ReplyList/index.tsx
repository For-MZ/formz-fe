import styles from './ReplyList.module.scss';

const replys = [
  {
    id: '1',
    nickname: '강동욱',
    createdAt: '1시간 전',
    content:
      'but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum',
  },
  {
    id: '2',
    nickname: '김희진',
    createdAt: '1시간 전',
    content:
      'but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum',
  },
  {
    id: '3',
    nickname: '유성영',
    createdAt: '1시간 전',
    content:
      'but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum',
  },
];

export default function ReplyList() {
  return (
    <ul className={styles.replyList}>
      {replys.map((reply) => (
        <li key={reply.id} className={styles.replyItem}>
          <img className={styles.avatar} src="/default-profile-image.png" alt="" />
          <div className={styles.textZone}>
            <span className={styles.nickname}>{reply.nickname}</span>
            <time className={styles.createdAt}>{reply.createdAt}</time>
            <p className={styles.content}>{reply.content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
