import styles from './EasyUpload.module.css'
import { TABS } from "../../constants"
import { useState } from 'react'
import Receipts from '../tabs/Receipts'
import Bills from '../tabs/Bills'
import Bank from '../tabs/Bank'

export default function EasyUpload() {

    const [tab, setTab] = useState('');

    const handleTabClick = (tab: string) => {
        setTab(tab)
        console.log(tab)
    }

    const renderSelectedTab =(tab: string)=>{
        switch(tab){
            case 'Receipt':
                return <Receipts/>
            case 'Bank':
                return <Bank/>
            case 'Bill':
                return <Bills/>
        }
    }

    return (
        <div className={styles.main}>
            <div className= {styles.nav}>
                {/* <p className={styles.heading}>EasyUpload</p> */}
                <ul className={styles.tabsList}>
                <li className={styles.heading}>EasyUpload</li>

                    {
                        Object.entries(TABS).map(([key, val]) => (
                            <li
                                key={key}
                                onClick={() => handleTabClick(val)}
                                className={`${styles.tabItem} ${tab === val ? styles.active : ''}`}
                            >
                                {key}
                            </li>
                        ))
                    }
                </ul>
                <p className={styles.close}>X</p>
            </div>
            <>
            {renderSelectedTab(tab)}
            </>
        </div>

    )
}