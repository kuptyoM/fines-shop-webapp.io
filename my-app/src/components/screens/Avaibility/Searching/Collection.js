import React, { useState, useEffect } from 'react';
import styles from './Collection.module.css'
import getCollectionItems from '../../../../Database/get_collection_items'
import ProductCard from '../../../ProductCard/ProductCard';
import { db } from '../../../../Database/firebase';
import { doc, collection, query, where, getDocs, setDoc, limit, startAfter, orderBy } from "firebase/firestore";

function Collection() {
    const [collectionItems, setCollectionItems] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [filteredItems, setFilteredItems] = useState([]);

    const [lastVisible, setLastVisible] = useState({});
    const [fetching, setFetching] = useState(false)

    useEffect(() => {
        const filter = collectionItems.filter(item => {
            return item.name.toLowerCase().includes(searchValue.toLowerCase());
        });
        setFilteredItems(filter);
    }, [collectionItems, searchValue]);

    async function getFirstData() {
   
            const firstQuery = query(collection(db, "items", "available", "goods"), orderBy('id'), limit(8));
            const querySnapshot = await getDocs(firstQuery);
            const lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
            setLastVisible(lastVisible)
            const newItems = querySnapshot.docs.map(doc => doc.data());
            setCollectionItems([...newItems]);
            
        
    }
   
    async function getNextData() {
        if (!lastVisible) return;

        const nextQuery = query(collection(db, "items", "available", "goods"),
            orderBy('id'), 
            startAfter(lastVisible),
            limit(8));

        const nextQuerySnapshot = await getDocs(nextQuery)

        const newItems = nextQuerySnapshot.docs.map(doc => doc.data());
        setCollectionItems(prevItems => [...prevItems, ...newItems]);

        if (nextQuerySnapshot.docs.length > 0) {
            const lastVisibleDoc = nextQuerySnapshot.docs[nextQuerySnapshot.docs.length - 1];
            setLastVisible(lastVisibleDoc);
        } else {
            setLastVisible(null); 
        }
    }


    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return function () {
            document.removeEventListener('scroll', scrollHandler)
        };

    }, []) 

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    }

    useEffect(() => {
        getFirstData()
        
    }, [])
    
    useEffect(() => {
        if (fetching) {
            getNextData()
            .finally(() => setFetching(false))
        }
    }, [fetching])

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
