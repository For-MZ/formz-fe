import SideBar from './_components/SideBar';
import styles from './layout.module.scss';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <SideBar />
      <main>{children}</main>
    </div>
  );
}
