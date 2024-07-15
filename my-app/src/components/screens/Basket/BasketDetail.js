import React, { useState } from 'react'
import styles from './BasketDetail.module.css'
import { useTelegram } from '../../../hooks/useTelegram'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'
import getItemsId from '../../../Database/get_items_id';
import { db } from '../../../Database/firebase';
import { doc, deleteDoc, collection, query, where, getDocs} from "firebase/firestore";
import BasketProductCard from '../../ProductCard/BasketProductCard';
import getItemInfo from '../../../Database/get_item_info';

function BasketDetail() {
    const [itemsInfo, setItemsInfo] = useState([]);
    const [finalPrice, setFinalPrice] = useState();
    let navigate = useNavigate();
    const {tg} = useTelegram();

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

      useEffect(() => {
        setItemsInfo([])
        let totalPrice = 0;
        async function getItems() {
            const ref = collection(db, "users", "6254429205", "basket");
            const q = query(ref)
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setItemsInfo(oldArr => [...oldArr, doc.data()])
                totalPrice += doc.data().price
                setFinalPrice(totalPrice)
            });
          }
          getItems()
    
      }, [finalPrice])
      
        const navigateToPurchase = () => {
            navigate('/fines-shop-webapp.io/purchasescreen', {
                state: {
                    itemsInfo: itemsInfo, 
                    finalPrice: finalPrice}
            })
        }
        function deleteButton(deleteItem) {
 
            async function getDocId(itemId) {
                const myref = collection(db, "users", "6254429205", "basket");
                const q = query(myref, where("id", "==", itemId))
                const querySnapshot = await getDocs(q);
                return querySnapshot.docs[0].id
              }
            setFinalPrice(finalPrice - deleteItem.price)
            getDocId(deleteItem.id)
            .then((docId) => {

                const ref = doc(db, "users", "6254429205", "basket", docId)
                deleteDoc(ref)
            })
            
        };
    
        
    return (
        <div className={styles.container}>
            <div>Количество товаров: {itemsInfo ? itemsInfo.length : 0}</div>
            {itemsInfo.map((item, index) => {
            const key = item.id || index; 
            return (
                item.link ?
                <div className={styles.basketItem} key={key}>
                    <div className={styles.poizonInfo}>
                        <p>poizon: {item.link}</p>
                        <p>price: {item.price}</p>
                    </div>
                    <button onClick={() => deleteButton(item)}>Удалить из корзины</button>
                </div>
                :
                <div className={styles.basketItem} key={key}>
                    <BasketProductCard key={index} name={item.name} price={item.price} size={item.size} />
                    <button onClick={() => deleteButton(item)}>Удалить из корзины</button>
                </div>
                );
            })}
        <div>{finalPrice ? `Итоговая стоимость: ${finalPrice}` : ''}</div>
        <button onClick={navigateToPurchase} >купить сейчас</button>
        </div>
    )
}

export default BasketDetail