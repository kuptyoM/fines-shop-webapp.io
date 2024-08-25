import React from 'react'
import styles from './OrderBlock.module.css'


function OrderBlock({ num, order}) {
    return (
        <div className={styles.container}>
            Заказ №{num}
            <br/>
            Статус заказа: {order.orderStatus}
            <div>Получатель: {order.receiver}</div>
            {order.products.map((item, index) => (
                item.name ? <div key={index}>Название товара: {item.name}, размер: {item.size}, дата заказа: {order.createdAt.toDate().toDateString()}</div> 
                : 
                <div key={index}>Ссылка на товар: {item.link}</div>
            ))}
        </div>
    )
}

export default OrderBlock