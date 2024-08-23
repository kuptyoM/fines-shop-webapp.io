import {db} from './firebase';
import { collection, setDoc, doc} from "firebase/firestore"; 

async function addToCollection(productData) {
    
        const newItemRef = doc(collection(db, "items", "available", "goods"));
        await setDoc((newItemRef), {
            id: newItemRef.id,
            name: productData.name,
            description: productData.description,
            price: productData.price,
            imageUrls: productData.imageUrls,
            sizes: productData.sizes
        });

}


export default addToCollection

