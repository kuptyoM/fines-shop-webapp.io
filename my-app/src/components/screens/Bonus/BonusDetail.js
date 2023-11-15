import React from 'react'
import styles from './BonusDetail.module.css'
import BonusWheel from './BonusWheel'
import BonusFooter from './BonusFooter/BonusFooter'

function BonusDetail() {
    return (
        <div className={styles.container}>
            <div className={styles.mainContainer}>
                <BonusWheel />
                <BonusFooter />
            </div>
            <div className={styles.secondContainer}>
                Получить попытку
            </div>
        </div>
    )
}

export default BonusDetail