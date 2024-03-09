import React, { useEffect, useState } from 'react'
import styles from './TotalCost.module.css'

function TotalCost( { sharedCategory, sharedPriceValue } ) {
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
    return (
        <div className={styles.container}>
            <h3>Итоговая стоимость</h3>
            <div className={styles.cost}>
                {sharedPriceValue * 13.2 ? Math.round(sharedPriceValue * cnyCourse) + addedPrice : ''} 
                </div>
        </div>
    )
}

export default TotalCost