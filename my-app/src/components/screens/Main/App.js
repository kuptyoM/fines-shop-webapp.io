import React, { useEffect } from 'react'
import styles from './App.module.css'
import CostCalculator from '../CostCalculator/CostCalculator'
import Account from '../Account/Account'
import Avaibility from '../Avaibility/Avaibility'
import Info from '../Info/Info'
import Bonus from '../Bonus/Bonus'
import checkUser from '../../../Database/get_users'
import "firebase/firestore";
import Telegram from 'telegram-web-app';

function App() {
    const telegramApp = new Telegram.WebApp();
    const user = telegramApp.initDataUnsafe?.user
    useEffect(() => {
        telegramApp.ready();
    }, []);


    
    // checkUser(user.id, user.username)
    return (

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

    )
}

export default App