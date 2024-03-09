import React from 'react'
import styles from './MakeOrder.module.css'
import { Link } from 'react-router-dom';


function MakeOrder() {
    return (
        <Link to="/fines-shop-webapp.io/makeorderdetail" className={styles.container}>
            <div>
                Сделать заказ
            </div>
        </Link>
    )
}

export default MakeOrder