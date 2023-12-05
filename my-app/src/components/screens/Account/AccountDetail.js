import React, { useEffect, useState } from 'react'
import styles from './AccountDetail.module.css'
import Avatar from './MainInfoAccountDetail/Avatar'
import MyOrders from './MainInfoAccountDetail/MyOrders'
import MyBonus from './MainInfoAccountDetail/MyBonus'
import { useTelegram } from '../../../hooks/useTelegram'
import { useNavigate } from "react-router-dom";


function AccountDetail() {

    let navigate = useNavigate();
    const {tg} = useTelegram();

        tg.BackButton.show();
        tg.BackButton.onClick(() => {
            navigate('/fines-shop-webapp.io/', {replace: true});
        })
    
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