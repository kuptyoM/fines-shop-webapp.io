import React from 'react'
import styles from './MakeReceiver.module.css'
import { Link } from 'react-router-dom';

function MakeReceiver() {
    return (
        <Link to="/fines-shop-webapp.io/makereceiverdetail" className={styles.container}>
                <div>
                    Создать получателя
                </div>
            </Link>
    )
}

export default MakeReceiver