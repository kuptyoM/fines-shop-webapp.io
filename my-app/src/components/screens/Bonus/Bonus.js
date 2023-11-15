import React from 'react'
import styles from './Bonus.module.css'
import { Link } from 'react-router-dom';

function Bonus() {
    return (
        <Link to="/fines-shop-webapp.io/bonusdetail" className={styles.container}>
                <div>
                    Бонусы
                </div>
            </Link>
    )
}

export default Bonus