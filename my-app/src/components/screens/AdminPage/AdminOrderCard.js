import React, { useEffect, useState } from 'react'
import styles from './AdminOrderCard.module.css'
import { db } from '../../../Database/firebase';
import { updateDoc, doc } from 'firebase/firestore';


function AdminOrderCard({ num, order }) {
    const [selectedOrderStatus, setSelectedOrderStatus] = useState('')
    const handleStatusChange = (event) => {
        setSelectedOrderStatus(event.target.value);
    };
    
    const handleStatusSave = () => {
        const orderRef = doc(db, "orders", order.id);
        updateDoc(orderRef, {orderStatus: selectedOrderStatus})
    }

    return (
        <div className={styles.container}>
            Заказ №{num}
            <div>Получатель: {order.receiver}</div>
            {order.products.map((item, index) => (
                item.name ? 
                <div key={index}>
                    Название товара: {item.name}, размер: {item.size},
                    дата заказа: {order.createdAt.toDate().toDateString()}
                 </div> 
                : 
                <div key={index}>
                    Ссылка на товар: {item.link}
                    дата заказа: {order.createdAt.toDate().toDateString()}
                    
                </div>
            ))}
            <label for="set-status">Выберите статус заказа</label>
            <select id='set-status' onChange={handleStatusChange}> 
                <option value="Оплачен">Оплачен</option>
                <option value="Отправлен">Отправлен</option>
                <option value="Доставлен в пункт назначения">Доставлен в пункт назначения</option>
            </select>
            <button onClick={handleStatusSave}>Сохранить статус</button>
        </div>
    )
}

export default AdminOrderCard