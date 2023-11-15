import React from 'react'
import styles from './InfoDetail.module.css'
import InfoBlock from './InfoBlock'

function InfoDetail() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.title}>
                <h1>Руководства</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.secondContainer}>
                    <InfoBlock innerText={'Как рассчитать стоимость'}/>
                    <InfoBlock />
                    <InfoBlock />
                    <InfoBlock />
                    <InfoBlock />
                </div>
                <div className={styles.secondContainer}>
                    <InfoBlock innerText={'Как подобрать размер'}/>
                    <InfoBlock />
                    <InfoBlock />
                    <InfoBlock />
                    <InfoBlock />
                </div>
            </div>
        </div>
    )
}

export default InfoDetail