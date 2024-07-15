import {db} from './firebase';
import { collection, getDocs } from "firebase/firestore";

async function getItemsId() {
    let arrForIds = [];
    const querySnapshot = await getDocs(collection(db, "users", "6254429205", "basket"));
    querySnapshot.forEach((doc) => {
        arrForIds.push(doc.data().id)
      });
    return arrForIds
}

export default getItemsId;