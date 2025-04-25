import { useState } from 'react';
import styles from './RightSidebar.module.css';

const RightSidebar = () => {
  const [isPaid, setIsPaid] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.headerCard}>
        <div className={styles.headerTop}>
          <img src="quickbook.svg" alt="bar" className={styles.logo} />
          <div>
            <div className={styles.appTitle}>Quickbook</div>
            <div className={styles.date}>16 June, 2024<br/>8:15 PM</div>
          </div>
        </div>
        <div className={styles.publisherInfo}>
          <span>Publishing...</span>
          <span className={styles.username}>Jimmy Jason</span>
        </div>
      </div>
      <div className={styles.checkboxes}>
          <label><input type="checkbox" defaultChecked /> Auto-sync</label>
          <label><input type="checkbox" defaultChecked /> Save Config</label>
        </div>

      <div className={styles.tabs}>
        <button className={styles.activeTab}>Comment</button>
        <button className={styles.inactiveTab}>Query</button>
      </div>

      <div className={styles.commentBox}>
        <label className={styles.commentLabel}>Type Comment</label>
        <input type="text" placeholder="Start typing..." className={styles.inputText} />
        <button className={styles.commentBtn}>Add Comment</button>
      </div>

      <button className={styles.viewLineItems}>View Line Items</button>

      <div className={styles.paymentHeader}>
        <button>{'<'}</button>
        <span>Payment Details</span>
        <button>{'>'}</button>
      </div>

      <div className={styles.paymentDetails}>
        <div className={styles.detailsToggle}>
          <span>Payment Details</span>
          <span className={styles.arrow}>▴</span>
        </div>

        <div className={styles.radioButtons}>
          <label><input type="radio" checked={isPaid} onChange={() => setIsPaid(true)} /> Paid</label>
          <label><input type="radio" checked={!isPaid} onChange={() => setIsPaid(false)} /> Unpaid</label>
        </div>

        <div className={styles.formField}>
          <label>Bill Number</label>
          <input type="text" placeholder="Start Typing" />
        </div>
        <div className={styles.formField}>
          <label>Bill Date</label>
          <input type="text" placeholder="Start Typing" />
        </div>
        <div className={styles.formField}>
          <label>Paid Amount</label>
          <input type="text" value="£ 1900.00" readOnly />
        </div>
        <div className={styles.formField}>
          <label>Paid Date</label>
          <input type="text" placeholder="Start Typing" />
        </div>
        <div className={styles.formField}>
          <label>Due Date</label>
          <input type="text" placeholder="Start Typing" />
        </div>
        <div className={styles.formField}>
          <label>Payment Mode</label>
          <select>
            <option>Select Payment Mode</option>
          </select>
        </div>
      </div>
      {/*  */}
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label>Total Amount (GBP)</label>
          <input type="text" placeholder="Start Typing" />
        </div>

        <div className={styles.inputGroup}>
          <label>Tax Amount (GBP)</label>
          <input type="text" placeholder="Start Typing" />
        </div>

        <div className={styles.inputGroup}>
          <label>FX Rate</label>
          <input type="text" placeholder="Start Typing" />
        </div>

        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3>Description</h3>
            <button type="button" className={styles.collapseButton}>▲</button>
          </div>

          <div className={styles.radioGroup}>
            <label>Line Item</label>
            <div className={styles.radioButtons}>
              <label className={styles.radioLabel}>
                <input type="radio" name="lineItem" defaultChecked />
                Single
              </label>
              <label className={styles.radioLabel}>
                <input type="radio" name="lineItem" />
                Multiple
              </label>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Description</label>
            <input type="text" placeholder="Enter Description" />
          </div>
        </div>

        <div className={styles.pagination}>
          <button type="button" className={styles.navButton}>‹</button>
          <div className={styles.dots}>
            <span className={styles.activeDot}></span>
            <span className={styles.inactiveDot}></span>
          </div>
          <button type="button" className={styles.navButton}>›</button>
        </div>

        <div className={styles.buttonGroup}>
          <button type="button" className={styles.saveButton}>Save</button>
          <button type="submit" className={styles.publishButton}>
            Publish ▼
          </button>
        </div>
      </form>
      {/*  */}
    </div>
    
  );
};

export default RightSidebar;
