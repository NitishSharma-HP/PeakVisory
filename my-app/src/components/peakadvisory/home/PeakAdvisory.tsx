
import Sidebar from "../sidebar/Sidebar"
import styles from './PeakAdvisory.module.css'
import Invoice from "../invoice/Invoice"
import BillsSidebar from "../billsbar/BillsSidebar"
import Topbar from "../topbar/Topbar"
import RightSidebar from "../rightsidebar/RIghtSidebar"
export default function PeakAdvisory() {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.centerContainer}>
                <div>
                    <Topbar />
                </div>
                <div className={styles.contentArea}>
                    <BillsSidebar />
                    <Invoice />
                </div>
            </div>
            <div className={styles.rightContainer}>
                <RightSidebar />
            </div>
        </div>
    )
}