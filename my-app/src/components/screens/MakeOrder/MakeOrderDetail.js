import React, { useState, useEffect } from 'react'
import styles from './MakeOrderDetail.module.css'
import CategorySelector from './CategorySelector/CategorySelector'
import СnyPrice from './СnyPrice/СnyPrice'
import TotalCost from './TotalCost/TotalCost'
import { useTelegram } from '../../../hooks/useTelegram'
import { useNavigate } from "react-router-dom";



function MakeOrderDetail() {
    const [sharedCategory, setSharedCategory] = useState('')
    const [sharedPriceValue, setSharedPriceValue] = useState('')
    const [link, setLink] = useState('')
    const [finalPrice, setFinalPrice] = useState(0)
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
      
      const navigateToPurchase = () => {
        if (link) {
        navigate('/fines-shop-webapp.io/purchasescreen', {
            state: {
                itemsInfo: [{Name: `заказ poizon ${link}`}],
                finalPrice: finalPrice,
            }
        })
        };
    }

    
    return (
        <div className={styles.container}>
            <CategorySelector setSharedCategory={setSharedCategory}/>
            <СnyPrice setSharedPriceValue={setSharedPriceValue}/>
            <TotalCost sharedCategory={sharedCategory} sharedPriceValue={sharedPriceValue} setFinalPrice={setFinalPrice}/>
            <h3>Ссылка на товар с POIZON</h3>
            <input
                type='text'
                placeholder='Ссылка на товар'
                className={styles.price__input}
                onChange={(event) => setLink(event.target.value)} 
            >
            </input>
            <button className={styles.myButton} onClick={navigateToPurchase}>Купить сейчас</button>
            {/* <button className={styles.myButton} onClick={handleBasketClick}>Добавить в корзину</button> */}
        </div>
    )
}

export default MakeOrderDetail