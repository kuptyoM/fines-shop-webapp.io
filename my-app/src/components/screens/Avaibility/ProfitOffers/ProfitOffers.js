import React from 'react'
import styles from './ProfitOffers.module.css'
import Slider from './Slider.js'

function ProfitOffers() {
    return (
        <div className={styles.container}>
            Выгодные предложения
            <Slider />
        </div>
    )
}

export default ProfitOffers