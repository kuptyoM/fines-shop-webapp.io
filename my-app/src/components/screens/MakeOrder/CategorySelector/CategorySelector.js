import React, { useState } from 'react'
import styles from './CategorySelector.module.css'


function CategorySelector( { setSharedCategory } ) {
    const [selectedCategory, setSelectedCategory] = useState(null)

    let categories = ['Кроссовки', 'Штаны, джинсы', 'Худи, зип-худи', 'Футболки']
    
    const handleCategories = (category) => {
        setSelectedCategory(category)
        setSharedCategory(category)
    }

    return (
            <div className={styles.container}>
                <h3>Выберите категорию товара</h3>
                <ul className={styles.categoryList}>
                {
                    categories.map((category, index) => (
                        <li key={index} onClick={() => handleCategories(category)} className={(selectedCategory === category) ? styles.selected : ''}>{category}</li>
                    ))
                }
                </ul>
            </div>
    )
}

export default CategorySelector