import { useEffect, useState } from "react"
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import AdminOrderCard from "./AdminOrderCard"
import { db } from "../../../Database/firebase";

function OrdersAction() {

    const [ordersData, setOrdersData] = useState([])
    const [ordersAmount, setOrdersAmount] = useState(0)

    async function getAllOrders() {
        let ordersQuantity = 0;
        let ordersArray = []; 
        let ordersRef = collection(db, "orders");
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


    return(
        <div>
            {ordersData.length > 0 && (
                <div>Всего заказов: {ordersAmount}</div>
            )}

            {ordersData.map((data, index) => (
                <AdminOrderCard num={index+1} order={data} key={index}/>
            ))}
            
            {!ordersData.length && <div>Нет заказов</div>}
        </div>
    )
}

export default OrdersAction