import React, { useEffect, useState } from 'react'
import styles from './TotalCost.module.css'

function TotalCost( { sharedCategory, sharedPriceValue, setFinalPrice} ) {
    const [addedPrice, setAddedPrice] = useState(0);

    const categoryPrice = {
        'Кроссовки': 300,
        'Штаны, джинсы': 400,
        'Худи, зип-худи': 600,
        'Футболки': 100
    };

    useEffect(() => {
        if (categoryPrice.hasOwnProperty(sharedCategory)) {
            setAddedPrice(categoryPrice[sharedCategory]);
        }
    }, [sharedCategory]);

    let cnyCourse = 13.2;

    useEffect(() => {

        const total = Math.round(sharedPriceValue * cnyCourse) + addedPrice;
        setFinalPrice(total); 

    }, [sharedCategory, sharedPriceValue, setFinalPrice]);
    return (
        <div className={styles.container}>
            <h3>Итоговая стоимость</h3>
            <div className={styles.cost}>
                {sharedPriceValue * cnyCourse ? Math.round(sharedPriceValue * cnyCourse) + addedPrice : ''} 
                </div>
        </div>
    )
}

export default TotalCost