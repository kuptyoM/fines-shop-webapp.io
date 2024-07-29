import React, { useEffect, useState } from 'react'
import styles from './Receiver.module.css'
import { db } from '../../Database/firebase';
import { doc, deleteDoc } from "firebase/firestore";


function Receiver({city, fio, phone, street}) {
    const [isDeleted, setIsDeleted] = useState(false); 

    const deleteButton = () => {
        deleteDoc(doc(db, "users", "6254429205", "receivers", fio))
            .then(() => {
                setIsDeleted(true); 
            })
    };

    if (isDeleted) {
        return null;
    }

    return (
        <div className={styles.container}>
            <div>
                <p>Город: {city}</p>
                <p>ФИО: {fio}</p>
                <p>Телефон: {phone}</p>
                <p>Улица: {street}</p>
            </div>
            <button onClick={deleteButton} className={styles.mybutton}>удалить получателя</button>
        </div>
    );
}

export default Receiver