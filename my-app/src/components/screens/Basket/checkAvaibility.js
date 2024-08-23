import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../../Database/firebase";

async function checkAvaibility(item) {
    const ref = collection(db, "items", "available", "goods")
    const itemQuery = query(ref, where("id", "==", item.id))
    const querySnapshot = await getDocs(itemQuery)

    const sizes = querySnapshot.docs[0].data().sizes;

    if (querySnapshot.empty) {
        return false
    } else if (!sizes.includes(item.size)) {
        return false
    } else {
        return true
    }

    
}

export default checkAvaibility