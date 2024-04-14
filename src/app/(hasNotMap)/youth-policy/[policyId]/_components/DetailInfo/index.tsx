import styles from './DetailInfo.module.scss';

type Props = {
  title: string;
};

export default function DetailInfo({ title }: Props) {
  return (
    <section>
      <h3 className={styles.tableTitle}>{title}</h3>
      <ul className={styles.table}>
        <li className={styles.list}>
          <div className={styles.listTitle}>정책 번호</div>
          <div className={styles.listContent}>R2024022820205</div>
        </li>
        <li className={styles.list}>
          <div className={styles.listTitle}>정책 분야</div>
          <div className={styles.listContent}>일자리분야</div>
        </li>
        <li className={styles.list}>
          <div className={styles.listTitle}>지원 내용</div>
          <div className={styles.listContent}>
            사용방법 - 체크카드 사용이 원칙이며, 사업 목적에 부합한 범위에서 자유롭게 사용 가능 - 현금사용은 금지되며,
            특정 항목에 한하여 예외적 계좌이체 허용 * (특정항목: ①주거(전·월세비, 주거 관리비, 주거 관련 대출),
            ②생활·공과금(전기·가스·수도요금, 통신비, 건강보험료), ③교육(학자금 대출, 자격증·시험 응시료) 에만 현금사용
            가능, 나머지 항목엔 현금사용 금지
          </div>
        </li>
        <li className={styles.list}>
          <div className={styles.listTitle}>사업 운영 기간</div>
          <div className={styles.listContent}>2024.03.~2024.12.</div>
        </li>
        <li className={styles.list}>
          <div className={styles.listTitle}>사업 신청 기간</div>
          <div className={styles.listContent}>2024년 03월 11일 ~ 2024년 03월 18일</div>
        </li>
        <li className={styles.list}>
          <div className={styles.listTitle}>지원 규모(명)</div>
          <div className={styles.listContent}>20,000명 내외</div>
        </li>
        <li className={styles.list}>
          <div className={styles.listTitle}>비고</div>
          <div className={styles.listContent}>2024년 03월 11일 10:00 ~ 2024년 03월 18일 16:00</div>
        </li>
      </ul>
    </section>
  );
}
