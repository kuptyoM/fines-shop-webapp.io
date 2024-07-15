import React, { useEffect, useState } from 'react'
import styles from './MyOrdersDetail.module.css'
import OrderBlock from './OrderBlock'
import { db } from '../../../../../Database/firebase'
import { collection, query, getDocs } from "firebase/firestore";


function MyOrdersDetail() {

    const [ordersData, setOrdersData] = useState([])
    const [orderAmount, setOrdersAmount] = useState(0)

    async function getAllOrders() {
        let ordersQuantity = 0
        const q = query(collection(db, "users", "6254429205", "user_orders"))

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setOrdersData(oldArray => [...oldArray, doc.data()])
            ordersQuantity++
        })
        setOrdersAmount(ordersQuantity)
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
                <OrderBlock num={index+1} receiver={data.receiver} products={data.products} key={index}/>
            ))}
            
            {!ordersData.length && <div>Нет заказов</div>}
        </div>
    )
}

export default MyOrdersDetail