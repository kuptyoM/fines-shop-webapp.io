import {db} from './firebase';
import { collection, setDoc, doc} from "firebase/firestore"; 

async function addToCollection(productData) {
    
        const newItemRef = doc(collection(db, "items", "available", "goods"));
        await setDoc((newItemRef), {
            id: newItemRef.id,
            name: productData.name,
            description: productData.description,
            price: productData.price,
            quantity: productData.quantity,
            imageUrls: productData.imageUrls,
            sizes: productData.sizes
        });

}


export default addToCollection

// const testData = {
//     name: 'AirJordan 1',
//     description: 'testing2',
//     price: 1000,
//     quantity: 2,
//     imageUrls: ['https://cf.shopee.ph/file/09f0d42780d50b298cde826dea4f11bf', 'https://cdn1.ozone.ru/s3/multimedia-o/6583511292.jpg'],
//     sizes: [39,40]
//   }