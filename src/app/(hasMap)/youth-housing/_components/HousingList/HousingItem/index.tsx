import styles from './HousingItem.module.scss';

export default function HousingItem({ item }) {
  return (
    <li className={styles.container}>
      <div className={styles.firstRow}>
        <span>{item.CNP_CD_NM}</span>
        <span>{item.AIS_TP_CD_NM}</span>
        <span className={styles.status}>{item.PAN_SS}</span>
      </div>
      <div className={styles.secondRow}>
        <p>{item.PAN_NM}</p>
      </div>
      <div className={styles.thirdRow}>
        <div className={styles.image}></div>
        <div className={styles.text}>
          <p className={styles.date}>
            접수일 {item.PAN_NT_ST_DT}~{item.CLSG_DT}
          </p>
          <p className={styles.date}>공고일 {item.PAN_DT}</p>
        </div>
      </div>
    </li>
  );
}
