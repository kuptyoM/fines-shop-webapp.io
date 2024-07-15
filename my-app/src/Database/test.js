import {db} from './firebase';
import { collection, setDoc, doc, updateDoc, arrayUnion } from "firebase/firestore"; 

async function test() {
    // const newItemRef = doc(collection(db, "users", "6254429205", "basket"));
    // await setDoc((newItemRef), {
    //     id: newItemRef.id,
    //     name: "Stone Island",
    //     photoUrl: "http://gudmoda.ru/upload/iblock/c90/c901fe5387d8667ff09019f1c1fedd49.jpg",
    //     price: 2280,
    // });
}

export default test