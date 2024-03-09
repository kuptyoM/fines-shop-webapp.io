import React from 'react'
import styles from './Avatar.module.css'


function Avatar() {
    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <img src='https://i.playground.ru/i/pix/716152/image.jpg' className={styles.avatarImg}></img>
            </div>
        </div>
    )
}

export default Avatar