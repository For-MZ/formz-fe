import styles from './Category.module.scss';

type Props = {
  category: string;
};

export default function Category({ category }: Props) {
  return <span className={styles.category}>{category}</span>;
}
