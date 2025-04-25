import styles from "./Topbar.module.css";

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.leftSection}>
        <span className={styles.label}>Review</span>
        <select className={styles.select}>
          <option>Google</option>
          <option>Facebook</option>
        </select>
        <span className={styles.tag}>Quickbook’s Data</span>
      </div>

      <div className={styles.rightSection}>
        <img src='/search.svg'/>
        <button className={styles.button}>Export to Excel</button>
        <button className={styles.button}>Add Document</button>
        <button className={styles.button}>Connect ⌄</button>

        <img src='/notification.svg'/>
        <img src='/settings.svg'/>
        <img src='/profile.svg'/>
      </div>
    </div>
  );
};

export default Topbar;
