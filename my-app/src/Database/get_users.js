import {db} from './firebase';
import { doc, getDoc } from "firebase/firestore";
import addUser from './users_firebase';

const checkUser = async (user_id, username) => {
    
    const docRef = doc(db, "users", String(user_id));
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    } else {
        addUser(user_id, username)
        console.log("Added!");
    }
    
}

export default checkUser