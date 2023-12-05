import React from 'react'
import styles from './Account.module.css'
import { Link } from 'react-router-dom';
import { useTelegram } from '../../../hooks/useTelegram';

function Account() {
    const {user, onClose} = useTelegram();

    return (
        <Link to="/fines-shop-webapp.io/accountdetail">
                <div className={styles.container}>
                    <div className={styles.imageContainer}>
                        <img src='https://i.playground.ru/i/pix/716152/image.jpg'></img>
                    </div>
                    <div className={styles.infoContainer}>
                        <div>n:{user?.username}</div>
                        <div><img src='https://ae04.alicdn.com/kf/Sc87be4b6d5164616beed6639eb2bbb6bK.jpeg'className={styles.coinImage}></img>: 100</div>
                    </div>
                    
                </div>
            </Link>
    )
}

export default Account