
import styles from './BillsSidebar.module.css';

const bills = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `Bill ${i + 1}`,
  date: 'Nov 1, 2019',
  amount: '£ 50.59',
}));

const BillsSidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <span className={styles.tab}>All Document</span>
        <span className={`${styles.tab} ${styles.active}`}>Bills</span>
        <span className={styles.tab}>Receipts</span>
      </div>

      <div className={styles.billsList}>
        {bills.map((bill) => (
          <div key={bill.id} className={styles.billItem}>
            <img
              src="/bill.svg"
              alt="invoice"
              className={styles.thumbnail}
            />
            <div className={styles.billInfo}>
              <div className={bill.id === 1 ? styles.linkText : styles.billTitle}>
                {bill.title}
              </div>
              <div className={styles.billMeta}>Date: {bill.date}</div>
              <div className={styles.billMeta}>{bill.amount}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillsSidebar;
