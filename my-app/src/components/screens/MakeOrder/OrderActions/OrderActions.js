import React from 'react'
import styles from './OrderActions.module.css'
import BuyNow from './BuyNow'
import AddToBasket from './AddToBasket'
import UseBonuses from './UseBonuses'


function OrderActions() {
    return (
            <div className={styles.container}>
                <BuyNow />
                <AddToBasket />
                <UseBonuses />
            </div>
    )
}

export default OrderActions