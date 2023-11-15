import React from 'react'
import styles from './AvaibilityDetail.module.css'
import ProfitOffers from './ProfitOffers/ProfitOffers'
import Collection from './Searching/Collection'

function AvaibilityDetail() {
    return (
        <div className={styles.container}>
            <ProfitOffers />
            <Collection />
        </div>
    )
}

export default AvaibilityDetail