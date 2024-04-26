import React, { useEffect } from 'react'
import styles from './App.module.css'
import Account from '../Account/Account'
import Avaibility from '../Avaibility/Avaibility'
import Basket from '../Basket/Basket'
import Bonus from '../Bonus/Bonus'
import checkUser from '../../../Database/get_users'
import "firebase/firestore";
import { useTelegram } from '../../../hooks/useTelegram'
import MakeOrder from '../MakeOrder/MakeOrder'


function App() {

    const {user, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
        tg.expand();
        tg.BackButton.show();
        const backButtonClickListener = () => {
          tg.showConfirm("Закрыть приложение?", (arg) => {
            if (arg) {
              tg.close()
            }
          });
        };
        tg.BackButton.onClick(backButtonClickListener);
    
        return () => {
          tg.BackButton.offClick(backButtonClickListener);
        };
      }, [tg]);

    // checkUser(user.id, user.username)
    return (
        <div className={styles.container}>
            <Account />
            <div className={styles.secondContainer}>
                <MakeOrder />
                <Avaibility />
            </div>
            <div className={styles.secondContainer}>
                <Basket />
                <Bonus />
            </div>
        </div>
    )
}

export default App

