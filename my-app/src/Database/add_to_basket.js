import {db} from './firebase';
import { collection, setDoc, doc} from "firebase/firestore"; 

async function addToBasket(data) {
    const newItemRef = doc(collection(db, "users", "6254429205", "basket"))
    data.link ? await setDoc((newItemRef), {
        link: data.link,
        price: data.price
    })
    :
    await setDoc((newItemRef), {
            id: data.id,
            name: data.name,
            price: data.price,
            size: data.size,
        });
}


export default addToBasket
