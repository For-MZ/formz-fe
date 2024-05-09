import styles from './Viewer.module.scss';

type Props = {
  content: string;
};

export default function Viewer({ content }: Props) {
  return <div className={styles.viewer} dangerouslySetInnerHTML={{ __html: content }}></div>;
}
