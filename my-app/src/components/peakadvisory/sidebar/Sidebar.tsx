import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>

      <nav className={styles.nav}>
      <div className={styles.logo}><img src='/logo.svg' alt='logo'>
      
      </img></div>

        <a href="#" className={styles.link}>
          <span className={styles.icon}><img src='/dashboard.svg' width='20px'></img></span>
          <span>Dashboard</span>
        </a>
        <a href="#" className={styles.link}>
          <span className={styles.icon}><img src='/accounting.svg' width='20px'></img></span>
          <span>Accounting</span>
        </a>
        <a href="#" className={styles.link}>
          <span className={styles.icon}><img src='/banking.svg' width='20px'></img></span>
          <span>Banking</span>
        </a>
        <a href="#" className={styles.link}>
          <span className={styles.icon}><img src='/reports.svg' width='20px'></img></span>
          <span>Reports</span>
        </a>
        <a href="#" className={styles.link}>
          <span className={styles.icon}><img src='/contacts.svg' width='20px'></img></span>
          <span>Contacts</span>
        </a>
        <a href="#" className={styles.link}>
          <span className={styles.icon}><img src='/invoice.svg' width='20px'></img></span>
          <span>Invoicing</span>
        </a>
        <a href="#" className={styles.link}>
          <span className={styles.icon}><img src='/queries.svg' width='20px'></img></span>
          <span>Queries</span>
        </a>
      </nav>
      <div>
        <a href="#" className={styles.link}>
          <span className={styles.icon}><img src='/help.svg' width='20px'></img></span>
          <span>Help</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
