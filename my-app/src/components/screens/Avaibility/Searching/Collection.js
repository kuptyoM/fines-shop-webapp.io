import React, { useState, useEffect } from 'react';
import styles from './Collection.module.css'
import getCollectionItems from '../../../../Database/get_collection_items'
import ProductCard from '../../../ProductCard/ProductCard';
import { db } from '../../../../Database/firebase';
import { doc, collection, query, where, getDocs, setDoc } from "firebase/firestore";

function Collection() {
    const [collectionItems, setCollectionItems] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [filteredItems, setFilteredItems] = useState([]);


    let collectionArr = [];
    useEffect(() => {
        getCollectionItems(collectionArr)
        .then(() => {
            setCollectionItems(collectionArr);
        })
        .catch((error) => {
            console.error(error);
            });
    }, []); 

    useEffect(() => {
        const filter = collectionItems.filter(item => {
            return item.name.toLowerCase().includes(searchValue.toLowerCase());
        });
        setFilteredItems(filter);
    }, [collectionItems, searchValue]);

    return (
        <div className={styles.container}>
            <div className={styles.searchForm}>
                <input
                    type='text'
                    placeholder='Поиск...'
                    className={styles.search__input}
                    onChange={(event) => setSearchValue(event.target.value)} 
                />
            </div>
            <div className={styles.secondContainer}>
                <div className={styles.collectionContainer}>
                    {filteredItems.map((item, index) => (
                        <ProductCard key={index} name={item.name} photo={item.imageUrls[0]} price={item.price} id={item.id}/>
                    ))}
                </div>
                </div>
            </div>

    )
}

export default Collection