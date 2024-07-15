import {db} from './firebase';
import { doc, getDoc } from "firebase/firestore";

async function getItemAmount(amount) {
    const docRef = doc(db, "users", "6254429205", "basket");
    const docSnap = await getDoc(docRef)
 
    if (docSnap.exists()) {
        amount = docSnap.data().item_amount;
    }
    return amount
}    

export default getItemAmount