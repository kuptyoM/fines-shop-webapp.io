import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import {db} from './firebase';

async function addToBasket(data) {
    await updateDoc(doc(db, "users", "6254429205", "basket", "basket_info"), {
        items_id: arrayUnion(data)
    });
}

export default addToBasket