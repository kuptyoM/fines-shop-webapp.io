import React, { useEffect, useState } from 'react'
import styles from './MyOrdersDetail.module.css'
import OrderBlock from './OrderBlock'
import { db } from '../../../../../Database/firebase'
import { collection, query, getDocs, orderBy } from "firebase/firestore";


function MyOrdersDetail() {

    const [ordersData, setOrdersData] = useState([])
    const [orderAmount, setOrdersAmount] = useState(0)

    async function getAllOrders() {
        let ordersQuantity = 0;
        let ordersArray = []; 
        let ordersRef = collection(db, "users", "6254429205", "user_orders");
        const q = query(ordersRef, orderBy('createdAt', 'desc'));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            ordersArray.push(doc.data()); 
            ordersQuantity++;
        });

        setOrdersData(ordersArray); 
        setOrdersAmount(ordersQuantity);
    }

    useEffect(() => {
        getAllOrders()
    }, [])
  
    return (
        <div className={styles.container}>
            {ordersData.length > 0 && (
                <div>Всего заказов: {orderAmount}</div>
            )}

            {ordersData.map((data, index) => (
                <OrderBlock num={index+1} receiver={data.receiver} products={data.products} timestamp={data.createdAt} key={index}/>
            ))}
            
            {!ordersData.length && <div>Нет заказов</div>}
        </div>
    )
}

export default MyOrdersDetail