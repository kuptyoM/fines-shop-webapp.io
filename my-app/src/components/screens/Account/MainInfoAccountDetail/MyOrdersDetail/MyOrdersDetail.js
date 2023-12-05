import React from 'react'
import styles from './MyOrdersDetail.module.css'
import OrderBlock from './OrderBlock'


function MyOrdersDetail() {
    return (
        <div className={styles.container}>
            <OrderBlock num={1}/>
            <OrderBlock num={2}/>
            <OrderBlock num={3}/>
            <OrderBlock num={4}/>
        </div>
    )
}

export default MyOrdersDetail