import { setDoc, doc } from "firebase/firestore";
import {db} from './firebase';
import "firebase/firestore";
    const addUser = async (user_id, username) => {  

        try {
            const docRef = await setDoc(doc(db, "users", String(user_id)), {
                user_id: user_id,
                username: username,
            })
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }


export default addUser