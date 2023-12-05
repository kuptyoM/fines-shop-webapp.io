import React, { useEffect } from 'react'
import styles from './App.module.css'
import CostCalculator from '../CostCalculator/CostCalculator'
import Account from '../Account/Account'
import Avaibility from '../Avaibility/Avaibility'
import Info from '../Info/Info'
import Bonus from '../Bonus/Bonus'
import checkUser from '../../../Database/get_users'
import "firebase/firestore";
import { TelegramWebApp, WebAppBackButton } from "@kloktunov/react-telegram-webapp";

function App() {

    const {user, tg, backButton} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);
    backButton?.show()
    checkUser(user.id, user.username)
    return (
        <TelegramWebApp>
        <div className={styles.container}>
            <Account />
            <div className={styles.secondContainer}>
                <CostCalculator />
                <Avaibility />
            </div>
            <div className={styles.secondContainer}>
                <Info />
                <Bonus />
            </div>
        </div>
        </TelegramWebApp>
    )
}

export default App