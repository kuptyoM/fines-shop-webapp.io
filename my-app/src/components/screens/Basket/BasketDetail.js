import React, { useState } from 'react'
import styles from './BasketDetail.module.css'
import { useTelegram } from '../../../hooks/useTelegram'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'
import ProductCard from '../../ProductCard/ProductCard';
import getItemsId from '../../../Database/get_items_id';
import getItemInfo from '../../../Database/get_item_info';

function BasketDetail() {
    const [itemsId, setItemsId] = useState([]);
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
            getItemsId()
            .then((result) => {
                setItemsId(result)
            })
        }, [])

    
        useEffect(() => {
            const getProductInfo = async () => {
                try {
                let productData = [];
                let price = 0;
                for (let id of itemsId) {
                    const response = await getItemInfo(String(id))
                    price += response.Price
                    productData.push(response)
                }
                setItemsInfo(productData)
                setFinalPrice(price)
            } catch (error) {
                console.error('error', error)
            }
        };
            getProductInfo()
        }, [itemsId])

    return (
        <div className={styles.container}>
            <div>Количество товаров: {itemsId ? itemsId.length : 0}</div>
            {itemsInfo.map((item, index) => (
                <ProductCard key={index} name={item.Name} photo={item.Photo} price={item.Price} id={item.Id}/>
            ))}
        <div>{finalPrice ? `Итоговая стоимость: ${finalPrice}` : ''}</div>
        <div><button>купить сейчас</button></div>
        </div>
    )
}

export default BasketDetail