import styles from "./Invoice.module.css";

const Invoice = () => {
  return (
    <div className={styles.invoiceContainer}>
      <div className={styles.invoiceBox}>
        <div className={styles.header}>
          <h1>INVOICE</h1>
          <div className={styles.companyInfo}>
            <h2>Marble</h2>
            <p>BEAUTY & SPA</p>
          </div>
        </div>

        <div className={styles.billInfo}>
          <div className={styles.billTo}>
            <p><strong>Bill to</strong></p>
            <p>Business Company 123</p>
            <p>Grand Avenue, 29102</p>
            <p>Country +00 000 000</p>
            <p>000 CIF: 0000000ABC</p>
          </div>

          <div className={styles.invoiceDetails}>
            <p><strong>Invoice</strong> <p>#12345</p></p>
            <p><strong>Date</strong><p>00/00/00</p></p>
          </div>
        </div>
        <hr></hr>
        <table className={styles.itemTable}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, i) => (
              <tr key={i}>
                <td>Service description</td>
                <td>00,00€</td>
                <td>1</td>
                <td>00,00€</td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr></hr>

        <div className={styles.footer}>
          <div className={styles.paymentMethod}>
            <p><strong>Payment method</strong></p>
            <p>By Bank London State Bank LNS-00</p>
            <p>1234 89 65% 1987</p>
            <div className={styles.terms}>
          <p><strong>Terms & conditions</strong></p>
          <p>The origins of the first civilizations date back to their beliefs, experiences, creation, or mythology. The development of cosmeticians has changed over time since prehistoric times. Their purpose was to sell stories of ...</p>
        </div>
          </div>

          <div className={styles.summary}>
            <p><strong>Subtotal:</strong> 00,00€</p>
            <p><strong>Tax:</strong> 00,00€</p>
            <p className={styles.total}><strong>Total: 00,00€</strong></p>
          </div>
        </div>

        <div className={styles.contact}>
          <p>info@marblespa.com</p>
          <p>www.marblespa.com</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
