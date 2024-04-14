import styles from './HasMapLayout.module.scss';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function HasMapLayout({ children }: Props) {
  return (
    <>
      <div className={styles.sideBar}>hasMapLayout</div>
      {children}
    </>
  );
}
