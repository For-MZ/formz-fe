import styles from './Comments.module.scss';
import TextField from '@/components/UI/TextField';

export default function Comments() {
  return (
    <div className={styles.comment}>
      댓글 수 표시
      <div className={styles.form}>
        <div className={styles.input}>
          <img className={styles.userAvatar} src="/default-profile-image.png" alt="" />
          <TextField width="870px" />
        </div>
        <div className={styles.buttons}>
          <button>취소</button>
          <button>작성</button>
        </div>
      </div>
    </div>
  );
}
