import React from 'react'
import styles from './UseBonuses.module.css'


function UseBonuses() {
    return (
            <div className={styles.container}>
                <input type="checkbox" id="bonus" name="bonus"/>
                <label for="bonus">Списать бонусы</label>
            </div>
    )
}

export default UseBonuses