import {db} from './firebase';
import { collection, getDocs, query } from "firebase/firestore";

async function getReceivers(arr) {
    const q = query(collection(db, "users", "6254429205", "receivers"))
    const querySnap = await getDocs(q)
    querySnap.forEach((doc) => {
        arr.push(doc.data())
    })
    return arr
}

export default getReceivers