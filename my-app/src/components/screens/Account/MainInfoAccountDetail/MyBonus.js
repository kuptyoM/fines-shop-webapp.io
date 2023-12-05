import React from 'react'
import styles from './MyBonus.module.css'
import { Link } from 'react-router-dom';

function MyBonus() {
    return (
        <Link to="/fines-shop-webapp.io/accountdetail/mybonusdetail" className={styles.container}>
            <div>
                Мои бонусы
            </div>
        </Link>
    )
}

export default MyBonus