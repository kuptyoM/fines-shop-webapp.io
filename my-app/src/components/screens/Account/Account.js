import React from 'react'
import styles from './Account.module.css'
import { Link } from 'react-router-dom';
// import { useTelegram } from '../../../hooks/useTelegram';
import { useWebAppUser } from "@kloktunov/react-telegram-webapp";

function Account() {
    // const {user, onClose} = useTelegram();
    const user = useWebAppUser();
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