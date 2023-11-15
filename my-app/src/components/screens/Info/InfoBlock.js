import React from 'react'
import styles from './InfoBlock.module.css'


function InfoBlock({innerText}) {
    return (
        <div className={styles.container}>
            {innerText}
        </div>
    )
}

export default InfoBlock