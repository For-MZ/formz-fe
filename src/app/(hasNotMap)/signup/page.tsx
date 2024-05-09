import Link from 'next/link';
import styles from './Signup.module.scss';
import SignupForm from './_components/SignupForm/SignupForm';

export default function Signup() {
  return (
    <div className={styles.container}>
      <SignupForm />
      <div className={styles.login}>
        이미 계정이 있으신가요?
        <Link href="/login">
          <div className={styles.underline}>로그인</div>
        </Link>
      </div>
    </div>
  );
}
