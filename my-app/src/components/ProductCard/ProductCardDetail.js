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
    const [selectedSize, setSelectedSize] = useState('');

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

    console.log(data)
    
    function handleClickBasket() {
        if (selectedSize) {
            addToBasket({
            id: data.id,
            name: data.name,
            price: data.price,
            size: selectedSize,
        })
        }
    }

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
      };

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
        if (selectedSize) {
        navigate('/fines-shop-webapp.io/purchasescreen', {
            state: {
                itemsInfo: [{
                    id: data.id,
                    name: data.name,
                    price: data.price,
                    size: selectedSize,
                }],
                finalPrice: data.price,
            }
        })
        }
    }

    return (
        <div className={styles.container}>
            {data && data.imageUrls && <img src={data.imageUrls[0]} className={styles.productImg} />}
            {data.name} 
            <br/> цена:{data.price}
            <br/> описание: {data.description}
            <select value={selectedSize} onChange={handleSizeChange}>
                <option value="">Выберите размер</option>
                {data.sizes && data.sizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                ))} 
            </select>
            <div>
                <button onClick={handleClickBasket}>корзина</button>
                <button onClick={navigateToPurchase}>купить сейчас</button>
            </div>
        </div>
    )
}

export default ProductCardDetail