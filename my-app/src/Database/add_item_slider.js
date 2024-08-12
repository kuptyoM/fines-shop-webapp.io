import {db} from './firebase';
import { collection, setDoc, doc} from "firebase/firestore"; 

async function addToSlider(productData) {
    
        const newItemRef = doc(collection(db, "items", "slider", "slider-items"));
        await setDoc((newItemRef), {
            id: newItemRef.id,
            name: productData.name,
            price: productData.price,
            imageUrl: productData.imageUrl,
        });

}


export default addToSlider

