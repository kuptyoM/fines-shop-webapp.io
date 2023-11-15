import React from 'react'
import styles from './Avaibility.module.css'
import { Link } from 'react-router-dom';

function Avaibility() {
    return (
        <Link to="/fines-shop-webapp.io/avaibilitydetail" className={styles.container}>
                <div>
                    Наличие
                </div>
            </Link>
    )
}

export default Avaibility