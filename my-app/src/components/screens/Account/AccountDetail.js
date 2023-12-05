import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import styles from './AccountDetail.module.css'
import Avatar from './MainInfoAccountDetail/Avatar'
import MyOrders from './MainInfoAccountDetail/MyOrders'
import MyBonus from './MainInfoAccountDetail/MyBonus'
import Telegram from 'telegram-web-app';

function AccountDetail() {
    const history = useHistory();

    useEffect(() => {

        const telegramApp = new Telegram.WebApp();

        const backButton = telegramApp.BackButton;

        backButton.onClick(() => {
            history.goBack();
          });

        backButton.show();

        return () => {
            backButton.hide();
            backButton.offClick();
          };
    }, [history]);
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