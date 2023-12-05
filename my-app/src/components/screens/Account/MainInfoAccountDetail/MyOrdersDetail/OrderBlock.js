import React from 'react'
import styles from './OrderBlock.module.css'


function OrderBlock({num}) {
    return (
        <div className={styles.container}>
            Заказ №{num}
        </div>
    )
}

export default OrderBlock