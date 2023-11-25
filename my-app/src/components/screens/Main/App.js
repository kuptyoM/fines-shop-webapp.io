import React, { useEffect } from 'react'
import styles from './App.module.css'
import CostCalculator from '../CostCalculator/CostCalculator'
import Account from '../Account/Account'
import Avaibility from '../Avaibility/Avaibility'
import Info from '../Info/Info'
import Bonus from '../Bonus/Bonus'
import checkUser from '../../../Database/get_users'
import "firebase/firestore";
import { useTelegram } from '../../../hooks/useTelegram'


function App() {

    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    checkUser(11111113, "teSSSSst")
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