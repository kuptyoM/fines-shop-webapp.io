import React from 'react'
import styles from './Item.module.css'


function Item({photo, name, price}) {
    return (
        <div className={styles.container}>
            <img src={photo} className={styles.collectionImg}></img>
            {name} цена:{price}
        </div>
    )
}

export default Item