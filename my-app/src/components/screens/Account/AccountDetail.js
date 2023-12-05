import React, { useState } from 'react'
import styles from './AccountDetail.module.css'
import Avatar from './MainInfoAccountDetail/Avatar'
import MyOrders from './MainInfoAccountDetail/MyOrders'
import MyBonus from './MainInfoAccountDetail/MyBonus'
import { WebAppBackButton } from "@kloktunov/react-telegram-webapp";

function AccountDetail() {
    const [show, setShow] = useState(true)
    return (
        <div className={styles.container}>
            { show && <WebAppBackButton /> }
            <div className={styles.mainContainer}>
                <Avatar />
                <MyOrders />
                <MyBonus />
            </div>
        </div>
    )
}

export default AccountDetail