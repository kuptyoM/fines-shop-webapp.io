import React, { useState, useEffect } from 'react';
import styles from './Collection.module.css'
import Item from './Item'
import getCollectionItems from '../../../../Database/get_collection_items'


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
            return item.Name.toLowerCase().includes(searchValue.toLowerCase());
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
                        <Item key={index} name={item.Name} photo={item.Photo} price={item.Price} />
                    ))}
                </div>
                </div>
            </div>

    )
}

export default Collection