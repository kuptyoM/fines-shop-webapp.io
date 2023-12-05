import React, { useEffect } from 'react'
import styles from './Account.module.css'
import { Link } from 'react-router-dom';
import Telegram from 'telegram-web-app';


function Account() {
    const telegramApp = new Telegram.WebApp();
    const user = telegramApp.initDataUnsafe?.user
    useEffect(() => {
        telegramApp.ready();
    }, []);

    return (
        <Link to="/fines-shop-webapp.io/accountdetail">
                <div className={styles.container}>
                    <div className={styles.imageContainer}>
                        <img src='https://i.imgur.com/Arrwycq.jpg' alt="" className={styles.image} />
                    </div>
                    <div>
                        Привет, {user.username}
                    </div>
                    
                </div>
            </Link>
    )
}

export default Account