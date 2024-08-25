import React, { useState } from 'react'
import { useTelegram } from '../../../hooks/useTelegram'
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { db } from '../../../Database/firebase';
import { collection, getDocs, query, setDoc, doc, deleteDoc } from "firebase/firestore";
import deletePurchasedSize from './delete_purchased_size';

function PaymentScreen() {
    const location = useLocation()

    const { itemsInfo } = location.state || {};
    const [password, setPassword] = useState('');
    const [showed, isShowed] = useState(false);
 
    const [isDisabled, setIsDisabled] = useState(false)

    let navigate = useNavigate();
    const {tg} = useTelegram();

    const { receiverId } = useParams();
  
    useEffect(() => {
        tg.ready();
        tg.BackButton.show();
        const backButtonClickListener = () => {
            navigate(-1, {replace: true});
        };
        tg.BackButton.onClick(backButtonClickListener);
    
        return () => {
          tg.BackButton.offClick(backButtonClickListener);
        };
      }, [tg]);
    
      const submit = e => {
        e.preventDefault()
        if (password !== 'Zebra') return;

        itemsInfo.forEach((item) => {
          deletePurchasedSize(item.id, item.size)
        })

        isShowed(true);
        const products = [];

        const withLink = itemsInfo.filter(item => 'link' in item);
        const withoutLink = itemsInfo.filter(item => !('link' in item));

        withLink.forEach(item => {
          products.push({
            link: item.link,
            price: item.price
          });
        });

        withoutLink.forEach(item => {
          products.push({
            name: item.name,
            id: item.id,
            price: item.price,
            size: item.size
          });
        });

        const newOrderRef = doc(collection(db, "orders"));

        setDoc(newOrderRef, {
          id: newOrderRef.id,
          receiver: receiverId,
          user_id: "6254429205",
          products: products,
          createdAt: new Date(),
          orderStatus: "Оплачен"
        }).then(() => {
          if (itemsInfo[1]) {
            deleteItemsFromBasket()
          }

        });

      async function deleteItemsFromBasket() {
        const q = query(collection(db, "users", "6254429205", "basket"))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((document) => {
            deleteDoc(doc(db, "users", "6254429205", "basket", document.id))
        });

        }
          setIsDisabled(true)
          setTimeout(() => navigate('/fines-shop-webapp.io', {replace: true}), 3000)
      }
    return (
        <div>
            {showed ? <h1>Оплата прошла, сейчас вы вернетесь на главную страницу</h1>
            : <h1>Тут должна проходить оплата</h1>}
            <div>
                <h2>Ввести пароль чтобы фейк оплата прошла (Zebra)</h2>
                <form onSubmit={submit}>
                <label id="password">Пароль</label>
                <input type="text" id="password" onChange={event => setPassword(event.target.value)}/>
                <button disabled={isDisabled}>Сохранить</button>
                </form>
            </div>
        </div>
    )
}

export default PaymentScreen