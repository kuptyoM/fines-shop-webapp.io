import {db} from './firebase';
import { collection, setDoc, doc} from "firebase/firestore"; 

async function addToOrders(data) {
    const newItemRef = doc(collection(db, "users", "6254429205", "orders"))
    await setDoc((newItemRef), {
            id: newItemRef.id,
            name: data.name,
            price: data.price,
            status: "Статус: оплачен",
            receiver: data.receiver,
            date: "дата",
        });
}


export default addToOrders
