import React, { useEffect, useState } from 'react'
import { useTelegram } from '../../hooks/useTelegram';
import { useNavigate } from "react-router-dom";
import styles from './ProductCardDetail.module.css'
import { useParams } from 'react-router-dom'
import getItemInfo from '../../Database/get_item_info'
import addToBasket from '../../Database/add_to_basket'


function ProductCardDetail() {
    let navigate = useNavigate();
    const {tg} = useTelegram();
    const [data, setData] = useState({})
    let objForData = {}
    const { productId } = useParams()
    useEffect(() => {
        if (productId) {
            getItemInfo(productId, objForData)
            .then((result) => {
                setData(result);
            })
    
        };
    }, [productId])

    function handleClickBasket() {
        addToBasket(Number(productId))
    }

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
        navigate('/fines-shop-webapp.io/purchasescreen', {
            state: {
                itemsInfo: [data],
                finalPrice: data.Price,
            }
        })
    }
    return (
        <div className={styles.container}>
            <img src={data.Photo} className={styles.productImg}></img>
            {data.Name} 
            <br/> цена:{data.Price}
            <br/> описание:
            <div>
                <button onClick={handleClickBasket}>корзина</button>
                <button onClick={navigateToPurchase}>купить сейчас</button>
            </div>
        </div>
    )
}

export default ProductCardDetail