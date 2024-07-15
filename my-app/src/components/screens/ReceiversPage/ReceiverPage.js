import React from 'react'
import styles from './ReceiverPage.module.css'
import { Link } from 'react-router-dom';

function ReceiverPage() {
    return (
        <Link to="/fines-shop-webapp.io/receiverspagedetail" className={styles.container}>
                <div>
                    Получатели
                </div>
            </Link>
    )
}

export default ReceiverPage