import {db} from './firebase';
import { collection, getDocs, query } from "firebase/firestore";

async function getSliderItems(arr) {
    const q = query(collection(db, "items", "slider", "slider-items"))
    const querySnap = await getDocs(q)
    querySnap.forEach((doc) => {
        arr.push(doc.data())
    })
    return arr
}

export default getSliderItems