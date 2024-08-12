import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../Database/firebase";

async function deletePurchasedSize(itemId, size) {
    const productRef = doc(db, "items", "available", "goods", itemId);
    const productSnap = await getDoc(productRef);
    const productData = productSnap.data();
    const sizes = productData.sizes;

    sizes.splice(sizes.indexOf(size), 1);

    if (sizes.length === 0) {
        await deleteDoc(productRef);
    } else {
        await updateDoc(productRef, { "sizes": sizes })
    }
}

export default deletePurchasedSize