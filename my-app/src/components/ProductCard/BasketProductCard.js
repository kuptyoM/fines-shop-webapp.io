import React from 'react'
import styles from './BasketProductCard.module.css'


function BasketProductCard({ name, price, size }) {

    return (
        <div className={styles.container}>
            {name} 
            <br/> цена:{price}
            <br/> размер: {size}
        </div>
    )
}

export default BasketProductCard