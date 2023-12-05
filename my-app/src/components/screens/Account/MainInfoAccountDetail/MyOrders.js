import React from 'react'
import styles from './MyOrders.module.css'
import { Link } from 'react-router-dom';

function MyOrders() {
    return (
        <Link to="/fines-shop-webapp.io/accountdetail/myordersdetail" className={styles.container}>
            <div>
                Мои заказы
            </div>
        </Link>
    )
}

export default MyOrders