import React from 'react'
import styles from './Account.module.css'
import { Link } from 'react-router-dom';

function Account() {
    return (
        <Link to="/fines-shop-webapp.io/accountdetail" className={styles.container}>
                <div>
                    Личный кабинет
                </div>
            </Link>
    )
}

export default Account