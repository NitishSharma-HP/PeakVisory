import styles from '../tabs/Tabs.module.css'
import FileUpload from '../fileupload/FileUpload'
export default function Receipts(){
    const data = {
        owner: "Accountant 01",
        clients: [
            'client 1',
            'client 2',
            'client 3'
        ]
    }
    const mails = ['abc.single@gmail.com', 'abc.multiple@gmail.com']

    return(
        <>
              <div className={styles.clientOwner}>
                <div className={styles.owner}>
                    <p className={styles.lightText}>Document Owner</p>
                    <p>{data.owner}</p>
                </div>
                <div className={styles.client}>
                    <p className={styles.lightText}>Client</p>
                    <select className={styles.selectClient}>
                        <option value="Select Client">Select Client</option>
                        {data.clients.map((val, idx)=>(
                            <option key={idx} value={val}>{val}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div>
                <FileUpload tab= {'Reciept'}/>
            </div>

            <div className={styles.footer}>
                <span className={styles.lightText}>Send Over Email</span>
                <span className={styles.darkText}>Single: <span className={styles.accentText}> {mails[0]}  </span> <img src = '/copy.svg' width='20px'></img></span>
                <span className={styles.darkText}>Multiple:<span className={styles.accentText}> {mails[1]}  </span> <img src = '/copy.svg' width='20px'></img></span>
            </div>
        </>
    )
}