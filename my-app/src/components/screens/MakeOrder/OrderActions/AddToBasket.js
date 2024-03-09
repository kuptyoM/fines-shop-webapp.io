import React from 'react'
import styles from './AddToBasket.module.css'


function AddToBasket() {
    return (
            <div className={styles.container}>
                <button className={styles.myButton}>Добавить в корзину</button>
            </div>
    )
}

export default AddToBasket