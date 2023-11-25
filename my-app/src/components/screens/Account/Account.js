import React from 'react'
import styles from './Account.module.css'
import { Link } from 'react-router-dom';
import { useTelegram } from '../../../hooks/useTelegram';

function Account() {
    const {user, onClose} = useTelegram();

    return (
        <Link to="/fines-shop-webapp.io/accountdetail" className={styles.container}>
                <div>
                    Привет, {user?.username}
                </div>
            </Link>
    )
}

export default Account