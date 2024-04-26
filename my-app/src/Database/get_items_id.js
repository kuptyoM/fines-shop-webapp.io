import {db} from './firebase';
import { doc, getDoc } from "firebase/firestore";

async function getItemsId(ids) {
    let arrForIds = [];
    const docRef = doc(db, "users", "6254429205", "basket", "basket_info");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        arrForIds = docSnap.data().items_id;
    }

    return arrForIds;

}

export default getItemsId;