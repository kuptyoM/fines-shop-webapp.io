import React from 'react'
import styles from './AccountDetail.module.css'
import Avatar from './MainInfoAccountDetail/Avatar'
import MyOrders from './MainInfoAccountDetail/MyOrders'
import MyBonus from './MainInfoAccountDetail/MyBonus'

function AccountDetail() {
    return (
        <div className={styles.container}>
            <div className={styles.mainContainer}>
                <Avatar />
                <MyOrders />
                <MyBonus />
            </div>
        </div>
    )
}

export default AccountDetail