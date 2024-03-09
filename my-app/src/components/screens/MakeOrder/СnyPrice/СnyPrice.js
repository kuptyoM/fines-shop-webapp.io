import React, { useEffect, useState } from 'react'
import styles from './СnyPrice.module.css'

function СnyPrice( { setSharedPriceValue } ) {
    const [priceValue, setPriceValue] = useState('')

    useEffect(() => {
        setSharedPriceValue(priceValue)
    }, [priceValue])

    return (
        <div className={styles.container}>
            <h3>Укажите цену товара в юанях</h3>
            <input
                type='text'
                placeholder='Стоимость'
                className={styles.price__input}
                onChange={(event) => setPriceValue(event.target.value)} 
            >

            </input>
        </div>
    )
}

export default СnyPrice