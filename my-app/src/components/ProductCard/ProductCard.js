import React from 'react'
import styles from './ProductCard.module.css'
import { Link } from 'react-router-dom';

function ProductCard({photo, name, price, id}) {
    return(
        <Link to={`/fines-shop-webapp.io/productdetail/${id}`} className={styles.container}>
            <img src={photo} className={styles.collectionImg}></img>
            {name} 
            <br/> цена:{price}
            <div>
                <button>Подробнее</button>
            </div>
            
        </Link>
    )
}

export default ProductCard