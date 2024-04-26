import React from 'react'
import styles from './Basket.module.css'
import { Link } from 'react-router-dom';

function Basket() {
    return (
        <Link to="/fines-shop-webapp.io/basketdetail" className={styles.container}>
                <div>
                    Корзина
                </div>
            </Link>
    )
}

export default Basket