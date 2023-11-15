import React from 'react'
import styles from './Info.module.css'
import { Link } from 'react-router-dom';

function Info() {
    return (
            <Link to="/fines-shop-webapp.io/infodetail" className={styles.container}>
                <div>
                    Информация
                </div>
            </Link>
    )
}

export default Info