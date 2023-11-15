import React from 'react'
import styles from './BonusFooter.module.css'
import BonusFooterPlay from './BonusFooterPlay'
import BonusFooterStats from './BonusFooterStats'

function BonusFooter() {
    return (
        <div className={styles.container}>
            <BonusFooterStats />
            <BonusFooterPlay />
        </div>
    )
}

export default BonusFooter