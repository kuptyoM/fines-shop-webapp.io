import { doc, setDoc } from "firebase/firestore"; 
import {db} from './firebase';

async function addReceiver(city, street, fio, phone) {
    setDoc(doc(db, "users", "6254429205", "receivers", fio), {
        city: city,
        street: street,
        fio: fio,
        phone: phone,
    })
}

export default addReceiver