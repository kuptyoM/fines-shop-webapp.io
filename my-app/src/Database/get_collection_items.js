import {db} from './firebase';
import { collection, getDocs, query } from "firebase/firestore";

async function getCollectionItems(arr) {
    const q = query(collection(db, "items", "available", "goods"))
    const querySnap = await getDocs(q)
    querySnap.forEach((doc) => {
        arr.push(doc.data())
    })
    return arr
}

export default getCollectionItems