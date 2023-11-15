import React from 'react'
import styles from './Collection.module.css'
import Searching from './Searching'
import Item from './Item'

function Collection() {
    return (
        <div className={styles.container}>
            <Searching />
            <div className={styles.secondContainer}>
                <div className={styles.collectionContainer}>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                  
                </div>
                <div className={styles.collectionContainer}>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                   
                </div>
            </div>
        </div>
    )
}

export default Collection