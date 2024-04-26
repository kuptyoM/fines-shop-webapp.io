import {db} from './firebase';
import { doc, getDoc } from "firebase/firestore";

async function getItemInfo(id, item_info) {
    const docRef = doc(db, "items", "available", "goods", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        item_info = docSnap.data();
    }

    return item_info;

}

export default getItemInfo;