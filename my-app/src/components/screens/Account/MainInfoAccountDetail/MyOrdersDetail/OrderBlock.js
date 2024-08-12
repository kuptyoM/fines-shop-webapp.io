import React from 'react'
import styles from './OrderBlock.module.css'


function OrderBlock({ num, receiver, products, timestamp }) {
    return (
        <div className={styles.container}>
            Заказ №{num}
            <div>Получатель: {receiver}</div>
            {products.map((item, index) => (
                item.name ? <div key={index}>Название товара: {item.name}, размер: {item.size}, дата заказа: {timestamp.toDate().toDateString()}</div> 
                : 
                <div key={index}>Ссылка на товар: {item.link}</div>
            ))}
        </div>
    )
}

export default OrderBlock