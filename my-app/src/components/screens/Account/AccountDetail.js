import React, { useEffect, useState } from 'react'
import styles from './AccountDetail.module.css'
import Avatar from './MainInfoAccountDetail/Avatar'
import MyOrders from './MainInfoAccountDetail/MyOrders'
import MyBonus from './MainInfoAccountDetail/MyBonus'
import { useTelegram } from '../../../hooks/useTelegram'
import { useNavigate } from "react-router-dom";
import MakeReceiver from '../СhooseReceiver/MakeReceiver'


function AccountDetail() {

    let navigate = useNavigate();
    const {tg} = useTelegram();

    useEffect(() => {
        tg.ready();
        tg.BackButton.show();
        const backButtonClickListener = () => {
            navigate(-1, {replace: true});
        };
        tg.BackButton.onClick(backButtonClickListener);
    
        return () => {
          tg.BackButton.offClick(backButtonClickListener);
        };
      }, [tg]);
    
    return (
        <div className={styles.container}>
            <div className={styles.mainContainer}>
                <Avatar />
                <MyOrders />
                <MakeReceiver />
                <MyBonus />
                
            </div>
        </div>
    )
}

export default AccountDetail