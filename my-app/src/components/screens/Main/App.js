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
import { useHistory } from "react-router-dom";

function App() {
    let history = useHistory();
    const {user, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
        tg.BackButton.show()
        tg.BackButton.onClick(() => {
            history.goBack()
        })
    }, []);

    checkUser(user.id, user.username)
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